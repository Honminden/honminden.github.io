<template>
  <div class="articles">
    <h2 v-if="category == 'article'">Articles</h2>
    <h2 v-if="category == 'news'">News</h2>
    <div v-if="articleManager != null" class="my-2">
      <div v-for="(meta, idx) in getMeta()" v-bind:key="idx">
          <div class="card bg-light text-center m-4 p-4">
            <h3 class="card-title">{{ meta.title }}</h3>
            <p class="card-subtitle text-muted">by {{ meta.author }}</p>
            <p class="card-subtitle text-muted">created on {{ meta.createTime }}</p>
            <p class="card-subtitle text-muted">edited on {{ meta.editTime }}</p>
            <p class="card-body">{{ meta.description }}</p>
            <router-link 
              :to="`/markdownArticle/${category}/${meta.id}`" 
              class="stretched-link"></router-link>
          </div>
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

<style scoped>
.articles *
{
  text-decoration: none;
}
.card:hover
{
  color: #909090;
  box-shadow: 0 0 0.5em #C0C0C0;
}
</style>