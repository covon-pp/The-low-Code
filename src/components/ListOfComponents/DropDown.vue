<template>
  <div :style="{
    width: transformPX(layout.width),
    height: transformPX(layout.height),
    paddingTop: transformPX(padding.paddingTop),
    paddingRight: transformPX(padding.paddingRight),
    paddingBottom: transformPX(padding.paddingBottom),
    paddingLeft: transformPX(padding.paddingLeft),
    marginTop: transformPX(margin.marginTop),
    marginRight: transformPX(margin.marginRight),
    marginBottom: transformPX(margin.marginBottom),
    marginLeft: transformPX(margin.marginLeft),
    display: layout.display,
    borderWidth: transformPX(borderStyle.borderWidth),
    borderStyle: borderDirection,
    borderColor: borderStyle.borderColor,
    borderRadius: transformPX(border.borderRadio),
    color: font.fontColor,
    textAlign: font.textAlign,
    fontWeight: font.fontWeight,
    fontSize: transformPX(font.fontSize),
    opacity: background.backgroundOpacity,
    position: position.positionMethod,
    top: transformPX(position.position.top),
    right: transformPX(position.position.right),
    bottom: transformPX(position.position.bottom),
    left: transformPX(position.position.left),
    float: position.float,
    clear: position.clearFloat,
    zIndex: position.positionLevel,
  }">
    <div class="showData" relative h-full flex justify-evenly items-center>
      <span>{{ customStyle.font.propValue }}</span>
      <svg class="icon" aria-hidden="true" w-4 h-4 cursor:pointer @click.stop="showList = true">
        <use xlink:href='#icon-fanhui'></use>
      </svg>
      <div v-show="showList" class="dropList_list" absolute :style="{ top: transformPX(layout.height) }">
        <div class="dropList_list--data" v-for="(data, index) in dropList" :key="index" @click.stop="showList = false">
          {{
            data }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showStyle } from '@/stores/canvasData';
import { type MyAttr } from '../Subassembly/Attr';
import { transformPX, getBorderDirection } from '@/assets/hooks/useStyle';
const { customStyle } = defineProps<{ customStyle: MyAttr }>()
const { layout, font, background, border, position } = customStyle;
const { padding, margin } = layout;
const { borderStyle } = border
const showList = ref<boolean>(false)
const dropList = ['drop 1', 'drop 2', 'drop 3', 'drop 4']
//border边框位置
const borderDirection = ref<string>('none')
watchEffect(() => {
  borderDirection.value = getBorderDirection(border.borderDirection, border.borderStyle.borderStyle)
})
</script>

<style scoped lang="scss">
.icon {
  transform: rotate(-90deg);
}
</style>
