<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  }
})
</script>

<style scoped>
  .dialog {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .5);
    display: flex;
  }
  .dialog-content {
    padding: 20px;
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
  }
</style>