<template>
  <div class="markdownArticles">
    <div id="docContainer"></div>
  </div>
</template>

<script>
import ArticleManager from '@/utils/articleManager'

export default {
  name: 'MarkdownArticle',
  props: ["id", "category"],
  data() {
    return {
      articleManager: null
    }
  },
  mounted() {
    this.articleManager = new ArticleManager();
    document.getElementById("docContainer").innerHTML = this.articleManager.getMarkdownArticle(this.category, this.id);
  },
}
</script>