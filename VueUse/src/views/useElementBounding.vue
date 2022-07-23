<script setup lang="ts">
import { useElementBounding } from '@/composables';
import { computed } from '@vue/reactivity';
import { reactive, ref, watch, toRefs } from 'vue';

const textarea = ref()
const rect = useElementBounding(textarea)
const text = computed(() => {
  return JSON.stringify({
    width: rect.width.value,
    height: rect.height.value,
    top: rect.top.value,
    left: rect.left.value,
    right: rect.right.value,
    bottom: rect.bottom.value,
    x: rect.x.value,
    y: rect.y.value
  }, undefined, 2)
})
</script>
<template>
  <h1>Textarea BoundingClientRect:</h1>
  <textarea readonly class="elementboundingrect" ref="textarea" :value="text">
  </textarea>
</template>
<style scoped>
h1 {
  padding: 20px;
}
.elementboundingrect {
  margin: 20px;
  padding: 20px;
  height: 300px;
}
</style>