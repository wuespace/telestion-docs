"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[9719],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(v,s(s({ref:t},p),{},{components:n})):i.createElement(v,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return l},rj:function(){return r},Ee:function(){return v},s3:function(){return s}});var i=n(7294);function r(e){var t=e.cols,n=void 0===t?2:t,r=e.children;return i.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},r)}var a=n(9960);function s(e){var t=e.children,n=e.to;return i.createElement(a.Z,{to:n,className:"block-link"},i.createElement("span",null,t," \xbb"),i.createElement("span",null,n))}var o=function(){return i.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},i.createElement("defs",null,i.createElement("style",null,".a{clip-path:url(#b);}"),i.createElement("clipPath",{id:"b"},i.createElement("rect",{width:24,height:24}))),i.createElement("g",{id:"a",className:"a"},i.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var t=e.children,n=e.file;return i.createElement("a",{className:"block-link",download:!0,href:n},i.createElement("span",null,i.createElement(o,null)," ",t))}var c=n(7462),p=n(3366),u=n(4996),d=n(6010),m=["src","invertible","center","alt"];function v(e){var t=e.src,n=e.invertible,r=void 0!==n&&n,s=e.center,o=void 0!==s&&s,l=e.alt,v=void 0===l?"":l,h=(0,p.Z)(e,m),g=t.startsWith("/static")?t.substr(7):t,f=(0,u.Z)(g);return i.createElement(i.Fragment,null,i.createElement(a.Z,{to:g,style:{display:"none"}},"Link to ",v),i.createElement("img",(0,c.Z)({src:f,className:(0,d.Z)(r&&"invertible",o&&"center"),alt:v},h)))}},2574:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),s=n(4966),o=["components"],l={title:"Using traits in Verticles",description:"Enrich your coding experience in Verticles by using Verticle traits."},c=void 0,p={unversionedId:"application/tutorials/using-traits-in-verticles",id:"application/tutorials/using-traits-in-verticles",title:"Using traits in Verticles",description:"Enrich your coding experience in Verticles by using Verticle traits.",source:"@site/docs/application/tutorials/203-using-traits-in-verticles.mdx",sourceDirName:"application/tutorials",slug:"/application/tutorials/using-traits-in-verticles",permalink:"/application/tutorials/using-traits-in-verticles",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/application/tutorials/203-using-traits-in-verticles.mdx",tags:[],version:"current",sidebarPosition:203,frontMatter:{title:"Using traits in Verticles",description:"Enrich your coding experience in Verticles by using Verticle traits."},sidebar:"application",previous:{title:"Adding configuration options",permalink:"/application/tutorials/adding-configuration-options"},next:{title:"Deploying your project",permalink:"/application/tutorials/deploying-your-project"}},u={},d=[{value:"What you&#39;ll build",id:"what-youll-build",level:2},{value:"Step 1: Add a trait to your Verticle",id:"step-1-add-a-trait-to-your-verticle",level:2},{value:"Step 2: Rewrite the event bus consumer",id:"step-2-rewrite-the-event-bus-consumer",level:2},{value:"Step 3: Rewrite the event bus publisher",id:"step-3-rewrite-the-event-bus-publisher",level:2},{value:"Next steps",id:"next-steps",level:2}],m={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It's tedious to do common tasks in Verticles like registering event handlers or\npublishing ",(0,a.kt)("inlineCode",{parentName:"p"},"JsonMessage")," based messages."),(0,a.kt)("p",null,"Doing this over and over again in your Verticle the code becomes bloated and\nunreadable."),(0,a.kt)("p",null,"Provide a better reading experience using traits in your Verticle."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"To complete this tutorial, you should be familiar with writing basic Verticles\nand using the ",(0,a.kt)("inlineCode",{parentName:"p"},"JsonMessage")," interface from the Telestion APIs."))),(0,a.kt)("h2",{id:"what-youll-build"},"What you'll build"),(0,a.kt)(s.s3,{to:"/application/tutorials/using-jsonmessage/",mdxType:"Reference"},"Base Code"),(0,a.kt)("p",null,"Based on the code from the\n",(0,a.kt)("a",{parentName:"p",href:"/application/tutorials/using-jsonmessage/"},(0,a.kt)("inlineCode",{parentName:"a"},"JsonMessage")," tutorial"),", you'll add\ntraits to your ",(0,a.kt)("inlineCode",{parentName:"p"},"MessageTransformer")," Verticle."),(0,a.kt)("p",null,"For a concept on what a trait actually is, please take a look on this concept:"),(0,a.kt)(s.s3,{to:"/application/concepts/traits/",mdxType:"Reference"},"Traits concept"),(0,a.kt)("p",null,"After the tutorial, your Verticle looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java' {5,7-8,16,18,19}",title:"'MessageTransformer.java'","{5,7-8,16,18,19}":!0},'package de.wuespace.telestion.project.example;\n\nimport de.wuespace.telestion.api.verticle.NoConfiguration;\nimport de.wuespace.telestion.api.verticle.TelestionVerticle;\nimport de.wuespace.telestion.api.verticle.trait.WithEventBus;\n\npublic class MessageTransformer extends TelestionVerticle<NoConfiguration>\n        implements WithEventBus {\n\n    public static void main(String[] args) throws InterruptedException {\n        // [...]\n    }\n\n    @Override\n    public void onStart() {\n        register("input", message -> {\n            int received = message.value();\n            publish("output", new IntegerMessage(received * 2));\n        }, IntegerMessage.class);\n    }\n}\n')),(0,a.kt)("h2",{id:"step-1-add-a-trait-to-your-verticle"},"Step 1: Add a trait to your Verticle"),(0,a.kt)("p",null,"The Telestion API already provides a lot of traits for your Verticles."),(0,a.kt)(s.s3,{to:"https://javadoc.io/doc/de.wuespace.telestion/telestion-api/latest/de/wuespace/telestion/api/verticle/trait/package-summary.html",mdxType:"Reference"},"List of Telestion Core Verticle traits"),(0,a.kt)("p",null,"Import the ",(0,a.kt)("inlineCode",{parentName:"p"},"WithEventBus")," trait and use it in your ",(0,a.kt)("inlineCode",{parentName:"p"},"MessageTransformer"),"\nVerticle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java' {5,7-8}",title:"'MessageTransformer.java'","{5,7-8}":!0},"package de.wuespace.telestion.project.example;\n\nimport de.wuespace.telestion.api.verticle.NoConfiguration;\nimport de.wuespace.telestion.api.verticle.TelestionVerticle;\nimport de.wuespace.telestion.api.verticle.trait.WithEventBus;\n\npublic class MessageTransformer extends TelestionVerticle<NoConfiguration>\n        implements WithEventBus {\n\n    public static void main(String[] args) throws InterruptedException {\n        // [...]\n    }\n\n    @Override\n    public void onStart() {\n        // [...]\n    }\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"WithEventBus")," trait contains a bunch of methods to interact with the\n",(0,a.kt)("a",{parentName:"p",href:"/common-concepts/event-bus/"},(0,a.kt)("inlineCode",{parentName:"a"},"EventBus")),"."),(0,a.kt)("p",null,"For more information, take a look at the API reference:"),(0,a.kt)(s.s3,{to:"https://javadoc.io/doc/de.wuespace.telestion/telestion-api/latest/de/wuespace/telestion/api/verticle/trait/WithEventBus.html",mdxType:"Reference"},(0,a.kt)("code",null,"WithEventBus")," API reference"),(0,a.kt)("h2",{id:"step-2-rewrite-the-event-bus-consumer"},"Step 2: Rewrite the event bus consumer"),(0,a.kt)("p",null,"Right now, the Verticle extracts the event bus instance from the ",(0,a.kt)("inlineCode",{parentName:"p"},"vertx")," context\nand registers an event handler and an event bus channel. The incoming message is\nthen converted to an ",(0,a.kt)("inlineCode",{parentName:"p"},"IntegerMessage")," if possible and another event handler gets\ncalled which multiplies the received value."),(0,a.kt)("p",null,"That's a tedious task if you want to consume messages on more than one channel\nthroughout your Verticle."),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"WithEventBus"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java' {18-20}",title:"'MessageTransformer.java'","{18-20}":!0},'package de.wuespace.telestion.project.example;\n\nimport de.wuespace.telestion.api.verticle.NoConfiguration;\nimport de.wuespace.telestion.api.verticle.TelestionVerticle;\nimport de.wuespace.telestion.api.verticle.trait.WithEventBus;\n\npublic class MessageTransformer extends TelestionVerticle<NoConfiguration>\n        implements WithEventBus {\n\n    public static void main(String[] args) throws InterruptedException {\n        // [...]\n    }\n\n    @Override\n    public void onStart() {\n        var eb = vertx.eventBus();\n\n        register("input", message -> {\n            // [...]\n        }, IntegerMessage.class);\n    }\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," method combines several operations in one call. First, it\nregisters an event handler on the event bus channel ",(0,a.kt)("inlineCode",{parentName:"p"},'"input"'),". If a messages\narrives at the channel the ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," method tries to convert received message\nto the specified message type (here ",(0,a.kt)("inlineCode",{parentName:"p"},"IntegerMessage.class"),"). If the conversion\nsucceeded, ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," calls the given event handler with the converted message."),(0,a.kt)("p",null,"In short, it has the same behaviour as the existing implementation but is much\nmore readable and maintainable."),(0,a.kt)("h2",{id:"step-3-rewrite-the-event-bus-publisher"},"Step 3: Rewrite the event bus publisher"),(0,a.kt)("p",null,"To remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"eb")," event bus reference, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," method\nprovided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"WithEventBus")," trait:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java' {17-18}",title:"'MessageTransformer.java'","{17-18}":!0},'package de.wuespace.telestion.project.example;\n\nimport de.wuespace.telestion.api.verticle.GenericConfiguration;\nimport de.wuespace.telestion.api.verticle.TelestionVerticle;\nimport de.wuespace.telestion.api.verticle.trait.WithEventBus;\n\npublic class MessageTransformer extends TelestionVerticle<GenericConfiguration>\n        implements WithEventBus {\n\n    public static void main(String[] args) throws InterruptedException {\n        // [...]\n    }\n\n    @Override\n    public void onStart() {\n        register("input", message -> {\n            int received = message.value();\n            publish("output", new IntegerMessage(received * 2));\n        }, IntegerMessage.class);\n    }\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," is essentially a shorthand to access the\n",(0,a.kt)("inlineCode",{parentName:"p"},"vertx.eventBus().publish()")," method."),(0,a.kt)("p",null,"One neat feature of ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," is that it does the conversion from a\n",(0,a.kt)("inlineCode",{parentName:"p"},"JsonMessage")," based message back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"JsonObject")," automatically. Thus, you\ndon't need to call ",(0,a.kt)("inlineCode",{parentName:"p"},".json()")," on the message anymore (as described in\n",(0,a.kt)("a",{parentName:"p",href:"/application/tutorials/using-jsonmessage/#step-3-publishing-messages"},"Using ",(0,a.kt)("inlineCode",{parentName:"a"},"JsonMessage")),")."),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"That's it. You've used traits in your first Verticle. \ud83c\udf79"),(0,a.kt)("p",null,"It doesn't look like much of an improvement right now, but it cleans up your\ncode in bigger and more complex Verticles."),(0,a.kt)("p",null,"But that's not the end. The Telestion Core provides more traits for Verticles.\nTake a look at them if you like."),(0,a.kt)("p",null,"You can also write your own traits not only for Verticles but much more types."),(0,a.kt)(s.s3,{to:"/application/concepts/traits/",mdxType:"Reference"},"Traits concept"),(0,a.kt)(s.s3,{to:"https://javadoc.io/doc/de.wuespace.telestion/telestion-api/latest/de/wuespace/telestion/api/verticle/trait/package-summary.html",mdxType:"Reference"},"List of Telestion Core Verticle traits"),(0,a.kt)(s.s3,{to:"https://javadoc.io/doc/de.wuespace.telestion/telestion-api/latest/de/wuespace/telestion/api/verticle/trait/WithEventBus.html",mdxType:"Reference"},(0,a.kt)("code",null,"WithEventBus")," API reference"),(0,a.kt)(s.s3,{to:"/application/guides/writing-your-own-traits/",mdxType:"Reference"},"Writing your own traits"))}v.isMDXComponent=!0}}]);