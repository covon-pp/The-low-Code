<template>
  <div class="main" w-screen h-screen>
    <!--顶部工具栏-->
    <Toolbar></Toolbar>
    <!-- 此处应有预览区域 -->

    <!--主要操作区域-->
    <div class="editor" flex justify-between relative>

      <!--左侧组件列表区域-->
      <Transition name="left">
        <div class="editor-fittings" h-full shrink-0 v-if="leftShow">
          <Fittings></Fittings>
          <SelectedFittings></SelectedFittings>
        </div>
      </Transition>
      <button class="editor-ctrbtn editor-ctrbtn__left" @click="closeList('left')">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href='leftShow ? "#icon-fanhui" : "#icon-fanhui-copy"'></use>
        </svg>
      </button>
      <!-- 关闭左侧列表按钮 -->

      <!--中间画布区域-->
      <div class="editor-container" w-full h-full p-5>
        <Canvas></Canvas>
      </div>

      <!-- 关闭右侧列表按钮 -->
      <button class="editor-ctrbtn editor-ctrbtn__right" @click="closeList('right')">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href='rightShow ? "#icon-fanhui-copy" : "#icon-fanhui"'></use>
        </svg>
      </button>
      <!--右侧修改属性区域-->
      <Transition name="right">
        <div class="editor-control" h-full shrink-0 v-if="rightShow">
          <Control :attribute="attribute"></Control>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import Toolbar from '@/components/Toolbar.vue';
import Fittings from '@/components/Fittings.vue';
import SelectedFittings from '@/components/SelectedFittings.vue';
import Canvas from '@/components/Canvas.vue';
import Control from '@/components/Control.vue';
const leftShow = ref<boolean>(true)
const rightShow = ref<boolean>(true)
const distance = ref({ left: '275px', right: '275px' })
const attribute = markRaw<string[]>(['属性', '动画', '事件'])
const closeList = (pos: string) => {
  if (pos === 'left') {
    leftShow.value = !leftShow.value
    //左列表缩小
    if (!leftShow.value) distance.value.left = '0'
    //左列表展开
    else distance.value.left = '275px'
  } else {
    rightShow.value = !rightShow.value
    //右列表缩小
    if (!rightShow.value) distance.value.right = '0'
    //右列表展开
    else distance.value.right = '275px'
  }
}
</script>

<style scoped>
.editor-ctrbtn__left {
  transition: left .4s;
  left: v-bind('distance.left');
}

.editor-ctrbtn__right {
  transition: right .4s;
  right: v-bind('distance.right');
}
</style>
