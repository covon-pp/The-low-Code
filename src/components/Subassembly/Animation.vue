<template>
  <div class="control-body__animation">
    <!-- Here is Animation --- {{ showData?.label }}---{{ showData?.id }} -->
    <div class="control-body__animationBtns" my-4 flex justify-evenly>
      <el-button>添加动画---{{ showId }}</el-button>
      <el-button>预览动画---{{ showId }}</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { showId } = defineProps<{ showId: string | undefined }>()
</script>

<style scoped></style>
