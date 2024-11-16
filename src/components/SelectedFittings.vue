<template>
  <div class="h-2/6 overflow-auto selectedFittings">
    <div v-for="(data, index) in clonedComponents" :key="index" flex justify-between items-center hover:bg-gray-100 p-2
      :class="selectedCom === index ? 'selected' : ''" @click="selectedCom = index">
      <div class="selectedFittings-data">{{ data.label }}</div>
      <Operate :place="index"></Operate>
    </div>
  </div>
</template>

<script setup lang="ts">
import { clonedComponents } from '@/stores/canvasData'
import Operate from '@/components/Subassembly/Operate.vue';
import { selectedCom } from '@/stores/canvasData';
</script>

<style scoped>
.selected {
  background-color: #ecf5ff;
}
</style>
