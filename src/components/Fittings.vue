<template>
  <div class="fittings h-4/6" bbc>
    <div class="fittings-header" text-center font-light text-xl bbc>
      <span>组件库</span>
    </div>
    <div class="fittings-main overflow-auto pb-2">
      <div class="fittings-main__subassembly" v-for="(data, index) in reactiveList" :key="index">
        <div class="fittings-main__title px-3.5 pb-2 flex justify-between">
          <div class="fittings-main__subtitle">{{ data.category }}</div>
          <div class="fittings-main__subicon">
            <svg class="icon arr w-4 h-4" aria-hidden="true" @click="changeAct(index)">
              <use xlink:href='#icon-xiajiantou'></use>
            </svg>
          </div>
        </div>
        <div class="fittings-main__datas overflow-hidden grid grid-cols-3 justify-items-center"
          v-if="!arrowhead[index].isFold">
          <VueDraggable ref="el" v-model="data.categorydata" ghostClass="ghost" :animation="150"
            class="draggable-root-div" :group="{ name: 'component', pull: 'clone', put: false }" :clone="clone"
            :sort="false">
            <div class="fittings-main__data" :key="index" v-for="(ele, index) in data.categorydata"
              :data-type="ele.component">
              <div class="flex flex-col items-center w-16">
                <div class="fittings-main__icon w-12 h-12 rounded flex items-center justify-center cursor-move">
                  <svg class="icon" aria-hidden="true" w-5 h-5>
                    <use :xlink:href='ele.icon'></use>
                  </svg>
                </div>
                <div class="fittings-main__msg pt-1 cursor-move">{{ ele.label }}</div>
              </div>
            </div>
          </VueDraggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { list, type Style } from './ComponentList'
import { type UseDraggableReturn, VueDraggable } from 'vue-draggable-plus'
import { cloneId } from '@/stores/canvasData';
const reactiveList = reactive(list)
const el = ref<UseDraggableReturn>()
type Arr = {
  index: number, isFold: boolean, rotate: string, height: string
}
type Categorydata = {
  id: string;
  component: ReturnType<typeof markRaw>;
  label: string;
  propValue: object | string;
  icon: string;
  style: Style;
}
// const clone = (originalItem: Categorydata) => ({ ...originalItem });
//为克隆后的组件修改编号
const clone = (originalItem: Categorydata) => {
  const item = Object.assign({}, originalItem)
  item.id = originalItem.id + '-clone-' + cloneId.value
  cloneId.value++
  return ({ ...item })
}

const arrowhead = ref<Arr[]>([
  {
    index: 0,
    isFold: false,
    rotate: 'rotate(0deg)',
    height: 'auto'
  },
  {
    index: 1,
    isFold: false,
    rotate: 'rotate(0deg)',
    height: 'auto'
  },
  {
    index: 2,
    isFold: false,
    rotate: 'rotate(0deg)',
    height: 'auto'
  }
])
const changeAct = (index: number) => {
  arrowhead.value[index].isFold = !arrowhead.value[index].isFold
  if (arrowhead.value[index].isFold) {
    arrowhead.value[index].rotate = 'rotate(90deg)'
    arrowhead.value[index].height = '0'
  }
  else {
    arrowhead.value[index].rotate = 'rotate(0deg)'
    arrowhead.value[index].height = 'auto'
  }
}
</script>

<style scoped>
.fittings-main__subassembly:nth-child(1) .arr {
  transform: v-bind('arrowhead[0].rotate');
  transition: all 0.3s;
}

.fittings-main__subassembly:nth-child(1) .fittings-main__datas {
  height: v-bind('arrowhead[0].height');
  transition: all 0.3s;
}

.fittings-main__subassembly:nth-child(2) .arr {
  transform: v-bind('arrowhead[1].rotate');
  transition: all 0.3s;
}

.fittings-main__subassembly:nth-child(2) .fittings-main__datas {
  height: v-bind('arrowhead[1].height');
  transition: all 1s linear;
}

.fittings-main__subassembly:nth-child(3) .arr {
  transform: v-bind('arrowhead[2].rotate');
  transition: all 0.3s;
}

.fittings-main__subassembly:nth-child(3) .fittings-main__datas {
  height: v-bind('arrowhead[2].height');
  transition: all .6s;
}
</style>
