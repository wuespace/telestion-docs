"use strict";(self.webpackChunkdocusaurus_2_test=self.webpackChunkdocusaurus_2_test||[]).push([[419],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6054:function(e,n,t){t.d(n,{kN:function(){return l},rj:function(){return o},s3:function(){return i}});var r=t(7294);function o(e){var n=e.cols,t=void 0===n?2:n,o=e.children;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+t+", 1fr)",columnGap:"1em"}},o)}var a=t(6742);function i(e){var n=e.children,t=e.to;return r.createElement(a.Z,{to:t,className:"block-link"},r.createElement("span",null,n," \xbb"),r.createElement("span",null,t))}var c=function(){return r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var n=e.children,t=e.file;return r.createElement("a",{className:"block-link",download:!0,href:t},r.createElement("span",null,r.createElement(c,null)," ",n))}},6742:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(3366),o=t(7294),a=t(3727),i=t(2263),c=t(3919),l=t(412),u=(0,o.createContext)({collectLink:function(){}}),s=t(4996),f=t(8780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var d=function(e){var n,t,d=e.isNavLink,m=e.to,v=e.href,b=e.activeClassName,h=e.isActive,y=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,O=void 0===g||g,w=(0,r.Z)(e,p),k=(0,i.Z)().siteConfig,C=k.trailingSlash,E=k.baseUrl,j=(0,s.C)().withBaseUrl,P=(0,o.useContext)(u),N=m||v,S=(0,c.Z)(N),x=null==N?void 0:N.replace("pathname://",""),L=void 0!==x?(t=x,O&&function(e){return e.startsWith("/")}(t)?j(t):t):void 0;L&&S&&(L=(0,f.applyTrailingSlash)(L,{trailingSlash:C,baseUrl:E}));var _,T=(0,o.useRef)(!1),Z=d?a.OL:a.rU,A=l.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!A&&S&&null!=L&&window.docusaurus.prefetch(L),function(){A&&_&&_.disconnect()}}),[L,A,S]);var U=null!==(n=null==L?void 0:L.startsWith("#"))&&void 0!==n&&n,M=!L||!S||U;return L&&S&&!U&&!y&&P.collectLink(L),M?o.createElement("a",Object.assign({href:L},N&&!S&&{target:"_blank",rel:"noopener noreferrer"},w)):o.createElement(Z,Object.assign({},w,{onMouseEnter:function(){T.current||null==L||(window.docusaurus.preload(L),T.current=!0)},innerRef:function(e){var n,t;A&&e&&S&&(n=e,t=function(){null!=L&&window.docusaurus.prefetch(L)},(_=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(n),_.disconnect(),t())}))}))).observe(n))},to:L||""},d&&{isActive:h,activeClassName:b}))}},3919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},4996:function(e,n,t){t.d(n,{C:function(){return a},Z:function(){return i}});var r=t(2263),o=t(3919);function a(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,l=a.absolute,u=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(c)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+s:s}(a,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},8802:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var o,a=e.split(/[#?]/)[0],i="/"===a||a===r?a:(o=a,t?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(a,i)}},8780:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var o=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var a=t(9964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},3399:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=(t(6054),["components"]),c={title:"lerna",description:"A CLI to manage monorepo structures of JS-based projects"},l="lerna",u={unversionedId:"internal/concepts/lerna",id:"internal/concepts/lerna",isDocsHomePage:!1,title:"lerna",description:"A CLI to manage monorepo structures of JS-based projects",source:"@site/docs/internal/concepts/lerna.mdx",sourceDirName:"internal/concepts",slug:"/internal/concepts/lerna",permalink:"/telestion-docs/internal/concepts/lerna",editUrl:"https://github.com/wuespace/telestion-docs/docs/internal/concepts/lerna.mdx",version:"current",frontMatter:{title:"lerna",description:"A CLI to manage monorepo structures of JS-based projects"},sidebar:"tutorialSidebar",previous:{title:"Conventional Commits",permalink:"/telestion-docs/internal/concepts/conventional-commits"},next:{title:"Conventional Commit Types",permalink:"/telestion-docs/internal/references/conventional-commit-types"}},s=[],f={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lerna"},(0,a.kt)("inlineCode",{parentName:"h1"},"lerna")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"lerna")," is a CLI to manage monorepo structures of JS-based projects."),(0,a.kt)("p",null,"It provides the capability to bump versions based on conventional commit\nmessages correctly, update cross-dependencies of the different packages and\npublish all packages to npm while simultaneously creating a release on GitHub\nand updating the ",(0,a.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md"),"."))}p.isMDXComponent=!0}}]);