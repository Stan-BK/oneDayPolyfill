<script setup lang="ts">
// import { useStorage } from '@vueuse/core'
import { useStorage } from '@/composables';
// bind object
const state = useStorage('my-id', 1)

</script>
<template>
  <div class="colormode">
    Custom storage item by 'useStorage' API:
    <br>
    <br>
    <label for="storage">my-id:</label>
    <input type="text" v-model="state" id="storage" style="margin-left: 20px;">
    <br>
    <br>
    You can text the 'my-id' item and check 'Application' pannel for the current storage state
  </div>
</template>
<style scoped>
.colormode {
  padding: 20px;
}
</style>