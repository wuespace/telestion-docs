"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||r;return n?i.createElement(d,o(o({ref:t},c),{},{components:n})):i.createElement(d,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4966:(e,t,n)=>{n.d(t,{kN:()=>p,rj:()=>a,Ee:()=>m,s3:()=>o});var i=n(7294);function a(e){let{cols:t=2,children:n}=e;return i.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,columnGap:"1em"}},n)}var r=n(9960);function o(e){let{children:t,to:n}=e;return i.createElement(r.Z,{to:n,className:"block-link"},i.createElement("span",null,t," \xbb"),i.createElement("span",null,n))}const l=()=>i.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},i.createElement("defs",null,i.createElement("style",null,".a{clip-path:url(#b);}"),i.createElement("clipPath",{id:"b"},i.createElement("rect",{width:24,height:24}))),i.createElement("g",{id:"a",className:"a"},i.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})));function p(e){let{children:t,file:n}=e;return i.createElement("a",{className:"block-link",download:!0,href:n},i.createElement("span",null,i.createElement(l,null)," ",t))}var s=n(7462),c=n(4996),u=n(6010);function m(e){let{src:t,invertible:n=!1,center:a=!1,alt:o="",...l}=e;const p=t.startsWith("/static")?t.substr(7):t,m=(0,c.Z)(p);return i.createElement(i.Fragment,null,i.createElement(r.Z,{to:p,style:{display:"none"}},"Link to ",o),i.createElement("img",(0,s.Z)({src:m,className:(0,u.Z)(n&&"invertible",a&&"center"),alt:o},l)))}},352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var i=n(7462),a=(n(7294),n(3905)),r=n(4966);const o={title:"Starting a new Project",description:"Start a new Telestion Project with the Telestion Project template"},l=void 0,p={unversionedId:"application/tutorials/starting-a-new-project",id:"application/tutorials/starting-a-new-project",title:"Starting a new Project",description:"Start a new Telestion Project with the Telestion Project template",source:"@site/docs/application/tutorials/100-starting-a-new-project.mdx",sourceDirName:"application/tutorials",slug:"/application/tutorials/starting-a-new-project",permalink:"/application/tutorials/starting-a-new-project",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/application/tutorials/100-starting-a-new-project.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Starting a new Project",description:"Start a new Telestion Project with the Telestion Project template"},sidebar:"application",previous:{title:"Tutorials",permalink:"/application/tutorials"},next:{title:"Writing a Verticle",permalink:"/application/tutorials/writing-a-verticle"}},s={},c=[{value:"What you&#39;ll build",id:"what-youll-build",level:2},{value:"Using GitHub",id:"using-github",level:2},{value:"Step 1: Create a new Project repository",id:"step-1-create-a-new-project-repository",level:3},{value:"Step 2: Initialize the new project",id:"step-2-initialize-the-new-project",level:3},{value:"Manually",id:"manually",level:2},{value:"Step 1: Create an empty git repository",id:"step-1-create-an-empty-git-repository",level:3},{value:"Step 2: Import the template",id:"step-2-import-the-template",level:3},{value:"Step 3: Initialize the project",id:"step-3-initialize-the-project",level:3},{value:"(Optional) Step 4: Push to a remote repository",id:"optional-step-4-push-to-a-remote-repository",level:3},{value:"Next steps",id:"next-steps",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial, you'll start a new Telestion Project based on the provided\ntemplate."),(0,a.kt)("admonition",{title:"Prerequisites",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To complete this tutorial, you should be familiar with the features of Git and\nthe usage of GitHub templates as well as the GitHub web interface.")),(0,a.kt)("h2",{id:"what-youll-build"},"What you'll build"),(0,a.kt)("p",null,'A "ready to implement" project for your specific groundstation-related problem.'),(0,a.kt)("h2",{id:"using-github"},"Using GitHub"),(0,a.kt)("h3",{id:"step-1-create-a-new-project-repository"},"Step 1: Create a new Project repository"),(0,a.kt)("p",null,"First, log into GitHub with your user account."),(0,a.kt)("p",null,"Head to the Telestion project template and press the ",(0,a.kt)("inlineCode",{parentName:"p"},"Use this template button"),"."),(0,a.kt)(r.s3,{to:"https://github.com/wuespace/telestion-project-template",mdxType:"Reference"},"Telestion Project Template"),(0,a.kt)(r.Ee,{src:"/img/new-project/github-use-this-template.png",alt:"GitHub's Use this template button",mdxType:"Image"}),(0,a.kt)("p",null,"Now, GitHub asks you some required information. Select a suitable user/group and\ngive the repository a meaningful name."),(0,a.kt)("p",null,"Next, select your repository's visibility. When you're happy with your\ninformation, press the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create repository from template")," button."),(0,a.kt)(r.Ee,{src:"/img/new-project/github-create-repo.png",alt:"GitHub's Create repository from template interface",mdxType:"Image"}),(0,a.kt)("p",null,"That's it."),(0,a.kt)("h3",{id:"step-2-initialize-the-new-project"},"Step 2: Initialize the new project"),(0,a.kt)("p",null,"Now, you should have a new repository under your control."),(0,a.kt)("p",null,"Next, initialize the Telestion project. The template already has a GitHub Action\nconfiguration that does the initialization steps for you."),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Actions")," tab and select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Initialize")," in the left sidebar."),(0,a.kt)(r.Ee,{src:"/img/new-project/github-actions-initialize.png",alt:"GitHub Actions page with the selected Initialize action",mdxType:"Image"}),(0,a.kt)("p",null,"Now press the ",(0,a.kt)("inlineCode",{parentName:"p"},"Run workflow")," button in the Action list. In the popup, enter your\npreferences and then press ",(0,a.kt)("inlineCode",{parentName:"p"},"Run workflow"),"."),(0,a.kt)(r.Ee,{src:"/img/new-project/github-initialize-run-workflow.png",alt:"Open popup to run the Initialize workflow in GitHub Actions",mdxType:"Image"}),(0,a.kt)("admonition",{title:"Java package naming",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You should follow the\n",(0,a.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/mini/guide-naming-conventions.html"},"Maven Central ",(0,a.kt)("inlineCode",{parentName:"a"},"groupId")," naming conventions"),",\nfor example, beginning with the company URL in reverse.")),(0,a.kt)("h2",{id:"manually"},"Manually"),(0,a.kt)("h3",{id:"step-1-create-an-empty-git-repository"},"Step 1: Create an empty git repository"),(0,a.kt)("p",null,"Open your console and create a new git repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir my-telestion-project\ncd my-telestion-project\ngit init\n")),(0,a.kt)("h3",{id:"step-2-import-the-template"},"Step 2: Import the template"),(0,a.kt)("p",null,"Fetch the latest changes from the Project Template:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'git fetch --depth=1 -n "https://github.com/wuespace/telestion-project-template.git"\n')),(0,a.kt)(r.s3,{to:"https://github.com/wuespace/telestion-project-template",mdxType:"Reference"},"Telestion Project Template"),(0,a.kt)("p",null,"Use the last commit as your starting point:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'git reset --hard "$(git commit-tree \'FETCH_HEAD^{tree}\' -m "feat: Initial commit")"\n')),(0,a.kt)("h3",{id:"step-3-initialize-the-project"},"Step 3: Initialize the project"),(0,a.kt)("p",null,"Run the provided initialization script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./scripts/initialize.sh\n")),(0,a.kt)("p",null,"The script asks if things are unclear or if it can't recognize them\nautomatically."),(0,a.kt)("admonition",{title:"Explicit inputs",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also provide the information via command line parameters. Run\n",(0,a.kt)("inlineCode",{parentName:"p"},"./scripts/initializate.sh --help")," for more information.")),(0,a.kt)("p",null,"As suggested by the script, commit the initialization changes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git add .\ngit commit -m 'feat: Initialize project'\n")),(0,a.kt)("h3",{id:"optional-step-4-push-to-a-remote-repository"},"(Optional) Step 4: Push to a remote repository"),(0,a.kt)("p",null,"If you have a remote repository at your hand, you can add it as the default\nremote of the new Telestion Project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'git remote add origin "git@gitlab.com:your-name/my-telestion-project.git"\ngit branch -M main\ngit push -u origin main\n')),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"That's it. Now, you have a new Telestion Project ready for development."),(0,a.kt)(r.s3,{to:"/application/tutorials/writing-a-verticle",mdxType:"Reference"},"Writing your first verticle"))}m.isMDXComponent=!0}}]);