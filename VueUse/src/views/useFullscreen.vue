<script setup lang="ts">
import { useFullscreen } from '@/composables'
import { ref } from 'vue'

const iframe = ref()
const { isSupported, enter, exit, toggle } = useFullscreen(iframe)
function fullScreen() {
  enter()
}
</script>
<template>
  <div class="fullscreen">
    <button @click="fullScreen">fullscreen to reading</button>
    <iframe ref="iframe" src="https://www.geminikspace.com/tech/TypeScript?name=TypeScript" frameborder="0" id="iframe"></iframe>
  </div>  
</template>
<style scoped>
.fullscreen {
  padding: 20px;
}
#iframe {
  display: block;
  width: 100%;
  height: 500px;
  margin: 10px 0;
}
</style>