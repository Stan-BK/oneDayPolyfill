<script setup lang="ts">
import { ref } from 'vue'
import { onStartTyping } from '@vueuse/core'

const input = ref<HTMLInputElement | null>(null)

onStartTyping(() => {
  if (!input.value?.active)
    input.value!.focus()
})
</script>

<template>
  <div class="starttyping">
    <note>Type anything</note>
    <br>
    <input ref="input" type="text" placeholder="Start typing to focus">
    <br>
    <input type="text" placeholder="Start typing has no effect here">
  </div>
</template>
<style scoped>
.starttyping {
  padding: 20px;
}
</style>