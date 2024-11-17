import { clonedComponents, selectedCom } from '@/stores/canvasData'
import { type Categorydata } from '@/components/ComponentList'
import { type Ref } from 'vue'
type State = {
  snapshotData: Ref<Categorydata[][]>
  snapshotIndex: number
}
function deepCopy(target) {
  if (typeof target == 'object') {
    const result = Array.isArray(target) ? [] : {}
    for (const key in target) {
      if (typeof target[key] == 'object') {
        result[key] = deepCopy(target[key])
      } else {
        result[key] = target[key]
      }
    }

    return result
  }
  return target
}
export default {
  state: {
    snapshotData: ref<Categorydata[][]>([]), // 编辑器快照数据
    snapshotIndex: -1, // 快照索引
  },
  mutations: {
    //撤销
    undo(state: State) {
      if (state.snapshotIndex < 0) return
      else if (state.snapshotIndex === 0) clonedComponents.value = []
      else
        clonedComponents.value =
          state.snapshotData.value[state.snapshotIndex - 1]
      state.snapshotIndex--
      console.log('撤销')
      console.log(state)
    },
    //恢复
    redo(state: State) {
      if (state.snapshotIndex < state.snapshotData.value.length - 1) {
        state.snapshotIndex++
        clonedComponents.value = state.snapshotData.value[state.snapshotIndex]
        console.log('恢复')
        console.log(state)
      }
    },
    //保存
    save(state: State) {
      // 添加新的快照
      if (
        state.snapshotData.value.length > 0 &&
        state.snapshotIndex < state.snapshotData.value.length - 1
      )
        state.snapshotData.value = state.snapshotData.value.splice(
          0,
          state.snapshotIndex + 1,
        )
      // const data = ref(deepCopy(clonedComponents.value))
      // console.log(data === clonedComponents)
      // state.snapshotData.value[state.snapshotIndex] = data.value
      state.snapshotIndex++
      state.snapshotData.value[state.snapshotIndex] = clonedComponents.value
      console.log('保存')
      console.log(state.snapshotData)
    },
  },
}
