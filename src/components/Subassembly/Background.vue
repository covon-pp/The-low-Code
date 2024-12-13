<template>
  <div text-sm leading-12>
    <div flex items-center justify-between w-full>颜色<el-color-picker v-model="background.backgroundColor" show-alpha
        w-32 /></div>
    <div flex items-center justify-between w-full pr-3 class="background-Opacity">透明度<el-slider
        v-model="background.backgroundOpacity" :max="1" :step="0.01" size="small" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { showStyle } from '@/stores/canvasData';
import { selectedCom, clonedComponents } from '@/stores/canvasData'
import type { Background } from './Attr';
const background = ref<Background>(showStyle.value?.background as Background)
watch(() => selectedCom.value, () => {
  if (selectedCom.value != undefined && clonedComponents.value.length > 0)
    background.value = clonedComponents.value[selectedCom.value].style.background
})
</script>

<style scoped>
:deep(.el-color-picker__trigger) {
  width: 128px;
}

.background-Opacity .el-slider {
  max-width: 160px;
  overflow: visible;
}

:deep(.el-slider__runway) {
  overflow: visible;
}

:deep(.el-slider__button) {
  width: 14px;
  height: 14px;
}
</style>
