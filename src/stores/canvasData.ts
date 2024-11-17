import { type Categorydata } from '@/components/ComponentList'
//存放拖拽入画布的组件数组
export const clonedComponents = ref<Categorydata[]>([])
//拖拽入画布的组件在数组的编号
export const cloneId = ref<number>(1)
//当前选择的组件在数组的位置
export const selectedCom = ref<number>()
