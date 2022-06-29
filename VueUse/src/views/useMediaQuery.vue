<script setup lang="ts">
import { ref } from 'vue'
import { useMediaQuery } from '@/composables';
// import { useMediaQuery } from '@vueuse/core';

const query = ref('(max-width: 800px)')
const result = useMediaQuery(query.value)
</script>
<template>
  <div class="mediaquery">
    <h1>Text the media query to obtain result</h1>
    <label for="media">media query:</label>
    <input type="text" id="media" v-model="query">
    <div>result: <span style="color: rgb(58, 176, 121);">{{ result }}</span></div>
  </div>
</template>
<style scoped>
.mediaquery {
  padding: 20px;
}
</style>