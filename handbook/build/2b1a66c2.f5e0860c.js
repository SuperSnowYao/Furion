(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{162:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),s=l(n),p=r,O=s["".concat(a,".").concat(p)]||s[p]||u[p]||c;return n?i.a.createElement(O,o(o({ref:t},d),{},{components:n})):i.a.createElement(O,o({ref:t},d))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var d=2;d<c;d++)a[d]=n[d];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},163:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var r=n(21),i=n(164);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},164:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),c=(n(0),n(162)),a=n(163),o={id:"deploy-iis",title:"26.1 \u5728 IIS \u90e8\u7f72",sidebar_label:"26.1 \u5728 IIS \u90e8\u7f72"},b={unversionedId:"deploy-iis",id:"deploy-iis",isDocsHomePage:!1,title:"26.1 \u5728 IIS \u90e8\u7f72",description:"26.1.1 \u53d1\u5e03\u7f51\u7ad9",source:"@site/docs\\deploy-iis.mdx",slug:"/deploy-iis",permalink:"/furion/docs/deploy-iis",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/deploy-iis.mdx",version:"current",sidebar_label:"26.1 \u5728 IIS \u90e8\u7f72",sidebar:"docs",previous:{title:"25. Grpc \u670d\u52a1",permalink:"/furion/docs/grpc"},next:{title:"26.2 \u5728 Docker \u90e8\u7f72",permalink:"/furion/docs/deploy-docker"}},d=[{value:"26.1.1 \u53d1\u5e03\u7f51\u7ad9",id:"2611-\u53d1\u5e03\u7f51\u7ad9",children:[{value:"26.1.1.1 \u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03",id:"26111-\u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03",children:[]},{value:"26.1.1.2 \u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939",id:"26112-\u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939",children:[]},{value:"26.1.1.3 \u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84",id:"26113-\u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84",children:[]},{value:"26.1.1.4 \u70b9\u51fb\u53d1\u5e03",id:"26114-\u70b9\u51fb\u53d1\u5e03",children:[]}]},{value:"26.1.2 \u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e",id:"2612-\u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e",children:[{value:"26.1.2.1 \u7b2c\u4e00\u6b65",id:"26121-\u7b2c\u4e00\u6b65",children:[]},{value:"26.1.2.2 \u7b2c\u4e8c\u6b65\uff08\u547d\u4ee4\uff09",id:"26122-\u7b2c\u4e8c\u6b65\uff08\u547d\u4ee4\uff09",children:[]},{value:"26.1.2.3 \u7b2c\u4e09\u6b65\uff08\u547d\u4ee4\uff09",id:"26123-\u7b2c\u4e09\u6b65\uff08\u547d\u4ee4\uff09",children:[]},{value:"26.1.2.4 \u7b2c\u56db\u6b65\uff08\u547d\u4ee4\uff09",id:"26124-\u7b2c\u56db\u6b65\uff08\u547d\u4ee4\uff09",children:[]}]},{value:"26.1.3 \u90e8\u7f72\u5230 IIS",id:"2613-\u90e8\u7f72\u5230-iis",children:[{value:"26.1.3.1 \u6dfb\u52a0\u65b0\u7f51\u7ad9",id:"26131-\u6dfb\u52a0\u65b0\u7f51\u7ad9",children:[]},{value:"26.1.3.2 \u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f",id:"26132-\u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f",children:[]},{value:"26.1.3.3 \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60",id:"26133-\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60",children:[]},{value:"26.1.3.4 \u8bbe\u7f6e\u4e3a <code>\u975e\u6258\u7ba1</code>",id:"26134-\u8bbe\u7f6e\u4e3a-\u975e\u6258\u7ba1",children:[]},{value:"26.1.3.5 \u91cd\u542f\u7f51\u7ad9",id:"26135-\u91cd\u542f\u7f51\u7ad9",children:[]}]},{value:"26.1.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"2614-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],l={toc:d};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"2611-\u53d1\u5e03\u7f51\u7ad9"},"26.1.1 \u53d1\u5e03\u7f51\u7ad9"),Object(c.b)("h3",{id:"26111-\u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03"},"26.1.1.1 \u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03"),Object(c.b)("img",{src:Object(a.a)("img/dp1.png")}),Object(c.b)("h3",{id:"26112-\u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939"},"26.1.1.2 \u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939"),Object(c.b)("img",{src:Object(a.a)("img/dy2.png")}),Object(c.b)("h3",{id:"26113-\u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84"},"26.1.1.3 \u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84"),Object(c.b)("img",{src:Object(a.a)("img/dp3.png")}),Object(c.b)("h3",{id:"26114-\u70b9\u51fb\u53d1\u5e03"},"26.1.1.4 \u70b9\u51fb\u53d1\u5e03"),Object(c.b)("img",{src:Object(a.a)("img/dp4.png")}),Object(c.b)("h2",{id:"2612-\u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e"},"26.1.2 \u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e"),Object(c.b)("h3",{id:"26121-\u7b2c\u4e00\u6b65"},"26.1.2.1 \u7b2c\u4e00\u6b65"),Object(c.b)("p",null,"\u5b89\u88c5.NET Core \u8fd0\u884c\u65f6\u6346\u7ed1\u5305\uff1a",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer"}),"\u70b9\u51fb\u4e0b\u8f7d")),Object(c.b)("h3",{id:"26122-\u7b2c\u4e8c\u6b65\uff08\u547d\u4ee4\uff09"},"26.1.2.2 \u7b2c\u4e8c\u6b65\uff08\u547d\u4ee4\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"net stop was /y\n")),Object(c.b)("h3",{id:"26123-\u7b2c\u4e09\u6b65\uff08\u547d\u4ee4\uff09"},"26.1.2.3 \u7b2c\u4e09\u6b65\uff08\u547d\u4ee4\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"net start w3svc\n")),Object(c.b)("h3",{id:"26124-\u7b2c\u56db\u6b65\uff08\u547d\u4ee4\uff09"},"26.1.2.4 \u7b2c\u56db\u6b65\uff08\u547d\u4ee4\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"set ASPNETCORE_ENVIRONMENT=Production\n")),Object(c.b)("h2",{id:"2613-\u90e8\u7f72\u5230-iis"},"26.1.3 \u90e8\u7f72\u5230 IIS"),Object(c.b)("h3",{id:"26131-\u6dfb\u52a0\u65b0\u7f51\u7ad9"},"26.1.3.1 \u6dfb\u52a0\u65b0\u7f51\u7ad9"),Object(c.b)("img",{src:Object(a.a)("img/ds1.png")}),Object(c.b)("h3",{id:"26132-\u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f"},"26.1.3.2 \u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f"),Object(c.b)("img",{src:Object(a.a)("img/ds2.png")}),Object(c.b)("h3",{id:"26133-\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60"},"26.1.3.3 \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60"),Object(c.b)("img",{src:Object(a.a)("img/ds3.png")}),Object(c.b)("h3",{id:"26134-\u8bbe\u7f6e\u4e3a-\u975e\u6258\u7ba1"},"26.1.3.4 \u8bbe\u7f6e\u4e3a ",Object(c.b)("inlineCode",{parentName:"h3"},"\u975e\u6258\u7ba1")),Object(c.b)("img",{src:Object(a.a)("img/ds4.png")}),Object(c.b)("h3",{id:"26135-\u91cd\u542f\u7f51\u7ad9"},"26.1.3.5 \u91cd\u542f\u7f51\u7ad9"),Object(c.b)("p",null,"\u53ea\u9700\u91cd\u542f\u7f51\u7ad9\u6216\u5e94\u7528\u7a0b\u5e8f\u6c60\u5373\u53ef\u3002"),Object(c.b)("h2",{id:"2614-\u53cd\u9988\u4e0e\u5efa\u8bae"},"26.1.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))))}s.isMDXComponent=!0}}]);