"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[419],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return l},rj:function(){return a},Ee:function(){return f},s3:function(){return c}});var r=n(7294);function a(e){var t=e.cols,n=void 0===t?2:t,a=e.children;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},a)}var o=n(9960);function c(e){var t=e.children,n=e.to;return r.createElement(o.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}var i=function(){return r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var t=e.children,n=e.file;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(i,null)," ",t))}var s=n(7462),u=n(3366),p=n(4996),m=n(6010),d=["src","invertible","center","alt"];function f(e){var t=e.src,n=e.invertible,a=void 0!==n&&n,c=e.center,i=void 0!==c&&c,l=e.alt,f=void 0===l?"":l,v=(0,u.Z)(e,d),b=t.startsWith("/static")?t.substr(7):t,y=(0,p.Z)(b);return r.createElement(r.Fragment,null,r.createElement(o.Z,{to:b,style:{display:"none"}},"Link to ",f),r.createElement("img",(0,s.Z)({src:y,className:(0,m.Z)(a&&"invertible",i&&"center"),alt:f},v)))}},2324:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=(n(4966),["components"]),i={title:"lerna",description:"A CLI to manage monorepo structures of JS-based projects"},l="lerna",s={unversionedId:"internal/concepts/lerna",id:"internal/concepts/lerna",title:"lerna",description:"A CLI to manage monorepo structures of JS-based projects",source:"@site/docs/internal/concepts/lerna.mdx",sourceDirName:"internal/concepts",slug:"/internal/concepts/lerna",permalink:"/telestion-docs/internal/concepts/lerna",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/internal/concepts/lerna.mdx",tags:[],version:"current",frontMatter:{title:"lerna",description:"A CLI to manage monorepo structures of JS-based projects"},sidebar:"tutorialSidebar",previous:{title:"Conventional Commits",permalink:"/telestion-docs/internal/concepts/conventional-commits"},next:{title:"Branch Naming Guidelines",permalink:"/telestion-docs/internal/references/branch-names"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lerna"},(0,o.kt)("inlineCode",{parentName:"h1"},"lerna")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lerna")," is a CLI to manage monorepo structures of JS-based projects."),(0,o.kt)("p",null,"It provides the capability to bump versions based on conventional commit\nmessages correctly, update cross-dependencies of the different packages and\npublish all packages to npm while simultaneously creating a release on GitHub\nand updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md"),"."))}m.isMDXComponent=!0}}]);