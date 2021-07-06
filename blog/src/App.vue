<template>
  <div id="app">
    <TopBar/>
    <div class="content">
    <router-view/>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/bar/TopBar"

export default {
  name: 'App',
	components: {
    TopBar
  }
}
</script>

<style>
#app *
{
  color: #303030;
}

#app a:hover
{
  color: #909090;
}

.content
{
  margin: 2em;
}
</style>
