<template>
  <main class="designer-container">
    <aside class="sidebar left-sidebar">
      <!-- 左侧组件列表 -->
      <div class="widgets-list">
        <div class="widgets-title">基础组件</div>
        <draggable
          :list="formItems"
          tag="ul"
          :group="{ name: 'dragGroup', pull: 'clone', put: false }"
          item-key="type"
          class="list-group"
        >
          <template #item="{ element }">
            <div class="item-wrapper">
              <span class="component-item"
                ><svg-icon
                  class="icon"
                  :name="element.compIcon"
                ></svg-icon
                >{{ element.compName }}
              </span>
            </div>
          </template>
        </draggable>
      </div>
    </aside>
    <section class="center-container">
      <tool-bar />
      <!-- 设计区域 -->
      <designer
        ref="designer"
        :list="designList"
      />
    </section>
    <aside class="sidebar right-sidebar">
      <setting-panel />
    </aside>
  </main>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue'
import SvgIcon from '@/components/svg-icon/index.vue'
import { formItems } from '@/form-items/index'
import Draggable from 'vuedraggable'
import SettingPanel from './setting-panel/index.vue'
import ToolBar from './tool-bar/index.vue'
import Designer from './designer/index.vue'

const designList = ref([])
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
  background-color: #fff;
  overflow-y: auto;
}

.left-sidebar {
  border-right: #ccc solid 1px;
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
  font-size: 12px;
  cursor: move;
}

.form-item {
  margin-bottom: 10px;
}

.widgets-list {
  .widgets-title {
    text-align: center;
    padding: 10px;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
  }
  .list-group {
    padding: 4px 0;
  }
}

.icon {
  font-size: 14px;
}

.item-wrapper {
  padding: 4px;
  height: 32px;
  width: fit-content;
  cursor: move;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 4px;
  color: #333;
}
</style>
