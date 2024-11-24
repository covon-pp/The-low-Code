import { clonedComponents, selectedCom } from '@/stores/canvasData'
import { type Categorydata } from '@/components/ComponentList'
import { type Ref } from 'vue'
type SelectedHistory = number | undefined
type State = {
  snapshotData: Ref<Categorydata[][]>
  selectedHistory: SelectedHistory[]
  snapshotIndex: number
  isRedo: Ref<boolean>
  isUndo: Ref<boolean>
}
export default {
  state: {
    snapshotData: ref<Categorydata[][]>([]), // 编辑器快照数据
    selectedHistory: [], //选择的组件历史记录
    snapshotIndex: -1, // 快照索引
    isRedo: ref(false), //是否可撤销
    isUndo: ref(false), //是否可恢复
  },
  mutations: {
    //撤销
    undo(state: State) {
      if (state.snapshotIndex < 0) return
      else if (state.snapshotIndex === 0) {
        clonedComponents.value = []
        selectedCom.value = undefined
      } else {
        clonedComponents.value = JSON.parse(
          JSON.stringify(state.snapshotData.value[state.snapshotIndex - 1]),
        )
        selectedCom.value = state.selectedHistory[state.snapshotIndex - 1]
      }

      state.snapshotIndex -= 1
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
        selectedCom.value = state.selectedHistory[state.snapshotIndex]
        state.isRedo.value = true
        state.isUndo.value =
          state.snapshotData.value.length - 1 > state.snapshotIndex
        console.log('恢复')
      }
    },
    //保存
    save(state: State) {
      //若为撤销重新添加的记录，覆盖原有记录
      if (state.snapshotIndex < state.snapshotData.value.length - 1) {
        state.snapshotData.value = state.snapshotData.value.slice(
          0,
          state.snapshotIndex + 1,
        )
      }
      state.snapshotIndex++
      state.snapshotData.value.push(
        JSON.parse(JSON.stringify(clonedComponents.value)),
      )
      state.selectedHistory.push(selectedCom.value)
      console.log('保存', state)
      state.isRedo.value = true
      state.isUndo.value =
        state.snapshotData.value.length - 1 > state.snapshotIndex
    },
  },
}
