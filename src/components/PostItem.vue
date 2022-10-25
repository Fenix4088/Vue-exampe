<template>
  <div class="post">
    <div>
      <strong>Title: </strong>
      {{ title }}
    </div>
    <div>
      <strong>Description: </strong>
      {{ body }}
    </div>
    <Button>X</Button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "PostItem",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
  },
  methods: {
    onDeleteClick() {
      this.$emit('delete-post', this.$props.id)
    }
  }
})
</script>

<style scoped>
.post {
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
}
</style>