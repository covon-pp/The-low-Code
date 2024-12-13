<template>
  <div draggable="true" @dragenter.stop="handleDragEnter" @dragover.stop="handleDragOver" @drop.stop="handleDrop" h-full
    :style="typeof subassembly.children === 'string' || typeof subassembly.children === 'undefined' ? {
      width: transformPX(layout.width),
      height: transformPX(layout.height),
      paddingTop: transformPX(padding.paddingTop),
      paddingRight: transformPX(padding.paddingRight),
      paddingBottom: transformPX(padding.paddingBottom),
      paddingLeft: transformPX(padding.paddingLeft),
      marginTop: transformPX(margin.marginTop),
      marginRight: transformPX(margin.marginRight),
      marginBottom: transformPX(margin.marginBottom),
      marginLeft: transformPX(margin.marginLeft),
      display: layout.display,
      borderWidth: transformPX(borderStyle.borderWidth),
      borderStyle: borderDirection,
      borderColor: borderStyle.borderColor,
      borderRadius: transformPX(border.borderRadio),
      color: font.fontColor,
      textAlign: font.textAlign,
      fontWeight: font.fontWeight,
      fontSize: transformPX(font.fontSize),
      backgroundColor: background.backgroundColor,
      opacity: background.backgroundOpacity,
      position: position.positionMethod,
      top: transformPX(position.position.top),
      right: transformPX(position.position.right),
      bottom: transformPX(position.position.bottom),
      left: transformPX(position.position.left),
      float: position.float,
      clear: position.clearFloat,
      zIndex: position.positionLevel,
    } : {}" class="raster">
    <div v-if="typeof subassembly.children === 'string' || typeof subassembly.children === 'undefined'"
      class="placeholder" border-dashed border-blue-200 h-full>
      请添加组件
    </div>
    <component v-else :is="getComponent(subassembly.children?.component)" :customStyle="subassembly.children.style"
      class="child-component" draggable="true" @dragstart.stop="startDraggingChild(subassembly.children.id)"
      @dragover.stop="onChildDragOver(subassembly.children.id, $event)" @drop.stop="onChildDrop"></component>
  </div>
</template>

<script setup lang="ts">
import { selectedCom, clonedComponents } from '@/stores/canvasData';
import { type MyAttr } from '../Subassembly/Attr';
import { type Categorydata } from '@/components/ComponentList';
import { transformPX, getBorderDirection } from '@/assets/hooks/useStyle';
import { getComponent } from "@/components/ComponentList";
import { cloneId } from "@/stores/canvasData";
import { list } from "@/components/ComponentList";
const reactiveList = reactive(list);
const { customStyle, subassembly } = defineProps<{ customStyle: MyAttr, subassembly: Categorydata }>()
const { layout, font, background, border, position } = customStyle;
const { padding, margin } = layout;
const { borderStyle } = border
const currentChildrenData = ref<Categorydata>()
// const draggingComponentIndex = ref<number | null>(null);

//border边框位置
const borderDirection = ref<string>('none')
watchEffect(() => {
  borderDirection.value = getBorderDirection(border.borderDirection, border.borderStyle.borderStyle)
})
// const toggleChildSelection = (index: number) => {
//   selectedCom.value = index;
// };

const startDraggingChild = (id: string) => {
  console.log('开始拖动子组件，id为：', id);
  // draggingComponentIndex.value = index;
};
const onChildDragOver = (id: string, event: DragEvent) => {
  event.preventDefault();
  console.log('子组件拖拽到索引：', id);
};
const onChildDrop = () => {
  console.log('子组件放置');
}
const handleDragEnter = () => {
  console.log('进入');
}
const handleDragOver = (event: DragEvent) => {
  event.preventDefault();
  console.log('移动');
}
const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  const id = event.dataTransfer?.getData("id");
  const subId = event.dataTransfer?.getData("subId");
  if (!id || !subId) return;

  const component = reactiveList.find((item) => item.id === id);
  let addComponent = component?.categorydata.find((item) => item.id === subId) as Categorydata;
  addComponent = { ...addComponent, id: id + "-clone-" + cloneId.value };
  cloneId.value++;
  subassembly.children = addComponent

  console.log("当前子组件：", subassembly.children);
};

// 开始拖拽组件（内部）
// const innerDragStar = (index: number) => {
//   console.log('拖拽组件内部，index为' + index);
// }

// const innerDrop = (event: DragEvent) => {
//   event.preventDefault();
//   console.log('放置组件内部', event);
// };

watch(() => selectedCom.value, () => {
  if (selectedCom.value != undefined)
    currentChildrenData.value = clonedComponents.value[selectedCom.value].children as Categorydata
})
</script>

<style scoped>
.raster {
  width: v-bind('customStyle.layout.width');
  height: v-bind('customStyle.layout.height');
}

.raster {
  position: relative;
  display: flex;
  flex-direction: column;
}

.child-container {
  position: relative;
  border: 1px dashed transparent;
}

.child-container.border-class {
  border-color: #1677ff;
}

.placeholder {
  padding: 10px;
  text-align: center;
  color: #aaa;
}
</style>
