(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(205)),o={id:"dbcontext-start",title:"9.0 \u5165\u95e8\u7b80\u8981",sidebar_label:"9.0 \u5165\u95e8\u7b80\u8981"},b={unversionedId:"dbcontext-start",id:"dbcontext-start",isDocsHomePage:!1,title:"9.0 \u5165\u95e8\u7b80\u8981",description:"9.0.1 \u5165\u95e8\u51c6\u5907",source:"@site/docs/dbcontext-start.mdx",slug:"/dbcontext-start",permalink:"/furion/docs/dbcontext-start",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/dbcontext-start.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1617154144,formattedLastUpdatedAt:"3/31/2021",sidebar_label:"9.0 \u5165\u95e8\u7b80\u8981",sidebar:"docs",previous:{title:"8. \u6570\u636e\u6821\u9a8c",permalink:"/furion/docs/data-validation"},next:{title:"9.1 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",permalink:"/furion/docs/dbcontext"}},c=[{value:"9.0.1 \u5165\u95e8\u51c6\u5907",id:"901-\u5165\u95e8\u51c6\u5907",children:[{value:"9.0.1.1 \u5b89\u88c5\u5bf9\u5e94\u6570\u636e\u5e93\u5305",id:"9011-\u5b89\u88c5\u5bf9\u5e94\u6570\u636e\u5e93\u5305",children:[]},{value:"9.0.1.2 \u521b\u5efa\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"9012-\u521b\u5efa\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"9.0.1.3 \u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32",id:"9013-\u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32",children:[]},{value:"9.0.1.4 \u6ce8\u518c\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"9014-\u6ce8\u518c\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"9.0.1.5 <code>Code First</code> \u8bf4\u660e",id:"9015-code-first-\u8bf4\u660e",children:[]}]},{value:"9.0.2 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"902-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"901-\u5165\u95e8\u51c6\u5907"},"9.0.1 \u5165\u95e8\u51c6\u5907"),Object(r.b)("h3",{id:"9011-\u5b89\u88c5\u5bf9\u5e94\u6570\u636e\u5e93\u5305"},"9.0.1.1 \u5b89\u88c5\u5bf9\u5e94\u6570\u636e\u5e93\u5305"),Object(r.b)("p",null,"\u5728\u672c\u7ae0\u8282\u6240\u5728\u7684\u7c7b\u522b\u4e2d\uff0c\u6240\u6709\u6570\u636e\u5e93\u64cd\u4f5c\u529f\u80fd\u5747\u9700\u8981\u4f9d\u8d56 ",Object(r.b)("inlineCode",{parentName:"p"},"EntityFramework Core")," \u6846\u67b6\uff0c\u4f46 ",Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u5e95\u5c42\u5e76\u672a\u96c6\u6210 ",Object(r.b)("inlineCode",{parentName:"p"},"EntityFramework Core")," \u5305\uff0c\u800c\u662f\u91c7\u7528\u52a8\u6001\u52a0\u8f7d\u7a0b\u5e8f\u96c6\u65b9\u5f0f\u81ea\u52a8\u8f7d\u5165\u3002"),Object(r.b)("p",null,"\u6240\u4ee5\uff0c\u5982\u9700\u4f7f\u7528\u672c\u5927\u7c7b\u6570\u636e\u5e93\u529f\u80fd\uff0c\u9700\u5b89\u88c5\u5bf9\u5e94\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"EntityFramework Core")," \u6570\u636e\u5e93\u5305\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SqlServer"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.SqlServer")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Sqlite"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Sqlite")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Cosmos"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Cosmos")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"InMemoryDatabase"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.InMemory")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MySql"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Pomelo.EntityFrameworkCore.MySql"),"\uff0c",Object(r.b)("strong",{parentName:"li"},"Nuget \u9700\u52fe\u9009\u9884\u89c8\u7248\u4e14\u5b89\u88c5 .Alpha.2 \u7248\u672c")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PostgreSQL"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Npgsql.EntityFrameworkCore.PostgreSQL")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Oracle"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Oracle.EntityFrameworkCore")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Firebird"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"FirebirdSql.EntityFrameworkCore.Firebird")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Dm"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Dm"))),Object(r.b)("h3",{id:"9012-\u521b\u5efa\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"9.0.1.2 \u521b\u5efa\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:"{7}","{7}":!0},'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString", DbProvider.Sqlite)]\n    public class DefaultDbContext : AppDbContext<DefaultDbContext>\n    {\n        public DefaultDbContext(DbContextOptions<DefaultDbContext> options) : base(options)\n        {\n        }\n    }\n}\n')),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u90fd\u9700\u7ee7\u627f ",Object(r.b)("inlineCode",{parentName:"p"},"AppDbContext<TDbContext, TDbContextLocator>")," \u57fa\u7c7b\uff0c\u9ed8\u8ba4\u6570\u636e\u5e93\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"TDbContextLocator")," \u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"MasterDbContextLocator"),"\uff0c\u65e0\u9700\u663e\u5f0f\u7f16\u5199\u3002"),Object(r.b)("p",{parentName:"div"},"\u975e\u9ed8\u8ba4\u6570\u636e\u5e93\u5219\u9700\u663e\u5f0f\u7ee7\u627f\u5e76\u7533\u660e\uff0c\u5982\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"AppDbContext<OtherDbContext, OtherDbContextLocator>"),"\u3002"))),Object(r.b)("p",null,"\u60f3\u4e86\u89e3\u66f4\u591a\u53ef\u67e5\u9605 \u3010",Object(r.b)("a",{parentName:"p",href:"./dbcontext-locator"},"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668"),"\u3011 \u7ae0\u8282\u3002"),Object(r.b)("h3",{id:"9013-\u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32"},"9.0.1.3 \u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u591a\u79cd\u65b9\u5f0f\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"appsettings.json")," \u4e2d\u914d\u7f6e")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json",metastring:"{2-3}","{2-3}":!0},'{\n  "ConnectionStrings": {\n    "Sqlite3ConnectionString": "Data Source=./Furion.db"\n  }\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49 ",Object(r.b)("inlineCode",{parentName:"li"},".json")," \u6587\u4ef6\u914d\u7f6e")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json",metastring:"{2-3}","{2-3}":!0},'{\n  "ConnectionStrings": {\n    "Sqlite3ConnectionString": "Data Source=./Furion.db"\n  }\n}\n')),Object(r.b)("p",null,"\u8be5\u65b9\u5f0f\u548c\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"appsettings.json")," \u7684\u533a\u522b\u662f\u81ea\u5b9a\u4e49\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},".json")," \u6587\u4ef6\u4e0d\u4f1a\u81ea\u52a8\u6dfb\u52a0\u5230\u9879\u76ee\u4e2d\uff0c",Object(r.b)("strong",{parentName:"p"},"\u987b\u5728 ",Object(r.b)("inlineCode",{parentName:"strong"},"Visual Studio")," \u4e2d\u914d\u7f6e ",Object(r.b)("inlineCode",{parentName:"strong"},".json")," \u53f3\u952e\u5c5e\u6027\uff0c\u8bbe\u7f6e ",Object(r.b)("inlineCode",{parentName:"strong"},"\u590d\u5236")," \u8f93\u51fa\u76ee\u5f55\u4e3a ",Object(r.b)("inlineCode",{parentName:"strong"},"\u5982\u679c\u8f83\u65b0\u5219\u590d\u5236"),"\uff0c\u751f\u6210\u64cd\u4f5c\u4e3a\uff1a",Object(r.b)("inlineCode",{parentName:"strong"},"\u5185\u5bb9"),"\u3002")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[AppDbContext]")," \u7279\u6027\u914d\u7f6e")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:"{1}","{1}":!0},'[AppDbContext("Data Source=./Furion.db", DbProvider.Sqlite)]\npublic class DefaultDbContext : AppDbContext<DefaultDbContext>\n{\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5728\u6ce8\u518c\u4e0a\u4e0b\u6587\u65f6\u914d\u7f6e")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:"{3-4}","{3-4}":!0},'services.AddDatabaseAccessor(options =>\n{\n    // options.AddDb<DefaultDbContext>(connectionString: "\u914d\u7f6eKey\u6216\u8fde\u63a5\u5b57\u7b26\u4e32");\n    options.AddDbPool<DefaultDbContext>(connectionString: "\u914d\u7f6eKey\u6216\u8fde\u63a5\u5b57\u7b26\u4e32");\n});\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5728 ",Object(r.b)("inlineCode",{parentName:"li"},"DbContext")," \u4e2d\u914d\u7f6e")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:"{12-14}","{12-14}":!0},'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Furion.EntityFramework.Core\n{\n    public class DefaultDbContext : AppDbContext<DefaultDbContext>\n    {\n        public DefaultDbContext(DbContextOptions<DefaultDbContext> options) : base(options)\n        {\n        }\n\n        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n        {\n            optionsBuilder.UseSqlite("\u8fde\u63a5\u5b57\u7b26\u4e32");\n            base.OnConfiguring(optionsBuilder);\n        }\n    }\n}\n')),Object(r.b)("h3",{id:"9014-\u6ce8\u518c\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"9.0.1.4 \u6ce8\u518c\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:'{12-19} title="Furion.EntityFramework.Core\\Startup.cs"',"{12-19}":!0,title:'"Furion.EntityFramework.Core\\Startup.cs"'},'using Furion.DependencyInjection;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppStartup(600)]\n    public sealed class FurEntityFrameworkCoreStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            // \u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u652f\u6301N\u4e2a\u6570\u636e\u5e93\n            services.AddDatabaseAccessor(options =>\n            {\n                // \u914d\u7f6e\u9ed8\u8ba4\u6570\u636e\u5e93\n                options.AddDbPool<FurionDbContext>(DbProvider.SqlServer, connectionString:"\u8fde\u63a5\u5b57\u7b26\u4e32");\n\n                // \u914d\u7f6e\u591a\u4e2a\u6570\u636e\u5e93\uff0c\u591a\u4e2a\u6570\u636e\u5e93\u5fc5\u987b\u6307\u5b9a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\n                options.AddDbPool<SqliteDbContext, SqliteDbContextLocaotr>(DbProvider.Sqlite, connectionString:"\u8fde\u63a5\u5b57\u7b26\u4e32");\n            });\n        }\n    }\n}\n')),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u65b0\u7248 MySQL \u6ce8\u610f")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"MySQL")," \u5728\u65b0\u7248\u672c\u5305\u4e2d\u6ce8\u518c\u6709\u6240\u4fee\u6539\uff0c\u6240\u4ee5\u6ce8\u518c\u65b9\u5f0f\u4e3a\uff1a"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-cs"},'services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurionDbContext>($"{DbProvider.MySql}@8.0.22");\n});\n')))),Object(r.b)("h3",{id:"9015-code-first-\u8bf4\u660e"},"9.0.1.5 ",Object(r.b)("inlineCode",{parentName:"h3"},"Code First")," \u8bf4\u660e"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u9ed8\u8ba4\u6570\u636e\u8fc1\u79fb\u7684\u7a0b\u5e8f\u96c6\u4e3a\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"Furion.Database.Migrations"),"\uff0c\u6240\u4ee5\u5982\u679c\u60a8\u6539\u4e86\u7a0b\u5e8f\u96c6\u540d\u79f0\u6216\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"Nuget")," \u65b9\u5f0f\u5b89\u88c5\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u5305\uff0c\u5219\u9700\u8981\u914d\u7f6e\u8fc1\u79fb\u7a0b\u5e8f\u96c6\u540d\u79f0\uff1a"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:"{4}","{4}":!0},'services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurionDbContext>(DbProvider.Sqlite);\n}, "\u81ea\u5b9a\u4e49\u8fc1\u79fb\u540d\u79f0");\n')),Object(r.b)("p",{parentName:"div"},"\u53e6\u5916\uff0c\u5982\u679c\u5e94\u7528\u4e2d\u914d\u7f6e\u4e86\u591a\u4e2a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u90a3\u4e48\u6240\u6709\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"\u8fc1\u79fb\u547d\u4ee4")," \u90fd\u9700\u8981\u6307\u5b9a ",Object(r.b)("inlineCode",{parentName:"p"},"-Context \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u540d\u79f0")," \u53c2\u6570\u3002\u5982\uff1a"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"Add-Migration v1.0.0 -Context FurionDbContext\n")))),Object(r.b)("h2",{id:"902-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.0.2 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(r.b)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}p.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||r;return n?i.a.createElement(u,b(b({ref:t},l),{},{components:n})):i.a.createElement(u,b({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);