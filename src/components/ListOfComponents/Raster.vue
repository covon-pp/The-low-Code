<template>
  <div :style="customStyle">
    <el-row h-full>
      <el-col :span="12" border-dashed border-blue-200>
        <slot>Column 1</slot>
      </el-col>
      <el-col :span="12" border-dashed border-blue-200>
        <slot>Column 2</slot>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
defineProps(['customStyle'])
</script>

<style scoped></style>
