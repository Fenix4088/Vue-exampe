<template>
  <div v-if="!!posts.length">
    <h4>List: </h4>
    <PostItem v-for="{title, body, id} in posts" :title="title" :body="body" :id="id" :key="id" @delete-post="$emit('delete-post', id)"/>
  </div>
  <h2 v-else style="color: red; margin: 0 50%; width: max-content">No posts !</h2>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {Post} from "@/types";
import PostItem from "@/components/PostItem.vue";

export default defineComponent({
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true
    }
  },
})

</script>

<style scoped>


</style>