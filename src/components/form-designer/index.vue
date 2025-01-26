<template>
  <main class="designer-container">
    <aside class="sidebar left-sidebar">
      <!-- 左侧组件列表 -->
      <div
        v-for="component in components"
        :key="component.type"
        class="component-item"
      >
        {{ component.label }}
      </div>
    </aside>
    <section class="canvas">
      <!-- 中间画布区域 -->
      <div
        v-for="(item, index) in formItems"
        :key="index"
        class="form-item"
      >
        <component
          :is="item.type"
          v-bind="item.props"
        />
      </div>
    </section>
    <aside class="sidebar right-sidebar">
      <!-- 右侧属性编辑 -->
      <div v-if="selectedComponent">
        <h3>属性编辑</h3>
        <!-- 属性编辑表单 -->
      </div>
    </aside>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Component {
  type: string
  label: string
  props: Record<string, any>
}

const components: Component[] = [
  { type: 'a-input', label: 'Input', props: { placeholder: 'Enter text' } },
  { type: 'a-button', label: 'Button', props: { type: 'primary', text: 'Submit' } }
]

const formItems = ref<Component[]>([])
const selectedComponent = ref<Component | null>(null)
</script>

<style scoped lang="less">
.designer-container {
  display: flex;
  height: 100vh;
  width: 100vw;
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
