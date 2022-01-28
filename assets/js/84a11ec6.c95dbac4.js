"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[934],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return l},rj:function(){return s},Ee:function(){return g},s3:function(){return r}});var a=n(7294);function s(e){var t=e.cols,n=void 0===t?2:t,s=e.children;return a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},s)}var i=n(9960);function r(e){var t=e.children,n=e.to;return a.createElement(i.Z,{to:n,className:"block-link"},a.createElement("span",null,t," \xbb"),a.createElement("span",null,n))}var o=function(){return a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},a.createElement("defs",null,a.createElement("style",null,".a{clip-path:url(#b);}"),a.createElement("clipPath",{id:"b"},a.createElement("rect",{width:24,height:24}))),a.createElement("g",{id:"a",className:"a"},a.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function l(e){var t=e.children,n=e.file;return a.createElement("a",{className:"block-link",download:!0,href:n},a.createElement("span",null,a.createElement(o,null)," ",t))}var p=n(7462),c=n(3366),u=n(4996),d=n(6010),m=["src","invertible","center","alt"];function g(e){var t=e.src,n=e.invertible,s=void 0!==n&&n,r=e.center,o=void 0!==r&&r,l=e.alt,g=void 0===l?"":l,h=(0,c.Z)(e,m),v=t.startsWith("/static")?t.substr(7):t,f=(0,u.Z)(v);return a.createElement(a.Fragment,null,a.createElement(i.Z,{to:v,style:{display:"none"}},"Link to ",g),a.createElement("img",(0,p.Z)({src:f,className:(0,d.Z)(s&&"invertible",o&&"center"),alt:g},h)))}},6110:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),s=n(3366),i=(n(7294),n(3905)),r=n(4966),o=["components"],l={title:"Using JsonMessage for event bus messages",description:"Learn how to use Telestion's JsonMessage APIs to get type safety in your event bus messages."},p=void 0,c={unversionedId:"application/tutorials/using-jsonmessage",id:"application/tutorials/using-jsonmessage",title:"Using JsonMessage for event bus messages",description:"Learn how to use Telestion's JsonMessage APIs to get type safety in your event bus messages.",source:"@site/docs/application/tutorials/201-using-jsonmessage.mdx",sourceDirName:"application/tutorials",slug:"/application/tutorials/using-jsonmessage",permalink:"/application/tutorials/using-jsonmessage",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/application/tutorials/201-using-jsonmessage.mdx",tags:[],version:"current",sidebarPosition:201,frontMatter:{title:"Using JsonMessage for event bus messages",description:"Learn how to use Telestion's JsonMessage APIs to get type safety in your event bus messages."},sidebar:"tutorialSidebar",previous:{title:"Writing a Verticle",permalink:"/application/tutorials/writing-a-verticle"},next:{title:"Adding configuration options",permalink:"/application/tutorials/adding-configuration-options"}},u=[{value:"What we&#39;ll build",id:"what-well-build",children:[],level:2},{value:"Step 1: Creating the <code>record</code>",id:"step-1-creating-the-record",children:[],level:2},{value:"Step 2: Listening for messages of that class",id:"step-2-listening-for-messages-of-that-class",children:[],level:2},{value:"Step 3: Publishing messages",id:"step-3-publishing-messages",children:[],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial, we extend our basic Verticle by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonMessage")," APIs\nfrom the ",(0,i.kt)("inlineCode",{parentName:"p"},"telestion-core")," packages to get some type safety in event bus\nmessages."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To complete this tutorial, you should be familiar with Records in Java and how\nto write basic Verticles."))),(0,i.kt)("h2",{id:"what-well-build"},"What we'll build"),(0,i.kt)("p",null,"We will extend the code from\n",(0,i.kt)("a",{parentName:"p",href:"/application/tutorials/writing-a-verticle"},"Writing a Verticle")," with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"JsonMessage")," APIs. This stops us from having to guess about the type of message\nsent and therefore poses much fewer edge cases we may need to handle."),(0,i.kt)("p",null,"It is also highly compatible with various event bus bridges, for example\nallowing to exchange these messages with web clients."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"When not to use ",(0,i.kt)("inlineCode",{parentName:"h5"},"JsonMessage"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'It sometimes makes sense to drop type safety and instead handle "raw" JSON. In\nthese cases, you should use the raw Jackson JSON APIs (like ',(0,i.kt)("inlineCode",{parentName:"p"},"JsonObject"),") and\nsend serialized forms via the event bus (to ensure compatibility with event bus\nbridges)."),(0,i.kt)("p",{parentName:"div"},"One case where this might make sense is when you handle arbitrary input data\nthat doesn't necesserily have fixed types."))),(0,i.kt)(r.s3,{to:"/application/tutorials/writing-a-verticle/",mdxType:"Reference"},"Writing a Verticle (Base Code)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='IntegerMessage.java'",title:"'IntegerMessage.java'"},"package de.wuespace.telestion.project.example;\n\nimport com.fasterxml.jackson.annotation.JsonProperty;\nimport de.wuespace.telestion.api.message.JsonMessage;\n\nrecord IntegerMessage(\n        @JsonProperty int value\n) implements JsonMessage {}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java' {9,16-25}",title:"'MessageTransformer.java'","{9,16-25}":!0},'package de.wuespace.telestion.project.example;\n\n// [...]\n\npublic class MessageTransformer extends AbstractVerticle {\n  public static void main(String[] args) throws InterruptedException {\n        // [...]\n\n        vertx.eventBus().publish("input", new IntegerMessage(3).json());\n    }\n\n    @Override\n    public void start() throws Exception {\n        var eb = getVertx().eventBus();\n\n        eb.consumer("input", event ->\n                JsonMessage.on(IntegerMessage.class, event,\n                        message ->\n                        {\n                            int received = message.value();\n                            var output = new IntegerMessage(received * 2);\n                            eb.publish("output", output.json());\n                        }\n                )\n        );\n    }\n}\n')),(0,i.kt)("h2",{id:"step-1-creating-the-record"},"Step 1: Creating the ",(0,i.kt)("inlineCode",{parentName:"h2"},"record")),(0,i.kt)("p",null,"The first thing we need to do is to create the ",(0,i.kt)("em",{parentName:"p"},"message container"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"record"),"\nthat contains our message data."),(0,i.kt)("p",null,'In this case, we\'ll just expand upon our "integer processor" and create a record\nthat simply holds one integer value.'),(0,i.kt)("p",null,"Create a file ",(0,i.kt)("inlineCode",{parentName:"p"},"IntegerMessage.java")," in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"de.wuespace.telestion.project.example")," package and add the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='IntegerMessage.java'",title:"'IntegerMessage.java'"},"package de.wuespace.telestion.project.example;\n\nimport com.fasterxml.jackson.annotation.JsonProperty;\nimport de.wuespace.telestion.api.message.JsonMessage;\n\nrecord IntegerMessage(\n        @JsonProperty int value\n) implements JsonMessage {}\n")),(0,i.kt)("p",null,"The two ",(0,i.kt)("em",{parentName:"p"},"special ingredients")," to make this a ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonMessage")," are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"declaring that it implements the\n",(0,i.kt)("inlineCode",{parentName:"li"},"de.wuespace.telestion.api.message.JsonMessage")," interface"),(0,i.kt)("li",{parentName:"ul"},"marking its attribute(/-s) as JSON properties using the ",(0,i.kt)("inlineCode",{parentName:"li"},"@JsonProperty"),"\ndecorator")),(0,i.kt)("p",null,"Now, we can begin using our ",(0,i.kt)("inlineCode",{parentName:"p"},"IntegerMessage")," with the Telestion APIs."),(0,i.kt)("h2",{id:"step-2-listening-for-messages-of-that-class"},"Step 2: Listening for messages of that class"),(0,i.kt)("p",null,"Since we now have a proper ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonMessage"),' wrapper, we can drop the previous\n"casting to ',(0,i.kt)("inlineCode",{parentName:"p"},"int"),'" from the raw ',(0,i.kt)("inlineCode",{parentName:"p"},"Object message.body()")," in our consumer and can,\ninstead, use one of Telestion's convenience functions for easily filtering for\nvalid messages."),(0,i.kt)("p",null,"Replace our previous ",(0,i.kt)("inlineCode",{parentName:"p"},"eb.consumer()")," logic in ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageTransformer::start()")," with\nthis code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java' {12-20}",title:"'MessageTransformer.java'","{12-20}":!0},'package de.wuespace.telestion.project.example;\n\n// [...]\n\npublic class MessageTransformer extends AbstractVerticle {\n    // [...]\n\n    @Override\n    public void start() throws Exception {\n        var eb = getVertx().eventBus();\n\n        eb.consumer("input", event ->\n                JsonMessage.on(IntegerMessage.class, event,\n                        message ->\n                        {\n                            int received = message.value();\n                            eb.publish("output", received * 2);\n                        }\n                )\n        );\n    }\n}\n')),(0,i.kt)("p",null,"Instead of handling the ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," directly, we pass it into the ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonMessage.on()"),"\nfunction. This then filters messages and calls a handler passed into it if and\nonly if the message type matches the specified class (here: ",(0,i.kt)("inlineCode",{parentName:"p"},"IntegerMessage"),")."),(0,i.kt)("p",null,"The first argument to the handler, ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),", then is the already deserialized\ninstance of ",(0,i.kt)("inlineCode",{parentName:"p"},"IntegerMessage")," and we can, therefore, use it to further process\nthe data."),(0,i.kt)("p",null,"In this case, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"message.value()")," to retrieve the ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," field within the\nrecord. Since we already know that it's of the type ",(0,i.kt)("inlineCode",{parentName:"p"},"IntegerMessage")," where\n",(0,i.kt)("inlineCode",{parentName:"p"},"value")," is an integer, we no longer need to cast any types or handle other edge\ncases."),(0,i.kt)("h2",{id:"step-3-publishing-messages"},"Step 3: Publishing messages"),(0,i.kt)("p",null,"Now that we can receive ",(0,i.kt)("inlineCode",{parentName:"p"},"IntegerMessage")," messages, we also need to publish them."),(0,i.kt)("p",null,"Create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"IntegerMessage")," instance called ",(0,i.kt)("inlineCode",{parentName:"p"},"output")," and instead of publishing\n",(0,i.kt)("inlineCode",{parentName:"p"},"received * 2"),", publish ",(0,i.kt)("inlineCode",{parentName:"p"},"output.json()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java' {15-16}",title:"'MessageTransformer.java'","{15-16}":!0},'// [...]\n\npublic class MessageTransformer extends AbstractVerticle {\n    // [...]\n\n    @Override\n    public void start() throws Exception {\n        var eb = getVertx().eventBus();\n\n        eb.consumer("input", event ->\n                JsonMessage.on(IntegerMessage.class, event,\n                        message ->\n                        {\n                            int received = message.value();\n                            var output = new IntegerMessage(received * 2);\n                            eb.publish("output", output.json());\n                        }\n                )\n        );\n    }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Calling ",(0,i.kt)("inlineCode",{parentName:"h5"},".json()"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To use the ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonMessage")," APIs when publishing a message, you must publish the\nresult of calling ",(0,i.kt)("inlineCode",{parentName:"p"},".json()")," on your ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonMessage"),". This converts its contents to\na JSON ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," that can get parsed on the receiving end."))),(0,i.kt)("p",null,"Now, all we need to do to test our code is to also publish an ",(0,i.kt)("inlineCode",{parentName:"p"},"IntegerMessage"),"\nwithin our ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," method using the same method as above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java' {7}",title:"'MessageTransformer.java'","{7}":!0},'// [...]\n\npublic class MessageTransformer extends AbstractVerticle {\n  public static void main(String[] args) throws InterruptedException {\n        // [...]\n\n        vertx.eventBus().publish("input", new IntegerMessage(3).json());\n    }\n\n    // [...]\n}\n')),(0,i.kt)("p",null,"When you now re-run our ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," method, you should get the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},'Output: {"value":6,"className":"de.wuespace.telestion.project.example.IntegerMessage"}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,i.kt)("inlineCode",{parentName:"h5"},"className")," attribute")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As you can see, ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonMessage")," instances automatically encode a ",(0,i.kt)("inlineCode",{parentName:"p"},"className"),"\nattribute into the encoded JSON. This allows our helper functions to verify and\nautomatically re-instantiate it with the correct class type."))),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"With that, you've used your first actual Telestion API. And you've gotten away\nfrom nasty, unsafe type casts."),(0,i.kt)("p",null,"In the next tutorial, you'll learn how to add configuration options to your\nverticle. After that, you're already equipped with the knowledge to understand\nalmost all real Verticles in Telestion projects."),(0,i.kt)(r.s3,{to:"/application/tutorials/adding-configuration-options/",mdxType:"Reference"},"Adding configuration options"))}m.isMDXComponent=!0}}]);