<template>
  <div class="design-area"> </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
</script>

<style scoped lang="less">
.design-area {
  width: 100%;
  height: calc(100% - 36px);
  flex: 1;
  padding: 10px;
  background-color: #fff;
  overflow-y: auto;
}
</style>
