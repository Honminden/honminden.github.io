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

#app a:hover,
#app .btn-outline-dark.active, #app .btn-outline-dark.active *,
#app .btn-outline-dark:hover, #app .btn-outline-dark:hover *
{
  color: #909090;
}

.btn:focus, .btn:active:focus, .btn.active:focus,
.btn.focus, .btn:active.focus, .btn.active.focus {
  box-shadow: none;
  outline: none;
}

.content
{
  margin: 2em;
}
</style>
