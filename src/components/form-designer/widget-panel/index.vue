<template>
  <a-scroll-bar>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane
        key="widgets"
        tab="组件"
      >
        <a-collapse>
          <a-collapse-panel
            key="basic-widgets"
            header="基础组件"
          >
            <draggable
              :list="basicWidgets"
              tag="ul"
              :group="{ name: 'people', pull: 'clone', put: false }"
              item-key="id"
              class="list-group"
            >
              <template #item="{ element }">
               <span><svg-icon class="icon" :name="element.icon"></svg-icon>{{ element.name }} </span> 
              </template>
            </draggable>
          </a-collapse-panel>
        </a-collapse>
      </a-tab-pane>
      <a-tab-pane
        key="form-templates"
        tab="表单模板"
      ></a-tab-pane>
    </a-tabs>
  </a-scroll-bar>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import Draggable from 'vuedraggable'
import { basicWidgets } from './widgets-config'
import SvgIcon from '@/components/svg-icon/index.vue'
const activeKey = ref('widgets')
</script>

<style scoped lang="less">
/* Your styles here */
</style>
