"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[525],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return c},rj:function(){return a},Ee:function(){return h},s3:function(){return l}});var i=n(7294);function a(e){var t=e.cols,n=void 0===t?2:t,a=e.children;return i.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},a)}var r=n(9960);function l(e){var t=e.children,n=e.to;return i.createElement(r.Z,{to:n,className:"block-link"},i.createElement("span",null,t," \xbb"),i.createElement("span",null,n))}var o=function(){return i.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},i.createElement("defs",null,i.createElement("style",null,".a{clip-path:url(#b);}"),i.createElement("clipPath",{id:"b"},i.createElement("rect",{width:24,height:24}))),i.createElement("g",{id:"a",className:"a"},i.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function c(e){var t=e.children,n=e.file;return i.createElement("a",{className:"block-link",download:!0,href:n},i.createElement("span",null,i.createElement(o,null)," ",t))}var s=n(7462),p=n(3366),d=n(4996),m=n(6010),u=["src","invertible","center","alt"];function h(e){var t=e.src,n=e.invertible,a=void 0!==n&&n,l=e.center,o=void 0!==l&&l,c=e.alt,h=void 0===c?"":c,v=(0,p.Z)(e,u),g=t.startsWith("/static")?t.substr(7):t,f=(0,d.Z)(g);return i.createElement(i.Fragment,null,i.createElement(r.Z,{to:g,style:{display:"none"}},"Link to ",h),i.createElement("img",(0,s.Z)({src:f,className:(0,m.Z)(a&&"invertible",o&&"center"),alt:h},v)))}},2355:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=(n(4966),["components"]),o={title:"Setting up the development enviroment",description:"Start a new telestion-client project with the tc-cli"},c=void 0,s={unversionedId:"client/tutorials/dev-env-setup",id:"client/tutorials/dev-env-setup",title:"Setting up the development enviroment",description:"Start a new telestion-client project with the tc-cli",source:"@site/docs/client/tutorials/100-dev-env-setup.mdx",sourceDirName:"client/tutorials",slug:"/client/tutorials/dev-env-setup",permalink:"/client/tutorials/dev-env-setup",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/client/tutorials/100-dev-env-setup.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Setting up the development enviroment",description:"Start a new telestion-client project with the tc-cli"},sidebar:"tutorialSidebar",previous:{title:"Client Tutorials",permalink:"/client/tutorials/"},next:{title:"Creating your first own widget",permalink:"/client/tutorials/bootstrapping-a-widget"}},p=[{value:"What we&#39;ll build",id:"what-well-build",children:[],level:2},{value:"Step 1: Installing <code>tc-cli</code>",id:"step-1-installing-tc-cli",children:[],level:2},{value:"Step 2: Initializing the project",id:"step-2-initializing-the-project",children:[],level:2},{value:"Step 3: Run the client",id:"step-3-run-the-client",children:[],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, we install the telstion-client-cli and generate a new\ntelestion-client project."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To complete this tutorial, you should be familiar with basic terminal commands."))),(0,r.kt)("h2",{id:"what-well-build"},"What we'll build"),(0,r.kt)("p",null,"The result is a project structure that you can immediately begin to customize."),(0,r.kt)("h2",{id:"step-1-installing-tc-cli"},"Step 1: Installing ",(0,r.kt)("inlineCode",{parentName:"h2"},"tc-cli")),(0,r.kt)("p",null,"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"tc-cli")," by running the following command in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --global @wuespace/telestion-client-cli\n")),(0,r.kt)("p",null,"This command installs the CLI, which you can call using the ",(0,r.kt)("inlineCode",{parentName:"p"},"tc-cli")," command."),(0,r.kt)("h2",{id:"step-2-initializing-the-project"},"Step 2: Initializing the project"),(0,r.kt)("p",null,"This step initializes the project."),(0,r.kt)("p",null,"Open the terminal where you want to generate the project and run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"tc-cli init myproject\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"myproject")," with your own desired name."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Using the ",(0,r.kt)("inlineCode",{parentName:"h5"},"telestion-project-template"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When using the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuespace/telestion-project-template"},(0,r.kt)("inlineCode",{parentName:"a"},"telestion-project-template")," repository"),"\nfor your project, just run ",(0,r.kt)("inlineCode",{parentName:"p"},"tc-cli init")," (without a folder name) inside the\nrepo's root folder. This command, then, automatically bootstraps a client\nproject into the repo's ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," folder."))),(0,r.kt)("p",null,"This command generates a folder with the chosen name that contains a\nready-to-use client project and installs all necessary dependencies."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Windows execution policies")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"On Windows machines, you might get an error message about execution policies. In\nthis case, run the power shell as administrator and use this command:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Set-ExecutionPolicy RemoteSigned -Scope CurrentUser\n")),(0,r.kt)("p",{parentName:"div"},"Restart your other terminal and re-run the ",(0,r.kt)("inlineCode",{parentName:"p"},"tc-cli")," command."))),(0,r.kt)("h2",{id:"step-3-run-the-client"},"Step 3: Run the client"),(0,r.kt)("p",null,"Run the client by navigating into your folder and run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm start\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This runs ",(0,r.kt)("inlineCode",{parentName:"p"},"tc-cli start --electron")," in the background."))),(0,r.kt)("p",null,"An electron window opens, and you can see your application."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Now that we've generated our client project, we'll configure and extend our\nclient in the following tutorials."))}m.isMDXComponent=!0}}]);