<template>
  <div class="info">
    <div v-if="info">
      <div class="card bg-light text-center m-4">
        <h3 class="card-title my-4">{{ info.name }}</h3>
        <span class="card-subtitle mx-2" 
          v-for="(alias, idx) in info.aliases" v-bind:key="idx">
          {{ alias }}
        </span>
        <div class="card-body">{{ info.description }}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" 
            v-for="(field, idx) in info.fields" v-bind:key="idx">
            <h4>{{ field.name }}</h4>
            <p>{{ field.value.text }}</p>
          </li>
          <a class="list-group-item list-group-item-action" 
            v-for="(link, idx) in info.links" v-bind:key="idx"
            :href="link.value.to">
            <h4>{{ link.name }}</h4>
            <p>{{ link.value.text }}</p>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import info from '@/components/info/info.json'

export default {
  name: 'Info',
  data() {
    return {
      info: info
    }
  }
}
</script>

<style scoped>
*
{
  white-space: pre-wrap;
}

a.list-group-item p
{
  text-decoration-line: underline;
}
</style>