(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{189:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(21),a=n(190);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},190:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||c;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),c=n(189);n(55);function i(){const[e,t]=Object(r.useState)(!1);return a.a.createElement("div",{className:"furion-join-group"},e&&a.a.createElement("img",{src:Object(c.a)("img/dotnetchina2.jpg")}),a.a.createElement("button",{onClick:()=>t(!e)},"\u52a0\u5165QQ\u4ea4\u6d41\u7fa4"))}},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(191)),i=n(192),o={id:"virtual-deploy",title:"27.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72",sidebar_label:"27.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72"},u={unversionedId:"virtual-deploy",id:"virtual-deploy",isDocsHomePage:!1,title:"27.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72",description:"27.4.1 \u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55",source:"@site/docs\\virtual-deploy.mdx",slug:"/virtual-deploy",permalink:"/docs/virtual-deploy",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/virtual-deploy.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1610596948,sidebar_label:"27.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72",sidebar:"docs",previous:{title:"27.3 \u5728 Nginx \u90e8\u7f72",permalink:"/docs/deploy-nginx"},next:{title:"28. \u6301\u7eed\u90e8\u7f72\u96c6\u6210",permalink:"/docs/devops"}},l=[{value:"27.4.1 \u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55",id:"2741-\u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55",children:[{value:"27.4.1.2 \u914d\u7f6e <code>Startup.cs</code>",id:"27412-\u914d\u7f6e-startupcs",children:[]},{value:"27.4.1.3 \u542f\u7528 <code>Swagger</code> \u865a\u62df\u76ee\u5f55\u652f\u6301",id:"27413-\u542f\u7528-swagger-\u865a\u62df\u76ee\u5f55\u652f\u6301",children:[]}]},{value:"27.4.2 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"2742-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(i.a,{mdxType:"JoinGroup"}),Object(c.b)("h2",{id:"2741-\u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55"},"27.4.1 \u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55"),Object(c.b)("p",null,"\u901a\u5e38\u6211\u4eec\u7684\u7ad9\u70b9\u90fd\u662f\u90e8\u7f72\u5728\u7f51\u7ad9\u7684\u6839\u76ee\u5f55\u4e0b\u7684\uff0c\u4f46\u662f\u6709\u4e9b\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u80fd\u5c06\u7f51\u7ad9\u6839\u76ee\u5f55\u4e0b\u7684\u76ee\u5f55\u4f5c\u4e3a\u4e8c\u7ea7\u7ad9\u70b9\u6216\u5b50\u7ad9\u70b9\uff0c\u8fd9\u4e2a\u65f6\u5019\uff0c\u5c31\u4f1a\u51fa\u73b0 ",Object(c.b)("inlineCode",{parentName:"p"},"404")," \u9519\u8bef\u4e86\u3002"),Object(c.b)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u7279\u6b8a\u914d\u7f6e\u4e86\u3002"),Object(c.b)("h3",{id:"27412-\u914d\u7f6e-startupcs"},"27.4.1.2 \u914d\u7f6e ",Object(c.b)("inlineCode",{parentName:"h3"},"Startup.cs")),Object(c.b)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u914d\u7f6e ",Object(c.b)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"Configure"),"\uff0c\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:"{3}","{3}":!0}),'public void Configure(IApplicationBuilder application, IWebHostEnvironment env)\n{\n    application.Map("/\u4e8c\u7ea7\u76ee\u5f55", app=>\n    {\n        // \u5176\u4ed6\u4e2d\u95f4\u4ef6\u4ee3\u7801\u5168\u90e8\u5728\u8fd9\u91cc\u9762\u5199\n    });\n}\n')),Object(c.b)("h3",{id:"27413-\u542f\u7528-swagger-\u865a\u62df\u76ee\u5f55\u652f\u6301"},"27.4.1.3 \u542f\u7528 ",Object(c.b)("inlineCode",{parentName:"h3"},"Swagger")," \u865a\u62df\u76ee\u5f55\u652f\u6301"),Object(c.b)("p",null,"\u7b2c\u4e8c\u6b65\uff0c\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"appsettings.json")," \u914d\u7f6e\u6587\u4ef6\uff08\u5176\u4ed6\u914d\u7f6e\u6587\u4ef6\u4e5f\u53ef\u4ee5\uff09\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:"{2-3}","{2-3}":!0}),'{\n  "SpecificationDocumentSettings": {\n    "VirtualPath": "/\u4e8c\u7ea7\u76ee\u5f55"\n  }\n}\n')),Object(c.b)("h2",{id:"2742-\u53cd\u9988\u4e0e\u5efa\u8bae"},"27.4.2 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))))}s.isMDXComponent=!0}}]);