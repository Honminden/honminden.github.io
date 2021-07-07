import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '@/views/FrontPage.vue'
import Articles from '@/views/Articles.vue'
import Lab from '@/views/Lab.vue'
import About from '@/views/About.vue'
import MarkdownArticle from '@/views/MarkdownArticle.vue'

const routes = [
  {
    path: '/',
    name: 'FrontPage',
    component: FrontPage
  },
  {
    path: '/articles/:category',
    props: true,
    name: 'Articles',
    component: Articles
  },
  {
    path: '/lab',
    name: 'Lab',
    component: Lab
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/markdownarticle/:category/:id',
    props: true,
    name: 'MarkdownArticle',
    component: MarkdownArticle
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
