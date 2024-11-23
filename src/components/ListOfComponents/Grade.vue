<template>
  <el-rate v-model="value" :colors="colors" :style="{
    width: customStyle.layout.width + 'px', height: customStyle.layout.height + 'px'
  }" />
</template>

<script setup lang="ts">
const value = ref(0)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
import { type MyAttr } from '../Subassembly/Attr';
const { customStyle } = defineProps<{ customStyle: MyAttr }>()
</script>

<style scoped></style>
