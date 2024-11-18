import { ElMessage } from 'element-plus'
const danger = (data: string) => {
  ElMessage({
    message: data,
    duration: 1000,
    type: 'error',
  })
}
const success = (data: string) => {
  ElMessage({
    message: data,
    duration: 1000,
    type: 'success',
  })
}
export { danger, success }
