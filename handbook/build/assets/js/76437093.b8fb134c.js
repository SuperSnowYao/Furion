"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4667],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7057:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(3117),i=r(102),a=(r(7294),r(3905)),o=["components"],l={id:"jsonserializer",title:"7. JsonSerializerUtility \u9759\u6001\u7c7b",sidebar_label:"7. JsonSerializerUtility \u9759\u6001\u7c7b"},s=void 0,c={unversionedId:"global/jsonserializer",id:"global/jsonserializer",isDocsHomePage:!1,title:"7. JsonSerializerUtility \u9759\u6001\u7c7b",description:"\u4ee5\u4e0b\u5185\u5bb9\u5728 Furion 1.16.0 + \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002\u8bf7\u4f7f\u7528 \u301023. JSON \u5e8f\u5217\u5316\u7ae0\u8282\u3011",source:"@site/docs/global/jsonserializer.mdx",sourceDirName:"global",slug:"/global/jsonserializer",permalink:"/furion/docs/global/jsonserializer",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/global/jsonserializer.mdx",tags:[],version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1621833478,formattedLastUpdatedAt:"5/24/2021",frontMatter:{id:"jsonserializer",title:"7. JsonSerializerUtility \u9759\u6001\u7c7b",sidebar_label:"7. JsonSerializerUtility \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"6. Http \u9759\u6001\u7c7b",permalink:"/furion/docs/global/shttp"},next:{title:"8. L \u9759\u6001\u7c7b",permalink:"/furion/docs/global/l"}},p=[{value:"7.1 \u5e8f\u5217\u5316",id:"71-\u5e8f\u5217\u5316",children:[],level:2},{value:"7.2 \u53cd\u5e8f\u5217\u5316",id:"72-\u53cd\u5e8f\u5217\u5316",children:[],level:2},{value:"7.3 \u83b7\u53d6\u9ed8\u8ba4\u5e8f\u5217\u5316\u914d\u7f6e",id:"73-\u83b7\u53d6\u9ed8\u8ba4\u5e8f\u5217\u5316\u914d\u7f6e",children:[],level:2},{value:"7.4 \u8bbe\u7f6e\u5e8f\u5217\u5316\u5c5e\u6027\u9996\u5b57\u6bcd\u5927\u5199",id:"74-\u8bbe\u7f6e\u5e8f\u5217\u5316\u5c5e\u6027\u9996\u5b57\u6bcd\u5927\u5199",children:[],level:2},{value:"7.5 \u8bbe\u7f6e\u65f6\u95f4\u8f93\u51fa\u7edf\u4e00\u683c\u5f0f\u5316",id:"75-\u8bbe\u7f6e\u65f6\u95f4\u8f93\u51fa\u7edf\u4e00\u683c\u5f0f\u5316",children:[],level:2}],d={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u91cd\u8981\u58f0\u660e")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u5185\u5bb9\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion 1.16.0 +")," \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002\u8bf7\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/json-serialization"},"\u301023. JSON \u5e8f\u5217\u5316\u7ae0\u8282\u3011")))),(0,a.kt)("h2",{id:"71-\u5e8f\u5217\u5316"},"7.1 \u5e8f\u5217\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var str = JsonSerializerUtility.Serialize(obj, [options]);\n")),(0,a.kt)("h2",{id:"72-\u53cd\u5e8f\u5217\u5316"},"7.2 \u53cd\u5e8f\u5217\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var obj = JsonSerializerUtility.Deserialize<T>(str, [options]);\n")),(0,a.kt)("h2",{id:"73-\u83b7\u53d6\u9ed8\u8ba4\u5e8f\u5217\u5316\u914d\u7f6e"},"7.3 \u83b7\u53d6\u9ed8\u8ba4\u5e8f\u5217\u5316\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var options = JsonSerializerUtility.GetDefaultJsonSerializerOptions();\n")),(0,a.kt)("h2",{id:"74-\u8bbe\u7f6e\u5e8f\u5217\u5316\u5c5e\u6027\u9996\u5b57\u6bcd\u5927\u5199"},"7.4 \u8bbe\u7f6e\u5e8f\u5217\u5316\u5c5e\u6027\u9996\u5b57\u6bcd\u5927\u5199"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2}","{2}":!0},"services.AddControllersWithViews()\n        .AddJsonSerializerPascalPropertyNaming();\n")),(0,a.kt)("h2",{id:"75-\u8bbe\u7f6e\u65f6\u95f4\u8f93\u51fa\u7edf\u4e00\u683c\u5f0f\u5316"},"7.5 \u8bbe\u7f6e\u65f6\u95f4\u8f93\u51fa\u7edf\u4e00\u683c\u5f0f\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2}","{2}":!0},'services.AddControllersWithViews()\n        .AddDateTimeJsonConverter("yyyy-MM-dd HH:mm:ss");\n')))}u.isMDXComponent=!0}}]);