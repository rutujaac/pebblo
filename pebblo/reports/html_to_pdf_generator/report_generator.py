"""
Report generator and supporting functions
"""

import datetime
import time
from decimal import Decimal

import jinja2

from pebblo.reports.enums.report_libraries import library_function_mapping
from pebblo.reports.libs.logger import logger


def date_formatter(date_obj):
    """Converts date string to object and returns formatted string for date (D M Y, H:M)"""
    return date_obj.strftime("%d %B %Y , %H:%M") + " " + time.localtime().tm_zone


def get_file_size(size):
    """Returns file size in KB, MB, GB as applicable"""
    power = 2**10
    n = 0
    power_labels = {0: "Bytes", 1: "KB", 2: "MB", 3: "GB", 4: "TB"}
    while size > power:
        size /= power
        n += 1
    size_num = Decimal(str(size))
    size_str = str(round(size_num, 2)) + " " + power_labels.get(n, "")
    return size_str


def convert_html_to_pdf(data, output_path, template_name, search_path, renderer):
    """Convert HTML Template to PDF by embedding JSON data"""
    try:
        template_loader = jinja2.FileSystemLoader(searchpath=search_path)
        template_env = jinja2.Environment(loader=template_loader)
        template = template_env.get_template(template_name)
        current_date = (
            datetime.datetime.now().strftime("%B %d, %Y")
            + " "
            + time.localtime().tm_zone
        )
        load_history_items = []
        findings_details = []
        datastores = []
        findings_count = 0
        if "dataSources" in data and data["dataSources"]:
            datastores = data["dataSources"][0]
            if "findingsDetails" in datastores:
                findings_details = datastores["findingsDetails"]
        if "loadHistory" in data and "history" in data["loadHistory"]:
            load_history_items = data["loadHistory"]["history"]
        if "reportSummary" in data:
            findings_count = data["reportSummary"]["findings"]
        source_html = template.render(
            data=data,
            date=current_date,
            datastores=datastores,
            findingDetails=findings_details,
            loadHistoryItemsToDisplay=load_history_items,
            dateFormatter=date_formatter,
            getFileSize=get_file_size,
            findings_count=findings_count,
        )
        pdf_converter = library_function_mapping[renderer]
        status, result = pdf_converter(source_html, output_path, search_path)
        return status, result
    except Exception as e:
        logger.error(e)
        return False, ""
