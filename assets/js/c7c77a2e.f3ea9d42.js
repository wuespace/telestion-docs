"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[2835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5335:(e,t,n)=>{n.d(t,{ZP:()=>r});var i=n(7462),a=(n(7294),n(3905));const o={toc:[]};function r(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Deprecated: Vert.x-based Telestion",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Please note that the application and development of backend services using Vert.x in Telestion are deprecated. In the future, Telestion backend services will be developed using TypeScript and Deno, or through custom integrations with other languages."),(0,a.kt)("p",{parentName:"admonition"},"While there may be a compatibility layer for Vert.x services in the future, its availability is not guaranteed."),(0,a.kt)("p",{parentName:"admonition"},"For developing backend services, please refer to the (Work-in-Progress) documentation available here: ",(0,a.kt)("a",{parentName:"p",href:"https://pklaschka.github.io/telestion-docs-new/"},"https://pklaschka.github.io/telestion-docs-new/"),". Once the documentation is complete, it will be moved to the main Telestion documentation."),(0,a.kt)("p",{parentName:"admonition"},"Additional Information:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"NATS will be used as the distributed message bus/message broker for Telestion."),(0,a.kt)("li",{parentName:"ul"},"NATS' integrated authentication and authorization features will handle authentication and authorization for Ground Station operators, providing a single source of truth."),(0,a.kt)("li",{parentName:"ul"},"The event bus bridge will no longer be featured, and clients will be directly connected to the NATS server.")),(0,a.kt)("p",{parentName:"admonition"},"To establish a more technology-independent terminology, the Telestion project will modify the naming conventions as follows:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The NATS server will be referred to as the message broker, message bus, or NATS server interchangeably."),(0,a.kt)("li",{parentName:"ul"},"Components that act as services without an attached user interface, will be referred to as services or backend services collectively."),(0,a.kt)("li",{parentName:"ul"},'Components that provide a user interface, formerly known as "clients," will be referred to as frontends. In most cases, the frontend will authenticate to the message broker as the user, while backend services will act on their own behalf.')),(0,a.kt)("p",{parentName:"admonition"},'These changes aim to provide clearer and more consistent terminology, accounting for the possibility of components having both service and frontend functionalities. Additionally, the use of "client" for frontends will be replaced to avoid potential confusion.'),(0,a.kt)("p",{parentName:"admonition"},"We recommend using the NATS client libraries recommended by NATS itself, unless there are no suitable options available for the targeted language/environment. We will not develop our own client libraries unless there is a lack of suitable options or significant advantages justify the effort."),(0,a.kt)("p",{parentName:"admonition"},"While Deno/TypeScript is the recommended choice for backend services, its use is not mandatory. Developers will be encouraged to use Deno/TypeScript where appropriate, but other options will still be supported for specific services. Comprehensive documentation and resources will be provided for writing and deploying Deno-based backend services in TypeScript."),(0,a.kt)("p",{parentName:"admonition"},"Please consider these changes and updates as you continue with Telestion development.")))}r.isMDXComponent=!0},4966:(e,t,n)=>{n.d(t,{kN:()=>s,rj:()=>a,Ee:()=>p,s3:()=>r});var i=n(7294);function a(e){let{cols:t=2,children:n}=e;return i.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,columnGap:"1em"}},n)}var o=n(9960);function r(e){let{children:t,to:n}=e;return i.createElement(o.Z,{to:n,className:"block-link"},i.createElement("span",null,t," \xbb"),i.createElement("span",null,n))}const l=()=>i.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},i.createElement("defs",null,i.createElement("style",null,".a{clip-path:url(#b);}"),i.createElement("clipPath",{id:"b"},i.createElement("rect",{width:24,height:24}))),i.createElement("g",{id:"a",className:"a"},i.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})));function s(e){let{children:t,file:n}=e;return i.createElement("a",{className:"block-link",download:!0,href:n},i.createElement("span",null,i.createElement(l,null)," ",t))}var d=n(7462),c=n(4996),u=n(6010);function p(e){let{src:t,invertible:n=!1,center:a=!1,alt:r="",...l}=e;const s=t.startsWith("/static")?t.substr(7):t,p=(0,c.Z)(s);return i.createElement(i.Fragment,null,i.createElement(o.Z,{to:s,style:{display:"none"}},"Link to ",r),i.createElement("img",(0,d.Z)({src:p,className:(0,u.Z)(n&&"invertible",a&&"center"),alt:r},l)))}n(5335)},9042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905)),o=n(4966);const r={title:"Creating your first own widget",description:"Telestion Client projects need their custom widgets. Thankfully, the Telestion tooling makes it straightforward to generate new widgets. Learn how to bootstrap a new widget and include it in a dashboard."},l=void 0,s={unversionedId:"client/tutorials/bootstrapping-a-widget",id:"client/tutorials/bootstrapping-a-widget",title:"Creating your first own widget",description:"Telestion Client projects need their custom widgets. Thankfully, the Telestion tooling makes it straightforward to generate new widgets. Learn how to bootstrap a new widget and include it in a dashboard.",source:"@site/docs/client/tutorials/200-bootstrapping-a-widget.mdx",sourceDirName:"client/tutorials",slug:"/client/tutorials/bootstrapping-a-widget",permalink:"/client/tutorials/bootstrapping-a-widget",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/client/tutorials/200-bootstrapping-a-widget.mdx",tags:[],version:"current",sidebarPosition:200,frontMatter:{title:"Creating your first own widget",description:"Telestion Client projects need their custom widgets. Thankfully, the Telestion tooling makes it straightforward to generate new widgets. Learn how to bootstrap a new widget and include it in a dashboard."},sidebar:"client",previous:{title:"Setting up the development environment",permalink:"/client/tutorials/dev-env-setup"},next:{title:"Building the UI using React Spectrum",permalink:"/client/tutorials/building-ui-using-react-spectrum"}},d={},c=[{value:"What you&#39;ll build",id:"what-youll-build",level:2},{value:"Step 1: Bootstrap a new widget using the Telestion Client CLI",id:"step-1-bootstrap-a-new-widget-using-the-telestion-client-cli",level:2},{value:"Step 2: Add the widget to your dashboard",id:"step-2-add-the-widget-to-your-dashboard",level:2},{value:"Step 3: Add first customizations to the widget",id:"step-3-add-first-customizations-to-the-widget",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial, you'll generate a new widget from scratch and include it in\none of your dashboards."),(0,a.kt)("admonition",{title:"Prerequisites",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To complete this tutorial, you should be familiar with React, TypeScript, and\nhave a Telestion Client project that you want to work with.")),(0,a.kt)("p",null,"If you use ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start")," within your project, you'll see a window with a login\nscreen:"),(0,a.kt)(o.Ee,{src:"img/client/login.png",mdxType:"Image"}),(0,a.kt)("p",null,"If you log in using the username ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," and an arbitrary password (since you\nhaven't configured any authentication yet, you can just log in using random\ncredentials), you can see a dashboard with a sample widget (",(0,a.kt)("em",{parentName:"p"},"Hello world"),") and\nsome missing widgets:"),(0,a.kt)(o.Ee,{src:"img/client/default-dashboard.png",mdxType:"Image"}),(0,a.kt)("h2",{id:"what-youll-build"},"What you'll build"),(0,a.kt)("p",null,"In this tutorial, you won't build anything fancy, but you'll learn:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"how to bootstrap a new widget using the Telestion Client CLI"),(0,a.kt)("li",{parentName:"ol"},"how to add your new widget to a dashboard"),(0,a.kt)("li",{parentName:"ol"},"how to add some simple adjustments to the widget")),(0,a.kt)("p",null,"In the end, you'll have one less ",(0,a.kt)("em",{parentName:"p"},"Missing widget")," message on your dashboard:"),(0,a.kt)(o.Ee,{src:"img/client/my-first-widget/02.png",mdxType:"Image"}),(0,a.kt)("h2",{id:"step-1-bootstrap-a-new-widget-using-the-telestion-client-cli"},"Step 1: Bootstrap a new widget using the Telestion Client CLI"),(0,a.kt)("p",null,"Within your project folder, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"tc-cli")," to automatically bootstrap a new\nwidget for you:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tc-cli generate widget my-first-widget\n")),(0,a.kt)("p",null,"The result looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ tc-cli generate widget my-first-widget\n SUCCESS  widget-generator  Widget myFirstWidget created successfully.\n INFO     widget-generator  You can find it at src/widgets/my-first-widget.\n")),(0,a.kt)("p",null,"This command does four things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the CLI created a folder for your widget in ",(0,a.kt)("inlineCode",{parentName:"li"},"src/widgets/my-first-widget"),",\nwhere the source files of your widgets can live"),(0,a.kt)("li",{parentName:"ol"},"the CLI created a file ",(0,a.kt)("inlineCode",{parentName:"li"},"src/widgets/my-first-widget/widget.tsx")," that contains\nthe React component that the dashboard renders for your widget"),(0,a.kt)("li",{parentName:"ol"},"the CLI created a file ",(0,a.kt)("inlineCode",{parentName:"li"},"src/widgets/my-first-widget/index.ts")," that exports\nthe component from ",(0,a.kt)("inlineCode",{parentName:"li"},"widget.tsx")," with some metadata"),(0,a.kt)("li",{parentName:"ol"},"the CLI modified the file ",(0,a.kt)("inlineCode",{parentName:"li"},"src/widgets/index.ts")," to include your new widget\n",(0,a.kt)("inlineCode",{parentName:"li"},"myFirstWidget")," in the array of available widgets.")),(0,a.kt)("p",null,"With that, you already have all the files you need and even have a working\nwidget. But when you look at your dashboard again, your widget isn't visible\nyet."),(0,a.kt)("h2",{id:"step-2-add-the-widget-to-your-dashboard"},"Step 2: Add the widget to your dashboard"),(0,a.kt)("p",null,"To add the new widget to your dashboard, you must edit the dashboard\nconfiguration. For that, you need a way to reference your newly created widget."),(0,a.kt)("p",null,"Thankfully, if you take a closer look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," of your new widget, you\ncan see that it already exports a name (",(0,a.kt)("inlineCode",{parentName:"p"},"'myFirstWidget'"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/widgets/my-new-widget/index.ts",title:"src/widgets/my-new-widget/index.ts"},"import { Widget } from '@wuespace/telestion-client-types';\nimport { Widget as WidgetRenderer } from './widget';\n\nexport const widget: Widget = {\n    // highlight-next-line\n    name: 'myFirstWidget',\n    title: 'my-first-widget',\n    version: '0.0.0',\n    Widget: WidgetRenderer\n};\n")),(0,a.kt)("p",null,"You can find the administrator user's dashboard's configuration in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"src/model/sample-user-config.ts")," file. Replace the second widget's ",(0,a.kt)("inlineCode",{parentName:"p"},"widgetName"),"\nproperty with your widget name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/model/sample-user-config.ts",title:"src/model/sample-user-config.ts"},"import { UserConfig } from '@wuespace/telestion-client-types';\n\nexport const userConfig: UserConfig = {\n    admin: {\n        dashboards: [\n            {\n                title: 'Overview',\n                columns: 4,\n                rows: 4,\n                widgets: [\n                    {\n                        id: '0',\n                        widgetName: 'sampleWidget',\n                        width: 4,\n                        height: 1\n                    },\n                    {\n                        id: '1',\n                        // highlight-next-line\n                        widgetName: 'myFirstWidget',\n                        width: 2,\n                        height: 2\n                    },\n                    [...]\n                ]\n            }\n        ]\n    }\n};\n")),(0,a.kt)("p",null,"When you save the file and return to the client's window, it automatically\nreloads the page, and you can see your widget on the left of the second row:"),(0,a.kt)(o.Ee,{src:"img/client/my-first-widget/01.png",mdxType:"Image"}),(0,a.kt)("h2",{id:"step-3-add-first-customizations-to-the-widget"},"Step 3: Add first customizations to the widget"),(0,a.kt)("p",null,"While it's cool that you just created your first own widget, that headline\n",(0,a.kt)("em",{parentName:"p"},"myFirstWidget widget")," looks a bit hideous \ud83d\ude09."),(0,a.kt)("p",null,"But since the React component within your ",(0,a.kt)("inlineCode",{parentName:"p"},"widget.tsx")," defines your UI, you can\ncreate whatever UI you want."),(0,a.kt)("p",null,"For demonstration purposes, you'll adjust the heading to something more\nreadable. Open the file and edit the headline to something you like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/widgets/my-first-widget/widget.tsx",title:"src/widgets/my-first-widget/widget.tsx"},"import { Heading } from '@adobe/react-spectrum';\n\nexport function Widget() {\n    // highlight-next-line\n    return <Heading level={2}>Hello from my first widget!</Heading>;\n}\n")),(0,a.kt)("p",null,'Once again, all you need to do is save the file, wait for a couple of seconds,\nand return to the client window. Now, you should be able to see your first "own"\nwidget come to life:'),(0,a.kt)(o.Ee,{src:"img/client/my-first-widget/02.png",mdxType:"Image"}),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"Congratulations: you've already built your first widget. While, of course, it\ndoesn't look like much, yet, all you now need to do is write a \"plain\" React\ncomponent with the help of abstractions for communicating with the backend\nApplication and much more."),(0,a.kt)("p",null,"Even better: Telestion does all the heavy lifting in the background\n(authentication, online/offline-handling, dashboard/widget configuration, etc.),\nmeaning you can focus on an isolated context within your widget."),(0,a.kt)("p",null,"In the following tutorials, you'll take a look at how you can use the React\nSpectrum library to build widgets that are consistent with the other parts of\nthe UI, interact with Telestion's event bus abstractions to interact with the\nbackend, and using a simple way of adding user configuration options to your\nwidget."))}p.isMDXComponent=!0}}]);