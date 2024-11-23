<template>
  <div relative inline-block overflow-visible>
    <teleport :disabled="thePosition != 'body'" :to="thePosition">
      <transition name="tip">
        <Tip :tip-data="tipData" v-if="tipData != '' && '.' + label === thePosition" :style="{ left: moveX + 'px' }">
        </Tip>
      </transition>
    </teleport>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import Tip from '@/components/Subassembly/Tip.vue';
const { tipData, moveX, thePosition, label } = defineProps(['tipData', 'moveX', 'thePosition', 'label'])
</script>

<style scoped></style>
