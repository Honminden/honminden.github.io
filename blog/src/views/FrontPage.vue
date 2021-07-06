<template>
  <div class="front">
    <h2>{{ welcomeTxt }}</h2>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  data() {
    return {
      welcomeTxt: "Welcome to Honminden's homepage."
    }
  },
}
</script>
