<template>
  <div :style="customStyle">
    <el-checkbox v-model="checked1" label="Option 1" />
    <el-checkbox v-model="checked2" label="Option 2" />
    <el-checkbox v-model="checked3" label="Option 3" />

  </div>
</template>

<script setup lang="ts">
const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)
defineProps(['customStyle'])
</script>

<style scoped></style>
