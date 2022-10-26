<template>
  <form class="form" @submit.prevent="createPost">
    <h4>Create post:</h4>
    <Input v-model:value="newPost.title" v-model:myValue="newPost.title" placeholder="title"/>
    <Input v-model:value="newPost.body" placeholder="description"/>
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
  watch: {
    newPost: {
      handler(newValue) {
        console.log(newValue)
      },
      deep: true
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
</style>