<template>
  <div class="canvas" h-full bg-white relative ref="canvasRef">
    <div class="canvas-draw" @dragenter="handleDragEnter" @dragover="handleDragOver" @drop="handleDrop">
      <div v-if="isDragging" class="snap-line" :style="lineStyle"></div>
      <div class="canvas-draw__tip absolute" v-if="clonedComponents?.length === 0">画布为空，可添加组件</div>
      <component v-for="(data, index) in clonedComponents" :key="data.id" :is="getComponent(data.component)"
        :customStyle="data.style" :subassembly="data.allowChild ? data : []" class="canvas-draw__data cursor-move"
        :class="{ 'border-class': selectedCom === index }" @click="toggleBorderBorder(index)" draggable="true"
        @dragstart="innerDragStar(index)" @drop="innerDrop(index, $event)">
      </component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cloneId } from "@/stores/canvasData";
import { type Categorydata } from "@/components/ComponentList";
import { clonedComponents } from "@/stores/canvasData";
import { selectedCom } from "@/stores/canvasData";
import { getComponent } from "@/components/ComponentList";
import state from "@/stores/snapshot";
import { list } from "./ComponentList";
const isInner = ref<boolean>(false)

const isDragging = ref(false);
const canvasRef = ref<HTMLDivElement>();
const lineStyle = ref<{ top: string; left: string; width: string; height: string }>({
  top: "0",
  left: "0",
  width: "100%",
  height: "0",
});
const mouseX = ref(0);
const mouseY = ref(0);

const draggingComponentIndex = ref<number | null>(null); // 当前拖拽的组件索引
const reactiveList = reactive(list);
const dropTargetIndex = ref<number | null>(null); // 当前吸附目标索引

// watchEffect(() => {
//   console.log('拖拽组件索引：', draggingComponentIndex.value, '-----吸附目标索引：', dropTargetIndex.value);
// })

// 开始拖拽组件（内部）
const innerDragStar = (index: number) => {
  console.log('拖拽组件内部，index为' + index);
  isInner.value = true
  draggingComponentIndex.value = index;
  isDragging.value = true;
}

// 放置组件（内部）
const innerDrop = (targetIndex: number, event: DragEvent) => {
  event.preventDefault();
  console.log('放置组件内部', draggingComponentIndex.value);
  isDragging.value = false;
  if (draggingComponentIndex.value === null || clonedComponents.value.length <= 1) return;
  const draggedIndex = draggingComponentIndex.value;
  if (draggedIndex != targetIndex) {
    const draggedItem = clonedComponents.value[draggedIndex];

    // 从原位置移除拖拽组件
    clonedComponents.value.splice(draggedIndex, 1);

    // 插入到目标位置
    if (dropTargetIndex.value !== null) {
      clonedComponents.value.splice(dropTargetIndex.value, 0, draggedItem);
    } else {
      clonedComponents.value.splice(targetIndex, 0, draggedItem);
    }
  }

  // 清理拖拽状态并保存结果
  resetDraggingState();
  isInner.value = false
  state.mutations.save(state.state);
};

// 外部拖拽
//进入画布
const handleDragEnter = (event: DragEvent) => {
  console.log('进入画布外');
  isDragging.value = true;
  const id = event.dataTransfer?.getData("id");
  const subId = event.dataTransfer?.getData("subId");
  if (!id || !subId) return;
  draggingComponentIndex.value = clonedComponents.value.length;
};

// 画布中移动
const handleDragOver = (event: DragEvent) => {
  console.log('画布移动外');
  event.preventDefault();
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

// 放置组件
const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  console.log('放置组件外');
  isDragging.value = false;
  if (isInner && dropTargetIndex.value != null && draggingComponentIndex.value != null && dropTargetIndex.value === clonedComponents.value.length) {
    const tempData = clonedComponents.value[draggingComponentIndex.value]
    clonedComponents.value.splice(draggingComponentIndex.value, 1);
    clonedComponents.value.push(tempData)
  }
  // 获取外部拖拽的数据
  const id = event.dataTransfer?.getData("id");
  const subId = event.dataTransfer?.getData("subId");
  if (!id || !subId) return;
  // 复制组件并添加到展示列表
  const component = reactiveList.find((item) => item.id === id);
  let addComponent = component?.categorydata.find((item) => item.id === subId) as Categorydata;
  addComponent.id = id + "-clone-" + cloneId.value;
  cloneId.value++;
  addComponent = Object.assign({}, addComponent);
  addComponent.style = JSON.parse(JSON.stringify(addComponent.style));
  // 如果有目标吸附位置，插入到该位置
  if (dropTargetIndex.value != null) {
    clonedComponents.value.splice(dropTargetIndex.value, 0, addComponent);
  } else {
    clonedComponents.value.push(addComponent);
  }
  // 清理拖拽状态
  isInner.value = false
  resetDraggingState();
  state.mutations.save(state.state);
};

watchEffect(() => {
  if (isDragging.value) {
    const canvasBounds = canvasRef.value?.getBoundingClientRect();
    if (canvasBounds) {
      // 获取鼠标位置
      const offsetX = mouseX.value - canvasBounds.left;
      const offsetY = mouseY.value - canvasBounds.top;
      updateSnapLine(offsetX, offsetY);
    }
  }
});

// 更新吸附线
const updateSnapLine = (mouseX: number, mouseY: number) => {
  let closestIndex = null;
  let closestDistance = Infinity;
  let closestSide: "top" | "bottom" | "left" | "right" | null = null;

  // 遍历所有组件，找到距离鼠标最近的边框
  let cumulativeTop = 0; // 用于计算每个组件的 top 值
  clonedComponents.value.forEach((item, index) => {
    const { layout } = item.style;
    const { width, height } = layout;

    // 组件边界坐标
    const elementTop = cumulativeTop;
    const elementLeft = 0;
    const elementRight = elementLeft + width;
    const elementBottom = elementTop + height;

    // 计算鼠标到组件边框的距离
    const distances = {
      top: Math.abs(mouseY - elementTop),
      bottom: Math.abs(mouseY - elementBottom),
      left: Math.abs(mouseX - elementLeft),
      right: Math.abs(mouseX - elementRight),
    };

    // 更新累计高度
    cumulativeTop += height;

    // 找到最近的边
    for (const [side, distance] of Object.entries(distances)) {
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
        closestSide = side as "top" | "bottom" | "left" | "right";
      }
    }
  });

  // 如果找到最近的边框，则更新吸附线位置
  if (closestIndex !== null && closestSide !== null) {
    dropTargetIndex.value = closestIndex;

    // 获取目标组件的边界
    let cumulativeTop = 0; // 重新计算目标组件的 top 值
    for (let i = 0; i < closestIndex; i++) {
      cumulativeTop += clonedComponents.value[i].style.layout.height;
    }
    const targetTop = cumulativeTop;
    const targetLeft = 0; // 左侧固定为 0
    const targetComponent = clonedComponents.value[closestIndex];
    const { width, height } = targetComponent.style.layout;

    // 设置吸附线样式
    switch (closestSide) {
      case "top":
        lineStyle.value = {
          top: `${targetTop}px`,
          left: `${targetLeft}px`,
          width: `${width}px`,
          height: "2px",
        };
        break;
      case "bottom":
        lineStyle.value = {
          top: `${targetTop + height}px`,
          left: `${targetLeft}px`,
          width: `${width}px`,
          height: "2px",
        };
        dropTargetIndex.value = closestIndex + 1;
        break;
      case "left":
        lineStyle.value = {
          top: `${targetTop}px`,
          left: `${targetLeft}px`,
          width: "2px",
          height: `${height}px`,
        };
        break;
      case "right":
        lineStyle.value = {
          top: `${targetTop}px`,
          left: `${targetLeft + width}px`,
          width: "2px",
          height: `${height}px`,
        };
        dropTargetIndex.value = closestIndex + 1;
        break;
    }
  } else {
    // 如果未找到边框，清除吸附线
    lineStyle.value = { top: "0px", left: "0px", width: "100%", height: "0px" };
  }
}

// 清理吸附线
const resetSnapLine = () => {
  lineStyle.value = { top: "0", left: "0", width: "100%", height: "0" };
  dropTargetIndex.value = null;
};

// 清理拖拽状态
const resetDraggingState = () => {
  isDragging.value = false;
  draggingComponentIndex.value = null;
  resetSnapLine();
};

// 点击添加边框
const toggleBorderBorder = (index: number) => {
  selectedCom.value = index;
};
</script>

<style scoped>
.border-class {
  position: relative;
  overflow: visible;
  z-index: 999;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    box-sizing: inherit;
    border: 1px solid #1677ff;
  }
}

.snap-line {
  position: absolute;
  background-color: #1677ff;
  border-color: #1677ff;
  border-style: solid;
  z-index: 9999;
  pointer-events: none;
  transition: all 0.3s;
}
</style>
