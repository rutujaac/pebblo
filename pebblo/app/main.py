from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn
from pathlib import Path


app = FastAPI()
templates = Jinja2Templates(directory="ui-templates")

app.mount(
    "/app/ui-templates",
    StaticFiles(directory=Path(__file__).parent.parent.absolute()/"app/ui-templates"),
    name="static",
)

data = {
   "message":"Hello Nitin!!" 
}

@app.get("/", response_class=HTMLResponse)
async def hello(request: Request):
   return templates.TemplateResponse("test.html", {"request": request, "data":data})   


if(__name__) == '__main__':
        uvicorn.run(
        "app:app",
        host    = "0.0.0.0",
        port    = 8036, 
        reload  = True
)