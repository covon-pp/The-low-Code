<template>
  <div flex items-center rounded-lg h-8 class="selection">
    <span flex items-center h-7 v-for="(icon, index) in icons" :key="index"
      :class="index == clickItem ? 'bgcWhite' : ''" @click="clickItem = index">
      <svg class="icon arr h-4 w-8" aria-hidden="true">
        <use :xlink:href='icon.icon'></use>
      </svg>
    </span>
  </div>
</template>

<script setup lang="ts">
const { icons, update, selected } = defineProps<{
  icons: { icon: string, val: string }[],
  update: (newData: any) => void,
  selected: string
}>()
const clickItem = ref<number>(0)
onBeforeUpdate(() => {
  clickItem.value = icons.findIndex((item) => item.val === selected)
  watchEffect(() => {
    update(icons[clickItem.value].val as string)
  })
})
</script>

<style scoped lang="scss">
.selection {
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
