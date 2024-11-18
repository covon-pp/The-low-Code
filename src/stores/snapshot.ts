import { clonedComponents } from '@/stores/canvasData'
import { type Categorydata } from '@/components/ComponentList'
import { type Ref } from 'vue'
type State = {
  snapshotData: Ref<Categorydata[][]>
  snapshotIndex: number
  isRedo: Ref<boolean>
  isUndo: Ref<boolean>
}
export default {
  state: {
    snapshotData: ref<Categorydata[][]>([]), // 编辑器快照数据
    snapshotIndex: -1, // 快照索引
    isRedo: ref(false), //是否可撤销
    isUndo: ref(false), //是否可恢复
  },
  mutations: {
    //撤销
    undo(state: State) {
      if (state.snapshotIndex < 0) return
      else if (state.snapshotIndex === 0) clonedComponents.value = []
      else
        clonedComponents.value = JSON.parse(
          JSON.stringify(state.snapshotData.value[state.snapshotIndex - 1]),
        )
      state.snapshotIndex--
      state.isUndo.value = true
      state.isRedo.value = state.snapshotIndex != -1
      console.log('撤销')
    },
    //恢复
    redo(state: State) {
      if (state.snapshotIndex < state.snapshotData.value.length - 1) {
        state.snapshotIndex++
        clonedComponents.value = JSON.parse(
          JSON.stringify(state.snapshotData.value[state.snapshotIndex]),
        )
        state.isRedo.value = true
        state.isUndo.value =
          state.snapshotData.value.length - 1 > state.snapshotIndex
        console.log('恢复')
      }
    },
    //保存
    save(state: State) {
      state.snapshotIndex++
      state.snapshotData.value.push(
        JSON.parse(JSON.stringify(clonedComponents.value)),
      )
      console.log('保存')
      state.isRedo.value = true
      state.isUndo.value =
        state.snapshotData.value.length - 1 > state.snapshotIndex
    },
  },
}
