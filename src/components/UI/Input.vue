<template>
  <input :value="value" @input="updateInput" type="text" class="input">
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Input",
  props: {
    value: [String, Number],
    myValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit('update:value', e.target.value)
      this.$emit('update:myValue', e.target.value)
    }
  }
})
</script>

<style scoped>
.input {
  width: 100%;
  margin-bottom: 5px;
  padding: 15px 10px;
  border: 1px solid teal;
}
</style>