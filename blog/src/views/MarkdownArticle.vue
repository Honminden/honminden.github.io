<template>
  <div class="markdownArticles">
    <div id="docContainer" class="p-2"></div>
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

<style>
#docContainer img
{
  max-width: 60vw;
}

#docContainer code
{
  background-color: #303030;
  color: #c0c0c0;

  display: block;
  padding: 1em;
}

#docContainer code:hover
{
  color: #ffffff;
}
</style>