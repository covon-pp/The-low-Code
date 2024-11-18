<template>
  <div class="control-body__attrs">
    <keep-alive v-if="showData != undefined">
      <component :is=type :showData="showData"></component>
    </keep-alive>
    <div v-else p-4>暂无选中组件，点击画布添加组件</div>
  </div>
</template>

<script setup lang="ts">
import { type Categorydata } from '@/components/ComponentList';
import { selectedCom, clonedComponents } from '@/stores/canvasData';
const { type } = defineProps(['type'])
const showData = ref<Categorydata>()
//监听选择的组件
watchEffect(() => {
  showData.value = selectedCom.value != undefined ? clonedComponents.value[selectedCom.value] : undefined
})
</script>

<style scoped></style>
