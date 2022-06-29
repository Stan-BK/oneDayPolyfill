<script setup lang="ts">
import { usePreferredDark } from '@/composables'

</script>
<template>
  <div class="preffered-dark">
    Now your system prefferd color scheme is "Dark" ? 
    <br>
    <br>
    Answer is <span style="color: rgb(58, 176, 121);">{{ usePreferredDark() }}</span>
  </div>
</template>
<style scoped>
.preffered-dark {
  padding: 20px;
}
</style>