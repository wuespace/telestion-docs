"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[1054],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return s},rj:function(){return i},Ee:function(){return f},s3:function(){return o}});var r=n(7294);function i(e){var t=e.cols,n=void 0===t?2:t,i=e.children;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},i)}var l=n(9960);function o(e){var t=e.children,n=e.to;return r.createElement(l.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}var a=function(){return r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function s(e){var t=e.children,n=e.file;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(a,null)," ",t))}var c=n(7462),u=n(3366),p=n(4996),d=n(6010),m=["src","invertible","center","alt"];function f(e){var t=e.src,n=e.invertible,i=void 0!==n&&n,o=e.center,a=void 0!==o&&o,s=e.alt,f=void 0===s?"":s,v=(0,u.Z)(e,m),y=t.startsWith("/static")?t.substr(7):t,g=(0,p.Z)(y);return r.createElement(r.Fragment,null,r.createElement(l.Z,{to:y,style:{display:"none"}},"Link to ",f),r.createElement("img",(0,c.Z)({src:g,className:(0,d.Z)(i&&"invertible",a&&"center"),alt:f},v)))}},6135:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),l=(n(7294),n(3905)),o=(n(4966),["components"]),a={title:"Prerequisites",description:"Prerequisites for developing Telestion Clients"},s=void 0,c={unversionedId:"client/references/prerequisites",id:"client/references/prerequisites",title:"Prerequisites",description:"Prerequisites for developing Telestion Clients",source:"@site/docs/client/references/000-prerequisites.mdx",sourceDirName:"client/references",slug:"/client/references/prerequisites",permalink:"/client/references/prerequisites",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/client/references/000-prerequisites.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Prerequisites",description:"Prerequisites for developing Telestion Clients"},sidebar:"client",previous:{title:"References",permalink:"/client/references"}},u={},p=[{value:"Operating system",id:"operating-system",level:2},{value:"Tooling",id:"tooling",level:2},{value:"Editors / IDEs",id:"editors--ides",level:2},{value:"Skills",id:"skills",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An overview of what you need to develop a Telestion Client."),(0,l.kt)("h2",{id:"operating-system"},"Operating system"),(0,l.kt)("p",null,"You need a desktop operating system like Windows, macOS, or Linux."),(0,l.kt)("h2",{id:"tooling"},"Tooling"),(0,l.kt)("p",null,"You need the following tools installed on your operating system:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NodeJS >= v16"),(0,l.kt)("li",{parentName:"ul"},"npm >= v7")),(0,l.kt)("h2",{id:"editors--ides"},"Editors / IDEs"),(0,l.kt)("p",null,"Any editor or IDE works, but ",(0,l.kt)("em",{parentName:"p"},"JetBrains WebStorm")," and ",(0,l.kt)("em",{parentName:"p"},"Visual Studio Code")," work\nwell with the ecosystem."),(0,l.kt)("h2",{id:"skills"},"Skills"),(0,l.kt)("p",null,"You should be familiar with the following technologies:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTML/CSS/JS"),(0,l.kt)("li",{parentName:"ul"},"React"),(0,l.kt)("li",{parentName:"ul"},"TypeScript")))}m.isMDXComponent=!0}}]);