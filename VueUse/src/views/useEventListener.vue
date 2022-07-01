<script setup lang="ts">
import { useEventListener } from '@/composables'
import { ref, onMounted } from 'vue'

const color = ['deepskyblue', 'pink', 'limegreen']
const showInput = ref(true)
let idx = 0
const input = ref()
onMounted(() => {
  const stop = useEventListener(input, 'input', () => {
    input.value.style.color = color[idx++]
    idx = idx >= color.length ? 0 : idx
  })
})
function changeShow() {
  showInput.value = !showInput.value
}
</script>
<template>
  <div class="eventlistener">
    <h2>Change reactive input element(use ref) without binding event repeatedly</h2>
    <button @click="changeShow" style="margin-bottom: 10px;">change input element</button>
    <br>
    <input type="text" ref="input" v-if="showInput">
    <textarea v-else name="" id="" cols="30" rows="10" ref="input"></textarea>
  </div>
</template>
<style scoped>
.eventlistener {
  padding: 20px;
}
input {
  outline: 0;
  transition: color .2s;
}
textarea {
  outline: none;
  transition: color .2s;
}
</style>