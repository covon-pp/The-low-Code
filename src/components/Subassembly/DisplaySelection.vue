<template>
  <div flex items-center rounded-lg h-8 w-34 class="layout-selection">
    <span flex items-center h-7 v-for="(icon, index) in icons" :key="index"
      :class="index == clickItem ? 'bgcWhite' : ''" @click="clickItem = index">
      <svg class="icon arr h-4 w-8" aria-hidden="true">
        <use :xlink:href='icon.icon'></use>
      </svg>
    </span>
  </div>
</template>

<script setup lang="ts">
const { icons, updateDisplay, selectedDisplay } = defineProps<{
  icons: { icon: string, display: string }[],
  updateDisplay: (newDisplay: string) => void,
  selectedDisplay: string
}>()
const clickItem = ref<number>(0)
watchEffect(() => {
  updateDisplay(icons[clickItem.value].display)
})
onBeforeUpdate(() => {
  clickItem.value = icons.findIndex((item) => item.display === selectedDisplay)
})
</script>

<style scoped lang="scss">
.layout-selection {
  padding: 2px;
  background-color: #f5f5f5;

  &>span {
    border-radius: 6px;
    transition: all .3s;
  }
}

.bgcWhite {
  background-color: #fff;
}
</style>
