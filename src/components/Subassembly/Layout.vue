<template>
  <div text-sm leading-12>
    <div flex items-center justify-between w-48 leading-8>Display：<DisplaySelection :icons="icons"
        :updateDisplay="updateDisplay" :selectedDisplay="layout.display">
      </DisplaySelection>
    </div>
    <div relative>宽×高：
      <input type="number" v-model="layout.width" h-8 w-12 mx-2 bse rounded class="widhei">×
      <input type="number" v-model="layout.height" h-8 w-12 ml-2 bse rounded class="widhei">
    </div>
    <div class="layout-margin">外边距：
      <SmallInput :tipData=tipData :move-x="moveX" :thePosition="thePosition" label="setMargin">
        <input type="number" v-model="layout.margin.marginTop" class="setMargin"
          @mouseover="hoverEvent('上', 4, '.setMargin')" @mouseleave="cancelHover()">
        <input type="number" v-model="layout.margin.marginRight" class="setMargin"
          @mouseover="hoverEvent('右', 44, '.setMargin')" @mouseleave="cancelHover()">
        <input type="number" v-model="layout.margin.marginBottom" class="setMargin"
          @mouseover="hoverEvent('下', 84, '.setMargin')" @mouseleave="cancelHover()">
        <input type="number" v-model="layout.margin.marginLeft" class="setMargin"
          @mouseover="hoverEvent('左', 124, '.setMargin')" @mouseleave="cancelHover()">
      </SmallInput>
    </div>
    <div class="layout-padding">内边距：
      <SmallInput :tipData=tipData :move-x="moveX" :thePosition="thePosition" label="setPadding">
        <input type="number" v-model="layout.padding.paddingTop" class="setPadding"
          @mouseover="hoverEvent('上', 4, '.setPadding')" @mouseleave="cancelHover()">
        <input type="number" v-model="layout.padding.paddingRight" class="setPadding"
          @mouseover="hoverEvent('右', 44, '.setPadding')" @mouseleave="cancelHover()">
        <input type="number" v-model="layout.padding.paddingBottom" class="setPadding"
          @mouseover="hoverEvent('下', 84, '.setPadding')" @mouseleave="cancelHover()">
        <input type="number" v-model="layout.padding.paddingLeft" class="setPadding"
          @mouseover="hoverEvent('左', 124, '.setPadding')" @mouseleave="cancelHover()">
      </SmallInput>
    </div>
  </div>
</template>

<script setup lang="ts">
import { clonedComponents, selectedCom, showStyle } from '@/stores/canvasData';
import SmallInput from '@/components/Subassembly/SmallInput.vue';
import DisplaySelection from '@/components/Subassembly/DisplaySelection.vue';
import { danger } from '@/assets/hooks/useMessageTip'
import type { Layout } from '@/components/Subassembly/Attr';
const layout = ref<Layout>(showStyle.value?.layout as Layout)
const icons = [{ icon: '#icon-buju', display: 'inline' }, { icon: '#icon-hengpai', display: 'inline-block' }, { icon: '#icon-kuaijibuju', display: 'block' }, { icon: '#icon-layout-row-line', display: 'flex' }, { icon: '#icon-bujushezhi', display: 'grid' }]
const updateDisplay = (newDisplay: string) => {
  layout.value.display = newDisplay
}
const tipData = ref("")
const moveX = ref<number>(0)
const thePosition = ref<string>()
const hoverEvent = (data: string, move: number, theTarget: string) => {
  tipData.value = data
  moveX.value = move
  if (theTarget != '') thePosition.value = theTarget
}
const cancelHover = () => {
  tipData.value = ''
  thePosition.value = ''
}
watch(() => selectedCom.value, () => {
  if (selectedCom.value != undefined && clonedComponents.value.length > 0)
    layout.value = clonedComponents.value[selectedCom.value].style.layout
})
watchEffect(() => {
  if (layout.value.width < 0) { danger('宽度必须大于0'); layout.value.width = 0 }
  if (layout.value.height < 0) { danger('高度必须大于0'); layout.value.height = 0 }
  if (layout.value.margin.marginLeft < 0) { danger('边距必须大于0'); layout.value.margin.marginLeft = 0 }
  if (layout.value.margin.marginBottom < 0) { danger('边距必须大于0'); layout.value.margin.marginBottom = 0 }
  if (layout.value.margin.marginRight < 0) { danger('边距必须大于0'); layout.value.margin.marginRight = 0 }
  if (layout.value.margin.marginTop < 0) { danger('边距必须大于0'); layout.value.margin.marginTop = 0 }
  if (layout.value.padding.paddingBottom < 0) { danger('边距必须大于0'); layout.value.padding.paddingBottom = 0 }
  if (layout.value.padding.paddingLeft < 0) { danger('边距必须大于0'); layout.value.padding.paddingLeft = 0 }
  if (layout.value.padding.paddingRight < 0) { danger('边距必须大于0'); layout.value.padding.paddingRight = 0 }
  if (layout.value.padding.paddingTop < 0) { danger('边距必须大于0'); layout.value.padding.paddingTop = 0 }
})
</script>

<style scoped>
.layout-margin,
.layout-padding {
  display: flex;
  align-items: flex-end;
  overflow: visible;
}

.setMargin,
.setPadding {
  margin-left: 8px;
  height: 32px;
  width: 32px;
  padding-left: 2px;
  border-radius: 4px;
  text-align: center;
  border: 1px solid #eee;
  outline: none;
  transition: all .3s;

  &:hover {
    border: 1px solid #409eff;
    color: #409eff;
  }
}

.widhei {
  text-align: center;
  outline: none;
  transition: all .3s;

  &:hover {
    border: 1px solid #409eff;
    color: #409eff;
  }
}
</style>
