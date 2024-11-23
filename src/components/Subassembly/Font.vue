<template>
  <div>
    {{ font }}
  </div>
</template>

<script setup lang="ts">
import { showStyle } from '@/stores/canvasData';
import type { MyAttr } from './Attr';
const { font } = showStyle!.value as MyAttr
</script>

<style scoped></style>
