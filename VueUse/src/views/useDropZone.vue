<script setup lang="ts">
import { useDropZone } from '@/composables';
import { ref } from 'vue';

const dropzone = ref()
const files = ref<File[] | null>([])
const { isOverDropZone } = useDropZone(dropzone, (fs: File[] | null) => {
  files.value = fs
})
</script>
<template>
  <div class="dropzone" ref="dropzone">
    isOverDropZone: {{ isOverDropZone }}
    <ul v-for="file of files" style="margin: 30px 0;">
      <li>
        name: {{file.name}}
      </li> 
      <li>
        lastModifed: {{file.lastModified}}
      </li>
      <li>
        size: {{file.size}}
      </li>
      <li>
        type: {{file.type}}
      </li>
    </ul>
    <h1 v-if="!files?.length">
      Drop files here!
    </h1>
  </div>
</template>
<style scoped>
.dropzone {
  position: absolute;
  padding: 20px;
  margin: 20px;
  min-width: 200px;
  min-height: 100px;
  background-color: #666;
}
</style>