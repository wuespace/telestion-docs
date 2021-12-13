"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[339],{4966:function(e,t,n){n.d(t,{kN:function(){return o},rj:function(){return i},Ee:function(){return h},s3:function(){return r}});var a=n(7294);function i(e){var t=e.cols,n=void 0===t?2:t,i=e.children;return a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+n+", 1fr)",columnGap:"1em"}},i)}var s=n(9960);function r(e){var t=e.children,n=e.to;return a.createElement(s.Z,{to:n,className:"block-link"},a.createElement("span",null,t," \xbb"),a.createElement("span",null,n))}var l=function(){return a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},a.createElement("defs",null,a.createElement("style",null,".a{clip-path:url(#b);}"),a.createElement("clipPath",{id:"b"},a.createElement("rect",{width:24,height:24}))),a.createElement("g",{id:"a",className:"a"},a.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function o(e){var t=e.children,n=e.file;return a.createElement("a",{className:"block-link",download:!0,href:n},a.createElement("span",null,a.createElement(l,null)," ",t))}var c=n(7462),m=n(3366),u=n(4996),d=n(6010),p=["src","invertible","center","alt"];function h(e){var t=e.src,n=e.invertible,i=void 0!==n&&n,r=e.center,l=void 0!==r&&r,o=e.alt,h=void 0===o?"":o,v=(0,m.Z)(e,p),g=t.startsWith("/static")?t.substr(7):t,k=(0,u.Z)(g);return a.createElement(a.Fragment,null,a.createElement(s.Z,{to:g,style:{display:"none"}},"Link to ",h),a.createElement("img",(0,c.Z)({src:k,className:(0,d.Z)(i&&"invertible",l&&"center"),alt:h},v)))}},8980:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return E},default:function(){return B},frontMatter:function(){return w},metadata:function(){return y},toc:function(){return C}});var a=n(7462),i=n(3366),s=n(7294),r=n(3905),l=n(4966),o=n(9055);function c(){var e=(0,s.useState)(""),t=e[0],n=e[1],a=(0,s.useState)(!1),i=a[0],r=a[1],l=(0,s.useState)(1),c=l[0],d=l[1],h=(0,s.useState)("feat"),v=h[0],k=h[1],b=(0,s.useState)(""),N=b[0],f=b[1],w=(0,s.useState)("Add XY"),E=w[0],y=w[1],C=(0,s.useMemo)((function(){return function(e,t,n,a,i,s){var r=e.length?e+"/":"";r+=t?"issue-"+n:a+"/"+(i.length?m(i)+"/":"")+m(s);return r}(t,i,c,v,N,E)}),[t,i,c,v,N,E]);return s.createElement("div",null,s.createElement(u,{owner:t,setOwner:n}),s.createElement(p,{issueBased:i,setIssueBased:r,issueNumber:c,setIssueNumber:d}),s.createElement(g,{disabled:i,commitType:v,setCommitType:k,scope:N,setScope:f,description:E,setDescription:y}),s.createElement("br",null),s.createElement("p",null,s.createElement("strong",null,"Your branch name:")),s.createElement(o.Z,{className:"language-text"},C))}function m(e){return e.toLowerCase().split(/[^a-z\-\/]/g).join("-")}function u(e){return s.createElement("fieldset",null,s.createElement("legend",null,"Ownership"),s.createElement(d,{owner:e.owner,setOwner:e.setOwner}))}function d(e){return s.createElement("label",null,"Your GitHub Username (only set if you'll be the only one working on the branch):",s.createElement("br",null),s.createElement("input",{value:e.owner,onChange:function(t){return e.setOwner(t.target.value)},placeholder:"No ownership specified"}))}function p(e){return s.createElement("fieldset",null,s.createElement("legend",null,"Issue-based"),s.createElement(h,{issueBased:e.issueBased,setIssueBased:e.setIssueBased}),s.createElement("br",null),s.createElement(v,{issueBased:e.issueBased,issueNumber:e.issueNumber,setIssueNumber:e.setIssueNumber}))}function h(e){return s.createElement("label",null,s.createElement("input",{type:"checkbox",value:e.issueBased,onChange:function(t){return e.setIssueBased(t.target.checked)}}),"An issue discussing the change exists")}function v(e){return s.createElement("label",null,"Issue number:",s.createElement("br",null),s.createElement("input",{type:"number",min:"1",step:"1",disabled:!e.issueBased,value:e.issueNumber,onChange:function(t){return e.setIssueNumber(t.target.value)}}))}function g(e){return s.createElement("fieldset",null,s.createElement("legend",null,"Conventional Commit Based"),e.issueBased&&s.createElement("p",null,s.createElement("i",null,"Only available if name is not issue-based.")),s.createElement(N,{issueBased:e.issueBased,commitType:e.commitType,setCommitType:e.setCommitType}),s.createElement("br",null),s.createElement(b,{issueBased:e.issueBased,scope:e.scope,setScope:e.setScope}),s.createElement("br",null),s.createElement(k,{issueBased:e.issueBased,description:e.description,setDescription:e.setDescription}))}function k(e){return s.createElement("label",null,"Description:",s.createElement("br",null),s.createElement("input",{value:e.description,required:!0,onChange:function(t){return e.setDescription(t.target.value)},disabled:e.issueBased}))}function b(e){return s.createElement("label",null,"Scope (optional):",s.createElement("br",null),s.createElement("input",{value:e.scope,onChange:function(t){return e.setScope(t.target.value)},placeholder:"e.g., ci",disabled:e.issueBased}))}function N(e){return s.createElement("label",null,"Commit Type:",s.createElement("br",null),s.createElement("select",{value:e.commitType,onChange:function(t){return e.setCommitType(t.target.value)},disabled:e.issueBased,required:!0},s.createElement("option",{value:"feat"},"feat (Newly implemented features)"),s.createElement("option",{value:"fix"},"fix (Bug fixes)"),s.createElement("option",{value:"docs"},"docs (Documentation-only changes)"),s.createElement("option",{value:"chore"},"chore (build system, CI configuration, repo structure, etc.)"),s.createElement("option",{value:"test"},"test (Added, removed or changed unit, integration or E2E tests)"),s.createElement("option",{value:"refactor"},"refactor (internal refactorings without changes to external APIs)"),s.createElement("option",{value:"style"},"style (fixed linting issues, etc.)"),s.createElement("option",{value:"perf"},"perf (performance optimizations)")))}var f=["components"],w={title:"Branch Naming Guidelines",description:"Consistent branch naming conventions make it easy to navigate through branches"},E=void 0,y={unversionedId:"internal/references/branch-names",id:"internal/references/branch-names",title:"Branch Naming Guidelines",description:"Consistent branch naming conventions make it easy to navigate through branches",source:"@site/docs/internal/references/branch-names.mdx",sourceDirName:"internal/references",slug:"/internal/references/branch-names",permalink:"/telestion-docs/internal/references/branch-names",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/internal/references/branch-names.mdx",tags:[],version:"current",frontMatter:{title:"Branch Naming Guidelines",description:"Consistent branch naming conventions make it easy to navigate through branches"},sidebar:"tutorialSidebar",previous:{title:"lerna",permalink:"/telestion-docs/internal/concepts/lerna"},next:{title:"Conventional Commit Types",permalink:"/telestion-docs/internal/references/conventional-commit-types"}},C=[{value:"Reading this document",id:"reading-this-document",children:[],level:2},{value:"General Structure",id:"general-structure",children:[],level:2},{value:"Branch owner prefix (optional)",id:"branch-owner-prefix-optional",children:[],level:2},{value:"Branch content",id:"branch-content",children:[{value:"Issue-based",id:"issue-based",children:[],level:3},{value:"Conventional Commit based",id:"conventional-commit-based",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],x={toc:C};function B(e){var t=e.components,n=(0,i.Z)(e,f);return(0,r.kt)("wrapper",(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Following our branch naming convention helps to keep things consistent and also\nencourages following the conventional commit method."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Branch name calculator")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'If you don\'t want to read through this page, you can simply use the interactive\n"branch name calculator" below \ud83d\ude09:'),(0,r.kt)(c,{mdxType:"BranchNameCalculator"}))),(0,r.kt)("h2",{id:"reading-this-document"},"Reading this document"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Reading the EBNF grammar in this document")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This document uses the EBNF language to describe a technical grammar for branch\nnames."),(0,r.kt)("p",{parentName:"div"},"This is quite easy to read:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[]")," = optional"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{}")," = repeat 0..n times"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<>")," = element defined somewhere else"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"/"')," = literal content ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," in the name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<a> | <b>")," = either ",(0,r.kt)("inlineCode",{parentName:"li"},"<a>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"<b>"))))),(0,r.kt)("h2",{id:"general-structure"},"General Structure"),(0,r.kt)("p",null,"Overall, your branch names should have the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ebnf"},"<branch name> ::= [<branch ownership prefix>] <branch content> ;\n")),(0,r.kt)("h2",{id:"branch-owner-prefix-optional"},"Branch owner prefix (optional)"),(0,r.kt)("p",null,'If you intend to work on the branch all by yourself, it\'s valuable to "claim\nownership" within the branch name itself.'),(0,r.kt)("p",null,"This both shows other contributors that they shouldn't work on this branch\nwithout your permission and shows maintainers whom to contact about the contents\nwithin the branch."),(0,r.kt)("p",null,"A branch ownership prefix consists of your GitHub username, followed by a ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ebnf"},'<branch ownership prefix> ::= <GitHub username> "/" ;\n')),(0,r.kt)("h2",{id:"branch-content"},"Branch content"),(0,r.kt)("p",null,"It's essential to, as short as possible, describe the content of the branch\n(i.e., the changes it attempts to make)."),(0,r.kt)("p",null,"Within the Telestion Ecosystem, we recommend using one of two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an issue-based approach (cf. ",(0,r.kt)("a",{parentName:"li",href:"#issue-based"},"Issue-based"),")"),(0,r.kt)("li",{parentName:"ul"},"a conventional commit-based approach (cf.\n",(0,r.kt)("a",{parentName:"li",href:"#conventional-commit-based"},"Conventional Commit based"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ebnf"},"<branch content> ::= <issue-based> | <conventional-commit-based> ;\n")),(0,r.kt)("h3",{id:"issue-based"},"Issue-based"),(0,r.kt)("p",null,"If an issue already discusses the details of what your branch changes, you\nshould link to that issue within your branch name."),(0,r.kt)("p",null,"When you're working on an issue, please also make sure to assign yourself to the\nissue. That way, other contributors can see that you're already working on this\nissue."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ebnf"},'<issue-based> ::= "issue-" <issue number> ;\n\n<issue number> ::= <positive, whole number> ;\n')),(0,r.kt)("h3",{id:"conventional-commit-based"},"Conventional Commit based"),(0,r.kt)("p",null,'Alternatively, you can also describe the content directly in a "conventional\ncommit like" structure.'),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'Describing branch names in a way that\'s similar to conventional commits is\nespecially helpful as it already forces you to take on the "one change per\nbranch" conventional commit mindset.'))),(0,r.kt)("p",null,"Instead of colons and scopes, we use slashes (",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"). Also, we don't care about\nbreaking changes within the branch name, yet."),(0,r.kt)("p",null,"Therefore, a conventional commit based branch description should be structured\nlike this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ebnf"},'<conventional-commit-based> ::= <conv-type> "/" [<conv-scope>] <description> ;\n\n<conv-type> ::= "feat" | "fix" | "docs" | "chore" | "test" | "refactor" | "style" | "perf" ;\n<conv-scope> ::= <scope-name> "/" ;\n<description> ::= <valid-char> {<valid-char>} ;\n\n<scope-name> ::= <valid-char> {<valid-char>} ;\n\n<valid-char> ::= "a" | "b" | ... | "z" | "-" | "/" ;\n')),(0,r.kt)("p",null,"where"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<description>")," describes the actual change (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"add-send-function"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<scope-name>")," is a conventional commit scope present within the repository\n(cf. repo docs/guidelines for available scope names)")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Since EBNF can be a little bit ... abstract, let's take a look at a few\nexamples."),(0,r.kt)("p",null,"For the following examples, we assume that your username is ",(0,r.kt)("inlineCode",{parentName:"p"},"@githubuser"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example: Fixing a long-discussed issue")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A change has been discussed in issue ",(0,r.kt)("inlineCode",{parentName:"p"},"#83")," for quite a while. You're\ncontributing a fix on your branch."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"githubuser/issue-83\n")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example: Working on an enormous change together")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"An extensive restructuring of the CLI is needed. This is too big to be discussed\nin a single issue and instead covers multiple issues."),(0,r.kt)("p",{parentName:"div"},"Multiple contributors are working on this branch."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"feat/cli/restructure-the-cli\n")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example: A minor fix")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You've spotted a bug in the CLI. Writing an extensive issue would cost you more\ntime than just quickly changing the line yourself."),(0,r.kt)("p",{parentName:"div"},"You, therefore, omit opening an issue and instead commit the change immediately."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"githubuser/fix/cli/fix-args-parsing\n")))),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)(l.s3,{to:"/internal/references/conventional-commit-types",mdxType:"Reference"},"Conventional Commit Types"))}B.isMDXComponent=!0}}]);