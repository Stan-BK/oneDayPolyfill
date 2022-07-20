<script setup lang="ts">
import { useRefHistory } from '@/composables';
import { ref } from 'vue';
const count = ref(0)
const { history, undo, redo } = useRefHistory(count, {
  capacity: 10
})
function increment() {
  count.value++
}
function decrement() {
  count.value--
}
</script>
<template>
  <div class="refhistory">
    <h1>Count: {{count}}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="undo">undo</button>
    <button @click="redo">redo</button>
    <ul>
      <li v-for="(item, index) of history" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<style scoped>
.refhistory {
  padding: 20px;
}
</style>