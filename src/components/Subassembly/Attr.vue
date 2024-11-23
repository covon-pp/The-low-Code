<template>
  <div class="control-body__attr" overflow-auto>
    <el-collapse>
      <el-collapse-item v-for="(title, index) in titles" :title="title" :name="index + 1" px-4 :key="index">
        <component :is="mapping(title)">
        </component>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import theLayout from '@/components/Subassembly/Layout.vue';
import theFont from '@/components/Subassembly/Font.vue';
import theBackground from '@/components/Subassembly/Background.vue';
import theBorder from '@/components/Subassembly/Border.vue';
import thePosition from '@/components/Subassembly/Position.vue';
import Special from './Special.vue';
const mapping = (data: string) => {
  switch (data) {
    case '特殊属性':
      return Special
    case '布局':
      return theLayout
    case '字体':
      return theFont
    case '背景':
      return theBackground
    case '边框':
      return theBorder
    case '位置':
      return thePosition
  }
}
const titles = ['特殊属性', '布局', '字体', '背景', '边框', '位置']
</script>

<style scoped>
:deep(.el-collapse-item__content) {
  padding-bottom: 0;
}
</style>
