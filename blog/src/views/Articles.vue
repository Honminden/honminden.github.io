<template>
  <div class="articles">
    <h2 v-if="category == 'article'">Articles</h2>
    <h2 v-if="category == 'news'">News</h2>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-3"></div>
      <div class="col-2"></div>
      <div class="btn-group col-2" role="group">
        <span class="input-group-text">Sort by</span>
        <button type="button" class="btn btn-outline-dark" @click="sortBy = 'createTime'" :class="{active: sortBy === 'createTime'}">
          <span v-if="sortBy === 'createTime'"> · </span> Created Date
        </button>
        <button type="button" class="btn btn-outline-dark" @click="sortBy = 'editTime'" :class="{active: sortBy === 'editTime'}">
          <span v-if="sortBy === 'editTime'"> · </span> Edited Date
        </button>
      </div>
      <div class="btn-group col-2" role="group">
        <span class="input-group-text">Order</span>
        <button type="button" class="btn btn-outline-dark" @click="order = 'ascending'" :class="{active: order === 'ascending'}">
          <span v-if="order === 'ascending'"> · </span> Ascending
        </button>
        <button type="button" class="btn btn-outline-dark" @click="order = 'descending'" :class="{active: order === 'descending'}">
          <span v-if="order === 'descending'"> · </span> Descending
        </button>
      </div>
    </div>
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
      articleManager: null,
      sortBy: "createTime",
      order: "descending"
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
      meta.sort((a, b) => a[this.sortBy].localeCompare(b[this.sortBy]));
      if (this.order === "descending")
      {
        meta.reverse();
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