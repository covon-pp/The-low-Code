<template>
  <div :style="customStyle">
    <el-rate v-model="value" :colors="colors" />
  </div>
</template>

<script setup lang="ts">
const value = ref(0)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
defineProps(['customStyle'])
</script>

<style scoped></style>
