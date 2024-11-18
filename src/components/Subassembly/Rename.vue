<template>
  <div class="toolbar-name__christen flex align-center">
    <div v-if="isRename">{{ christen }}</div>
    <div v-if="!isRename"><input type="text" v-model="christen" hover:border-blue-300 focus:border-blue-300 autofocus>
    </div>
    <button @click="changeName" :class="icon === '#icon-dagou' ? 'blueBoredr' : ''">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href=icon></use>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { danger } from '@/assets/hooks/useMessageTip';
const { isRename, changeName, icon } = defineProps<{ isRename: boolean, icon: string, changeName: () => void }>()
const christen = ref<string>('未命名标题')
watchEffect(() => {
  if (christen.value.length > 8) {
    danger('最多不能超过8个字符')
    christen.value = christen.value.slice(0, 8)
  }
})
</script>

<style scoped>
.blueBoredr {
  width: 30px;
  border-radius: 6px;
  border: 1px solid #eee;
}

.blueBoredr:hover {
  background-color: #fff;
  border: 1px solid #409eff;
}
</style>
