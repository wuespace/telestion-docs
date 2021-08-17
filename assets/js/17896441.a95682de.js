"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[918],{5569:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a=n(7294),r=n(6010),l=n(907),i=n(3783),o=n(6742),s=n(9052);var c=function(e){var t=e.metadata;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.createElement(o.Z,{className:"pagination-nav__link",to:t.previous.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.createElement(o.Z,{className:"pagination-nav__link",to:t.next.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=n(2263),m=n(3018);var u={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return a.createElement(t,e)}function p(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(o.Z,{to:n,onClick:r},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,n=e.versionMetadata,r=(0,d.Z)().siteConfig.title,i=(0,l.gA)({failfast:!0}).pluginId,o=(0,m.J)(i).savePreferredVersionName,s=(0,l.Jo)(i),c=s.latestDocSuggestion,u=s.latestVersionSuggestion,h=null!=c?c:(t=u).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(p,{versionLabel:u.label,to:h.path,onClick:function(){return o(u.name)}})))}var E=function(e){var t=e.versionMetadata;return"none"===t.banner?a.createElement(a.Fragment,null):a.createElement(h,{versionMetadata:t})},f=n(1217);function g(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function b(e){var t=e.lastUpdatedBy;return a.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement(a.Fragment,null,a.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(b,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var N=n(571),Z="tocCollapsible_1PrD",L="tocCollapsibleButton_2O1e",k="tocCollapsibleContent_2Ydz",y="tocCollapsibleExpanded_3GYr";function U(e){var t,n=e.toc,l=e.className,i=(0,m.uR)({initialState:!0}),o=i.collapsed,c=i.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(Z,(t={},t[y]=!o,t),l)},a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",L),onClick:c},a.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(m.zF,{lazy:!0,className:k,collapsed:o},a.createElement(N.r,{toc:n})))}var T=n(7462),w=n(3366),C="iconEdit_2_ui",A=["className"],B=function(e){var t=e.className,n=(0,w.Z)(e,A);return a.createElement("svg",(0,T.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(C,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function M(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},a.createElement(B,null),a.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var x=n(6159),D="docItemContainer_33ec",I="lastUpdated_3DPF",O="docItemCol_3FnS",S="tocMobile_3Hoh";var z=function(e){var t,n=e.content,o=e.versionMetadata,s=n.metadata,d=n.frontMatter,m=d.image,u=d.keywords,v=d.hide_title,p=d.hide_table_of_contents,h=s.description,g=s.title,b=s.editUrl,Z=s.lastUpdatedAt,L=s.formattedLastUpdatedAt,k=s.lastUpdatedBy,y=(0,l.gA)({failfast:!0}).pluginId,T=(0,l.gB)(y).length>1,w=!v&&void 0===n.contentTitle,C=(0,i.Z)(),A=!p&&n.toc&&n.toc.length>0,B=A&&("desktop"===C||"ssr"===C);return a.createElement(a.Fragment,null,a.createElement(f.Z,{title:g,description:h,keywords:u,image:m}),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",(t={},t[O]=!p,t))},a.createElement(E,{versionMetadata:o}),a.createElement("div",{className:D},a.createElement("article",null,T&&a.createElement("span",{className:"badge badge--secondary"},"Version: ",o.label),A&&a.createElement(U,{toc:n.toc,className:S}),a.createElement("div",{className:"markdown"},w&&a.createElement(x.N,null,g),a.createElement(n,null)),(b||Z||k)&&a.createElement("footer",{className:"row docusaurus-mt-lg"},a.createElement("div",{className:"col"},b&&a.createElement(M,{editUrl:b})),a.createElement("div",{className:(0,r.Z)("col",I)},(Z||k)&&a.createElement(_,{lastUpdatedAt:Z,formattedLastUpdatedAt:L,lastUpdatedBy:k})))),a.createElement(c,{metadata:s}))),B&&a.createElement("div",{className:"col col--3"},a.createElement(N.Z,{toc:n.toc}))))}},6159:function(e,t,n){n.d(t,{N:function(){return u},Z:function(){return v}});var a=n(3366),r=n(7462),l=n(7294),i=n(6010),o=n(9052),s=n(3018),c="enhancedAnchor_2LWZ",d="h1Heading_27L5",m=["id"],u=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0,className:d}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var n,r=e.id,d=(0,a.Z)(e,m),u=(0,s.LU)().navbar.hideOnScroll;return r?l.createElement(t,d,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(n={},n[c]=!u,n)),id:r}),d.children,l.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,d)});var t}},1217:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(9105),l=n(3018),i=n(4996);function o(e){var t=e.title,n=e.description,o=e.keywords,s=e.image,c=(0,l.LU)().image,d=(0,l.pe)(t),m=(0,i.Z)(s||c,{absolute:!0});return a.createElement(r.Z,null,t&&a.createElement("title",null,d),t&&a.createElement("meta",{property:"og:title",content:d}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),o&&a.createElement("meta",{name:"keywords",content:Array.isArray(o)?o.join(","):o}),m&&a.createElement("meta",{property:"og:image",content:m}),m&&a.createElement("meta",{name:"twitter:image",content:m}))}},571:function(e,t,n){n.d(t,{r:function(){return s},Z:function(){return c}});var a=n(7294),r=n(6010);var l=function(e,t,n){var r=(0,a.useState)(void 0),l=r[0],i=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,o=!1,s=document.getElementsByClassName(e);r<s.length&&!o;){var c=s[r],d=c.href,m=decodeURIComponent(d.substring(d.indexOf("#")+1));a.id===m&&(l&&l.classList.remove(t),c.classList.add(t),i(c),o=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},i="tableOfContents_35-E",o="table-of-contents__link";function s(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(s,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return l(o,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},a.createElement(s,{toc:t}))}},3783:function(e,t,n){var a=n(7294),r=n(412),l="desktop",i="mobile",o="ssr";function s(){return r.Z.canUseDOM?window.innerWidth>996?l:i:o}t.Z=function(){var e=(0,a.useState)((function(){return s()})),t=e[0],n=e[1];return(0,a.useEffect)((function(){if(r.Z.canUseDOM){return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}function e(){n(s())}}),[]),t}}}]);