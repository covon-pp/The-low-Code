<template>
  <el-radio-group v-model="radio" :style="{
    width: customStyle.layout.width + 'px', height: customStyle.layout.height + 'px'
  }">
    <el-radio :value="3">Option A</el-radio>
    <el-radio :value="6">Option B</el-radio>
    <el-radio :value="9">Option C</el-radio>
  </el-radio-group>
</template>

<script setup lang="ts">
const radio = ref(3)
import { type MyAttr } from '../Subassembly/Attr';
const { customStyle } = defineProps<{ customStyle: MyAttr }>()
</script>

<style scoped></style>
