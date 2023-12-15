"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[2739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5335:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(7462),o=(n(7294),n(3905));const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Deprecated: Vert.x-based Telestion",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Please note that the application and development of backend services using\nVert.x in Telestion are deprecated. In the future, Telestion backend services\nwill be developed using TypeScript and Deno, or through custom integrations with\nother languages."),(0,o.kt)("p",{parentName:"admonition"},"While there may be a compatibility layer for Vert.x services in the future, its\navailability is not guaranteed."),(0,o.kt)("p",{parentName:"admonition"},"For developing backend services, please refer to the (Work-in-Progress)\ndocumentation available here:\n",(0,o.kt)("a",{parentName:"p",href:"https://pklaschka.github.io/telestion-docs-new/"},"https://pklaschka.github.io/telestion-docs-new/"),".\nOnce the documentation is complete, it will be moved to the main Telestion\ndocumentation."),(0,o.kt)("p",{parentName:"admonition"},"Additional Information:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"NATS will be used as the distributed message bus/message broker for Telestion."),(0,o.kt)("li",{parentName:"ul"},"NATS' integrated authentication and authorization features will handle\nauthentication and authorization for Ground Station operators, providing a\nsingle source of truth."),(0,o.kt)("li",{parentName:"ul"},"The event bus bridge will no longer be featured, and clients will be directly\nconnected to the NATS server.")),(0,o.kt)("p",{parentName:"admonition"},"To establish a more technology-independent terminology, the Telestion project\nwill modify the naming conventions as follows:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The NATS server will be referred to as the message broker, message bus, or\nNATS server interchangeably."),(0,o.kt)("li",{parentName:"ul"},"Components that act as services without an attached user interface, will be\nreferred to as services or backend services collectively."),(0,o.kt)("li",{parentName:"ul"},'Components that provide a user interface, formerly known as "clients," will be\nreferred to as frontends. In most cases, the frontend will authenticate to the\nmessage broker as the user, while backend services will act on their own\nbehalf.')),(0,o.kt)("p",{parentName:"admonition"},'These changes aim to provide clearer and more consistent terminology, accounting\nfor the possibility of components having both service and frontend\nfunctionalities. Additionally, the use of "client" for frontends will be\nreplaced to avoid potential confusion.'),(0,o.kt)("p",{parentName:"admonition"},"We recommend using the NATS client libraries recommended by NATS itself, unless\nthere are no suitable options available for the targeted language/environment.\nWe will not develop our own client libraries unless there is a lack of suitable\noptions or significant advantages justify the effort."),(0,o.kt)("p",{parentName:"admonition"},"While Deno/TypeScript is the recommended choice for backend services, its use is\nnot mandatory. Developers will be encouraged to use Deno/TypeScript where\nappropriate, but other options will still be supported for specific services.\nComprehensive documentation and resources will be provided for writing and\ndeploying Deno-based backend services in TypeScript."),(0,o.kt)("p",{parentName:"admonition"},"Please consider these changes and updates as you continue with Telestion\ndevelopment.")))}i.isMDXComponent=!0},4966:(e,t,n)=>{n.d(t,{kN:()=>s,rj:()=>o,Ee:()=>d,s3:()=>i});var a=n(7294);function o(e){let{cols:t=2,children:n}=e;return a.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,columnGap:"1em"}},n)}var r=n(9960);function i(e){let{children:t,to:n}=e;return a.createElement(r.Z,{to:n,className:"block-link"},a.createElement("span",null,t," \xbb"),a.createElement("span",null,n))}const l=()=>a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},a.createElement("defs",null,a.createElement("style",null,".a{clip-path:url(#b);}"),a.createElement("clipPath",{id:"b"},a.createElement("rect",{width:24,height:24}))),a.createElement("g",{id:"a",className:"a"},a.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})));function s(e){let{children:t,file:n}=e;return a.createElement("a",{className:"block-link",download:!0,href:n},a.createElement("span",null,a.createElement(l,null)," ",t))}var c=n(7462),p=n(4996),m=n(6010);function d(e){let{src:t,invertible:n=!1,center:o=!1,alt:i="",...l}=e;const s=t.startsWith("/static")?t.substr(7):t,d=(0,p.Z)(s);return a.createElement(a.Fragment,null,a.createElement(r.Z,{to:s,style:{display:"none"}},"Link to ",i),a.createElement("img",(0,c.Z)({src:d,className:(0,m.Z)(n&&"invertible",o&&"center"),alt:i},l)))}n(5335)},948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(7462),o=(n(7294),n(3905)),r=n(4966),i=n(5335);const l={title:"Application",description:"The Java-based backend for the Telestion Ecosystem"},s=void 0,c={unversionedId:"common-concepts/application",id:"common-concepts/application",title:"Application",description:"The Java-based backend for the Telestion Ecosystem",source:"@site/docs/common-concepts/application.mdx",sourceDirName:"common-concepts",slug:"/common-concepts/application",permalink:"/common-concepts/application",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/common-concepts/application.mdx",tags:[],version:"current",frontMatter:{title:"Application",description:"The Java-based backend for the Telestion Ecosystem"},sidebar:"docs",previous:{title:"Common Concepts",permalink:"/common-concepts"},next:{title:"Client",permalink:"/common-concepts/client"}},p={},m=[{value:"Verticles",id:"verticles",level:2},{value:"See also",id:"see-also",level:2}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.ZP,{mdxType:"ApplicationDeprecationWarning"}),(0,o.kt)("p",null,"The Application is a Java-based software (using the Vert.x framework)\nresponsible for all the backend work within a Telestion project. It communicates\nwith the various mission I/O devices, processes the data (for example, saving\ntelemetry to the database), and communicates with the Client."),(0,o.kt)("h2",{id:"verticles"},"Verticles"),(0,o.kt)("p",null,"Verticles are the building blocks of the Application. As a mental model, you can\ncompare them to ",(0,o.kt)("em",{parentName:"p"},"mini computers")," communicating with each other in a network and\nreacting to each other's messages."),(0,o.kt)("p",null,"Verticles should perform small, modular/atomic tasks so that the combination of\nmore than one Verticle creates a data pipeline. Having Verticles do specific\ntasks. These smaller tasks are than much easier to develop. A resulting data\npipeline could, then, look something like this (where processes are Verticles):"),(0,o.kt)(r.Ee,{invertible:!0,src:"/static/img/drawio-diagrams/vertx/data-pipeline.drawio.svg",mdxType:"Image"}),(0,o.kt)(r.s3,{to:"/application/concepts/verticle/",mdxType:"Reference"},"Verticles for Java / Application developers"),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)(r.s3,{to:"/application/",mdxType:"Reference"},"Application Development Documentation"))}u.isMDXComponent=!0}}]);