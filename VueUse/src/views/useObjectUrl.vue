<script setup lang="ts">
import { useObjectUrl } from '@/composables';
import { ref } from 'vue';

const file = ref()
const url = useObjectUrl(file)

function onFileChange(e: any) {
  file.value = e.target.files[0]
}
</script>
<template>
  <div class="objecturl">
    <input type="file" @change="onFileChange">
    url source: <a :href="url" id="url">{{url}}</a>
  </div>
</template>
<style scoped>
.objecturl {
  padding: 20px;
}
#url {
  color: green;
  transition: .3s;
}
#url:hover {
  color: darkgreen;
}
</style>