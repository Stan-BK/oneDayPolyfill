import { ref, unref } from 'vue'
import type { MaybeRef } from 'types/types'

export interface ClipboardOptions<Source> {
  read?: boolean
  source?: Source
  copiedDuring?: number
}

export default function(opt: ClipboardOptions<MaybeRef<string>> = {}) {
  const { read = false, source, copiedDuring = 1500 } = opt
  const isSupported = Boolean(navigator && 'clipboard' in navigator)
  const text = ref('')
  const copied = ref(false)
  
  function updateText() {
    navigator && navigator.clipboard.readText().then((val) => text.value = val)
  }

  if (isSupported && read) {
    document.addEventListener('copy', updateText)
    document.addEventListener('cut', updateText)
  }

  async function copy(value = unref(source)) {
    if (isSupported && value != null) {
      await navigator.clipboard.writeText(value)
      text.value = value
      copied.value = true
      setTimeout(() => copied.value = false, copiedDuring)
    }
  }

  return {
    isSupported,
    copied,
    text,
    copy
  }
}