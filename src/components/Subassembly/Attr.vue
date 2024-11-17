<template>
  <div class="demo-collapse" v-show="showData != undefined">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="通用样式" name="1" px-4>
        <div>
          组件名：{{ showData?.label }}
        </div>
      </el-collapse-item>
      <el-collapse-item title="Efficiency" name="2" px-4>
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps
          the users to identify and frees them from memorizing and recalling.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Controllability" name="3" px-4>
        <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to
          operate, including canceling
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
  <div>
  </div>
  <div v-show="showData === undefined">暂无选中组件，点击画布中的组件可以进行选择。</div>
</template>

<script setup lang="ts">
import { type Categorydata } from '@/components/ComponentList';
const { showData } = defineProps<{ showData: Categorydata | undefined }>()
const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<style scoped></style>
