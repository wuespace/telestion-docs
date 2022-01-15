"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[835],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),g=a,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return s},rj:function(){return a},Ee:function(){return m},s3:function(){return o}});var i=n(7294);function a(e){var t=e.cols,n=void 0===t?2:t,a=e.children;return i.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},a)}var r=n(9960);function o(e){var t=e.children,n=e.to;return i.createElement(r.Z,{to:n,className:"block-link"},i.createElement("span",null,t," \xbb"),i.createElement("span",null,n))}var l=function(){return i.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},i.createElement("defs",null,i.createElement("style",null,".a{clip-path:url(#b);}"),i.createElement("clipPath",{id:"b"},i.createElement("rect",{width:24,height:24}))),i.createElement("g",{id:"a",className:"a"},i.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function s(e){var t=e.children,n=e.file;return i.createElement("a",{className:"block-link",download:!0,href:n},i.createElement("span",null,i.createElement(l,null)," ",t))}var d=n(7462),c=n(3366),u=n(4996),p=n(6010),g=["src","invertible","center","alt"];function m(e){var t=e.src,n=e.invertible,a=void 0!==n&&n,o=e.center,l=void 0!==o&&o,s=e.alt,m=void 0===s?"":s,h=(0,c.Z)(e,g),w=t.startsWith("/static")?t.substr(7):t,f=(0,u.Z)(w);return i.createElement(i.Fragment,null,i.createElement(r.Z,{to:w,style:{display:"none"}},"Link to ",m),i.createElement("img",(0,d.Z)({src:f,className:(0,p.Z)(a&&"invertible",l&&"center"),alt:m},h)))}},9042:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return g}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=n(4966),l=["components"],s={title:"Creating your first own widget",description:"Many Telestion Client projects need their own, custom widgets. Thankfully, the Telestion tooling makes it straight-forward to generate new widgets. Learn how to bootstrap a new widget and include it in a dashboard."},d=void 0,c={unversionedId:"client/tutorials/bootstrapping-a-widget",id:"client/tutorials/bootstrapping-a-widget",title:"Creating your first own widget",description:"Many Telestion Client projects need their own, custom widgets. Thankfully, the Telestion tooling makes it straight-forward to generate new widgets. Learn how to bootstrap a new widget and include it in a dashboard.",source:"@site/docs/client/tutorials/200-bootstrapping-a-widget.mdx",sourceDirName:"client/tutorials",slug:"/client/tutorials/bootstrapping-a-widget",permalink:"/telestion-docs/client/tutorials/bootstrapping-a-widget",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/client/tutorials/200-bootstrapping-a-widget.mdx",tags:[],version:"current",sidebarPosition:200,frontMatter:{title:"Creating your first own widget",description:"Many Telestion Client projects need their own, custom widgets. Thankfully, the Telestion tooling makes it straight-forward to generate new widgets. Learn how to bootstrap a new widget and include it in a dashboard."},sidebar:"tutorialSidebar",previous:{title:"Setting up the development enviroment",permalink:"/telestion-docs/client/tutorials/dev-env-setup"},next:{title:"Building the UI using React Spectrum",permalink:"/telestion-docs/client/tutorials/building-ui-using-react-spectrum"}},u=[{value:"What we&#39;ll build",id:"what-well-build",children:[],level:2},{value:"Step 1: Bootstrap a new widget using the Telestion Client CLI",id:"step-1-bootstrap-a-new-widget-using-the-telestion-client-cli",children:[],level:2},{value:"Step 2: Add the widget to your dashboard",id:"step-2-add-the-widget-to-your-dashboard",children:[],level:2},{value:"Step 3: Add first customizations to the widget",id:"step-3-add-first-customizations-to-the-widget",children:[],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],p={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, we'll generate a new widget from scratch and include it in one\nof our dashboards."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To complete this tutorial, you should be familiar with React, TypeScript, and\nhave a Telestion Client project that you want to work on."))),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," within your project, you'll see a window with a login\nscreen:"),(0,r.kt)(o.Ee,{src:"img/client/login.png",mdxType:"Image"}),(0,r.kt)("p",null,"If you login using the username ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," and an arbitrary password (since you\nhaven't configured any authentication, yet, you can just login using random\ncredentials), you can see a dashboard with a sample widget (",(0,r.kt)("em",{parentName:"p"},"Hello world"),") and a\nfew missing widgets:"),(0,r.kt)(o.Ee,{src:"img/client/default-dashboard.png",mdxType:"Image"}),(0,r.kt)("h2",{id:"what-well-build"},"What we'll build"),(0,r.kt)("p",null,"In this tutorial, we won't build anything fancy, but you'll learn:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"how to bootstrap a new widget using the Telestion Client CLI"),(0,r.kt)("li",{parentName:"ol"},"how to add your new widget to a dashboard"),(0,r.kt)("li",{parentName:"ol"},"how to add some simple adjustments to the widget")),(0,r.kt)("p",null,"In the end, you'll have one less ",(0,r.kt)("em",{parentName:"p"},"Missing widget")," message on your dashboard:"),(0,r.kt)(o.Ee,{src:"img/client/my-first-widget/02.png",mdxType:"Image"}),(0,r.kt)("h2",{id:"step-1-bootstrap-a-new-widget-using-the-telestion-client-cli"},"Step 1: Bootstrap a new widget using the Telestion Client CLI"),(0,r.kt)("p",null,"Within your project folder, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"tc-cli")," to automatically bootstrap a new\nwidget for you:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"tc-cli generate widget my-first-widget\n")),(0,r.kt)("p",null,"The result will look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ tc-cli generate widget my-first-widget\n SUCCESS  widget-generator  Widget myFirstWidget created successfully.\n INFO     widget-generator  You can find it at src/widgets/my-first-widget.\n")),(0,r.kt)("p",null,"This command does four things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"the CLI created a folder for your widget in ",(0,r.kt)("inlineCode",{parentName:"li"},"src/widgets/my-first-widget"),",\nwhere the source files of your widgets can live"),(0,r.kt)("li",{parentName:"ol"},"the CLI created a file ",(0,r.kt)("inlineCode",{parentName:"li"},"src/widgets/my-first-widget/widget.tsx")," that contains\nthe React component that the dashboard renders for your widget"),(0,r.kt)("li",{parentName:"ol"},"the CLI created a file ",(0,r.kt)("inlineCode",{parentName:"li"},"src/widgets/my-first-widget/index.ts")," that exports\nthe component from ",(0,r.kt)("inlineCode",{parentName:"li"},"widget.tsx")," with some additional metadata"),(0,r.kt)("li",{parentName:"ol"},"the CLI modified the file ",(0,r.kt)("inlineCode",{parentName:"li"},"src/widgets/index.ts")," to include your new widget\n",(0,r.kt)("inlineCode",{parentName:"li"},"myFirstWidget")," in the array of available widgets.")),(0,r.kt)("p",null,"With that, you already have all the files you need, and actually even have a\nworking widget. However, when you look at your dashboard again, your widget\nisn't visible, yet."),(0,r.kt)("h2",{id:"step-2-add-the-widget-to-your-dashboard"},"Step 2: Add the widget to your dashboard"),(0,r.kt)("p",null,"To add the new widget to your dashboard, you need to modify the dashboard\nconfiguration. For that, we need a way to reference your newly created widget."),(0,r.kt)("p",null,"Thankfully, if you take a closer look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," of your new widget, you\ncan see that it already exports a name (",(0,r.kt)("inlineCode",{parentName:"p"},"'myFirstWidget'"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/widgets/my-new-widget/index.ts",title:"src/widgets/my-new-widget/index.ts"},"import { Widget } from '@wuespace/telestion-client-types';\nimport { Widget as WidgetRenderer } from './widget';\n\nexport const widget: Widget = {\n    // highlight-next-line\n    name: 'myFirstWidget',\n    title: 'my-first-widget',\n    version: '0.0.0',\n    Widget: WidgetRenderer\n};\n")),(0,r.kt)("p",null,"The admin's dashboard is currently defined in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"src/model/sample-user-config.ts")," file. Let's replace the second widget's\n",(0,r.kt)("inlineCode",{parentName:"p"},"widgetName")," property with our own widget name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/model/sample-user-config.ts",title:"src/model/sample-user-config.ts"},"import { UserConfig } from '@wuespace/telestion-client-types';\n\nexport const userConfig: UserConfig = {\n    admin: {\n        dashboards: [\n            {\n                title: 'Overview',\n                columns: 4,\n                rows: 4,\n                widgets: [\n                    {\n                        id: '0',\n                        widgetName: 'sampleWidget',\n                        width: 4,\n                        height: 1\n                    },\n                    {\n                        id: '1',\n                        // highlight-next-line\n                        widgetName: 'myFirstWidget',\n                        width: 2,\n                        height: 2\n                    },\n                    [...]\n                ]\n            }\n        ]\n    }\n};\n")),(0,r.kt)("p",null,"When you save the file and return to the client's window, it automatically\nreloads the page and you can see your own widget on the left of the second row:"),(0,r.kt)(o.Ee,{src:"img/client/my-first-widget/01.png",mdxType:"Image"}),(0,r.kt)("h2",{id:"step-3-add-first-customizations-to-the-widget"},"Step 3: Add first customizations to the widget"),(0,r.kt)("p",null,"Let's face it: While it's cool that you just created your first own widget, that\nheadline ",(0,r.kt)("em",{parentName:"p"},"myFirstWidget widget")," looks a litte bit ... hideous \ud83d\ude09."),(0,r.kt)("p",null,"However, since this UI is entirely defined by the React component within your\n",(0,r.kt)("inlineCode",{parentName:"p"},"widget.tsx"),", you can create whatever UI you want."),(0,r.kt)("p",null,"For demonstration purposes, we'll adjust the heading to something more readable.\nOpen the file and modify the headline to something you like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/widgets/my-first-widget/widget.tsx",title:"src/widgets/my-first-widget/widget.tsx"},"import { Heading } from '@adobe/react-spectrum';\n\nexport function Widget() {\n    // highlight-next-line\n    return <Heading level={2}>Hello from my first widget!</Heading>;\n}\n")),(0,r.kt)("p",null,'Once again, all you need to do is save the file, wait for a few seconds, and\nreturn to the client window. Now, you should be able to see your first "really\nown" widget come to life:'),(0,r.kt)(o.Ee,{src:"img/client/my-first-widget/02.png",mdxType:"Image"}),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Congratulations! You've already built your first widget. While of course, it\ndoesn't look like much, yet, all you now need to do is write a \"plain\" React\ncomponent with the help of many abstractions for communicating with the backend\nApplication and much more."),(0,r.kt)("p",null,"Even better: Telestion does all the heavy lifting in the background\n(authentication, online/offline-handling, dashboard/widget configuration, etc.),\nmeaning you can focus on an isolated context within your widget."),(0,r.kt)("p",null,"In the next tutorials, we'll take a look at how you can use the React Spectrum\nlibrary to build widgets that are consistent with the other parts of the UI,\ninteract with our event bus abstractions to interact with the backend, and using\nour simple way of adding user configuration options to your widget."))}g.isMDXComponent=!0}}]);