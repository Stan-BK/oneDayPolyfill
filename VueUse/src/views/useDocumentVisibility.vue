<script setup lang="ts">
import { watch, ref } from 'vue'
import { useDocumentVisibility } from '@/composables';

const visibility = useDocumentVisibility()
const count = ref(0)
watch(visibility, () => {
  count.value++
})
</script>
<template>
  <div class="documentvisibility">
    <h1>Current page visibility state is: {{ visibility }}</h1>
    <h2>page had hidden <span style="color: lightgreen">{{ count / 2 }}</span> times</h2>
  </div>
</template>
<style scoped>
.documentvisibility {
  padding: 20px;
}
</style>