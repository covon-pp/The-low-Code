<template>
  <el-row h-full :style="customStyle">
    <el-col :span="12" border-dashed border-blue-200>
      <slot>Column 1</slot>
    </el-col>
    <el-col :span="12" border-dashed border-blue-200>
      <slot>Column 2</slot>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
defineProps(['customStyle'])
</script>

<style scoped></style>
