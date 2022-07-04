<script setup lang="ts">
import { useEyeDropper } from '@/composables'

const { open, sRGBHex, isSupported } = useEyeDropper()
</script>
<template>
  <div class="eyedropper">
    <button @click="open">useEyeDropper</button>
    <p>
      current select sRGBHex is: {{ sRGBHex }}
      <span class="box" :style="{ backgroundColor: sRGBHex }"></span>
    </p>
  </div>
</template>
<style scoped>
.eyedropper {
  padding: 20px;
}
.box {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: transparent;
}
</style>