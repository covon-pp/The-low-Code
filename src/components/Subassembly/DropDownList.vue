<template>
  <el-dropdown>
    <span class="el-dropdown-link" :style="{ width: width ? width + 'px' : '128px' }">
      {{ currentData }}
    </span>
    <template #dropdown>
      <el-dropdown-menu w-32>
        <el-dropdown-item v-for="(data, index) in dropList" :key="index" @click="closeList(data)">{{ data
          }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
const { dropList, closeList, currentData, width } = defineProps<{
  dropList: string[],
  closeList: (data: any) => void,
  currentData: number | string,
  width?: number
}>()
</script>

<style scoped lang="scss">
.el-dropdown-link {
  border: 1px solid #eee;
  width: 128px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 4px;
  transition: all .3s;

  &:hover {
    border: 1px solid #409eff;
    color: #409eff;
  }
}
</style>
