(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{189:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(21),o=n(190);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},190:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||a;return n?o.a.createElement(d,i(i({ref:t},s),{},{components:n})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),a=n(189);n(55);function c(){const[e,t]=Object(r.useState)(!1);return o.a.createElement("div",{className:"furion-join-group"},e&&o.a.createElement("img",{src:Object(a.a)("img/dotnetchina2.jpg")}),o.a.createElement("button",{onClick:()=>t(!e)},"\u52a0\u5165QQ\u4ea4\u6d41\u7fa4"))}},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(191)),c=n(192),i={id:"benchmark",title:"29.3 \u57fa\u51c6\u6d4b\u8bd5",sidebar_label:"29.3 \u57fa\u51c6\u6d4b\u8bd5"},u={unversionedId:"benchmark",id:"benchmark",isDocsHomePage:!1,title:"29.3 \u57fa\u51c6\u6d4b\u8bd5",description:"\u6587\u6863\u7d27\u6025\u7f16\u5199\u4e2d\uff0c\u53ef\u4ee5\u5148\u770b\u65e7\u6587\u6863\uff1ahttps://monksoul.gitbook.io/hoa/",source:"@site/docs\\benchmark.mdx",slug:"/benchmark",permalink:"/docs/benchmark",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/benchmark.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1610596948,sidebar_label:"29.3 \u57fa\u51c6\u6d4b\u8bd5",sidebar:"docs",previous:{title:"29.2 \u6027\u80fd\u6d4b\u8bd5",permalink:"/docs/performance"},next:{title:"30. \u8d21\u732e\u6307\u5357",permalink:"/docs/contribute"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c.a,{mdxType:"JoinGroup"}),Object(a.b)("p",null,"\u6587\u6863\u7d27\u6025\u7f16\u5199\u4e2d\uff0c\u53ef\u4ee5\u5148\u770b\u65e7\u6587\u6863\uff1a",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://monksoul.gitbook.io/hoa/"}),"https://monksoul.gitbook.io/hoa/")))}p.isMDXComponent=!0}}]);