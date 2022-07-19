<script setup lang="ts">
import { useActiveElement } from '@/composables';

const activeElement = useActiveElement()
</script>
<template>
  <div class="activeelement">
    Current active element is: {{ activeElement }}
    <input type="text">
  </div>
</template>
<style scoped>
.activeelement {
  padding: 20px;
}
</style>