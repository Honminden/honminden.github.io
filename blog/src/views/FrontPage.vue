<template>
  <div class="front">
    <div class="row">
      <div class="col-4">
        <Info/>
      </div>
      <div class="col-8">
        <h2>{{ welcomeTxt }}</h2>
        <div v-if="articleManager != null" class="my-2">
        <hr>
        <h2> * Pinned Topics </h2>
          <div v-for="(meta, idx) in getPinMeta()" v-bind:key="idx">
              <div class="card bg-light text-center m-4 p-4">
                <h3 class="card-title">{{ meta.title }}</h3>
                <p class="card-subtitle text-muted">by {{ meta.author }}</p>
                <p class="card-subtitle text-muted">created on {{ meta.createTime }}</p>
                <p class="card-subtitle text-muted">edited on {{ meta.editTime }}</p>
                <p class="card-body">{{ meta.description }}</p>
                <router-link 
                  :to="`/markdownArticle/${meta.category}/${meta.id}`" 
                  class="stretched-link"></router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Info from '@/components/info/Info'
import ArticleManager from '@/utils/articleManager'

export default {
  name: 'FrontPage',
  components: {
    Info
  },
  data() {
    return {
      welcomeTxt: "Welcome to Honminden's homepage.",
      articleManager: null
    }
  },
  methods: {
    getPinMeta()
    {
      let pin = this.articleManager.getPin()
      let metas = [];
      for (let id of pin) {
        for (let meta of this.articleManager.getArticlesMeta()) {
          if (meta.id == id) {
            meta.category = "article";
            metas.push(meta);
            break;
          }
        }
        for (let meta of this.articleManager.getNewsMeta()) {
          if (meta.id == id) {
            meta.category = "news";
            metas.push(meta);
            break;
          }
        }
      }
      return metas;
    }
  },
  mounted() {
    this.articleManager = new ArticleManager();
  },
}
</script>
