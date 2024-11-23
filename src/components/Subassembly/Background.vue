<template>
  <div>
    {{ background }}
  </div>
</template>

<script setup lang="ts">
import { showStyle } from '@/stores/canvasData';
import type { MyAttr } from './Attr';
const { background } = showStyle!.value as MyAttr
</script>

<style scoped></style>
