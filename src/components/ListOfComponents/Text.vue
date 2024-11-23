<template>
  <el-text class="mx-1" type="primary" :style="{
    width: customStyle.layout.width + 'px', height: customStyle.layout.height + 'px'
  }">Primary</el-text>
</template>

<script setup lang="ts">
import { type MyAttr } from '../Subassembly/Attr';
const { customStyle } = defineProps<{ customStyle: MyAttr }>()
</script>

<style scoped></style>
