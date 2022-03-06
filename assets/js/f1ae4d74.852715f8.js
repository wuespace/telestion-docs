"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[1110],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=d(n),u=o,m=g["".concat(l,".").concat(u)]||g[u]||c[u]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return l},rj:function(){return o},Ee:function(){return m},s3:function(){return a}});var i=n(7294);function o(e){var t=e.cols,n=void 0===t?2:t,o=e.children;return i.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},o)}var r=n(9960);function a(e){var t=e.children,n=e.to;return i.createElement(r.Z,{to:n,className:"block-link"},i.createElement("span",null,t," \xbb"),i.createElement("span",null,n))}var s=function(){return i.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},i.createElement("defs",null,i.createElement("style",null,".a{clip-path:url(#b);}"),i.createElement("clipPath",{id:"b"},i.createElement("rect",{width:24,height:24}))),i.createElement("g",{id:"a",className:"a"},i.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var t=e.children,n=e.file;return i.createElement("a",{className:"block-link",download:!0,href:n},i.createElement("span",null,i.createElement(s,null)," ",t))}var d=n(7462),p=n(3366),c=n(4996),g=n(6010),u=["src","invertible","center","alt"];function m(e){var t=e.src,n=e.invertible,o=void 0!==n&&n,a=e.center,s=void 0!==a&&a,l=e.alt,m=void 0===l?"":l,h=(0,p.Z)(e,u),f=t.startsWith("/static")?t.substr(7):t,y=(0,c.Z)(f);return i.createElement(i.Fragment,null,i.createElement(r.Z,{to:f,style:{display:"none"}},"Link to ",m),i.createElement("img",(0,d.Z)({src:y,className:(0,g.Z)(o&&"invertible",s&&"center"),alt:m},h)))}},3943:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return g}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=n(4966),s=["components"],l={title:"Adding configuration options",description:"Make your widget configurable and re-usable by adding configuration options"},d=void 0,p={unversionedId:"client/tutorials/adding-configuration-options",id:"client/tutorials/adding-configuration-options",title:"Adding configuration options",description:"Make your widget configurable and re-usable by adding configuration options",source:"@site/docs/client/tutorials/230-adding-configuration-options.mdx",sourceDirName:"client/tutorials",slug:"/client/tutorials/adding-configuration-options",permalink:"/client/tutorials/adding-configuration-options",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/client/tutorials/230-adding-configuration-options.mdx",tags:[],version:"current",sidebarPosition:230,frontMatter:{title:"Adding configuration options",description:"Make your widget configurable and re-usable by adding configuration options"},sidebar:"client",previous:{title:"Connecting the widget with the Event Bus",permalink:"/client/tutorials/connecting-with-event-bus"},next:{title:"Writing a static dialog",permalink:"/client/tutorials/writing-a-static-dialog"}},c={},g=[{value:"What you&#39;ll build",id:"what-youll-build",level:2},{value:"Step 1: Define the configuration options",id:"step-1-define-the-configuration-options",level:2},{value:"Step 2: Adjust the widget",id:"step-2-adjust-the-widget",level:2},{value:"Step 3: Add default options to the user configuration",id:"step-3-add-default-options-to-the-user-configuration",level:2},{value:"Step 4: Add the configuration control interface component",id:"step-4-add-the-configuration-control-interface-component",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:g};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, you'll add configuration options to the widget from the\nprevious tutorials."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To complete this tutorial, you should be familiar with TypeScript and React."),(0,r.kt)("p",{parentName:"div"},"You should also have the widget's code from\n",(0,r.kt)("a",{parentName:"p",href:"/client/tutorials/connecting-with-event-bus"},"Connecting with the event bus"),"."))),(0,r.kt)("h2",{id:"what-youll-build"},"What you'll build"),(0,r.kt)("p",null,"In this tutorial, you'll add a ",(0,r.kt)("inlineCode",{parentName:"p"},"isReadonly")," configuration option to your widget.\nYou'll also add a user interface to let Ground Station Operators configure your\nwidget without having to adjust the code."),(0,r.kt)(a.Ee,{src:"img/client/my-first-widget/config-controls.gif",center:!0,mdxType:"Image"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='src/widgets/my-first-widget/model.ts'",title:"'src/widgets/my-first-widget/model.ts'"},"import { GenericProps } from '@wuespace/telestion-client-types';\n\n/**\n * Props for the \"my-first-widget\" widget\n */\nexport interface WidgetProps extends GenericProps {\n    /**\n     * Whether the widget should be read-only. If `true`, the reset buttons get disabled.\n     */\n    isReadonly: boolean;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title='src/widgets/my-first-widget/config.tsx'",title:"'src/widgets/my-first-widget/config.tsx'"},"import { Checkbox, View } from '@adobe/react-spectrum';\nimport { BaseConfigControlsProps } from '@wuespace/telestion-client-types';\nimport { WidgetProps } from './model';\n\nexport function ConfigControls(props: BaseConfigControlsProps<WidgetProps>) {\n    return (\n        <View padding=\"size-200\">\n            <Checkbox\n                isSelected={props.currentProps.isReadonly}\n                onChange={isReadonly => props.onUpdate({ isReadonly })}\n            >\n                Readonly (disable buttons)\n            </Checkbox>\n        </View>\n    );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='src/widgets/my-first-widget/index.ts'",title:"'src/widgets/my-first-widget/index.ts'"},"import { Widget } from '@wuespace/telestion-client-types';\n// highlight-start\nimport { ConfigControls } from './config';\nimport { WidgetProps } from './model';\n// highlight-end\nimport { Widget as WidgetRenderer } from './widget';\n\n// highlight-next-line\nexport const widget: Widget<WidgetProps> = {\n    name: 'myFirstWidget',\n    title: 'my-first-widget',\n    version: '0.0.0',\n    Widget: WidgetRenderer,\n    // highlight-next-line\n    ConfigControls\n};\n")),(0,r.kt)("h2",{id:"step-1-define-the-configuration-options"},"Step 1: Define the configuration options"),(0,r.kt)("p",null,"First, you need to define a type for your configuration options."),(0,r.kt)("p",null,"Create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"model.ts"),", and export an interface ",(0,r.kt)("inlineCode",{parentName:"p"},"WidgetProps")," with\nthe corresponding type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='src/widgets/my-first-widget/model.ts'",title:"'src/widgets/my-first-widget/model.ts'"},"import { GenericProps } from '@wuespace/telestion-client-types';\n\n/**\n * Props for the \"my-first-widget\" widget\n */\nexport interface WidgetProps extends GenericProps {\n    /**\n     * Whether the widget should be read-only. If `true`, the reset buttons get disabled.\n     */\n    isReadonly: boolean;\n}\n")),(0,r.kt)("p",null,"Update your widget's ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," to define your new interface as the widget's\nconfiguration type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='src/widgets/my-first-widget/index.ts'",title:"'src/widgets/my-first-widget/index.ts'"},"import { Widget } from '@wuespace/telestion-client-types';\n// highlight-next-line\nimport { WidgetProps } from './model';\nimport { Widget as WidgetRenderer } from './widget';\n\n// highlight-next-line\nexport const widget: Widget<WidgetProps> = {\n    name: 'myFirstWidget',\n    title: 'my-first-widget',\n    version: '0.0.0',\n    Widget: WidgetRenderer\n};\n")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Type error in ",(0,r.kt)("inlineCode",{parentName:"h5"},"src/widgets/index.ts")," depending on ",(0,r.kt)("inlineCode",{parentName:"h5"},"tc-cli")," version")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Depending on the version of ",(0,r.kt)("inlineCode",{parentName:"p"},"tc-cli")," you're using, this might lead to a type\nerror in your ",(0,r.kt)("inlineCode",{parentName:"p"},"src/widgets/index.ts")," file."),(0,r.kt)("p",{parentName:"div"},"If that's the case, append ",(0,r.kt)("inlineCode",{parentName:"p"},"as Widget")," to your widget's declaration:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='src/widgets/index.ts'",title:"'src/widgets/index.ts'"},"// highlight-next-line\nimport { Widget } from '@wuespace/telestion-client-types';\n// [...]\nimport { widget as myFirstWidget } from './my-first-widget';\n// IMPORT_INSERT_MARK\n\nexport const projectWidgets: Widget[] = [\n    // ARRAY_FIRST_ELEMENT_INSERT_MARK\n    // highlight-next-line\n    myFirstWidget as Widget,\n    // [...]\n    sampleWidget\n];\n")))),(0,r.kt)("h2",{id:"step-2-adjust-the-widget"},"Step 2: Adjust the widget"),(0,r.kt)("p",null,"The props passed to your widget now have the ",(0,r.kt)("inlineCode",{parentName:"p"},"WidgetProps")," type."),(0,r.kt)("p",null,"Use the props' ",(0,r.kt)("inlineCode",{parentName:"p"},"isReadonly")," property to deactivate the action buttons if the\nproperty's value is true:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title='src/widgets/my-first-widget/widget.tsx'",title:"'src/widgets/my-first-widget/widget.tsx'"},"// [...]\n// highlight-next-line\nimport { WidgetProps } from './model';\n\n// highlight-next-line\nexport function Widget(props: WidgetProps) {\n    return (\n        <View padding={'size-200'} height={'100%'}>\n            <Flex direction=\"column\" width=\"100%\">\n                <Heading level={3}>Connection Status</Heading>\n                <Divider size=\"M\" marginBottom={'size-200'} />\n                // highlight-start\n                <Indicator system=\"SAT A\" isReadonly={props.isReadonly} />\n                <Indicator system=\"SAT B\" isReadonly={props.isReadonly} />\n                <Indicator system=\"SAT C\" isReadonly={props.isReadonly} />\n                // highlight-end\n            </Flex>\n        </View>\n    );\n}\n\n// highlight-next-line\nfunction Indicator(props: { system: string; isReadonly: boolean }) {\n    const broadcast = useBroadcast('reset');\n    const status = useChannelLatest(`system-status/${props.system}`) ?? false;\n\n    return (\n        <Flex alignItems={'baseline'} gap={'size-200'}>\n            <StatusLight variant={status ? 'positive' : 'negative'}>\n                {props.system} {status ? 'Connected' : 'Disconnected'}\n            </StatusLight>\n            <ActionButton\n                onPress={() => broadcast({ system: props.system })}\n                // highlight-next-line\n                isDisabled={props.isReadonly}\n            >\n                Reset\n            </ActionButton>\n        </Flex>\n    );\n}\n")),(0,r.kt)("h2",{id:"step-3-add-default-options-to-the-user-configuration"},"Step 3: Add default options to the user configuration"),(0,r.kt)("p",null,"To make sure that the widget always gets the correct type, you need to specify\nthe widget usage's default configuration options in your dashboard's\ndeclaration."),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialProps")," field with ",(0,r.kt)("inlineCode",{parentName:"p"},"isReadonly")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," to your widget's\ndeclaration in your ",(0,r.kt)("inlineCode",{parentName:"p"},"sample-user-config.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='src/model/sample-user-config.ts'",title:"'src/model/sample-user-config.ts'"},"// [...]\n{\n  id: '1',\n  widgetName: 'myFirstWidget',\n  width: 2,\n  height: 2,\n  // highlight-start\n  initialProps: {\n    isReadonly: false\n  }\n  // highlight-end\n},\n// [...]\n")),(0,r.kt)("h2",{id:"step-4-add-the-configuration-control-interface-component"},"Step 4: Add the configuration control interface component"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"telestion-client")," library makes it easy to not only make your widgets\nconfigurable through the dashboard declaration, but also let your users adjust a\nwidget's configuration."),(0,r.kt)("p",null,"You don't have to worry about how to make this accessible to the user, all you\nneed to do is to define a user interface for adjusting the configuration options\nand declare it."),(0,r.kt)("p",null,"Create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"config.tsx")," in your widget's folder and define a ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigControls"),"\ncomponent like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title='src/widgets/my-first-widget/config.tsx'",title:"'src/widgets/my-first-widget/config.tsx'"},"import { Checkbox, View } from '@adobe/react-spectrum';\nimport { BaseConfigControlsProps } from '@wuespace/telestion-client-types';\nimport { WidgetProps } from './model';\n\nexport function ConfigControls(props: BaseConfigControlsProps<WidgetProps>) {\n    return (\n        <View padding=\"size-200\">\n            <Checkbox\n                isSelected={props.currentProps.isReadonly}\n                onChange={isReadonly => props.onUpdate({ isReadonly })}\n            >\n                Readonly (disable buttons)\n            </Checkbox>\n        </View>\n    );\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," contain two properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"currentProps"),", which is of your own ",(0,r.kt)("inlineCode",{parentName:"li"},"WidgetProps")," type, and represents the\ncurrent configuration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onUpdate(partial: Partial<WidgetProps>)"),", which you can use to set the user\nconfiguration (comparable to the ",(0,r.kt)("inlineCode",{parentName:"li"},"useState()")," setter function)")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Partial state in ",(0,r.kt)("inlineCode",{parentName:"h5"},"onUpdate"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"onUpdate")," function merges the partial state you pass into it with your\ncurrent state."),(0,r.kt)("p",{parentName:"div"},"For example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"currentProps")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"{ a: 1, c: 3 }")," and you call\n",(0,r.kt)("inlineCode",{parentName:"p"},"onUpdate({ b: 2, c: 4 })"),", the resulting ",(0,r.kt)("inlineCode",{parentName:"p"},"currentProps")," are\n",(0,r.kt)("inlineCode",{parentName:"p"},"{ a: 1, b: 2, c: 4 }"),"."))),(0,r.kt)("p",null,"All you need to do now to expose these configuration controls to your users is\nto declare your component in the widget's ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='src/widgets/my-first-widget/index.ts'",title:"'src/widgets/my-first-widget/index.ts'"},"import { Widget } from '@wuespace/telestion-client-types';\n// highlight-next-line\nimport { ConfigControls } from './config';\nimport { WidgetProps } from './model';\nimport { Widget as WidgetRenderer } from './widget';\n\nexport const widget: Widget<WidgetProps> = {\n    name: 'myFirstWidget',\n    title: 'my-first-widget',\n    version: '0.0.0',\n    Widget: WidgetRenderer,\n    // highlight-next-line\n    ConfigControls\n};\n")),(0,r.kt)("p",null,"With that, your users can now open your widget's configuration page through the\nwidget's context menu (right mouse button):"),(0,r.kt)(a.Ee,{src:"img/client/my-first-widget/config-controls.gif",center:!0,mdxType:"Image"}),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"You now know all the basics for building Telestion Client Widgets. But there are\nlots of other features the ",(0,r.kt)("inlineCode",{parentName:"p"},"telestion-client")," APIs allow you to do. If you want,\nyou can just keep reading through the tutorials."))}m.isMDXComponent=!0}}]);