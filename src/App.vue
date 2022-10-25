<template>
  <div class="app">
    <PostForm @create="createPost"/>
    <PostsList :posts="posts"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {AppState, Post} from "@/types";
import {PostForm, PostsList} from "@/components";

export default defineComponent({
  name: 'app',
  components: {
    PostsList,
    PostForm
  },

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
    }
  },
  methods: {
    createPost(newPost: Post) {
      this.posts.push(newPost)
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

</style>
