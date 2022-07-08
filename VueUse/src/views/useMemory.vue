<script setup lang="ts">
import { useMemory } from '@/composables'
import { computed } from '@vue/runtime-core'
import type { MemoryInfo } from '@/composables/useMemory'

const { memory } = useMemory({ delay: 100 })
function size(num: number) {
  return `${(num / 1024 / 1024).toFixed(2)} MB`
}
</script>
<template>
  <div class="memory">
    <h1>Performance status:</h1>
    <ul>
      <li>
        <span>Used: </span>
        <span>{{ size(memory.usedJSHeapSize) }}</span>
      </li>
      <li>
        <span>Allocated: </span>
        <span>{{ size(memory.totalJSHeapSize) }}</span>
      </li>
      <li>
        <span>Limit: </span>
        <span>{{ size(memory.jsHeapSizeLimit) }}</span>
      </li>
    </ul>
  </div>  
</template>
<style scoped>
.memory {
  padding: 20px;
}
</style>