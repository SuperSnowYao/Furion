"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4013,613],{6165:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(102),l=a(7294),n=a(6010),c=a(9033),s=a(6742),o="sidebar_2ahu",i="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",f="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",g=a(4973);function E(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(o,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(i,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:f,activeClassName:d},e.title))}))))}var v=["sidebar","toc","children"];var p=function(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,r.Z)(e,v),i=t&&t.items.length>0;return l.createElement(c.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},i&&l.createElement("aside",{className:"col col--3"},l.createElement(E,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},5776:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(7294),l=a(6165),n=a(7211),c=a(3039),s="tag_21yA";function o(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:s},r.createElement(n.Z,e))}))),r.createElement("hr",null))}var i=function(e){var t=e.tags,a=(0,c.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return r.createElement(o,{key:e.letter,letterEntry:e})})))};var m=function(e){var t=e.tags,a=e.sidebar,n=(0,c.MA)();return r.createElement(l.Z,{title:n,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},r.createElement("h1",null,n),r.createElement(i,{tags:Object.values(t)}))}},7211:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),l=a(6010),n=a(6742),c="tag_1Okp",s="tagRegular_3MiF",o="tagWithCount_1HU1";var i=function(e){var t,a=e.permalink,i=e.name,m=e.count;return r.createElement(n.Z,{href:a,className:(0,l.Z)(c,(t={},t[s]=!m,t[o]=m,t))},i,m&&r.createElement("span",null,m))}},546:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(3117),l=a(102),n=a(7294),c=a(6010),s=a(6742),o=a(3039),i=a(4996),m="footerLogoLink_qW4Z",u=["to","href","label","prependBaseUrlToHref"];function f(e){var t=e.to,a=e.href,c=e.label,o=e.prependBaseUrlToHref,m=(0,l.Z)(e,u),f=(0,i.Z)(t),d=(0,i.Z)(a,{forcePrependBaseUrl:!0});return n.createElement(s.Z,(0,r.Z)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:o?d:a}:{to:f},m),c)}var d=function(e){var t=e.url,a=e.alt;return n.createElement("img",{className:"footer__logo",alt:a,src:t,style:{background:"#fff",padding:"5px 10px"}})};var g=function(){var e=(0,o.LU)().footer,t=e||{},a=t.copyright,r=t.links,l=void 0===r?[]:r,s=t.logo,u=void 0===s?{}:s,g=(0,i.Z)(u.src);return e?n.createElement("footer",{className:(0,c.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("div",{className:"container"},l&&l.length>0&&n.createElement("div",{className:"row footer__links"},l.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(f,e))}))):null)}))),(u||a)&&n.createElement("div",{className:"footer__bottom text--center"},u&&u.src&&n.createElement("div",{className:"margin-bottom--sm"},u.href?n.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:m},n.createElement(d,{alt:u.alt,url:g})):n.createElement(d,{alt:u.alt,url:g})),a?n.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);