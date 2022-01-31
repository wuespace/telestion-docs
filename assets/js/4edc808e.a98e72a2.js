"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[4173],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,v=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return l},rj:function(){return o},Ee:function(){return v},s3:function(){return a}});var r=n(7294);function o(e){var t=e.cols,n=void 0===t?2:t,o=e.children;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},o)}var i=n(9960);function a(e){var t=e.children,n=e.to;return r.createElement(i.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}var s=function(){return r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var t=e.children,n=e.file;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(s,null)," ",t))}var c=n(7462),p=n(3366),u=n(4996),m=n(6010),d=["src","invertible","center","alt"];function v(e){var t=e.src,n=e.invertible,o=void 0!==n&&n,a=e.center,s=void 0!==a&&a,l=e.alt,v=void 0===l?"":l,f=(0,p.Z)(e,d),h=t.startsWith("/static")?t.substr(7):t,y=(0,u.Z)(h);return r.createElement(r.Fragment,null,r.createElement(i.Z,{to:h,style:{display:"none"}},"Link to ",v),r.createElement("img",(0,c.Z)({src:y,className:(0,m.Z)(o&&"invertible",s&&"center"),alt:v},f)))}},1788:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=n(4966),s=["components"],l={sidebar_position:1,title:"Telestion Developer Documentation"},c=void 0,p={unversionedId:"index",id:"index",title:"Telestion Developer Documentation",description:"Welcome to the Telestion Documentation pages.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Telestion Developer Documentation"},sidebar:"tutorialSidebar",next:{title:"Application Development",permalink:"/application/"}},u=[{value:"Telestion Concepts YouTube Series",id:"telestion-concepts-youtube-series",children:[],level:2},{value:"High-level ecosystem overview",id:"high-level-ecosystem-overview",children:[],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the Telestion Documentation pages."),(0,i.kt)("p",null,"Telestion is an extensible, open source ecosystem for building Ground Station\nSoftware. It's based on Java for the backend and React on the frontend side."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Intended for developers")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Telestion is an ecosystem for building mission-specific Ground Station Software.\nSince every mission's requirements are different, this documentation describes\nthe general concepts and how to use the ecosystem to develop mission-specific\nsoftware."),(0,i.kt)("p",{parentName:"div"},"For end-user instructions for a Telestion-based Ground Station software, please\nask your Ground Station Software Development Team."))),(0,i.kt)("h2",{id:"telestion-concepts-youtube-series"},"Telestion Concepts YouTube Series"),(0,i.kt)("p",null,"Before you get started with developing within the Telestion Ecosystem, it's\nimportant to grasp the various bits and pieces in the ecosystem."),(0,i.kt)("p",null,"To start, you should watch the ",(0,i.kt)("em",{parentName:"p"},"Telestion Concepts")," YouTube playlist, a set of\nshort videos explaining the most important concepts you need to know to dive\ninto developing a Ground Station using Telestion:"),(0,i.kt)(a.s3,{to:"https://www.youtube.com/playlist?list=PLIg6wHc9-7aXgtMEL8SQc6bp-b0JhKpYT",mdxType:"Reference"},"Telestion Concepts Playlist"),(0,i.kt)("h2",{id:"high-level-ecosystem-overview"},"High-level ecosystem overview"),(0,i.kt)("p",null,"To give you an idea of where to might go next (if you haven't watched the\nYouTube playlist), take a quick look at the two main components of every\nTelestion Project: the ",(0,i.kt)("em",{parentName:"p"},"Application")," and the ",(0,i.kt)("em",{parentName:"p"},"Client"),"."),(0,i.kt)(a.Ee,{src:"/static/img/drawio-diagrams/general-telestion-structure/application-and-client.drawio.svg",invertable:!0,center:!0,alt:"",mdxType:"Image"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Application")," is a Java-based software (using the Vert.x framework)\nresponsible for all the backend work within a Telestion project. It communicates\nwith the various mission I/O devices, processes the data (for example, saving\ntelemetry to the database), and communicates with the Client."),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Client")," is the User Interface your Ground Station operators interact with.\nIt's based on web technologies (with React and TypeScript at the core of its\ntech stack) and provides a framework for building re-usable widgets that get\ndisplayed in dashboards."),(0,i.kt)(a.rj,{mdxType:"Grid"},(0,i.kt)(a.s3,{to:"/application/",mdxType:"Reference"},"Application Development Documentation"),(0,i.kt)(a.s3,{to:"/client/",mdxType:"Reference"},"Client Development Documentation")))}d.isMDXComponent=!0}}]);