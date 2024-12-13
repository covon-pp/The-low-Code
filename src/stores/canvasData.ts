import { type Categorydata } from '@/components/ComponentList'
import { type MyAttr } from '@/components/Subassembly/Attr'
//存放拖拽入画布的组件数组
export const clonedComponents = ref<Categorydata[]>([])
//拖拽入画布的组件在数组的编号
export const cloneId = ref<number>(1)
//当前选择的组件在数组的位置
export const selectedCom = ref<number>()
//当前选择的组件的id
export const selectedId = ref<string>()
//获取选择的组件样式
export const showStyle = ref<MyAttr>()
watchEffect(() => {
  if (selectedCom.value != undefined && clonedComponents.value.length > 0)
    showStyle.value = clonedComponents.value[selectedCom.value].style
  else showStyle.value = undefined
})
