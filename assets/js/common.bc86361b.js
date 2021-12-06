"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[592],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return v}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),v=i,p=d["".concat(u,".").concat(v)]||d[v]||f[v]||a;return n?r.createElement(p,o(o({ref:t},s),{},{components:n})):r.createElement(p,o({ref:t},s))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8168:function(e,t,n){n.d(t,{kN:function(){return u},rj:function(){return i},Ee:function(){return p},s3:function(){return o}});var r=n(7294);function i(e){var t=e.cols,n=void 0===t?2:t,i=e.children;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},i)}var a=n(6742);function o(e){var t=e.children,n=e.to;return r.createElement(a.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}var c=function(){return r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function u(e){var t=e.children,n=e.file;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(c,null)," ",t))}var l=n(7462),s=n(3366),f=n(4996),d=n(6010),v=["src","invertible","center","alt"];function p(e){var t=e.src,n=e.invertible,i=void 0!==n&&n,o=e.center,c=void 0!==o&&o,u=e.alt,p=void 0===u?"":u,m=(0,s.Z)(e,v),b=t.startsWith("/static")?t.substr(7):t,h=(0,f.Z)(b);return r.createElement(r.Fragment,null,r.createElement(a.Z,{to:b,style:{display:"none"}},"Link to ",p),r.createElement("img",(0,l.Z)({src:h,className:(0,d.Z)(i&&"invertible",c&&"center"),alt:p},m)))}},6742:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(3366),i=n(7294),a=n(3727),o=n(2263),c=n(3919),u=n(412),l=(0,i.createContext)({collectLink:function(){}}),s=n(4996),f=n(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,v=e.isNavLink,p=e.to,m=e.href,b=e.activeClassName,h=e.isActive,y=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,O=void 0===g||g,w=(0,r.Z)(e,d),E=(0,o.Z)().siteConfig,j=E.trailingSlash,k=E.baseUrl,P=(0,s.C)().withBaseUrl,C=(0,i.useContext)(l),Z=p||m,N=(0,c.Z)(Z),_=null==Z?void 0:Z.replace("pathname://",""),U=void 0!==_?(n=_,O&&function(e){return e.startsWith("/")}(n)?P(n):n):void 0;U&&N&&(U=(0,f.applyTrailingSlash)(U,{trailingSlash:j,baseUrl:k}));var x=(0,i.useRef)(!1),A=v?a.OL:a.rU,S=u.Z.canUseIntersectionObserver,T=(0,i.useRef)();(0,i.useEffect)((function(){return!S&&N&&null!=U&&window.docusaurus.prefetch(U),function(){S&&T.current&&T.current.disconnect()}}),[T,U,S,N]);var L=null!==(t=null==U?void 0:U.startsWith("#"))&&void 0!==t&&t,B=!U||!N||L;return U&&N&&!L&&!y&&C.collectLink(U),B?i.createElement("a",Object.assign({href:U},Z&&!N&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(A,Object.assign({},w,{onMouseEnter:function(){x.current||null==U||(window.docusaurus.preload(U),x.current=!0)},innerRef:function(e){var t,n;S&&e&&N&&(t=e,n=function(){null!=U&&window.docusaurus.prefetch(U)},T.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.current.unobserve(t),T.current.disconnect(),n())}))})),T.current.observe(t))},to:U||""},v&&{isActive:h,activeClassName:b}))}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(2263),i=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,u=a.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6010:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);