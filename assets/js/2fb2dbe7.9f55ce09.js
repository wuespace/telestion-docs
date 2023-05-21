"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[9411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5335:(e,t,n)=>{n.d(t,{ZP:()=>r});var o=n(7462),i=(n(7294),n(3905));const a={toc:[]};function r(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Deprecated: Vert.x-based Telestion",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Please note that the application and development of backend services using\nVert.x in Telestion are deprecated. In the future, Telestion backend services\nwill be developed using TypeScript and Deno, or through custom integrations with\nother languages."),(0,i.kt)("p",{parentName:"admonition"},"While there may be a compatibility layer for Vert.x services in the future, its\navailability is not guaranteed."),(0,i.kt)("p",{parentName:"admonition"},"For developing backend services, please refer to the (Work-in-Progress)\ndocumentation available here:\n",(0,i.kt)("a",{parentName:"p",href:"https://pklaschka.github.io/telestion-docs-new/"},"https://pklaschka.github.io/telestion-docs-new/"),".\nOnce the documentation is complete, it will be moved to the main Telestion\ndocumentation."),(0,i.kt)("p",{parentName:"admonition"},"Additional Information:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"NATS will be used as the distributed message bus/message broker for Telestion."),(0,i.kt)("li",{parentName:"ul"},"NATS' integrated authentication and authorization features will handle\nauthentication and authorization for Ground Station operators, providing a\nsingle source of truth."),(0,i.kt)("li",{parentName:"ul"},"The event bus bridge will no longer be featured, and clients will be directly\nconnected to the NATS server.")),(0,i.kt)("p",{parentName:"admonition"},"To establish a more technology-independent terminology, the Telestion project\nwill modify the naming conventions as follows:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The NATS server will be referred to as the message broker, message bus, or\nNATS server interchangeably."),(0,i.kt)("li",{parentName:"ul"},"Components that act as services without an attached user interface, will be\nreferred to as services or backend services collectively."),(0,i.kt)("li",{parentName:"ul"},'Components that provide a user interface, formerly known as "clients," will be\nreferred to as frontends. In most cases, the frontend will authenticate to the\nmessage broker as the user, while backend services will act on their own\nbehalf.')),(0,i.kt)("p",{parentName:"admonition"},'These changes aim to provide clearer and more consistent terminology, accounting\nfor the possibility of components having both service and frontend\nfunctionalities. Additionally, the use of "client" for frontends will be\nreplaced to avoid potential confusion.'),(0,i.kt)("p",{parentName:"admonition"},"We recommend using the NATS client libraries recommended by NATS itself, unless\nthere are no suitable options available for the targeted language/environment.\nWe will not develop our own client libraries unless there is a lack of suitable\noptions or significant advantages justify the effort."),(0,i.kt)("p",{parentName:"admonition"},"While Deno/TypeScript is the recommended choice for backend services, its use is\nnot mandatory. Developers will be encouraged to use Deno/TypeScript where\nappropriate, but other options will still be supported for specific services.\nComprehensive documentation and resources will be provided for writing and\ndeploying Deno-based backend services in TypeScript."),(0,i.kt)("p",{parentName:"admonition"},"Please consider these changes and updates as you continue with Telestion\ndevelopment.")))}r.isMDXComponent=!0},4966:(e,t,n)=>{n.d(t,{kN:()=>s,rj:()=>i,Ee:()=>d,s3:()=>r});var o=n(7294);function i(e){let{cols:t=2,children:n}=e;return o.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,columnGap:"1em"}},n)}var a=n(9960);function r(e){let{children:t,to:n}=e;return o.createElement(a.Z,{to:n,className:"block-link"},o.createElement("span",null,t," \xbb"),o.createElement("span",null,n))}const l=()=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},o.createElement("defs",null,o.createElement("style",null,".a{clip-path:url(#b);}"),o.createElement("clipPath",{id:"b"},o.createElement("rect",{width:24,height:24}))),o.createElement("g",{id:"a",className:"a"},o.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})));function s(e){let{children:t,file:n}=e;return o.createElement("a",{className:"block-link",download:!0,href:n},o.createElement("span",null,o.createElement(l,null)," ",t))}var p=n(7462),c=n(4996),u=n(6010);function d(e){let{src:t,invertible:n=!1,center:i=!1,alt:r="",...l}=e;const s=t.startsWith("/static")?t.substr(7):t,d=(0,c.Z)(s);return o.createElement(o.Fragment,null,o.createElement(a.Z,{to:s,style:{display:"none"}},"Link to ",r),o.createElement("img",(0,p.Z)({src:d,className:(0,u.Z)(n&&"invertible",i&&"center"),alt:r},l)))}n(5335)},4514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),i=(n(7294),n(3905)),a=n(4966);const r={title:"Deploying your project",description:"Deploy a new version of your Telestion Project"},l=void 0,s={unversionedId:"application/tutorials/deploying-your-project",id:"application/tutorials/deploying-your-project",title:"Deploying your project",description:"Deploy a new version of your Telestion Project",source:"@site/docs/application/tutorials/300-deploying-your-project.mdx",sourceDirName:"application/tutorials",slug:"/application/tutorials/deploying-your-project",permalink:"/application/tutorials/deploying-your-project",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/application/tutorials/300-deploying-your-project.mdx",tags:[],version:"current",sidebarPosition:300,frontMatter:{title:"Deploying your project",description:"Deploy a new version of your Telestion Project"},sidebar:"application",previous:{title:"Using traits in Verticles",permalink:"/application/tutorials/using-traits-in-verticles"},next:{title:"Guides",permalink:"/application/guides"}},p={},c=[{value:"What you&#39;ll build",id:"what-youll-build",level:2},{value:"Using GitHub",id:"using-github",level:2},{value:"Step 1: Review the release pull request",id:"step-1-review-the-release-pull-request",level:3},{value:"Step 2: Access the setup archive",id:"step-2-access-the-setup-archive",level:3},{value:"Manually",id:"manually",level:2},{value:"Step 1: Bump project version",id:"step-1-bump-project-version",level:3},{value:"Step 2: Build the Application",id:"step-2-build-the-application",level:3},{value:"Step 3: Build and push the Docker images",id:"step-3-build-and-push-the-docker-images",level:3},{value:"Step 4: Create the setup archive",id:"step-4-create-the-setup-archive",level:3},{value:"Deploy on your production system",id:"deploy-on-your-production-system",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Deploying your Application is an important part in the Project lifecycle. Learn\nhow you deploy your Application on GitHub and manually."),(0,i.kt)("admonition",{title:"Prerequisites",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To complete this tutorial, you should be familiar with starting a new project\nand the concept of ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"),".")),(0,i.kt)("h2",{id:"what-youll-build"},"What you'll build"),(0,i.kt)("p",null,"You'll create a new release in your project and deploy the Application part via\n",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"),"."),(0,i.kt)("p",null,"You can deploy your Application with different methods based on your current\nProject setup:"),(0,i.kt)(a.rj,{cols:2,mdxType:"Grid"},(0,i.kt)(a.s3,{to:"#using-github",mdxType:"Reference"},"Deploy using GitHub"),(0,i.kt)(a.s3,{to:"#manually",mdxType:"Reference"},"Deploy manually")),(0,i.kt)("h2",{id:"using-github"},"Using GitHub"),(0,i.kt)("h3",{id:"step-1-review-the-release-pull-request"},"Step 1: Review the release pull request"),(0,i.kt)("p",null,"Once you're happy with your changes in your Telestion Project, it's time to\nrelease a new version."),(0,i.kt)("p",null,"Head over to your GitHub repository that contains the Telestion Project and take\na look in the pull request section."),(0,i.kt)(a.Ee,{src:"/img/deploy/github-pull-request-section.png",alt:"GitHub pull request section",mdxType:"Image"}),(0,i.kt)("p",null,"As you can see, the ",(0,i.kt)("inlineCode",{parentName:"p"},"release.yml")," GitHub workflow automatically created a pull\nrequest that is ready for your review."),(0,i.kt)(a.Ee,{src:"/img/deploy/github-release-pull-request.png",alt:"GitHub's pull request section containing the release pull request",mdxType:"Image"}),(0,i.kt)("p",null,"Open the pull request and review the changes."),(0,i.kt)(a.Ee,{src:"/img/deploy/github-pull-request-overview.png",alt:"The overview page of the release pull request",mdxType:"Image"}),(0,i.kt)("admonition",{title:"Conventional Commits",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The GitHub action can only detect your changes if you're using\n",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits")," in your\nrepository."),(0,i.kt)("p",{parentName:"admonition"},"It then bumps the project version based on\n",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning"),".")),(0,i.kt)("p",null,"If you satisfied with the changelog and the new project version, merge the pull\nrequest."),(0,i.kt)(a.Ee,{src:"/img/deploy/github-merge-pull-request.png",alt:"The merge pull request button in the GitHub's pull request overview",mdxType:"Image"}),(0,i.kt)("admonition",{title:"Set release version explicitly",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can overwrite the ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning")," behavior by\npushing a empty commit containing the version number:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'git commit --allow-empty -m "chore: release 2.0.0" -m "Release-As: 2.0.0"\ngit push\n')),(0,i.kt)("p",{parentName:"admonition"},"This triggers the ",(0,i.kt)("inlineCode",{parentName:"p"},"release.yml")," workflow and changes the release version to your\npreference.")),(0,i.kt)("p",null,"The merge commit triggers the ",(0,i.kt)("inlineCode",{parentName:"p"},"release.yml")," workflow again which in turn builds\nand pushes the application to the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"},"GitHub Container Registry"),"."),(0,i.kt)("h3",{id:"step-2-access-the-setup-archive"},"Step 2: Access the setup archive"),(0,i.kt)("p",null,"To run the Telestion Project on your production system, you need a setup\narchive."),(0,i.kt)("p",null,"Head to the latest release via the link on the project metadata."),(0,i.kt)(a.Ee,{src:"/img/deploy/github-project-metadata.png",alt:"Metadata sidebar of the GitHub repository",mdxType:"Image"}),(0,i.kt)("p",null,"And download the archive named ",(0,i.kt)("inlineCode",{parentName:"p"},"<your-project-name>-<tag>.zip"),"."),(0,i.kt)(a.Ee,{src:"/img/deploy/github-latest-release-downloads.png",alt:"GitHub's release page with the uploaded artifacts",mdxType:"Image"}),(0,i.kt)("p",null,"Go to the deployment section of this tutorial."),(0,i.kt)(a.s3,{to:"#deploy-on-your-production-system",mdxType:"Reference"},"Deploy on your production system"),(0,i.kt)("h2",{id:"manually"},"Manually"),(0,i.kt)("h3",{id:"step-1-bump-project-version"},"Step 1: Bump project version"),(0,i.kt)("p",null,"Update the project version in the ",(0,i.kt)("inlineCode",{parentName:"p"},"version.txt")," file which resides in the\nproject root."),(0,i.kt)("p",null,"Next, open the console and commit the version bump:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'git add version.txt\ngit commit -m "chore(main): release $(<version.txt)"\ngit tag -a "v$(<version.txt)" -m "release $(<version.txt)"\ngit push --follow-tags\n')),(0,i.kt)("admonition",{title:"Semantic Versioning",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"The deployment scripts and tools require that you use the\n",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning")," release style in your project.")),(0,i.kt)("admonition",{title:"Conventional Commits",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Before bumping, you may look at your commit history with:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'git log --oneline "v$(<version.txt)..HEAD"\n')),(0,i.kt)("p",{parentName:"admonition"},"And decide based on\n",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits")," to which\nversion you might bump.")),(0,i.kt)("h3",{id:"step-2-build-the-application"},"Step 2: Build the Application"),(0,i.kt)("p",null,"Before pushing the release image to docker, you need to build the Application\npart."),(0,i.kt)("p",null,"Open your IDE and select the ",(0,i.kt)("inlineCode",{parentName:"p"},"assembleDist")," task in the ",(0,i.kt)("inlineCode",{parentName:"p"},"distribution")," section\nof Gradle."),(0,i.kt)("p",null,"Or run the Gradle task in your console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'cd application\nJAVA_HOME="<path-to-jdk16>" ./gradlew assembleDist\ncd ..\n')),(0,i.kt)("h3",{id:"step-3-build-and-push-the-docker-images"},"Step 3: Build and push the Docker images"),(0,i.kt)("p",null,"Now build and push the Docker images:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./scripts/push-docker-images.sh\n")),(0,i.kt)("p",null,"The script asks if things are unclear or if it can't recognize anything\nautomatically."),(0,i.kt)("admonition",{title:"Docker Login",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The deployment script uses the Docker CLI to push the images to specified Docker\nregistry. You probably need to login before you can push the images."),(0,i.kt)("p",{parentName:"admonition"},"Take a look at the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/login/"},"Docker login reference"),"\non how you can login in the console.")),(0,i.kt)("admonition",{title:"Specify another registry",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"By default, the script pushes the images to the\n",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),", the official Docker registry."),(0,i.kt)("p",{parentName:"admonition"},"If you would like to push to a different registry instead, use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"--docker-registry <registry-uri>")," flag to specify the Docker registry\nexplicitly."),(0,i.kt)("p",{parentName:"admonition"},"See the script help for more information:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./scripts/push-docker-images.sh --help\n"))),(0,i.kt)("h3",{id:"step-4-create-the-setup-archive"},"Step 4: Create the setup archive"),(0,i.kt)("p",null,"Now, the Docker images are available on your preferred registry. You now need to\ncreate the setup archive you can then deploy on your production system."),(0,i.kt)("p",null,"Open the console and run the create setup script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./scripts/create-setup.sh\n")),(0,i.kt)("p",null,"The script asks if things are unclear or if it can't recognize them\nautomatically."),(0,i.kt)("p",null,"It creates a setup archive and place it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," folder which resides in\nthe project root."),(0,i.kt)("h2",{id:"deploy-on-your-production-system"},"Deploy on your production system"),(0,i.kt)("p",null,"Before running Telestion on your production system, you need a working Docker\nand docker-compose installation."),(0,i.kt)(a.s3,{to:"https://docs.docker.com/get-docker/",mdxType:"Reference"},"Install Docker"),(0,i.kt)(a.s3,{to:"https://docs.docker.com/compose/install/",mdxType:"Reference"},"Install docker-compose"),(0,i.kt)("p",null,"You should received a copy of the setup archive of the Telestion Project you\nwant to deploy."),(0,i.kt)("p",null,"Copy it to your production system and extract it via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"unzip my-telestion-project-v1.3.0.zip\n")),(0,i.kt)("p",null,"Head into the folder which contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and start\nTelestion:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up -d\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Editing the ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"docker-compose.yml")),(0,i.kt)("p",{parentName:"admonition"},"The packaged ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," is a copy of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"application/docker-compose.prod.yml")," configuration file."),(0,i.kt)("p",{parentName:"admonition"},"In this file you can define which Docker images run on your production system,\nwhich ports it exposes, etc.")),(0,i.kt)("p",null,"This downloads and starts the required components to run Telestion."),(0,i.kt)("p",null,"If you want to stop Telestion, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose down\n")),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"Congratulations: You've just deployed your first Telestion Project."),(0,i.kt)("p",null,"You can configure the deployed Telestion Project with the configuration files in\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"conf")," folder beside the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and restart it if you like."),(0,i.kt)("p",null,"You might also want to use a graphical interface to interact with the running\napplication."),(0,i.kt)("p",null,"Take a look at the tutorials for the Web Client:"),(0,i.kt)(a.s3,{to:"/client/tutorials/",mdxType:"Reference"},"Client Tutorials"))}d.isMDXComponent=!0}}]);