<script setup lang="ts">
import { useBrowserLocation } from '@/composables';
// import { useBrowserLocation } from '@vueuse/core'

const location = useBrowserLocation()
</script>
<template>
  <h1>There is current Location messages below:</h1>
  <code>
    <pre>{{ location }}
    </pre>
  </code>
</template>
<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'useBrowserLocation'
})
</script>
<style scoped>
code {
  padding: 20px;
}
pre {
  margin: 20px;
  padding: 10px;
  background-color: #424242;
  border-radius: 5px;
}
</style>