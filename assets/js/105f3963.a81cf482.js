"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[4838],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return l},rj:function(){return o},Ee:function(){return f},s3:function(){return i}});var r=n(7294);function o(e){var t=e.cols,n=void 0===t?2:t,o=e.children;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},o)}var a=n(9960);function i(e){var t=e.children,n=e.to;return r.createElement(a.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}var c=function(){return r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var t=e.children,n=e.file;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(c,null)," ",t))}var s=n(7462),u=n(3366),d=n(4996),p=n(6010),m=["src","invertible","center","alt"];function f(e){var t=e.src,n=e.invertible,o=void 0!==n&&n,i=e.center,c=void 0!==i&&i,l=e.alt,f=void 0===l?"":l,h=(0,u.Z)(e,m),v=t.startsWith("/static")?t.substr(7):t,b=(0,d.Z)(v);return r.createElement(r.Fragment,null,r.createElement(a.Z,{to:v,style:{display:"none"}},"Link to ",f),r.createElement("img",(0,s.Z)({src:b,className:(0,p.Z)(o&&"invertible",c&&"center"),alt:f},h)))}},9259:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(4966),c=["components"],l={title:"Client",description:"The web-based user interface in the Telestion Ecosystem"},s=void 0,u={unversionedId:"common-concepts/client",id:"common-concepts/client",title:"Client",description:"The web-based user interface in the Telestion Ecosystem",source:"@site/docs/common-concepts/client.mdx",sourceDirName:"common-concepts",slug:"/common-concepts/client",permalink:"/common-concepts/client",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/common-concepts/client.mdx",tags:[],version:"current",frontMatter:{title:"Client",description:"The web-based user interface in the Telestion Ecosystem"},sidebar:"docs",previous:{title:"Application",permalink:"/common-concepts/application"},next:{title:"Event Bus",permalink:"/common-concepts/event-bus"}},d=[{value:"Dashboards",id:"dashboards",children:[],level:2},{value:"Widgets",id:"widgets",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Client is the User Interface your Ground Station operators interact with.\nIt's based on web technologies (with React and TypeScript at the core of its\ntech stack) and provides a framework for building re-usable widgets that get\ndisplayed in dashboards."),(0,a.kt)("h2",{id:"dashboards"},"Dashboards"),(0,a.kt)("p",null,"Dashboards are pre-defined layouts of one or more widgets within a single page\nthat you can define for specific users. They are the pages that the ground\nstation operators interact with and are selectable using the selector at the top\nof the user interface."),(0,a.kt)("h2",{id:"widgets"},"Widgets"),(0,a.kt)("p",null,"Widgets are reusable components of the UI that can you can place into dashboards\nto visualize Telemetry, send Telecommands, and so on."),(0,a.kt)("p",null,'By right-clicking into a widget and selecting "Configure", users can also\nreconfigure widget that supports that to, for example, choose the fields that\nget visualized within a graph widget.'),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)(i.s3,{to:"/client/",mdxType:"Reference"},"Client Development Documentation"),(0,a.kt)(i.s3,{to:"https://www.youtube.com/watch?v=KACd-X6WWFA",mdxType:"Reference"},"Dashboards and Widgets | Telestion Concepts (Video)"))}m.isMDXComponent=!0}}]);