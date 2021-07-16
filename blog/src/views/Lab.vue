<template>
  <div class="lab">
    <h2>Lab</h2>
    <div class="card bg-light text-center m-4 p-4">
      <h3 class="card-title"> HonStorage </h3>
      <div class="card-body">
        <p>
          Store and retrieve data locally.
        </p>
        <hr/>
        <HonStorage/>
      </div>
    </div>
  </div>
</template>

<script>
import HonStorage from "@/components/lab/HonStorage"

export default {
  name: 'Lab',
  components: {
    HonStorage
  }
}
</script>