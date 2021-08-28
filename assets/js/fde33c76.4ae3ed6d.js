"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[382],{3051:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return r},metadata:function(){return d},toc:function(){return u},default:function(){return k}});var i=n(7462),l=n(3366),a=(n(7294),n(3905)),o=n(8168),s=["components"],c={title:"Conventional Commit Types",description:"Quickly find out which conventional commit type you need to use."},r=void 0,d={unversionedId:"internal/references/conventional-commit-types",id:"internal/references/conventional-commit-types",isDocsHomePage:!1,title:"Conventional Commit Types",description:"Quickly find out which conventional commit type you need to use.",source:"@site/docs/internal/references/conventional-commit-types.mdx",sourceDirName:"internal/references",slug:"/internal/references/conventional-commit-types",permalink:"/telestion-docs/internal/references/conventional-commit-types",editUrl:"https://github.com/wuespace/telestion-docs/edit/main/docs/internal/references/conventional-commit-types.mdx",tags:[],version:"current",frontMatter:{title:"Conventional Commit Types",description:"Quickly find out which conventional commit type you need to use."},sidebar:"tutorialSidebar",previous:{title:"Branch Naming Guidelines",permalink:"/telestion-docs/internal/references/branch-names"},next:{title:"Key Git Principles",permalink:"/telestion-docs/internal/references/key-git-principles"}},u=[{value:"Diagram",id:"diagram",children:[]},{value:"Table",id:"table",children:[]},{value:"See also",id:"see-also",children:[]}],m={toc:u};function k(t){var e=t.components,n=(0,l.Z)(t,s);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document gives you a quick way to determine the correct conventional commit\ntype for your change."),(0,a.kt)("h2",{id:"diagram"},"Diagram"),(0,a.kt)(o.Ee,{src:"/static/img/drawio-diagrams/conventional-commits/conventional-commits-decision-table.drawio.svg",invertable:!0,mdxType:"Image"}),(0,a.kt)("h2",{id:"table"},"Table"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Multiple Commit Types")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Use the most extensive type (the highest in the table below) if a commit\nincludes more than one commit type. Using the broadest type ensures correct\nversioning. For example, if a feature, as a side-effect, also fixes a bug, it's\nstill a feature. If it closes an issue, please still include\n",(0,a.kt)("inlineCode",{parentName:"p"},"Closes: #issue-number")," in the commit's footer to signify the fix"))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Breaking Changes")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If a commit has breaking changes, you need to declare it using an exclamation\nmark (",(0,a.kt)("inlineCode",{parentName:"p"},"!"),") before the colon (between the type and the colon (",(0,a.kt)("inlineCode",{parentName:"p"},":"),"), for example,\n",(0,a.kt)("inlineCode",{parentName:"p"},"fix!: Hello world"),", or, if it exists, the scope and the colon, for example,\n",(0,a.kt)("inlineCode",{parentName:"p"},"feat(scope)!: Hello World"),"). With breaking changes, you should include a\n",(0,a.kt)("inlineCode",{parentName:"p"},"BREAKING CHANGE: [description]")," footer describing the breaking change."))),(0,a.kt)("table",{id:"table_fhj_gnv_vnb"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("i",null,"Conventional Commit Type")),(0,a.kt)("td",null,"Changelog entry"),(0,a.kt)("td",null,"Minimum Version Bump"),(0,a.kt)("td",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"feat")),(0,a.kt)("td",null,(0,a.kt)("q",null,"Features")),(0,a.kt)("td",null,"minor (major if breaking)"),(0,a.kt)("td",null,"Newly implemented features")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"fix")),(0,a.kt)("td",null,(0,a.kt)("q",null,"Bug Fixes")),(0,a.kt)("td",null,"patch (major if breaking)"),(0,a.kt)("td",null,"Bug fixes")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"docs")),(0,a.kt)("td",null,(0,a.kt)("q",null,"Documentation Changes")),(0,a.kt)("td",null,"patch"),(0,a.kt)("td",null,"Documentation-only changes.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"chore")),(0,a.kt)("td",null,"n/a"),(0,a.kt)("td",null,"patch"),(0,a.kt)("td",null,"Meta changes that don't change the actual product, but rather the build system, CI configuration, repo structure, etc.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"style")),(0,a.kt)("td",null,"n/a"),(0,a.kt)("td",null,"patch"),(0,a.kt)("td",null,"Changes that only affect the code style (fixed linting issues, etc.)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"refactor")),(0,a.kt)("td",null,"n/a"),(0,a.kt)("td",null,"patch"),(0,a.kt)("td",null,"Refactorings only causing internal changes not affecting the actual behavior")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"perf")),(0,a.kt)("td",null,"n/a"),(0,a.kt)("td",null,"patch"),(0,a.kt)("td",null,"Performance-only changes, not affecting the actual behavior")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"test")),(0,a.kt)("td",null,"n/a"),(0,a.kt)("td",null,"patch"),(0,a.kt)("td",null,"Added, removed or changed unit, integration or E2E tests. May not include changes to the source code.")))),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)(o.s3,{to:"../concepts/conventional-commits",mdxType:"Reference"},"Conventional Commits Concept"))}k.isMDXComponent=!0}}]);