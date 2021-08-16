"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[86],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,v=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6054:function(e,t,n){n.d(t,{kN:function(){return l},rj:function(){return i},s3:function(){return o}});var r=n(7294);function i(e){var t=e.cols,n=void 0===t?2:t,i=e.children;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},i)}var a=n(6742);function o(e){var t=e.children,n=e.to;return r.createElement(a.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}var c=function(){return r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var t=e.children,n=e.file;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(c,null)," ",t))}},6742:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3366),i=n(7294),a=n(3727),o=n(2263),c=n(3919),l=n(412),u=(0,i.createContext)({collectLink:function(){}}),s=n(4996),p=n(8780),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var d=function(e){var t,n,d=e.isNavLink,v=e.to,m=e.href,h=e.activeClassName,b=e.isActive,g=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,k=void 0===y||y,w=(0,r.Z)(e,f),O=(0,o.Z)().siteConfig,E=O.trailingSlash,x=O.baseUrl,j=(0,s.C)().withBaseUrl,C=(0,i.useContext)(u),P=v||m,N=(0,c.Z)(P),T=null==P?void 0:P.replace("pathname://",""),S=void 0!==T?(n=T,k&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0;S&&N&&(S=(0,p.applyTrailingSlash)(S,{trailingSlash:E,baseUrl:x}));var Z,U=(0,i.useRef)(!1),_=d?a.OL:a.rU,B=l.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!B&&N&&null!=S&&window.docusaurus.prefetch(S),function(){B&&Z&&Z.disconnect()}}),[S,B,N]);var M=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,V=!S||!N||M;return S&&N&&!M&&!g&&C.collectLink(S),V?i.createElement("a",Object.assign({href:S},P&&!N&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(_,Object.assign({},w,{onMouseEnter:function(){U.current||null==S||(window.docusaurus.preload(S),U.current=!0)},innerRef:function(e){var t,n;B&&e&&N&&(t=e,n=function(){null!=S&&window.docusaurus.prefetch(S)},(Z=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.unobserve(t),Z.disconnect(),n())}))}))).observe(t))},to:S||""},d&&{isActive:b,activeClassName:h}))}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(2263),i=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,l=a.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},3764:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=n(6054),c=["components"],l={title:"Verticle"},u=void 0,s={unversionedId:"application/concepts/verticle",id:"application/concepts/verticle",isDocsHomePage:!1,title:"Verticle",description:'Verticles are the "building blocks," so to speak, of the',source:"@site/docs/application/concepts/verticle.mdx",sourceDirName:"application/concepts",slug:"/application/concepts/verticle",permalink:"/telestion-docs/application/concepts/verticle",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/application/concepts/verticle.mdx",version:"current",frontMatter:{title:"Verticle"},sidebar:"tutorialSidebar",previous:{title:"Event Bus",permalink:"/telestion-docs/application/concepts/event-bus"},next:{title:"Vert.x",permalink:"/telestion-docs/application/concepts/vertx"}},p=[{value:"Basic mechanism",id:"basic-mechanism",children:[]},{value:"Example Code",id:"example-code",children:[]},{value:"See also",id:"see-also",children:[]}],f={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Verticles are the "building blocks," so to speak, of the\n',(0,a.kt)("a",{parentName:"p",href:"vertx"},"Vert.x framework"),"."),(0,a.kt)("h2",{id:"basic-mechanism"},"Basic mechanism"),(0,a.kt)("img",{src:"/telestion-docs/img/excalidraw-diagrams/vertx/verticle.svg",className:"invertable"}),(0,a.kt)("h2",{id:"example-code"},"Example Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class MyVerticle extends AbstractVerticle {\n    // Called when verticle is deployed\n    public void start() {\n    }\n\n    // Optional - called when verticle is undeployed\n    public void stop() {\n    }\n}\n")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)(o.s3,{to:"../tutorials/writing-a-verticle",mdxType:"Reference"},"Tutorial: Writing a verticle"))}d.isMDXComponent=!0}}]);