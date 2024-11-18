<template>
  <el-radio-group v-model="radio" :style="customStyle">
    <el-radio :value="3">Option A</el-radio>
    <el-radio :value="6">Option B</el-radio>
    <el-radio :value="9">Option C</el-radio>
  </el-radio-group>
</template>

<script setup lang="ts">
const radio = ref(3)
defineProps(['customStyle'])
</script>

<style scoped></style>
