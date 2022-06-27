<script setup lang="ts">
import { ref } from 'vue'
// import { useClipboard } from '@vueuse/core'
import { useClipboard } from '@/composables';

const source = ref('')
const { text, copy, copied, isSupported } = useClipboard({ source })

function copyText() {
  copy()
}

</script>
<template>
  <div class="clipboard">
    <h3>Now the clipboard content is: {{ text }}</h3>
    <input type="text" v-model="source">
    <button @click="copyText">copy</button>
  </div>
</template>
<style scoped>
.clipboard {
  padding: 20px;
}
h3 {
  margin-bottom: 10px;
}
input {
  margin-right: 10px;
  outline: none;
}
</style>
