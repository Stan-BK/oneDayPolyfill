<script setup lang="ts">
import { useClickOutside } from '@/composables';
import { ref } from 'vue';

const isShow = ref(false)
const model = ref()
useClickOutside(model, () => { isShow.value = false })
</script>
<template>
  <div class="clickoutside">
    <button @click="isShow = true">showModel</button>
    <div class="model" ref="model" v-show="isShow">
      Click outside model to close it
    </div>
  </div>
</template>
<style scoped>
.clickoutside {
  position: relative;
  padding: 20px;
}
.model {
  position: absolute;
  top: 10px;
  padding: 20px;
  width: 300px;
  height: 100px;
  background-color: #666;
  border-radius: 20px;
}
</style>