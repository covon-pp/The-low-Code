<template>
  <div text-sm leading-12>
    <div flex items-center justify-between w-full>
      字体大小<input type="text" v-model="font.fontSize" h-8 w-32 bse rounded placeholder="大小" class="font-style">
    </div>
    <div flex items-center justify-between w-full overflow-visible>字体重量
      <dropDownList :dropList="fontWeights" :closeList="closeList" :currentData="font.fontWeight">
      </dropDownList>
    </div>
    <div flex items-center justify-between w-full>颜色<el-color-picker v-model="font.fontColor" show-alpha w-32 /></div>
    <div flex items-center justify-between w-full>对齐方式
      <Selection :icons="icons" :update="updateTextAlign" :selected="font.textAlign"></Selection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showStyle } from '@/stores/canvasData';
import Selection from '@/components/Subassembly/Selection.vue';
import dropDownList from '@/components/Subassembly/dropDownList.vue';
import type { Font, TextAlign } from './Attr';
import { getNumbers } from '@/assets/hooks/useStyle';
import { selectedCom, clonedComponents } from '@/stores/canvasData';
const font = ref<Font>(showStyle.value?.font as Font)
const icons = [{ icon: '#icon-zuoduiqi', val: 'left' }, { icon: '#icon-juzhongduiqi', val: 'center' }, { icon: '#icon-youduiqi', val: 'right' }, { icon: '#icon-zuoyouduiqi', val: 'justify' },]
const updateTextAlign = (newTextAlign: TextAlign) => {
  font.value.textAlign = newTextAlign
}
const fontWeights: string[] = ['100 Thin', '200 Extra Light', '300 Light', '400 Regular', '500 Medium', '600 Semi-Bold', '700 Bold', '800 Extra Bold', '900 Black']
const closeList = (data: string) => {
  font.value.fontWeight = getNumbers(data)
}
watch(() => selectedCom.value, () => {
  if (selectedCom.value != undefined && clonedComponents.value.length > 0)
    font.value = clonedComponents.value[selectedCom.value].style.font
})
</script>

<style scoped>
.font-style {
  text-align: center;
  outline: none;
  transition: all .3s;

  &:hover {
    border: 1px solid #409eff;
    color: #409eff;
  }
}

:deep(.el-color-picker__trigger) {
  width: 128px;
}
</style>
