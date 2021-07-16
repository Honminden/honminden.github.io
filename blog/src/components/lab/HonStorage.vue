<template>
  <div class="honStorage">
    <div>
      <h4>Custom Operations</h4>
      <div>
        <div class="input-group my-4">
          <span class="input-group-text">key</span>
          <input type="text" class="form-control"
            placeholder="input key name" v-model="key">
        </div>
        <div class="input-group my-4">
          <span class="input-group-text">value</span>
          <textarea class="form-control" rows="10"
            placeholder="input or get value here"
            v-model="value"></textarea>
        </div>
        <div class="input-group mb-1">
          <span class="input-group-text">Created</span>
          <textarea class="form-control" rows="1"
            placeholder="/"
            v-model="created" disabled></textarea>
        </div>
        <div class="input-group mb-4">
          <span class="input-group-text">Last Modified</span>
          <textarea class="form-control" rows="1"
            placeholder="/"
            v-model="lastModified" disabled></textarea>
        </div>

        <button id="create" class="btn btn-outline-dark mx-2"
          @click="create">create</button>
        <button id="read" class="btn btn-outline-dark mx-2"
          @click="read">read</button>
        <button id="update" class="btn btn-outline-dark mx-2"
          @click="update">update</button>
        <button id="delete" class="btn btn-outline-dark mx-2"
          @click="del">delete</button>
        <button id="commit" class="btn btn-outline-dark mx-2"
          @click="commit">commit</button>
        <button id="rollback" class="btn btn-outline-dark mx-2"
          @click="rollback">rollback</button>

        <div class="alert alert-dark my-4" v-if="errorMsg">
          {{ errorMsg }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HonStorage from "@/utils/honStorage/honStorage"

export default {
  name: 'HonStorage',
  data() {
    return {
      storage: null,
      key: null,
      value: null,
      created: null,
      lastModified: null,
      errorMsg: null
    }
  },
  methods: {
    handleErrorWhen(func)
    {
      this.errorMsg = null;
      try
      {
        func();
      }
      catch (e)
      {
        this.errorMsg = e.message;
        this.value = null;
        this.created = null;
        this.lastModified = null;
      }
    },
    create () {
      this.handleErrorWhen(() => {
        this.storage.create(this.key, this.value);
      });
    },
    read () {
      this.handleErrorWhen(() => {
        this.value = this.storage.read(this.key);
        this.created = this.storage.whenCreated(this.key);
        this.lastModified = this.storage.whenLastModified(this.key);
      });
    },
    update () {
      this.handleErrorWhen(() => {
        this.storage.update(this.key, this.value);
      });
    },
    del () {
      this.handleErrorWhen(() => {
        this.storage.delete(this.key);
      });
    },
    commit () {
      this.handleErrorWhen(() => {
        this.storage.commit();
      });
    },
    rollback () {
      this.handleErrorWhen(() => {
        this.storage.rollback();
      });
    }
  },
  mounted() {
    this.storage = new HonStorage();
  }
}
</script>

<style scoped>
#create.btn:hover, #read.btn:hover, #update.btn:hover, #delete.btn:hover, #commit.btn:hover, #rollback.btn:hover
{
  color: #ffffff;
}
</style>