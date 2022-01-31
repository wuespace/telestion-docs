"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[8382],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return c},rj:function(){return a},Ee:function(){return f},s3:function(){return i}});var r=n(7294);function a(e){var t=e.cols,n=void 0===t?2:t,a=e.children;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},a)}var l=n(9960);function i(e){var t=e.children,n=e.to;return r.createElement(l.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}var o=function(){return r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function c(e){var t=e.children,n=e.file;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(o,null)," ",t))}var s=n(7462),u=n(3366),d=n(4996),m=n(6010),p=["src","invertible","center","alt"];function f(e){var t=e.src,n=e.invertible,a=void 0!==n&&n,i=e.center,o=void 0!==i&&i,c=e.alt,f=void 0===c?"":c,h=(0,u.Z)(e,p),k=t.startsWith("/static")?t.substr(7):t,v=(0,d.Z)(k);return r.createElement(r.Fragment,null,r.createElement(l.Z,{to:k,style:{display:"none"}},"Link to ",f),r.createElement("img",(0,s.Z)({src:v,className:(0,m.Z)(a&&"invertible",o&&"center"),alt:f},h)))}},3051:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(4966),o=["components"],c={title:"Conventional Commit Types",description:"Find out which conventional commit type you need to use."},s=void 0,u={unversionedId:"internal/references/conventional-commit-types",id:"internal/references/conventional-commit-types",title:"Conventional Commit Types",description:"Find out which conventional commit type you need to use.",source:"@site/docs/internal/references/conventional-commit-types.mdx",sourceDirName:"internal/references",slug:"/internal/references/conventional-commit-types",permalink:"/internal/references/conventional-commit-types",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/internal/references/conventional-commit-types.mdx",tags:[],version:"current",frontMatter:{title:"Conventional Commit Types",description:"Find out which conventional commit type you need to use."},sidebar:"tutorialSidebar",previous:{title:"Branch Naming Guidelines",permalink:"/internal/references/branch-names"},next:{title:"Key Git Principles",permalink:"/internal/references/key-git-principles"}},d=[{value:"Diagram",id:"diagram",children:[],level:2},{value:"Table",id:"table",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],m={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document gives you a quick way to determine the correct conventional commit\ntype for your change."),(0,l.kt)("h2",{id:"diagram"},"Diagram"),(0,l.kt)(i.Ee,{src:"/static/img/drawio-diagrams/conventional-commits/conventional-commits-decision-table.drawio.svg",invertable:!0,mdxType:"Image"}),(0,l.kt)("h2",{id:"table"},"Table"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"More than one commit types")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Use the most extensive type (the highest in the table below) if a commit\nincludes more than one commit type. Using the broadest type ensures correct\nversioning. For example, if a feature, as a side-effect, also fixes a bug, it's\nstill a feature. If it closes an issue, please still include\n",(0,l.kt)("inlineCode",{parentName:"p"},"Closes: #issue-number")," in the commit's footer to signify the fix"))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Breaking Changes")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If a commit has breaking changes, you need to declare it using an exclamation\nmark (",(0,l.kt)("inlineCode",{parentName:"p"},"!"),") before the colon (between the type and the colon (",(0,l.kt)("inlineCode",{parentName:"p"},":"),"), for example,\n",(0,l.kt)("inlineCode",{parentName:"p"},"fix!: Hello world"),", or, if it exists, the scope and the colon, for example,\n",(0,l.kt)("inlineCode",{parentName:"p"},"feat(scope)!: Hello World"),"). With breaking changes, you should include a\n",(0,l.kt)("inlineCode",{parentName:"p"},"BREAKING CHANGE: [description]")," footer describing the breaking change."))),(0,l.kt)("table",{id:"table_fhj_gnv_vnb"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("i",null,"Conventional Commit Type")),(0,l.kt)("td",null,"Changelog entry"),(0,l.kt)("td",null,"Smallest Required Version Bump"),(0,l.kt)("td",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"feat")),(0,l.kt)("td",null,(0,l.kt)("q",null,"Features")),(0,l.kt)("td",null,"minor (major if breaking)"),(0,l.kt)("td",null,"Newly implemented features")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"fix")),(0,l.kt)("td",null,(0,l.kt)("q",null,"Bug Fixes")),(0,l.kt)("td",null,"patch (major if breaking)"),(0,l.kt)("td",null,"Bug fixes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"docs")),(0,l.kt)("td",null,(0,l.kt)("q",null,"Documentation Changes")),(0,l.kt)("td",null,"patch"),(0,l.kt)("td",null,"Documentation-only changes.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"chore")),(0,l.kt)("td",null,"n/a"),(0,l.kt)("td",null,"patch"),(0,l.kt)("td",null,"Meta changes that don't change the actual product, but rather the build system, CI configuration, repo structure, etc.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"style")),(0,l.kt)("td",null,"n/a"),(0,l.kt)("td",null,"patch"),(0,l.kt)("td",null,"Changes that only affect the code style (fixed linting issues, etc.)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"refactor")),(0,l.kt)("td",null,"n/a"),(0,l.kt)("td",null,"patch"),(0,l.kt)("td",null,"Refactorings only causing internal changes not affecting the actual behavior")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"perf")),(0,l.kt)("td",null,"n/a"),(0,l.kt)("td",null,"patch"),(0,l.kt)("td",null,"Performance-only changes, not affecting the actual behavior")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"test")),(0,l.kt)("td",null,"n/a"),(0,l.kt)("td",null,"patch"),(0,l.kt)("td",null,"Added, removed or changed unit, integration or E2E tests. May not include changes to the source code.")))),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)(i.s3,{to:"/internal/concepts/conventional-commits",mdxType:"Reference"},"Conventional Commits Concept"))}p.isMDXComponent=!0}}]);