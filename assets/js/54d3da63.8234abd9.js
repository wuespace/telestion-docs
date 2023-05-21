"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[3560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5335:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Deprecated: Vert.x-based Telestion",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Please note that the application and development of backend services using Vert.x in Telestion are deprecated. In the future, Telestion backend services will be developed using TypeScript and Deno, or through custom integrations with other languages."),(0,o.kt)("p",{parentName:"admonition"},"While there may be a compatibility layer for Vert.x services in the future, its availability is not guaranteed."),(0,o.kt)("p",{parentName:"admonition"},"For developing backend services, please refer to the (Work-in-Progress) documentation available here: ",(0,o.kt)("a",{parentName:"p",href:"https://pklaschka.github.io/telestion-docs-new/"},"https://pklaschka.github.io/telestion-docs-new/"),". Once the documentation is complete, it will be moved to the main Telestion documentation."),(0,o.kt)("p",{parentName:"admonition"},"Additional Information:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"NATS will be used as the distributed message bus/message broker for Telestion."),(0,o.kt)("li",{parentName:"ul"},"NATS' integrated authentication and authorization features will handle authentication and authorization for Ground Station operators, providing a single source of truth."),(0,o.kt)("li",{parentName:"ul"},"The event bus bridge will no longer be featured, and clients will be directly connected to the NATS server.")),(0,o.kt)("p",{parentName:"admonition"},"To establish a more technology-independent terminology, the Telestion project will modify the naming conventions as follows:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The NATS server will be referred to as the message broker, message bus, or NATS server interchangeably."),(0,o.kt)("li",{parentName:"ul"},"Components that act as services without an attached user interface, will be referred to as services or backend services collectively."),(0,o.kt)("li",{parentName:"ul"},'Components that provide a user interface, formerly known as "clients," will be referred to as frontends. In most cases, the frontend will authenticate to the message broker as the user, while backend services will act on their own behalf.')),(0,o.kt)("p",{parentName:"admonition"},'These changes aim to provide clearer and more consistent terminology, accounting for the possibility of components having both service and frontend functionalities. Additionally, the use of "client" for frontends will be replaced to avoid potential confusion.'),(0,o.kt)("p",{parentName:"admonition"},"We recommend using the NATS client libraries recommended by NATS itself, unless there are no suitable options available for the targeted language/environment. We will not develop our own client libraries unless there is a lack of suitable options or significant advantages justify the effort."),(0,o.kt)("p",{parentName:"admonition"},"While Deno/TypeScript is the recommended choice for backend services, its use is not mandatory. Developers will be encouraged to use Deno/TypeScript where appropriate, but other options will still be supported for specific services. Comprehensive documentation and resources will be provided for writing and deploying Deno-based backend services in TypeScript."),(0,o.kt)("p",{parentName:"admonition"},"Please consider these changes and updates as you continue with Telestion development.")))}i.isMDXComponent=!0},4966:(e,t,n)=>{n.d(t,{kN:()=>s,rj:()=>o,Ee:()=>d,s3:()=>i});var r=n(7294);function o(e){let{cols:t=2,children:n}=e;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,columnGap:"1em"}},n)}var a=n(9960);function i(e){let{children:t,to:n}=e;return r.createElement(a.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}const l=()=>r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})));function s(e){let{children:t,file:n}=e;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(l,null)," ",t))}var c=n(7462),p=n(4996),u=n(6010);function d(e){let{src:t,invertible:n=!1,center:o=!1,alt:i="",...l}=e;const s=t.startsWith("/static")?t.substr(7):t,d=(0,p.Z)(s);return r.createElement(r.Fragment,null,r.createElement(a.Z,{to:s,style:{display:"none"}},"Link to ",i),r.createElement("img",(0,c.Z)({src:d,className:(0,u.Z)(n&&"invertible",o&&"center"),alt:i},l)))}n(5335)},5357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),a=n(4966);const i={title:"React",description:"The JS UI component library that powers the Telestion Client"},l=void 0,s={unversionedId:"client/concepts/react",id:"client/concepts/react",title:"React",description:"The JS UI component library that powers the Telestion Client",source:"@site/docs/client/concepts/130-react.mdx",sourceDirName:"client/concepts",slug:"/client/concepts/react",permalink:"/client/concepts/react",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/client/concepts/130-react.mdx",tags:[],version:"current",sidebarPosition:130,frontMatter:{title:"React",description:"The JS UI component library that powers the Telestion Client"},sidebar:"client",previous:{title:"Electron",permalink:"/client/concepts/electron"},next:{title:"telestion-client CLI",permalink:"/client/concepts/tc-cli"}},c={},p=[{value:"Components",id:"components",level:2},{value:"Props",id:"props",level:2},{value:"State",id:"state",level:2},{value:"Example code",id:"example-code",level:2},{value:"See also",id:"see-also",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"React describes itself as ",(0,o.kt)("em",{parentName:"p"},'"A JavaScript library for building user interfaces"'),"\n(",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"https://reactjs.org/"),"). It's one of the fundamental pieces of the Telestion\nClient tech stack."),(0,o.kt)("p",null,"It allows you to write user interfaces by defining and re-using UI components."),(0,o.kt)("h2",{id:"components"},"Components"),(0,o.kt)("p",null,'Components are re-usable "building blocks" that render some UI (possibly\nincluding other Components) based on their ',(0,o.kt)("em",{parentName:"p"},"Props")," and ",(0,o.kt)("em",{parentName:"p"},"State"),"."),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("p",null,"Props are values passed down to component instances. In the example below, the\n",(0,o.kt)("inlineCode",{parentName:"p"},"<Counter />"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," would be a prop of that component."),(0,o.kt)("p",null,"Components re-render automatically if one of the props passed to them changes."),(0,o.kt)("h2",{id:"state"},"State"),(0,o.kt)("p",null,"Components can also manage their own state, which they can update."),(0,o.kt)("p",null,"Components re-render automatically if their state changes."),(0,o.kt)("h2",{id:"example-code"},"Example code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\n\nfunction App() {\n    return (\n        <>\n            <Counter title="A" />\n            <Counter title="B" />\n        </>\n    );\n}\n\nfunction Counter(props) {\n    const [counter, setCounter] = useState(0);\n\n    return (\n        <div>\n            <p>\n                {props.title}: {counter}\n            </p>\n            <Button onClick={() => setCounter(counter + 1)}>Increase</Button>\n            <Button onClick={() => setCounter(counter - 1)}>Decrease</Button>\n        </div>\n    );\n}\n\nfunction Button(props) {\n    return (\n        <button className="my-btn" onClick={props.onClick}>\n            {props.children}\n        </button>\n    );\n}\n')),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)(a.s3,{to:"https://reactjs.org/",mdxType:"Reference"},"React Website"),(0,o.kt)(a.s3,{to:"https://beta.reactjs.org/",mdxType:"Reference"},"New React Documentation (Beta)"))}d.isMDXComponent=!0}}]);