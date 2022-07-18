<script setup lang="ts">
// import { useUrlSearchParams } from '@vueuse/core'
import { useUrlSearchParams } from '@/composables';

const params = useUrlSearchParams('history')
setTimeout(() => params.name = 'wbk', 3000)
</script>
<template>
  <div class="urlsearchparams">
    <ul>
      <li v-for="(value, key) in params" :key="key">
        <span>{{ key }}</span>
        :
        <span>{{ value }}</span>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.urlsearchparams {
  padding: 20px;
}
</style>