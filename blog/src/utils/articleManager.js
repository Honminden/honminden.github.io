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

    getNewsMeta()
    {
        return this.meta.news;
    }

    getRawArticle(category, id)
    {
        return this.meta[`${category}${id}`];
    }

    getMarkdownArticle(category, id)
    {
        return this.convertMarkdown2Html(this.getRawArticle(category, id));
    }

    convertMarkdown2Html(text)
    {
        return markdown2HtmlConverter.makeHtml(text);
    }
}