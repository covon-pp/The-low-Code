<template>
  <div class="control-body__animation">
    <!-- Here is Animation --- {{ showData?.label }}---{{ showData?.id }} -->
    <div class="control-body__animationBtns" my-4 flex justify-evenly>
      <el-button>添加动画</el-button>
      <el-button>预览动画</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Categorydata } from '@/components/ComponentList';
const { showData } = defineProps<{ showData: Categorydata | undefined }>()
</script>

<style scoped></style>
