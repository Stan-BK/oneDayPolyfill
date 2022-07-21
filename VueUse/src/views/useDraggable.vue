<script setup lang="ts">
import { useDraggable } from '@/composables';
// import { useDraggable } from '@vueuse/core';
import { onMounted, ref, isRef } from 'vue';

const dragitem = ref()
const { x, y, style } = useDraggable(dragitem)
</script>
<template>
  <div class="draggable">
    <div class="dragitem" :style="style" ref="dragitem">
      Drag me!
      <br>
      <span>x: {{ x.toFixed(2) }}</span>
      <br>
      <span>y: {{ y.toFixed(2) }}</span>
    </div>
  </div>
</template>
<style scoped>
.draggable {
  padding: 20px;
}
.dragitem {
  position: absolute;
  width: 200px;
  height: 100px;
  background-color: #666;
  border-radius: 25px;
  padding: 20px;
}
</style>