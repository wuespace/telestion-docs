"use strict";(self.webpackChunkdocusaurus_2_test=self.webpackChunkdocusaurus_2_test||[]).push([[777],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6054:function(e,n,t){t.d(n,{kN:function(){return l},rj:function(){return i},s3:function(){return o}});var r=t(7294);function i(e){var n=e.cols,t=void 0===n?2:n,i=e.children;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+t+", 1fr)",columnGap:"1em"}},i)}var a=t(6742);function o(e){var n=e.children,t=e.to;return r.createElement(a.Z,{to:t,className:"block-link"},r.createElement("span",null,n," \xbb"),r.createElement("span",null,t))}var c=function(){return r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var n=e.children,t=e.file;return r.createElement("a",{className:"block-link",download:!0,href:t},r.createElement("span",null,r.createElement(c,null)," ",n))}},6742:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(3366),i=t(7294),a=t(3727),o=t(2263),c=t(3919),l=t(412),s=(0,i.createContext)({collectLink:function(){}}),u=t(4996),p=t(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var n,t,f=e.isNavLink,m=e.to,v=e.href,h=e.activeClassName,g=e.isActive,k=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,y=void 0===b||b,w=(0,r.Z)(e,d),j=(0,o.Z)().siteConfig,O=j.trailingSlash,C=j.baseUrl,E=(0,u.C)().withBaseUrl,N=(0,i.useContext)(s),P=m||v,_=(0,c.Z)(P),x=null==P?void 0:P.replace("pathname://",""),S=void 0!==x?(t=x,y&&function(e){return e.startsWith("/")}(t)?E(t):t):void 0;S&&_&&(S=(0,p.applyTrailingSlash)(S,{trailingSlash:O,baseUrl:C}));var T,Z=(0,i.useRef)(!1),A=f?a.OL:a.rU,U=l.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!U&&_&&null!=S&&window.docusaurus.prefetch(S),function(){U&&T&&T.disconnect()}}),[S,U,_]);var L=null!==(n=null==S?void 0:S.startsWith("#"))&&void 0!==n&&n,D=!S||!_||L;return S&&_&&!L&&!k&&N.collectLink(S),D?i.createElement("a",Object.assign({href:S},P&&!_&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(A,Object.assign({},w,{onMouseEnter:function(){Z.current||null==S||(window.docusaurus.preload(S),Z.current=!0)},innerRef:function(e){var n,t;U&&e&&_&&(n=e,t=function(){null!=S&&window.docusaurus.prefetch(S)},(T=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(n),T.disconnect(),t())}))}))).observe(n))},to:S||""},f&&{isActive:g,activeClassName:h}))}},3919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return i}})},4996:function(e,n,t){t.d(n,{C:function(){return a},Z:function(){return o}});var r=t(2263),i=t(3919);function a(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,l=a.absolute,s=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(c)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+u:u}(a,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},8802:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,t?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},8780:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var i=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=t(9964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},5944:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=t(6054),c=["components"],l={title:"npm",description:"An overview of the npm package manager"},s=void 0,u={unversionedId:"client/concepts/npm",id:"client/concepts/npm",isDocsHomePage:!1,title:"npm",description:"An overview of the npm package manager",source:"@site/docs/client/concepts/npm.mdx",sourceDirName:"client/concepts",slug:"/client/concepts/npm",permalink:"/telestion-docs/client/concepts/npm",editUrl:"https://github.com/wuespace/telestion-docs/docs/client/concepts/npm.mdx",version:"current",frontMatter:{title:"npm",description:"An overview of the npm package manager"},sidebar:"tutorialSidebar",previous:{title:"Writing a Verticle",permalink:"/telestion-docs/backend/tutorials/writing-a-verticle"},next:{title:"telestion-client CLI",permalink:"/telestion-docs/client/concepts/tc-cli"}},p=[{value:"<code>package.json</code>",id:"packagejson",children:[]},{value:"<code>package-lock.json</code>",id:"package-lockjson",children:[]},{value:"<code>node_modules</code>",id:"node_modules",children:[]},{value:"See also",id:"see-also",children:[]}],d={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm")," is a package manager for applications written in JavaScript (often running\non NodeJS) Similar to PIP for Python world or composer for PHP, npm is a package\nmanager for JavaScript, allowing installation and management of the project's\ndependencies (such as libraries, build tools, and more)."),(0,a.kt)("h2",{id:"packagejson"},(0,a.kt)("inlineCode",{parentName:"h2"},"package.json")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm")," uses a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," to keep track of the required\ndependencies. Dependencies will, themselves, have a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," that can also\nlist dependencies. Installing dependencies using the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," command\nautomatically resolves and installs these recursive dependencies."),(0,a.kt)("h2",{id:"package-lockjson"},(0,a.kt)("inlineCode",{parentName:"h2"},"package-lock.json")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"package-lock.json")," file gets generated when running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," and notes\nthe exact dependency versions you've installed. Later, by running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm ci"),",\nthese exact versions can be re-installed, allowing for a consistent working\nenvironment."),(0,a.kt)("h2",{id:"node_modules"},(0,a.kt)("inlineCode",{parentName:"h2"},"node_modules")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm")," installs the project dependencies in the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," directory. As this\nwill, after installation, often contain many files that can get re-installed, we\nrecommend to include the folder in your .gitignore file"),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)(o.s3,{to:"https://www.npmjs.com",mdxType:"Reference"},"npm Package Registry"))}f.isMDXComponent=!0}}]);