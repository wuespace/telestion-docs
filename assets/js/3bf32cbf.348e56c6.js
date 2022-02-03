"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[2141],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,g=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?i.createElement(g,l(l({ref:t},c),{},{components:n})):i.createElement(g,l({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return s},rj:function(){return a},Ee:function(){return g},s3:function(){return l}});var i=n(7294);function a(e){var t=e.cols,n=void 0===t?2:t,a=e.children;return i.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},a)}var o=n(9960);function l(e){var t=e.children,n=e.to;return i.createElement(o.Z,{to:n,className:"block-link"},i.createElement("span",null,t," \xbb"),i.createElement("span",null,n))}var r=function(){return i.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},i.createElement("defs",null,i.createElement("style",null,".a{clip-path:url(#b);}"),i.createElement("clipPath",{id:"b"},i.createElement("rect",{width:24,height:24}))),i.createElement("g",{id:"a",className:"a"},i.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function s(e){var t=e.children,n=e.file;return i.createElement("a",{className:"block-link",download:!0,href:n},i.createElement("span",null,i.createElement(r,null)," ",t))}var d=n(7462),c=n(3366),u=n(4996),m=n(6010),p=["src","invertible","center","alt"];function g(e){var t=e.src,n=e.invertible,a=void 0!==n&&n,l=e.center,r=void 0!==l&&l,s=e.alt,g=void 0===s?"":s,h=(0,c.Z)(e,p),f=t.startsWith("/static")?t.substr(7):t,w=(0,u.Z)(f);return i.createElement(i.Fragment,null,i.createElement(o.Z,{to:f,style:{display:"none"}},"Link to ",g),i.createElement("img",(0,d.Z)({src:w,className:(0,m.Z)(a&&"invertible",r&&"center"),alt:g},h)))}},2444:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(4966),r=["components"],s={title:"Writing a static dialog",description:"Dialogs are an essential part of every UI framework. Learn how you can efficiently write and configure static dialogs with the Telestion Client Common package."},d=void 0,c={unversionedId:"client/tutorials/writing-a-static-dialog",id:"client/tutorials/writing-a-static-dialog",title:"Writing a static dialog",description:"Dialogs are an essential part of every UI framework. Learn how you can efficiently write and configure static dialogs with the Telestion Client Common package.",source:"@site/docs/client/tutorials/300-writing-a-static-dialog.mdx",sourceDirName:"client/tutorials",slug:"/client/tutorials/writing-a-static-dialog",permalink:"/client/tutorials/writing-a-static-dialog",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/client/tutorials/300-writing-a-static-dialog.mdx",tags:[],version:"current",sidebarPosition:300,frontMatter:{title:"Writing a static dialog",description:"Dialogs are an essential part of every UI framework. Learn how you can efficiently write and configure static dialogs with the Telestion Client Common package."},sidebar:"tutorialSidebar",previous:{title:"Connecting the widget with the Event Bus",permalink:"/client/tutorials/connecting-with-event-bus"},next:{title:"Writing a stateful dialog",permalink:"/client/tutorials/writing-a-stateful-dialog"}},u=[{value:"What you&#39;ll build",id:"what-youll-build",children:[],level:2},{value:"Step 1: Generate a new widget",id:"step-1-generate-a-new-widget",children:[],level:2},{value:"Step 2: Define the widget structure",id:"step-2-define-the-widget-structure",children:[],level:2},{value:"Step 3: Add some state",id:"step-3-add-some-state",children:[],level:2},{value:"Step 4: Show a dialog before sending",id:"step-4-show-a-dialog-before-sending",children:[],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],m={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, you'll write a static dialog for a widget in the web client. A\nstatic dialog has no state and doesn't change its content during rendering."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To complete this tutorial, you should be familiar with TypeScript language and\nthe React framework. It's good to have basic knowledge about the Telestion\nClient framework and Adobe's React Spectrum UI library."))),(0,o.kt)("h2",{id:"what-youll-build"},"What you'll build"),(0,o.kt)("p",null,"In this tutorial, you'll build a static dialog in a widget which asks the user\nfor a confirmation to send a specific telecommand."),(0,o.kt)("p",null,"The full code for this tutorial looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title='widget.tsx'",title:"'widget.tsx'"},"import { useState } from 'react';\nimport { ActionButton, Flex, TextField, View } from '@adobe/react-spectrum';\nimport { showDialog } from '@wuespace/telestion-client-common';\n\nfunction sendTC(command: string): void {\n    console.log('Send telecommand: ' + command);\n}\n\nexport function Widget() {\n    const [command, setCommand] = useState('default-command');\n\n    const handle = () => {\n        showDialog('custom-tc', {\n            title: 'Send telecommand',\n            content:\n                'Are you sure you want to send the telecommand \"' + command + '\"?',\n            initialState: undefined\n        }).then(() => sendTC(command));\n    };\n\n    return (\n        <View padding=\"size-200\">\n            <Flex direction=\"column\" gap=\"size-100\">\n                <TextField\n                    label=\"Telecommand\"\n                    width=\"100%\"\n                    value={command}\n                    onChange={setCommand}\n                />\n                <ActionButton onPress={handle}>Send</ActionButton>\n            </Flex>\n        </View>\n    );\n}\n")),(0,o.kt)("h2",{id:"step-1-generate-a-new-widget"},"Step 1: Generate a new widget"),(0,o.kt)("p",null,"Create a new widget with the Telestion Client CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"tc-cli generate widget custom-tc-widget\n")),(0,o.kt)("p",null,"This generates the required files for you. Now navigate to\n",(0,o.kt)("inlineCode",{parentName:"p"},"src/widgets/custom-tc-widget")," and open the ",(0,o.kt)("inlineCode",{parentName:"p"},"widget.tsx")," source file."),(0,o.kt)("p",null,"If you already created a widget, open the widget component source file to begin."),(0,o.kt)(l.s3,{to:"https://github.com/wuespace/telestion-client/tree/main/packages/telestion-client-cli",mdxType:"Reference"},"telestion-client-cli"),(0,o.kt)("h2",{id:"step-2-define-the-widget-structure"},"Step 2: Define the widget structure"),(0,o.kt)("p",null,"You get greeted with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Heading")," component generated by the CLI."),(0,o.kt)("p",null,"Remove it and add a ",(0,o.kt)("inlineCode",{parentName:"p"},"View")," component with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Flex")," component as child:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file='widget.tsx' {1,4-6,8-10}",file:"'widget.tsx'","{1,4-6,8-10}":!0},"import { Flex, View } from '@adobe/react-spectrum';\n\nexport function Widget() {\n    return (\n        <View>\n            <Flex>{/* ... */}</Flex>\n        </View>\n    );\n}\n")),(0,o.kt)("p",null,"Add some padding to the ",(0,o.kt)("inlineCode",{parentName:"p"},"View")," and configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"Flex")," to column mode with a\ngap size."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file='widget.tsx' {5-6}",file:"'widget.tsx'","{5-6}":!0},'import { Flex, View } from \'@adobe/react-spectrum\';\n\nexport function Widget() {\n    return (\n        <View padding="size-200">\n            <Flex direction="column" gapsize="size-100">\n                {/* ... */}\n            </Flex>\n        </View>\n    );\n}\n')),(0,o.kt)("p",null,"To input and send custom telecommands, you need a text field and a button. Add\nthese two components into the ",(0,o.kt)("inlineCode",{parentName:"p"},"Flex")," container. Give the ",(0,o.kt)("inlineCode",{parentName:"p"},"TextField")," a label for\nbetter usability and set the width to ",(0,o.kt)("inlineCode",{parentName:"p"},"100%"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file='widget.tsx' {1,7-8}",file:"'widget.tsx'","{1,7-8}":!0},'import { ActionButton, Flex, TextField, View } from \'@adobe/react-spectrum\';\n\nexport function Widget() {\n    return (\n        <View padding="size-200">\n            <Flex direction="column" gapsize="size-100">\n                <TextField label="Telecommand" width="100%" />\n                <ActionButton>Send</ActionButton>\n            </Flex>\n        </View>\n    );\n}\n')),(0,o.kt)("p",null,"Now, add the widget to your dashboard. If you need help, please take a look at\nthe tutorial on bootstrapping a widget:"),(0,o.kt)(l.s3,{to:"/client/tutorials/bootstrapping-a-widget/",mdxType:"Reference"},"Bootstrapping a widget"),(0,o.kt)("p",null,"Now, start the Web Client and you should see something like this:"),(0,o.kt)(l.Ee,{src:"/img/dialogs/simple-dialog-structure.png",alt:"The custom telecommand widget",center:!0,mdxType:"Image"}),(0,o.kt)("h2",{id:"step-3-add-some-state"},"Step 3: Add some state"),(0,o.kt)("p",null,"To send custom telecommands, you need access to the user input from the\n",(0,o.kt)("inlineCode",{parentName:"p"},"TextField"),". Add a React state which holds the current user input and switch the\n",(0,o.kt)("inlineCode",{parentName:"p"},"TextField")," from uncontrolled to controlled mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file='widget.tsx' {1,5,10-15}",file:"'widget.tsx'","{1,5,10-15}":!0},'import { useState } from \'react\';\nimport { ActionButton, Flex, TextField, View } from \'@adobe/react-spectrum\';\n\nexport function Widget() {\n    const [command, setCommand] = useState(\'default-command\');\n\n    return (\n        <View padding="size-200">\n            <Flex direction="column" gapsize="size-100">\n                <TextField\n                    label="Telecommand"\n                    width="100%"\n                    value={command}\n                    onChange={setCommand}\n                />\n                <ActionButton>Send</ActionButton>\n            </Flex>\n        </View>\n    );\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," hook from React provides the current state and a function to\nupdate it. Thus, you only need to pass these two things to the ",(0,o.kt)("inlineCode",{parentName:"p"},"TextField")," which\nnow renders the current command and updates it on user input."),(0,o.kt)("p",null,"Add an ",(0,o.kt)("inlineCode",{parentName:"p"},"onPress")," event handler to react on send requests from the\n",(0,o.kt)("inlineCode",{parentName:"p"},"ActionButton"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file='widget.tsx' {4-6,11-13,24}",file:"'widget.tsx'","{4-6,11-13,24}":!0},'import { useState } from \'react\';\nimport { ActionButton, Flex, TextField, View } from \'@adobe/react-spectrum\';\n\nfunction sendTC(command: string): void {\n    console.log(\'A telecommand was sent: \' + command);\n}\n\nexport function Widget() {\n    const [command, setCommand] = useState(\'default-command\');\n\n    const handle = () => {\n        sendTC(command);\n    };\n\n    return (\n        <View padding="size-200">\n            <Flex direction="column" gapsize="size-100">\n                <TextField\n                    label="Telecommand"\n                    width="100%"\n                    value={command}\n                    onChange={setCommand}\n                />\n                <ActionButton onPress={handle}>Send</ActionButton>\n            </Flex>\n        </View>\n    );\n}\n')),(0,o.kt)("p",null,"This introduces an external function which represents a call method to an\nexternal API to actually send the telecommand."),(0,o.kt)("p",null,"Next, create an event handler which sends the entered telecommand to the\nexternal function you defined before. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionButton")," calls the event handler\nif the user presses the action button."),(0,o.kt)("h2",{id:"step-4-show-a-dialog-before-sending"},"Step 4: Show a dialog before sending"),(0,o.kt)("p",null,"Because telecommands can be generally disruptive to the remote system, it's\nuseful to add a modal to prevent sending of unintended commands by the user."),(0,o.kt)("p",null,"Import the ",(0,o.kt)("inlineCode",{parentName:"p"},"showDialog")," function from the ",(0,o.kt)("inlineCode",{parentName:"p"},"@wuespace/telestion-client-common"),"\npackage and include it into the event handler:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file='widget.tsx' {3,13-17}",file:"'widget.tsx'","{3,13-17}":!0},"import { useState } from 'react';\nimport { ActionButton, Flex, TextField, View } from '@adobe/react-spectrum';\nimport { showDialog } from '@wuespace/telestion-client-common';\n\nfunction sendTC(command: string): void {\n    console.log('Send telecommand: ' + command);\n}\n\nexport function Widget() {\n    const [command, setCommand] = useState('default-command');\n\n    const handle = () => {\n        showDialog('custom-tc', {\n            title: 'Send telecommand',\n            content:\n                'Are you sure you want to send the telecommand \"' + command + '\"?',\n            initialState: undefined\n        }).then(() => sendTC(command));\n    };\n\n    return (\n        <View padding=\"size-200\">\n            <Flex direction=\"column\" gapsize=\"size-100\">\n                <TextField\n                    label=\"Telecommand\"\n                    width=\"100%\"\n                    value={command}\n                    onChange={setCommand}\n                />\n                <ActionButton onPress={handle}>Send</ActionButton>\n            </Flex>\n        </View>\n    );\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"showDialog")," function needs a unique id across the Web Client and a\nconfiguration object."),(0,o.kt)("p",null,"The object is the main part of the dialog. It defines the content of the\ndifferent parts in the dialog. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," property defines the\ncontent in the upper left corner or the ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," property the center part of\nthe dialog."),(0,o.kt)("p",null,"For a better understanding take a look at the Spectrum design guidelines for a\nmodal:"),(0,o.kt)(l.s3,{to:"https://spectrum.adobe.com/page/dialog/",mdxType:"Reference"},"Spectrum Dialog"),(0,o.kt)("p",null,'The current example only using simple strings as parameters and build a\n"dynamic" string out of the entered command.'),(0,o.kt)("p",null,"The dialog can also be stateful. The ",(0,o.kt)("inlineCode",{parentName:"p"},"initialState")," property defines the initial\nstate of the dialog. In this example, you need no state, so set the dialog state\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"showDialog")," function gets called, a dialog opens with the given\nconfiguration. If the user confirms, the returned promise resolves. If the user\ncancels the dialog, the promise rejects."),(0,o.kt)("p",null,"Here, you can then react on the success of the promise and send the telecommand."),(0,o.kt)("p",null,'Now go back to your open Web Client and press the "Send" button. A dialog should\nopen, asking you if you\'re sure that you want to send this telecommand:'),(0,o.kt)(l.Ee,{src:"/img/dialogs/simple-dialog-open-dialog.png",alt:"The open telecommand confirm dialog",center:!0,mdxType:"Image"}),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"That's it. You've created your first dialog. \ud83c\udf89"),(0,o.kt)("p",null,"As mentioned earlier, the dialog itself can be stateful and is much more\ncustomizable."),(0,o.kt)("p",null,"In the next tutorial, you'll create a more complex example with a stateful\ndialog."),(0,o.kt)(l.s3,{to:"/client/tutorials/writing-a-stateful-dialog/",mdxType:"Reference"},"Writing a stateful dialog"))}p.isMDXComponent=!0}}]);