<template>
  <div flex>
    <span>请输入：</span>
    <textarea :style="{
      width: customStyle.layout.width + 'px', height: customStyle.layout.height + 'px'
    }"></textarea>
  </div>
</template>

<script setup lang="ts">
import { type MyAttr } from '../Subassembly/Attr';
const { customStyle } = defineProps<{ customStyle: MyAttr }>()
// const { resize } = customStyle
</script>

<style scoped>
span {
  width: 72px;
}

textarea {
  width: v-bind('customStyle.width');
  /* resize: v-bind('resize'); */
}
</style>
