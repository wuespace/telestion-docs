"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[550],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return a},rj:function(){return i},Ee:function(){return f},s3:function(){return l}});var r=n(7294);function i(e){var t=e.cols,n=void 0===t?2:t,i=e.children;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},i)}var o=n(9960);function l(e){var t=e.children,n=e.to;return r.createElement(o.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}var c=function(){return r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function a(e){var t=e.children,n=e.file;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(c,null)," ",t))}var u=n(7462),s=n(3366),p=n(4996),d=n(6010),m=["src","invertible","center","alt"];function f(e){var t=e.src,n=e.invertible,i=void 0!==n&&n,l=e.center,c=void 0!==l&&l,a=e.alt,f=void 0===a?"":a,v=(0,s.Z)(e,m),y=t.startsWith("/static")?t.substr(7):t,g=(0,p.Z)(y);return r.createElement(r.Fragment,null,r.createElement(o.Z,{to:y,style:{display:"none"}},"Link to ",f),r.createElement("img",(0,u.Z)({src:g,className:(0,d.Z)(i&&"invertible",c&&"center"),alt:f},v)))}},6163:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=n(4966),c=["components"],a={title:"Client Tutorials"},u=void 0,s={unversionedId:"client/tutorials/index",id:"client/tutorials/index",title:"Client Tutorials",description:"These tutorials cover everything you need to know to build web clients for the",source:"@site/docs/client/tutorials/index.mdx",sourceDirName:"client/tutorials",slug:"/client/tutorials/",permalink:"/telestion-docs/client/tutorials/",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/client/tutorials/index.mdx",tags:[],version:"current",frontMatter:{title:"Client Tutorials"},sidebar:"tutorialSidebar",previous:{title:"telestion-client CLI",permalink:"/telestion-docs/client/concepts/tc-cli"},next:{title:"Setting up the development enviroment",permalink:"/telestion-docs/client/tutorials/dev-env-setup"}},p=[],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These tutorials cover everything you need to know to build web clients for the\nTelestion Ecosystem using the ",(0,o.kt)("inlineCode",{parentName:"p"},"telestion-client")," APIs."),(0,o.kt)(l.rj,{mdxType:"Grid"},(0,o.kt)(l.s3,{to:"/client/tutorials/dev-env-setup/",mdxType:"Reference"},"Development Environment Setup"),(0,o.kt)(l.s3,{to:"/client/tutorials/bootstrapping-a-widget/",mdxType:"Reference"},"Bootstrapping a widget"),(0,o.kt)(l.s3,{to:"/client/tutorials/building-ui-using-react-spectrum/",mdxType:"Reference"},"Building the widget UI using React Spectrum"),(0,o.kt)(l.s3,{to:"/client/tutorials/connecting-with-event-bus/",mdxType:"Reference"},"Connecting the widget to the Application's Event Bus")))}m.isMDXComponent=!0}}]);