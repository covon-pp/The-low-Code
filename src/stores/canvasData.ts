import { type Categorydata } from '@/components/ComponentList'
//拖拽入画布的数组
export const clonedComponents = ref<Categorydata[]>([])
//拖拽入画布的数组编号
export const cloneId = ref<number>(1)
//当前选择的组件在数组的位置
export const selectedCom = ref<number>()
//上移组件
export const moveUp = (place: number | undefined) => {
  selectedCom.value = place
  if (selectedCom.value === 0) alert('已在顶层')
  else if (selectedCom.value != undefined) {
    ;[
      clonedComponents.value[selectedCom.value - 1],
      clonedComponents.value[selectedCom.value],
    ] = [
      clonedComponents.value[selectedCom.value],
      clonedComponents.value[selectedCom.value - 1],
    ]
    selectedCom.value -= 1
  }
}
//下移组件
export const moveDown = (place: number | undefined) => {
  selectedCom.value = place
  if (selectedCom.value === clonedComponents.value.length - 1) alert('已在底层')
  else if (selectedCom.value != undefined) {
    ;[
      clonedComponents.value[selectedCom.value + 1],
      clonedComponents.value[selectedCom.value],
    ] = [
      clonedComponents.value[selectedCom.value],
      clonedComponents.value[selectedCom.value + 1],
    ]
    selectedCom.value += 1
  }
}
//删除组件
export const delCom = () => {
  if (selectedCom.value == undefined) alert('请选择需要删除的组件')
  else if (
    selectedCom.value >= 0 &&
    selectedCom.value < clonedComponents.value.length
  )
    clonedComponents.value.splice(selectedCom.value, 1)
  selectedCom.value = undefined
}

//存放操作记录，实现撤销恢复功能
const state = {
  historyStore: [], //撤销之前的操作
  historyIndex: -1,
}
