(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{133:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var i=t(3),a=t(7),r=(t(0),t(191)),o=t(189),c=t(192),b={id:"dbcontext-db-first",title:"9.19 \u6570\u636e\u5e93\u751f\u6210\u6a21\u578b",sidebar_label:"9.19 \u6570\u636e\u5e93\u751f\u6210\u6a21\u578b"},l={unversionedId:"dbcontext-db-first",id:"dbcontext-db-first",isDocsHomePage:!1,title:"9.19 \u6570\u636e\u5e93\u751f\u6210\u6a21\u578b",description:"\u5728\u9605\u8bfb\u4e0b\u9762\u6587\u6863\u4e4b\u524d\uff0c\u5fc5\u987b\u628aFurion \u6e90\u7801\u6587\u4ef6\u5939\u4e0b\u7684 tools/cli.ps1 \u6587\u4ef6\u62f7\u8d1d\u5230\u672c\u5730\u4e2d\u3002\u800c\u4e14 Fur.Web.Entry \u5c42\u9700\u8981\u5b89\u88c5 Microsoft.EntityFrameworkCore.Tools \u5305\u3002",source:"@site/docs\\dbcontext-db-first.mdx",slug:"/dbcontext-db-first",permalink:"/docs/dbcontext-db-first",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/dbcontext-db-first.mdx",version:"current",lastUpdatedBy:"\u767e\u5c0f\u50e7",lastUpdatedAt:1609298338,sidebar_label:"9.19 \u6570\u636e\u5e93\u751f\u6210\u6a21\u578b",sidebar:"docs",previous:{title:"9.18 \u591a\u6570\u636e\u5e93\u64cd\u4f5c",permalink:"/docs/dbcontext-multi-database"},next:{title:"9.20 \u6a21\u578b\u751f\u6210\u6570\u636e\u5e93",permalink:"/docs/dbcontext-code-first"}},s=[{value:"9.19.1 \u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f",id:"9191-\u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f",children:[]},{value:"9.19.2 \u64cd\u4f5c\u6307\u5357",id:"9192-\u64cd\u4f5c\u6307\u5357",children:[{value:"9.19.2.1 \u6253\u5f00 <code>\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0</code>",id:"91921-\u6253\u5f00-\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0",children:[]},{value:"9.19.2.2 \u5207\u6362\u9ed8\u8ba4\u9879\u76ee",id:"91922-\u5207\u6362\u9ed8\u8ba4\u9879\u76ee",children:[]},{value:"9.19.2.3 \u8f93\u5165 <code>cli.ps1</code> \u547d\u4ee4",id:"91923-\u8f93\u5165-clips1-\u547d\u4ee4",children:[]}]},{value:"9.19.3 \u754c\u9762\u64cd\u4f5c\u6a21\u5f0f",id:"9193-\u754c\u9762\u64cd\u4f5c\u6a21\u5f0f",children:[{value:"9.19.3.1 \u542f\u52a8\u754c\u9762\u64cd\u4f5c",id:"91931-\u542f\u52a8\u754c\u9762\u64cd\u4f5c",children:[]},{value:"9.19.3.2 \u52a0\u8f7d\u6570\u636e\u5e93\u8868",id:"91932-\u52a0\u8f7d\u6570\u636e\u5e93\u8868",children:[]},{value:"9.19.3.3 \u9009\u62e9\u8868\u6216\u89c6\u56fe\u751f\u6210",id:"91933-\u9009\u62e9\u8868\u6216\u89c6\u56fe\u751f\u6210",children:[]},{value:"9.19.3.4 \u9009\u62e9\u4fdd\u5b58\u76ee\u5f55",id:"91934-\u9009\u62e9\u4fdd\u5b58\u76ee\u5f55",children:[]},{value:"9.19.3.5 \u751f\u6210\u6700\u7ec8\u5b9e\u4f53\u4ee3\u7801",id:"91935-\u751f\u6210\u6700\u7ec8\u5b9e\u4f53\u4ee3\u7801",children:[]}]},{value:"9.19.4 \u547d\u4ee4\u53c2\u6570\u914d\u7f6e",id:"9194-\u547d\u4ee4\u53c2\u6570\u914d\u7f6e",children:[]},{value:"9.19.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9195-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],p={toc:s};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)(c.a,{mdxType:"JoinGroup"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5173\u4e8e\u811a\u672c")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u5728\u9605\u8bfb\u4e0b\u9762\u6587\u6863\u4e4b\u524d\uff0c\u5fc5\u987b\u628a",Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6e90\u7801\u6587\u4ef6\u5939\u4e0b\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"tools/cli.ps1")," \u6587\u4ef6\u62f7\u8d1d\u5230\u672c\u5730\u4e2d\u3002\u800c\u4e14 ",Object(r.b)("inlineCode",{parentName:"p"},"Fur.Web.Entry")," \u5c42\u9700\u8981\u5b89\u88c5 ",Object(r.b)("inlineCode",{parentName:"p"},"Microsoft.EntityFrameworkCore.Tools")," \u5305\u3002"))),Object(r.b)("h2",{id:"9191-\u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f"},"9.19.1 \u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e24\u79cd\u4e3b\u8981\u65b9\u6cd5\u6765 ",Object(r.b)("strong",{parentName:"p"},"\u4fdd\u6301\u5b9e\u4f53\u6a21\u578b\u548c\u6570\u636e\u5e93\u67b6\u6784\u540c\u6b65"),"\u3002"),Object(r.b)("p",null,"\u81f3\u4e8e\u6211\u4eec\u5e94\u8be5\u9009\u7528\u54ea\u4e2a\u65b9\u6cd5\uff0c\u8bf7\u786e\u5b9a\u4f60\u662f\u5e0c\u671b\u4ee5\u5b9e\u4f53\u6a21\u578b\u4e3a\u51c6\u8fd8\u662f\u4ee5\u6570\u636e\u5e93\u4e3a\u51c6\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5982\u679c\u5e0c\u671b ",Object(r.b)("strong",{parentName:"p"},"\u4ee5\u5b9e\u4f53\u6a21\u578b\u4e3a\u51c6"),"\uff0c\u8bf7\u4f7f\u7528\u6b63\u5411\u5de5\u7a0b\uff08Code First\uff09\u3002 \u5bf9\u5b9e\u4f53\u6a21\u578b\u8fdb\u884c\u66f4\u6539\u65f6\uff0c\u6b64\u65b9\u6cd5\u4f1a\u4ee5\u589e\u91cf\u65b9\u5f0f\u5c06\u76f8\u5e94\u67b6\u6784\u66f4\u6539\u5e94\u7528\u5230\u6570\u636e\u5e93\uff0c\u4ee5\u4f7f\u6570\u636e\u5e93\u4fdd\u6301\u4e0e\u5b9e\u4f53\u6a21\u578b\u517c\u5bb9\u3002")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5982\u679c\u5e0c\u671b ",Object(r.b)("strong",{parentName:"p"},"\u4ee5\u6570\u636e\u5e93\u67b6\u6784\u4e3a\u51c6"),"\uff0c\u8bf7\u4f7f\u7528\u53cd\u5411\u5de5\u7a0b\uff08Database First\uff09\u3002 \u4f7f\u7528\u6b64\u65b9\u6cd5\uff0c\u53ef\u901a\u8fc7\u5c06\u6570\u636e\u5e93\u67b6\u6784\u53cd\u5411\u5de5\u7a0b\u5230\u5b9e\u4f53\u6a21\u578b\u6765\u751f\u6210\u76f8\u5e94\u7684\u5b9e\u4f53\u7c7b\u578b\u3002"))),Object(r.b)("p",null,"\u672c\u7ae0\u8282\u662f ",Object(r.b)("strong",{parentName:"p"},"\u53cd\u5411\u5de5\u7a0b\uff08Database First\uff09")," \u7684\u76f8\u5173\u5185\u5bb9\u3002"),Object(r.b)("h2",{id:"9192-\u64cd\u4f5c\u6307\u5357"},"9.19.2 \u64cd\u4f5c\u6307\u5357"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u64cd\u4f5c\u4e4b\u524d\u6ce8\u610f\u4e8b\u9879")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u76ee\u524d ",Object(r.b)("inlineCode",{parentName:"p"},"Furion Tools")," \u751f\u6210\u5de5\u5177",Object(r.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u4e0d\u652f\u6301\u4efb\u4f55\u6570\u636e\u5e93"),"\u751f\u6210\uff0c\u6240\u4ee5\u5982\u9700\u751f\u6210\u7279\u5b9a\u6570\u636e\u5e93\u7684\u4ee3\u7801\uff0c\u53ea\u9700\u8981\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Furion.EntityFrameworkCore.Core")," \u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u5305\u5373\u53ef\uff1a"),Object(r.b)("p",{parentName:"div"},"\u5404\u4e2a\u6570\u636e\u5e93\u7684\u5305\u53ef\u67e5\u9605\uff1a",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"dbcontext-multi-database"}),"\u591a\u6570\u636e\u5e93\u64cd\u4f5c-\u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305")),Object(r.b)("p",{parentName:"div"},"\u53e6\u5916\uff0c\u53ea\u6709 ",Object(r.b)("inlineCode",{parentName:"p"},"SqlServer")," \u6570\u636e\u5e93\u652f\u6301\u53ef\u89c6\u5316 ",Object(r.b)("inlineCode",{parentName:"p"},"GUI")," \u64cd\u4f5c\uff0c\u5176\u4ed6\u7684\u53ea\u80fd\u547d\u4ee4\u884c\u64cd\u4f5c\u3002"))),Object(r.b)("h3",{id:"91921-\u6253\u5f00-\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0"},"9.19.2.1 \u6253\u5f00 ",Object(r.b)("inlineCode",{parentName:"h3"},"\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0")),Object(r.b)("p",null,"\u6ce8\u610f\uff1a\u5f00\u59cb\u4e4b\u524d\u5148\u628a ",Object(r.b)("inlineCode",{parentName:"p"},"Furion.Web.Entry")," \u8bbe\u4e3a\u542f\u52a8\u9879\u76ee\u3002"),Object(r.b)("img",{src:Object(o.a)("img/dbfirst1.png")}),Object(r.b)("h3",{id:"91922-\u5207\u6362\u9ed8\u8ba4\u9879\u76ee"},"9.19.2.2 \u5207\u6362\u9ed8\u8ba4\u9879\u76ee"),Object(r.b)("p",null,"\u5c06 ",Object(r.b)("inlineCode",{parentName:"p"},"\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0")," \u9ed8\u8ba4\u9879\u76ee\u8bbe\u7f6e\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"Furion.Core"),"\uff0c\u5982\u679c\u60a8\u662f\u5176\u4ed6\u540d\u5b57\uff0c\u5219\u5207\u6362\u5bf9\u5e94\u5373\u53ef\u3002"),Object(r.b)("img",{src:Object(o.a)("img/dbfirst2.png")}),Object(r.b)("h3",{id:"91923-\u8f93\u5165-clips1-\u547d\u4ee4"},"9.19.2.3 \u8f93\u5165 ",Object(r.b)("inlineCode",{parentName:"h3"},"cli.ps1")," \u547d\u4ee4"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),' &"../tools/cli.ps1" -CoreProject "\u4f60\u7684Core\u5c42" -EntryProject "\u4f60\u7684\u542f\u52a8\u5c42"\n')),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u5173\u4e8e\u6570\u636e\u5e93\u547d\u540d")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u5982\u679c\u9700\u8981\u4fdd\u6301\u548c\u6570\u636e\u5e93\u4e00\u6a21\u4e00\u6837\u7684\u547d\u540d\uff0c\u5219\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"-UseDatabaseNames")," \u53c2\u6570\u6307\u5b9a\uff0c\u5982\uff1a"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cs"}),' &"../tools/cli.ps1" -UseDatabaseNames\n')))),Object(r.b)("img",{src:Object(o.a)("img/dbfirst3.png")}),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7b49\u5f85\u8f93\u5165")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u6267\u884c\u4e0a\u9762\u547d\u4ee4\u540e\uff0c\u6b64\u65f6\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"Cli")," \u6709\u4e00\u4e2a\u7b49\u5f85\u8f93\u5165\u63d0\u793a\uff1a"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"Furion Tools v1.0.0 \u8bf7\u952e\u5165\u64cd\u4f5c\u7c7b\u578b\uff1a[G] \u754c\u9762\u64cd\u4f5c\uff0c[\u4efb\u610f\u5b57\u7b26] \u547d\u4ee4\u884c\u64cd\u4f5c\nFurion Tools v1.0.0 \u60a8\u7684\u8f93\u5165\u662f:\n")),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"\u8f93\u5165\u5927\u5199 ",Object(r.b)("inlineCode",{parentName:"strong"},"G")," \u8fdb\u5165\u754c\u9762\u64cd\u4f5c\u6a21\u5f0f\uff0c\u5176\u4ed6\u4efb\u610f\u5b57\u7b26\u8fdb\u5165\u547d\u4ee4\u884c\u64cd\u4f5c\u6a21\u5f0f\u3002")))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u6ce8\u610f\u4e8b\u9879")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u76ee\u524d\u53ea\u6709 ",Object(r.b)("inlineCode",{parentName:"p"},"Sql Server")," \u6570\u636e\u5e93\u624d\u652f\u6301 ",Object(r.b)("inlineCode",{parentName:"p"},"GUI \u754c\u9762\u64cd\u4f5c\u6a21\u5f0f"),"\uff0c\u5176\u4ed6\u6570\u636e\u5e93\u8bf7\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u3002"))),Object(r.b)("h2",{id:"9193-\u754c\u9762\u64cd\u4f5c\u6a21\u5f0f"},"9.19.3 \u754c\u9762\u64cd\u4f5c\u6a21\u5f0f"),Object(r.b)("h3",{id:"91931-\u542f\u52a8\u754c\u9762\u64cd\u4f5c"},"9.19.3.1 \u542f\u52a8\u754c\u9762\u64cd\u4f5c"),Object(r.b)("p",null,"\u5f53\u6211\u4eec\u8f93\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"G")," \u65f6\uff0c\u5c06\u6253\u5f00 ",Object(r.b)("inlineCode",{parentName:"p"},"GUI")," \u754c\u9762\u64cd\u4f5c\u6a21\u5f0f\uff0c\u5982\uff1a"),Object(r.b)("img",{src:Object(o.a)("img/dbfirst4.png")}),Object(r.b)("p",null,"\u8fd9\u65f6\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"Furion Tools")," \u4f1a\u81ea\u52a8\u67e5\u627e\u6240\u6709\u6570\u636e\u5e93\u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},".json")," \u6587\u4ef6\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:"{12-13}","{12-13}":!0}),'{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft": "Warning",\n      "Microsoft.Hosting.Lifetime": "Information",\n      "Microsoft.EntityFrameworkCore": "Information"\n    }\n  },\n  "AllowedHosts": "*",\n  "ConnectionStrings": {\n    "DbConnectionString": "Server=localhost;Database=Furion;User=sa;Password=000000;MultipleActiveResultSets=True;",\n    "Sqlite3ConnectionString": "Data Source=./Furion.db"\n  }\n}\n')),Object(r.b)("h3",{id:"91932-\u52a0\u8f7d\u6570\u636e\u5e93\u8868"},"9.19.3.2 \u52a0\u8f7d\u6570\u636e\u5e93\u8868"),Object(r.b)("p",null,"\u9009\u62e9\u8fde\u63a5\u5b57\u7b26\u4e32\u4e4b\u540e\uff0c\u70b9\u51fb ",Object(r.b)("inlineCode",{parentName:"p"},"\u52a0\u8f7d\u6570\u636e\u5e93\u8868\u548c\u89c6\u56fe")," \u6309\u94ae\u52a0\u8f7d\u3002"),Object(r.b)("img",{src:Object(o.a)("img/dbfirst5.png")}),Object(r.b)("h3",{id:"91933-\u9009\u62e9\u8868\u6216\u89c6\u56fe\u751f\u6210"},"9.19.3.3 \u9009\u62e9\u8868\u6216\u89c6\u56fe\u751f\u6210"),Object(r.b)("p",null,"\u52a0\u8f7d\u8868\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u9009\u62e9\u60a8\u8981\u751f\u6210\u7684\u8868\u6216\u89c6\u56fe\uff0c",Object(r.b)("strong",{parentName:"p"},"\u652f\u6301\u591a\u9009")),Object(r.b)("img",{src:Object(o.a)("img/dbfirst6.png")}),Object(r.b)("p",null,"\u70b9\u51fb\u5e95\u90e8\u6309\u94ae ",Object(r.b)("inlineCode",{parentName:"p"},"\u7acb\u5373\u751f\u6210")),Object(r.b)("h3",{id:"91934-\u9009\u62e9\u4fdd\u5b58\u76ee\u5f55"},"9.19.3.4 \u9009\u62e9\u4fdd\u5b58\u76ee\u5f55"),Object(r.b)("p",null,"\u70b9\u51fb ",Object(r.b)("inlineCode",{parentName:"p"},"\u7acb\u5373\u751f\u6210")," \u6309\u94ae\u540e\uff0c\u4f1a\u5f39\u51fa\u5b9e\u4f53\u4fdd\u5b58\u9009\u62e9\u76ee\u5f55\u8d44\u6e90\u7ba1\u7406\u5668\uff0c\u9ed8\u8ba4\u5b9e\u4f53\u53ea\u80fd\u4fdd\u5b58\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Furion.Core")," \u5c42\uff1a"),Object(r.b)("img",{src:Object(o.a)("img/dbfirst7.png")}),Object(r.b)("p",null,"\u70b9\u51fb\u786e\u5b9a\u540e\u5c31\u53ef\u5b8c\u6210\u6240\u6709\u751f\u6210\u64cd\u4f5c\u3002"),Object(r.b)("h3",{id:"91935-\u751f\u6210\u6700\u7ec8\u5b9e\u4f53\u4ee3\u7801"},"9.19.3.5 \u751f\u6210\u6700\u7ec8\u5b9e\u4f53\u4ee3\u7801"),Object(r.b)("img",{src:Object(o.a)("img/dbfirst8.png")}),Object(r.b)("p",null,"\u6700\u7ec8\u811a\u672c\u5982\u4e0b\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),'PM> &"../tools/cli.ps1"\n// -----------------------------------------------------------------------------\n//   ______            _______          _\n//  |  ____|          |__   __|        | |\n//  | |__ _   _ _ __     | | ___   ___ | |___\n//  |  __| | | | \'__|    | |/ _ \\ / _ \\| / __|\n//  | |  | |_| | |       | | (_) | (_) | \\__ \\\n//  |_|   \\__,_|_|       |_|\\___/ \\___/|_|___/\n//\n// -----------------------------------------------------------------------------\n// \u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002\n// Copyright \xa9 2020 Furion, Baiqian Co.,Ltd.\n//\n// \u6846\u67b6\u540d\u79f0\uff1aFurion\n// \u6846\u67b6\u4f5c\u8005\uff1a\u767e\u5c0f\u50e7\n// \u6846\u67b6\u7248\u672c\uff1a1.0.0\n// \u6e90\u7801\u5730\u5740\uff1ahttps://gitee.com/monksoul/Furion\n// \u5f00\u6e90\u534f\u8bae\uff1aApache-2.0\uff08http://www.apache.org/licenses/LICENSE-2.0\uff09\n// -----------------------------------------------------------------------------\nFurion Tools v1.0.0 \u542f\u52a8\u4e2d......\nFurion Tools v1.0.0 \u542f\u52a8\u6210\u529f\uff01\nFurion Tools v1.0.0 \u8bf7\u952e\u5165\u64cd\u4f5c\u7c7b\u578b\uff1a[G] \u754c\u9762\u64cd\u4f5c\uff0c[\u4efb\u610f\u5b57\u7b26] \u547d\u4ee4\u884c\u64cd\u4f5c\nFurion Tools v1.0.0 \u60a8\u7684\u8f93\u5165\u662f: G\nFurion Tools v1.0.0 \u6b63\u5728\u52a0\u8f7d\u6570\u636e\u5e93\u8868\u548c\u89c6\u56fe......\nFurion Tools v1.0.0 \u52a0\u8f7d\u6210\u529f\uff01\nFurion Tools v1.0.0 \u6b63\u5728\u7f16\u8bd1\u89e3\u51b3\u65b9\u6848\u4ee3\u7801......\nBuild started...\nBuild succeeded.\nFor foreign key FK_PersonDetail_Person_PersonId on table dbo.PersonDetail, unable to model the end of the foreign key on principal table dbo.Person. This is usually because the principal table was not included in the selection set.\nFurion Tools v1.0.0 \u7f16\u8bd1\u6210\u529f\uff01\nFurion Tools v1.0.0 \u5f00\u59cb\u751f\u6210\u5b9e\u4f53\u6587\u4ef6......\nFurion Tools v1.0.0 \u6b63\u5728\u751f\u6210 City.cs \u5b9e\u4f53\u4ee3\u7801......\nFurion Tools v1.0.0 \u6210\u529f\u751f\u6210 City.cs \u5b9e\u4f53\u4ee3\u7801\n// -----------------------------------------------------------------------------\n// \u4ee5\u4e0b\u4ee3\u7801\u7531 Furion Tools v1.0.0 \u751f\u6210\n// -----------------------------------------------------------------------------\n\nusing Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\n#nullable disable\n\nnamespace Furion.Core\n{\n    public partial class City : IEntity, IEntityTypeBuilder<City>\n    {\n\n        public City()\n        {\n            InverseParent = new HashSet<City>();\n        }\n\n        public int Id { get; set; }\n        public string Name { get; set; }\n        public int? ParentId { get; set; }\n        public DateTime CreatedTime { get; set; }\n        public DateTime? UpdatedTime { get; set; }\n        public bool IsDeleted { get; set; }\n\n        public virtual City Parent { get; set; }\n        public virtual ICollection<City> InverseParent { get; set; }\n\n        public void Configure(EntityTypeBuilder<City> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n                entityBuilder.HasIndex(e => e.ParentId, "IX_City_ParentId");\n\n                entityBuilder.HasOne(d => d.Parent)\n                    .WithMany(p => p.InverseParent)\n                    .HasForeignKey(d => d.ParentId);\n\n        }\n\n    }\n}\n\nFurion Tools v1.0.0 \u6b63\u5728\u751f\u6210 PersonDetail.cs \u5b9e\u4f53\u4ee3\u7801......\nFurion Tools v1.0.0 \u6210\u529f\u751f\u6210 PersonDetail.cs \u5b9e\u4f53\u4ee3\u7801\n// -----------------------------------------------------------------------------\n// \u4ee5\u4e0b\u4ee3\u7801\u7531 Furion Tools v1.0.0 \u751f\u6210\n// -----------------------------------------------------------------------------\n\nusing Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\n#nullable disable\n\nnamespace Furion.Core\n{\n    public partial class PersonDetail : IEntity, IEntityTypeBuilder<PersonDetail>\n    {\n\n        public int Id { get; set; }\n        public string PhoneNumber { get; set; }\n        public string Qq { get; set; }\n        public int PersonId { get; set; }\n\n        public void Configure(EntityTypeBuilder<PersonDetail> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n                entityBuilder.HasIndex(e => e.PersonId, "IX_PersonDetail_PersonId")\n                    .IsUnique();\n\n                entityBuilder.Property(e => e.Qq).HasColumnName("QQ");\n\n        }\n\n    }\n}\n\nFurion Tools v1.0.0 \u6b63\u5728\u751f\u6210 Post.cs \u5b9e\u4f53\u4ee3\u7801......\nFurion Tools v1.0.0 \u6210\u529f\u751f\u6210 Post.cs \u5b9e\u4f53\u4ee3\u7801\n// -----------------------------------------------------------------------------\n// \u4ee5\u4e0b\u4ee3\u7801\u7531 Furion Tools v1.0.0 \u751f\u6210\n// -----------------------------------------------------------------------------\n\nusing Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\n#nullable disable\n\nnamespace Furion.Core\n{\n    public partial class Post : IEntity\n    {\n\n        public int Id { get; set; }\n        public string Name { get; set; }\n        public DateTime CreatedTime { get; set; }\n        public DateTime? UpdatedTime { get; set; }\n        public bool IsDeleted { get; set; }\n\n    }\n}\n\nFurion Tools v1.0.0 \u6b63\u5728\u751f\u6210 VPerson.cs \u5b9e\u4f53\u4ee3\u7801......\nFurion Tools v1.0.0 \u6210\u529f\u751f\u6210 VPerson.cs \u5b9e\u4f53\u4ee3\u7801\n// -----------------------------------------------------------------------------\n// \u4ee5\u4e0b\u4ee3\u7801\u7531 Furion Tools v1.0.0 \u751f\u6210\n// -----------------------------------------------------------------------------\n\nusing Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\n#nullable disable\n\nnamespace Furion.Core\n{\n    public partial class VPerson : IEntity, IEntityTypeBuilder<VPerson>\n    {\n\n        public int Id { get; set; }\n        public string Name { get; set; }\n        public int Age { get; set; }\n        public string Address { get; set; }\n\n        public void Configure(EntityTypeBuilder<VPerson> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n                entityBuilder.HasNoKey();\n\n                entityBuilder.ToView("V_Person");\n\n                entityBuilder.Property(e => e.Id).ValueGeneratedOnAdd();\n\n                entityBuilder.Property(e => e.Name).HasMaxLength(32);\n\n        }\n\n    }\n}\n\nFurion Tools v1.0.0 \u5168\u90e8\u5b9e\u4f53\u751f\u6210\u6210\u529f\uff01\nPM>\n')),Object(r.b)("h2",{id:"9194-\u547d\u4ee4\u53c2\u6570\u914d\u7f6e"},"9.19.4 \u547d\u4ee4\u53c2\u6570\u914d\u7f6e"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Furion Tools Cli")," \u652f\u6301\u591a\u4e2a\u53c2\u6570\u914d\u7f6e\uff0c\u4f7f\u7528\u65b9\u6cd5\u53ea\u9700\u8981\u5728\u547d\u4ee4\u540e\u9762\u6dfb\u52a0\u5373\u53ef\uff0c\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),' &"../tools/cli.ps1" -Context \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u540d -ConnectionName \u8fde\u63a5\u5b57\u7b26\u4e32Key\n')),Object(r.b)("p",null,"\u652f\u6301\u53c2\u6570\u5982\u4e0b\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-Tables"),"\uff1a\u914d\u7f6e\u8981\u751f\u6210\u7684\u6570\u636e\u5e93\u8868\uff0c\u6570\u7ec4\u7c7b\u578b\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u5219\u751f\u6210\u6570\u636e\u5e93\u6240\u6709\u8868\u548c\u89c6\u56fe\u3002\u5982\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"-Tables Person,PersonDetails")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-Context"),"\uff1a\u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u9ed8\u8ba4 ",Object(r.b)("inlineCode",{parentName:"li"},"FurDbContext"),"\uff0c\u5982\u679c\u6709\u591a\u4e2a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u5219\u6b64\u53c2\u6570\u5fc5\u987b\u914d\u7f6e"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-ConnectionName"),"\uff1a\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u5bf9\u4e8e ",Object(r.b)("inlineCode",{parentName:"li"},"appsetting.json")," \u4e2d\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"Key")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-OutputDir"),"\uff1a\u751f\u6210\u5b9e\u4f53\u4ee3\u7801\u8f93\u51fa\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"./Furion.Core/Entities/")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-DbProvider"),"\uff1a\u6570\u636e\u5e93\u63d0\u4f9b\u5668\uff0c\u9ed8\u8ba4\u662f ",Object(r.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.SqlServer"),"\uff0c\u5176\u4ed6\u6570\u636e\u5e93\u8bf7\u6307\u5b9a\u5bf9\u5e94\u7a0b\u5e8f\u96c6",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SqlServer"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.SqlServer")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Sqlite"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Sqlite")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Cosmos"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Cosmos")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"InMemoryDatabase"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.InMemory")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MySql"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Pomelo.EntityFrameworkCore.MySql")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PostgreSQL"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Npgsql.EntityFrameworkCore.PostgreSQL")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Oracle"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Citms.EntityFrameworkCore.Oracle")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Dm"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Dm")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-EntryProject"),"\uff1aWeb \u542f\u7528\u9879\u76ee\u5c42\u540d\uff0c\u9ed8\u8ba4 ",Object(r.b)("inlineCode",{parentName:"li"},"Furion.Web.Entry")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-CoreProject"),"\uff1a\u5b9e\u4f53\u9879\u76ee\u5c42\u540d\uff0c\u9ed8\u8ba4 ",Object(r.b)("inlineCode",{parentName:"li"},"Furion.Core")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-DbContextLocators"),"\uff1a\u591a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\uff0c\u9ed8\u8ba4 ",Object(r.b)("inlineCode",{parentName:"li"},"MasterDbContextLocator"),"\uff0c\u652f\u6301\u591a\u4e2a\uff0c\u5982\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"MasterDbContextLocator,MySqlDbContextLocator")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-Product"),"\uff1a\u89e3\u51b3\u65b9\u6848\u9ed8\u8ba4\u524d\u7f00\uff0c\u5982 ",Object(r.b)("inlineCode",{parentName:"li"},"Furion")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-UseDatabaseNames"),"\uff1a\u662f\u5426\u4fdd\u6301\u751f\u6210\u548c\u6570\u636e\u5e93\u3001\u8868\u4e00\u81f4\u7684\u540d\u79f0"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-Namespace"),"\uff1a\u6307\u5b9a\u5b9e\u4f53\u547d\u540d\u7a7a\u95f4")),Object(r.b)("h2",{id:"9195-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.19.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))))}d.isMDXComponent=!0},189:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}));var i=t(21),a=t(190);function r(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(i.default)();return{withBaseUrl:(t,i)=>function(e,n,t,{forcePrependBaseUrl:i=!1,absolute:r=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(i)return n+t;const o=t.startsWith(n)?t:n+t.replace(/^\//,"");return r?e+o:o}(n,e,t,i)}}function o(e,n={}){const{withBaseUrl:t}=r();return t(e,n)}},190:function(e,n,t){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return a}))},191:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return t?a.a.createElement(u,c(c({ref:n},l),{},{components:t})):a.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},192:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var i=t(0),a=t.n(i),r=t(189);t(55);function o(){const[e,n]=Object(i.useState)(!1);return a.a.createElement("div",{className:"furion-join-group"},e&&a.a.createElement("img",{src:Object(r.a)("img/dotnetchina2.jpg")}),a.a.createElement("button",{onClick:()=>n(!e)},"\u52a0\u5165QQ\u4ea4\u6d41\u7fa4"))}}}]);