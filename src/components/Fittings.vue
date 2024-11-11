<template>
  <div class="fittings h-3/4" bbc>
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

        <div class="fittings-main__datas overflow-hidden grid grid-cols-3" v-if="!arrowhead[index].isFold">
          <draggable ghost-class="ghost" itemKey="id" @mousedown.prevent :list="data.categorydata"
            :force-fallback="true" :group="{ name: 'list', pull: 'clone', put: false }" :sort="false"
            class="draggable-root-div" @start="onStart" @update="onUpdate" @end="onEnd">
            <template #item="{ element }">
              <div class="fittings-main__data flex flex-col items-center cursor-move">
                <div class="fittings-main__icon w-12 h-12 rounded flex items-center justify-center">
                  <svg class="icon" aria-hidden="true" w-5 h-5>
                    <use :xlink:href='element.icon'></use>
                  </svg>
                </div>
                <div class="fittings-main__msg pt-1">{{ element.label }}</div>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { list } from './ComponentList'
import draggable from 'vuedraggable'
const reactiveList = reactive(list)
type Arr = {
  index: number, isFold: boolean, rotate: string, height: string
}
const onStart = (e: DraggableEvent) => {
  console.log('start', e)
}

const onEnd = (e: DraggableEvent) => {
  console.log('onEnd', e)
}

const onUpdate = () => {
  console.log('update')
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
