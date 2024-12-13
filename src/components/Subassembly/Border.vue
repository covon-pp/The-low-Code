<template>
  <div text-sm leading-12>
    <div flex items-center justify-between w-full>边框方向
      <Selection :icons="icons" :update="updateBorderDirection" :selected="border.borderDirection"></Selection>
    </div>
    <div flex items-center justify-between w-full>边框样式
      <div flex items-center justify-between w-41><input type="number" w-12 h-8 bse rounded class="borderStyle"
          v-model="border.borderStyle.borderWidth">
        <el-color-picker v-model="border.borderStyle.borderColor" show-alpha />
        <dropDownList :drop-list="styleList" :current-data="border.borderStyle.borderStyle" :closeList="closeList"
          :width="62">
        </dropDownList>
      </div>
    </div>
    <div flex items-center justify-between w-full>边框圆角
      <input type="number" v-model="border.borderRadio" h-8 w-32 bse rounded placeholder="圆角" class="border-radio">
    </div>
  </div>
</template>

<script setup lang="ts">
import { showStyle } from '@/stores/canvasData';
import Selection from '@/components/Subassembly/Selection.vue';
import dropDownList from '@/components/Subassembly/DropDownList.vue';
import type { Border, BorderStyle } from '@/components/Subassembly/Attr';
import { danger } from '@/assets/hooks/useMessageTip'
import { selectedCom, clonedComponents } from '@/stores/canvasData';
const border = ref<Border>(showStyle.value?.border as Border)
const icons = [{ icon: '#icon-square_24', val: 'all' }, { icon: '#icon-shangbiankuang', val: 'top' }, { icon: '#icon-youbiankuang', val: 'right' }, { icon: '#icon-xiabiankuang', val: 'bottom' }, { icon: '#icon-zuobiankuang', val: 'left' },]
const updateBorderDirection = (newData: string) => {
  border.value.borderDirection = newData
}
const closeList = (data: BorderStyle) => {
  border.value.borderStyle.borderStyle = data
  console.log(border.value.borderStyle.borderStyle);
}
const styleList: string[] = ['solid', 'dashed', 'double', 'dotted', 'none']
watch(() => selectedCom.value, () => {
  if (selectedCom.value != undefined && clonedComponents.value.length > 0)
    border.value = clonedComponents.value[selectedCom.value].style.border
})
watchEffect(() => {
  if (border.value.borderStyle.borderWidth < 0) { danger('边框宽度必须大于0'); border.value.borderStyle.borderWidth = 0 }
  if (border.value.borderRadio < 0) { danger('边框圆角必须大于0'); border.value.borderRadio = 0 }
})
</script>

<style scoped>
.borderStyle {
  text-align: center;
  outline: none;
  transition: all .3s;

  &:hover {
    border: 1px solid #409eff;
    color: #409eff;
  }
}

.border-radio {
  text-align: center;
  outline: none;
  transition: all .3s;

  &:hover {
    border: 1px solid #409eff;
    color: #409eff;
  }
}
</style>
