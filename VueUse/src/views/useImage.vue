<script setup lang="ts">
import { useImage } from '@/composables';
import { ref } from 'vue'

let idx = 0
const src = [
  "https://i0.hdslb.com/bfs/album/c8895819992b3ec0d2cf512d56be0cd54c8adc26.png@1554w.webp",
  "https://i0.hdslb.com/bfs/album/d9cbe5aa134563f8781084ae5b8a2406b9f596c8.png@1554w.webp",
  "https://i0.hdslb.com/bfs/album/41d1d52fa74e90afb1bee7e021a1cb3f291d99be.png@1554w.webp"
]
const curImg = ref(src[idx])
function changeImg() {
  curImg.value = src[++idx >= src.length ? (idx = 0) : idx]
}
</script>
<template>
  <div class="useimage">
    <button @click="changeImg">change</button>
    <img :src="curImg" alt="" referrerpolicy="same-origin" width="300" height="300">
  </div>
</template>
<style scoped>

</style>