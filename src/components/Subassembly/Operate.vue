<template>
  <div class="selectedFittings-icon w-16 flex items-center justify-between">
    <svg class="icon" aria-hidden="true" w-4 h-4 cursor-pointer v-for="(icon, index) in icons" :key="index"
      @click.stop="moveEle(index)">
      <use :xlink:href='icon'></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { delCom, moveUp, moveDown } from '@/assets/hooks/useOpera';
const icons = ['#icon-shangyi', '#icon-xiayi', '#icon-shanchu']
const { place } = defineProps(['place'])
const moveEle = (index: number) => {
  //index是上移下移删除选项
  switch (index) {
    case 0:
      moveUp(place)
      break
    case 1:
      moveDown(place)
      break
    case 2:
      delCom()
      break
  }
}
</script>

<style scoped></style>
