<template>
  <div>
    <slot>
      <component :is=type :showData="showData"></component>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { type Categorydata } from '@/components/ComponentList';
import { selectedCom, clonedComponents } from '@/stores/canvasData';
const { type } = defineProps(['type'])
const showData = shallowRef<Categorydata>()
//监听选择的组件
watchEffect(() => {
  showData.value = selectedCom.value != undefined ? clonedComponents.value[selectedCom.value] : undefined
})
</script>

<style scoped></style>
