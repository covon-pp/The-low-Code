<template>
  <div class="control" h-full>
    <div class="control-header relative" text-center font-light leading-7 bbc flex justify-around>
      <div v-for="(data, index) in attribute" :key="index" @click="change(index)">{{ data }}</div>
    </div>
    <div class="control-body">
      <controlType :type="type"></controlType>
    </div>
  </div>
</template>

<script setup lang="ts">
import controlType from './Subassembly/controlType.vue';
import Animation from '@/components/Subassembly/Animation.vue';
import Event from '@/components/Subassembly/Event.vue';
import Attr from '@/components/Subassembly/Attr.vue';
const { attribute } = defineProps<{ attribute: string[] }>()
const sliderLeft = ref<string>('24px')
const type = shallowRef(Attr)
const change = (index: number) => {
  switch (index) {
    case 0:
      sliderLeft.value = '24px'
      type.value = Attr
      break;
    case 1:
      sliderLeft.value = '116px'
      type.value = Animation
      break;
    case 2:
      sliderLeft.value = '208px'
      type.value = Event
      break;
  }
}
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
