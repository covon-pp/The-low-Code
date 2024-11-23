<template>
  <div class="control-body__attrs">
    <keep-alive v-if="selectedCom != undefined">
      <component :is=type></component>
    </keep-alive>
    <div v-else p-4>暂无选中组件，点击画布添加组件</div>
  </div>
</template>

<script setup lang="ts">
import { selectedCom } from '@/stores/canvasData';
const { type } = defineProps(['type'])

</script>

<style scoped></style>
