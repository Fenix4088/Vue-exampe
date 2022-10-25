<template>
  <div class="app">
    <form class="form" @submit.prevent="createPost">
      <h4>Create post:</h4>
      <input v-bind:value="title" @input="inputTitle" class="input" type="text" placeholder="title">
      <input v-bind:value="body" @input="inputBody" class="input" type="text" placeholder="description">
      <button type="submit">Create</button>
    </form>
    <div class="post" v-for="{title, body} in posts">
      <div>
        <strong>Title: </strong>
        {{ title }}
      </div>
      <div>
        <strong>Description: </strong>
        {{ body }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {AppState} from "@/types";

export default defineComponent({
  name: 'app',
  data(): AppState {
    return {
      posts: [
        {
          id: 1,
          title: 'Javascript-1',
          body: 'Some long long post body 1'
        },
        {
          id: 2,
          title: 'Javascript-2',
          body: 'Some long long post body 2'
        },
        {
          id: 3,
          title: 'Javascript-3',
          body: 'Some long long post body 3'
        },
        {
          id: 4,
          title: 'Javascript-4',
          body: 'Some long long post body 3'
        }
      ],
      title: '',
      body: ''
    }
  },
  methods: {
    createPost() {
      this.posts.push({id: Date.now(), title: this.title, body: this.body})
    },
    inputTitle(e: InputEvent) {
      this.title = (e.target as HTMLInputElement).value
    },
    inputBody(e: InputEvent) {
      this.body = (e.target as HTMLInputElement).value
    }
  }
});
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  margin: 0 auto;
}

.form {
  display: flex;
  flex-flow: column nowrap;
}

.post {
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
}

.input {
  width: 100%;
  margin-bottom: 5px;
  padding: 15px 10px;
  border: 1px solid teal;
}

</style>
