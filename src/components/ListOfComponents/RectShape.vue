<template>
  <div :style="{
    width: customStyle.layout.width + 'px', height: customStyle.layout.height + 'px'
  }">
    RectShape
  </div>
</template>

<script setup lang="ts">
import { type MyAttr } from '../Subassembly/Attr';
const { customStyle } = defineProps<{ customStyle: MyAttr }>()
</script>

<style scoped></style>
