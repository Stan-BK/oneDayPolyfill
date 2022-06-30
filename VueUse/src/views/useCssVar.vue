<script setup lang="ts">
import { useCssVar } from '@/composables'
import { ref, onMounted, watch } from 'vue'
import type { Ref } from 'vue'

const h3 = ref()
let cssvar: Ref | undefined = undefined
let currentColor = ref('white')
onMounted(() => {
  cssvar = useCssVar('--h3-color', h3, { initialValue: 'white' })
  watch(cssvar, (val) => {
    currentColor.value = val
  })
})
function changeCss() {
  if (cssvar!.value === 'white')
    cssvar!.value = 'orange'
  else
    cssvar!.value = 'white'
}
</script>
<template>
  <div class="cssvar">
    <h3 ref="h3" style="--h3-color: white; color: var(--h3-color)">Current css value: {{ currentColor }}</h3>
    <button @click="changeCss">change the css var value</button>
  </div>
</template>
<style scoped>
.cssvar {
  padding: 20px;
}
</style>