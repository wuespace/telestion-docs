"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[1074],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4966:(e,t,n)=>{n.d(t,{kN:()=>c,rj:()=>o,Ee:()=>d,s3:()=>l});var r=n(7294);function o(e){let{cols:t=2,children:n}=e;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,columnGap:"1em"}},n)}var a=n(9960);function l(e){let{children:t,to:n}=e;return r.createElement(a.Z,{to:n,className:"block-link"},r.createElement("span",null,t," \xbb"),r.createElement("span",null,n))}const i=()=>r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})));function c(e){let{children:t,file:n}=e;return r.createElement("a",{className:"block-link",download:!0,href:n},r.createElement("span",null,r.createElement(i,null)," ",t))}var s=n(7462),p=n(4996),m=n(6010);function d(e){let{src:t,invertible:n=!1,center:o=!1,alt:l="",...i}=e;const c=t.startsWith("/static")?t.substr(7):t,d=(0,p.Z)(c);return r.createElement(r.Fragment,null,r.createElement(a.Z,{to:c,style:{display:"none"}},"Link to ",l),r.createElement("img",(0,s.Z)({src:d,className:(0,m.Z)(n&&"invertible",o&&"center"),alt:l},i)))}},5805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),a=n(4966);const l={title:"NodeJS",description:"Short overview of NodeJS, a runtime environment for JavaScript."},i=void 0,c={unversionedId:"client/concepts/nodejs",id:"client/concepts/nodejs",title:"NodeJS",description:"Short overview of NodeJS, a runtime environment for JavaScript.",source:"@site/docs/client/concepts/100-nodejs.mdx",sourceDirName:"client/concepts",slug:"/client/concepts/nodejs",permalink:"/client/concepts/nodejs",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/client/concepts/100-nodejs.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"NodeJS",description:"Short overview of NodeJS, a runtime environment for JavaScript."},sidebar:"client",previous:{title:"Concepts",permalink:"/client/concepts"},next:{title:"npm",permalink:"/client/concepts/npm"}},s={},p=[{value:"The command-line interface",id:"the-command-line-interface",level:2},{value:"<em>&quot;Hello World&quot;</em> in Node.js",id:"hello-world-in-nodejs",level:2},{value:"See also",id:"see-also",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NodeJS"),", also called ",(0,o.kt)("em",{parentName:"p"},"Node.js")," or, short: ",(0,o.kt)("em",{parentName:"p"},"Node"),", is a runtime environment for\nJavaScript. You can run it from the command line using the node command."),(0,o.kt)("p",null,"You can use it to run applications written in JavaScript. Furthermore, it\nexposes APIs that enable applications to access native features such as the file\nsystem and much more."),(0,o.kt)("h2",{id:"the-command-line-interface"},"The command-line interface"),(0,o.kt)("p",null,"To run a JS file with Node, run ",(0,o.kt)("inlineCode",{parentName:"p"},"node [JS file location]")," in your command line.\nIt's also possible to open an interactive REPL (Read-eval-print loop) by just\nrunning ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," without any arguments."),(0,o.kt)("h2",{id:"hello-world-in-nodejs"},(0,o.kt)("em",{parentName:"h2"},'"Hello World"')," in Node.js"),(0,o.kt)("p",null,"Create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"myFile.js")," with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='myFile.js'",title:"'myFile.js'"},"console.log('Hello World');\n")),(0,o.kt)("p",null,"You can then run it using ",(0,o.kt)("inlineCode",{parentName:"p"},"node myFile.js")," in your command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ node myFile.js\nHello World\n")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)(a.s3,{to:"/client/concepts/npm",mdxType:"Reference"},"npm: A package manager for NodeJS applications"),(0,o.kt)(a.s3,{to:"https://nodejs.org/en/",mdxType:"Reference"},"NodeJS Website / Download"))}d.isMDXComponent=!0}}]);