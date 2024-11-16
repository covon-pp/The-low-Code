<template>
  <div>{{ showData == undefined ? '请选择组件' : showData }}</div>
</template>

<script setup lang="ts">
const { showData } = defineProps(['showData'])
</script>

<style scoped></style>
