<template>
  <div class="canvas" h-full bg-white relative>
    <div class="canvas-draw">
      <VueDraggable v-model="clonedComponents" ghostClass="ghost" :animation="150"
        class="draggable-root-div canvas-draw__content" :group="{ name: 'component', pull: true, put: true }"
        @update="onUpdate" @add="onAdd" @remove="remove" :sort="true">
        <div class="canvas-draw__tip absolute" v-if="clonedComponents?.length === 0">画布为空，可添加组件
        </div>
        <component v-show="clonedComponents.length > 0" v-for="(data, index) in clonedComponents" :key="index"
          class="canvas-draw__data cursor-move" :class="{ 'border-class': selectedCom === index }"
          @click="toggleBorderBorder(index)" :is="getComponent(data.component)" :customStyle="data.style" />
      </VueDraggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'
import { clonedComponents } from '@/stores/canvasData'
import { selectedCom } from '@/stores/canvasData';
import { getComponent } from '@/components/ComponentList'
import state from '@/stores/snapshot'

function onUpdate(e) {
  console.log('update---')
  selectedCom.value = e.newIndex
  state.mutations.save(state.state)
}
function onAdd(e) {
  console.log('add---')
  //新增组件添加边框
  toggleBorderBorder(e.newIndex)
  state.mutations.save(state.state)
}
function remove() {
  console.log('remove---')
}
//点击添加边框
const toggleBorderBorder = (index: number) => {
  selectedCom.value = index
}

</script>

<style scoped>
.border-class {
  border: 1px solid #409eff;
}
</style>
