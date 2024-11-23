<template>
  <el-switch v-model="value" :style="{
    width: customStyle.layout.width + 'px', height: customStyle.layout.height + 'px'
  }" />
</template>

<script setup lang="ts">
const value = ref(true)
import { type MyAttr } from '../Subassembly/Attr';
const { customStyle } = defineProps<{ customStyle: MyAttr }>()
</script>

<style scoped></style>
