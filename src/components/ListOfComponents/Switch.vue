<template>
  <el-switch v-model="value" :style="customStyle" />
</template>

<script setup lang="ts">
const value = ref(true)
defineProps(['customStyle'])
</script>

<style scoped></style>
