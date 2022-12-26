"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[7080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4966:(e,t,n)=>{n.d(t,{kN:()=>l,rj:()=>r,Ee:()=>d,s3:()=>s});var a=n(7294);function r(e){let{cols:t=2,children:n}=e;return a.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,columnGap:"1em"}},n)}var o=n(9960);function s(e){let{children:t,to:n}=e;return a.createElement(o.Z,{to:n,className:"block-link"},a.createElement("span",null,t," \xbb"),a.createElement("span",null,n))}const i=()=>a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},a.createElement("defs",null,a.createElement("style",null,".a{clip-path:url(#b);}"),a.createElement("clipPath",{id:"b"},a.createElement("rect",{width:24,height:24}))),a.createElement("g",{id:"a",className:"a"},a.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})));function l(e){let{children:t,file:n}=e;return a.createElement("a",{className:"block-link",download:!0,href:n},a.createElement("span",null,a.createElement(i,null)," ",t))}var c=n(7462),p=n(4996),u=n(6010);function d(e){let{src:t,invertible:n=!1,center:r=!1,alt:s="",...i}=e;const l=t.startsWith("/static")?t.substr(7):t,d=(0,p.Z)(l);return a.createElement(a.Fragment,null,a.createElement(o.Z,{to:l,style:{display:"none"}},"Link to ",s),a.createElement("img",(0,c.Z)({src:d,className:(0,u.Z)(n&&"invertible",r&&"center"),alt:s},i)))}},9835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4966);const s={title:"Records",description:"Immutable data classes in Java that are heavily used in the Telestion Ecosystem"},i=void 0,l={unversionedId:"application/concepts/records",id:"application/concepts/records",title:"Records",description:"Immutable data classes in Java that are heavily used in the Telestion Ecosystem",source:"@site/docs/application/concepts/170-records.mdx",sourceDirName:"application/concepts",slug:"/application/concepts/records",permalink:"/application/concepts/records",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/application/concepts/170-records.mdx",tags:[],version:"current",sidebarPosition:170,frontMatter:{title:"Records",description:"Immutable data classes in Java that are heavily used in the Telestion Ecosystem"},sidebar:"application",previous:{title:"Traits",permalink:"/application/concepts/traits"},next:{title:"Tutorials",permalink:"/application/tutorials"}},c={},p=[{value:"Example code",id:"example-code",level:2},{value:"<code>JsonMessage</code>",id:"jsonmessage",level:2},{value:"<code>TelestionConfiguration</code>",id:"telestionconfiguration",level:2},{value:"See also",id:"see-also",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Records are immutable data classes used in Java to encapsulate "packets" of\ndata.'),(0,r.kt)("p",null,'Records make it much easier to implement these kinds of "wrapper classes"\nwithout having to define constructors, ',(0,r.kt)("inlineCode",{parentName:"p"},"toString()"),", getters, etc., every single\ntime."),(0,r.kt)("h2",{id:"example-code"},"Example code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public record Car(String engine, String brand) {\n    public String brandAsLowerCase() {\n        return brand().toLowerCase();\n    }\n}\n")),(0,r.kt)("p",null,"This, automatically, also creates getters ",(0,r.kt)("inlineCode",{parentName:"p"},"String engine()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"String brand()"),"\non ",(0,r.kt)("inlineCode",{parentName:"p"},"Car")," objects."),(0,r.kt)("p",null,"You can create an instance of a Record just like with any other class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'var car = new Car("my engine", "Porsche");\n\nSystem.out.println(car.engine());\n')),(0,r.kt)("h2",{id:"jsonmessage"},(0,r.kt)("inlineCode",{parentName:"h2"},"JsonMessage")),(0,r.kt)("p",null,"One area where the Telestion ecosystem uses records is for JSON object\n",(0,r.kt)("a",{parentName:"p",href:"/common-concepts/event-bus"},"Event Bus")," messages. This adds type safety around\nevent bus messages and thus makes them easier to handle."),(0,r.kt)(o.s3,{to:"/application/tutorials/using-jsonmessage/",mdxType:"Reference"},"Learn how to use the Record-based ",(0,r.kt)("code",null,"JsonMessage")," for Event Bus Messages"),(0,r.kt)("h2",{id:"telestionconfiguration"},(0,r.kt)("inlineCode",{parentName:"h2"},"TelestionConfiguration")),(0,r.kt)("p",null,"Another area where Records are useful within the Telestion ecosystem is Verticle\nconfiguration."),(0,r.kt)(o.s3,{to:"/application/tutorials/adding-configuration-options/",mdxType:"Reference"},"Learn how to use Records extending ",(0,r.kt)("code",null,"TelestionConfiguration")," to make your Verticles configurable"),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)(o.s3,{to:"https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-8.10",mdxType:"Reference"},"Java Records Language Specification"))}d.isMDXComponent=!0}}]);