<template>
  <div class="design-area">
    <a-form class="drag-form">
      <draggable
        class="list-group"
        :list="list"
        v-bind="{ group: 'dragGroup', ghostClass: 'ghost', animation: 300 }"
      >
        <template #item="{ element }">
          <div>{{ element.compName }}</div>
        </template>
      </draggable>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import Draggable from 'vuedraggable'
import { ref, reactive, computed, onMounted } from 'vue'

defineOptions({
  name: 'Designer'
})

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  },
  formConfig: {
    type: Object,
    default: () => ({})
  }
})

const onDragEnd = (e: any) => {}

const onDragAdd = (evt: any) => {
  console.log(evt)
}

const onDragUpdate = (e: any) => {}

const checkMove = (e: any) => {}
</script>

<style scoped lang="less">
.design-area {
  width: 100%;
  height: calc(100% - 36px);
  flex: 1;
  padding: 10px;
  background-color: #fff;
  overflow-y: auto;

  .drag-form {
    width: 100%;
    height: 100%;

    .list-group {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
