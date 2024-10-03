"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4665],{3457:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var o=i(4848),l=i(8453);const s={},r="Installation",t={id:"installation",title:"Installation",description:"Note",source:"@site/versioned_docs/version-0.1.19/installation.md",sourceDirName:".",slug:"/installation",permalink:"/pebblo/0.1.19/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/daxa-ai/pebblo/tree/main/docs/gh_pages/versioned_docs/version-0.1.19/installation.md",tags:[],version:"0.1.19",frontMatter:{},sidebar:"sidebar",previous:{title:"Overview",permalink:"/pebblo/0.1.19/"},next:{title:"Setting up development environment",permalink:"/pebblo/0.1.19/development"}},a={},c=[{value:"Using <code>pip</code>",id:"using-pip",level:2},{value:"Run Pebblo server",id:"run-pebblo-server",level:3},{value:"Configuration flags (Optional)",id:"configuration-flags-optional",level:4},{value:"Using Docker",id:"using-docker",level:2},{value:"Using Docker with custom configuration",id:"using-docker-with-custom-configuration",level:2},{value:"Using Kubernetes",id:"using-kubernetes",level:2},{value:"Install weasyprint library",id:"install-weasyprint-library",level:3},{value:"Install Pango library",id:"install-pango-library",level:3},{value:"Mac OSX",id:"mac-osx",level:4},{value:"Linux (debian/ubuntu)",id:"linux-debianubuntu",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"}),(0,o.jsx)(n.br,{}),"\n","Please note that Pebblo requires Python version 3.9 or above to function optimally."]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"using-pip",children:["Using ",(0,o.jsx)(n.code,{children:"pip"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pip install pebblo --extra-index-url https://packages.daxa.ai/simple/\n"})}),"\n",(0,o.jsx)(n.h3,{id:"run-pebblo-server",children:"Run Pebblo server"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"$ pebblo\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Pebblo server now listens to ",(0,o.jsx)(n.code,{children:"localhost:8000"})," to accept Gen-AI application data snippets for inspection and reporting.\nPebblo UI interface would be available on ",(0,o.jsx)(n.code,{children:"http://localhost:8000/pebblo"})]}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/pebblo/0.1.19/troubleshooting",children:"troubleshooting"})," for any issues."]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-flags-optional",children:"Configuration flags (Optional)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--config <file>"}),": Specifies a custom configuration file in yaml format."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pebblo [--config /path/to/config.yaml]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"using-docker",children:"Using Docker"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run \\\n    -v /path/to/pebblo_reports:/opt/.pebblo \\\n    -p 8000:8000 docker.daxa.ai/daxaai/pebblo:latest\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Local UI can be accessed by pointing the browser to ",(0,o.jsx)(n.code,{children:"https://localhost:8000"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To access PDF reports in the host machine outside the docker container, use the above command with mounted volumes for the report folder. By default reports are in cached dir i.e ",(0,o.jsx)(n.code,{children:"/opt/.pebblo"}),". If custom configuration file is passed then this value should be as per the ",(0,o.jsx)(n.code,{children:"cacheDir"})," from ",(0,o.jsx)(n.code,{children:"config.yaml"})]}),"\n",(0,o.jsx)(n.h2,{id:"using-docker-with-custom-configuration",children:"Using Docker with custom configuration"}),"\n",(0,o.jsx)(n.p,{children:"To pass a specific configuration file and to access PDF reports iin the host machine outside the docker container, use the following command with mounted volumes for config.yaml and the report folder."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run \\\n    -v /path/to/pebblo_reports:/opt/.pebblo \\\n    -v /path/to/pebblo/config.yaml:/opt/pebblo/config/config.yaml \\\n    -p 8000:8000 docker.daxa.ai/daxaai/pebblo:latest \\\n        --config /opt/pebblo/config/config.yaml\n"})}),"\n",(0,o.jsx)(n.h2,{id:"using-kubernetes",children:"Using Kubernetes"}),"\n",(0,o.jsx)(n.p,{children:"Apply below k8s manifiest files in sequence to run the pebblo server on k8s cluster."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f deploy/k8s-deploy/config.yaml\n\nkubectl apply -f deploy/k8s-deploy/pvc.yaml\n\nkubectl apply -f deploy/k8s-deploy/deploy.yaml\n\nkubectl apply -f deploy/k8s-deploy/service.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"kubectl logs <pod_name>"})," to get the logs from pebblo server."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note-"})," Setup the nginx ingress controller to expose the pebblo server."]}),"\n",(0,o.jsx)(n.h1,{id:"enhanced-pdf-reporting",children:"Enhanced PDF reporting"}),"\n",(0,o.jsx)(n.p,{children:"Pebblo supports two PDF rendering options:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"xhtml2pdf"})," (default)"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"weasyprint"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This is selected using ",(0,o.jsx)(n.code,{children:"renderer"})," setting in the config.yaml"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"weasyprint"})," produces an enhanced visual look and feel. This renderer option requires the following additional prerequisites. This is needed for PDF report generation,"]}),"\n",(0,o.jsx)(n.h3,{id:"install-weasyprint-library",children:"Install weasyprint library"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"pip install weasyprint\n"})}),"\n",(0,o.jsx)(n.h3,{id:"install-pango-library",children:"Install Pango library"}),"\n",(0,o.jsx)(n.h4,{id:"mac-osx",children:"Mac OSX"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"brew install pango\n"})}),"\n",(0,o.jsx)(n.h4,{id:"linux-debianubuntu",children:"Linux (debian/ubuntu)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"sudo apt-get install libpango-1.0-0 libpangoft2-1.0-0\n"})}),"\n",(0,o.jsx)("img",{referrerpolicy:"no-referrer-when-downgrade",src:"https://static.scarf.sh/a.png?x-pxid=ebe2593f-57f9-4e35-9b17-da30daa6c509"})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>t});var o=i(6540);const l={},s=o.createContext(l);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);