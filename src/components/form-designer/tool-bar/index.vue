<template>
  <div class="tool-bar">
    <a-button
      type="text"
      danger
    >
      清空
    </a-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
</script>

<style scoped lang="less">
.tool-bar {
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
