<template>
  <div class="h-2/6 overflow-auto">
    <div v-for="(data, index) in clonedComponents" :key="index">
      {{ data.label }}
    </div>

  </div>
</template>

<script setup lang="ts">
import { clonedComponents } from '@/stores/canvasData'
// watch(() => clonedComponents.value, () => {
//   console.log(clonedComponents.value);
// })
</script>

<style scoped></style>
