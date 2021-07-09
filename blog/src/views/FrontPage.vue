<template>
  <div class="front">
    <div class="row">
      <div class="col-4">
        <Info/>
      </div>
      <div class="col-8">
        <h2>{{ welcomeTxt }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Info from '@/components/info/Info'

export default {
  name: 'FrontPage',
  components: {
    Info
  },
  data() {
    return {
      welcomeTxt: "Welcome to Honminden's homepage."
    }
  },
}
</script>
