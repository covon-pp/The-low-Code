<template>
  <div :style="customStyle">
    <el-input v-model="input" style="width: 240px" placeholder="Please input" />
  </div>
</template>

<script setup lang="ts">
defineProps(['customStyle'])
const input = ref('')
</script>

<style scoped></style>
