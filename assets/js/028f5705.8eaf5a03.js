"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[822],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4966:function(e,t,n){n.d(t,{kN:function(){return p},rj:function(){return a},Ee:function(){return h},s3:function(){return o}});var i=n(7294);function a(e){var t=e.cols,n=void 0===t?2:t,a=e.children;return i.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},a)}var r=n(9960);function o(e){var t=e.children,n=e.to;return i.createElement(r.Z,{to:n,className:"block-link"},i.createElement("span",null,t," \xbb"),i.createElement("span",null,n))}var l=function(){return i.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},i.createElement("defs",null,i.createElement("style",null,".a{clip-path:url(#b);}"),i.createElement("clipPath",{id:"b"},i.createElement("rect",{width:24,height:24}))),i.createElement("g",{id:"a",className:"a"},i.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function p(e){var t=e.children,n=e.file;return i.createElement("a",{className:"block-link",download:!0,href:n},i.createElement("span",null,i.createElement(l,null)," ",t))}var s=n(7462),c=n(3366),u=n(4996),m=n(6010),d=["src","invertible","center","alt"];function h(e){var t=e.src,n=e.invertible,a=void 0!==n&&n,o=e.center,l=void 0!==o&&o,p=e.alt,h=void 0===p?"":p,g=(0,c.Z)(e,d),v=t.startsWith("/static")?t.substr(7):t,f=(0,u.Z)(v);return i.createElement(i.Fragment,null,i.createElement(r.Z,{to:v,style:{display:"none"}},"Link to ",h),i.createElement("img",(0,s.Z)({src:f,className:(0,m.Z)(a&&"invertible",l&&"center"),alt:h},g)))}},352:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=n(4966),l=["components"],p={title:"Starting a new Project",description:"Start a new Telestion Project with the Telestion Project template"},s=void 0,c={unversionedId:"application/tutorials/starting-a-new-project",id:"application/tutorials/starting-a-new-project",title:"Starting a new Project",description:"Start a new Telestion Project with the Telestion Project template",source:"@site/docs/application/tutorials/100-starting-a-new-project.mdx",sourceDirName:"application/tutorials",slug:"/application/tutorials/starting-a-new-project",permalink:"/application/tutorials/starting-a-new-project",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/application/tutorials/100-starting-a-new-project.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Starting a new Project",description:"Start a new Telestion Project with the Telestion Project template"},sidebar:"application",previous:{title:"Tutorials",permalink:"/application/tutorials"},next:{title:"Writing a Verticle",permalink:"/application/tutorials/writing-a-verticle"}},u={},m=[{value:"What you&#39;ll build",id:"what-youll-build",level:2},{value:"Using GitHub",id:"using-github",level:2},{value:"Step 1: Create a new Project repository",id:"step-1-create-a-new-project-repository",level:3},{value:"Step 2: Initialize the new project",id:"step-2-initialize-the-new-project",level:3},{value:"Manually",id:"manually",level:2},{value:"Step 1: Create an empty git repository",id:"step-1-create-an-empty-git-repository",level:3},{value:"Step 2: Import the template",id:"step-2-import-the-template",level:3},{value:"Step 3: Initialize the project",id:"step-3-initialize-the-project",level:3},{value:"(Optional) Step 4: Push to a remote repository",id:"optional-step-4-push-to-a-remote-repository",level:3},{value:"Next steps",id:"next-steps",level:2}],d={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, you'll start a new Telestion Project based on the provided\ntemplate."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To complete this tutorial, you should be familiar with the features of Git and\nthe usage of GitHub templates as well as the GitHub web interface."))),(0,r.kt)("h2",{id:"what-youll-build"},"What you'll build"),(0,r.kt)("p",null,'A "ready to implement" project for your specific groundstation-related problem.'),(0,r.kt)("h2",{id:"using-github"},"Using GitHub"),(0,r.kt)("h3",{id:"step-1-create-a-new-project-repository"},"Step 1: Create a new Project repository"),(0,r.kt)("p",null,"First, log into GitHub with your user account."),(0,r.kt)("p",null,"Head to the Telestion project template and press the ",(0,r.kt)("inlineCode",{parentName:"p"},"Use this template button"),"."),(0,r.kt)(o.s3,{to:"https://github.com/wuespace/telestion-project-template",mdxType:"Reference"},"Telestion Project Template"),(0,r.kt)(o.Ee,{src:"/img/new-project/github-use-this-template.png",alt:"GitHub's Use this template button",mdxType:"Image"}),(0,r.kt)("p",null,"Now, GitHub asks you some required information. Select a suitable user/group and\ngive the repository a meaningful name."),(0,r.kt)("p",null,"Next, select your repository's visibility. When you're happy with your\ninformation, press the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create repository from template")," button."),(0,r.kt)(o.Ee,{src:"/img/new-project/github-create-repo.png",alt:"GitHub's Create repository from template interface",mdxType:"Image"}),(0,r.kt)("p",null,"That's it."),(0,r.kt)("h3",{id:"step-2-initialize-the-new-project"},"Step 2: Initialize the new project"),(0,r.kt)("p",null,"Now, you should have a new repository under your control."),(0,r.kt)("p",null,"Next, initialize the Telestion project. The template already has a GitHub Action\nconfiguration that does the initialization steps for you."),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Actions")," tab and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Initialize")," in the left sidebar."),(0,r.kt)(o.Ee,{src:"/img/new-project/github-actions-initialize.png",alt:"GitHub Actions page with the selected Initialize action",mdxType:"Image"}),(0,r.kt)("p",null,"Now press the ",(0,r.kt)("inlineCode",{parentName:"p"},"Run workflow")," button in the Action list. In the popup, enter your\npreferences and then press ",(0,r.kt)("inlineCode",{parentName:"p"},"Run workflow"),"."),(0,r.kt)(o.Ee,{src:"/img/new-project/github-initialize-run-workflow.png",alt:"Open popup to run the Initialize workflow in GitHub Actions",mdxType:"Image"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Java package naming")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You should follow the\n",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/mini/guide-naming-conventions.html"},"Maven Central ",(0,r.kt)("inlineCode",{parentName:"a"},"groupId")," naming conventions"),",\nfor example, beginning with the company URL in reverse."))),(0,r.kt)("h2",{id:"manually"},"Manually"),(0,r.kt)("h3",{id:"step-1-create-an-empty-git-repository"},"Step 1: Create an empty git repository"),(0,r.kt)("p",null,"Open your console and create a new git repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir my-telestion-project\ncd my-telestion-project\ngit init\n")),(0,r.kt)("h3",{id:"step-2-import-the-template"},"Step 2: Import the template"),(0,r.kt)("p",null,"Fetch the latest changes from the Project Template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'git fetch --depth=1 -n "https://github.com/wuespace/telestion-project-template.git"\n')),(0,r.kt)(o.s3,{to:"https://github.com/wuespace/telestion-project-template",mdxType:"Reference"},"Telestion Project Template"),(0,r.kt)("p",null,"Use the last commit as your starting point:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'git reset --hard "$(git commit-tree \'FETCH_HEAD^{tree}\' -m "feat: Initial commit")"\n')),(0,r.kt)("h3",{id:"step-3-initialize-the-project"},"Step 3: Initialize the project"),(0,r.kt)("p",null,"Run the provided initialization script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./scripts/initialize.sh\n")),(0,r.kt)("p",null,"The script asks if things are unclear or if it can't recognize them\nautomatically."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Explicit inputs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can also provide the information via command line parameters. Run\n",(0,r.kt)("inlineCode",{parentName:"p"},"./scripts/initializate.sh --help")," for more information."))),(0,r.kt)("p",null,"As suggested by the script, commit the initialization changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git add .\ngit commit -m 'feat: Initialize project'\n")),(0,r.kt)("h3",{id:"optional-step-4-push-to-a-remote-repository"},"(Optional) Step 4: Push to a remote repository"),(0,r.kt)("p",null,"If you have a remote repository at your hand, you can add it as the default\nremote of the new Telestion Project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'git remote add origin "git@gitlab.com:your-name/my-telestion-project.git"\ngit branch -M main\ngit push -u origin main\n')),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"That's it. Now, you have a new Telestion Project ready for development."),(0,r.kt)(o.s3,{to:"/application/tutorials/writing-a-verticle",mdxType:"Reference"},"Writing your first verticle"))}h.isMDXComponent=!0}}]);