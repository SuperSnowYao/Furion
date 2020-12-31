(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),c=(t(0),t(162)),i=(t(163),{id:"deploy-nginx",title:"26.3 \u5728 Nginx \u90e8\u7f72",sidebar_label:"26.3 \u5728 Nginx \u90e8\u7f72"}),a={unversionedId:"deploy-nginx",id:"deploy-nginx",isDocsHomePage:!1,title:"26.3 \u5728 Nginx \u90e8\u7f72",description:"\u6587\u6863\u7d27\u6025\u7f16\u5199\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770b\u5b98\u65b9\u6587\u6863 https://docs.microsoft.com/zh-cn/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-5.0",source:"@site/docs\\docker-nginx.mdx",slug:"/deploy-nginx",permalink:"/docs/deploy-nginx",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/docker-nginx.mdx",version:"current",sidebar_label:"26.3 \u5728 Nginx \u90e8\u7f72",sidebar:"docs",previous:{title:"26.2 \u5728 Docker \u90e8\u7f72",permalink:"/docs/deploy-docker"},next:{title:"27. \u6301\u7eed\u90e8\u7f72\u96c6\u6210",permalink:"/docs/devops"}},u=[],s={toc:u};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u6587\u6863\u7d27\u6025\u7f16\u5199\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770b\u5b98\u65b9\u6587\u6863 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/zh-cn/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-5.0"}),"https://docs.microsoft.com/zh-cn/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-5.0")))}p.isMDXComponent=!0},162:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(t),d=r,b=l["".concat(i,".").concat(d)]||l[d]||f[d]||c;return t?o.a.createElement(b,a(a({ref:n},s),{},{components:t})):o.a.createElement(b,a({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},163:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return i}));var r=t(21),o=t(164);function c(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(r.default)();return{withBaseUrl:(t,r)=>function(e,n,t,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(r)return n+t;const i=t.startsWith(n)?t:n+t.replace(/^\//,"");return c?e+i:i}(n,e,t,r)}}function i(e,n={}){const{withBaseUrl:t}=c();return t(e,n)}},164:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}))}}]);