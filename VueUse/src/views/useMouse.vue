<script setup lang="ts">
import { reactive, ref } from 'vue'
// import { useMouse } from '@vueuse/core'
import { useMouse, useDraggable } from '@/composables'

const test = ref()
const mouse = useMouse()
const text = reactive(mouse)
const { style: pos }  = useDraggable(test)
</script>

<template>
  <div class="mouse">
    <h1>The mouse position:</h1>
    <h2>x: {{ text.x }}</h2>
    <h2>y: {{ text.y }}</h2>
  </div>
  <div class="test"  ref="test" :style="pos">
    You can drag me!
  </div>
</template>

<style scoped>
.mouse {
  padding: 20px;
}
h2 {
  color: lightgreen;
}
.test {
  position: absolute;
  padding: 20px;
  width: 200px;
  height: 100px;
  background-color: grey;
  border-radius: 5px;
}
</style>
