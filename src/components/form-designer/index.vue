<template>
  <main class="designer-container">
    <aside class="sidebar left-sidebar">
      <!-- 左侧组件列表 -->
      <widget-panel />
    </aside>
    <section class="center-container">
      <tool-bar />
      <!-- 设计区域 -->
      <design-area />
    </section>
    <aside class="sidebar right-sidebar">
      <setting-panel />
    </aside>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WidgetPanel from './widget-panel/index.vue'
import SettingPanel from './setting-panel/index.vue'
import ToolBar from './tool-bar/index.vue'
import DesignArea from './design-area/index.vue'
interface Component {
  type: string
  label: string
  props: Record<string, any>
}
</script>

<style scoped lang="less">
.designer-container {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.center-container {
  flex: 1;
  padding: 10px;
  background-color: #fff;
  overflow-y: auto;
}

.sidebar {
  width: 200px;
  padding: 10px;
  background-color: #f0f0f0;
  overflow-y: auto;
}

.left-sidebar {
  border-right: 1px solid #ccc;
}

.right-sidebar {
  border-left: 1px solid #ccc;
}

.canvas {
  flex: 1;
  padding: 10px;
  background-color: #fff;
  overflow-y: auto;
}

.component-item {
  margin-bottom: 10px;
  cursor: pointer;
}

.form-item {
  margin-bottom: 10px;
}
</style>
