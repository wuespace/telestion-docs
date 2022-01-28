"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[375],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return l},rj:function(){return r},Ee:function(){return h},s3:function(){return s}});var a=n(7294);function r(e){var t=e.cols,n=void 0===t?2:t,r=e.children;return a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},r)}var i=n(9960);function s(e){var t=e.children,n=e.to;return a.createElement(i.Z,{to:n,className:"block-link"},a.createElement("span",null,t," \xbb"),a.createElement("span",null,n))}var o=function(){return a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},a.createElement("defs",null,a.createElement("style",null,".a{clip-path:url(#b);}"),a.createElement("clipPath",{id:"b"},a.createElement("rect",{width:24,height:24}))),a.createElement("g",{id:"a",className:"a"},a.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var t=e.children,n=e.file;return a.createElement("a",{className:"block-link",download:!0,href:n},a.createElement("span",null,a.createElement(o,null)," ",t))}var c=n(7462),p=n(3366),u=n(4996),d=n(6010),m=["src","invertible","center","alt"];function h(e){var t=e.src,n=e.invertible,r=void 0!==n&&n,s=e.center,o=void 0!==s&&s,l=e.alt,h=void 0===l?"":l,v=(0,p.Z)(e,m),g=t.startsWith("/static")?t.substr(7):t,f=(0,u.Z)(g);return a.createElement(a.Fragment,null,a.createElement(i.Z,{to:g,style:{display:"none"}},"Link to ",h),a.createElement("img",(0,c.Z)({src:f,className:(0,d.Z)(r&&"invertible",o&&"center"),alt:h},v)))}},8351:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=n(4966),o=["components"],l={title:"Writing a Verticle",description:"Verticles are the backend's core of every Telestion Project. Learn how to write a basic verticle."},c=void 0,p={unversionedId:"application/tutorials/writing-a-verticle",id:"application/tutorials/writing-a-verticle",title:"Writing a Verticle",description:"Verticles are the backend's core of every Telestion Project. Learn how to write a basic verticle.",source:"@site/docs/application/tutorials/200-writing-a-verticle.mdx",sourceDirName:"application/tutorials",slug:"/application/tutorials/writing-a-verticle",permalink:"/application/tutorials/writing-a-verticle",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/application/tutorials/200-writing-a-verticle.mdx",tags:[],version:"current",sidebarPosition:200,frontMatter:{title:"Writing a Verticle",description:"Verticles are the backend's core of every Telestion Project. Learn how to write a basic verticle."},sidebar:"tutorialSidebar",previous:{title:"Starting a new Project",permalink:"/application/tutorials/starting-a-new-project"},next:{title:"Using JsonMessage for event bus messages",permalink:"/application/tutorials/using-jsonmessage"}},u=[{value:"What we&#39;ll build",id:"what-well-build",children:[],level:2},{value:"Steps",id:"steps",children:[{value:"Step 1: Create a new Verticle",id:"step-1-create-a-new-verticle",children:[],level:3},{value:"Step 2: Listen to messages",id:"step-2-listen-to-messages",children:[],level:3},{value:"Step 3: Republish Messages",id:"step-3-republish-messages",children:[],level:3},{value:"Step 4: Test the Verticle",id:"step-4-test-the-verticle",children:[],level:3}],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial, we write a simple ",(0,i.kt)("a",{parentName:"p",href:"/application/concepts/verticle"},"Verticle"),"\nfor the Telestion ecosystem."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To complete this tutorial, you should be familiar with standard Java programming\nstructures. Additionally, you need to have a Telestion Project repository set up\non your machine."))),(0,i.kt)("h2",{id:"what-well-build"},"What we'll build"),(0,i.kt)("p",null,"In this tutorial, we'll build a very basic Verticle that listens for a message\ncontaining a number on a specific channel and republishes the number times two\non another channel."),(0,i.kt)("p",null,"In real applications, this could, for example, transform incoming Telemetry data\ninto a suitable format for the database."),(0,i.kt)("p",null,"The full code for this tutorial will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java'",title:"'MessageTransformer.java'"},'package de.wuespace.telestion.project.example;\n\nimport io.vertx.core.AbstractVerticle;\n\npublic class MessageTransformer extends AbstractVerticle {\n    @Override\n    public void start() throws Exception {\n        var eb = getVertx().eventBus();\n\n        eb.consumer("input", message -> {\n            var received = (int) message.body(); // cast body to integer\n            eb.publish("output", received * 2); // republish\n        });\n    }\n}\n')),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("h3",{id:"step-1-create-a-new-verticle"},"Step 1: Create a new Verticle"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"Verticle")," is nothing else than a Java class that extends the\n",(0,i.kt)("inlineCode",{parentName:"p"},"io.vertx.core.AbstractVerticle")," class."),(0,i.kt)("p",null,"Therefore, to create a new Verticle, the first thing you need to do is to create\na new class. For this tutorial, we assume that we're working in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"de.wuespace.telestion.project.example")," package."),(0,i.kt)("p",null,"Within that package, create a new class called ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageTransformer")," and paste\nthe following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java'",title:"'MessageTransformer.java'"},"package de.wuespace.telestion.project.example;\n\nimport io.vertx.core.AbstractVerticle;\n\npublic class MessageTransformer extends AbstractVerticle {\n    @Override\n    public void start() throws Exception {\n        // your code goes here\n    }\n}\n")),(0,i.kt)("h3",{id:"step-2-listen-to-messages"},"Step 2: Listen to messages"),(0,i.kt)("p",null,"Basically, every Verticle's main functionality is to listen for messages on the\nso-called ",(0,i.kt)("a",{parentName:"p",href:"/application/concepts/event-bus"},"event bus"),", process them, and\npotentially publish new information to the event bus."),(0,i.kt)("p",null,'Messages on the event bus are "grouped" on so-called channels that are\nidentified by their address (a ',(0,i.kt)("inlineCode",{parentName:"p"},"String"),"):"),(0,i.kt)(s.Ee,{src:"/img/drawio-diagrams/vertx/eventbus.drawio.svg",alt:"Diagram that shows two Verticles publishing to a bus with an address 'xy' and \none verticle receiving messages from that bus",invertible:!0,center:!0,mdxType:"Image"}),(0,i.kt)("p",null,"For now, let's keep it simple and listen to the ",(0,i.kt)("inlineCode",{parentName:"p"},'"input"')," channel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java' {8,10-13}",title:"'MessageTransformer.java'","{8,10-13}":!0},'package de.wuespace.telestion.project.example;\n\nimport io.vertx.core.AbstractVerticle;\n\npublic class MessageTransformer extends AbstractVerticle {\n    @Override\n    public void start() throws Exception {\n        var eb = getVertx().eventBus();\n\n        eb.consumer("input", message -> {\n            var received = (int) message.body(); // cast body to integer\n            // further process the received value\n        });\n    }\n}\n')),(0,i.kt)("p",null,"We first get an instance to the Event Bus APIs using ",(0,i.kt)("inlineCode",{parentName:"p"},"getVertx().eventBus()"),"."),(0,i.kt)("p",null,"Then, using ",(0,i.kt)("inlineCode",{parentName:"p"},"eb.consumer(address, handler)"),", we can register a ",(0,i.kt)("inlineCode",{parentName:"p"},"handler")," that\nreacts to messages on the channel with the address ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,i.kt)("p",null,"The first argument to that ",(0,i.kt)("inlineCode",{parentName:"p"},"handler(message)")," callback is the ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," which\ncontains all information about the message, including the body, optional\nheaders, and more."),(0,i.kt)("p",null,"We can get the message's body by calling its ",(0,i.kt)("inlineCode",{parentName:"p"},"body()")," method. Since this returns\nan ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," (containing whatever we published to that channel), we need to cast\nit to an integer."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Body data type")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For this simple example, we chose to send simple integers over the event bus."),(0,i.kt)("p",{parentName:"div"},"This isn't ideal for several reasons, including missing type safety (our\nVerticle could fail if we sent something to ",(0,i.kt)("inlineCode",{parentName:"p"},'"input"')," that Java can't cast to\n",(0,i.kt)("inlineCode",{parentName:"p"},"int"),")."),(0,i.kt)("p",{parentName:"div"},"In the later sections, you'll learn how to use JSON structures (including the\n",(0,i.kt)("inlineCode",{parentName:"p"},"JsonMessage")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"telestion-core")," libraries) to properly handle type\nsafety on the event bus."),(0,i.kt)("p",{parentName:"div"},"You should only ever use JSON based messages in real Telestion projects."))),(0,i.kt)("h3",{id:"step-3-republish-messages"},"Step 3: Republish Messages"),(0,i.kt)("p",null,'There are uses for Verticles that only listen to channels without ever\npublishing anything themselves. For example, you could write a Verticle that\nsimply logs all incoming messages to a file or saves them to the database. In\nthis case, however, we want to transform the data and "republish" it to the\nevent bus (this time, on a different channel called ',(0,i.kt)("inlineCode",{parentName:"p"},'"output"'),")."),(0,i.kt)("p",null,"Thankfully, the Event Bus APIs make this quite easy using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"publish(address, body)")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java' {12}",title:"'MessageTransformer.java'","{12}":!0},'package de.wuespace.telestion.project.example;\n\nimport io.vertx.core.AbstractVerticle;\n\npublic class MessageTransformer extends AbstractVerticle {\n    @Override\n    public void start() throws Exception {\n        var eb = getVertx().eventBus();\n\n        eb.consumer("input", message -> {\n            int received = (int) message.body(); // cast body to integer\n            eb.publish("output", received * 2); // republish\n        });\n    }\n}\n')),(0,i.kt)("p",null,"With that, whenever we receive a value ",(0,i.kt)("inlineCode",{parentName:"p"},"received")," on ",(0,i.kt)("inlineCode",{parentName:"p"},'"input"'),", we publish\n",(0,i.kt)("inlineCode",{parentName:"p"},"received * 2")," to ",(0,i.kt)("inlineCode",{parentName:"p"},'"output"'),"."),(0,i.kt)("h3",{id:"step-4-test-the-verticle"},"Step 4: Test the Verticle"),(0,i.kt)("p",null,"To test Verticles, we recommend adding a\n",(0,i.kt)("inlineCode",{parentName:"p"},"public static void main(String[] args)")," method to the Verticle class that tests\nthe Verticle."),(0,i.kt)("p",null,"Given the fact that a Verticle, if it's well written, doesn't depend on any\nother Verticles, all you need to do to test the Verticle is to spawn it, send\nsome messages to a channel it listens to and monitor the reaction / messages on\nits output channels."),(0,i.kt)("p",null,"Let's put theory into practice and write our static ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package de.wuespace.telestion.project.example;\n\nimport io.vertx.core.AbstractVerticle;\nimport io.vertx.core.DeploymentOptions;\nimport io.vertx.core.Vertx;\n\npublic class MessageTransformer extends AbstractVerticle {\n    public static void main(String[] args) throws InterruptedException {\n        var vertx = Vertx.vertx();\n        vertx.deployVerticle(MessageTransformer.class, new DeploymentOptions());\n\n        vertx.eventBus().consumer(\n                "output",\n                event -> System.out.printf("Output: %s%n", event.body().toString())\n        );\n\n        Thread.sleep(2000); // wait two seconds so that the verticle finishes deploying\n\n        vertx.eventBus().publish("input", 3);\n    }\n\n  // [...]\n}\n')),(0,i.kt)("p",null,"First, we create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertx")," instance called ",(0,i.kt)("inlineCode",{parentName:"p"},"vertx")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertx.vertx()"),"."),(0,i.kt)("p",null,"Then, we deploy our ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageTransformer")," Verticle using the default\n",(0,i.kt)("inlineCode",{parentName:"p"},"DeploymentOptions"),". This will, in turn, instantiate a ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageTransformer"),"\ninstance and call its ",(0,i.kt)("inlineCode",{parentName:"p"},"start()")," method."),(0,i.kt)("p",null,"Next, we add a listener on the ",(0,i.kt)("inlineCode",{parentName:"p"},'"output"')," address that just prints\n",(0,i.kt)("inlineCode",{parentName:"p"},'"Output: [body]"')," to the console for every message. We can get an ",(0,i.kt)("inlineCode",{parentName:"p"},"EventBus"),"\ninstance using ",(0,i.kt)("inlineCode",{parentName:"p"},"vertx.eventBus()")," and just use the same APIs we used inside the\nVerticle's ",(0,i.kt)("inlineCode",{parentName:"p"},"start()")," method to interact with the event bus."),(0,i.kt)("p",null,"Since it can take a short time for the Verticle to deploy (and thus, register\nthe event bus listener in ",(0,i.kt)("inlineCode",{parentName:"p"},"start()"),"), we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Thread.sleep(2000)")," to wait\ntwo seconds for the deployment to finish."),(0,i.kt)("p",null,"After that, all we need to do is to publish a random number (here: ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),") to the\n",(0,i.kt)("inlineCode",{parentName:"p"},'"input"')," channel and monitor the console output."),(0,i.kt)("p",null,"If everything worked out, you should, after a short while, see ",(0,i.kt)("inlineCode",{parentName:"p"},"Output: 6")," in\nyour console. If it doesn't work, double-check that your code matches the code\non this page."),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"Congratulations: You've just built your first Verticle. While this might not\nseem that impressive, right now, it's the core of everything you'll do when\ndeveloping for the Application (Java) side of a Telestion project."),(0,i.kt)("p",null,'While the "inner functionality" of a Verticle might get more complex in your\nprojects, the basis always consists of a subset of the following steps:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Setup listeners in the Verticle's ",(0,i.kt)("inlineCode",{parentName:"li"},"start()")," method"),(0,i.kt)("li",{parentName:"ol"},"Listen for some event (e.g., from the event bus)"),(0,i.kt)("li",{parentName:"ol"},"Process that event"),(0,i.kt)("li",{parentName:"ol"},"Publish new information to the event bus")),(0,i.kt)("p",null,"In the following sections, we'll take a look at how to improve our Verticle by\nusing Telestion's APIs to get type safety in event bus messages, add\nconfigurability to your verticle (allowing you to re-use it), and more."),(0,i.kt)(s.s3,{to:"/application/tutorials/using-jsonmessage/",mdxType:"Reference"},"Using ",(0,i.kt)("code",null,"JsonMessage")," for event bus messages"))}m.isMDXComponent=!0}}]);