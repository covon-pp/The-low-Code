<template>
  <div class="control-body__attr" overflow-auto>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="特有属性" name="1" px-4>
        <div>
          组件名：{{ showData?.label }}
        </div>
        <div>宽度：<input v-model="showData.style.width"></div>
      </el-collapse-item>
      <el-collapse-item :title="attList.layout.name" name="2" px-4>
        <div>
          组件名：{{ showData?.label }}
        </div>
      </el-collapse-item>
      <el-collapse-item :title="attList.font.name" name="3" px-4>
        <div>
          组件名：{{ showData?.label }}
        </div>
      </el-collapse-item>
      <el-collapse-item :title="attList.background.name" name="4" px-4>
        <div>
          组件名：{{ showData?.label }}
        </div>
      </el-collapse-item>
      <el-collapse-item :title="attList.border.name" name="5" px-4>
        <div>
          组件名：{{ showData?.label }}
        </div>
      </el-collapse-item>
      <el-collapse-item :title="attList.position.name" name="6" px-4>
        <div>
          组件名：{{ showData?.label }}
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { attList } from './Attr';
import { type Categorydata } from '@/components/ComponentList';
const { showData } = defineProps<{ showData: Categorydata | undefined }>()
const activeNames = ref(['1'])
</script>

<style scoped></style>
