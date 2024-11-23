<template>
  <div class="image-placeholder" :style="{
    width: customStyle.layout.width + 'px', height: customStyle.layout.height + 'px'
  }">
    <div class="image-placeholder__box w-full h-full flex justify-center justify-items-center flex-col items-center"
      ref="upload">
      <svg class=" icon w-6">
        <use xlink:href='#icon-jia'></use>
      </svg>
      <span>点击上传图片</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type MyAttr } from '../Subassembly/Attr';
const { customStyle } = defineProps<{ customStyle: MyAttr }>()
// const upload = ref()
// const src = ref()
// const uploadImage = (e: HTMLDivElement) => {
//   const fd = new FormData()
//   fd.append('img', e.target.files[0])
//   console.log(upload);
//   console.log(e);
//   console.log(fd);
// }
</script>

<style scoped>
.image-placeholder {
  width: 250px;
  height: 250px;
  background-color: #eee;
  border-radius: 5px;
}

/* .image__placeholder .block {
  padding: 15px;
  text-align: center;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  vertical-align: top;
}

.image__placeholder .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.image__placeholder .el-image {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
}

.image__placeholder.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 14px;
}

.image__placeholder .dot {
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
} */
</style>
