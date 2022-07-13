<script setup lang="ts">
import { useScriptTag } from '@/composables';

const { script, load, unload } = useScriptTag(
  'https://player.twitch.tv/js/embed/v1.js',
  () => {
    // do something
    console.log(123)
  },
  { manual: true },
)
load()
setTimeout(unload, 3000)
</script>
<template>
  <div class="scripttag"></div>
</template>
<style scoped>
.scripttag {
  padding: 20px;
}
</style>