import { selectedCom, clonedComponents } from '@/stores/canvasData'
import state from '@/stores/snapshot'
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
    state.mutations.save(state.state)
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
    state.mutations.save(state.state)
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
  state.mutations.save(state.state)
}
