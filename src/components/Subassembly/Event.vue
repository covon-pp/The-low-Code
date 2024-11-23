<template>
  <div class="control-body__event">
    <div class="control-body__eventBtn" flex justify-center my-4>
      <el-button>添加事件---{{ showId }}</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { showId } = defineProps<{ showId: string | undefined }>()
</script>

<style scoped></style>
