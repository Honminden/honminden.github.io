<template>
  <div class="articles">
    <h2 v-if="category == 'article'">Articles</h2>
    <h2 v-if="category == 'news'">News</h2>
    <div v-if="articleManager != null">
      <div v-for="(meta, idx) in getMeta()" v-bind:key="idx">
        <router-link :to="`/markdownArticle/${category}/${meta.id}`">
          <h3>{{ meta.title }}</h3>
        </router-link>
        <small>
          <span>作者：{{ meta.author }}</span>
          <span>发布时间{{ meta.createTime }}</span>
          <span>更新时间：{{ meta.editTime }}</span>
        </small>
        <p>{{ meta.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleManager from '@/utils/articleManager'

export default {
  name: 'Articles',
  props: ["category"],
  data() {
    return {
      articleManager: null
    }
  },
  methods: {
    getMeta()
    {
      let meta;
      switch (this.category)
      {
        case ("article"):
          meta = this.articleManager.getArticlesMeta();
          break;
        case ("news"):
          meta = this.articleManager.getNewsMeta();
          break;
      }
      return meta;
    }
  },
  mounted() {
    this.articleManager = new ArticleManager();
  },
}
</script>