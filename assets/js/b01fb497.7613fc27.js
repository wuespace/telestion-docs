"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[7089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5335:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(7462),o=(n(7294),n(3905));const i={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Deprecated: Vert.x-based Telestion",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Please note that the application and development of backend services using\nVert.x in Telestion are deprecated. In the future, Telestion backend services\nwill be developed using TypeScript and Deno, or through custom integrations with\nother languages."),(0,o.kt)("p",{parentName:"admonition"},"While there may be a compatibility layer for Vert.x services in the future, its\navailability is not guaranteed."),(0,o.kt)("p",{parentName:"admonition"},"For developing backend services, please refer to the (Work-in-Progress)\ndocumentation available here:\n",(0,o.kt)("a",{parentName:"p",href:"https://pklaschka.github.io/telestion-docs-new/"},"https://pklaschka.github.io/telestion-docs-new/"),".\nOnce the documentation is complete, it will be moved to the main Telestion\ndocumentation."),(0,o.kt)("p",{parentName:"admonition"},"Additional Information:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"NATS will be used as the distributed message bus/message broker for Telestion."),(0,o.kt)("li",{parentName:"ul"},"NATS' integrated authentication and authorization features will handle\nauthentication and authorization for Ground Station operators, providing a\nsingle source of truth."),(0,o.kt)("li",{parentName:"ul"},"The event bus bridge will no longer be featured, and clients will be directly\nconnected to the NATS server.")),(0,o.kt)("p",{parentName:"admonition"},"To establish a more technology-independent terminology, the Telestion project\nwill modify the naming conventions as follows:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The NATS server will be referred to as the message broker, message bus, or\nNATS server interchangeably."),(0,o.kt)("li",{parentName:"ul"},"Components that act as services without an attached user interface, will be\nreferred to as services or backend services collectively."),(0,o.kt)("li",{parentName:"ul"},'Components that provide a user interface, formerly known as "clients," will be\nreferred to as frontends. In most cases, the frontend will authenticate to the\nmessage broker as the user, while backend services will act on their own\nbehalf.')),(0,o.kt)("p",{parentName:"admonition"},'These changes aim to provide clearer and more consistent terminology, accounting\nfor the possibility of components having both service and frontend\nfunctionalities. Additionally, the use of "client" for frontends will be\nreplaced to avoid potential confusion.'),(0,o.kt)("p",{parentName:"admonition"},"We recommend using the NATS client libraries recommended by NATS itself, unless\nthere are no suitable options available for the targeted language/environment.\nWe will not develop our own client libraries unless there is a lack of suitable\noptions or significant advantages justify the effort."),(0,o.kt)("p",{parentName:"admonition"},"While Deno/TypeScript is the recommended choice for backend services, its use is\nnot mandatory. Developers will be encouraged to use Deno/TypeScript where\nappropriate, but other options will still be supported for specific services.\nComprehensive documentation and resources will be provided for writing and\ndeploying Deno-based backend services in TypeScript."),(0,o.kt)("p",{parentName:"admonition"},"Please consider these changes and updates as you continue with Telestion\ndevelopment.")))}r.isMDXComponent=!0},4966:(e,t,n)=>{n.d(t,{kN:()=>l,rj:()=>o,Ee:()=>m,s3:()=>r});var a=n(7294);function o(e){let{cols:t=2,children:n}=e;return a.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,columnGap:"1em"}},n)}var i=n(9960);function r(e){let{children:t,to:n}=e;return a.createElement(i.Z,{to:n,className:"block-link"},a.createElement("span",null,t," \xbb"),a.createElement("span",null,n))}const s=()=>a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},a.createElement("defs",null,a.createElement("style",null,".a{clip-path:url(#b);}"),a.createElement("clipPath",{id:"b"},a.createElement("rect",{width:24,height:24}))),a.createElement("g",{id:"a",className:"a"},a.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})));function l(e){let{children:t,file:n}=e;return a.createElement("a",{className:"block-link",download:!0,href:n},a.createElement("span",null,a.createElement(s,null)," ",t))}var c=n(7462),p=n(4996),d=n(6010);function m(e){let{src:t,invertible:n=!1,center:o=!1,alt:r="",...s}=e;const l=t.startsWith("/static")?t.substr(7):t,m=(0,p.Z)(l);return a.createElement(a.Fragment,null,a.createElement(i.Z,{to:l,style:{display:"none"}},"Link to ",r),a.createElement("img",(0,c.Z)({src:m,className:(0,d.Z)(n&&"invertible",o&&"center"),alt:r},s)))}n(5335)},3613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),i=n(4966),r=n(5335);const s={title:"Event Bus",description:'The "nervous system" of the Telestion ecosystem through which all components communicate'},l=void 0,c={unversionedId:"common-concepts/event-bus",id:"common-concepts/event-bus",title:"Event Bus",description:'The "nervous system" of the Telestion ecosystem through which all components communicate',source:"@site/docs/common-concepts/event-bus.mdx",sourceDirName:"common-concepts",slug:"/common-concepts/event-bus",permalink:"/common-concepts/event-bus",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/common-concepts/event-bus.mdx",tags:[],version:"current",frontMatter:{title:"Event Bus",description:'The "nervous system" of the Telestion ecosystem through which all components communicate'},sidebar:"docs",previous:{title:"Client",permalink:"/common-concepts/client"}},p={},d=[{value:"Video version",id:"video-version",level:2},{value:"Messages",id:"messages",level:2},{value:"Channels and Addresses",id:"channels-and-addresses",level:2},{value:"Data Pipeline",id:"data-pipeline",level:2},{value:"Requests",id:"requests",level:2},{value:"Event Bus Bridge",id:"event-bus-bridge",level:2},{value:"Setting up the Event Bus Bridge in the Application",id:"setting-up-the-event-bus-bridge-in-the-application",level:3},{value:"See also",id:"see-also",level:2}],m={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.ZP,{mdxType:"ApplicationDeprecationWarning"}),(0,o.kt)("p",null,"The Event Bus is, basically, the nervous system of the Telestion Ecosystem. The\necosystem uses the Event Bus for the communication between its various\ncomponents."),(0,o.kt)("h2",{id:"video-version"},"Video version"),(0,o.kt)("p",null,"You can find a video version of this concept's explanation here:"),(0,o.kt)(i.s3,{to:"https://www.youtube.com/watch?v=X92A77OdEg0",mdxType:"Reference"},"Event Bus | Telestion Concepts (Video)"),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("p",null,"At the core of the Event Bus, there are so-called ",(0,o.kt)("em",{parentName:"p"},"Messages"),". Messages are data\npackets that you can send to a specific channel. Then, all components monitoring\nthat channel receive you message."),(0,o.kt)("h2",{id:"channels-and-addresses"},"Channels and Addresses"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"Channel")," is defined by its ",(0,o.kt)("em",{parentName:"p"},"Address")," (or ",(0,o.kt)("em",{parentName:"p"},"Channel Address"),"), which is a\nstring (text) and essentially serves as the channel's name."),(0,o.kt)(i.Ee,{invertible:!0,src:"/static/img/drawio-diagrams/vertx/eventbus.drawio.svg",center:!0,mdxType:"Image"}),(0,o.kt)("p",null,"The address typically describes the channel's content (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"raw-telemetry"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"telecommand-out"),", etc.)."),(0,o.kt)("admonition",{title:"Mental model",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"As a mental model, you can compare the event bus to radio communication, e.g.,\nin Air Traffic Control:"),(0,o.kt)("table",{parentName:"admonition"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Concept in Radio Communication"),(0,o.kt)("th",{parentName:"tr",align:null},"Corresponding concept in the Event Bus"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Radio Transmission"),(0,o.kt)("td",{parentName:"tr",align:null},"Message")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Frequency"),(0,o.kt)("td",{parentName:"tr",align:null},"Address"))))),(0,o.kt)("h2",{id:"data-pipeline"},"Data Pipeline"),(0,o.kt)("p",null,"Through the combination of more than one component\n(",(0,o.kt)("a",{parentName:"p",href:"/application/concepts/verticle/"},"Verticles")," on the ",(0,o.kt)("em",{parentName:"p"},"Application")," side) sending\neach other messages and performing small, atomic tasks, you can create a sort of\ndata pipeline that's both easier to think about (as individual components only\nneed to perform smaller tasks) and more adjustable (since you can just plug\ncomponents together in different ways):"),(0,o.kt)(i.Ee,{invertible:!0,src:"/static/img/drawio-diagrams/vertx/data-pipeline.drawio.svg",center:!0,mdxType:"Image"}),(0,o.kt)("h2",{id:"requests"},"Requests"),(0,o.kt)("p",null,"The event bus also allows for so-called ",(0,o.kt)("em",{parentName:"p"},"Requests"),"."),(0,o.kt)("p",null,"This enables ",(0,o.kt)("em",{parentName:"p"},"Request Messages")," which another component can then respond to.\nThis is most useful when dealing with data that you don't need constantly, but\nonly on specific occasions:"),(0,o.kt)(i.Ee,{invertible:!0,src:"/static/img/drawio-diagrams/vertx/requests.drawio.svg",center:!0,mdxType:"Image"}),(0,o.kt)("p",null,"In more technical terms: ",(0,o.kt)("em",{parentName:"p"},"Requests")," enable a polling-based system. This works by\nproviding a dedicated (auto-generated) response address in the requesting\nmessage and then listening for a response on that channel."),(0,o.kt)("admonition",{title:"Request Handling",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In contrast to the system described in the previous sections (publish/subscribe,\nmeaning every component monitoring a channel gets notified about every message),\nrequests are point-to-point based. This means that of all handlers registered\nfor the request's address, only one of them (determined by a round-robin\nalgorithm) gets used.")),(0,o.kt)("h2",{id:"event-bus-bridge"},"Event Bus Bridge"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"Event Bus Bridge")," enables communication between the\n",(0,o.kt)("a",{parentName:"p",href:"/common-concepts/application/"},"Application")," and\n",(0,o.kt)("a",{parentName:"p",href:"/common-concepts/client/"},"Client")," without the need for an extra API."),(0,o.kt)(i.Ee,{invertible:!0,src:"/static/img/drawio-diagrams/vertx/eventbus-bridge.drawio.svg",center:!0,mdxType:"Image"}),(0,o.kt)("p",null,"It achieves this by sharing the event bus (or at least the parts of it that you\nconfigure) via a web socket, meaning the Client can interact with the event bus\nas if it were a part of the Application itself."),(0,o.kt)("h3",{id:"setting-up-the-event-bus-bridge-in-the-application"},"Setting up the Event Bus Bridge in the Application"),(0,o.kt)("p",null,"Thankfully, the Vert.x framework already provides an implementation of the\nBridge, meaning all you need to do to enable it in your Application is to add\nthe corresponding Verticle to your configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='conf/config.json'",title:"'conf/config.json'"},'{\n    "name": "Eventbus Tcp Bridge",\n    "verticle": "de.wuespace.telestion.services.connection.EventbusTcpBridge",\n    "magnitude": 1,\n    "config": {\n        "host": "0.0.0.0",\n        "port": 9870,\n        "inboundPermitted": ["request-time"],\n        "outboundPermitted": ["parsed-tm"]\n    }\n}\n')),(0,o.kt)("p",null,"With that configuration, every client connecting to the Bridge on port ",(0,o.kt)("inlineCode",{parentName:"p"},"9870"),"\ncould now send messages to ",(0,o.kt)("inlineCode",{parentName:"p"},"request-time")," (and receive responses to request\nmessages) and receive any message published to ",(0,o.kt)("inlineCode",{parentName:"p"},"parsed-tm"),"."),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)(i.s3,{to:"https://vertx.io/docs/vertx-core/java/#event_bus",mdxType:"Reference"},"Vert.x Event Bus Documentation"),(0,o.kt)(i.s3,{to:"https://vertx.io/docs/vertx-tcp-eventbus-bridge/java/",mdxType:"Reference"},"Vert.x TCP Event Bus Bridge Documentation"),(0,o.kt)(i.s3,{to:"https://wuespace.github.io/telestion-client/@wuespace/vertx-event-bus/",mdxType:"Reference"},"Telestion Event Bus Bridge Client API Reference"))}u.isMDXComponent=!0}}]);