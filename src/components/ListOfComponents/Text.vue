<template>
  <div :style="customStyle">
    <el-text class="mx-1" type="primary">Primary</el-text>
  </div>
</template>

<script setup lang="ts">
defineProps(['customStyle'])
</script>

<style scoped></style>
