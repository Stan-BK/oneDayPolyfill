<script setup lang="ts">
import { useScreenOrientation } from '@/composables';

const {
  isSupported,
  angle,
  orientation,
  lockOrientation,
  unlockOrientation
} = useScreenOrientation()
</script>
<template>
  <div class="screenorientation">
    <h1>Current rientation info</h1>
    <ul>
      <li>isSupported: <span class="info">{{isSupported}}</span></li>
      <li>orientation type: <span class="info">{{orientation}}</span></li>
      <li>orientation angle: <span class="info">{{angle}}</span></li>
    </ul>
    <button @click="lockOrientation('any')">lock orientation</button>
    <button @click="unlockOrientation">unlock orientation</button>
  </div>  
</template>
<style scoped>
.screenorientation {
  padding: 20px;
}
.info {
  color: green;
}
</style>