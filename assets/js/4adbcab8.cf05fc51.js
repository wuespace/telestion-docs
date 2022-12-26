"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[5339],{4966:(e,t,n)=>{n.d(t,{kN:()=>o,rj:()=>i,Ee:()=>p,s3:()=>r});var a=n(7294);function i(e){let{cols:t=2,children:n}=e;return a.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,columnGap:"1em"}},n)}var s=n(9960);function r(e){let{children:t,to:n}=e;return a.createElement(s.Z,{to:n,className:"block-link"},a.createElement("span",null,t," \xbb"),a.createElement("span",null,n))}const l=()=>a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},a.createElement("defs",null,a.createElement("style",null,".a{clip-path:url(#b);}"),a.createElement("clipPath",{id:"b"},a.createElement("rect",{width:24,height:24}))),a.createElement("g",{id:"a",className:"a"},a.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})));function o(e){let{children:t,file:n}=e;return a.createElement("a",{className:"block-link",download:!0,href:n},a.createElement("span",null,a.createElement(l,null)," ",t))}var c=n(7462),u=n(4996),m=n(6010);function p(e){let{src:t,invertible:n=!1,center:i=!1,alt:r="",...l}=e;const o=t.startsWith("/static")?t.substr(7):t,p=(0,u.Z)(o);return a.createElement(a.Fragment,null,a.createElement(s.Z,{to:o,style:{display:"none"}},"Link to ",r),a.createElement("img",(0,c.Z)({src:p,className:(0,m.Z)(n&&"invertible",i&&"center"),alt:r},l)))}},8980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>E,default:()=>x,frontMatter:()=>v,metadata:()=>y,toc:()=>w});var a=n(7462),i=n(7294),s=n(3905),r=n(4966),l=n(814);function o(){const[e,t]=(0,i.useState)(""),[n,a]=(0,i.useState)(!1),[s,r]=(0,i.useState)(1),[o,m]=(0,i.useState)("feat"),[d,h]=(0,i.useState)(""),[g,k]=(0,i.useState)("Add XY"),f=(0,i.useMemo)((()=>function(e,t,n,a,i,s){let r=e.length?`${e}/`:"";r+=t?`issue-${n}`:`${a}/${i.length?`${c(i)}/`:""}${c(s)}`;return r}(e,n,s,o,d,g)),[e,n,s,o,d,g]);return i.createElement("div",null,i.createElement(u,{owner:e,setOwner:t}),i.createElement(p,{issueBased:n,setIssueBased:a,issueNumber:s,setIssueNumber:r}),i.createElement(b,{disabled:n,commitType:o,setCommitType:m,scope:d,setScope:h,description:g,setDescription:k}),i.createElement("br",null),i.createElement("p",null,i.createElement("strong",null,"Your branch name:")),i.createElement(l.Z,{className:"language-text"},f))}function c(e){return e.toLowerCase().split(/[^a-z\-\/]/g).join("-")}function u(e){return i.createElement("fieldset",null,i.createElement("legend",null,"Ownership"),i.createElement(m,{owner:e.owner,setOwner:e.setOwner}))}function m(e){return i.createElement("label",null,"Your GitHub Username (only set if you'll be the only one working on the branch):",i.createElement("br",null),i.createElement("input",{value:e.owner,onChange:t=>e.setOwner(t.target.value),placeholder:"No ownership specified"}))}function p(e){return i.createElement("fieldset",null,i.createElement("legend",null,"Issue-based"),i.createElement(d,{issueBased:e.issueBased,setIssueBased:e.setIssueBased}),i.createElement("br",null),i.createElement(h,{issueBased:e.issueBased,issueNumber:e.issueNumber,setIssueNumber:e.setIssueNumber}))}function d(e){return i.createElement("label",null,i.createElement("input",{type:"checkbox",value:e.issueBased,onChange:t=>e.setIssueBased(t.target.checked)}),"An issue discussing the change exists")}function h(e){return i.createElement("label",null,"Issue number:",i.createElement("br",null),i.createElement("input",{type:"number",min:"1",step:"1",disabled:!e.issueBased,value:e.issueNumber,onChange:t=>e.setIssueNumber(t.target.value)}))}function b(e){return i.createElement("fieldset",null,i.createElement("legend",null,"Conventional Commit Based"),e.issueBased&&i.createElement("p",null,i.createElement("i",null,"Only available if name is not issue-based.")),i.createElement(f,{issueBased:e.issueBased,commitType:e.commitType,setCommitType:e.setCommitType}),i.createElement("br",null),i.createElement(k,{issueBased:e.issueBased,scope:e.scope,setScope:e.setScope}),i.createElement("br",null),i.createElement(g,{issueBased:e.issueBased,description:e.description,setDescription:e.setDescription}))}function g(e){return i.createElement("label",null,"Description:",i.createElement("br",null),i.createElement("input",{value:e.description,required:!0,onChange:t=>e.setDescription(t.target.value),disabled:e.issueBased}))}function k(e){return i.createElement("label",null,"Scope (optional):",i.createElement("br",null),i.createElement("input",{value:e.scope,onChange:t=>e.setScope(t.target.value),placeholder:"e.g., ci",disabled:e.issueBased}))}function f(e){return i.createElement("label",null,"Commit Type:",i.createElement("br",null),i.createElement("select",{value:e.commitType,onChange:t=>e.setCommitType(t.target.value),disabled:e.issueBased,required:!0},i.createElement("option",{value:"feat"},"feat (Newly implemented features)"),i.createElement("option",{value:"fix"},"fix (Bug fixes)"),i.createElement("option",{value:"docs"},"docs (Documentation-only changes)"),i.createElement("option",{value:"chore"},"chore (build system, CI configuration, repo structure, etc.)"),i.createElement("option",{value:"test"},"test (Added, removed or changed unit, integration or E2E tests)"),i.createElement("option",{value:"refactor"},"refactor (internal refactorings without changes to external APIs)"),i.createElement("option",{value:"style"},"style (fixed linting issues, etc.)"),i.createElement("option",{value:"perf"},"perf (performance optimizations)")))}const v={title:"Branch Naming Guidelines",description:"Consistent branch naming conventions make it easy to navigate through branches"},E=void 0,y={unversionedId:"internal/references/branch-names",id:"internal/references/branch-names",title:"Branch Naming Guidelines",description:"Consistent branch naming conventions make it easy to navigate through branches",source:"@site/docs/internal/references/branch-names.mdx",sourceDirName:"internal/references",slug:"/internal/references/branch-names",permalink:"/internal/references/branch-names",draft:!1,editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/internal/references/branch-names.mdx",tags:[],version:"current",frontMatter:{title:"Branch Naming Guidelines",description:"Consistent branch naming conventions make it easy to navigate through branches"},sidebar:"internal",previous:{title:"Actionable Error Message Structure",permalink:"/internal/references/actionable-error-message-structure"},next:{title:"Conventional Commit Types",permalink:"/internal/references/conventional-commit-types"}},N={},w=[{value:"Reading this document",id:"reading-this-document",level:2},{value:"General Structure",id:"general-structure",level:2},{value:"Branch owner prefix (optional)",id:"branch-owner-prefix-optional",level:2},{value:"Branch content",id:"branch-content",level:2},{value:"Issue-based",id:"issue-based",level:3},{value:"Conventional Commit based",id:"conventional-commit-based",level:3},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}],C={toc:w};function x(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Following the project's branch naming convention helps to keep things consistent\nand also encourages following the conventional commit method."),(0,s.kt)("admonition",{title:"Branch name calculator",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},'If you don\'t want to read through this page, you can use the interactive "branch\nname calculator" below \ud83d\ude09:'),(0,s.kt)(o,{mdxType:"BranchNameCalculator"})),(0,s.kt)("h2",{id:"reading-this-document"},"Reading this document"),(0,s.kt)("admonition",{title:"Reading the EBNF grammar in this document",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"This document uses the EBNF language to describe a technical grammar for branch\nnames."),(0,s.kt)("p",{parentName:"admonition"},"This is quite easy to read:"),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"[]")," = optional"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"{}")," = repeat 0..n times"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"<>")," = element defined somewhere else"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"/"')," = literal content ",(0,s.kt)("inlineCode",{parentName:"li"},"/")," in the name"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"<a> | <b>")," = either ",(0,s.kt)("inlineCode",{parentName:"li"},"<a>")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"<b>")))),(0,s.kt)("h2",{id:"general-structure"},"General Structure"),(0,s.kt)("p",null,"Your branch names should have the following structure:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ebnf"},"<branch name> ::= [<branch ownership prefix>] <branch content> ;\n")),(0,s.kt)("h2",{id:"branch-owner-prefix-optional"},"Branch owner prefix (optional)"),(0,s.kt)("p",null,'If you intend to work on the branch all by yourself, it\'s valuable to "claim\nownership" within the branch name itself.'),(0,s.kt)("p",null,"This both shows other contributors that they shouldn't work on this branch\nwithout your permission and shows maintainers whom to contact about the contents\nwithin the branch."),(0,s.kt)("p",null,"A branch ownership prefix consists of your GitHub username, followed by a ",(0,s.kt)("inlineCode",{parentName:"p"},"/"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ebnf"},'<branch ownership prefix> ::= <GitHub username> "/" ;\n')),(0,s.kt)("h2",{id:"branch-content"},"Branch content"),(0,s.kt)("p",null,"It's essential to, as short as possible, describe the content of the branch (the\nchanges it attempts to make)."),(0,s.kt)("p",null,"Within the Telestion Ecosystem, you should use one of two ways:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"an issue-based approach (cf. ",(0,s.kt)("a",{parentName:"li",href:"#issue-based"},"Issue-based"),")"),(0,s.kt)("li",{parentName:"ul"},"a conventional commit-based approach (cf.\n",(0,s.kt)("a",{parentName:"li",href:"#conventional-commit-based"},"Conventional Commit based"),")")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ebnf"},"<branch content> ::= <issue-based> | <conventional-commit-based> ;\n")),(0,s.kt)("h3",{id:"issue-based"},"Issue-based"),(0,s.kt)("p",null,"If an issue already discusses the details of what your branch changes, you\nshould link to that issue within your branch name."),(0,s.kt)("p",null,"When you're working on an issue, please also make sure to assign yourself to the\nissue. That way, other contributors can see that you're already working on this\nissue."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ebnf"},'<issue-based> ::= "issue-" <issue number> ;\n\n<issue number> ::= <positive, whole number> ;\n')),(0,s.kt)("h3",{id:"conventional-commit-based"},"Conventional Commit based"),(0,s.kt)("p",null,'You can also describe the content directly in a "conventional commit like"\nstructure.'),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},'Describing branch names in a way that\'s like conventional commits is helpful as\nit already forces you to take on the "one change per branch" conventional commit\nmindset.')),(0,s.kt)("p",null,"Instead of colons and scopes, use slashes (",(0,s.kt)("inlineCode",{parentName:"p"},"/"),"). Don't care about breaking\nchanges within the branch name, yet."),(0,s.kt)("p",null,"Structure a conventional commit based branch description like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ebnf"},'<conventional-commit-based> ::= <conv-type> "/" [<conv-scope>] <description> ;\n\n<conv-type> ::= "feat" | "fix" | "docs" | "chore" | "test" | "refactor" | "style" | "perf" ;\n<conv-scope> ::= <scope-name> "/" ;\n<description> ::= <valid-char> {<valid-char>} ;\n\n<scope-name> ::= <valid-char> {<valid-char>} ;\n\n<valid-char> ::= "a" | "b" | ... | "z" | "-" | "/" ;\n')),(0,s.kt)("p",null,"where"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"<description>")," describes the actual change (for example, ",(0,s.kt)("inlineCode",{parentName:"li"},"add-send-function"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"<scope-name>")," is a conventional commit scope present within the repository\n(cf. repository docs/guidelines for available scope names)")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Since EBNF can be a little bit abstract, here are three examples:"),(0,s.kt)("p",null,"For the following examples, assume that your username is ",(0,s.kt)("inlineCode",{parentName:"p"},"@githubuser"),"."),(0,s.kt)("admonition",{title:"Example: Fixing a long-discussed issue",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You have discussed a change in issue ",(0,s.kt)("inlineCode",{parentName:"p"},"#83")," for quite a while. You're\ncontributing a fix on your branch."),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"githubuser/issue-83\n"))),(0,s.kt)("admonition",{title:"Example: Working on an enormous change together",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"The CLI needs an extensive restructuring. This is too big to discuss in a single\nissue and instead covers more than one issue."),(0,s.kt)("p",{parentName:"admonition"},"Two or more contributors are working on this branch."),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"feat/cli/restructure-the-cli\n"))),(0,s.kt)("admonition",{title:"Example: A minor fix",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You've spotted a bug in the CLI. Writing an extensive issue would cost you more\ntime than just changing the line yourself."),(0,s.kt)("p",{parentName:"admonition"},"You omit opening an issue and instead commit the change without any issue."),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"githubuser/fix/cli/fix-args-parsing\n"))),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)(r.s3,{to:"/internal/references/conventional-commit-types",mdxType:"Reference"},"Conventional Commit Types"))}x.isMDXComponent=!0}}]);