# 如何搭建一个简单的Markdown博客

Markdown是一种能让人轻松愉快写文章的格式，上手简单，而且有很多相关工具。对于我这种不想直接写HTML的人来说，如果能把md文件转换成HTML显示在博客网站上就会很方便，

想要搭建一个Markdown博客，当然可以直接使用现有的工具，比如Github Pages官方推荐的Jekyll。不过，如果只需要一些简单的功能，则完全可以自己动手搭建，就像这个站点一样。

这篇文章着重讲一下如何使用raw-loader和showdown来导入并转换HTML，不涉及如何将HTML显示在站点里。

---

## 使用raw-loader导入md文本

raw-loader是一个以module形式直接将文本文件读取为字符串的工具。这个工具在webpack 5之后已经弃用了，被Asset Modules所取代，但我的站点保守起见先使用raw-loader一段时间再考虑迁移。

首先安装raw-loader，如果用npm管理依赖的话脚本如下：

```shell
npm install --save raw-loader
```

其它使用方式可以见[Github页面](https://github.com/webpack-contrib/raw-loader)

之后不需要进行配置，使用方法很简单，在导入模块的url前加上`raw-loader!`。在我的项目里，我用一个hub模块导出所有md文件：

meta.js
```javascript
export {default as article0} from "raw-loader!@/assets/Hello.md"
export {default as article1} from "raw-loader!@/assets/Spring210702/Spring210702.md"
// ...
```

其它模块导入的这些md文件是字符串格式，比如：

```javascript
import * as meta from "@/assets/meta"
console.log(meta['article0'])
```

控制台显示结果：
```markdown
# Hello
> created: 2021.07.06
---
## hello everyone
This is from Honminden!
```

## 使用showdown将md转换为HTML格式

showdown是一个将Markdown文本转换为HTML格式的转换器，虽然很久没有更新了，但也已经比较好用。

可以直接用npm安装：

```shell
npm install --save showdown
```

其它使用方式可以参考[Github页面](https://github.com/showdownjs/showdown)

使用showdown很简单，先创建Converter对象，使用makeHtml函数转换字符串即可：

```javascript
const markdown2HtmlConverter = new showdown.Converter();
console.log(markdown2HtmlConverter.makeHtml(meta['article0']))
```

控制台显示结果：
```html
<h1 id="hello">Hello</h1>
<blockquote>
  <h2 id="created20210706">created: 2021.07.06</h2>
  <h2 id="helloeveryone">hello everyone</h2>
  <p>This is from Honminden!</p>
</blockquote>
```

接下来可以把这段HTML放在某个容器元素的里面，就可以在页面里显示出来了。

```javascript
document.getElementById("docContainer").innerHTML = this.articleManager.getMarkdownArticle(this.category, this.id);
```

---

## 一些踩坑点

### 注意引用图片的情况

在md文件里，如果引用图片的URL是./格式的相对路径，那么在vue cli应用里可能会变成在当前网页路径下找文件；而如果这张图片在开发时跟md文件放在同一目录下，打包时根本就没有把这张图片包括进来，那就会找不到图片。

有个简单的解决办法，就是把图片复制到public目录下面，然后修改md文件里图片的URL指向这个文件，比如/image/Spring210702/spring_initializer.png（注意没有.），这种办法虽然每次都要改链接，但在代码上不需要额外解决，算是一个便利办法。

---

### 注意代码块格式

showdown默认输出的代码块是下面这种格式；

```html
<pre><code>somecode</code></pre>
```

默认样式是inline的，可以通过display: block改成块状。