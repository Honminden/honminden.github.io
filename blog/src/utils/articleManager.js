import showdown from "showdown"
import * as meta from "@/assets/meta"
const markdown2HtmlConverter = new showdown.Converter();

export default class ArticleManager
{
    constructor()
    {
        this.meta = meta;
    }

    getArticlesMeta()
    {
        return this.meta.articles;
    }

    getRawArticle(id)
    {
        return this.meta[`article${id}`];
    }

    getMarkdownArticle(id)
    {
        return this.convertMarkdown2Html(this.getRawArticle(id));
    }

    convertMarkdown2Html(text)
    {
        return markdown2HtmlConverter.makeHtml(text);
    }
}