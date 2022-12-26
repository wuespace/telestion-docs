"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[2317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=l.createContext({}),s=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||c;return n?l.createElement(h,a(a({ref:t},p),{},{components:n})):l.createElement(h,a({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,a[1]=r;for(var s=2;s<c;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4966:(e,t,n)=>{n.d(t,{kN:()=>o,rj:()=>i,Ee:()=>m,s3:()=>a});var l=n(7294);function i(e){let{cols:t=2,children:n}=e;return l.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,columnGap:"1em"}},n)}var c=n(9960);function a(e){let{children:t,to:n}=e;return l.createElement(c.Z,{to:n,className:"block-link"},l.createElement("span",null,t," \xbb"),l.createElement("span",null,n))}const r=()=>l.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},l.createElement("defs",null,l.createElement("style",null,".a{clip-path:url(#b);}"),l.createElement("clipPath",{id:"b"},l.createElement("rect",{width:24,height:24}))),l.createElement("g",{id:"a",className:"a"},l.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})));function o(e){let{children:t,file:n}=e;return l.createElement("a",{className:"block-link",download:!0,href:n},l.createElement("span",null,l.createElement(r,null)," ",t))}var s=n(7462),p=n(4996),d=n(6010);function m(e){let{src:t,invertible:n=!1,center:i=!1,alt:a="",...r}=e;const o=t.startsWith("/static")?t.substr(7):t,m=(0,p.Z)(o);return l.createElement(l.Fragment,null,l.createElement(c.Z,{to:o,style:{display:"none"}},"Link to ",a),l.createElement("img",(0,s.Z)({src:m,className:(0,d.Z)(n&&"invertible",i&&"center"),alt:a},r)))}},7750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var l=n(7462),i=(n(7294),n(3905)),c=n(4966);const a={title:"telestion-client CLI",description:"An overview of the telestion-client CLI (tc-cli)"},r="`telestion-client` CLI",o={unversionedId:"client/concepts/tc-cli",id:"client/concepts/tc-cli",title:"telestion-client CLI",description:"An overview of the telestion-client CLI (tc-cli)",source:"@site/docs/client/concepts/200-tc-cli.mdx",sourceDirName:"client/concepts",slug:"/client/concepts/tc-cli",permalink:"/client/concepts/tc-cli",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/client/concepts/200-tc-cli.mdx",tags:[],version:"current",sidebarPosition:200,frontMatter:{title:"telestion-client CLI",description:"An overview of the telestion-client CLI (tc-cli)"},sidebar:"client",previous:{title:"React",permalink:"/client/concepts/react"},next:{title:"Tutorials",permalink:"/client/tutorials"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Available commands",id:"available-commands",level:2},{value:"<code>tc-cli build</code>",id:"tc-cli-build",level:3},{value:"<code>tc-cli docs</code>",id:"tc-cli-docs",level:3},{value:"<code>tc-cli generate &lt;component&gt; &lt;name&gt;</code>",id:"tc-cli-generate-component-name",level:3},{value:"<code>tc-cli init [name]</code>",id:"tc-cli-init-name",level:3},{value:"<code>tc-cli start</code>",id:"tc-cli-start",level:3},{value:"<code>tc-cli stats</code>",id:"tc-cli-stats",level:3},{value:"See also",id:"see-also",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"telestion-client-cli"},(0,i.kt)("inlineCode",{parentName:"h1"},"telestion-client")," CLI"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"telestion-client CLI"),", which gets called with the ",(0,i.kt)("inlineCode",{parentName:"p"},"tc-cli")," command, is a\nCLI for developing Project-Specific clients, or short, PSCs."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"You can install the ",(0,i.kt)("em",{parentName:"p"},"telestion-client CLI")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @wuespace/telestion-client-cli\n")),(0,i.kt)("h2",{id:"available-commands"},"Available commands"),(0,i.kt)("p",null,"After its installation, the CLI is available as ",(0,i.kt)("inlineCode",{parentName:"p"},"tc-cli"),". It has several\ncommands that you can execute using ",(0,i.kt)("inlineCode",{parentName:"p"},"tc-cli <command>"),"."),(0,i.kt)("h3",{id:"tc-cli-build"},(0,i.kt)("inlineCode",{parentName:"h3"},"tc-cli build")),(0,i.kt)("p",null,"Builds a Telestion Client Project for different platforms."),(0,i.kt)("h3",{id:"tc-cli-docs"},(0,i.kt)("inlineCode",{parentName:"h3"},"tc-cli docs")),(0,i.kt)("p",null,"Opens the Telestion Documentation in a web browser."),(0,i.kt)("h3",{id:"tc-cli-generate-component-name"},(0,i.kt)("inlineCode",{parentName:"h3"},"tc-cli generate <component> <name>")),(0,i.kt)("p",null,"Adds a new component to an existing Telestion Client Project. For example, to\ngenerate a new widget, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tc-cli generate widget telecommand-widget\n")),(0,i.kt)("h3",{id:"tc-cli-init-name"},(0,i.kt)("inlineCode",{parentName:"h3"},"tc-cli init [name]")),(0,i.kt)("p",null,"Initializes a new Telestion Client Project with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"[name]")," in the folder\n",(0,i.kt)("inlineCode",{parentName:"p"},"[name]"),"."),(0,i.kt)("h3",{id:"tc-cli-start"},(0,i.kt)("inlineCode",{parentName:"h3"},"tc-cli start")),(0,i.kt)("p",null,"Runs a development version of the client, including live hot reloading of source\ncode changes."),(0,i.kt)("p",null,"Also opens the client as either an Electron app or in the browser if you add\n",(0,i.kt)("inlineCode",{parentName:"p"},"--electron")," (short: ",(0,i.kt)("inlineCode",{parentName:"p"},"-e"),") or ",(0,i.kt)("inlineCode",{parentName:"p"},"--browser")," (short: ",(0,i.kt)("inlineCode",{parentName:"p"},"-b"),") respectively."),(0,i.kt)("h3",{id:"tc-cli-stats"},(0,i.kt)("inlineCode",{parentName:"h3"},"tc-cli stats")),(0,i.kt)("p",null,"Displays some interesting statistics of the Telestion Client Project."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)(c.s3,{to:"https://github.com/wuespace/telestion-client/tree/main/packages/telestion-client-cli",mdxType:"Reference"},(0,i.kt)("code",null,"tc-cli")," Source Code"),(0,i.kt)(c.s3,{to:"https://www.npmjs.com/package/@wuespace/telestion-client-cli",mdxType:"Reference"},"npm package"))}m.isMDXComponent=!0}}]);