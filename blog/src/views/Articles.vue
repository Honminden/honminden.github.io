<template>
  <div class="articles">
    <h2>Articles</h2>
    <div v-if="articleManager != null">
      <div v-for="(articleMeta, idx) in articleManager.getArticlesMeta()" v-bind:key="idx">
        <router-link :to="`/markdownArticle/${articleMeta.id}`">
          <h3>{{ articleMeta.title }}</h3>
        </router-link>
        <small>
          <span>作者：{{ articleMeta.author }}</span>
          <span>发布时间{{ articleMeta.createTime }}</span>
          <span>更新时间：{{ articleMeta.editTime }}</span>
        </small>
        <p>{{ articleMeta.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleManager from '@/utils/articleManager'

export default {
  name: 'Articles',
  data() {
    return {
      articleManager: null
    }
  },
  mounted() {
    this.articleManager = new ArticleManager();
  },
}
</script>