(function(e){function t(t){for(var r,c,o=t[0],l=t[1],s=t[2],u=0,p=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0659":function(e,t,n){},"239f":function(e,t,n){"use strict";n("7212")},5251:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"article0",(function(){return L})),n.d(r,"article1",(function(){return W})),n.d(r,"news90000",(function(){return J})),n.d(r,"articles",(function(){return q})),n.d(r,"news",(function(){return F}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),i=(n("ab8b"),n("9537"),n("3e48"),{id:"app"}),c={class:"content"};function o(e,t,n,r,o,l){var s=Object(a["w"])("TopBar"),d=Object(a["w"])("router-view");return Object(a["p"])(),Object(a["d"])("div",i,[Object(a["g"])(s),Object(a["g"])("div",c,[Object(a["g"])(d)])])}n("9911");var l=Object(a["B"])("data-v-6aedce71");Object(a["s"])("data-v-6aedce71");var s={class:"topBar mb-5"},d={class:"navbar navbar-expand-lg bg-light px-5 py-2"},u={class:"container-fluid"},p=Object(a["g"])("h1",null,"Honminden",-1);Object(a["q"])();var b=l((function(e,t,n,r,i,c){var o=Object(a["w"])("router-link");return Object(a["p"])(),Object(a["d"])("div",s,[Object(a["g"])("nav",d,[Object(a["g"])("div",u,[Object(a["g"])(o,{class:"navbar-brand",to:"/"},{default:l((function(){return[p]})),_:1}),(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(i.items,(function(e,t){return Object(a["p"])(),Object(a["d"])("ul",{class:"navbar-nav",key:t},[Object(a["g"])("li",{class:"nav-item",id:e.id},[Object(a["g"])(o,{class:"nav-link",to:e.link},{default:l((function(){return[Object(a["f"])(Object(a["y"])(e.text),1)]})),_:2},1032,["to"])],8,["id"])])})),128))])])])})),g={name:"TopBar",data:function(){return{items:[{id:"news",text:"News",link:"/articles/news"},{id:"articles",text:"Articles",link:"/articles/article"},{id:"lab",text:"Lab",link:"/lab"},{id:"about",text:"About",link:"/about"}]}}};n("f402");g.render=b,g.__scopeId="data-v-6aedce71";var m=g,f={name:"App",components:{TopBar:m}};n("d053");f.render=o;var j=f,v=n("6c02"),O={class:"front"};function w(e,t,n,r,i,c){return Object(a["p"])(),Object(a["d"])("div",O,[Object(a["g"])("h2",null,Object(a["y"])(i.welcomeTxt),1)])}var h={name:"FrontPage",data:function(){return{welcomeTxt:"Welcome to Honminden's homepage."}}};h.render=w;var y=h,k=(n("a4d3"),n("e01a"),n("99af"),Object(a["B"])("data-v-21e7ef4d"));Object(a["s"])("data-v-21e7ef4d");var A={class:"articles"},S={key:0},I={key:1},T={key:2,class:"my-2"},M={class:"card bg-light text-center m-4 p-4"},x={class:"card-title"},B={class:"card-subtitle text-muted"},H={class:"card-subtitle text-muted"},_={class:"card-subtitle text-muted"},D={class:"card-body"};Object(a["q"])();var E=k((function(e,t,n,r,i,c){var o=Object(a["w"])("router-link");return Object(a["p"])(),Object(a["d"])("div",A,["article"==n.category?(Object(a["p"])(),Object(a["d"])("h2",S,"Articles")):Object(a["e"])("",!0),"news"==n.category?(Object(a["p"])(),Object(a["d"])("h2",I,"News")):Object(a["e"])("",!0),null!=i.articleManager?(Object(a["p"])(),Object(a["d"])("div",T,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(c.getMeta(),(function(e,t){return Object(a["p"])(),Object(a["d"])("div",{key:t},[Object(a["g"])("div",M,[Object(a["g"])("h3",x,Object(a["y"])(e.title),1),Object(a["g"])("p",B,"by "+Object(a["y"])(e.author),1),Object(a["g"])("p",H,"created on "+Object(a["y"])(e.createTime),1),Object(a["g"])("p",_,"edited on "+Object(a["y"])(e.editTime),1),Object(a["g"])("p",D,Object(a["y"])(e.description),1),Object(a["g"])(o,{to:"/markdownArticle/".concat(n.category,"/").concat(e.id),class:"stretched-link"},null,8,["to"])])])})),128))])):Object(a["e"])("",!0)])})),P=n("d4ec"),z=n("bee2"),N=n("339e"),C=n.n(N),L="# Hello\n> created: 2021.07.06\n---\n## hello everyone\nThis is from Honminden!",W="# Spring项目搭建踩坑经验\n\n总结一下从头开始搭建一个Spring项目过程中踩的一些坑和其它经验。\n\n---\n\n## 创建项目：Spring模板\n\n如果你用Intellij IDEA Ultimate这类集成了Spring的IDE，那么可以直接找到模板创建一个新项目。\n\n但如果你用的是Intellij IDEA CE（社区版）这种没有集成Spring的开发工具，那么就需要自己编写配置文件或者导入模板。\n\n这里推荐到官网的[spring initializer](https://start.spring.io/)下载模板。\n\n![spring initializer](/image/Spring210702/spring_initializer.png)\n\n这里可以进行各种配置，比如右边的依赖可以添加Spring Web（网络开发相关工具）以及Spring Boot Devtools（启用热部署），下面可以选JDK版本等等。\n\n---\n\n## 热部署：IDEA CE的Smart Tomcat插件\n\n如果你用的是Intellij IDEA Ultimate，那么可以直接进行热部署，不需要多花功夫。\n\n而当你用Intellij IDEA CE进行热部署时，则首先要下载Tomcat，之后需要在IDEA里下载一个叫做**Smart Tomcat**的插件，配置好就可以使用热部署了。\n\n---\n\n## 打包部署：war包部署的各种问题\n\n假设你已经写完了一个Web项目，需要打包部署到服务器上，有两种选择：使用jar包或者war包。\n\njar包的部署很简单，因为Spring Web已经内置了Tomcat，可以直接通过java -jar命令部署。\n\nwar包的部署就比较麻烦了。首先要修改配置，有两种办法：\n\n一、在项目开始时就确定要使用war包部署，那么可以直接在spring initializer里设置使用war包，导出的模板可以直接用于war包部署。\n\n二、假设一个使用jar包部署的项目临时要改成用war包部署，那么需要修改下面几项配置：\n1. 修改pom.xml，加入packaging行并加入一个provided的依赖（用来屏蔽内置Tomcat）\n```xml\n<groupId>com.honminden</groupId>\n<artifactId>demo01</artifactId>\n<version>0.0.1-SNAPSHOT</version>\n<name>demo01</name>\n<description>Demo project for Spring Boot</description>\n<properties>\n    <java.version>1.8</java.version>\n</properties>\n<packaging>war</packaging> \x3c!-- mvn package generates a war file --\x3e\n```\n```xml\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-tomcat</artifactId>\n    <scope>provided</scope>\n</dependency>\n```\n2. 创建一个Initializer类，为Tomcat指定程序入口\n\nServletInitializer.java\n```java\npackage com.honminden.demo02;\n\nimport org.springframework.boot.builder.SpringApplicationBuilder;\nimport org.springframework.boot.web.servlet.support.SpringBootServletInitializer;\n\npublic class ServletInitializer extends SpringBootServletInitializer {\n\n\t@Override\n\tprotected SpringApplicationBuilder configure(SpringApplicationBuilder application) {\n\t\treturn application.sources(Demo02Application.class);\n\t}\n\n}\n```\n之后将导出的war包放在Tomcat的webapps目录下即可\n\n### 一个大坑：目前不要使用Tomcat 10\n\n之前我部署war包后发现报错404，很长时间都没找到原因，后来终于发现是因为Tomcat的版本问题。似乎Tomcat 10并不兼容当前的Spring（至少到2021.07.02依然如此），建议暂时先使用Tomcat 9来部署war包。",J="# News Module Is Now Available\nYou can find **development news** and other important **announcements** here.",q=[{id:"0",title:"Hello",author:"Honminden",createTime:"2021.07.06",editTime:"2021.07.06",description:"a hello message"},{id:"1",title:"Spring项目搭建踩坑经验",author:"Honminden",createTime:"2021.07.07",editTime:"2021.07.07",description:"总结一下从头开始搭建一个Spring项目过程中踩的一些坑和其它经验。"}],F=[{id:"90000",title:"News Module Is Now Available",author:"Honminden",createTime:"2021.07.07",editTime:"2021.07.07",description:"You can find development news and other important announcements here."}],R=new C.a.Converter,U=function(){function e(){Object(P["a"])(this,e),this.meta=r}return Object(z["a"])(e,[{key:"getArticlesMeta",value:function(){return this.meta.articles}},{key:"getNewsMeta",value:function(){return this.meta.news}},{key:"getRawArticle",value:function(e,t){return this.meta["".concat(e).concat(t)]}},{key:"getMarkdownArticle",value:function(e,t){return this.convertMarkdown2Html(this.getRawArticle(e,t))}},{key:"convertMarkdown2Html",value:function(e){return R.makeHtml(e)}}]),e}(),Y={name:"Articles",props:["category"],data:function(){return{articleManager:null}},methods:{getMeta:function(){var e;switch(this.category){case"article":e=this.articleManager.getArticlesMeta();break;case"news":e=this.articleManager.getNewsMeta();break}return e}},mounted:function(){this.articleManager=new U}};n("ee73");Y.render=E,Y.__scopeId="data-v-21e7ef4d";var K=Y,$={class:"lab"},G=Object(a["g"])("h2",null,"Lab",-1);function Q(e,t,n,r,i,c){return Object(a["p"])(),Object(a["d"])("div",$,[G])}var V={name:"Lab"};V.render=Q;var X=V,Z={class:"about"},ee=Object(a["g"])("h2",null,"About",-1);function te(e,t,n,r,i,c){return Object(a["p"])(),Object(a["d"])("div",Z,[ee])}var ne={name:"About"};ne.render=te;var re=ne,ae={class:"markdownArticles"},ie=Object(a["g"])("div",{id:"docContainer",class:"mt-4 p-2"},null,-1);function ce(e,t,n,r,i,c){return Object(a["p"])(),Object(a["d"])("div",ae,[Object(a["g"])("a",{href:"#",onClick:t[1]||(t[1]=function(t){return e.$router.go(-1)})},"Back"),ie])}var oe={name:"MarkdownArticle",props:["id","category"],data:function(){return{articleManager:null}},mounted:function(){this.articleManager=new U,document.getElementById("docContainer").innerHTML=this.articleManager.getMarkdownArticle(this.category,this.id)}};n("239f");oe.render=ce;var le=oe,se=[{path:"/",name:"FrontPage",component:y},{path:"/articles/:category",props:!0,name:"Articles",component:K},{path:"/lab",name:"Lab",component:X},{path:"/about",name:"About",component:re},{path:"/markdownarticle/:category/:id",props:!0,name:"MarkdownArticle",component:le}],de=Object(v["a"])({history:Object(v["b"])("/"),routes:se}),ue=de;Object(a["c"])(j).use(ue).mount("#app")},7212:function(e,t,n){},"8f62":function(e,t,n){},d053:function(e,t,n){"use strict";n("0659")},ee73:function(e,t,n){"use strict";n("5251")},f402:function(e,t,n){"use strict";n("8f62")}});
//# sourceMappingURL=app.d4ac7ec8.js.map