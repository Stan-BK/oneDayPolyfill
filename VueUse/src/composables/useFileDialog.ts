import { ref, readonly } from "vue"

export interface UseFileDialogOptions {
  multiple?: boolean
  accept?: string
  capture?: string
}

export default function(options: UseFileDialogOptions = {
  multiple: false,
  accept: '*',
  capture: 'user'
}) {
  const files = ref()

  if (!window) return

  const input = document.createElement('input')
  input.type = 'file'
  input.multiple = options.multiple as boolean
  input.accept = options.accept as string
  input.capture = options.capture as string
  input.onchange = function(e) {
    files.value = input.files
  }

  function open() {
    if (!input) return
    input.click()
  }

  function reset() {
    files.value = null
  }

  return {
    files: readonly(files),
    open,
    reset
  }
}