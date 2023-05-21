"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[4078],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5335:(e,t,n)=>{n.d(t,{ZP:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={toc:[]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Deprecated: Vert.x-based Telestion",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Please note that the application and development of backend services using\nVert.x in Telestion are deprecated. In the future, Telestion backend services\nwill be developed using TypeScript and Deno, or through custom integrations with\nother languages."),(0,a.kt)("p",{parentName:"admonition"},"While there may be a compatibility layer for Vert.x services in the future, its\navailability is not guaranteed."),(0,a.kt)("p",{parentName:"admonition"},"For developing backend services, please refer to the (Work-in-Progress)\ndocumentation available here:\n",(0,a.kt)("a",{parentName:"p",href:"https://pklaschka.github.io/telestion-docs-new/"},"https://pklaschka.github.io/telestion-docs-new/"),".\nOnce the documentation is complete, it will be moved to the main Telestion\ndocumentation."),(0,a.kt)("p",{parentName:"admonition"},"Additional Information:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"NATS will be used as the distributed message bus/message broker for Telestion."),(0,a.kt)("li",{parentName:"ul"},"NATS' integrated authentication and authorization features will handle\nauthentication and authorization for Ground Station operators, providing a\nsingle source of truth."),(0,a.kt)("li",{parentName:"ul"},"The event bus bridge will no longer be featured, and clients will be directly\nconnected to the NATS server.")),(0,a.kt)("p",{parentName:"admonition"},"To establish a more technology-independent terminology, the Telestion project\nwill modify the naming conventions as follows:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The NATS server will be referred to as the message broker, message bus, or\nNATS server interchangeably."),(0,a.kt)("li",{parentName:"ul"},"Components that act as services without an attached user interface, will be\nreferred to as services or backend services collectively."),(0,a.kt)("li",{parentName:"ul"},'Components that provide a user interface, formerly known as "clients," will be\nreferred to as frontends. In most cases, the frontend will authenticate to the\nmessage broker as the user, while backend services will act on their own\nbehalf.')),(0,a.kt)("p",{parentName:"admonition"},'These changes aim to provide clearer and more consistent terminology, accounting\nfor the possibility of components having both service and frontend\nfunctionalities. Additionally, the use of "client" for frontends will be\nreplaced to avoid potential confusion.'),(0,a.kt)("p",{parentName:"admonition"},"We recommend using the NATS client libraries recommended by NATS itself, unless\nthere are no suitable options available for the targeted language/environment.\nWe will not develop our own client libraries unless there is a lack of suitable\noptions or significant advantages justify the effort."),(0,a.kt)("p",{parentName:"admonition"},"While Deno/TypeScript is the recommended choice for backend services, its use is\nnot mandatory. Developers will be encouraged to use Deno/TypeScript where\nappropriate, but other options will still be supported for specific services.\nComprehensive documentation and resources will be provided for writing and\ndeploying Deno-based backend services in TypeScript."),(0,a.kt)("p",{parentName:"admonition"},"Please consider these changes and updates as you continue with Telestion\ndevelopment.")))}o.isMDXComponent=!0},4966:(e,t,n)=>{n.d(t,{kN:()=>s,rj:()=>a,Ee:()=>m,s3:()=>o});var r=n(7294);function a(e){let{cols:t=2,children:n}=e;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,columnGap:"1em"}},n)}var i=n(9960);function o(e){let{children:t,to:n}=e;return r.createElement(i.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}const l=()=>r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})));function s(e){let{children:t,file:n}=e;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(l,null)," ",t))}var c=n(7462),p=n(4996),d=n(6010);function m(e){let{src:t,invertible:n=!1,center:a=!1,alt:o="",...l}=e;const s=t.startsWith("/static")?t.substr(7):t,m=(0,p.Z)(s);return r.createElement(r.Fragment,null,r.createElement(i.Z,{to:s,style:{display:"none"}},"Link to ",o),r.createElement("img",(0,c.Z)({src:m,className:(0,d.Z)(n&&"invertible",a&&"center"),alt:o},l)))}n(5335)},5123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),i=n(4966);const o={title:"Vert.x"},l="Vert.x",s={unversionedId:"application/concepts/vertx",id:"application/concepts/vertx",title:"Vert.x",description:"Eclipse Vert.x is a reactive, modular Java framework.",source:"@site/docs/application/concepts/100-vertx.mdx",sourceDirName:"application/concepts",slug:"/application/concepts/vertx",permalink:"/application/concepts/vertx",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/application/concepts/100-vertx.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Vert.x"},sidebar:"application",previous:{title:"Java Virtual Machine (JVM)",permalink:"/application/concepts/jvm"},next:{title:"Verticle",permalink:"/application/concepts/verticle"}},c={},p=[{value:"See also",id:"see-also",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vertx"},"Vert.x"),(0,a.kt)("p",null,"Eclipse Vert.x is a reactive, modular Java framework."),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)(i.s3,{to:"/application/concepts/verticle/",mdxType:"Reference"},"Verticles"),(0,a.kt)(i.s3,{to:"https://www.vertx.io",mdxType:"Reference"},"Vert.x Website"))}m.isMDXComponent=!0}}]);