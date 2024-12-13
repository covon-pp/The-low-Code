<template>
  <button :style="{
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
    backgroundColor: background.backgroundColor,
    opacity: background.backgroundOpacity,
    position: position.positionMethod,
    top: transformPX(position.position.top),
    right: transformPX(position.position.right),
    bottom: transformPX(position.position.bottom),
    left: transformPX(position.position.left),
    float: position.float,
    clear: position.clearFloat,
    zIndex: position.positionLevel,
  }"><span>按钮</span></button>
</template>

<script setup lang="ts">
import { type MyAttr } from '../Subassembly/Attr';
import { transformPX, getBorderDirection } from '@/assets/hooks/useStyle';
const { customStyle } = defineProps<{ customStyle: MyAttr }>()
const { layout, font, background, border, position } = customStyle;
const { padding, margin } = layout;
const { borderStyle } = border

//border边框位置
const borderDirection = ref<string>('none')
watchEffect(() => {
  borderDirection.value = getBorderDirection(border.borderDirection, border.borderStyle.borderStyle)
})

</script>

<style scoped></style>
