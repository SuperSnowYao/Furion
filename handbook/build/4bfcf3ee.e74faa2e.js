(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{108:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),i=(t(0),t(191)),s=(t(189),t(198)),o=t(199),c=t(192),l={id:"dbcontext-hight-query",title:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",sidebar_label:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c"},u={unversionedId:"dbcontext-hight-query",id:"dbcontext-hight-query",isDocsHomePage:!1,title:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",description:"9.11.1 \u5173\u8054\u6570\u636e\u6a21\u578b",source:"@site/docs\\dbcontext-high-query.mdx",slug:"/dbcontext-hight-query",permalink:"/furion/docs/dbcontext-hight-query",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/dbcontext-high-query.mdx",version:"current",lastUpdatedBy:"zhoujintao",lastUpdatedAt:1609903654,sidebar_label:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",sidebar:"docs",previous:{title:"9.10 \u67e5\u8be2\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-query"},next:{title:"9.12 \u89c6\u56fe\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-view"}},b=[{value:"9.11.1 \u5173\u8054\u6570\u636e\u6a21\u578b",id:"9111-\u5173\u8054\u6570\u636e\u6a21\u578b",children:[]},{value:"9.11.2 \u4e00\u5bf9\u4e00\u67e5\u8be2",id:"9112-\u4e00\u5bf9\u4e00\u67e5\u8be2",children:[]},{value:"9.11.3 \u4e00\u5bf9\u591a\u67e5\u8be2",id:"9113-\u4e00\u5bf9\u591a\u67e5\u8be2",children:[]},{value:"9.11.4 \u591a\u5bf9\u591a\u67e5\u8be2",id:"9114-\u591a\u5bf9\u591a\u67e5\u8be2",children:[]},{value:"9.11.5 \u8054\u8868\u67e5\u8be2",id:"9115-\u8054\u8868\u67e5\u8be2",children:[{value:"9.11.5.1 \u5185\u8fde\u63a5 <code>Inner Join</code>",id:"91151-\u5185\u8fde\u63a5-inner-join",children:[]},{value:"9.11.5.2 \u5de6\u8fde\u63a5 <code>Left Join</code>",id:"91152-\u5de6\u8fde\u63a5-left-join",children:[]},{value:"9.11.5.3 \u53f3\u8fde\u63a5 <code>Right Join</code>",id:"91153-\u53f3\u8fde\u63a5-right-join",children:[]}]},{value:"9.11.6 \u5206\u7ec4\u67e5\u8be2",id:"9116-\u5206\u7ec4\u67e5\u8be2",children:[]},{value:"9.11.7 \u5408\u5e76\u7ed3\u679c\u96c6",id:"9117-\u5408\u5e76\u7ed3\u679c\u96c6",children:[]},{value:"9.11.8 \u67e5\u8be2\u6392\u5e8f",id:"9118-\u67e5\u8be2\u6392\u5e8f",children:[{value:"9.11.8.1 \u6b63\u5e8f",id:"91181-\u6b63\u5e8f",children:[]},{value:"9.11.8.2 \u5012\u5e8f",id:"91182-\u5012\u5e8f",children:[]},{value:"9.11.8.3 \u6df7\u5408\u5012\u5e8f",id:"91183-\u6df7\u5408\u5012\u5e8f",children:[]}]},{value:"9.11.9 \u9012\u5f52\u67e5\u8be2",id:"9119-\u9012\u5f52\u67e5\u8be2",children:[]},{value:"9.11.10 \u52a8\u6001 <code>Sql</code> \u67e5\u8be2",id:"91110-\u52a8\u6001-sql-\u67e5\u8be2",children:[{value:"9.11.10.1 \u52a8\u6001 <code>Sql</code>",id:"911101-\u52a8\u6001-sql",children:[]},{value:"9.11.10.2 \u52a8\u6001 <code>Lambda</code>",id:"911102-\u52a8\u6001-lambda",children:[]}]},{value:"9.11.11 \u65f6\u6001\u67e5\u8be2",id:"91111-\u65f6\u6001\u67e5\u8be2",children:[]},{value:"9.11.12 \u6027\u80fd\u4f18\u5316",id:"91112-\u6027\u80fd\u4f18\u5316",children:[]},{value:"9.11.13 \u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50",id:"91113-\u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50",children:[]},{value:"9.11.14 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"91114-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],m={toc:b};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(c.a,{mdxType:"JoinGroup"}),Object(i.b)("h2",{id:"9111-\u5173\u8054\u6570\u636e\u6a21\u578b"},"9.11.1 \u5173\u8054\u6570\u636e\u6a21\u578b"),Object(i.b)(s.a,{defaultValue:"person",values:[{label:"Person",value:"person"},{label:"PersonDetail",value:"person-detail"},{label:"Children",value:"children"},{label:"Post",value:"post"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"person",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{38,43,48}","{38,43,48}":!0}),"using Furion.DatabaseAccessor;\nusing System;\nusing System.Collections.Generic;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace Furion.Core\n{\n    public class Person : Entity\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Person()\n        {\n            CreatedTime = DateTime.Now;\n            IsDeleted = false;\n        }\n\n        /// <summary>\n        /// \u59d3\u540d\n        /// </summary>\n        [MaxLength(32)]\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n\n        /// <summary>\n        /// \u4f4f\u5740\n        /// </summary>\n        public string Address { get; set; }\n\n        /// <summary>\n        /// \u4ece\u8868\n        /// </summary>\n        public PersonDetail PersonDetail { get; set; }\n\n        /// <summary>\n        /// \u4e00\u5bf9\u591a\n        /// </summary>\n        public ICollection<Children> Childrens { get; set; }\n\n        /// <summary>\n        /// \u591a\u5bf9\u591a\n        /// </summary>\n        public ICollection<Post> Posts { get; set; }\n    }\n}\n"))),Object(i.b)(o.a,{value:"person-detail",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{25}","{25}":!0}),"using Furion.DatabaseAccessor;\n\nnamespace Furion.Core\n{\n    public class PersonDetail : EntityBase\n    {\n        /// <summary>\n        /// \u7535\u8bdd\u53f7\u7801\n        /// </summary>\n        public string PhoneNumber { get; set; }\n\n        /// <summary>\n        /// QQ \u53f7\u7801\n        /// </summary>\n        public string QQ { get; set; }\n\n        /// <summary>\n        /// \u5916\u952e\n        /// </summary>\n        public int PersonId { get; set; }\n\n        /// <summary>\n        /// \u4e3b\u8868\n        /// </summary>\n        public Person Person { get; set; }\n    }\n}\n"))),Object(i.b)(o.a,{value:"children",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{35}","{35}":!0}),"using Furion.DatabaseAccessor;\nusing System;\n\nnamespace Furion.Core\n{\n    public class Children : Entity\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Children()\n        {\n            CreatedTime = DateTime.Now;\n            IsDeleted = false;\n        }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u6027\u522b\n        /// </summary>\n        public Gender Gender { get; set; }\n\n        /// <summary>\n        /// \u5916\u952e\n        /// </summary>\n        public int PersonId { get; set; }\n\n        /// <summary>\n        /// \u4e3b\u8868\n        /// </summary>\n        public Person Person { get; set; }\n    }\n}\n"))),Object(i.b)(o.a,{value:"post",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{26}","{26}":!0}),"using Furion.DatabaseAccessor;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Furion.Core\n{\n    public class Post : Entity\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Post()\n        {\n            CreatedTime = DateTime.Now;\n            IsDeleted = false;\n        }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// Person \u96c6\u5408\n        /// </summary>\n        public ICollection<Person> Persons { get; set; }\n    }\n}\n")))),Object(i.b)("h2",{id:"9112-\u4e00\u5bf9\u4e00\u67e5\u8be2"},"9.11.2 \u4e00\u5bf9\u4e00\u67e5\u8be2"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// \u793a\u4f8b\u4e00\nvar person = repository.Include(u => u.Detail);\n\n// \u793a\u4f8b\u4e8c\nvar person = repository.Include(u => u.Detail)\n                       .Include(u => u.Post);\n\n// \u793a\u4f8b\u4e09\nvar person = repository.Include(u => u.Detail)\n                            .ThenInclude(d => d.Review)\n                       .Include(u => u.Post);\n\n// \u793a\u4f8b\u56db\nvar person = repository.Include(u => u.Detail.Where(d => d.Id > 10).OrderBy(d => d.Name))\n                            .ThenInclude(d => d.Review)\n                       .Include(u => u.Post);\n\n// \u793a\u4f8b\u4e94\nvar person = repository.IncludeIf(!string.IsNullOrEmpty(keyword), u => u.Detail);\n\n// \u793a\u4f8b\u516d\nvar person = repository.IncludeIf(!string.IsNullOrEmpty(keyword), u => u.Detail)\n                       .IncludeIf(age > 18), u => u.Detail.Where(d => d.Id > 10).OrderBy(d => d.Name))\n                            .ThenInclude(d => d.Review)\n                       .Include(u => u.Post);\n")),Object(i.b)("h2",{id:"9113-\u4e00\u5bf9\u591a\u67e5\u8be2"},"9.11.3 \u4e00\u5bf9\u591a\u67e5\u8be2"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// \u793a\u4f8b\u4e00\nvar person = repository.Include(u => u.Childrens);\n\n// \u53c2\u8003 \u4e00\u5bf9\u4e00 \u4f8b\u5b50\n")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u522b\u8bf4\u660e")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"\u4e00\u5bf9\u4e00")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"\u4e00\u5bf9\u591a")," \u67e5\u8be2\u65b9\u6cd5\u4e00\u6837\uff0c\u552f\u4e00\u7684\u533a\u522b\u662f\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"\u4e00\u5bf9\u591a")," \u91c7\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"ICollection<TEntity>")," \u5b9a\u4e49\u5c5e\u6027\u3002"))),Object(i.b)("h2",{id:"9114-\u591a\u5bf9\u591a\u67e5\u8be2"},"9.11.4 \u591a\u5bf9\u591a\u67e5\u8be2"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// \u793a\u4f8b\u4e00\nvar person = repository.Include(u => u.Posts);\n\n// \u53c2\u8003 \u4e00\u5bf9\u4e00 \u4f8b\u5b50\n")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u522b\u8bf4\u660e")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"\u4e00\u5bf9\u4e00")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"\u591a\u5bf9\u591a")," \u67e5\u8be2\u65b9\u6cd5\u4e00\u6837\uff0c\u552f\u4e00\u7684\u533a\u522b\u662f\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"\u591a\u5bf9\u591a")," \u91c7\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"ICollection<TEntity>")," \u5b9a\u4e49\u5c5e\u6027\u3002"))),Object(i.b)("h2",{id:"9115-\u8054\u8868\u67e5\u8be2"},"9.11.5 \u8054\u8868\u67e5\u8be2"),Object(i.b)("h3",{id:"91151-\u5185\u8fde\u63a5-inner-join"},"9.11.5.1 \u5185\u8fde\u63a5 ",Object(i.b)("inlineCode",{parentName:"h3"},"Inner Join")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"var query = from p in _personRepository.AsQueryable()\n            join d in _personDetailRepository.AsQueryable() on p.Id equals d.PersonId\n            select new PersonDto\n            {\n                PhoneNumber = p.PersonDetail.PhoneNumber,\n                Address = p.Address,\n                Age = p.Age,\n                Name = p.Name,\n                Id = p.Id,\n                QQ = p.PersonDetail.QQ\n            };\n")),Object(i.b)("h3",{id:"91152-\u5de6\u8fde\u63a5-left-join"},"9.11.5.2 \u5de6\u8fde\u63a5 ",Object(i.b)("inlineCode",{parentName:"h3"},"Left Join")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{2,3}","{2,3}":!0}),"var query = from p in _personRepository.AsQueryable()\n            join d in _personDetailRepository.AsQueryable() on p.Id equals d.PersonId into results\n            from d in results.DefaultIfEmpty()\n            select new PersonDto\n            {\n                PhoneNumber = p.PersonDetail.PhoneNumber,\n                Address = p.Address,\n                Age = p.Age,\n                Name = p.Name,\n                Id = p.Id,\n                QQ = p.PersonDetail.QQ\n            };\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u5c0f\u63d0\u793a")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"Left Join"))," \u548c ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"Inner Join"))," \u4e0d\u540c\u7684\u662f\uff0c",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"Left Join"))," \u4f1a\u5148\u5c06\u7ed3\u679c ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"into"))," \u5230\u65b0\u7684\u7ed3\u679c\u96c6\u7136\u540e\u518d\u67e5\u8be2\uff0c\u5e76\u8c03\u7528 ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"DefaultIfEmpty()"))," \u65b9\u6cd5\u3002"))),Object(i.b)("h3",{id:"91153-\u53f3\u8fde\u63a5-right-join"},"9.11.5.3 \u53f3\u8fde\u63a5 ",Object(i.b)("inlineCode",{parentName:"h3"},"Right Join")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Right Join")," \u53ea\u9700\u8981\u5c06 ",Object(i.b)("inlineCode",{parentName:"p"},"Left Join")," \u4e3b\u4ece\u8868\u4f4d\u7f6e\u66f4\u6362\u5373\u53ef\u3002"),Object(i.b)("h2",{id:"9116-\u5206\u7ec4\u67e5\u8be2"},"9.11.6 \u5206\u7ec4\u67e5\u8be2"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable().GroupBy(x => new { x.Column1, x.Column2 });\n\n// \u793a\u4f8b\u4e8c\nvar query = from student in repository.AsQueryable()\n            group student by repository2.AsQueryable() into dateGroup\n            select new ResultData()\n            {\n                Key = dateGroup.Key,\n                Value = dateGroup.Count()\n            };\n\n// \u793a\u4f8b\u4e09\nvar query = from a in repository.AsQueryable()\n            join b in repository2.AsQueryable() on a.Id equals b.Aid\n            join c in repository3.AsQueryable() on c.id equals b.Bid\n            group emp by new { emp.Age, emp.Sex } into g\n            select new {\n                Peo = g.Key,\n                Count = g.Count()\n            };\n")),Object(i.b)("h2",{id:"9117-\u5408\u5e76\u7ed3\u679c\u96c6"},"9.11.7 \u5408\u5e76\u7ed3\u679c\u96c6"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"var query = repository.AsQueryable(u => u.Id > 10)\n                      .Union(\n                          repository2.AsQueryable(u => u.Id <= 10)\n                      );\n")),Object(i.b)("h2",{id:"9118-\u67e5\u8be2\u6392\u5e8f"},"9.11.8 \u67e5\u8be2\u6392\u5e8f"),Object(i.b)("h3",{id:"91181-\u6b63\u5e8f"},"9.11.8.1 \u6b63\u5e8f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .OrderBy(u => u.Id);\n\n// \u793a\u4f8b\u4e8c\nvar query =repository.AsQueryable()\n                     .OrderBy(u => u.Id)\n                     .ThenBy(u => u.Name);\n")),Object(i.b)("h3",{id:"91182-\u5012\u5e8f"},"9.11.8.2 \u5012\u5e8f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .OrderByDescending(u => u.Id);\n\n// \u793a\u4f8b\u4e8c\nvar query =repository.AsQueryable()\n                     .OrderByDescending(u => u.Id)\n                     .ThenByDescending(u => u.Name);\n")),Object(i.b)("h3",{id:"91183-\u6df7\u5408\u5012\u5e8f"},"9.11.8.3 \u6df7\u5408\u5012\u5e8f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .OrderBy(u => u.Id)\n                      .OrderByDescending(u => u.Name)\n                      .ThenBy(u => u.Age);\n")),Object(i.b)("h2",{id:"9119-\u9012\u5f52\u67e5\u8be2"},"9.11.9 \u9012\u5f52\u67e5\u8be2"),Object(i.b)(s.a,{defaultValue:"city",values:[{label:"City",value:"city"},{label:"CityDto",value:"citydto"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"city",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{12,36,41,49-55}","{12,36,41,49-55}":!0}),'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Furion.Core\n{\n    /// <summary>\n    /// \u57ce\u5e02\n    /// </summary>\n    public class City : Entity, IEntityTypeBuilder<City>, IEntitySeedData<City>\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public City()\n        {\n            CreatedTime = DateTime.Now;\n            IsDeleted = false;\n        }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u4e0a\u7ea7Id\n        /// </summary>\n        public int? ParentId { get; set; }\n\n        /// <summary>\n        /// \u4e0a\u7ea7\n        /// </summary>\n        public virtual City Parent { get; set; }\n\n        /// <summary>\n        /// \u5b50\u96c6\n        /// </summary>\n        public virtual ICollection<City> Childrens { get; set; }\n\n        /// <summary>\n        /// \u914d\u7f6e\u5b9e\u4f53\u5173\u7cfb\n        /// </summary>\n        /// <param name="entityBuilder"></param>\n        /// <param name="dbContext"></param>\n        /// <param name="dbContextLocator"></param>\n        public void Configure(EntityTypeBuilder<City> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            entityBuilder\n                .HasMany(x => x.Childrens)\n                .WithOne(x => x.Parent)\n                .HasForeignKey(x => x.ParentId)\n                .OnDelete(DeleteBehavior.ClientSetNull); // \u5fc5\u987b\u8bbe\u7f6e\u8fd9\u4e00\u884c\n        }\n\n        /// <summary>\n        /// \u79cd\u5b50\u6570\u636e\n        /// </summary>\n        /// <param name="dbContext"></param>\n        /// <param name="dbContextLocator"></param>\n        /// <returns></returns>\n        public IEnumerable<City> HasData(DbContext dbContext, Type dbContextLocator)\n        {\n            return new List<City>\n            {\n                new City { Id=1,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u4e2d\u56fd" },\n                new City { Id=2,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u5e7f\u4e1c\u7701",ParentId=1 },\n                new City { Id=3,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u4e2d\u5c71\u5e02",ParentId=2 },\n                new City { Id=4,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u73e0\u6d77\u5e02",ParentId=2 },\n                new City { Id=5,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u6d59\u6c5f\u7701",ParentId=1 },\n            };\n        }\n    }\n}\n'))),Object(i.b)(o.a,{value:"citydto",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"using System.Collections.Generic;\n\nnamespace Furion.Application.Persons\n{\n    public class CityDto\n    {\n        /// <summary>\n        /// \u9010\u6e10\n        /// </summary>\n        public int Id { get; set; }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5b50\u96c6\n        /// </summary>\n        public ICollection<CityDto> Childrens { get; set; }\n    }\n}\n")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"var cities = await repository.AsQueryable()\n                             .Include(u => u.Childrens)\n                             .Where(u => u.Id == 1)\n                             .ToListAsync();\n\nvar dtos = cities.Adapt<List<CityDto>>();\n")),Object(i.b)("h2",{id:"91110-\u52a8\u6001-sql-\u67e5\u8be2"},"9.11.10 \u52a8\u6001 ",Object(i.b)("inlineCode",{parentName:"h2"},"Sql")," \u67e5\u8be2"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u9ed8\u8ba4\u4e0d\u652f\u6301 \u52a8\u6001 ",Object(i.b)("inlineCode",{parentName:"p"},"Sql")," \u67e5\u8be2\u529f\u80fd\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u901a\u8fc7\u7b2c\u4e09\u65b9\u5b9e\u73b0\uff1a"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u9879\u76ee\u5c42\u5b89\u88c5 ",Object(i.b)("inlineCode",{parentName:"p"},"System.Linq.Dynamic.Core")," \u5305 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zzzprojects/System.Linq.Dynamic.Core"}),"https://github.com/zzzprojects/System.Linq.Dynamic.Core")),Object(i.b)("h3",{id:"911101-\u52a8\u6001-sql"},"9.11.10.1 \u52a8\u6001 ",Object(i.b)("inlineCode",{parentName:"h3"},"Sql")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .Where("City == @0 and Orders.Count >= @1", "China", 10)\n                      .OrderBy("CompanyName")\n                      .Select("new(CompanyName as Name, Phone)");\n\n// \u793a\u4f8b\u4e8c\nvar list = repository.AsQueryable()\n                     .Where("Name.Contains(@0)","Furion")\n                     .ToList();\n\n// \u793a\u4f8b\u4e09\uff0c\u652f\u6301 ? \u8bed\u6cd5\nvar customers = repository.AsQueryable()\n                          .Include(c => c.Location)\n                          .Where(c => c.Location?.Name == "test") // \u6ce8\u610f Location?.Name\n                          .ToList();\n')),Object(i.b)("h3",{id:"911102-\u52a8\u6001-lambda"},"9.11.10.2 \u52a8\u6001 ",Object(i.b)("inlineCode",{parentName:"h3"},"Lambda")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// \u793a\u4f8b\u4e00\nvar x = Expression.Parameter(typeof(int), "x");\nvar y = Expression.Parameter(typeof(int), "y");\nvar e = DynamicExpressionParser\n            .ParseLambda(new ParameterExpression[] { x, y }, null, "(x + y) * 2");\n\n// \u793a\u4f8b\u4e8c\nvar e = DynamicExpressionParser.ParseLambda(\n        typeof(Customer), typeof(bool),\n        "City = @0 and Orders.Count >= @1",\n        "London", 10);\n')),Object(i.b)("h2",{id:"91111-\u65f6\u6001\u67e5\u8be2"},"9.11.11 \u65f6\u6001\u67e5\u8be2"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u8fd8\u63d0\u4f9b\u4e86\u65f6\u6001\u67e5\u8be2\u529f\u80fd\uff0c\u53ef\u4ee5\u67e5\u8be2\u7279\u5b9a\u65f6\u95f4\u7684\u6570\u636e\uff0c\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'var result = rep.Entities\n    .AsTemporalOf(DateTime.UtcNow.AddDays(-1))\n    .Include(i=> i.Company)\n    .FirstOrDefault(i => i.Name == "Furion");\n')),Object(i.b)("p",null,"\u53e6\u5916\u63d0\u4f9b\u4e86\u591a\u4e2a\u65f6\u6001\u67e5\u8be2\u65b9\u6cd5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"AsTemporalAll()"),Object(i.b)("li",{parentName:"ul"},"AsTemporalAsOf(date)"),Object(i.b)("li",{parentName:"ul"},"AsTemporalFrom(startDate, endDate)"),Object(i.b)("li",{parentName:"ul"},"AsTemporalBetween(startDate, endDate)"),Object(i.b)("li",{parentName:"ul"},"AsTemporalContained(startDate, endDate)")),Object(i.b)("h2",{id:"91112-\u6027\u80fd\u4f18\u5316"},"9.11.12 \u6027\u80fd\u4f18\u5316"),Object(i.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"EF Core")," \u4f1a\u8ddf\u8e2a\u6240\u6709\u5b9e\u4f53\uff0c\u4e5f\u5c31\u662f\u4efb\u4f55\u6570\u636e\u6539\u53d8\u90fd\u4f1a\u5f15\u8d77\u6570\u636e\u68c0\u67e5\uff0c\u6240\u4ee5\u5982\u679c\u53ea\u505a\u67e5\u8be2\u64cd\u4f5c\uff0c\u5efa\u8bae\u5173\u95ed\u5b9e\u4f53\u8ddf\u8e2a\u529f\u80fd\u3002"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u9ad8\u6027\u80fd\u5b9e\u4f53\u96c6\u5408\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DetachedEntities"),"\uff1a\u8131\u8f68/\u4e0d\u8ffd\u8e2a\u5b9e\u4f53"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AsQueryable()"),"\uff1a\u4e0d\u8ffd\u8e2a\u5b9e\u4f53"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Entities.AsNoTracking()"),"\uff1a\u624b\u52a8\u5173\u95ed\u5b9e\u4f53\u8ffd\u8e2a")),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"EF Core")," \u4e2d\uff0c\u590d\u6742\u67e5\u8be2\u603b\u662f\u4f1a\u751f\u6210\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"sql"),"\uff0c\u4e5f\u5c31\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"AsSingleQuery()"),"\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"AsSplitQuery()")," \u5207\u5272\u6210\u591a\u4e2a\u67e5\u8be2\u3002"),Object(i.b)("h2",{id:"91113-\u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50"},"9.11.13 \u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Furion.Core\n{\n    public class Person : Entity, IEntityTypeBuilder<Person>\n    {\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u914d\u7f6e\u5b9e\u4f53\u5173\u7cfb\n        /// </summary>\n        /// <param name="entityBuilder"></param>\n        /// <param name="dbContext"></param>\n        /// <param name="dbContextLocator"></param>\n        public void Configure(EntityTypeBuilder<City> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            entityBuilder.ToSqlQuery(\n              @"select * from dbo.person.2020-09-19\n                union all\n                select * from dbo.person.2020-09-20");\n        }\n    }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"var posts = repository.Where(u => u.Id > 10).ToList();\n")),Object(i.b)("h2",{id:"91114-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.11.14 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))))}d.isMDXComponent=!0},189:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s}));var a=t(21),r=t(190);function i(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(a.default)();return{withBaseUrl:(t,a)=>function(e,n,t,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(a)return n+t;const s=t.startsWith(n)?t:n+t.replace(/^\//,"");return i?e+s:s}(n,e,t,a)}}function s(e,n={}){const{withBaseUrl:t}=i();return t(e,n)}},190:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))},191:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return p}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(t),d=a,p=b["".concat(s,".").concat(d)]||b[d]||m[d]||i;return t?r.a.createElement(p,o(o({ref:n},l),{},{components:t})):r.a.createElement(p,o({ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},192:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t.n(a),i=t(189);t(55);function s(){const[e,n]=Object(a.useState)(!1);return r.a.createElement("div",{className:"furion-join-group"},e&&r.a.createElement("img",{src:Object(i.a)("img/dotnetchina2.jpg")}),r.a.createElement("button",{onClick:()=>n(!e)},"\u52a0\u5165QQ\u4ea4\u6d41\u7fa4"))}},193:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},195:function(e,n,t){"use strict";var a=t(0),r=t(196);n.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},196:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)(void 0);n.a=r},198:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(195),s=t(193),o=t(56),c=t.n(o);const l=37,u=39;n.a=function(e){const{lazy:n,block:t,defaultValue:o,values:b,groupId:m,className:d}=e,{tabGroupChoices:p,setTabGroupChoices:y}=Object(i.a)(),[O,j]=Object(a.useState)(o),g=a.Children.toArray(e.children);if(null!=m){const e=p[m];null!=e&&e!==O&&b.some(n=>n.value===e)&&j(e)}const N=e=>{j(e),null!=m&&y(m,e)},h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},d)},b.map(({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case u:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case l:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(h,e.target,e)},onFocus:()=>N(e),onClick:()=>{N(e)}},n))),n?Object(a.cloneElement)(g.filter(e=>e.props.value===O)[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((e,n)=>Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==O}))))}},199:function(e,n,t){"use strict";var a=t(3),r=t(0),i=t.n(r);n.a=function({children:e,hidden:n,className:t}){return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:t}),e)}}}]);