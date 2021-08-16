"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[132],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6054:function(e,t,n){n.d(t,{kN:function(){return l},rj:function(){return i},s3:function(){return o}});var r=n(7294);function i(e){var t=e.cols,n=void 0===t?2:t,i=e.children;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},i)}var a=n(6742);function o(e){var t=e.children,n=e.to;return r.createElement(a.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}var s=function(){return r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var t=e.children,n=e.file;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(s,null)," ",t))}},6742:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3366),i=n(7294),a=n(3727),o=n(2263),s=n(3919),l=n(412),c=(0,i.createContext)({collectLink:function(){}}),u=n(4996),p=n(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var m=function(e){var t,n,m=e.isNavLink,h=e.to,f=e.href,v=e.activeClassName,y=e.isActive,g=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,k=void 0===b||b,w=(0,r.Z)(e,d),O=(0,o.Z)().siteConfig,N=O.trailingSlash,j=O.baseUrl,C=(0,u.C)().withBaseUrl,E=(0,i.useContext)(c),x=h||f,P=(0,s.Z)(x),T=null==x?void 0:x.replace("pathname://",""),S=void 0!==T?(n=T,k&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;S&&P&&(S=(0,p.applyTrailingSlash)(S,{trailingSlash:N,baseUrl:j}));var M,U=(0,i.useRef)(!1),B=m?a.OL:a.rU,D=l.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!D&&P&&null!=S&&window.docusaurus.prefetch(S),function(){D&&M&&M.disconnect()}}),[S,D,P]);var Z=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,_=!S||!P||Z;return S&&P&&!Z&&!g&&E.collectLink(S),_?i.createElement("a",Object.assign({href:S},x&&!P&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(B,Object.assign({},w,{onMouseEnter:function(){U.current||null==S||(window.docusaurus.preload(S),U.current=!0)},innerRef:function(e){var t,n;D&&e&&P&&(t=e,n=function(){null!=S&&window.docusaurus.prefetch(S)},(M=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),n())}))}))).observe(t))},to:S||""},m&&{isActive:y,activeClassName:v}))}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(2263),i=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,s=void 0!==o&&o,l=a.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},4521:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=n(6054),s=["components"],l={title:"Key Git Principles",description:"Critical principles for contributing to and maintaining the telestion-client repository"},c=void 0,u={unversionedId:"internal/references/key-git-principles",id:"internal/references/key-git-principles",isDocsHomePage:!1,title:"Key Git Principles",description:"Critical principles for contributing to and maintaining the telestion-client repository",source:"@site/docs/internal/references/key-git-principles.mdx",sourceDirName:"internal/references",slug:"/internal/references/key-git-principles",permalink:"/telestion-docs/internal/references/key-git-principles",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/internal/references/key-git-principles.mdx",version:"current",frontMatter:{title:"Key Git Principles",description:"Critical principles for contributing to and maintaining the telestion-client repository"},sidebar:"tutorialSidebar",previous:{title:"Conventional Commit Types",permalink:"/telestion-docs/internal/references/conventional-commit-types"},next:{title:"Maintainer's Tasks",permalink:"/telestion-docs/internal/references/maintainers-tasks"}},p=[{value:"Be kind!",id:"be-kind",children:[]},{value:"Keep <code>main</code> instantly releasable",id:"keep-main-instantly-releasable",children:[]},{value:"One branch per change",id:"one-branch-per-change",children:[]},{value:"Use the conventional commit commit-name system",id:"use-the-conventional-commit-commit-name-system",children:[]},{value:"Don&#39;t be afraid to ask",id:"dont-be-afraid-to-ask",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document provides an overview of the fundamental principles we follow\nwithin our GitHub repositories."),(0,a.kt)("h2",{id:"be-kind"},"Be kind!"),(0,a.kt)("p",null,"Yes, it sounds silly, but it's probably the most important principle of them\nall. Open-Source contributions are, in 99 % of the cases, side-projects.\nOpen-Source is an excellent principle, and you can be proud to contribute to the\npool of open-source software. Don't use comments like \"RTFM!\" in this community."),(0,a.kt)("p",null,'Contributing to an open-source project is scary enough already: Your code is\navailable for the world to see (and judge). But you do need and should\nappreciate these contributions. Therefore, if the best you can do is post some\ndiscouraging comment about why something is "just bad", keep it to yourself!'),(0,a.kt)("p",null,"Constructive criticism is appreciated, but you should always combine it with\nexplicit appreciation for the time the other person has taken."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Online comments often get misinterpreted in the worst possible way (as it is,\nunfortunately, also the safest way for the person receiving them).\nUnfortunately, misunderstandings happen far sooner than you might think,\nespecially when they begin to cross cultures and languages. So please keep that\nin mind when writing comments."))),(0,a.kt)("h2",{id:"keep-main-instantly-releasable"},"Keep ",(0,a.kt)("inlineCode",{parentName:"h2"},"main")," instantly releasable"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Always")," keep the state of the main branch releasable. As this project\nimplements automation in such a way that pre-configured tools automatically\nrelease the correct kind of semantic release on the press of a button (which,\ntheoretically, anyone should be able to press). Pressing that button should\nresult in a good release whenever it gets pressed."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Keeping ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," instantly releasable enables this project to release changes in\nno time, if needed or wanted"))),(0,a.kt)("h2",{id:"one-branch-per-change"},"One branch per change"),(0,a.kt)("p",null,"Don't try to put more than one kind of change (bug fix, feature, or anything\nelse) into a single branch, except if explicitly advised to do so by one of the\nmaintainers. Having one branch per change ensures the ability to correctly merge\nit with a conventional commit message, should the need arise, and guarantees\ncorrect generation of release notes and changelog in releases."),(0,a.kt)("h2",{id:"use-the-conventional-commit-commit-name-system"},"Use the conventional commit commit-name system"),(0,a.kt)("p",null,"The conventional commit system lets this project generate release notes and the\nrequired semantic type of release at the push of a button without having to\nthink about it (sticking with the instantly releasable theme)."),(0,a.kt)("p",null,'So don\'t worry if you might do something wrong. Even the "worst" of mistakes a\nmaintainer can fix. Either when merging your Pull Request (by squashing the\ncommits with a new commit message) or another way.'),(0,a.kt)(o.s3,{to:"./conventional-commit-types",mdxType:"Reference"},"Choose the correct conventional commit type"),(0,a.kt)("h2",{id:"dont-be-afraid-to-ask"},"Don't be afraid to ask"),(0,a.kt)("p",null,"While everyone claims that JavaScript and Java are easy compared to other\nlanguages (that may or may not be the case), what this project uses is a rather\ncomplex and a large ecosystem with plenty of tooling."),(0,a.kt)("p",null,"While, at its core, it's still \"easy old JS or Java,\" a lot might not be\napparent immediately. So always feel free to ask about anything. If someone\nisn't kind in their response, they don't belong into this project, and in 99 %\nof the cases, you'll get a kind reply from someone else."),(0,a.kt)("p",null,"Remember: You're not the first to feel this way (and even the most experienced\nof developers sometimes have to ask someone else to find out they've forgotten\nto hit ",(0,a.kt)("strong",{parentName:"p"},"Compile")," \ud83d\ude09)"))}m.isMDXComponent=!0}}]);