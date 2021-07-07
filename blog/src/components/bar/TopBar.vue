<template>
  <div class="topBar mb-5">
    <nav class="navbar navbar-expand-lg bg-light px-5 py-2">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <h1>Honminden</h1>
        </router-link>
        <ul class="navbar-nav" v-for="(item, idx) in items" v-bind:key="idx">
          <li class="nav-item" :id="item.id">
            <router-link class="nav-link" :to="item.link">
              {{ item.text }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
	data() {
		return {
			items: [
        {
          id: "news",
          text: "News",
          link: "/articles/news"
        },
				{
					id: "articles",
					text: "Articles",
					link: "/articles/article"
				},
				{
					id: "lab",
					text: "Lab",
					link: "/lab"
				},
				{
					id: "about",
					text: "About",
					link: "/about"
				}
			]
		}
	},
}
</script>

<style scoped>
.navbar
{
  background-color: #9b9b9b;
}
</style>