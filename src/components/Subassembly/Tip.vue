<template>
  <div class="tip" bse>
    {{ tipData }}
  </div>
</template>

<script setup lang="ts">
const { tipData } = defineProps(['tipData'])
</script>

<style scoped lang="scss">
.tip {
  position: absolute;
  top: -30px;
  left: 6px;
  width: 40px;
  padding: 6px;
  text-align: center;
  border-radius: 6px;
  line-height: 16px;
  background-color: #409eff;
  color: #fff;
  overflow: visible;
  z-index: 100;

  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    left: 15px;
    bottom: -3px;
    width: 8px;
    height: 8px;
    rotate: 45deg;
    background-color: #409eff;
    border-bottom: 1px solid #409eff;
    border-right: 1px solid #409eff;
  }
}
</style>
