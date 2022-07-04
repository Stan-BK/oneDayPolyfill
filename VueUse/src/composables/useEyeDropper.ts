import { ref } from "vue"

export interface EyeDropperOpenOptions {
  signal?: AbortSignal
}

export interface UseEyeDropperOptions {
  initialValue?: string
}

export default function(options: UseEyeDropperOptions = { initialValue: '' }) {
  const isSupported = window && 'EyeDropper' in window
  const sRGBHex = ref(options.initialValue)
  const eyeDropper = isSupported && (new window.EyeDropper())

  function open(openOptions?: EyeDropperOpenOptions) {
    if (!isSupported) {
      return Promise.reject()
    }
    return eyeDropper.open(openOptions).then(res => {
      sRGBHex.value = res.sRGBHex
    })
  }

  return {
    isSupported,
    sRGBHex,
    open
  }
}