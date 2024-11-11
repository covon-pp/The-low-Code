<template>
  <div class="canvas" h-full bg-white>
    <div class="canvas-draw">
      <draggable :group="{ name: 'list', pull: false, put: true }" :list="widgetList" ghost-class="ghost" itemKey="id"
        :force-fallback="true" :fallback-class="true" :fallback-on-body="true" @add="addComponent"
        class="draggable-root-div">
        <template v-slot:item="{ element }">
          <div>{{ element.tip }}</div>
        </template>
      </draggable>
      <!-- <div class="canvas" @drop="onDrop" @dragover="onDragOver"> -->
      <!-- 拖拽元素放置的位置 -->
      <!-- <div v-for="component in droppedComponents" :key="component.component" class="dropped-item">
          <i :class="component.icon"></i> {{ component.label }}
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
const widgetList = [{ tip: '暂时没有数据，请添加数据' }]
function addComponent({ item }) {
  console.log("组件添加到画布:", item);
}
const canvas = ref(null)
</script>

<style scoped></style>
