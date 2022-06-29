<script setup lang="ts">
// import { useColorMode } from '@vueuse/core';
import { useColorMode } from '@/composables';

const mode = useColorMode()
const modes = ['light', 'dark']
function toggle() {
  mode.value = modes.filter(item => 
    item != mode.value
  )[0]
}
</script>
<template>
  <div class="colormode">
    <div class="intro">Current color mode is: {{ mode }}</div>
    <button @click="toggle">toggle Color Mode</button>
  </div>
</template>
<style scoped>
.colormode {
  height: 100%;
  padding: 20px;
}
html.light .colormode{
  background-color: #fff;
}
html.light .intro {
  color: #424242;
}
html.dark .colormode {
  background-color: #424242;
}
</style>