"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[8375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4966:(e,t,n)=>{n.d(t,{kN:()=>l,rj:()=>i,Ee:()=>d,s3:()=>s});var a=n(7294);function i(e){let{cols:t=2,children:n}=e;return a.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,columnGap:"1em"}},n)}var r=n(9960);function s(e){let{children:t,to:n}=e;return a.createElement(r.Z,{to:n,className:"block-link"},a.createElement("span",null,t," \xbb"),a.createElement("span",null,n))}const o=()=>a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},a.createElement("defs",null,a.createElement("style",null,".a{clip-path:url(#b);}"),a.createElement("clipPath",{id:"b"},a.createElement("rect",{width:24,height:24}))),a.createElement("g",{id:"a",className:"a"},a.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})));function l(e){let{children:t,file:n}=e;return a.createElement("a",{className:"block-link",download:!0,href:n},a.createElement("span",null,a.createElement(o,null)," ",t))}var p=n(7462),c=n(4996),u=n(6010);function d(e){let{src:t,invertible:n=!1,center:i=!1,alt:s="",...o}=e;const l=t.startsWith("/static")?t.substr(7):t,d=(0,c.Z)(l);return a.createElement(a.Fragment,null,a.createElement(r.Z,{to:l,style:{display:"none"}},"Link to ",s),a.createElement("img",(0,p.Z)({src:d,className:(0,u.Z)(n&&"invertible",i&&"center"),alt:s},o)))}},8351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905)),r=n(4966);const s={title:"Writing a Verticle",description:"Verticles are the backend's core of every Telestion Project. Learn how to write a basic Verticle."},o=void 0,l={unversionedId:"application/tutorials/writing-a-verticle",id:"application/tutorials/writing-a-verticle",title:"Writing a Verticle",description:"Verticles are the backend's core of every Telestion Project. Learn how to write a basic Verticle.",source:"@site/docs/application/tutorials/200-writing-a-verticle.mdx",sourceDirName:"application/tutorials",slug:"/application/tutorials/writing-a-verticle",permalink:"/application/tutorials/writing-a-verticle",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/application/tutorials/200-writing-a-verticle.mdx",tags:[],version:"current",sidebarPosition:200,frontMatter:{title:"Writing a Verticle",description:"Verticles are the backend's core of every Telestion Project. Learn how to write a basic Verticle."},sidebar:"application",previous:{title:"Starting a new Project",permalink:"/application/tutorials/starting-a-new-project"},next:{title:"Using JsonMessage for event bus messages",permalink:"/application/tutorials/using-jsonmessage"}},p={},c=[{value:"What you&#39;ll build",id:"what-youll-build",level:2},{value:"Steps",id:"steps",level:2},{value:"Step 1: Create a new Verticle",id:"step-1-create-a-new-verticle",level:3},{value:"Step 2: Listen to messages",id:"step-2-listen-to-messages",level:3},{value:"Step 3: Republish Messages",id:"step-3-republish-messages",level:3},{value:"Step 4: Test the Verticle",id:"step-4-test-the-verticle",level:3},{value:"Next steps",id:"next-steps",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial, you'll write a simple\n",(0,i.kt)("a",{parentName:"p",href:"/application/concepts/verticle"},"Verticle")," for the Telestion ecosystem."),(0,i.kt)("admonition",{title:"Prerequisites",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To complete this tutorial, you should be familiar with standard Java programming\nstructures. You also need to have a Telestion Project repository set up on your\nmachine.")),(0,i.kt)("h2",{id:"what-youll-build"},"What you'll build"),(0,i.kt)("p",null,"In this tutorial, you'll build a basic Verticle that listens for a message\ncontaining a number on a specific channel and republishes the number times two\non another channel."),(0,i.kt)("p",null,"In real applications, this could, for example, transform incoming Telemetry data\ninto a suitable format for the database."),(0,i.kt)("p",null,"The full code for this tutorial looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java'",title:"'MessageTransformer.java'"},'package de.wuespace.telestion.project.example;\n\nimport de.wuespace.telestion.api.verticle.NoConfiguration;\nimport de.wuespace.telestion.api.verticle.TelestionVerticle;\n\npublic class MessageTransformer extends TelestionVerticle<NoConfiguration> {\n    @Override\n    public void onStart() {\n        var eb = vertx.eventBus();\n\n        eb.consumer("input", event -> {\n            var received = (int) event.body(); // cast body to integer\n            eb.publish("output", received * 2); // republish\n        });\n    }\n}\n')),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("h3",{id:"step-1-create-a-new-verticle"},"Step 1: Create a new Verticle"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"Verticle")," is nothing else than a Java class that extends the\n",(0,i.kt)("inlineCode",{parentName:"p"},"de.wuespace.telestion.api.verticle.TelestionVerticle")," class."),(0,i.kt)("p",null,"To create a new Verticle, the first thing you need to do is to create a new\nclass. This tutorial assumes that you're working in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"de.wuespace.telestion.project.example")," package."),(0,i.kt)("p",null,"Within that package, create a new class called ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageTransformer")," and paste\nthe following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java'",title:"'MessageTransformer.java'"},"package de.wuespace.telestion.project.example;\n\nimport de.wuespace.telestion.api.verticle.NoConfiguration;\nimport de.wuespace.telestion.api.verticle.TelestionVerticle;\n\npublic class MessageTransformer extends TelestionVerticle<NoConfiguration> {\n    @Override\n    public void onStart() {\n        // your code goes here\n    }\n}\n")),(0,i.kt)("h3",{id:"step-2-listen-to-messages"},"Step 2: Listen to messages"),(0,i.kt)("p",null,"Basically, every Verticle's main feature is to listen for messages on the\nso-called ",(0,i.kt)("a",{parentName:"p",href:"/common-concepts/event-bus"},"event bus"),", process them, and potentially\npublish new information to the event bus."),(0,i.kt)("p",null,'Messages on the event bus are "grouped" on so-called channels. Addresses\n(',(0,i.kt)("inlineCode",{parentName:"p"},"String"),"s) define a channel:"),(0,i.kt)(r.Ee,{src:"/img/drawio-diagrams/vertx/eventbus.drawio.svg",alt:"Diagram that shows two Verticles publishing to a bus with an address 'xy' and \none Verticle receiving messages from that bus",invertible:!0,center:!0,mdxType:"Image"}),(0,i.kt)("p",null,"For now, keep it simple and listen to the ",(0,i.kt)("inlineCode",{parentName:"p"},'"input"')," channel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java' {9,11-14}",title:"'MessageTransformer.java'","{9,11-14}":!0},'package de.wuespace.telestion.project.example;\n\nimport de.wuespace.telestion.api.verticle.NoConfiguration;\nimport de.wuespace.telestion.api.verticle.TelestionVerticle;\n\npublic class MessageTransformer extends TelestionVerticle<NoConfiguration> {\n    @Override\n    public void onStart() {\n        var eb = vertx.eventBus();\n\n        eb.consumer("input", event -> {\n            var received = (int) event.body(); // cast body to integer\n            // further process the received value\n        });\n    }\n}\n')),(0,i.kt)("p",null,"This first gets an instance to the Event Bus APIs using ",(0,i.kt)("inlineCode",{parentName:"p"},"vertx.eventBus()"),"."),(0,i.kt)("p",null,"Then, using ",(0,i.kt)("inlineCode",{parentName:"p"},"eb.consumer(address, handler)"),", this registers a ",(0,i.kt)("inlineCode",{parentName:"p"},"handler")," that\nreacts to messages on the channel with the address ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,i.kt)("p",null,"The first argument to that ",(0,i.kt)("inlineCode",{parentName:"p"},"handler(message)")," callback is the ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," which\ncontains all information about the message, including the body, optional\nheaders, and more."),(0,i.kt)("p",null,"You can get the message's body by calling its ",(0,i.kt)("inlineCode",{parentName:"p"},"body()")," method. Since this\nreturns an ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," (containing whatever you published to that channel), you\nneed to cast it to an integer."),(0,i.kt)("admonition",{title:"Body data type",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In this simple example, you'll just send simple integers over the event bus."),(0,i.kt)("p",{parentName:"admonition"},"This isn't ideal for several reasons, including missing type safety (your\nVerticle could fail if you sent something to ",(0,i.kt)("inlineCode",{parentName:"p"},'"input"')," that Java can't cast to\n",(0,i.kt)("inlineCode",{parentName:"p"},"int"),")."),(0,i.kt)("p",{parentName:"admonition"},"In the later sections, you'll learn how to use JSON structures (including the\n",(0,i.kt)("inlineCode",{parentName:"p"},"JsonMessage")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"telestion-core")," libraries) to properly handle type\nsafety on the event bus."),(0,i.kt)("p",{parentName:"admonition"},"You should use JSON based messages in real Telestion projects.")),(0,i.kt)("h3",{id:"step-3-republish-messages"},"Step 3: Republish Messages"),(0,i.kt)("p",null,'Verticles that listen to channels without ever publishing anything themselves\ncan be useful, too. For example, you could write a Verticle that logs all\nincoming messages to a file or saves them to the database. But in this tutorial,\nyou want to transform the data and "republish" it to the event bus (this time,\non a different channel called ',(0,i.kt)("inlineCode",{parentName:"p"},'"output"'),")."),(0,i.kt)("p",null,"Thankfully, the Event Bus APIs make this quite easy using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"publish(address, body)")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java' {13}",title:"'MessageTransformer.java'","{13}":!0},'package de.wuespace.telestion.project.example;\n\nimport de.wuespace.telestion.api.verticle.NoConfiguration;\nimport de.wuespace.telestion.api.verticle.TelestionVerticle;\n\npublic class MessageTransformer extends TelestionVerticle<NoConfiguration> {\n    @Override\n    public void onStart() {\n        var eb = vertx.eventBus();\n\n        eb.consumer("input", event -> {\n            var received = (int) event.body(); // cast body to integer\n            eb.publish("output", received * 2); // republish\n        });\n    }\n}\n')),(0,i.kt)("p",null,"With that, whenever this receives a value ",(0,i.kt)("inlineCode",{parentName:"p"},"received")," on ",(0,i.kt)("inlineCode",{parentName:"p"},'"input"'),", it publishes\n",(0,i.kt)("inlineCode",{parentName:"p"},"received * 2")," to ",(0,i.kt)("inlineCode",{parentName:"p"},'"output"'),"."),(0,i.kt)("h3",{id:"step-4-test-the-verticle"},"Step 4: Test the Verticle"),(0,i.kt)("p",null,"To test Verticles, you can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"public static void main(String[] args)")," method\nto the Verticle class that tests the Verticle."),(0,i.kt)("p",null,"Given the fact that a Verticle, if it's well written, doesn't depend on any\nother Verticles, all you need to do to test the Verticle is to spawn it, send\nsome messages to a channel it listens to and watch the reaction / messages on\nits output channels."),(0,i.kt)("p",null,"Put the theory into practice and write your static ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java' {5,9-21}",title:"'MessageTransformer.java'","{5,9-21}":!0},'package de.wuespace.telestion.project.example;\n\nimport de.wuespace.telestion.api.verticle.NoConfiguration;\nimport de.wuespace.telestion.api.verticle.TelestionVerticle;\nimport io.vertx.core.Vertx;\n\npublic class MessageTransformer extends TelestionVerticle<NoConfiguration> {\n\n    public static void main(String[] args) throws InterruptedException {\n        var vertx = Vertx.vertx(); // create a new Vertx instance to test on\n        // "hear" on the output channel and print out anything\n        vertx.eventBus().consumer(\n            "output",\n            message -> System.out.printf("Output: %s%n", message.body().toString())\n        );\n        // deploy our Verticle on the vertx instance\n        vertx.deployVerticle(new MessageTransformer()).onSuccess(res -> {\n            // publish a number once the Verticle is deployed\n            vertx.eventBus().publish("input", 3);\n        });\n    }\n\n  // [...]\n}\n')),(0,i.kt)("p",null,"First, you create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertx")," instance called ",(0,i.kt)("inlineCode",{parentName:"p"},"vertx")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertx.vertx()"),"."),(0,i.kt)("p",null,"Then, you add a listener on the ",(0,i.kt)("inlineCode",{parentName:"p"},'"output"')," address that just prints\n",(0,i.kt)("inlineCode",{parentName:"p"},'"Output: [body]"')," to the console for every message. You can get an ",(0,i.kt)("inlineCode",{parentName:"p"},"EventBus"),"\ninstance using ",(0,i.kt)("inlineCode",{parentName:"p"},"vertx.eventBus()")," and just use the same APIs you used inside the\nVerticle's ",(0,i.kt)("inlineCode",{parentName:"p"},"onStart()")," method to interact with the event bus."),(0,i.kt)("p",null,"Next, you deploy your ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageTransformer")," Verticle by creating an instance and\nhand it over to ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertx"),". This, in turn, calls its ",(0,i.kt)("inlineCode",{parentName:"p"},"onStart()")," method to deploy\nthe Verticle."),(0,i.kt)("p",null,"The deployment process returns a future object. When it resolves, you publish a\nrandom number (here: ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),") to the ",(0,i.kt)("inlineCode",{parentName:"p"},'"input"')," channel."),(0,i.kt)("p",null,"If everything worked out, you should, after a short while, see ",(0,i.kt)("inlineCode",{parentName:"p"},"Output: 6")," in\nyour console. If it doesn't work, verify that your code matches the code on this\npage."),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"Congratulations: You've just built your first Verticle. While this might not\nseem that impressive, right now, it's the core of everything you'll do when\ndeveloping for the Application (Java) side of a Telestion project."),(0,i.kt)("p",null,'While the "inner workings" of a Verticle might get more complex in your\nprojects, the basis always consists of a subset of the following steps:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Setup listeners in the Verticle's ",(0,i.kt)("inlineCode",{parentName:"li"},"onStart()")," method"),(0,i.kt)("li",{parentName:"ol"},"Listen for some event (e.g., from the event bus)"),(0,i.kt)("li",{parentName:"ol"},"Process that event"),(0,i.kt)("li",{parentName:"ol"},"Publish new information to the event bus")),(0,i.kt)("p",null,"In the following sections, you can take a look at how to improve your Verticle\nby using Telestion's APIs to get type safety in event bus messages, add\nconfigurability to your Verticle (allowing you to re-use it), and more."),(0,i.kt)(r.s3,{to:"/application/tutorials/using-jsonmessage/",mdxType:"Reference"},"Using ",(0,i.kt)("code",null,"JsonMessage")," for event bus messages"))}d.isMDXComponent=!0}}]);