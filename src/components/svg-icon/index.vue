<template>
  <svg
    class="svg-icon"
    :style="iconStyle"
    aria-hidden="true"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  size: {
    type: [String, Number],
    default: '1em'
  }
})

const symbolId = computed(() => `#icon-${props.name}`)
const iconStyle = computed(() => ({
  color: props.color,
  width: props.size,
  height: props.size
}))
</script>

<style scoped>
.svg-icon {
  width: 1.1em;
  height: 1.1em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
