import { computed, ref, unref } from "vue"

export interface FileSystemAccessShowSaveOpenFileOptions {
  multiple?: boolean
  type?: Array<{
    description?: string,
    accept: Record<string, string[]>
  }>
  excludeAcceptAllOption?: boolean
}

export default function(opt = { dataType: 'Text' }) {
  const { dataType } = opt
  const isSupported = window && 'FileSystemHandle' in window

  const data = ref<string|ArrayBuffer|Blob|undefined>('')
  const fileHandler = ref(isSupported)
  const fileHandle = ref()
  const file = ref<File>()
  const fileName = computed(() => file.value?.name ?? '')
  const fileMIME = computed(() => file.value?.type ?? '')
  const fileSize = computed(() => file.value?.size ?? 0)
  const fileLastModified = computed(() => file.value?.lastModified ?? 0)

  function notSupport() {
    alert("FileSystemAccess API isn't be supported in your browser")
  }

  async function create(options: FileSystemAccessShowSaveOpenFileOptions = {}) {
    if (!isSupported) {
      notSupport()
      return
    }
    fileHandle.value = await window.showSaveFilePicker(options)
    await updateFile()
    await updateData()
  }
  async function open(options: FileSystemAccessShowSaveOpenFileOptions = {}) {
    if (!isSupported) {
      notSupport()
      return
    }
    const res = await window.showOpenFilePicker(options)
    fileHandle.value = await res[0]
    await updateFile()
    await updateData()
  }

  async function save() {
    if (!isSupported) {
      notSupport()
      return
    }
    const writableStream = await fileHandle.value.createWritable();
    await writableStream.write(data.value)
    await writableStream.close()
    await updateFile()
  }
  
  async function saveAs(options: FileSystemAccessShowSaveOpenFileOptions = {}) {
    if (!isSupported) {
      notSupport()
      return
    }

    fileHandle.value = await window.showSaveFilePicker(options)

    const writableStream = await fileHandle.value.createWritable();
    await writableStream.write(data.value)
    await writableStream.close()
    await updateFile()
  }

  async function updateFile() {
    file.value = await fileHandle.value?.getFile()
  }

  async function updateData() {
    if (!isSupported) {
      notSupport()
      return
    }
    switch(unref(dataType)) {
      case 'Text': {
        data.value = await file.value?.text()
        break
      }
      case 'ArrayBuffer': {
        data.value = await file.value?.arrayBuffer()
        break
      }
      case 'Blob': {
        data.value = await file.value
        break
      }
    }
  }

  return {
    isSupported,
    data,
    fileName,
    fileMIME,
    fileSize,
    fileLastModified,
    open,
    create,
    save,
    saveAs,
    updateData
  }
}