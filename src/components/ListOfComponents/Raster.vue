<template>
  <el-row h-full :style="{
    width: customStyle.layout.width + 'px', height: customStyle.layout.height + 'px'
  }" class="raster">
    <el-col :span="12" border-dashed border-blue-200>
      <slot>Column 1</slot>
    </el-col>
    <el-col :span="12" border-dashed border-blue-200>
      <slot>Column 2</slot>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { type MyAttr } from '../Subassembly/Attr';
const { customStyle } = defineProps<{ customStyle: MyAttr }>()
</script>

<style scoped>
.raster {
  width: v-bind('customStyle.layout.width');
  height: v-bind('customStyle.layout.height');
}
</style>
