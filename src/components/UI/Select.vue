<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Choose from a list</option>
    <option v-for="option in options" :key="option.value" :value="option.value">{{option.value}}</option>
  </select>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {Option} from "@/types";

export default defineComponent({
  name: "Select",
  props: {
    modelValue: {
      type: String,
      required: true
    },
    options: {
      type: Array as PropType<Option[]>,
      required: true,
      default: () => []
    }
  },
  methods: {
    changeOption(e: Event) {
      this.$emit('update:modelValue', (e.target as HTMLSelectElement).value)
    }
  }
})
</script>

<style scoped>

</style>