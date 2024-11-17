<template>
  <div class="toolbar" w-full whitespace-nowrap bbc flex justify-between items-center>
    <div class="toolbar-christen flex align-center">
      <div>{{ christen }}</div>
      <button>
        <svg class="icon" aria-hidden="true">
          <use xlink:href='#icon-igw-l-edit'></use>
        </svg>
      </button>
    </div>
    <div class="toolbar-btns" flex justify-center>
      <el-button>导入</el-button>
      <el-button @click="state.mutations.undo(state.state)">撤销</el-button>
      <el-button @click="state.mutations.redo(state.state)">恢复</el-button>
      <el-button @click="delCom">删除</el-button>
      <el-button @click="clearAll">清空画布</el-button>
      <el-button @click="moveUp(selectedCom)">上移一层</el-button>
      <el-button @click="moveDown(selectedCom)">下移一层</el-button>
    </div>
    <div class="toolbar-save">
      <el-button>预览</el-button>
      <el-button>保存</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { delCom, moveUp, moveDown } from '@/assets/hooks/useOpera';
import { clonedComponents, cloneId, selectedCom } from '@/stores/canvasData'
import state from '@/stores/snapshot'
const christen = ref<string>('未命名标题')
const clearAll = () => {
  clonedComponents.value = []
  cloneId.value = 1
  selectedCom.value = undefined
  state.mutations.save(state.state)
}
</script>

<style scoped lang="scss">
/*样式穿透修改默认样式*/
:deep(.el-button) {
  height: 35px;
}

:deep(.el-button+.el-button) {
  margin-left: 20px;
}
</style>
