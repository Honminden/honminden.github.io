<template>
  <div class="markdownArticles">
    <a href="#" @click="$router.go(-1)">Back</a>
    <div id="docContainer" class="mt-4 p-2"></div>
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
  padding: 0.5em;
  margin: 0.5em;
}

/* code block */
#docContainer pre
{
  background-color: #303030;
  padding: 1em;
  margin: 0;
  margin-top: 1em;
  margin-bottom: 1em;
}

#docContainer pre code
{
  background-color: transparent;
  display: block;
  padding: 0;
  margin: 0;
}

#docContainer pre:hover code
{
  color: #ffffff;
}
</style>