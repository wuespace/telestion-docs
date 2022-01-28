"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[500],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||a;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return l},rj:function(){return r},Ee:function(){return g},s3:function(){return o}});var i=n(7294);function r(e){var t=e.cols,n=void 0===t?2:t,r=e.children;return i.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},r)}var a=n(9960);function o(e){var t=e.children,n=e.to;return i.createElement(a.Z,{to:n,className:"block-link"},i.createElement("span",null,t," \xbb"),i.createElement("span",null,n))}var s=function(){return i.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},i.createElement("defs",null,i.createElement("style",null,".a{clip-path:url(#b);}"),i.createElement("clipPath",{id:"b"},i.createElement("rect",{width:24,height:24}))),i.createElement("g",{id:"a",className:"a"},i.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var t=e.children,n=e.file;return i.createElement("a",{className:"block-link",download:!0,href:n},i.createElement("span",null,i.createElement(s,null)," ",t))}var c=n(7462),u=n(3366),d=n(4996),m=n(6010),p=["src","invertible","center","alt"];function g(e){var t=e.src,n=e.invertible,r=void 0!==n&&n,o=e.center,s=void 0!==o&&o,l=e.alt,g=void 0===l?"":l,h=(0,u.Z)(e,p),f=t.startsWith("/static")?t.substr(7):t,w=(0,d.Z)(f);return i.createElement(i.Fragment,null,i.createElement(a.Z,{to:f,style:{display:"none"}},"Link to ",g),i.createElement("img",(0,c.Z)({src:w,className:(0,m.Z)(r&&"invertible",s&&"center"),alt:g},h)))}},9923:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=n(4966),s=["components"],l={title:"Building the UI using React Spectrum",description:"The Telestion Client ecosystem uses the Adobe Spectrum Design system for its UI. Learn how to use the React Spectrum implementation to build your widget's UI."},c=void 0,u={unversionedId:"client/tutorials/building-ui-using-react-spectrum",id:"client/tutorials/building-ui-using-react-spectrum",title:"Building the UI using React Spectrum",description:"The Telestion Client ecosystem uses the Adobe Spectrum Design system for its UI. Learn how to use the React Spectrum implementation to build your widget's UI.",source:"@site/docs/client/tutorials/210-building-ui-using-react-spectrum.mdx",sourceDirName:"client/tutorials",slug:"/client/tutorials/building-ui-using-react-spectrum",permalink:"/client/tutorials/building-ui-using-react-spectrum",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/client/tutorials/210-building-ui-using-react-spectrum.mdx",tags:[],version:"current",sidebarPosition:210,frontMatter:{title:"Building the UI using React Spectrum",description:"The Telestion Client ecosystem uses the Adobe Spectrum Design system for its UI. Learn how to use the React Spectrum implementation to build your widget's UI."},sidebar:"tutorialSidebar",previous:{title:"Creating your first own widget",permalink:"/client/tutorials/bootstrapping-a-widget"},next:{title:"Connecting the widget with the Event Bus",permalink:"/client/tutorials/connecting-with-event-bus"}},d=[{value:"What we&#39;ll build",id:"what-well-build",children:[],level:2},{value:"Step 1: Build the overall layout",id:"step-1-build-the-overall-layout",children:[],level:2},{value:"Step 2: Add component for a system&#39;s indicator",id:"step-2-add-component-for-a-systems-indicator",children:[],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],m={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial, we'll use the React Spectrum library to build our widget's UI.\nReact Spectrum is a React-based implementation of Adobe's Spectrum Design\nsystem. Spectrum Design is the design system used by\n",(0,a.kt)("inlineCode",{parentName:"p"},"@wuespace/telestion-client-common")," library and therefore neatly integrates into\nthe other parts of the client's UI."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"To complete this tutorial, you should be familiar with React, TypeScript, and\nhave a widget bootstrapped according to the\n",(0,a.kt)("a",{parentName:"p",href:"../bootstrapping-a-widget"},"Bootstrapping a widget tutorial"),"."))),(0,a.kt)("h2",{id:"what-well-build"},"What we'll build"),(0,a.kt)("p",null,"We'll build our widget's UI. It should display the connection status (Connected\n/ Disconnected) of three different I/O interfaces: ",(0,a.kt)("inlineCode",{parentName:"p"},"SAT A"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SAT B"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"SAT C"),'\nand have "Reset" buttons that could, for example, trigger a Telecommand:'),(0,a.kt)(o.Ee,{src:"img/client/my-first-widget/04.png",center:!0,mdxType:"Image"}),(0,a.kt)("p",null,"In this tutorial, we won't connect this to any actual data source (the event\nbus) that's a part of the following tutorial."),(0,a.kt)("p",null,"The code we'll write looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='src/widgets/my-new-widget/widget.tsx'",title:"'src/widgets/my-new-widget/widget.tsx'"},'import {\n    Divider,\n    Flex,\n    Heading,\n    StatusLight,\n    View,\n    ActionButton\n} from \'@adobe/react-spectrum\';\n\nexport function Widget() {\n    return (\n        <View padding={\'size-200\'} height={\'100%\'}>\n            <Flex direction="column" width="100%">\n                <Heading level={3}>Connection Status</Heading>\n                <Divider size="M" marginBottom={\'size-200\'} />\n                <Indicator system="SAT A" />\n                <Indicator system="SAT B" />\n                <Indicator system="SAT C" />\n            </Flex>\n        </View>\n    );\n}\n\nfunction Indicator(props: { system: string }) {\n    return (\n        <Flex alignItems={\'baseline\'} gap={\'size-200\'}>\n            <StatusLight variant="positive">{props.system} Connected</StatusLight>\n            <ActionButton>Reset</ActionButton>\n        </Flex>\n    );\n}\n')),(0,a.kt)("h2",{id:"step-1-build-the-overall-layout"},"Step 1: Build the overall layout"),(0,a.kt)("p",null,"Adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"widget.tsx")," to have a base layout for our widget's UI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='src/widgets/my-new-widget/widget.tsx'",title:"'src/widgets/my-new-widget/widget.tsx'"},"// highlight-start\nimport { Divider, Flex, Heading, View } from '@adobe/react-spectrum';\n// highlight-end\n\nexport function Widget() {\n    // highlight-start\n    return (\n        <View padding={'size-200'} height={'100%'}>\n            <Flex direction=\"column\" width=\"100%\">\n                <Heading level={3}>Connection Status</Heading>\n                <Divider size=\"M\" marginBottom={'size-200'} />\n                {/* Content goes here */}\n            </Flex>\n        </View>\n    );\n    // highlight-end\n}\n")),(0,a.kt)("p",null,"The result should look something like this:"),(0,a.kt)(o.Ee,{src:"img/client/my-first-widget/03.png",center:!0,mdxType:"Image"}),(0,a.kt)("h2",{id:"step-2-add-component-for-a-systems-indicator"},"Step 2: Add component for a system's indicator"),(0,a.kt)("p",null,"Since we have three different systems, we'll extract their connection status UI\ninto one reusable ",(0,a.kt)("inlineCode",{parentName:"p"},"<Indicator />")," component and use it for our three different\nsystems:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='Car.java'",title:"'Car.java'"},'import {\n    Divider,\n    Flex,\n    Heading,\n  // highlight-next-line\n    StatusLight,\n    View,\n  // highlight-next-line\n    ActionButton\n} from \'@adobe/react-spectrum\';\n\nexport function Widget() {\n    return (\n        <View padding={\'size-200\'} height={\'100%\'}>\n            <Flex direction="column" width="100%">\n                <Heading level={3}>Connection Status</Heading>\n                <Divider size="M" marginBottom={\'size-200\'} />\n                // highlight-start\n                <Indicator system="SAT A" />\n                <Indicator system="SAT B" />\n                <Indicator system="SAT C" />\n                // highlight-end\n            </Flex>\n        </View>\n    );\n}\n\n// highlight-start\nfunction Indicator(props: { system: string }) {\n    return (\n        <Flex alignItems={\'baseline\'} gap={\'size-200\'}>\n            <StatusLight variant="positive">{props.system} Connected</StatusLight>\n            <ActionButton>Reset</ActionButton>\n        </Flex>\n    );\n}\n// highlight-end\n')),(0,a.kt)("p",null,"Now, our UI has status-light indicators for the connection status of the three\ndifferent systems and reset buttons:"),(0,a.kt)(o.Ee,{src:"img/client/my-first-widget/04.png",center:!0,mdxType:"Image"}),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"You have now developed a realistic widget using the Spectrum Design system."),(0,a.kt)("p",null,"We recommend that you familiarize yourself with both the Spectrum Design system\nin general as well as the React Spectrum implementation using Adobe's resources:"),(0,a.kt)(o.s3,{to:"https://spectrum.adobe.com/",mdxType:"Reference"},"Adobe Spectrum Design System"),(0,a.kt)(o.s3,{to:"https://react-spectrum.adobe.com/react-spectrum/index.html",mdxType:"Reference"},"React Spectrum Documentation"),(0,a.kt)("p",null,"Of course, this widget currently doesn't reflect the actual connection status.\nTo change that, you'll learn how to connect this widget to the Application's\nevent bus using the APIs from ",(0,a.kt)("inlineCode",{parentName:"p"},"@wuespace/telestion-client-core")," in the next\ntutorial:"),(0,a.kt)(o.s3,{to:"../connecting-with-event-bus",mdxType:"Reference"},"Connecting the widget with the Event Bus"))}p.isMDXComponent=!0}}]);