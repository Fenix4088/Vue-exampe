<template>
  <div class="app">
    <h1>Posts page</h1>
    <input type="text" v-model.trim="modificatorValue">

    <div style="display: flex; width: 30%; flex-flow: column nowrap">
      <Button @click="showDialog" style="margin-bottom: 10px">Create a post</Button>
      <Select v-model="selectedSort" :options="sortOptions"/>
    </div>

    <Dialog v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </Dialog>

    <div v-if="isPostsLoading">Loading Posts.... :-)</div>
<!--    <PostsList v-else :posts="posts" @delete-post="deletePost"/>-->
    <PostsList v-else :posts="sortedPosts" @delete-post="deletePost"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {AppState, Post} from "@/types";
import {PostForm, PostsList} from "@/components";
import axios from "axios";

export default defineComponent({
  name: 'app',
  components: {
    PostsList,
    PostForm
  },

  data(): AppState {
    return {
      posts: [],
      dialogVisible: false,
      modificatorValue: '',
      isPostsLoading: false,
      selectedSort: 'title',
      sortOptions: [
        {value: 'title'},
        {value: 'body'},
      ]
    }
  },
  computed: {
    sortedPosts(): Post[] {
      return [...this.posts].sort((p1, p2) => {
        return (p1[this.selectedSort])?.localeCompare((p2[this.selectedSort]))
      })
    }
  },
  watch: {
    // selectedSort(newValue: AppState['selectedSort']) {
    //   this.posts.sort((p1, p2) => {
    //     return (p1[newValue])?.localeCompare((p2[newValue]))
    //   })
    // },
    dialogVisible(newValue: boolean) {
      console.log(newValue)
    }
  },
  mounted() {
    this.fetchPosts()
  },
  methods: {
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const resp = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = resp.data;

      } catch(e) {
        alert('Fetch posts error')
      }
      finally {
        this.isPostsLoading = false
      }
    },
    createPost(newPost: Post) {
      this.posts.push(newPost)
      this.dialogVisible = false
    },
    deletePost(id: number) {
      this.posts = this.posts.filter(post => post.id !== id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },

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
