"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[721],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=c,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return l},rj:function(){return c},Ee:function(){return f},s3:function(){return a}});var r=n(7294);function c(e){var t=e.cols,n=void 0===t?2:t,c=e.children;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},c)}var o=n(9960);function a(e){var t=e.children,n=e.to;return r.createElement(o.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}var i=function(){return r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var t=e.children,n=e.file;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(i,null)," ",t))}var p=n(7462),s=n(3366),u=n(4996),m=n(6010),d=["src","invertible","center","alt"];function f(e){var t=e.src,n=e.invertible,c=void 0!==n&&n,a=e.center,i=void 0!==a&&a,l=e.alt,f=void 0===l?"":l,v=(0,s.Z)(e,d),y=t.startsWith("/static")?t.substr(7):t,b=(0,u.Z)(y);return r.createElement(r.Fragment,null,r.createElement(o.Z,{to:y,style:{display:"none"}},"Link to ",f),r.createElement("img",(0,p.Z)({src:b,className:(0,m.Z)(c&&"invertible",i&&"center"),alt:f},v)))}},3652:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),c=n(3366),o=(n(7294),n(3905)),a=n(4966),i=["components"],l={title:"Application Concepts"},p=void 0,s={unversionedId:"application/concepts/index",id:"application/concepts/index",title:"Application Concepts",description:"These are the core concepts that you need to know to get started with backend /",source:"@site/docs/application/concepts/index.mdx",sourceDirName:"application/concepts",slug:"/application/concepts/",permalink:"/telestion-docs/application/concepts/",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/application/concepts/index.mdx",tags:[],version:"current",frontMatter:{title:"Application Concepts"},sidebar:"tutorialSidebar",previous:{title:"Application Development",permalink:"/telestion-docs/application/"},next:{title:"Event Bus",permalink:"/telestion-docs/application/concepts/event-bus"}},u=[],m={toc:u};function d(e){var t=e.components,n=(0,c.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These are the core concepts that you need to know to get started with backend /\napplication development in the Telestion ecosystem."),(0,o.kt)(a.rj,{mdxType:"Grid"},(0,o.kt)(a.s3,{to:"/application/concepts/vertx/",mdxType:"Reference"},"Vert.x"),(0,o.kt)(a.s3,{to:"/application/concepts/verticle/",mdxType:"Reference"},"Verticle"),(0,o.kt)(a.s3,{to:"/application/concepts/event-bus/",mdxType:"Reference"},"Event Bus")))}d.isMDXComponent=!0}}]);