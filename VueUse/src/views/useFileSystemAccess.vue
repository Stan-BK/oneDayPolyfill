<script setup lang="ts">
import { useFileSystemAccess } from '@/composables'

const { open, save, create, data, fileName, fileMIME, fileSize, fileLastModified } = useFileSystemAccess()
</script>
<template>
  <div class="filesystem">
    <button @click="open">open</button>
    <button @click="create">new File</button>
    <button @click="save">save</button>
    <button @click="saveAs">saveAs</button>
    <ul>
      <li>fileName: {{fileName}}</li>
      <li>fileMIME: {{fileMIME}}</li>
      <li>fileSize: {{fileSize}}</li>
      <li>fileLastModified: {{fileLastModified}}</li>
    </ul>
    <textarea id="content" cols="30" rows="10" v-model="data"></textarea>
  </div>
</template>
<style scoped>
.filesystem {
  padding: 20px;
}
#content {
  width: 500px;
  max-height: 300px;
}
</style>