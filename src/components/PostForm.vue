<template>
  <form class="form" @submit.prevent="createPost">
    <h4>Create post:</h4>
    <input v-model="newPost.title" class="input" type="text" placeholder="title">
    <input v-model="newPost.body"  class="input" type="text" placeholder="description">
    <Button type="submit">Create</Button>
  </form>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {PostFormProps} from "@/types";

export default defineComponent({
  data(): PostFormProps {
    return {
      newPost: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.$emit('create', {id: Date.now(), title: this.newPost.title, body: this.newPost.body, a: ''})
      this.newPost = {
        title: '',
        body: ''
      }
    },
  }
})

</script>

<style scoped>
.form {
  display: flex;
  flex-flow: column nowrap;
}

.input {
  width: 100%;
  margin-bottom: 5px;
  padding: 15px 10px;
  border: 1px solid teal;
}
</style>