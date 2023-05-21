"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[7423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5335:(e,t,n)=>{n.d(t,{ZP:()=>o});var r=n(7462),i=(n(7294),n(3905));const a={toc:[]};function o(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Deprecated: Vert.x-based Telestion",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Please note that the application and development of backend services using Vert.x in Telestion are deprecated. In the future, Telestion backend services will be developed using TypeScript and Deno, or through custom integrations with other languages."),(0,i.kt)("p",{parentName:"admonition"},"While there may be a compatibility layer for Vert.x services in the future, its availability is not guaranteed."),(0,i.kt)("p",{parentName:"admonition"},"For developing backend services, please refer to the (Work-in-Progress) documentation available here: ",(0,i.kt)("a",{parentName:"p",href:"https://pklaschka.github.io/telestion-docs-new/"},"https://pklaschka.github.io/telestion-docs-new/"),". Once the documentation is complete, it will be moved to the main Telestion documentation."),(0,i.kt)("p",{parentName:"admonition"},"Additional Information:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"NATS will be used as the distributed message bus/message broker for Telestion."),(0,i.kt)("li",{parentName:"ul"},"NATS' integrated authentication and authorization features will handle authentication and authorization for Ground Station operators, providing a single source of truth."),(0,i.kt)("li",{parentName:"ul"},"The event bus bridge will no longer be featured, and clients will be directly connected to the NATS server.")),(0,i.kt)("p",{parentName:"admonition"},"To establish a more technology-independent terminology, the Telestion project will modify the naming conventions as follows:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The NATS server will be referred to as the message broker, message bus, or NATS server interchangeably."),(0,i.kt)("li",{parentName:"ul"},"Components that act as services without an attached user interface, will be referred to as services or backend services collectively."),(0,i.kt)("li",{parentName:"ul"},'Components that provide a user interface, formerly known as "clients," will be referred to as frontends. In most cases, the frontend will authenticate to the message broker as the user, while backend services will act on their own behalf.')),(0,i.kt)("p",{parentName:"admonition"},'These changes aim to provide clearer and more consistent terminology, accounting for the possibility of components having both service and frontend functionalities. Additionally, the use of "client" for frontends will be replaced to avoid potential confusion.'),(0,i.kt)("p",{parentName:"admonition"},"We recommend using the NATS client libraries recommended by NATS itself, unless there are no suitable options available for the targeted language/environment. We will not develop our own client libraries unless there is a lack of suitable options or significant advantages justify the effort."),(0,i.kt)("p",{parentName:"admonition"},"While Deno/TypeScript is the recommended choice for backend services, its use is not mandatory. Developers will be encouraged to use Deno/TypeScript where appropriate, but other options will still be supported for specific services. Comprehensive documentation and resources will be provided for writing and deploying Deno-based backend services in TypeScript."),(0,i.kt)("p",{parentName:"admonition"},"Please consider these changes and updates as you continue with Telestion development.")))}o.isMDXComponent=!0},4966:(e,t,n)=>{n.d(t,{kN:()=>s,rj:()=>i,Ee:()=>m,s3:()=>o});var r=n(7294);function i(e){let{cols:t=2,children:n}=e;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,columnGap:"1em"}},n)}var a=n(9960);function o(e){let{children:t,to:n}=e;return r.createElement(a.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}const l=()=>r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})));function s(e){let{children:t,file:n}=e;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(l,null)," ",t))}var c=n(7462),p=n(4996),d=n(6010);function m(e){let{src:t,invertible:n=!1,center:i=!1,alt:o="",...l}=e;const s=t.startsWith("/static")?t.substr(7):t,m=(0,p.Z)(s);return r.createElement(r.Fragment,null,r.createElement(a.Z,{to:s,style:{display:"none"}},"Link to ",o),r.createElement("img",(0,c.Z)({src:m,className:(0,d.Z)(n&&"invertible",i&&"center"),alt:o},l)))}n(5335)},5985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905)),a=n(4966);const o={title:"Verticle",description:"The building blocks of the Vert.x framework and Telestion Application"},l=void 0,s={unversionedId:"application/concepts/verticle",id:"application/concepts/verticle",title:"Verticle",description:"The building blocks of the Vert.x framework and Telestion Application",source:"@site/docs/application/concepts/110-verticle.mdx",sourceDirName:"application/concepts",slug:"/application/concepts/verticle",permalink:"/application/concepts/verticle",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/application/concepts/110-verticle.mdx",tags:[],version:"current",sidebarPosition:110,frontMatter:{title:"Verticle",description:"The building blocks of the Vert.x framework and Telestion Application"},sidebar:"application",previous:{title:"Vert.x",permalink:"/application/concepts/vertx"},next:{title:"Event Loop",permalink:"/application/concepts/event-loop"}},c={},p=[{value:"Basic mechanism",id:"basic-mechanism",level:2},{value:"Example Code",id:"example-code",level:2},{value:"See also",id:"see-also",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Verticles are the "building blocks," so to speak, of the\n',(0,i.kt)("a",{parentName:"p",href:"/application/concepts/vertx/"},"Vert.x framework"),"."),(0,i.kt)("h2",{id:"basic-mechanism"},"Basic mechanism"),(0,i.kt)("p",null,"Verticles are, essentially, modular blocks of code that fulfill a specific\nfunction."),(0,i.kt)("p",null,"They get triggered by either something external or another Verticle and can, in\nturn, also trigger other Verticles."),(0,i.kt)(a.Ee,{src:"/static/img/drawio-diagrams/vertx/verticle.drawio.svg",invertible:!0,mdxType:"Image"}),(0,i.kt)("p",null,"Verticles communicate with each other using messages on the so-called\n",(0,i.kt)("a",{parentName:"p",href:"/common-concepts/event-bus"},"Event Bus"),"."),(0,i.kt)("p",null,"You can think about Verticles as processes in a data flow diagram:"),(0,i.kt)(a.Ee,{src:"/static/img/drawio-diagrams/vertx/data-pipeline.drawio.svg",invertible:!0,mdxType:"Image"}),(0,i.kt)("p",null,"Here, processes are Verticles and the data between them are messages on the\n",(0,i.kt)("a",{parentName:"p",href:"/common-concepts/event-bus"},"Event Bus"),"."),(0,i.kt)("h2",{id:"example-code"},"Example Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import de.wuespace.telestion.api.verticle.NoConfiguration;\nimport de.wuespace.telestion.api.verticle.TelestionVerticle;\n\npublic class MyVerticle extends TelestionVerticle<NoConfiguration> {\n    // Called when Verticle is deployed\n    @Override\n    public void onStart() {\n    }\n\n    // Optional - called when Verticle is undeployed\n    @Override\n    public void onStop() {\n    }\n}\n")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)(a.s3,{to:"/application/tutorials/writing-a-verticle/",mdxType:"Reference"},"Tutorial: Writing a verticle"))}m.isMDXComponent=!0}}]);