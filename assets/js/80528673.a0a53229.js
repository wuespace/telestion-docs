"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[2739],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return l},rj:function(){return o},Ee:function(){return d},s3:function(){return c}});var r=n(7294);function o(e){var t=e.cols,n=void 0===t?2:t,o=e.children;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},o)}var a=n(9960);function c(e){var t=e.children,n=e.to;return r.createElement(a.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}var i=function(){return r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var t=e.children,n=e.file;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(i,null)," ",t))}var s=n(7462),p=n(3366),u=n(4996),m=n(6010),f=["src","invertible","center","alt"];function d(e){var t=e.src,n=e.invertible,o=void 0!==n&&n,c=e.center,i=void 0!==c&&c,l=e.alt,d=void 0===l?"":l,v=(0,p.Z)(e,f),h=t.startsWith("/static")?t.substr(7):t,b=(0,u.Z)(h);return r.createElement(r.Fragment,null,r.createElement(a.Z,{to:h,style:{display:"none"}},"Link to ",d),r.createElement("img",(0,s.Z)({src:b,className:(0,m.Z)(o&&"invertible",i&&"center"),alt:d},v)))}},948:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=n(4966),i=["components"],l={title:"Application",description:"The Java-based backend for the Telestion Ecosystem"},s=void 0,p={unversionedId:"common-concepts/application",id:"common-concepts/application",title:"Application",description:"The Java-based backend for the Telestion Ecosystem",source:"@site/docs/common-concepts/application.mdx",sourceDirName:"common-concepts",slug:"/common-concepts/application",permalink:"/common-concepts/application",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/common-concepts/application.mdx",tags:[],version:"current",frontMatter:{title:"Application",description:"The Java-based backend for the Telestion Ecosystem"},sidebar:"docs",previous:{title:"Common Concepts",permalink:"/common-concepts"},next:{title:"Client",permalink:"/common-concepts/client"}},u=[{value:"See also",id:"see-also",children:[],level:2}],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Application is a Java-based software (using the Vert.x framework)\nresponsible for all the backend work within a Telestion project. It communicates\nwith the various mission I/O devices, processes the data (for example, saving\ntelemetry to the database), and communicates with the Client."),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)(c.s3,{to:"/application/",mdxType:"Reference"},"Application Development Documentation"))}f.isMDXComponent=!0}}]);