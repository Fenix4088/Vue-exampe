<template>
  <div>
    <h4>List: </h4>
    <PostItem v-for="{title, body} in posts" :title="title" :body="body"/>
  </div>
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
  .post {
    margin-top: 15px;
    padding: 15px;
    border: 2px solid teal;
  }

</style>