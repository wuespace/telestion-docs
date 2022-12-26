"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[5671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=s,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4966:(e,t,n)=>{n.d(t,{kN:()=>l,rj:()=>s,Ee:()=>c,s3:()=>i});var a=n(7294);function s(e){let{cols:t=2,children:n}=e;return a.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,columnGap:"1em"}},n)}var r=n(9960);function i(e){let{children:t,to:n}=e;return a.createElement(r.Z,{to:n,className:"block-link"},a.createElement("span",null,t," \xbb"),a.createElement("span",null,n))}const o=()=>a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},a.createElement("defs",null,a.createElement("style",null,".a{clip-path:url(#b);}"),a.createElement("clipPath",{id:"b"},a.createElement("rect",{width:24,height:24}))),a.createElement("g",{id:"a",className:"a"},a.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})));function l(e){let{children:t,file:n}=e;return a.createElement("a",{className:"block-link",download:!0,href:n},a.createElement("span",null,a.createElement(o,null)," ",t))}var u=n(7462),d=n(4996),p=n(6010);function c(e){let{src:t,invertible:n=!1,center:s=!1,alt:i="",...o}=e;const l=t.startsWith("/static")?t.substr(7):t,c=(0,d.Z)(l);return a.createElement(a.Fragment,null,a.createElement(r.Z,{to:l,style:{display:"none"}},"Link to ",i),a.createElement("img",(0,u.Z)({src:c,className:(0,p.Z)(n&&"invertible",s&&"center"),alt:i},o)))}},8806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),s=(n(7294),n(3905)),r=n(4966);const i={title:"Writing your own traits",description:"Traits are a convenient way to remove duplicate code and clean up your codebase. Learn how to write your traits."},o=void 0,l={unversionedId:"application/guides/writing-your-own-traits",id:"application/guides/writing-your-own-traits",title:"Writing your own traits",description:"Traits are a convenient way to remove duplicate code and clean up your codebase. Learn how to write your traits.",source:"@site/docs/application/guides/200-writing-your-own-traits.mdx",sourceDirName:"application/guides",slug:"/application/guides/writing-your-own-traits",permalink:"/application/guides/writing-your-own-traits",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/application/guides/200-writing-your-own-traits.mdx",tags:[],version:"current",sidebarPosition:200,frontMatter:{title:"Writing your own traits",description:"Traits are a convenient way to remove duplicate code and clean up your codebase. Learn how to write your traits."},sidebar:"application",previous:{title:"Guides",permalink:"/application/guides"},next:{title:"Writing asynchronous code",permalink:"/application/guides/writing-asynchronous-code"}},u={},d=[{value:"Before implementing your own trait",id:"before-implementing-your-own-trait",level:2},{value:"What specific problem wants your trait to solve?",id:"what-specific-problem-wants-your-trait-to-solve",level:3},{value:"Are there existing interfaces or traits you can use to support your trait?",id:"are-there-existing-interfaces-or-traits-you-can-use-to-support-your-trait",level:3},{value:"Are there other users that want to use your trait in a different context?",id:"are-there-other-users-that-want-to-use-your-trait-in-a-different-context",level:3},{value:"Decision",id:"decision",level:3},{value:"Example implementation of a trait",id:"example-implementation-of-a-trait",level:2},{value:"The problem",id:"the-problem",level:3},{value:"Defining the trait",id:"defining-the-trait",level:3},{value:"The <code>publish</code> method",id:"the-publish-method",level:3},{value:"The <code>register</code> method",id:"the-register-method",level:3},{value:"Refactoring of the sample verticles",id:"refactoring-of-the-sample-verticles",level:3},{value:"See also",id:"see-also",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This guide teaches you how to write your own traits in Java while using the\nTelestion APIs."),(0,s.kt)("admonition",{title:"Is this the right guide for you?",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"This guide primarily targets Backend Developers and everyone who wants to write\ntheir own traits."),(0,s.kt)("p",{parentName:"admonition"},"To best understand the topics covered here, you should be familiar with the\nfollowing concepts before reading this article:"),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/application/concepts/traits/"},"The concept of traits")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/application/tutorials/using-traits-in-verticles/"},"Using traits in Verticles")))),(0,s.kt)("h2",{id:"before-implementing-your-own-trait"},"Before implementing your own trait"),(0,s.kt)("p",null,"Before you implement your trait, first sit back and think about the following\nquestions:"),(0,s.kt)("h3",{id:"what-specific-problem-wants-your-trait-to-solve"},"What specific problem wants your trait to solve?"),(0,s.kt)("p",null,'First, write down the scope of your problem and try to slice it up into\nspecialized feature sets. One great feature of Java interfaces is that you can\nimport more than one of them at once. "Importing" more than one interface keeps\na trait\'s source file small, readable and maintainable.'),(0,s.kt)("p",null,"It's not a good idea to push every feature into one giant trait. Too big traits\nbloat the implementing class and pollute the class's namespace, which can create\nname collisions."),(0,s.kt)("h3",{id:"are-there-existing-interfaces-or-traits-you-can-use-to-support-your-trait"},"Are there existing interfaces or traits you can use to support your trait?"),(0,s.kt)("p",null,"Most of the time, you want to write a trait is when you implement the same\nfeature over and over again in different parts of your Application. The\nmaintenance of your code shrinks, and you don't have the ultimate source of\ntruth because two or more implementations diverged at some point."),(0,s.kt)("p",null,"Try to find these implementations and look at what features you use. Is there an\nexisting interface or trait that you can extend? If that's the case, that's\ngreat because you can keep your source code footprint small and maintainable."),(0,s.kt)("h3",{id:"are-there-other-users-that-want-to-use-your-trait-in-a-different-context"},"Are there other users that want to use your trait in a different context?"),(0,s.kt)("p",null,"It's already handy to write a trait for your specialized context. It becomes\neven more helpful when you can re-use it in a lot of places at once. But what if\nyour trait is so restrictive that you cannot re-use it elsewhere?"),(0,s.kt)("p",null,"Try to think about a greater context of your trait and where you can use it.\nAnother neat feature of Java is method overloading. You can define more than one\nmethod with the same name but different argument sets. Then, the compiler\nautomatically selects the most suitable method for the problem you want to solve\nwith your imported trait."),(0,s.kt)("p",null,"Then you can extend your specialized method by adding more methods with a\ndifferent and broader set of arguments."),(0,s.kt)("p",null,"The user of your trait thanks you later. \ud83d\ude09"),(0,s.kt)("h3",{id:"decision"},"Decision"),(0,s.kt)("p",null,"If you don't understand all things right away, that's okay. Take a look at the\nexample below for better understanding."),(0,s.kt)("h2",{id:"example-implementation-of-a-trait"},"Example implementation of a trait"),(0,s.kt)("h3",{id:"the-problem"},"The problem"),(0,s.kt)("p",null,"Imagine having more than one verticle that use the ",(0,s.kt)("inlineCode",{parentName:"p"},"vertx.eventBus()")," context.\nThey use ",(0,s.kt)("inlineCode",{parentName:"p"},"JsonMessage")," based messages to communicate with each other."),(0,s.kt)("p",null,"Thus, they need to convert the received messages to the wanted ",(0,s.kt)("inlineCode",{parentName:"p"},'"JsonMessage"'),"\ntype every time."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Responder.java"',title:'"Responder.java"'},'public class Responder extends TelestionVerticle<NoConfiguration> {\n  @Override\n  public void onStart() {\n    var eb = vertx.eventBus();\n\n    eb.consumer("some-address", message -> {\n      JsonMessage.on(SpecialMessage.class, message, body -> {\n        logger.debug("Received: {}", body);\n\n        // do some calcuation or change something\n        var result = new SpecialMessage(/* [...] */);\n\n        message.reply(result.json());\n        eb.publish("update-address", result.json());\n      });\n    });\n  }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Repeater.java"',title:'"Repeater.java"'},'public class Repeater extends TelestionVerticle<NoConfiguration> {\n  @Override\n  public void onStart() {\n    var eb = vertx.eventBus();\n    var delay = Duration.ofSeconds(1).toMillis();\n\n    vertx.setInterval(delay, id -> {\n      var message = new PingMessage();\n\n      var options = new DeliveryOptions();\n      var headers = options.getHeaders()\n          .add("send-time", System.currentTimeInMillis());\n\n      eb.publish("ping-address", message.json(), options);\n    });\n  }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Rerequester.java"',title:'"Rerequester.java"'},'public class Rerequester extends TelestionVerticle<NoConfiguration> {\n  @Override\n  public void onStart() {\n    var eb = vertx.eventBus();\n\n    eb.consumer("request-address", message -> {\n      JsonMessage.on(RequestMessage.class, message, request -> {\n        // okay, we received a request message, we need another request\n        var internalRequest = new InternalMessage(request);\n        eb.request("internal-address", internalRequest.json(), result -> {\n          if (!result.failed()) {\n            message.reply(result.result());\n          } else {\n            message.fail(500, "Ohh something went wrong.");\n          }\n        });\n      });\n    });\n  }\n}\n')),(0,s.kt)("p",null,"Do you see the repetition?"),(0,s.kt)("p",null,"You can do that better. Introduce a trait that allows verticles to get better\nand simpler access to the event bus."),(0,s.kt)("h3",{id:"defining-the-trait"},"Defining the trait"),(0,s.kt)("p",null,"You need a name for your new trait. What's about ",(0,s.kt)("inlineCode",{parentName:"p"},"WithEventBus"),"?"),(0,s.kt)("p",null,"Define it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="WithEventBus.java"',title:'"WithEventBus.java"'},"public interface WithEventBus {\n}\n")),(0,s.kt)("p",null,"Hmm, how do you get access to the event bus instance? Traits should not force\nthe using class to implement a function."),(0,s.kt)("p",null,"Every Verticle implements the ",(0,s.kt)("inlineCode",{parentName:"p"},"Verticle")," interface. That's your access point."),(0,s.kt)(r.s3,{to:"https://vertx.io/docs/apidocs/io/vertx/core/Verticle.html",mdxType:"Reference"},(0,s.kt)("code",null,"Verticle")," API reference"),(0,s.kt)("p",null,"Add it to your existing implementation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="WithEventBus.java" {1}',title:'"WithEventBus.java"',"{1}":!0},"public interface WithEventBus extends Verticle {\n}\n")),(0,s.kt)("admonition",{title:"Exposed interfaces",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"A lot of types exposed types on the Vert.x framework are Java interfaces. The\nimplementation side of Vert.x often imports these. If you want to write traits\nfor Verticles and other types, these interfaces are your intercept point.")),(0,s.kt)("h3",{id:"the-publish-method"},"The ",(0,s.kt)("inlineCode",{parentName:"h3"},"publish")," method"),(0,s.kt)("p",null,"Now that you have the definition of your trait, add the first method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="WithEventBus.java" {2-4}',title:'"WithEventBus.java"',"{2-4}":!0},"public interface WithEventBus extends Verticle {\n  default void publish(String address, Object message) {\n    getVertx().eventBus().publish(address, message);\n  }\n}\n")),(0,s.kt)("p",null,"You start with the publishing part and add a method to publish messages on a\nspecific event bus channel."),(0,s.kt)("p",null,"That's an improvement because the Verticle doesn't need to extract the event bus\ninstance anymore. But what's with the ",(0,s.kt)("inlineCode",{parentName:"p"},"JsonMessage")," based messages. You must\nconvert them to ",(0,s.kt)("inlineCode",{parentName:"p"},"JsonObject")," before transmitting them over the event bus."),(0,s.kt)("p",null,"Overload the ",(0,s.kt)("inlineCode",{parentName:"p"},"publish")," method to handle ",(0,s.kt)("inlineCode",{parentName:"p"},"JsonMessage")," messages in a special way:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="WithEventBus.java" {6-8}',title:'"WithEventBus.java"',"{6-8}":!0},"public interface WithEventBus extends Verticle {\n  default void publish(String address, Object message) {\n    getVertx().eventBus().publish(address, message);\n  }\n\n  default void publish(String address, JsonMessage message) {\n    publish(address, message.json());\n  }\n}\n")),(0,s.kt)("p",null,"The overloaded method accepts ",(0,s.kt)("inlineCode",{parentName:"p"},"JsonMessage")," as a message type, so you are safe\nto call ",(0,s.kt)("inlineCode",{parentName:"p"},"json()")," on it to convert it to a ",(0,s.kt)("inlineCode",{parentName:"p"},"JsonObject"),". Then you pass the\narguments further to the base method."),(0,s.kt)("p",null,"Now the user of your trait cannot forget the conversion anyone because you do\nit. That's convenient."),(0,s.kt)("p",null,"Now repeat this step with the call method call but you want to provide delivery\noptions, too:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="WithEventBus.java" {6-8,14-16}',title:'"WithEventBus.java"',"{6-8,14-16}":!0},"public interface WithEventBus extends Verticle {\n  default void publish(String address, Object message) {\n    getVertx().eventBus().publish(address, message);\n  }\n\n  default void publish(String address, Object message, DeliveryOptions options) {\n    getVertx().eventBus().publish(address, message, options);\n  }\n\n  default void publish(String address, JsonMessage message) {\n    publish(address, message.json());\n  }\n\n  default void publish(String address, JsonMessage message, DeliveryOptions options) {\n    publish(address, message.json(), options);\n  }\n}\n")),(0,s.kt)("p",null,"The user of your trait can provide delivery options if they like. But they\naren't forced to do so because you provide a method without any options. That's\nconvenient, too."),(0,s.kt)("h3",{id:"the-register-method"},"The ",(0,s.kt)("inlineCode",{parentName:"h3"},"register")," method"),(0,s.kt)("p",null,"Repeat this procedure for the ",(0,s.kt)("inlineCode",{parentName:"p"},"consumer")," method from the event bus instance. Add\na ",(0,s.kt)("inlineCode",{parentName:"p"},"register")," method to your trait:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="WithEventBus.java" {4-6}',title:'"WithEventBus.java"',"{4-6}":!0},"public interface WithEventBus extends Verticle {\n  // [...]\n\n  default <T> void register(String address, Handler<Message<T>> handler) {\n    getVertx().eventBus().consumer(address, handler);\n  }\n}\n")),(0,s.kt)("p",null,"In this example, you provide convenient access to the consuming side of the\nevent bus and rename the method to specify better the behavior that your trait's\nuser expects."),(0,s.kt)("p",null,"To integrate the automatic conversion from receiving messages to ",(0,s.kt)("inlineCode",{parentName:"p"},"JsonMessage"),"\nbased messages, you need to write a functional interface that provides the\nconverted type to the implementing method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MessageHandler.java"',title:'"MessageHandler.java"'},"@FunctionalInterface\npublic interface MessageHandler<T extends JsonMessage> {\n  void handle(T body);\n}\n")),(0,s.kt)("p",null,"Now, you use that interface in the ",(0,s.kt)("inlineCode",{parentName:"p"},"WithEventBus")," trait:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="WithEventBus.java" {8-10}',title:'"WithEventBus.java"',"{8-10}":!0},"public interface WithEventBus extends Verticle {\n  // [...]\n\n  default <T> void register(String address, Handler<Message<T>> handler) {\n    getVertx().eventBus().consumer(address, handler);\n  }\n\n  default <V extends JsonMessage> void register(String address, MessageHandler<V> handler, Class<V> type) {\n    this.<JsonObject>register(address, message -> JsonMessage.on(type, message, handler));\n  }\n}\n")),(0,s.kt)("p",null,"Now, the ",(0,s.kt)("inlineCode",{parentName:"p"},"register")," method automatically converts the incoming message to the\nspecified type when the user provides it."),(0,s.kt)("p",null,"The same step is repeatable so that the handler provides the converted message\nbody but also the message itself:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ExtendedMessageHandler.java"',title:'"ExtendedMessageHandler.java"'},"@FunctionalInterface\npublic interface ExtendedMessageHandler<V extends JsonMessage, T> {\n    void handle(V body, Message<T> message);\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="WithEventBus.java" {12-19}',title:'"WithEventBus.java"',"{12-19}":!0},"public interface WithEventBus extends Verticle {\n  // [...]\n\n  default <T> void register(String address, Handler<Message<T>> handler) {\n    getVertx().eventBus().consumer(address, handler);\n  }\n\n  default <V extends JsonMessage> void register(String address, MessageHandler<V> handler, Class<V> type) {\n    this.<JsonObject>register(address, message -> JsonMessage.on(type, message, handler));\n  }\n\n  default <V extends JsonMessage, T> void register(\n    String address,\n    ExtendedMessageHandler<V, T> handler,\n    Class<V> type) {\n      this.<JsonObject>register(address,\n        message -> JsonMessage.on(type, message,\n          body -> handler.handle(body, message)));\n    }\n}\n")),(0,s.kt)("p",null,"You can extend your trait further with more event bus methods if you like. But\nfor this example, the current features can already reduce repetition in the\nsample verticles."),(0,s.kt)("h3",{id:"refactoring-of-the-sample-verticles"},"Refactoring of the sample verticles"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"WithEventBus")," now simplifies the access to the event bus in verticles.\nUpdate the sample verticle using your new trait:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Responder.java" {1-2,6,9-18}',title:'"Responder.java"',"{1-2,6,9-18}":!0},'public class Responder extends TelestionVerticle<NoConfiguration>\n    implements WithEventBus {\n\n  @Override\n  public void onStart() {\n    register("some-address", this::handle, SpecialMessage.class);\n  }\n\n  private void handle(SpecialMessage body, Message<JsonObject> message) {\n    logger.debug("Received: {}", body);\n\n    // do some calcuation or change something\n    var result = new SpecialMessage(/* [...] */);\n\n    message.reply(result.json());\n    publish("update-address", result);\n  }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Repeater.java" {1-2,15}',title:'"Repeater.java"',"{1-2,15}":!0},'public class Repeater extends TelestionVerticle<NoConfiguration>\n    implements WithEventBus {\n\n  @Override\n  public void onStart() {\n    var delay = Duration.ofSeconds(1).toMillis();\n\n    vertx.setInterval(delay, id -> {\n      var message = new PingMessage();\n\n      var options = new DeliveryOptions();\n      var headers = options.getHeaders()\n          .add("send-time", System.currentTimeInMillis());\n\n      publish("ping-address", message, options);\n    });\n  }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Rerequester.java" {1-2,6,9-15}',title:'"Rerequester.java"',"{1-2,6,9-15}":!0},'public class Rerequester extends TelestionVerticle<NoConfiguration>\n    implements WithEventBus {\n\n  @Override\n  public void onStart() {\n    register("request-address", this::handle, RequestMessage.class);\n  }\n\n  private void handle(RequestMessage request, Message<JsonObject> message) {\n    // okay, we received a request message, we need another request\n    var internalRequest = new InternalMessage(request);\n    request("internal-address", internalRequest)\n      .onSuccess(response -> message.reply(response))\n      .onFailure(cause -> message.fail(500, cause.getMessage()));\n  }\n}\n')),(0,s.kt)("p",null,"You can write even more traits for Verticle. For example, the timing functions\nor shared data from the ",(0,s.kt)("inlineCode",{parentName:"p"},"vertx")," context."),(0,s.kt)("p",null,"The Telestion API provides a lot more traits for verticles:"),(0,s.kt)(r.s3,{to:"https://javadoc.io/doc/de.wuespace.telestion/telestion-api/latest/de/wuespace/telestion/api/verticle/trait/package-summary.html",mdxType:"Reference"},"List of Telestion Core Verticle traits"),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)(r.s3,{to:"/application/concepts/traits/",mdxType:"Reference"},"Traits concept"),(0,s.kt)(r.s3,{to:"/application/tutorials/using-traits-in-verticles",mdxType:"Reference"},"Using traits in Verticles"))}c.isMDXComponent=!0}}]);