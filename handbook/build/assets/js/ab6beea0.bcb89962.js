(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),r=(n(0),n(204)),c={id:"http",title:"19. \u8fdc\u7a0b\u8bf7\u6c42",sidebar_label:"19. \u8fdc\u7a0b\u8bf7\u6c42 (HttpClient)"},l={unversionedId:"http",id:"http",isDocsHomePage:!1,title:"19. \u8fdc\u7a0b\u8bf7\u6c42",description:"19.1 \u5173\u4e8e\u8fdc\u7a0b\u8bf7\u6c42",source:"@site/docs/http.mdx",slug:"/http",permalink:"/furion/docs/http",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/http.mdx",version:"current",lastUpdatedBy:"\u6211\u4e56\u7684\u9614\u7231",lastUpdatedAt:1616054128,formattedLastUpdatedAt:"3/18/2021",sidebar_label:"19. \u8fdc\u7a0b\u8bf7\u6c42 (HttpClient)",sidebar:"docs",previous:{title:"18. \u65e5\u5fd7\u8bb0\u5f55",permalink:"/furion/docs/logging"},next:{title:"20. \u6570\u636e\u52a0\u89e3\u5bc6",permalink:"/furion/docs/encryption"}},b=[{value:"19.1 \u5173\u4e8e\u8fdc\u7a0b\u8bf7\u6c42",id:"191-\u5173\u4e8e\u8fdc\u7a0b\u8bf7\u6c42",children:[]},{value:"19.2 \u8fdc\u7a0b\u8bf7\u6c42\u7684\u4f5c\u7528",id:"192-\u8fdc\u7a0b\u8bf7\u6c42\u7684\u4f5c\u7528",children:[]},{value:"19.3 \u57fa\u7840\u4f7f\u7528",id:"193-\u57fa\u7840\u4f7f\u7528",children:[{value:"19.3.1 \u6ce8\u518c\u670d\u52a1",id:"1931-\u6ce8\u518c\u670d\u52a1",children:[]},{value:"19.3.2 \u4f7f\u7528\u65b9\u5f0f",id:"1932-\u4f7f\u7528\u65b9\u5f0f",children:[]}]},{value:"19.4 \u4f7f\u7528\u793a\u4f8b",id:"194-\u4f7f\u7528\u793a\u4f8b",children:[{value:"19.4.1 \u5b57\u7b26\u4e32\u65b9\u5f0f",id:"1941-\u5b57\u7b26\u4e32\u65b9\u5f0f",children:[]},{value:"19.4.2 \u4ee3\u7406\u65b9\u5f0f",id:"1942-\u4ee3\u7406\u65b9\u5f0f",children:[]}]},{value:"19.5 \u4ee3\u7406\u9ad8\u7ea7\u5e94\u7528",id:"195-\u4ee3\u7406\u9ad8\u7ea7\u5e94\u7528",children:[{value:"19.5.1 \u53c2\u6570\u5904\u7406",id:"1951-\u53c2\u6570\u5904\u7406",children:[]},{value:"19.5.2 \u53c2\u6570\u9a8c\u8bc1",id:"1952-\u53c2\u6570\u9a8c\u8bc1",children:[]},{value:"19.5.3 \u8fd4\u56de\u503c\u5904\u7406",id:"1953-\u8fd4\u56de\u503c\u5904\u7406",children:[]},{value:"19.5.4 \u8bf7\u6c42/\u54cd\u5e94\u62e6\u622a",id:"1954-\u8bf7\u6c42\u54cd\u5e94\u62e6\u622a",children:[]},{value:"19.5.5 <code>Body</code> \u53c2\u6570\u5e8f\u5217\u5316\u95ee\u9898",id:"1955-body-\u53c2\u6570\u5e8f\u5217\u5316\u95ee\u9898",children:[]},{value:"19.5.6 <code>Body</code> \u5185\u5bb9\u914d\u7f6e",id:"1956-body-\u5185\u5bb9\u914d\u7f6e",children:[]},{value:"19.5.7 \u591a\u4e2a\u8bf7\u6c42\u5ba2\u6237\u7aef\u914d\u7f6e",id:"1957-\u591a\u4e2a\u8bf7\u6c42\u5ba2\u6237\u7aef\u914d\u7f6e",children:[]}]},{value:"19.6 \u4ee3\u7406\u5185\u7f6e\u7279\u6027",id:"196-\u4ee3\u7406\u5185\u7f6e\u7279\u6027",children:[{value:"19.6.1 \u63a5\u53e3\u7279\u6027",id:"1961-\u63a5\u53e3\u7279\u6027",children:[]},{value:"19.6.2 \u65b9\u6cd5\u7279\u6027",id:"1962-\u65b9\u6cd5\u7279\u6027",children:[]},{value:"19.6.3 \u65b9\u6cd5\u53c2\u6570\u7279\u6027",id:"1963-\u65b9\u6cd5\u53c2\u6570\u7279\u6027",children:[]}]},{value:"19.7 \u5173\u4e8e\u540c\u6b65\u8bf7\u6c42",id:"197-\u5173\u4e8e\u540c\u6b65\u8bf7\u6c42",children:[]},{value:"19.8 \u5f02\u5e38\u5904\u7406",id:"198-\u5f02\u5e38\u5904\u7406",children:[]},{value:"19.9 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"199-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],p={toc:b};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"191-\u5173\u4e8e\u8fdc\u7a0b\u8bf7\u6c42"},"19.1 \u5173\u4e8e\u8fdc\u7a0b\u8bf7\u6c42"),Object(r.b)("p",null,"\u5728\u4e92\u8054\u7f51\u5927\u6570\u636e\u7684\u9a71\u52a8\u4e0b\uff0c\u5e73\u53f0\u6216\u7cfb\u7edf\u514d\u4e0d\u4e86\u9700\u8981\u548c\u7b2c\u4e09\u65b9\u8fdb\u884c\u6570\u636e\u4ea4\u4e92\uff0c\u800c\u7b2c\u4e09\u65b9\u5f80\u5f80\u63d0\u4f9b\u4e86 ",Object(r.b)("inlineCode",{parentName:"p"},"RESTful API")," \u7ed3\u679c\u89c4\u8303\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"Http")," \u8bf7\u6c42\u7b2c\u4e09\u65b9\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4f20\u8f93\u4ea4\u4e92\u3002"),Object(r.b)("p",null,"\u4e5f\u5c31\u662f\u672c\u7ae0\u8282\u6240\u8bf4\u7684\u8fdc\u7a0b\u8bf7\u6c42\u3002"),Object(r.b)("h2",{id:"192-\u8fdc\u7a0b\u8bf7\u6c42\u7684\u4f5c\u7528"},"19.2 \u8fdc\u7a0b\u8bf7\u6c42\u7684\u4f5c\u7528"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u8de8\u7cfb\u7edf\u3001\u8de8\u8bbe\u5907\u901a\u4fe1"),Object(r.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u591a\u4e2a\u7cfb\u7edf\u6570\u636e\u4f20\u8f93\u4ea4\u4e92"),Object(r.b)("li",{parentName:"ul"},"\u8de8\u7f16\u7a0b\u8bed\u8a00\u534f\u540c\u5f00\u53d1")),Object(r.b)("h2",{id:"193-\u57fa\u7840\u4f7f\u7528"},"19.3 \u57fa\u7840\u4f7f\u7528"),Object(r.b)("h3",{id:"1931-\u6ce8\u518c\u670d\u52a1"},"19.3.1 \u6ce8\u518c\u670d\u52a1"),Object(r.b)("p",null,"\u4f7f\u7528\u4e4b\u524d\u9700\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Startup.cs")," \u6ce8\u518c ",Object(r.b)("inlineCode",{parentName:"p"},"\u8fdc\u7a0b\u8bf7\u6c42\u670d\u52a1")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:"{3}","{3}":!0},"public void ConfigureServices(IServiceCollection services)\n{\n    services.AddRemoteRequest();\n}\n")),Object(r.b)("h3",{id:"1932-\u4f7f\u7528\u65b9\u5f0f"},"19.3.2 \u4f7f\u7528\u65b9\u5f0f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IHttpDispatchProxy")," \u4ee3\u7406\u65b9\u5f0f")),Object(r.b)("p",null,"\u5b9a\u4e49\u4ee3\u7406\u8bf7\u6c42\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"\u63a5\u53e3")," \u5e76\u7ee7\u627f ",Object(r.b)("inlineCode",{parentName:"p"},"IHttpDispatchProxy")," \u63a5\u53e3"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:"{2}","{2}":!0},'[Host("http://47.100.247.61/", 5000)]\npublic interface IHttp : IHttpDispatchProxy\n{\n    [Get("api/sysdata/categories")]\n    Task<RESTfulResult<List<Data>>> GetCategoryAsync();\n}\n')),Object(r.b)("p",null,"\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"\u63a5\u53e3")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:"{9,16}","{9,16}":!0},"using Furion.DynamicApiController;\nusing Furion.RemoteRequest;\n\nnamespace Furion.Application\n{\n    public class RemoteRequestService : IDynamicApiController\n    {\n        private readonly IHttp _http;\n        public RemoteRequestService(IHttp http)\n        {\n            _http = http;\n        }\n\n        public async Task GetData()\n        {\n            var data = await _http.GetCategoryAsync();\n        }\n    }\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\u65b9\u5f0f")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'var data = await "http://47.100.247.61/api/sysdata/categories".GetAsAsync<object>();\n')),Object(r.b)("h2",{id:"194-\u4f7f\u7528\u793a\u4f8b"},"19.4 \u4f7f\u7528\u793a\u4f8b"),Object(r.b)("h3",{id:"1941-\u5b57\u7b26\u4e32\u65b9\u5f0f"},"19.4.1 \u5b57\u7b26\u4e32\u65b9\u5f0f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[METHOD]Async/[METHOD]AsAsync")," \u65b9\u5f0f")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'// ============ GET \u8bf7\u6c42 ============\n\n// \u8fd4\u56de HttpResponseMessage \u5bf9\u8c61\nvar response = await "https://www.furion.pro/data".GetAsync();\n\n// \u8fd4\u56de\u7279\u5b9a\u7c7b\u578b\u5bf9\u8c61\nvar data = await "http://47.100.247.61/api/sysdata/categories".GetAsAsync<object>();\n\n// \u8bbe\u7f6e\u8bf7\u6c42\u62a5\u6587\u5934\nvar data = await "http://47.100.247.61/api/sysdata/categories".GetAsAsync<object>(headers: new Dictionary<string, string>{\n    {"ipaddress", "127.0.0.1"}\n});\n\n// \u8bbe\u7f6e\u8bf7\u6c42\u62e6\u622a\nvar data = await "http://47.100.247.61/api/sysdata/categories".GetAsAsync<object>(requestInterceptor: request=>{\n    request.Headers.Add("Authorization","Bearer token\u5b57\u7b26\u4e32");\n});\n\n// \u8bbe\u7f6eHttpClient\u62e6\u622a\nvar data = await "http://47.100.247.61/api/sysdata/categories".GetAsAsync<object>(httpClientInterceptor: httpClient=>{\n});\n\n// ============ HEAD \u8bf7\u6c42 ============\n\n// \u540c\u4e0a\n\n// ============ POST \u8bf7\u6c42 ============\n\n// \u8fd4\u56de HttpResponseMessage \u5bf9\u8c61\nvar response = await "https://www.furion.pro/data".PostAsync(new { parm1="", parm2="" });\n\n// \u8fd4\u56de\u7279\u5b9a\u7c7b\u578b\u5bf9\u8c61\nvar data = await "http://47.100.247.61/api/sysdata/categories".PostAsAsync<object>(new { parm1="", parm2="" });\n\n// \u8bbe\u7f6e\u8bf7\u6c42\u62a5\u6587\u5934\nvar data = await "http://47.100.247.61/api/sysdata/categories".PostAsAsync<object>(new { parm1="", parm2="" }, headers: new Dictionary<string, string>{\n    {"ipaddress", "127.0.0.1"}\n});\n\n// \u8bbe\u7f6e\u8bf7\u6c42\u62e6\u622a\nvar data = await "http://47.100.247.61/api/sysdata/categories".PostAsAsync<object>(new { parm1="", parm2="" }, requestInterceptor: request=>{\n    request.Headers.Add("Authorization","Bearer token\u5b57\u7b26\u4e32");\n});\n\n// \u8bbe\u7f6eHttpClient\u62e6\u622a\nvar data = await "http://47.100.247.61/api/sysdata/categories".PostAsAsync<object>(httpClientInterceptor: httpClient=>{\n});\n\n// ============ PUT \u8bf7\u6c42 ============\n\n// \u540c\u4e0a\n\n// ============ PATCH \u8bf7\u6c42 ============\n\n// \u540c\u4e0a\n\n// ============ DELETE \u8bf7\u6c42 ============\n\n// \u540c\u4e0a\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SendAsync/SendAsAsync")," \u65b9\u5f0f")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'// \u8fd4\u56de HttpResponseMessage \u5bf9\u8c61\nvar response = await "https://www.furion.pro/data".SendAsync(HttpMethod.Get);\n\n// \u8fd4\u56de\u7279\u5b9a\u7c7b\u578b\u5bf9\u8c61\nvar data = await "http://47.100.247.61/api/sysdata/categories".SendAsAsync<object>(HttpMethod.Get);\n\n// \u8bbe\u7f6e\u8bf7\u6c42\u62a5\u6587\u5934\nvar data = await "http://47.100.247.61/api/sysdata/categories".SendAsAsync<object>(HttpMethod.Get, headers: new Dictionary<string, string>{\n    {"ipaddress", "127.0.0.1"}\n});\n\n// \u8bbe\u7f6e\u8bf7\u6c42\u62e6\u622a\nvar data = await "http://47.100.247.61/api/sysdata/categories".SendAsAsync<object>(HttpMethod.Post, requestInterceptor: request=>{\n    request.Headers.Add("Authorization","Bearer token\u5b57\u7b26\u4e32");\n});\n\n// \u8bbe\u7f6eHttpClient\u62e6\u622a\nvar data = await "http://47.100.247.61/api/sysdata/categories".SendAsAsync<object>(httpClientInterceptor: httpClient=>{\n});\n')),Object(r.b)("h3",{id:"1942-\u4ee3\u7406\u65b9\u5f0f"},"19.4.2 \u4ee3\u7406\u65b9\u5f0f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"li"},"\u7279\u6027")," \u65b9\u5f0f\u914d\u7f6e")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:"{1-3,6,9,12,16,22}","{1-3,6,9,12,16,22}":!0},'[Host("http://47.100.247.61/", 5000)]   // \u914d\u7f6e\u4e3b\u673a\u7aef\u53e3\n[Header("Authorization", "Bearer \u4f60\u7684token")]   // \u914d\u7f6e\u8bf7\u6c42\u5934\n[Header("ipaddress", "127.0.0.1")]  // \u914d\u7f6e\u591a\u4e2a\u8bf7\u6c42\u5934\npublic interface IHttp : IHttpDispatchProxy\n{\n    [Get("api/sysdata/categories")]\n    Task<RESTfulResult<List<Data>>> GetCategory();\n\n    [Get("api/sysdata/{categoryid}/data")]\n    Task<RESTfulResult<List<Data2>>> GetData2(int categoryid);\n\n    [Post("api/user/modify")]\n    Task<RESTfulResult<object>> PostVoid(object value);\n\n    // \u8bf7\u6c42\u62e6\u622a\u5668\n    static HttpRequestMessage RequestInterceptor(HttpRequestMessage httpRequest, MethodInfo method, object[] args)\n    {\n        return httpRequest;\n    }\n\n    // \u54cd\u5e94\u62e6\u622a\u5668\n    static HttpResponseMessage ResponseInterceptor(HttpResponseMessage httpResponse, MethodInfo method, object[] args)\n    {\n        return httpResponse;\n    }\n}\n')),Object(r.b)("h2",{id:"195-\u4ee3\u7406\u9ad8\u7ea7\u5e94\u7528"},"19.5 \u4ee3\u7406\u9ad8\u7ea7\u5e94\u7528"),Object(r.b)("h3",{id:"1951-\u53c2\u6570\u5904\u7406"},"19.5.1 \u53c2\u6570\u5904\u7406"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u666e\u901a")," \u53c2\u6570")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'[Get("https://www.furion.pro/getdata/{id}?name={name}")]\nTask<Object> GetData(int id, string name);\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u6570\u7ec4")," \u53c2\u6570\u89e3\u6784")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'[Get("https://www.furion.pro/getdata/?{...ids}")]\nvoid DeleteIds(int[] ids);\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u5bf9\u8c61")," \u53c2\u6570\u89e3\u6784")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'[Get("https://www.furion.pro/getdata/?{...user}")]\nvoid DeleteIds([Query]UserDto user);\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u5bf9\u8c61")," \u53c2\u6570")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'[Post("https://www.furion.pro/update-user")]\nvoid EditUser(UserDto user);\n')),Object(r.b)("p",null,"\u5bf9\u8c61\u7c7b\u578b\u53c2\u6570\u9ed8\u8ba4\u4ee5 ",Object(r.b)("inlineCode",{parentName:"p"},"Body")," \u65b9\u5f0f\u4f20\u9012\u3002"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7c7b\u5bf9\u8c61\u89e3\u6784\u8bf4\u660e")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6267\u884c ",Object(r.b)("inlineCode",{parentName:"p"},"Get/Head")," \u8bf7\u6c42\u65f6\u4e0d\u4f1a\u5904\u7406 ",Object(r.b)("inlineCode",{parentName:"p"},"\u7c7b\u5bf9\u8c61")," \u7c7b\u578b\u53c2\u6570\uff0c\u4f46\u662f\u5982\u679c\u8d34\u4e86 ",Object(r.b)("inlineCode",{parentName:"p"},"[Query]")," \u53c2\u6570\u540e\uff0c\u4f1a\u81ea\u52a8\u5c06\u5bf9\u8c61\u89e3\u6790\u6210 ",Object(r.b)("inlineCode",{parentName:"p"},"url")," \u5730\u5740\u683c\u5f0f\uff0c\u5982 ",Object(r.b)("inlineCode",{parentName:"p"},"?name=\u767e\u5c0f\u50e7&age=27"),"\u3002"))),Object(r.b)("h3",{id:"1952-\u53c2\u6570\u9a8c\u8bc1"},"19.5.2 \u53c2\u6570\u9a8c\u8bc1"),Object(r.b)("p",null,"\u4ee3\u7406\u62e6\u622a\u7684\u65b9\u5f0f\u4e5f\u652f\u6301\u53c2\u6570 ",Object(r.b)("inlineCode",{parentName:"p"},"\u9a8c\u8bc1\u7279\u6027")," \u4f7f\u7528\u3002\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'[Get("https://www.furion.pro/getdata/{id}?name={name}")]\nTask<Object> GetData([Required, Range(1, 1000)] int id, [MaxLength(32)] string name);\n')),Object(r.b)("p",null,"\u53e6\u5916\u4e5f\u652f\u6301 ",Object(r.b)("inlineCode",{parentName:"p"},"\u7c7b\u5bf9\u8c61")," \u65b9\u5f0f\uff0c\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"public class User\n{\n    [Required]  // \u5fc5\u586b\u9a8c\u8bc1\n    [MinLength(4)]  // \u6700\u5c0f\u957f\u5ea6\u9a8c\u8bc1\n    public string Account { get; set; }\n\n    [Required]    // \u5fc5\u586b\u9a8c\u8bc1\n    [MaxLength(32)]    // \u6700\u5927\u957f\u5ea6\u9a8c\u8bc1\n    public string Password { get; set; }\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'[Post("https://www.furion.pro/getdata/{id}?name={name}")]\nTask<Object> GetData(User user);\n')),Object(r.b)("h3",{id:"1953-\u8fd4\u56de\u503c\u5904\u7406"},"19.5.3 \u8fd4\u56de\u503c\u5904\u7406"),Object(r.b)("p",null,"\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u8c13\u8bcd\u7279\u6027\u90fd\u63d0\u4f9b\u4e86 ",Object(r.b)("inlineCode",{parentName:"p"},"ResponseType")," \u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u7528\u6765\u914d\u7f6e\u8fd4\u56de\u503c\u7c7b\u578b\uff0c\u9ed8\u8ba4\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u3002",Object(r.b)("inlineCode",{parentName:"p"},"ResponseType")," \u5c5e\u6027\u53ef\u9009\u914d\u7f6e\u5982\u4e0b\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ResponseType")," \u54cd\u5e94\u7c7b\u578b\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Object"),"\uff1a\u5bf9\u8c61\u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c\uff0c\u4e5f\u5c31\u662f\u81ea\u52a8\u5e8f\u5217\u5316\u6210\u4ee3\u7406\u7684\u65b9\u6cd5\u8fd4\u56de\u503c\u7c7b\u578b"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Text"),"\uff1a\u5b57\u7b26\u4e32\u7c7b\u578b"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Stream"),"\uff1a\u6d41\u7c7b\u578b\uff0c",Object(r.b)("strong",{parentName:"li"},"\u8fd4\u56de\u8be5\u7c7b\u578b\u65f6\uff0c\u9700\u5728\u5904\u7406\u5b8c\u4e4b\u540e\u91ca\u653e\u6d41")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ByteArray"),"\uff1a\u5b57\u8282\u6570\u7ec4\u7c7b\u578b")))),Object(r.b)("p",null,"\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'// \u8fd4\u56de\u5bf9\u8c61 T \u7c7b\u578b\n[Get("https://www.furion.pro/getdata", ResponseType = ResponseType.Object)]\nTask<User> GetData();\n\n// \u8fd4\u56de\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ResponseType.Object\n[Get("https://www.furion.pro/getdata", ResponseType = ResponseType.Text)]\nTask<string> GetData();\n\n// \u8fd4\u56de\u6d41\u7c7b\u578b\n[Get("https://www.furion.pro/getdata", ResponseType = ResponseType.Stream)]\nTask<Stream> GetData();\n\n// \u8fd4\u56de\u5b57\u8282\u6570\u7ec4\u7c7b\u578b\n[Get("https://www.furion.pro/getdata", ResponseType = ResponseType.ByteArray)]\nTask<byte[]> GetData();\n')),Object(r.b)("h3",{id:"1954-\u8bf7\u6c42\u54cd\u5e94\u62e6\u622a"},"19.5.4 \u8bf7\u6c42/\u54cd\u5e94\u62e6\u622a"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u91cd\u590d\u5229\u7528\u4e86 ",Object(r.b)("inlineCode",{parentName:"p"},"C# 8.0+")," \u7684\u7279\u6027\uff0c\u5b9e\u73b0\u4e86\u63a5\u53e3\u4e2d\u53ef\u5b9a\u4e49\u9759\u6001\u65b9\u6cd5\u548c\u5b9e\u73b0\u7684\u673a\u5236\uff0c\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:"{7,15}","{7,15}":!0},'public interface IHttp : IHttpDispatchProxy\n{\n    [Get("https://www.furion.pro/getdata", ResponseType = ResponseType.Object)]\n    Task<User> GetData();\n\n    // \u8bf7\u6c42\u62e6\u622a\u5668\n    static HttpRequestMessage RequestInterceptor(HttpRequestMessage httpRequest, MethodInfo method, object[] args)\n    {\n        // \u6bd4\u5982\u8fd9\u91cc\u5199\u65e5\u5fd7\n\n        return httpRequest;\n    }\n\n    // \u54cd\u5e94\u62e6\u622a\u5668\n    static HttpResponseMessage ResponseInterceptor(HttpResponseMessage httpResponse, MethodInfo method, object[] args)\n    {\n        // \u6bd4\u5982\u8fd9\u91cc\u5199\u65e5\u5fd7\n\n        return httpResponse;\n    }\n\n    // HttpClient \u62e6\u622a\u5668\n    static HttpClient HttpClientInterceptor(HttpClient httpClient, MethodInfo method, object[] args)\n    {\n        // \u6bd4\u5982\u8fd9\u91cc\u8bbe\u7f6e\u4ee3\u7406\n\n        return httpClient;\n    }\n}\n')),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5b57\u7b26\u4e32\u65b9\u5f0f\u62e6\u622a")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u5b57\u7b26\u4e32\u65b9\u5f0f\u53ea\u63d0\u4f9b\u4e86\u8bf7\u6c42\u62e6\u622a\uff0c\u4e0d\u63d0\u4f9b\u54cd\u5e94\u62e6\u622a"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-cs"},'// \u8bbe\u7f6e\u8bf7\u6c42\u62e6\u622a\nvar data = await "http://47.100.247.61/api/sysdata/categories".PostAsAsync<object>(new { parm1="", parm2="" }, requestInterceptor: request=>{\n    request.Headers.Add("Authorization","Bearer token\u5b57\u7b26\u4e32");\n});\n\n// \u8bbe\u7f6eHttpClient\u62e6\u622a\nvar data = await "http://47.100.247.61/api/sysdata/categories".PostAsAsync<object>(httpClientInterceptor: httpClient=>{\n});\n')))),Object(r.b)("h3",{id:"1955-body-\u53c2\u6570\u5e8f\u5217\u5316\u95ee\u9898"},"19.5.5 ",Object(r.b)("inlineCode",{parentName:"h3"},"Body")," \u53c2\u6570\u5e8f\u5217\u5316\u95ee\u9898"),Object(r.b)("p",null,"\u7531\u4e8e\u4e00\u4e9b\u7b2c\u4e09\u65b9\u63a5\u53e3\u4e0d\u89c4\u8303\u6216\u5bf9\u53c2\u6570\u5927\u5c0f\u5199\u654f\u611f\uff0c\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u914d\u7f6e\u7279\u6027\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"PropertyNamingPolicy")," \u5c5e\u6027\uff0c\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'[Post("https://www.furion.pro/getdata", PropertyNamingPolicy = JsonNamingPolicyOptions.Null)]\nTask<User> GetData();\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JsonNamingPolicyOptions")," \u53ef\u9009\u503c\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CamelCase"),"\uff1a\u9ed8\u8ba4\uff0c\u9996\u5b57\u6bcd\u5c0f\u5199\u5c5e\u6027\u540d"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Null"),"\uff1a\u4fdd\u6301\u539f\u6709\u5c5e\u6027\u540d\u79f0\u5b9a\u4e49\u89c4\u5219")))),Object(r.b)("h3",{id:"1956-body-\u5185\u5bb9\u914d\u7f6e"},"19.5.6 ",Object(r.b)("inlineCode",{parentName:"h3"},"Body")," \u5185\u5bb9\u914d\u7f6e"),Object(r.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u652f\u6301 ",Object(r.b)("inlineCode",{parentName:"p"},"Body")," \u53c2\u6570\u914d\u7f6e\u7684\u8bf7\u6c42\u90fd\u4f1a\u5e8f\u5217\u5316\u6210 ",Object(r.b)("inlineCode",{parentName:"p"},"Json")," \u5185\u5bb9\u914d\u7f6e\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"HttpContentType")," \u5c5e\u6027\u6307\u5b9a\uff0c\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'[Post("https://www.furion.pro/getdata", HttpContentType  = HttpContentTypeOptions.JsonStringContent)]\nTask<User> GetData(User user);\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HttpContentTypeOptions")," \u53ef\u9009\u503c\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"StringContent"),"\uff1a\u5b57\u7b26\u4e32\u5185\u5bb9"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JsonStringContent"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Json")," \u5b57\u7b26\u4e32\u5185\u5bb9"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"XmlStringContent"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Xml")," \u5b57\u7b26\u4e32\u5185\u5bb9"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MultipartFormDataContent"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"multipart/form-data")," \u7c7b\u578b\u5185\u5bb9"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"FormUrlEncodedContent"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"x-www-form-urlencoded")," \u7c7b\u578b\u5185\u5bb9")))),Object(r.b)("h3",{id:"1957-\u591a\u4e2a\u8bf7\u6c42\u5ba2\u6237\u7aef\u914d\u7f6e"},"19.5.7 \u591a\u4e2a\u8bf7\u6c42\u5ba2\u6237\u7aef\u914d\u7f6e"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86\u591a\u4e2a\u8bf7\u6c42\u5ba2\u6237\u7aef\u914d\u7f6e\uff0c\u53ef\u4ee5\u4e3a\u591a\u4e2a\u5ba2\u6237\u7aef\u8bf7\u6c42\u914d\u7f6e\u9ed8\u8ba4\u8bf7\u6c42\u4fe1\u606f\uff0c\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:"{4,12}","{4,12}":!0},'services.AddRemoteRequest(options=>\n{\n    // \u914d\u7f6e Github \u57fa\u672c\u4fe1\u606f\n    options.AddHttpClient("github", c =>\n    {\n        c.BaseAddress = new Uri("https://api.github.com/");\n        c.DefaultRequestHeaders.Add("Accept", "application/vnd.github.v3+json");\n        c.DefaultRequestHeaders.Add("User-Agent", "HttpClientFactory-Sample");\n    });\n\n    // \u914d\u7f6e Facebook \u57fa\u672c\u4fe1\u606f\n    options.AddHttpClient("facebook", c =>\n    {\n        c.BaseAddress = new Uri("https://api.facebook.com/");\n        c.DefaultRequestHeaders.Add("Accept", "application/vnd.facebook.v3+json");\n        c.DefaultRequestHeaders.Add("User-Agent", "HttpClientFactory-Sample");\n    });\n})\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u914d\u7f6e\u4e86\u547d\u540d\u5ba2\u6237\u7aef\u540e\uff0c\u6bcf\u6b21\u8bf7\u6c42\u90fd\u4f1a\u81ea\u52a8\u52a0\u4e0a\u8fd9\u4e9b\u914d\u7f6e\u3002")),Object(r.b)("p",null,"\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"\u4ee3\u7406\u8bf7\u6c42")," \u4f7f\u7528"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'[Get("api/getdata"), Client("github")]\nTask<User> GetData();\n\n[Put("api/getdata"), Client("facebook")]\nTask<User> GetData();\n')),Object(r.b)("p",null,"\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"\u5b57\u7b26\u4e32\u62d3\u5c55")," \u4f7f\u7528"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'// \u8bbe\u7f6e\u8bf7\u6c42\u62e6\u622a\nvar data = await "http://47.100.247.61/api/sysdata/categories".PostAsAsync<object>(new { parm1="", parm2="" }, clientName = "github");\n')),Object(r.b)("h2",{id:"196-\u4ee3\u7406\u5185\u7f6e\u7279\u6027"},"19.6 \u4ee3\u7406\u5185\u7f6e\u7279\u6027"),Object(r.b)("h3",{id:"1961-\u63a5\u53e3\u7279\u6027"},"19.6.1 \u63a5\u53e3\u7279\u6027"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u4e3b\u673a")," \u7279\u6027",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[Host]"),"\uff1a\u914d\u7f6e\u4e3b\u673a\u5730\u5740\u548c\u7aef\u53e3"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u8bf7\u6c42\u5934")," \u7279\u6027",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[Header]"),"\uff1a\u914d\u7f6e\u8bf7\u6c42\u62a5\u6587\u5934\uff0c\u652f\u6301\u591a\u4e2a"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u5ba2\u6237\u7aef")," \u7279\u6027",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[Client]"),"\uff1a\u914d\u7f6e\u5ba2\u6237\u7aef")))),Object(r.b)("p",null,"\u63a5\u53e3\u7684\u7279\u6027\u4f1a\u5f71\u54cd\u6240\u6709\u7684\u6210\u5458\u65b9\u6cd5\uff0c\u4e5f\u5c31\u662f\u4f1a\u5e94\u7528\u5230\u6bcf\u4e00\u4e2a\u65b9\u6cd5\u4e2d\uff0c\u5f53\u7136\u65b9\u6cd5\u53ef\u4ee5\u91cd\u5199\u6216\u5ffd\u7565\u3002"),Object(r.b)("h3",{id:"1962-\u65b9\u6cd5\u7279\u6027"},"19.6.2 \u65b9\u6cd5\u7279\u6027"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u8bf7\u6c42\u8c13\u8bcd")," \u7279\u6027",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[Get]"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Get")," \u8bf7\u6c42\u65b9\u5f0f"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[Post]"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Post")," \u8bf7\u6c42\u65b9\u5f0f"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[Put]"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Put")," \u8bf7\u6c42\u65b9\u5f0f"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[Delete]"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Delete")," \u8bf7\u6c42\u65b9\u5f0f"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[Patch]"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Patch")," \u8bf7\u6c42\u65b9\u5f0f"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[Head]"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Head")," \u8bf7\u6c42\u65b9\u5f0f"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u4e3b\u673a")," \u7279\u6027",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[Host]"),"\uff1a\u914d\u7f6e\u4e3b\u673a\u5730\u5740\u548c\u7aef\u53e3"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u8bf7\u6c42\u5934")," \u7279\u6027",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[Header]"),"\uff1a\u914d\u7f6e\u8bf7\u6c42\u62a5\u6587\u5934\uff0c\u652f\u6301\u591a\u4e2a"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u5ba2\u6237\u7aef")," \u7279\u6027",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[Client]"),"\uff1a\u914d\u7f6e\u5ba2\u6237\u7aef"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u5185\u5bb9\u7c7b\u578b")," \u7279\u6027",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[MediaTypeHeader]"),"\uff1a\u914d\u7f6e\u5185\u5bb9\u7c7b\u578b")))),Object(r.b)("h3",{id:"1963-\u65b9\u6cd5\u53c2\u6570\u7279\u6027"},"19.6.3 \u65b9\u6cd5\u53c2\u6570\u7279\u6027"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[Query]"),"\uff1a\u81ea\u52a8\u5c06\u53c2\u6570\u66ff\u6362\u5730\u5740\u4e2d\u7684\u5360\u4f4d\u7b26\uff0c\u5360\u4f4d\u7b26\u683c\u5f0f ",Object(r.b)("inlineCode",{parentName:"li"},"{\u53c2\u6570\u540d}"),"\uff0c\u5982\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"https://www.furion.pro/user/{id}"),"\uff0c\u9ed8\u8ba4\u57fa\u5143\u7c7b\u578b\u6216\u57fa\u5143\u7c7b\u578b\u6570\u7ec4\u5e94\u7528\u8be5\u7279\u6027"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[Body]"),"\uff1a\u81ea\u52a8\u5c06\u53c2\u6570\u6dfb\u52a0\u5230\u8bf7\u6c42\u62a5\u6587\u4f53\u4e2d\uff0c\u9ed8\u8ba4\u975e\u57fa\u5143\u7c7b\u578b\u4f1a\u5f15\u7528\u8be5\u7279\u6027\u3002")),Object(r.b)("h2",{id:"197-\u5173\u4e8e\u540c\u6b65\u8bf7\u6c42"},"19.7 \u5173\u4e8e\u540c\u6b65\u8bf7\u6c42"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u5185\u90e8\u9ed8\u8ba4\u4e0d\u63d0\u4f9b\u540c\u6b65\u8bf7\u6c42\u64cd\u4f5c\uff0c\u5efa\u8bae\u603b\u662f\u4f7f\u7528\u5f02\u6b65\u7684\u65b9\u5f0f\u8bf7\u6c42\u3002\u5982\u5728\u4e0d\u80fd\u4f7f\u7528\u5f02\u6b65\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u81ea\u884c\u8f6c\u6362\u4e3a\u540c\u6b65\u6267\u884c\u3002"),Object(r.b)("h2",{id:"198-\u5f02\u5e38\u5904\u7406"},"19.8 \u5f02\u5e38\u5904\u7406"),Object(r.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u63a5\u53e3\u8bf7\u6c42\u5f02\u5e38\u4f1a\u629b\u51fa\u8bf7\u6c42\u5f02\u5e38\uff0c\u6709\u65f6\u8fd9\u4e0d\u662f\u6211\u4eec\u60f3\u8981\u7684\u7ed3\u679c\uff0c\u6211\u4eec\u5e0c\u671b\u5982\u679c\u63a5\u53e3\u8bf7\u6c42\u5f02\u5e38\uff0c\u90a3\u4e48\u76f4\u63a5\u8fd4\u56de\u9ed8\u8ba4\u503c\u5373\u53ef\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u53ea\u9700\u8981\u5728\u63a5\u53e3\u6216\u65b9\u6cd5\u8d34 ",Object(r.b)("inlineCode",{parentName:"p"},"[Safety]")," \u7279\u6027\u5373\u53ef\u3002"),Object(r.b)("h2",{id:"199-\u53cd\u9988\u4e0e\u5efa\u8bae"},"19.9 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(r.b)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),Object(r.b)("hr",null),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e86\u89e3\u66f4\u591a")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",Object(r.b)("inlineCode",{parentName:"p"},"\u65e5\u5fd7")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/http-requests?view=aspnetcore-5.0"},"ASP.NET Core - HTTP \u8bf7\u6c42")," \u7ae0\u8282"))))}s.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),o=s(n),u=a,m=o["".concat(c,".").concat(u)]||o[u]||d[u]||r;return n?i.a.createElement(m,l(l({ref:t},p),{},{components:n})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<r;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);