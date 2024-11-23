<template>
  <button round :style="{
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
    display: layout.display
  }">按钮</button>
</template>

<script setup lang="ts">
import { type MyAttr } from '../Subassembly/Attr';
import { transformPX } from '@/assets/hooks/useStyle';
const { customStyle } = defineProps<{ customStyle: MyAttr }>()
const { layout, font, background, border, position } = customStyle;
const { padding, margin } = layout;
</script>

<style scoped></style>
