<template>
  <div class="control" h-full>
    <div class="control-header relative" text-center font-light leading-7 bbc flex justify-around>
      <div v-for="(data, index) in attribute" :key="index" @click="change(index)">{{ data }}</div>
    </div>
    <div class="control-body">
      <controlType> {{ attr === undefined ? '请选择组件' : attr }} </controlType>
    </div>
  </div>
</template>

<script setup lang="ts">
import emitter from '@/assets/utils/emitter';
import { type Categorydata, type Style } from '@/components/ComponentList';
import { clonedComponents } from '@/stores/canvasData';
import controlType from './Subassembly/controlType.vue';
const { attribute } = defineProps<{
  attribute: string[]
}>()
const sliderLeft = ref<string>('24px')
const change = (index: number) => {
  switch (index) {
    case 0:
      sliderLeft.value = '24px'
      break;
    case 1:
      sliderLeft.value = '116px'
      break;
    case 2:
      sliderLeft.value = '208px'
      break;
  }
}
const attr = ref<Style>()
// const animation = ref()
// const event = ref()
emitter.on('send-cloneData', (data: Categorydata) => {
  attr.value = data.style
})
emitter.on('clear-detail', () => {
  attr.value = undefined
})
onUnmounted(() => {
  emitter.all.clear()
})
</script>

<style scoped lang="scss">
.control {
  &-header {
    &::after {
      content: '';
      position: absolute;
      left: v-bind('sliderLeft');
      bottom: 0;
      width: 45px;
      height: 2px;
      background-color: #40a9ff;
      transition: all .3s;
    }
  }
}
</style>
