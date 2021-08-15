"use strict";(self.webpackChunkdocusaurus_2_test=self.webpackChunkdocusaurus_2_test||[]).push([[953],{1993:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var i=n(7462),s=n(3366),a=(n(7294),n(3905)),r=["components"],o={title:"Writing a Verticle"},l=void 0,c={unversionedId:"backend/tutorials/writing-a-verticle",id:"backend/tutorials/writing-a-verticle",isDocsHomePage:!1,title:"Writing a Verticle",description:"In this tutorial, we write a simple verticle for the Telestion ecosystem.",source:"@site/docs/backend/tutorials/writing-a-verticle.mdx",sourceDirName:"backend/tutorials",slug:"/backend/tutorials/writing-a-verticle",permalink:"/telestion-docs/backend/tutorials/writing-a-verticle",editUrl:"https://github.com/wuespace/telestion-docs/docs/backend/tutorials/writing-a-verticle.mdx",version:"current",frontMatter:{title:"Writing a Verticle"},sidebar:"tutorialSidebar",previous:{title:"Backend Tutorials",permalink:"/telestion-docs/backend/tutorials/index"}},d=[{value:"What we&#39;ll build",id:"what-well-build",children:[]},{value:"Steps",id:"steps",children:[{value:"Step 1: Create a new verticle",id:"step-1-create-a-new-verticle",children:[]},{value:"Step 2: Listen to messages",id:"step-2-listen-to-messages",children:[]},{value:"Step 3: Republish Messages",id:"step-3-republish-messages",children:[]},{value:"Step 4: Add configuration options",id:"step-4-add-configuration-options",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,s.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial, we write a simple verticle for the Telestion ecosystem."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"To complete this tutorial, you should be familiar with standard Java programming\nstructures."))),(0,a.kt)("h2",{id:"what-well-build"},"What we'll build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MessageTransformer.java'",title:"'MessageTransformer.java'"},'package de.wuespace.telestion.project.daedalus2;\n\nimport com.fasterxml.jackson.annotation.JsonProperty;\nimport de.wuespace.telestion.api.config.Config;\nimport de.wuespace.telestion.api.message.JsonMessage;\nimport de.wuespace.telestion.project.daedalus2.mavlink.SeedSystemT;\nimport de.wuespace.telestion.project.daedalus2.messages.*;\nimport io.vertx.core.AbstractVerticle;\nimport io.vertx.core.Promise;\n\npublic class MessageTransformer extends AbstractVerticle {\n private Configuration config;\n\n @SuppressWarnings("unused")\n public MessageTransformer() {\n  this(null);\n }\n\n public MessageTransformer(Configuration config) {\n  this.config = config;\n }\n\n @Override\n public void start(Promise<Void> startPromise) {\n  var eb = vertx.eventBus();\n\n  this.config = Config.get(\n    this.config,\n    config(),\n    Configuration.class\n  );\n\n  eb.consumer(this.config.inAddress(), raw -> JsonMessage.on(\n    SeedSystemT.class,\n    raw,\n    rawSystemT -> {\n      var beautifulMessage = new SystemT(rawSystemT);\n      eb.publish(\n        this.config.outAddress(),\n        beautifulMessage.json()\n      );\n    }\n  ));\n\n  startPromise.complete();\n }\n\n public record Configuration(\n   @JsonProperty\n   String inAddress,\n   @JsonProperty\n   String outAddress\n ) implements JsonMessage {\n  @SuppressWarnings("unused")\n  private Configuration() {\n   this(null, null);\n  }\n }\n}\n')),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"step-1-create-a-new-verticle"},"Step 1: Create a new verticle"),(0,a.kt)("h3",{id:"step-2-listen-to-messages"},"Step 2: Listen to messages"),(0,a.kt)("h3",{id:"step-3-republish-messages"},"Step 3: Republish Messages"),(0,a.kt)("h3",{id:"step-4-add-configuration-options"},"Step 4: Add configuration options"),(0,a.kt)("h2",{id:"next-steps"},"Next steps"))}p.isMDXComponent=!0}}]);