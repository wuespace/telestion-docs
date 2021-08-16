"use strict";(self.webpackChunkdocusaurus_2_test=self.webpackChunkdocusaurus_2_test||[]).push([[419],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6054:function(e,t,n){n.d(t,{kN:function(){return l},rj:function(){return o},s3:function(){return i}});var r=n(7294);function o(e){var t=e.cols,n=void 0===t?2:t,o=e.children;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},o)}var a=n(6742);function i(e){var t=e.children,n=e.to;return r.createElement(a.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}var c=function(){return r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var t=e.children,n=e.file;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(c,null)," ",t))}},6742:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3366),o=n(7294),a=n(3727),i=n(2263),c=n(3919),l=n(412),u=(0,o.createContext)({collectLink:function(){}}),s=n(4996),f=n(8780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var d=function(e){var t,n,d=e.isNavLink,m=e.to,v=e.href,b=e.activeClassName,h=e.isActive,y=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,O=void 0===g||g,w=(0,r.Z)(e,p),k=(0,i.Z)().siteConfig,C=k.trailingSlash,E=k.baseUrl,j=(0,s.C)().withBaseUrl,P=(0,o.useContext)(u),N=m||v,L=(0,c.Z)(N),S=null==N?void 0:N.replace("pathname://",""),x=void 0!==S?(n=S,O&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0;x&&L&&(x=(0,f.applyTrailingSlash)(x,{trailingSlash:C,baseUrl:E}));var _,T=(0,o.useRef)(!1),Z=d?a.OL:a.rU,A=l.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!A&&L&&null!=x&&window.docusaurus.prefetch(x),function(){A&&_&&_.disconnect()}}),[x,A,L]);var U=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,I=!x||!L||U;return x&&L&&!U&&!y&&P.collectLink(x),I?o.createElement("a",Object.assign({href:x},N&&!L&&{target:"_blank",rel:"noopener noreferrer"},w)):o.createElement(Z,Object.assign({},w,{onMouseEnter:function(){T.current||null==x||(window.docusaurus.preload(x),T.current=!0)},innerRef:function(e){var t,n;A&&e&&L&&(t=e,n=function(){null!=x&&window.docusaurus.prefetch(x)},(_=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(t),_.disconnect(),n())}))}))).observe(t))},to:x||""},d&&{isActive:h,activeClassName:b}))}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(2263),o=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,l=a.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var o,a=e.split(/[#?]/)[0],i="/"===a||a===r?a:(o=a,n?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(a,i)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},3399:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=(n(6054),["components"]),c={title:"lerna",description:"A CLI to manage monorepo structures of JS-based projects"},l="lerna",u={unversionedId:"internal/concepts/lerna",id:"internal/concepts/lerna",isDocsHomePage:!1,title:"lerna",description:"A CLI to manage monorepo structures of JS-based projects",source:"@site/docs/internal/concepts/lerna.mdx",sourceDirName:"internal/concepts",slug:"/internal/concepts/lerna",permalink:"/telestion-docs/internal/concepts/lerna",editUrl:"https://github.com/wuespace/telestion-docs/docs/internal/concepts/lerna.mdx",version:"current",frontMatter:{title:"lerna",description:"A CLI to manage monorepo structures of JS-based projects"},sidebar:"tutorialSidebar",previous:{title:"telestion-client CLI",permalink:"/telestion-docs/client/concepts/tc-cli"},next:{title:"Conventional Commit Types",permalink:"/telestion-docs/internal/references/conventional-commit-types"}},s=[],f={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lerna"},(0,a.kt)("inlineCode",{parentName:"h1"},"lerna")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"lerna")," is a CLI to manage monorepo structures of JS-based projects."),(0,a.kt)("p",null,"It provides the capability to bump versions based on conventional commit\nmessages correctly, update cross-dependencies of the different packages and\npublish all packages to npm while simultaneously creating a release on GitHub\nand updating the ",(0,a.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md"),"."))}p.isMDXComponent=!0}}]);