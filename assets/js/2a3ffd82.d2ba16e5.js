"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[5244],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?s.createElement(h,o(o({ref:t},u),{},{components:n})):s.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return l},rj:function(){return a},Ee:function(){return h},s3:function(){return o}});var s=n(7294);function a(e){var t=e.cols,n=void 0===t?2:t,a=e.children;return s.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},a)}var i=n(9960);function o(e){var t=e.children,n=e.to;return s.createElement(i.Z,{to:n,className:"block-link"},s.createElement("span",null,t," \xbb"),s.createElement("span",null,n))}var r=function(){return s.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},s.createElement("defs",null,s.createElement("style",null,".a{clip-path:url(#b);}"),s.createElement("clipPath",{id:"b"},s.createElement("rect",{width:24,height:24}))),s.createElement("g",{id:"a",className:"a"},s.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var t=e.children,n=e.file;return s.createElement("a",{className:"block-link",download:!0,href:n},s.createElement("span",null,s.createElement(r,null)," ",t))}var c=n(7462),u=n(3366),p=n(4996),d=n(6010),m=["src","invertible","center","alt"];function h(e){var t=e.src,n=e.invertible,a=void 0!==n&&n,o=e.center,r=void 0!==o&&o,l=e.alt,h=void 0===l?"":l,g=(0,u.Z)(e,m),v=t.startsWith("/static")?t.substr(7):t,k=(0,p.Z)(v);return s.createElement(s.Fragment,null,s.createElement(i.Z,{to:v,style:{display:"none"}},"Link to ",h),s.createElement("img",(0,c.Z)({src:k,className:(0,d.Z)(a&&"invertible",r&&"center"),alt:h},g)))}},830:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var s=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(4966),r=["components"],l={title:"Connecting the widget with the Event Bus",description:"Use the APIs provided by the `@wuespace/telestion-client-core` package to integrate your widgets into the Application's event bus to visualize actual Telemetry data and send Telecommands."},c=void 0,u={unversionedId:"client/tutorials/connecting-with-event-bus",id:"client/tutorials/connecting-with-event-bus",title:"Connecting the widget with the Event Bus",description:"Use the APIs provided by the `@wuespace/telestion-client-core` package to integrate your widgets into the Application's event bus to visualize actual Telemetry data and send Telecommands.",source:"@site/docs/client/tutorials/220-connecting-with-event-bus.mdx",sourceDirName:"client/tutorials",slug:"/client/tutorials/connecting-with-event-bus",permalink:"/client/tutorials/connecting-with-event-bus",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/client/tutorials/220-connecting-with-event-bus.mdx",tags:[],version:"current",sidebarPosition:220,frontMatter:{title:"Connecting the widget with the Event Bus",description:"Use the APIs provided by the `@wuespace/telestion-client-core` package to integrate your widgets into the Application's event bus to visualize actual Telemetry data and send Telecommands."},sidebar:"client",previous:{title:"Building the UI using React Spectrum",permalink:"/client/tutorials/building-ui-using-react-spectrum"},next:{title:"Adding configuration options",permalink:"/client/tutorials/adding-configuration-options"}},p=[{value:"What you&#39;ll build",id:"what-youll-build",children:[],level:2},{value:"Step 1: Add an event bus mock server for local testing",id:"step-1-add-an-event-bus-mock-server-for-local-testing",children:[],level:2},{value:"Step 2: Connect the widget&#39;s connection status indicators to the event bus",id:"step-2-connect-the-widgets-connection-status-indicators-to-the-event-bus",children:[],level:2},{value:"Step 3: Wiring up the &quot;Reset&quot; button",id:"step-3-wiring-up-the-reset-button",children:[],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial, you'll extend your widget from the\n",(0,i.kt)("a",{parentName:"p",href:"../building-ui-using-react-spectrum"},"Building UI using React Spectrum tutorial"),'\nto show some actual data and be able to send commands when pressing the "Reset"\nbutton.'),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To complete this tutorial, you should be familiar with React hooks, NodeJS, and\nthe concept of the Event Bus. You should also have access to the code from the\n",(0,i.kt)("a",{parentName:"p",href:"../building-ui-using-react-spectrum"},"Building UI using React Spectrum tutorial"),"\nas you'll extend the widget from that tutorial."))),(0,i.kt)("h2",{id:"what-youll-build"},"What you'll build"),(0,i.kt)("p",null,"You'll use the Event Bus bridge and its APIs from the\n",(0,i.kt)("inlineCode",{parentName:"p"},"@wuespace/telestion-client-core")," package to interact with the Event Bus\ndirectly from your widget. You'll also build a mock server so that you can test\nyour widget without the overhead of running the entire (Java-based) Application\nlayer."),(0,i.kt)("p",null,"First, you'll add a mock Application server. Then, you'll use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"useChannelLatest()"),' hook to display actual data. Lastly, you\'ll send an Event\nBus message when an operator presses the "Reset" button.'),(0,i.kt)("p",null,"In the end, you'll have written the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/plugins/mock-server.ts",title:"src/plugins/mock-server.ts"},"import {\n    CallbackId,\n    MockServer,\n    OnClose,\n    OnInit\n} from '@wuespace/vertx-mock-server';\n\nclass MyMockServer extends MockServer implements OnInit, OnClose {\n    private resetListener: CallbackId = 0;\n    private systemStatusIntervalId: any;\n\n    onInit() {\n        const systems = ['SAT A', 'SAT B', 'SAT C'];\n\n        this.resetListener = this.register('reset', raw => {\n            console.log('Received reset request:', raw.message);\n        });\n\n        this.systemStatusIntervalId = setInterval(() => {\n            systems.forEach(system => {\n                this.send(`system-status/${system}`, Math.random() > 0.5);\n            });\n        }, 2000);\n    }\n\n    onClose() {\n        this.unregister(this.resetListener);\n        clearInterval(this.systemStatusIntervalId);\n    }\n}\n\nconst mockServer = new MyMockServer();\n\nexport function onReady() {\n    console.log('Starting mock Application Server');\n    mockServer.listen();\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=telestion.config.js",title:"telestion.config.js"},"const path = require('path');\n\nmodule.exports = {\n    plugins: [path.join(__dirname, 'src', 'plugins', 'mock-server.ts')]\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/widgets/my-new-widget/widget.tsx",title:"src/widgets/my-new-widget/widget.tsx"},"import {\n    useBroadcast,\n    useChannelLatest\n} from '@wuespace/telestion-client-core';\n\n// [...]\n\nfunction Indicator(props: { system: string }) {\n    const broadcast = useBroadcast('reset');\n    const status = useChannelLatest(`system-status/${props.system}`) ?? false;\n\n    return (\n        <Flex alignItems={'baseline'} gap={'size-200'}>\n            <StatusLight variant={status ? 'positive' : 'negative'}>\n                {props.system} {status ? 'Connected' : 'Disconnected'}\n            </StatusLight>\n            <ActionButton onPress={() => broadcast({ system: props.system })}>\n                Reset\n            </ActionButton>\n        </Flex>\n    );\n}\n")),(0,i.kt)("h2",{id:"step-1-add-an-event-bus-mock-server-for-local-testing"},"Step 1: Add an event bus mock server for local testing"),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"@wuespace/vertx-mock-server")," package by running the following\nterminal in your client project folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -D @wuespace/vertx-mock-server\n")),(0,i.kt)("p",null,"Add a file for your new plugin called ",(0,i.kt)("inlineCode",{parentName:"p"},"src/plugins/mock-server.ts")," with the\nfollowing code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/plugins/mock-server.ts",title:"src/plugins/mock-server.ts"},"import {\n    CallbackId,\n    MockServer,\n    OnClose,\n    OnInit\n} from '@wuespace/vertx-mock-server';\n\nclass MyMockServer extends MockServer implements OnInit, OnClose {\n    private resetListener: CallbackId = 0;\n    private systemStatusIntervalId: any;\n\n    onInit() {\n        const systems = ['SAT A', 'SAT B', 'SAT C'];\n\n        this.resetListener = this.register('reset', raw => {\n            console.log('Received reset request:', raw.message);\n        });\n\n        this.systemStatusIntervalId = setInterval(() => {\n            systems.forEach(system => {\n                this.send(`system-status/${system}`, Math.random() > 0.5);\n            });\n        }, 2000);\n    }\n\n    onClose() {\n        this.unregister(this.resetListener);\n        clearInterval(this.systemStatusIntervalId);\n    }\n}\n\nconst mockServer = new MyMockServer();\n\nexport function onReady() {\n    console.log('Starting mock Application Server');\n    mockServer.listen();\n}\n")),(0,i.kt)("p",null,"This code creates a plugin that gets called in the Electron thread once the\nElectron thread gets started (when running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),"). It creates a mock\nserver which does two things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"it registers a listener on the ",(0,i.kt)("inlineCode",{parentName:"li"},"reset")," channel address and logs messages to\nthat channel to the console (for your reset buttons)"),(0,i.kt)("li",{parentName:"ol"},"every two seconds, send a connected status (",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),") to the channel address\n",(0,i.kt)("inlineCode",{parentName:"li"},"system-status/[system]")," for your three systems")),(0,i.kt)("p",null,"To load the plugin, you need to do one last step: in the client's root folder,\nthere is a ",(0,i.kt)("inlineCode",{parentName:"p"},"telestion.config.js")," that exports an empty object right now. Adjust\nit to include a list of plugins with your new plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=telestion.config.js",title:"telestion.config.js"},"const path = require('path');\n\nmodule.exports = {\n    plugins: [path.join(__dirname, 'src', 'plugins', 'mock-server.ts')]\n};\n")),(0,i.kt)("p",null,"When you now restart the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start")," command (that is, re-run\n",(0,i.kt)("inlineCode",{parentName:"p"},"tc-cli start --electron"),"), you can see the message\n",(0,i.kt)("inlineCode",{parentName:"p"},"Starting Mock Application Server")," in the terminal."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When making changes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"telestion.config.js")," file or any file referenced by\nit (for example, plugins), you need to restart the ",(0,i.kt)("inlineCode",{parentName:"p"},"tc-cli start")," command (or\n",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),") to use your changes."))),(0,i.kt)("p",null,"After logging in as ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:9870/bridge"),' (with an\narbitrary password) in your Electron application, after a couple of seconds, you\nshould see the connection status indicator in the navigation bar turning green\nand saying "Connected."'),(0,i.kt)("h2",{id:"step-2-connect-the-widgets-connection-status-indicators-to-the-event-bus"},"Step 2: Connect the widget's connection status indicators to the event bus"),(0,i.kt)("p",null,"Now that you have a mock server publishing your system status every two seconds,\nyou need to connect your widget to that data. Thankfully, this isn't too\ndifficult with the help of the ",(0,i.kt)("inlineCode",{parentName:"p"},"useChannelLatest")," hook exported by the\n",(0,i.kt)("inlineCode",{parentName:"p"},"@wuespace/telestion-client-core")," package."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"useChannelLatest()")," hook listens to messages on a specific channel address\nand always returns the latest status from there."),(0,i.kt)("p",null,"Adjust the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Indicator />")," functional component to use the hook to listen to the\nsystem status on the system's system status channel and wire up your UI to use\nthe new status:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/widgets/my-new-widget/widget.tsx",title:"src/widgets/my-new-widget/widget.tsx"},"// [...]\n// highlight-start\nimport { useChannelLatest } from '@wuespace/telestion-client-core';\n// highlight-end\n\n// [...]\n\nfunction Indicator(props: { system: string }) {\n    // highlight-next-line\n    const status = useChannelLatest(`system-status/${props.system}`) ?? false;\n\n    return (\n        <Flex alignItems={'baseline'} gap={'size-200'}>\n            // highlight-start\n            <StatusLight variant={status ? 'positive' : 'negative'}>\n                {props.system} {status ? 'Connected' : 'Disconnected'}\n            </StatusLight>\n            // highlight-end\n            <ActionButton>Reset</ActionButton>\n        </Flex>\n    );\n}\n")),(0,i.kt)("p",null,"Take note of the ",(0,i.kt)("inlineCode",{parentName:"p"},"?? false"),". This defaults the value to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in case it's\n",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),". The default value is for when the widget hasn't received a system\nstatus yet (which happens when initially loading the widget)."),(0,i.kt)("p",null,"After saving the file and reloading the client, you can see the status\nindicators change randomly every two seconds:"),(0,i.kt)(o.Ee,{src:"img/client/my-first-widget/05.png",center:!0,mdxType:"Image"}),(0,i.kt)("h2",{id:"step-3-wiring-up-the-reset-button"},'Step 3: Wiring up the "Reset" button'),(0,i.kt)("p",null,'To make the "Reset" button broadcast a message to the ',(0,i.kt)("inlineCode",{parentName:"p"},"reset")," channel (that\nyou're listening for in your mock server) when pressed, you can use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"useBroadcast()")," hook from the ",(0,i.kt)("inlineCode",{parentName:"p"},"@wuespace/telestion-client-core")," package."),(0,i.kt)("p",null,"Like before, you can do this directly in your ",(0,i.kt)("inlineCode",{parentName:"p"},"<Indicator />")," component. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"useBroadcast()")," hook takes the channel address as its first argument and\nreturns a function to broadcast a message to that address."),(0,i.kt)("p",null,"Define a function ",(0,i.kt)("inlineCode",{parentName:"p"},"broadcast")," that publishes to your ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," channel. Use the\nReset button's ",(0,i.kt)("inlineCode",{parentName:"p"},"onPress")," event to call that function to broadcast a message to\nthat channel. Pass an object containing details about the system into the\nmessage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/widgets/my-new-widget/widget.tsx",title:"src/widgets/my-new-widget/widget.tsx"},"// [...]\nimport {\n    // highlight-next-line\n    useBroadcast,\n    useChannelLatest\n} from '@wuespace/telestion-client-core';\n\n// [...]\n\nfunction Indicator(props: { system: string }) {\n    // highlight-next-line\n    const broadcast = useBroadcast('reset');\n    const status = useChannelLatest(`system-status/${props.system}`) ?? false;\n\n    return (\n        <Flex alignItems={'baseline'} gap={'size-200'}>\n            <StatusLight variant={status ? 'positive' : 'negative'}>\n                {props.system} {status ? 'Connected' : 'Disconnected'}\n            </StatusLight>\n            // highlight-start\n            <ActionButton onPress={() => broadcast({ system: props.system })}>\n                Reset\n            </ActionButton>\n            // highlight-end\n        </Flex>\n    );\n}\n")),(0,i.kt)("p",null,"When you reload your client application and press the reset buttons, you can see\ncorresponding output in the terminal where you ran ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Received reset request: { system: 'SAT C' }\nReceived reset request: { system: 'SAT B' }\nReceived reset request: { system: 'SAT A' }\nReceived reset request: { system: 'SAT B' }\nReceived reset request: { system: 'SAT C' }\n")),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"Congratulations, your widget is now fully wired up to the Event Bus. It's now up\nto the backend developers to create Verticles that connect the actual mission\nI/O interfaces to these Event Bus messages \ud83d\ude09."),(0,i.kt)("p",null,"But even more, you're now capable of wiring up any system to the event bus,\nmeaning you can build any widget, you need using plain React for the UI and the\nAPIs to connect to the event bus."),(0,i.kt)("p",null,"In the following tutorial, you'll learn how you can add configuration options to\nyour widget to allow Ground Station operators (that is, your users) to\nre-configure your widget's behavior on the fly."),(0,i.kt)("p",null,"You should also familiarize yourself with the API Reference for the\n",(0,i.kt)("inlineCode",{parentName:"p"},"@wuespace/vertx-mock-server")," package to build more complex mock servers as well\nas the API Reference for the various Event Bus hooks in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"@wuespace/telestion-client-core")," package:"),(0,i.kt)(o.s3,{to:"https://wuespace.github.io/telestion-client/@wuespace/vertx-mock-server/",mdxType:"Reference"},(0,i.kt)("code",null,"@wuespace/vertx-mock-server")," API Reference"),(0,i.kt)(o.s3,{to:"https://wuespace.github.io/telestion-client/@wuespace/telestion-client-core/#useBroadcast",mdxType:"Reference"},(0,i.kt)("code",null,"useBroadcast")," Hook API Reference"),(0,i.kt)(o.s3,{to:"https://wuespace.github.io/telestion-client/@wuespace/telestion-client-core/#useChannel",mdxType:"Reference"},(0,i.kt)("code",null,"useChannel")," Hook API Reference"),(0,i.kt)(o.s3,{to:"https://wuespace.github.io/telestion-client/@wuespace/telestion-client-core/#useChannelLatest",mdxType:"Reference"},(0,i.kt)("code",null,"useChannelLatest")," Hook API Reference"),(0,i.kt)(o.s3,{to:"https://wuespace.github.io/telestion-client/@wuespace/telestion-client-core/#useRequest",mdxType:"Reference"},(0,i.kt)("code",null,"useRequest")," Hook API Reference"))}m.isMDXComponent=!0}}]);