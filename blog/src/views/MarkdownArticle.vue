<template>
  <div class="markdownArticles">
    <div id="docContainer"></div>
  </div>
</template>

<script>
import ArticleManager from '@/utils/articleManager'

export default {
  name: 'MarkdownArticle',
  data() {
    return {
      articleManager: null,
      id: ""
    }
  },
  mounted() {
    this.articleManager = new ArticleManager();
    this.id = this.$route.params.id;
    document.getElementById("docContainer").innerHTML = this.articleManager.getMarkdownArticle(this.id);
  },
}
</script>