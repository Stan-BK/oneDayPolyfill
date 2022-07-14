<script setup lang="ts">
import { useTitle } from '@/composables';
import { ref } from 'vue'

const title = useTitle('hhh')
</script>
<template>
  <div class="title">
    <input type="text" v-model="title">
  </div>
</template>
<style scoped>
.title {
  padding: 20px;
}
</style>