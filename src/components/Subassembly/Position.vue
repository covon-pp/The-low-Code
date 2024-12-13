<template>
  <div text-sm leading-12>
    <div flex items-center justify-between w-full>定位方式<dropDownList :current-data="position.positionMethod"
        :drop-list="methodList" :close-list="closeList">
      </dropDownList>
    </div>
    <div flex items-center justify-between w-full class="position-position">位置
      <SmallInput :tipData=tipData :move-x="moveX" :thePosition="thePosition" label="setPosition" w-45>
        <input type="number" v-model="position.position.top" class="setPosition"
          @mouseover="hoverEvent('上', 4, '.setPosition')" @mouseleave="cancelHover()">
        <input type="number" v-model="position.position.right" class="setPosition"
          @mouseover="hoverEvent('右', 52, '.setPosition')" @mouseleave="cancelHover()">
        <input type="number" v-model="position.position.bottom" class="setPosition"
          @mouseover="hoverEvent('下', 95, '.setPosition')" @mouseleave="cancelHover()">
        <input type="number" v-model="position.position.left" class="setPosition"
          @mouseover="hoverEvent('左', 140, '.setPosition')" @mouseleave="cancelHover()">
      </SmallInput>
    </div>
    <div flex items-center justify-between w-full>层级<input type="text" v-model="position.positionLevel" h-8 w-32 bse
        rounded placeholder="大小" class="position-level"></div>
    <div flex items-center justify-between w-full>浮动<Selection :icons="icons" :selected="position.float"
        :update="updateFloat"></Selection>
    </div>
    <div flex items-center justify-between w-full>清除浮动<Selection :icons="iconsClear" :selected="position.clearFloat"
        :update="updateClearFloat"></Selection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showStyle } from '@/stores/canvasData';
import Selection from '@/components/Subassembly/Selection.vue';
import dropDownList from '@/components/Subassembly/DropDownList.vue';
import SmallInput from '@/components/Subassembly/SmallInput.vue';
import { danger } from '@/assets/hooks/useMessageTip'
import type { Position, PositionMethod, Float, ClearFloat } from '@/components/Subassembly/Attr';
import { selectedCom, clonedComponents } from '@/stores/canvasData';
const tipData = ref("")
const moveX = ref<number>(0)
const thePosition = ref<string>()
const position = ref<Position>(showStyle.value?.position as Position)
const icons = [{ icon: '#icon-qingsao', val: 'none' }, { icon: '#icon--zuofudong', val: 'left' }, { icon: '#icon--youfudong', val: 'right' }]
const iconsClear = [{ icon: '#icon-qingsao', val: 'none' }, { icon: '#icon--qingchuzuofudong', val: 'left' }, { icon: '#icon--qingchuyoufudong', val: 'right' }, { icon: '#icon--qingchuliangcefudong', val: 'both' }]
const hoverEvent = (data: string, move: number, theTarget: string) => {
  tipData.value = data
  moveX.value = move
  if (theTarget != '') thePosition.value = theTarget
}
const cancelHover = () => {
  tipData.value = ''
  thePosition.value = ''
}
const updateFloat = (newData: Float) => {
  position.value.float = newData
}
const updateClearFloat = (data: ClearFloat) => {
  position.value.clearFloat = data
}
const closeList = (data: PositionMethod) => {
  position.value.positionMethod = data
}
const methodList: PositionMethod[] = ['static', 'relative', 'absolute', 'fixed', 'sticky']
watch(() => selectedCom.value, () => {
  if (selectedCom.value != undefined && clonedComponents.value.length > 0)
    position.value = clonedComponents.value[selectedCom.value].style.position
})
watchEffect(() => {
  if (position.value.positionLevel < 0) { danger('层级必须大于0'); position.value.positionLevel = 0 }
  if (position.value.position.bottom < 0) { danger('距离必须大于0'); position.value.position.bottom = 0 }
  if (position.value.position.left < 0) { danger('距离必须大于0'); position.value.position.left = 0 }
  if (position.value.position.right < 0) { danger('距离必须大于0'); position.value.position.right = 0 }
  if (position.value.position.top < 0) { danger('距离必须大于0'); position.value.position.top = 0 }
})
</script>

<style scoped>
.position-level {
  text-align: center;
  outline: none;
  transition: all .3s;

  &:hover {
    border: 1px solid #409eff;
    color: #409eff;
  }
}

.position-position {
  overflow: visible;
}

.setPosition {
  margin-left: 8px;
  height: 32px;
  width: 37px;
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
</style>
