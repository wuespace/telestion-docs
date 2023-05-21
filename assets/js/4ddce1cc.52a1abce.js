"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[392],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=o.createContext({}),c=function(e){var n=o.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(r.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),p=i,h=u["".concat(r,".").concat(p)]||u[p]||m[p]||a;return t?o.createElement(h,s(s({ref:n},d),{},{components:t})):o.createElement(h,s({ref:n},d))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=u;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5335:(e,n,t)=>{t.d(n,{ZP:()=>s});var o=t(7462),i=(t(7294),t(3905));const a={toc:[]};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},a,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Deprecated: Vert.x-based Telestion",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Please note that the application and development of backend services using Vert.x in Telestion are deprecated. In the future, Telestion backend services will be developed using TypeScript and Deno, or through custom integrations with other languages."),(0,i.kt)("p",{parentName:"admonition"},"While there may be a compatibility layer for Vert.x services in the future, its availability is not guaranteed."),(0,i.kt)("p",{parentName:"admonition"},"For developing backend services, please refer to the (Work-in-Progress) documentation available here: ",(0,i.kt)("a",{parentName:"p",href:"https://pklaschka.github.io/telestion-docs-new/"},"https://pklaschka.github.io/telestion-docs-new/"),". Once the documentation is complete, it will be moved to the main Telestion documentation."),(0,i.kt)("p",{parentName:"admonition"},"Additional Information:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"NATS will be used as the distributed message bus/message broker for Telestion."),(0,i.kt)("li",{parentName:"ul"},"NATS' integrated authentication and authorization features will handle authentication and authorization for Ground Station operators, providing a single source of truth."),(0,i.kt)("li",{parentName:"ul"},"The event bus bridge will no longer be featured, and clients will be directly connected to the NATS server.")),(0,i.kt)("p",{parentName:"admonition"},"To establish a more technology-independent terminology, the Telestion project will modify the naming conventions as follows:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The NATS server will be referred to as the message broker, message bus, or NATS server interchangeably."),(0,i.kt)("li",{parentName:"ul"},"Components that act as services without an attached user interface, will be referred to as services or backend services collectively."),(0,i.kt)("li",{parentName:"ul"},'Components that provide a user interface, formerly known as "clients," will be referred to as frontends. In most cases, the frontend will authenticate to the message broker as the user, while backend services will act on their own behalf.')),(0,i.kt)("p",{parentName:"admonition"},'These changes aim to provide clearer and more consistent terminology, accounting for the possibility of components having both service and frontend functionalities. Additionally, the use of "client" for frontends will be replaced to avoid potential confusion.'),(0,i.kt)("p",{parentName:"admonition"},"We recommend using the NATS client libraries recommended by NATS itself, unless there are no suitable options available for the targeted language/environment. We will not develop our own client libraries unless there is a lack of suitable options or significant advantages justify the effort."),(0,i.kt)("p",{parentName:"admonition"},"While Deno/TypeScript is the recommended choice for backend services, its use is not mandatory. Developers will be encouraged to use Deno/TypeScript where appropriate, but other options will still be supported for specific services. Comprehensive documentation and resources will be provided for writing and deploying Deno-based backend services in TypeScript."),(0,i.kt)("p",{parentName:"admonition"},"Please consider these changes and updates as you continue with Telestion development.")))}s.isMDXComponent=!0},4966:(e,n,t)=>{t.d(n,{kN:()=>r,rj:()=>i,Ee:()=>u,s3:()=>s});var o=t(7294);function i(e){let{cols:n=2,children:t}=e;return o.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,columnGap:"1em"}},t)}var a=t(9960);function s(e){let{children:n,to:t}=e;return o.createElement(a.Z,{to:t,className:"block-link"},o.createElement("span",null,n," \xbb"),o.createElement("span",null,t))}const l=()=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},o.createElement("defs",null,o.createElement("style",null,".a{clip-path:url(#b);}"),o.createElement("clipPath",{id:"b"},o.createElement("rect",{width:24,height:24}))),o.createElement("g",{id:"a",className:"a"},o.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})));function r(e){let{children:n,file:t}=e;return o.createElement("a",{className:"block-link",download:!0,href:t},o.createElement("span",null,o.createElement(l,null)," ",n))}var c=t(7462),d=t(4996),m=t(6010);function u(e){let{src:n,invertible:t=!1,center:i=!1,alt:s="",...l}=e;const r=n.startsWith("/static")?n.substr(7):n,u=(0,d.Z)(r);return o.createElement(o.Fragment,null,o.createElement(a.Z,{to:r,style:{display:"none"}},"Link to ",s),o.createElement("img",(0,c.Z)({src:u,className:(0,m.Z)(t&&"invertible",i&&"center"),alt:s},l)))}t(5335)},3113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=t(7462),i=(t(7294),t(3905)),a=t(4966);const s={title:"Writing a stateful dialog",description:"Dialogs can do much more than just showing static content. Learn how you can create a stateful and complex dialog with the Telestion Client Common package."},l=void 0,r={unversionedId:"client/tutorials/writing-a-stateful-dialog",id:"client/tutorials/writing-a-stateful-dialog",title:"Writing a stateful dialog",description:"Dialogs can do much more than just showing static content. Learn how you can create a stateful and complex dialog with the Telestion Client Common package.",source:"@site/docs/client/tutorials/301-writing-a-stateful-dialog.mdx",sourceDirName:"client/tutorials",slug:"/client/tutorials/writing-a-stateful-dialog",permalink:"/client/tutorials/writing-a-stateful-dialog",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/client/tutorials/301-writing-a-stateful-dialog.mdx",tags:[],version:"current",sidebarPosition:301,frontMatter:{title:"Writing a stateful dialog",description:"Dialogs can do much more than just showing static content. Learn how you can create a stateful and complex dialog with the Telestion Client Common package."},sidebar:"client",previous:{title:"Writing a static dialog",permalink:"/client/tutorials/writing-a-static-dialog"},next:{title:"Guides",permalink:"/client/guides"}},c={},d=[{value:"What you&#39;ll build",id:"what-youll-build",level:2},{value:"Step 1: Define the delivery options",id:"step-1-define-the-delivery-options",level:2},{value:"Step 2: Add state for storing the delivery options",id:"step-2-add-state-for-storing-the-delivery-options",level:2},{value:"Step 3: Add an action button for the options dialog",id:"step-3-add-an-action-button-for-the-options-dialog",level:2},{value:"Step 4: Open the options dialog",id:"step-4-open-the-options-dialog",level:2},{value:"Step 5: Make the options dialog interactive",id:"step-5-make-the-options-dialog-interactive",level:2},{value:"Next steps",id:"next-steps",level:2}],m={toc:d};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial, you'll write a more complex and stateful dialog for a widget\nin the web client."),(0,i.kt)("admonition",{title:"Prerequisites",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To complete this tutorial, you should be familiar with TypeScript language and\nthe React framework. This tutorials builds upon the code from the simple dialog\ntutorial.")),(0,i.kt)("h2",{id:"what-youll-build"},"What you'll build"),(0,i.kt)("p",null,"In this tutorial, you'll extend the features of your simple dialog from the last\ntutorial and add delivery options to the telecommand you want to send."),(0,i.kt)("p",null,"Take a look at the last tutorial, in case you missed anything:"),(0,i.kt)(a.s3,{to:"/client/tutorials/writing-a-static-dialog/",mdxType:"Reference"},"Writing a static dialog"),(0,i.kt)("p",null,"The full code for this tutorial looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title='widget.tsx'",title:"'widget.tsx'"},"import { useState } from 'react';\nimport {\n    ActionButton,\n    Checkbox,\n    Flex,\n    TextField,\n    View\n} from '@adobe/react-spectrum';\nimport { showDialog } from '@wuespace/telestion-client-common';\n\ninterface DeliveryOptions {\n    /**\n     * Request a transmission receipt from the target.\n     */\n    requestReceipt: boolean;\n    /**\n     * Resend the telecommand if a failure has happened during transmission.\n     */\n    resendOnFailure: boolean;\n    /**\n     * Force the telecommand to be executed on the target.\n     */\n    forceExecution: boolean;\n}\n\nconst defaultOptions: DeliveryOptions = {\n    requestReceipt: false,\n    resendOnFailure: false,\n    forceExecution: false\n};\n\nfunction sendTC(command: string, options: DeliveryOptions): void {\n    console.log('Send telecommand:', command, ', with options:', options);\n}\n\nexport function Widget() {\n    const [options, setOptions] = useState(defaultOptions);\n    const [command, setCommand] = useState('default-command');\n\n    const onOptions = () => {\n        showDialog('options-tc', {\n            title: 'Telecommand options',\n            content: (state, setState) => (\n                <Flex direction=\"column\" gap=\"size-100\">\n                    <Checkbox\n                        isSelected={state.requestReceipt}\n                        onChange={requestReceipt => setState({ requestReceipt })}\n                    >\n                        Request a transmission receipt from the target\n                    </Checkbox>\n                    <Checkbox\n                        isSelected={state.resendOnFailure}\n                        onChange={resendOnFailure => setState({ resendOnFailure })}\n                    >\n                        Resend the telecommand if a failure has happened during transmission\n                    </Checkbox>\n                    <Checkbox\n                        isSelected={state.forceExecution}\n                        onChange={forceExecution => setState({ forceExecution })}\n                    >\n                        Force telecommand execution on the target\n                    </Checkbox>\n                </Flex>\n            ),\n            initialState: options\n        }).then(setOptions);\n    };\n\n    const onSend = () => {\n        showDialog('custom-tc', {\n            title: 'Send telecommand',\n            content:\n                'Are you sure you want to send the telecommand \"' + command + '\"?',\n            initialState: undefined\n        }).then(() => sendTC(command, options));\n    };\n\n    return (\n        <View padding=\"size-200\">\n            <Flex direction=\"column\" gap=\"size-100\">\n                <Flex direction=\"row\" gap=\"size-100\" alignItems=\"end\">\n                    <TextField\n                        label=\"Telecommand\"\n                        width=\"100%\"\n                        value={command}\n                        onChange={setCommand}\n                    />\n                    <ActionButton flexShrink={0} onPress={onOptions}>\n                        Options\n                    </ActionButton>\n                </Flex>\n                <ActionButton onPress={onSend}>Send</ActionButton>\n            </Flex>\n        </View>\n    );\n}\n")),(0,i.kt)("h2",{id:"step-1-define-the-delivery-options"},"Step 1: Define the delivery options"),(0,i.kt)("p",null,"To be able to send delivery options with the telecommand, you need a new type\nthat defines the delivery options first."),(0,i.kt)("p",null,"Add an interface to your widget describing the new delivery options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title='widget.tsx' {5-18,20-24}",title:"'widget.tsx'","{5-18,20-24}":!0},"import { useState } from 'react';\nimport { ActionButton, Flex, TextField, View } from '@adobe/react-spectrum';\nimport { showDialog } from '@wuespace/telestion-client-common';\n\ninterface DeliveryOptions {\n    /**\n     * Request a transmission receipt from the target.\n     */\n    requestReceipt: boolean;\n    /**\n     * Resend the telecommand if a failure has happened during transmission.\n     */\n    resendOnFailure: boolean;\n    /**\n     * Force the telecommand to be executed on the target.\n     */\n    forceExecution: boolean;\n}\n\nconst defaultOptions: DeliveryOptions = {\n    requestReceipt: false,\n    resendOnFailure: false,\n    forceExecution: false\n};\n\nfunction sendTC(command: string): void {\n    console.log('Send telecommand: ' + command);\n}\n\nexport function Widget() {\n    const [command, setCommand] = useState('default-command');\n\n    const handle = () => {\n        showDialog('custom-tc', {\n            title: 'Send telecommand',\n            content:\n                'Are you sure you want to send the telecommand \"' + command + '\"?',\n            initialState: undefined\n        }).then(() => sendTC(command));\n    };\n\n    return (\n        <View padding=\"size-200\">\n            <Flex direction=\"column\" gap=\"size-100\">\n                <TextField\n                    label=\"Telecommand\"\n                    width=\"100%\"\n                    value={command}\n                    onChange={setCommand}\n                />\n                <ActionButton onPress={handle}>Send</ActionButton>\n            </Flex>\n        </View>\n    );\n}\n")),(0,i.kt)("p",null,"This also creates default delivery options which you'll use later as initial\nvalue in the React state."),(0,i.kt)("p",null,"Now update your ",(0,i.kt)("inlineCode",{parentName:"p"},"sendTC")," placeholder function to accept the delivery options you\ndefined before:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title='widget.tsx' {26-28}",title:"'widget.tsx'","{26-28}":!0},"import { useState } from 'react';\nimport { ActionButton, Flex, TextField, View } from '@adobe/react-spectrum';\nimport { showDialog } from '@wuespace/telestion-client-common';\n\ninterface DeliveryOptions {\n    /**\n     * Request a transmission receipt from the target.\n     */\n    requestReceipt: boolean;\n    /**\n     * Resend the telecommand if a failure has happened during transmission.\n     */\n    resendOnFailure: boolean;\n    /**\n     * Force the telecommand to be executed on the target.\n     */\n    forceExecution: boolean;\n}\n\nconst defaultOptions: DeliveryOptions = {\n    requestReceipt: false,\n    resendOnFailure: false,\n    forceExecution: false\n};\n\nfunction sendTC(command: string, options: DeliveryOptions): void {\n    console.log('Send telecommand:', command, ', with options:', options);\n}\n\nexport function Widget() {\n    const [command, setCommand] = useState('default-command');\n\n    const handle = () => {\n        showDialog('custom-tc', {\n            title: 'Send telecommand',\n            content:\n                'Are you sure you want to send the telecommand \"' + command + '\"?',\n            initialState: undefined\n        }).then(() => sendTC(command));\n    };\n\n    return (\n        <View padding=\"size-200\">\n            <Flex direction=\"column\" gap=\"size-100\">\n                <TextField\n                    label=\"Telecommand\"\n                    width=\"100%\"\n                    value={command}\n                    onChange={setCommand}\n                />\n                <ActionButton onPress={handle}>Send</ActionButton>\n            </Flex>\n        </View>\n    );\n}\n")),(0,i.kt)("h2",{id:"step-2-add-state-for-storing-the-delivery-options"},"Step 2: Add state for storing the delivery options"),(0,i.kt)("p",null,"To pass the user defined delivery options to your external telecommand API, you\nneed another React state which stores them. Then, you can pass these options to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"sendTC")," function in the resolved promise:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title='widget.tsx' {31,39}",title:"'widget.tsx'","{31,39}":!0},"import { useState } from 'react';\nimport { ActionButton, Flex, TextField, View } from '@adobe/react-spectrum';\nimport { showDialog } from '@wuespace/telestion-client-common';\n\ninterface DeliveryOptions {\n    /**\n     * Request a transmission receipt from the target.\n     */\n    requestReceipt: boolean;\n    /**\n     * Resend the telecommand if a failure has happened during transmission.\n     */\n    resendOnFailure: boolean;\n    /**\n     * Force the telecommand to be executed on the target.\n     */\n    forceExecution: boolean;\n}\n\nconst defaultOptions: DeliveryOptions = {\n    requestReceipt: false,\n    resendOnFailure: false,\n    forceExecution: false\n};\n\nfunction sendTC(command: string, options: DeliveryOptions): void {\n    console.log('Send telecommand:', command, ', with options:', options);\n}\n\nexport function Widget() {\n    const [options, setOptions] = useState(defaultOptions);\n    const [command, setCommand] = useState('default-command');\n\n    const handle = () => {\n        showDialog('custom-tc', {\n            title: 'Send telecommand',\n            content:\n                'Are you sure you want to send the telecommand \"' + command + '\"?',\n            initialState: undefined\n        }).then(() => sendTC(command, options));\n    };\n\n    return (\n        <View padding=\"size-200\">\n            <Flex direction=\"column\" gap=\"size-100\">\n                <TextField\n                    label=\"Telecommand\"\n                    width=\"100%\"\n                    value={command}\n                    onChange={setCommand}\n                />\n                <ActionButton onPress={handle}>Send</ActionButton>\n            </Flex>\n        </View>\n    );\n}\n")),(0,i.kt)("h2",{id:"step-3-add-an-action-button-for-the-options-dialog"},"Step 3: Add an action button for the options dialog"),(0,i.kt)("p",null,"Right now, the user cannot change the delivery options through the widget. To\nchange that, you need another action button which triggers a dialog that present\nthe current selection to the user."),(0,i.kt)("p",null,"Place it beside the telecommand text field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title='widget.tsx' {45,52-55}",title:"'widget.tsx'","{45,52-55}":!0},"import { useState } from 'react';\nimport { ActionButton, Flex, TextField, View } from '@adobe/react-spectrum';\nimport { showDialog } from '@wuespace/telestion-client-common';\n\ninterface DeliveryOptions {\n    /**\n     * Request a transmission receipt from the target.\n     */\n    requestReceipt: boolean;\n    /**\n     * Resend the telecommand if a failure has happened during transmission.\n     */\n    resendOnFailure: boolean;\n    /**\n     * Force the telecommand to be executed on the target.\n     */\n    forceExecution: boolean;\n}\n\nconst defaultOptions: DeliveryOptions = {\n    requestReceipt: false,\n    resendOnFailure: false,\n    forceExecution: false\n};\n\nfunction sendTC(command: string, options: DeliveryOptions): void {\n    console.log('Send telecommand:', command, ', with options:', options);\n}\n\nexport function Widget() {\n    const [options, setOptions] = useState(defaultOptions);\n    const [command, setCommand] = useState('default-command');\n\n    const handle = () => {\n        showDialog('custom-tc', {\n            title: 'Send telecommand',\n            content:\n                'Are you sure you want to send the telecommand \"' + command + '\"?',\n            initialState: undefined\n        }).then(() => sendTC(command, options));\n    };\n\n    return (\n        <View padding=\"size-200\">\n            <Flex direction=\"column\" gap=\"size-100\">\n                <Flex direction=\"row\" gap=\"size-100\" alignItems=\"end\">\n                    <TextField\n                        label=\"Telecommand\"\n                        width=\"100%\"\n                        value={command}\n                        onChange={setCommand}\n                    />\n                    <ActionButton flexShrink={0}>Options</ActionButton>\n                </Flex>\n                <ActionButton onPress={handle}>Send</ActionButton>\n            </Flex>\n        </View>\n    );\n}\n")),(0,i.kt)("p",null,"This wraps the existing text field in another flex container with the new action\nbutton and aligns them horizontally. Give the action button a flex shrink of ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"\nso it doesn't collapse in the flex container. Add some spacing between both\nitems with ",(0,i.kt)("inlineCode",{parentName:"p"},'gap="size-100"')," and align them with ",(0,i.kt)("inlineCode",{parentName:"p"},'alignItems="end"')," in the flex\ncontainer. This puts the action button on the same height as the text field\ninput."),(0,i.kt)("p",null,"Now, your widget should look like this:"),(0,i.kt)(a.Ee,{src:"/img/dialogs/stateful-dialog-layout.png",alt:"The custom telecommand widget with the options button",center:!0,mdxType:"Image"}),(0,i.kt)("h2",{id:"step-4-open-the-options-dialog"},"Step 4: Open the options dialog"),(0,i.kt)("p",null,"Now, the added action button does nothing. Attach an event handler that opens\nthe dialog which presents the delivery options to the user:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title='widget.tsx' {34-40,42,60,64}",title:"'widget.tsx'","{34-40,42,60,64}":!0},"import { useState } from 'react';\nimport { ActionButton, Flex, TextField, View } from '@adobe/react-spectrum';\nimport { showDialog } from '@wuespace/telestion-client-common';\n\ninterface DeliveryOptions {\n    /**\n     * Request a transmission receipt from the target.\n     */\n    requestReceipt: boolean;\n    /**\n     * Resend the telecommand if a failure has happened during transmission.\n     */\n    resendOnFailure: boolean;\n    /**\n     * Force the telecommand to be executed on the target.\n     */\n    forceExecution: boolean;\n}\n\nconst defaultOptions: DeliveryOptions = {\n    requestReceipt: false,\n    resendOnFailure: false,\n    forceExecution: false\n};\n\nfunction sendTC(command: string, options: DeliveryOptions): void {\n    console.log('Send telecommand:', command, ', with options:', options);\n}\n\nexport function Widget() {\n    const [options, setOptions] = useState(defaultOptions);\n    const [command, setCommand] = useState('default-command');\n\n    const onOptions = () => {\n        showDialog('options-tc', {\n            title: 'Telecommand options',\n            content: 'TODO',\n            initialState: options\n        }).then(setOptions);\n    };\n\n    const onSend = () => {\n        showDialog('custom-tc', {\n            title: 'Send telecommand',\n            content:\n                'Are you sure you want to send the telecommand \"' + command + '\"?',\n            initialState: undefined\n        }).then(() => sendTC(command, options));\n    };\n\n    return (\n        <View padding=\"size-200\">\n            <Flex direction=\"column\" gap=\"size-100\">\n                <Flex direction=\"row\" gap=\"size-100\" alignItems=\"end\">\n                    <TextField\n                        label=\"Telecommand\"\n                        width=\"100%\"\n                        value={command}\n                        onChange={setCommand}\n                    />\n                    <ActionButton flexShrink={0} onPress={onOptions}>\n                        Options\n                    </ActionButton>\n                </Flex>\n                <ActionButton onPress={onSend}>Send</ActionButton>\n            </Flex>\n        </View>\n    );\n}\n")),(0,i.kt)("p",null,"This creates a new event handler called ",(0,i.kt)("inlineCode",{parentName:"p"},"onOptions"),' which opens the options\ndialog. The new dialog receives the current options as initial state and sets\nthe "global" options state via the setter when it succeeds.'),(0,i.kt)("h2",{id:"step-5-make-the-options-dialog-interactive"},"Step 5: Make the options dialog interactive"),(0,i.kt)("p",null,"The dialog has no content which can interact with the dialog state. Define the\ndialog's content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title='widget.tsx' {37-39}",title:"'widget.tsx'","{37-39}":!0},"import { useState } from 'react';\nimport { ActionButton, Flex, TextField, View } from '@adobe/react-spectrum';\nimport { showDialog } from '@wuespace/telestion-client-common';\n\ninterface DeliveryOptions {\n    /**\n     * Request a transmission receipt from the target.\n     */\n    requestReceipt: boolean;\n    /**\n     * Resend the telecommand if a failure has happened during transmission.\n     */\n    resendOnFailure: boolean;\n    /**\n     * Force the telecommand to be executed on the target.\n     */\n    forceExecution: boolean;\n}\n\nconst defaultOptions: DeliveryOptions = {\n    requestReceipt: false,\n    resendOnFailure: false,\n    forceExecution: false\n};\n\nfunction sendTC(command: string, options: DeliveryOptions): void {\n    console.log('Send telecommand:', command, ', with options:', options);\n}\n\nexport function Widget() {\n    const [options, setOptions] = useState(defaultOptions);\n    const [command, setCommand] = useState('default-command');\n\n    const onOptions = () => {\n        showDialog('options-tc', {\n            title: 'Telecommand options',\n            content: (state, setState) => <div>TODO</div>,\n            initialState: options\n        }).then(setOptions);\n    };\n\n    const onSend = () => {\n        showDialog('custom-tc', {\n            title: 'Send telecommand',\n            content:\n                'Are you sure you want to send the telecommand \"' + command + '\"?',\n            initialState: undefined\n        }).then(() => sendTC(command, options));\n    };\n\n    return (\n        <View padding=\"size-200\">\n            <Flex direction=\"column\" gap=\"size-100\">\n                <Flex direction=\"row\" gap=\"size-100\" alignItems=\"end\">\n                    <TextField\n                        label=\"Telecommand\"\n                        width=\"100%\"\n                        value={command}\n                        onChange={setCommand}\n                    />\n                    <ActionButton flexShrink={0} onPress={onOptions}>\n                        Options\n                    </ActionButton>\n                </Flex>\n                <ActionButton onPress={onSend}>Send</ActionButton>\n            </Flex>\n        </View>\n    );\n}\n")),(0,i.kt)("p",null,"Here comes the trick: Instead of using strings or static components as content,\nyou give the dialog a function that returns the content. This function receives\nfrom the dialog the current dialog state (here called ",(0,i.kt)("inlineCode",{parentName:"p"},"state"),") and as second\nargument a function to change it (here called ",(0,i.kt)("inlineCode",{parentName:"p"},"setState"),")."),(0,i.kt)("p",null,"Now, define the layout in the dialogs center part:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title='widget.tsx' {38-57}",title:"'widget.tsx'","{38-57}":!0},"import { useState } from 'react';\nimport { ActionButton, Flex, TextField, View } from '@adobe/react-spectrum';\nimport { showDialog } from '@wuespace/telestion-client-common';\n\ninterface DeliveryOptions {\n    /**\n     * Request a transmission receipt from the target.\n     */\n    requestReceipt: boolean;\n    /**\n     * Resend the telecommand if a failure has happened during transmission.\n     */\n    resendOnFailure: boolean;\n    /**\n     * Force the telecommand to be executed on the target.\n     */\n    forceExecution: boolean;\n}\n\nconst defaultOptions: DeliveryOptions = {\n    requestReceipt: false,\n    resendOnFailure: false,\n    forceExecution: false\n};\n\nfunction sendTC(command: string, options: DeliveryOptions): void {\n    console.log('Send telecommand:', command, ', with options:', options);\n}\n\nexport function Widget() {\n    const [options, setOptions] = useState(defaultOptions);\n    const [command, setCommand] = useState('default-command');\n\n    const onOptions = () => {\n        showDialog('options-tc', {\n            title: 'Telecommand options',\n            content: (state, setState) => (\n                <Flex direction=\"column\" gap=\"size-100\">\n                    <Checkbox\n                        isSelected={state.requestReceipt}\n                        onChange={requestReceipt => setState({ requestReceipt })}\n                    >\n                        Request a transmission receipt from the target\n                    </Checkbox>\n                    <Checkbox\n                        isSelected={state.resendOnFailure}\n                        onChange={resendOnFailure => setState({ resendOnFailure })}\n                    >\n                        Resend the telecommand if a failure has happened during transmission\n                    </Checkbox>\n                    <Checkbox\n                        isSelected={state.forceExecution}\n                        onChange={forceExecution => setState({ forceExecution })}\n                    >\n                        Force telecommand execution on the target\n                    </Checkbox>\n                </Flex>\n            ),\n            initialState: options\n        }).then(setOptions);\n    };\n\n    const onSend = () => {\n        showDialog('custom-tc', {\n            title: 'Send telecommand',\n            content:\n                'Are you sure you want to send the telecommand \"' + command + '\"?',\n            initialState: undefined\n        }).then(() => sendTC(command, options));\n    };\n\n    return (\n        <View padding=\"size-200\">\n            <Flex direction=\"column\" gap=\"size-100\">\n                <Flex direction=\"row\" gap=\"size-100\" alignItems=\"end\">\n                    <TextField\n                        label=\"Telecommand\"\n                        width=\"100%\"\n                        value={command}\n                        onChange={setCommand}\n                    />\n                    <ActionButton flexShrink={0} onPress={onOptions}>\n                        Options\n                    </ActionButton>\n                </Flex>\n                <ActionButton onPress={onSend}>Send</ActionButton>\n            </Flex>\n        </View>\n    );\n}\n")),(0,i.kt)("p",null,"Every option gets an own checkbox which shows the current state of the specific\noption. When the user presses on the checkbox, the checkbox emits an event which\nchanges the specific option while leaving the rest of the dialog state\nuntouched."),(0,i.kt)("p",null,"This comes from the nature of the ",(0,i.kt)("inlineCode",{parentName:"p"},"setState")," function. It accepts a new partial\ndialog state (e.g. one specific ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),' value like in this tutorial) and\nshallow merges it with current state. In the end, the changes "win" but the\nother values remain intact.'),(0,i.kt)("p",null,"To wrap it up:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'the dialog receives the "global" options state'),(0,i.kt)("li",{parentName:"ol"},"the dialog it opens"),(0,i.kt)("li",{parentName:"ol"},'the dialog content receives the dialog state (which is equal to the "global"\nstate) and renders'),(0,i.kt)("li",{parentName:"ol"},"the user changes something"),(0,i.kt)("li",{parentName:"ol"},"the dialog content changes the dialog state through the given function"),(0,i.kt)("li",{parentName:"ol"},'the dialog state diverts from the "global" state'),(0,i.kt)("li",{parentName:"ol"},"the user accepts the changes"),(0,i.kt)("li",{parentName:"ol"},"the promise resolves and returns the dialog state (which is still diverged)"),(0,i.kt)("li",{parentName:"ol"},'the promise handler updates the "global" options state')),(0,i.kt)("admonition",{title:"Dynamic content",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Not only the ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," property can receive the dialog state, but also every\nother property in the dialog configuration, which defines the dialog layout."),(0,i.kt)("p",{parentName:"admonition"},"Take a look and the API definition of the ",(0,i.kt)("inlineCode",{parentName:"p"},"showDialog")," function for further\ninformation.")),(0,i.kt)("p",null,'Now, press the "Options" button in your widget and change some delivery options:'),(0,i.kt)(a.Ee,{src:"/img/dialogs/stateful-dialog-options-dialog.png",alt:"The open options dialog from the custom telecommand widget",center:!0,mdxType:"Image"}),(0,i.kt)("p",null,"The send a new telecommand and look in the development console of your browser:"),(0,i.kt)(a.Ee,{src:"/img/dialogs/stateful-dialog-dev-console.png",alt:"Console log of send API",center:!0,mdxType:"Image"}),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"That's it. You've created your first stateful dialog."),(0,i.kt)("p",null,"Due to the usage of the ",(0,i.kt)("inlineCode",{parentName:"p"},"showDialog")," function, you also can add modals in other\nparts of the web client."),(0,i.kt)("p",null,"As mentioned, you should take a look at the API reference of the dialog\nfunction:"),(0,i.kt)(a.s3,{to:"https://wuespace.github.io/telestion-client/@wuespace/telestion-client-common/#showDialog",mdxType:"Reference"},(0,i.kt)("code",null,"showDialog")," API reference"))}u.isMDXComponent=!0}}]);