<template>
  <div>
    <el-button round :style="customStyle">按钮</el-button>
  </div>
</template>

<script setup lang="ts">
defineProps(['customStyle'])
</script>

<style scoped></style>
