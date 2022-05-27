"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[7089],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return c},rj:function(){return r},Ee:function(){return h},s3:function(){return o}});var a=n(7294);function r(e){var t=e.cols,n=void 0===t?2:t,r=e.children;return a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},r)}var i=n(9960);function o(e){var t=e.children,n=e.to;return a.createElement(i.Z,{to:n,className:"block-link"},a.createElement("span",null,t," \xbb"),a.createElement("span",null,n))}var s=function(){return a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},a.createElement("defs",null,a.createElement("style",null,".a{clip-path:url(#b);}"),a.createElement("clipPath",{id:"b"},a.createElement("rect",{width:24,height:24}))),a.createElement("g",{id:"a",className:"a"},a.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function c(e){var t=e.children,n=e.file;return a.createElement("a",{className:"block-link",download:!0,href:n},a.createElement("span",null,a.createElement(s,null)," ",t))}var l=n(7462),m=n(3366),d=n(4996),p=n(6010),u=["src","invertible","center","alt"];function h(e){var t=e.src,n=e.invertible,r=void 0!==n&&n,o=e.center,s=void 0!==o&&o,c=e.alt,h=void 0===c?"":c,v=(0,m.Z)(e,u),g=t.startsWith("/static")?t.substr(7):t,f=(0,d.Z)(g);return a.createElement(a.Fragment,null,a.createElement(i.Z,{to:g,style:{display:"none"}},"Link to ",h),a.createElement("img",(0,l.Z)({src:f,className:(0,p.Z)(r&&"invertible",s&&"center"),alt:h},v)))}},3613:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(4966),s=["components"],c={title:"Event Bus",description:'The "nervous system" of the Telestion ecosystem through which all components communicate'},l=void 0,m={unversionedId:"common-concepts/event-bus",id:"common-concepts/event-bus",title:"Event Bus",description:'The "nervous system" of the Telestion ecosystem through which all components communicate',source:"@site/docs/common-concepts/event-bus.mdx",sourceDirName:"common-concepts",slug:"/common-concepts/event-bus",permalink:"/common-concepts/event-bus",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/common-concepts/event-bus.mdx",tags:[],version:"current",frontMatter:{title:"Event Bus",description:'The "nervous system" of the Telestion ecosystem through which all components communicate'},sidebar:"docs",previous:{title:"Client",permalink:"/common-concepts/client"}},d={},p=[{value:"Video version",id:"video-version",level:2},{value:"Messages",id:"messages",level:2},{value:"Channels and Addresses",id:"channels-and-addresses",level:2},{value:"Data Pipeline",id:"data-pipeline",level:2},{value:"Requests",id:"requests",level:2},{value:"Event Bus Bridge",id:"event-bus-bridge",level:2},{value:"Setting up the Event Bus Bridge in the Application",id:"setting-up-the-event-bus-bridge-in-the-application",level:3},{value:"See also",id:"see-also",level:2}],u={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Event Bus is, basically, the nervous system of the Telestion Ecosystem. The\necosystem uses the Event Bus for the communication between its various\ncomponents."),(0,i.kt)("h2",{id:"video-version"},"Video version"),(0,i.kt)("p",null,"You can find a video version of this concept's explanation here:"),(0,i.kt)(o.s3,{to:"https://www.youtube.com/watch?v=X92A77OdEg0",mdxType:"Reference"},"Event Bus | Telestion Concepts (Video)"),(0,i.kt)("h2",{id:"messages"},"Messages"),(0,i.kt)("p",null,"At the core of the Event Bus, there are so-called ",(0,i.kt)("em",{parentName:"p"},"Messages"),". Messages are data\npackets that you can send to a specific channel. Then, all components monitoring\nthat channel receive you message."),(0,i.kt)("h2",{id:"channels-and-addresses"},"Channels and Addresses"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"Channel")," is defined by its ",(0,i.kt)("em",{parentName:"p"},"Address")," (or ",(0,i.kt)("em",{parentName:"p"},"Channel Address"),"), which is a\nstring (text) and essentially serves as the channel's name."),(0,i.kt)(o.Ee,{invertible:!0,src:"/static/img/drawio-diagrams/vertx/eventbus.drawio.svg",center:!0,mdxType:"Image"}),(0,i.kt)("p",null,"The address typically describes the channel's content (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"raw-telemetry"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"telecommand-out"),", etc.)."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Mental model")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As a mental model, you can compare the event bus to radio communication, e.g.,\nin Air Traffic Control:"),(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Concept in Radio Communication"),(0,i.kt)("th",{parentName:"tr",align:null},"Corresponding concept in the Event Bus"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Radio Transmission"),(0,i.kt)("td",{parentName:"tr",align:null},"Message")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Frequency"),(0,i.kt)("td",{parentName:"tr",align:null},"Address")))))),(0,i.kt)("h2",{id:"data-pipeline"},"Data Pipeline"),(0,i.kt)("p",null,"Through the combination of more than one component\n(",(0,i.kt)("a",{parentName:"p",href:"/application/concepts/verticle/"},"Verticles")," on the ",(0,i.kt)("em",{parentName:"p"},"Application")," side) sending\neach other messages and performing small, atomic tasks, you can create a sort of\ndata pipeline that's both easier to think about (as individual components only\nneed to perform smaller tasks) and more adjustable (since you can just plug\ncomponents together in different ways):"),(0,i.kt)(o.Ee,{invertible:!0,src:"/static/img/drawio-diagrams/vertx/data-pipeline.drawio.svg",center:!0,mdxType:"Image"}),(0,i.kt)("h2",{id:"requests"},"Requests"),(0,i.kt)("p",null,"The event bus also allows for so-called ",(0,i.kt)("em",{parentName:"p"},"Requests"),"."),(0,i.kt)("p",null,"This enables ",(0,i.kt)("em",{parentName:"p"},"Request Messages")," which another component can then respond to.\nThis is most useful when dealing with data that you don't need constantly, but\nonly on specific occasions:"),(0,i.kt)(o.Ee,{invertible:!0,src:"/static/img/drawio-diagrams/vertx/requests.drawio.svg",center:!0,mdxType:"Image"}),(0,i.kt)("p",null,"In more technical terms: ",(0,i.kt)("em",{parentName:"p"},"Requests")," enable a polling-based system. This works by\nproviding a dedicated (auto-generated) response address in the requesting\nmessage and then listening for a response on that channel."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Request Handling")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In contrast to the system described in the previous sections (publish/subscribe,\nmeaning every component monitoring a channel gets notified about every message),\nrequests are point-to-point based. This means that of all handlers registered\nfor the request's address, only one of them (determined by a round-robin\nalgorithm) gets used."))),(0,i.kt)("h2",{id:"event-bus-bridge"},"Event Bus Bridge"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Event Bus Bridge")," enables communication between the\n",(0,i.kt)("a",{parentName:"p",href:"/common-concepts/application/"},"Application")," and\n",(0,i.kt)("a",{parentName:"p",href:"/common-concepts/client/"},"Client")," without the need for an extra API."),(0,i.kt)(o.Ee,{invertible:!0,src:"/static/img/drawio-diagrams/vertx/eventbus-bridge.drawio.svg",center:!0,mdxType:"Image"}),(0,i.kt)("p",null,"It achieves this by sharing the event bus (or at least the parts of it that you\nconfigure) via a web socket, meaning the Client can interact with the event bus\nas if it were a part of the Application itself."),(0,i.kt)("h3",{id:"setting-up-the-event-bus-bridge-in-the-application"},"Setting up the Event Bus Bridge in the Application"),(0,i.kt)("p",null,"Thankfully, the Vert.x framework already provides an implementation of the\nBridge, meaning all you need to do to enable it in your Application is to add\nthe corresponding Verticle to your configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='conf/config.json'",title:"'conf/config.json'"},'{\n    "name": "Eventbus Tcp Bridge",\n    "verticle": "de.wuespace.telestion.services.connection.EventbusTcpBridge",\n    "magnitude": 1,\n    "config": {\n        "host": "0.0.0.0",\n        "port": 9870,\n        "inboundPermitted": ["request-time"],\n        "outboundPermitted": ["parsed-tm"]\n    }\n}\n')),(0,i.kt)("p",null,"With that configuration, every client connecting to the Bridge on port ",(0,i.kt)("inlineCode",{parentName:"p"},"9870"),"\ncould now send messages to ",(0,i.kt)("inlineCode",{parentName:"p"},"request-time")," (and receive responses to request\nmessages) and receive any message published to ",(0,i.kt)("inlineCode",{parentName:"p"},"parsed-tm"),"."),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)(o.s3,{to:"https://vertx.io/docs/vertx-core/java/#event_bus",mdxType:"Reference"},"Vert.x Event Bus Documentation"),(0,i.kt)(o.s3,{to:"https://vertx.io/docs/vertx-tcp-eventbus-bridge/java/",mdxType:"Reference"},"Vert.x TCP Event Bus Bridge Documentation"),(0,i.kt)(o.s3,{to:"https://wuespace.github.io/telestion-client/@wuespace/vertx-event-bus/",mdxType:"Reference"},"Telestion Event Bus Bridge Client API Reference"))}h.isMDXComponent=!0}}]);