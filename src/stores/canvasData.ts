import { type Categorydata } from '@/components/ComponentList'
//拖拽入画布的数组
export const clonedComponents = ref<Categorydata[]>([])
//拖拽入画布的数组编号
export const cloneId = ref<number>(0)
