"use strict";(self.webpackChunkdocusaurus_2_test=self.webpackChunkdocusaurus_2_test||[]).push([[362],{6054:function(e,t,n){n.d(t,{kN:function(){return d},rj:function(){return i},s3:function(){return s}});var a=n(7294);function i(e){var t=e.cols,n=void 0===t?2:t,i=e.children;return a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},i)}var o=n(6742);function s(e){var t=e.children,n=e.to;return a.createElement(o.Z,{to:n,className:"block-link"},a.createElement("span",null,t," \xbb"),a.createElement("span",null,n))}var r=function(){return a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},a.createElement("defs",null,a.createElement("style",null,".a{clip-path:url(#b);}"),a.createElement("clipPath",{id:"b"},a.createElement("rect",{width:24,height:24}))),a.createElement("g",{id:"a",className:"a"},a.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function d(e){var t=e.children,n=e.file;return a.createElement("a",{className:"block-link",download:!0,href:n},a.createElement("span",null,a.createElement(r,null)," ",t))}},4170:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),s=n(6054),r=(n(5064),n(8215),["components"]),d={title:"Writer's guide"},l="Writer's Guide",m={type:"mdx",permalink:"/telestion-docs/writers-guide",source:"@site/src/pages/writers-guide.mdx"},c=[{value:"Folder structure",id:"folder-structure",children:[]},{value:"General Writing Guidelines",id:"general-writing-guidelines",children:[]},{value:"Docusaurus Markdown Components",id:"docusaurus-markdown-components",children:[{value:"Code Blocks",id:"code-blocks",children:[]},{value:"Admonitions",id:"admonitions",children:[]}]},{value:"Custom MDX Components",id:"custom-mdx-components",children:[{value:"<code>&lt;Grid /&gt;</code>",id:"grid-",children:[]},{value:"<code>&lt;Reference /&gt;</code>",id:"reference-",children:[]},{value:"<code>&lt;FileDownload /&gt;</code>",id:"filedownload-",children:[]},{value:"Markdown content inside MDX components",id:"markdown-content-inside-mdx-components",children:[]}]},{value:"Static Assets (images, videos and other files)",id:"static-assets-images-videos-and-other-files",children:[{value:"Including an image",id:"including-an-image",children:[]},{value:"Images and dark mode",id:"images-and-dark-mode",children:[]}]}],p={toc:c};function u(e){var t=e.components,d=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"writers-guide"},"Writer's Guide"),(0,o.kt)("h2",{id:"folder-structure"},"Folder structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:"title='telestion-docs'",title:"'telestion-docs'"},'.\n\u251c\u2500\u2500 components\n\u2502   \u2514\u2500\u2500 index.js (exports all components)\n\u251c\u2500\u2500 docs (most of your work happens here!)\n\u2502   \u251c\u2500\u2500 _templates (templates for specific topic types)\n\u2502   \u2502   \u2514\u2500\u2500 tutorial.mdx\n\u2502   \u251c\u2500\u2500 category\n\u2502   \u2502   \u251c\u2500\u2500 _category.yml_ (a category configuration file)\n\u2502   \u2502   \u251c\u2500\u2500 topic1.mdx\n\u2502   \u2502   \u2514\u2500\u2500 topic2.mdx\n\u2502   \u2514\u2500\u2500 intro.mdx (the documentation "home page")\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 custom.css (custom styles)\n\u2502   \u2514\u2500\u2500 pages (general / non-docs pages)\n\u2502       \u2514\u2500\u2500 writers-guide.mdx (accessible at /writers-guide, you are here :P)\n\u251c\u2500\u2500 static (contents served directly under the base url\n\u2502   \u2514\u2500\u2500 img (images)\n\u2502       \u251c\u2500\u2500 drawio-diagrams (images that contain DrawIO metadata)\n\u2502       \u251c\u2500\u2500 excalidraw-diagrams (same as DrawIO, but for Excalidraw)\n\u2502       \u2514\u2500\u2500 logo.svg (the Telestion logo)\n\u2514\u2500\u2500 docusaurus.config.js (configures the page in general)\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Templates")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/_templates")," folder contains templates for all commonly used page types\nof the documentation."),(0,o.kt)("p",{parentName:"div"},"All templates, aside from laying down a general structure that you have to fill\nin, contain a few things to get you started:"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Guidelines for when to use the template"),(0,o.kt)("li",{parentName:"ol"},"Relevant component imports and copy/pastable snippets that might be useful\nfor the topic"),(0,o.kt)("li",{parentName:"ol"},"Writing tips for the type of content the topic is for")))),(0,o.kt)("h2",{id:"general-writing-guidelines"},"General Writing Guidelines"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Write in the present tense"),(0,o.kt)("li",{parentName:"ul"},"Use neutral pronouns (they/them instead of he/she and him/her)"),(0,o.kt)("li",{parentName:"ul"},"Be respectful to everyone"),(0,o.kt)("li",{parentName:"ul"},"Be aware of the potential for cultural misunderstandings")),(0,o.kt)("h2",{id:"docusaurus-markdown-components"},"Docusaurus Markdown Components"),(0,o.kt)("p",null,"Docusaurus provides a bunch of additional functionality within our Markdown\ndocumentation."),(0,o.kt)("p",null,"For all details, please refer to their excellent documentation:"),(0,o.kt)(s.s3,{to:"https://docusaurus.io/docs/markdown-features",mdxType:"Reference"},"Docusuarus Docs regarding Mardkown"),(0,o.kt)("p",null,"Additionally, we'll describe essential elements here, as well:"),(0,o.kt)("h3",{id:"code-blocks"},"Code Blocks"),(0,o.kt)("h4",{id:"code"},"Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"topic.mdx","topic.mdx":!0},"```java title='MyClass.java' {3}\nclass MyClass {\n    MyClass(String message) {\n        System.out.println(message);\n    }\n}\n```\n")),(0,o.kt)("h4",{id:"result"},"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='MyClass.java' {3}",title:"'MyClass.java'","{3}":!0},"class MyClass {\n    MyClass(String message) {\n        System.out.println(message);\n    }\n}\n")),(0,o.kt)("h3",{id:"admonitions"},"Admonitions"),(0,o.kt)("h4",{id:"code-1"},"Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdx"},":::note Optional Title\n\nContent\n\n:::\n\n:::tip Optional Title\n\nContent\n\n:::\n\n:::info Optional Title\n\nContent\n\n:::\n\n:::caution Optional Title\n\nContent\n\n:::\n\n:::danger Optional Title\n\nContent\n\n:::\n")),(0,o.kt)("h4",{id:"result-1"},"Result:"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Optional Title")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Content"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Optional Title")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Content"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Optional Title")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Content"))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Optional Title")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Content"))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Optional Title")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Content"))),(0,o.kt)("h2",{id:"custom-mdx-components"},"Custom MDX Components"),(0,o.kt)("p",null,"Apart from the elements Docusaurus natively provides, there are also a few\ncustom components for the Telestion documentation:"),(0,o.kt)("h3",{id:"grid-"},(0,o.kt)("inlineCode",{parentName:"h3"},"<Grid />")),(0,o.kt)("p",null,"Allows to display several block elements next to each other, especially useful\nin combination with ",(0,o.kt)("a",{parentName:"p",href:"#reference-"},(0,o.kt)("inlineCode",{parentName:"a"},"<Reference />"))),(0,o.kt)("h4",{id:"code-2"},"Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"title='topic.mdx'",title:"'topic.mdx'"},"import { Grid } from '/components';\n\n<Grid cols={2}>\n\n:::danger First note\n\nNote content\n\n:::\n\n:::caution Another Note\n\nNote content\n\n:::\n\n</Grid>\n")),(0,o.kt)("h4",{id:"result-2"},"Result:"),(0,o.kt)(s.rj,{cols:2,mdxType:"Grid"},(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"First note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note content"))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Another Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note content")))),(0,o.kt)("h3",{id:"reference-"},(0,o.kt)("inlineCode",{parentName:"h3"},"<Reference />")),(0,o.kt)("h4",{id:"code-3"},"Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"title='topic.mdx'",title:"'topic.mdx'"},"import { Reference } from '/components';\n\n<Reference to=\"https://docusaurus.io/docs/markdown-features\">\n    Docusuarus Docs regarding Mardkown\n</Reference>\n")),(0,o.kt)("h4",{id:"result-3"},"Result:"),(0,o.kt)(s.s3,{to:"https://docusaurus.io/docs/markdown-features",mdxType:"Reference"},"Docusuarus Docs regarding Mardkown"),(0,o.kt)("h3",{id:"filedownload-"},(0,o.kt)("inlineCode",{parentName:"h3"},"<FileDownload />")),(0,o.kt)("h4",{id:"code-4"},"Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdx"},"import { FileDownload } from '/components';\n\n<FileDownload file=\"/img/logo.svg\">XD Template</FileDownload>\n")),(0,o.kt)("h4",{id:"result-4"},"Result:"),(0,o.kt)(s.kN,{file:"/img/logo.svg",mdxType:"FileDownload"},"XD Template"),(0,o.kt)("h3",{id:"markdown-content-inside-mdx-components"},"Markdown content inside MDX components"),(0,o.kt)("p",null,"To write Markdown content inside MDX components, leave a blank line before and\nafter your content and do not indent the content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdx"},"<MyComponent>\n    <MyChildComponent>\n\nSome Markdown Content\n\n    </MyChildComponent>\n\n</MyComponent>\n")),(0,o.kt)("h2",{id:"static-assets-images-videos-and-other-files"},"Static Assets (images, videos and other files)"),(0,o.kt)("p",null,"Static assets are stored within the ",(0,o.kt)("inlineCode",{parentName:"p"},"static")," folder and served at the root of\nthe repository, i.e., an image in ",(0,o.kt)("inlineCode",{parentName:"p"},"static/img/logo.svg")," can be referenced using\n",(0,o.kt)("inlineCode",{parentName:"p"},"/img/logo.svg"),"."),(0,o.kt)("h3",{id:"including-an-image"},"Including an image"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Big image sizes")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Images with a big file size affect the page's load time and, through that, also\nthe search engine ranking. Therefore, when your image is bigger than 500 kB, try\nto reduce its size with these steps before using them:"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},'For diagrams and other "illustration-like" images, consider using a vector\nformat (SVG)'),(0,o.kt)("li",{parentName:"ol"},"Consider what size the image has to, reasonably, be displayed at, and reduce\nthe image's dimensions if necessary."),(0,o.kt)("li",{parentName:"ol"},"Run your JPEG and PNG files through ",(0,o.kt)("a",{parentName:"li",href:"https://tinypng.com/"},"https://tinypng.com/")," to reduce their file\nsize without changing the image itself")))),(0,o.kt)("p",null,"To include an image, you can simply use the standard Markdown image syntax:"),(0,o.kt)("h4",{id:"code-5"},"Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdx"},"![Description of the image](/img/logo.svg)\n")),(0,o.kt)("h4",{id:"result-5"},"Result:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Description of the image",src:n(1958).Z})),(0,o.kt)("h3",{id:"images-and-dark-mode"},"Images and dark mode"),(0,o.kt)("p",null,"If your image has no problems with being inverted (light becomes dark and vice\nversa), you can alternatively include your images like this and allow the\nwebsite to invert them when users open the website in dark mode:"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"One example of a well-supported image type is a diagram that only contains black\ntext/shapes on a white/transparent background."))),(0,o.kt)("h4",{id:"code-6"},"Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdx"},'<img src="/img/excalidraw-diagrams/vertx/verticle.svg" className="invertable" />\n')),(0,o.kt)("h4",{id:"result-6"},"Result:"),(0,o.kt)("img",{src:"/telestion-docs/img/excalidraw-diagrams/vertx/verticle.svg",className:"invertable"}),(0,o.kt)("p",null,"(switch to dark mode to see the effect)"))}u.isMDXComponent=!0},1958:function(e,t,n){t.Z=n.p+"assets/images/logo-27008f241f7cecd93c63e3c2bd1a01fd.svg"}}]);