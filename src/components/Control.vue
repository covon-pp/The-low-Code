<template>
  <div class="control">
    <div class="control-header relative" text-center font-light leading-7 bbc flex justify-around>
      <div v-for="(data, index) in attribute" :key="index" @click="change(index)">{{ data }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
