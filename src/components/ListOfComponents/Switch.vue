<template>
  <div :style="customStyle">
    <el-switch v-model="value" />
  </div>
</template>

<script setup lang="ts">
const value = ref(true)
defineProps(['customStyle'])
</script>

<style scoped></style>
