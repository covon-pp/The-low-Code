<template>
  <div :style="customStyle" flex>
    <span>请输入：</span>
    <textarea></textarea>
  </div>
</template>

<script setup lang="ts">
const { customStyle } = defineProps(['customStyle'])
const { resize } = customStyle
</script>

<style scoped>
span {
  width: 72px;
}

textarea {
  width: v-bind('customStyle.width');
  resize: v-bind('resize');
}
</style>
