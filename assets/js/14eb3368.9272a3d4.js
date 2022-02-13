"use strict";(self.webpackChunktelestion_docs=self.webpackChunktelestion_docs||[]).push([[9817],{8507:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(7294),i=n(9548),r=n(9960),l=n(6010),s="cardContainer_woeA",o="cardContainerLink_iOSj",c="cardTitle_pNjP",m="cardDescription_qC_k",d=n(3919);function u(e){var t=e.href,n=e.children,i=(0,l.Z)("card margin-bottom--lg padding--lg",s,t&&o);return t?a.createElement(r.Z,{href:t,className:i},n):a.createElement("div",{className:i},n)}function v(e){var t=e.href,n=e.icon,i=e.title,r=e.description;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,l.Z)("text--truncate",c),title:i},n," ",i),a.createElement("div",{className:(0,l.Z)("text--truncate",m),title:r},r))}function h(e){var t=e.item,n=(0,i.Wl)(t);return a.createElement(v,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.items.length+" items"})}function g(e){var t,n=e.item,r=(0,d.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(v,{href:n.href,icon:r,title:n.label,description:null==l?void 0:l.description})}function E(e){var t=e.item;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function f(e){var t=e.items;return a.createElement("div",{className:"row"},t.map((function(e,t){return a.createElement("article",{key:t,className:"col col--6"},a.createElement(E,{item:e}))})))}var b=n(5214),p=n(1217),Z=n(4474),N=n(7597),k=n(9649),_=n(4996),L="generatedIndexPage_vzzw",T="title_qBh7";function w(e){var t=e.categoryGeneratedIndex,n=(0,i.jA)();return a.createElement(a.Fragment,null,a.createElement(p.Z,{title:t.title,description:t.description,keywords:t.keywords,image:(0,_.Z)(t.image)}),a.createElement("div",{className:L},a.createElement(Z.Z,null),a.createElement(N.Z,null),a.createElement("header",null,a.createElement(k.Z,{as:"h1",className:T},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("main",{className:"margin-top--lg"},a.createElement(f,{items:n.items})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(b.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}},5214:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7462),i=n(7294),r=n(5999),l=n(9960);var s=function(e){var t=e.permalink,n=e.title,a=e.subLabel;return i.createElement(l.Z,{className:"pagination-nav__link",to:t},a&&i.createElement("div",{className:"pagination-nav__sublabel"},a),i.createElement("div",{className:"pagination-nav__label"},n))};var o=function(e){var t=e.previous,n=e.next;return i.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},i.createElement("div",{className:"pagination-nav__item"},t&&i.createElement(s,(0,a.Z)({},t,{subLabel:i.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),i.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&i.createElement(s,(0,a.Z)({},n,{subLabel:i.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},7597:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),i=n(9548),r=n(6010);function l(e){var t=e.className,n=(0,i.E6)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,i.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",n.label):null}},4474:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7294),i=n(2263),r=n(9960),l=n(5999),s=n(5551),o=n(9548),c=n(6010);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function d(e){var t=m[e.versionMetadata.banner];return a.createElement(t,e)}function u(e){var t=e.versionLabel,n=e.to,i=e.onClick;return a.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(r.Z,{to:n,onClick:i},a.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,n=e.className,r=e.versionMetadata,l=(0,i.Z)().siteConfig.title,m=(0,s.useActivePlugin)({failfast:!0}).pluginId,v=(0,o.J)(m).savePreferredVersionName,h=(0,s.useDocVersionSuggestions)(m),g=h.latestDocSuggestion,E=h.latestVersionSuggestion,f=null!=g?g:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,c.Z)(n,o.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(d,{siteTitle:l,versionMetadata:r})),a.createElement("div",{className:"margin-top--md"},a.createElement(u,{versionLabel:E.label,to:f.path,onClick:function(){return v(E.name)}})))}function h(e){var t=e.className,n=(0,o.E6)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}},9649:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),i=n(3366),r=n(7294),l=n(6010),s=n(5999),o=n(9548),c="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ",d=["as","id"],u=["as"];function v(e){var t,n=e.as,u=e.id,v=(0,i.Z)(e,d),h=(0,o.LU)().navbar.hideOnScroll;return u?r.createElement(n,(0,a.Z)({},v,{className:(0,l.Z)("anchor",(t={},t[m]=h,t[c]=!h,t)),id:u}),v.children,r.createElement("a",{className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(n,v)}function h(e){var t=e.as,n=(0,i.Z)(e,u);return"h1"===t?r.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):r.createElement(v,(0,a.Z)({as:t},n))}}}]);