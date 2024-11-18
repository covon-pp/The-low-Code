<template>
  <div class="control-body__event">
    <div class="control-body__eventBtn" flex justify-center my-4>
      <el-button>添加事件</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Categorydata } from '@/components/ComponentList';
const { showData } = defineProps<{ showData: Categorydata | undefined }>()
</script>

<style scoped></style>
