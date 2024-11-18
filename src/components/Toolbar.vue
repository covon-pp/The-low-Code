<template>
  <div class="toolbar" w-full whitespace-nowrap bbc flex justify-between items-center>
    <div class="toolbar-name">
      <Rename :isRename="isRename" :changeName="changeName" :icon="icon"></Rename>
    </div>
    <div class="toolbar-btns" flex justify-center>
      <el-button>导入</el-button>
      <el-button @click="state.mutations.undo(state.state)" :disabled="!state.state.isRedo.value">撤销</el-button>
      <el-button @click="state.mutations.redo(state.state)" :disabled="!state.state.isUndo.value">恢复</el-button>
      <el-button @click="delCom">删除</el-button>
      <el-button @click="clearAll" :disabled="clonedComponents.length === 0">清空画布</el-button>
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
import Rename from '@/components/Subassembly/Rename.vue';
import state from '@/stores/snapshot'
import { success } from '@/assets/hooks/useMessageTip';
const isRename = ref<boolean>(true)
const icon = ref<string>('#icon-igw-l-edit')
const clearAll = () => {
  clonedComponents.value = []
  cloneId.value = 1
  selectedCom.value = undefined
  state.mutations.save(state.state)
}
const changeName = () => {
  if (isRename.value) icon.value = '#icon-dagou'
  else {
    success('修改成功')
    icon.value = '#icon-igw-l-edit'
  }
  isRename.value = !isRename.value
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
