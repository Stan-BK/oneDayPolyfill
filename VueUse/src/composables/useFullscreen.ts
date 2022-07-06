import type { MaybeRef } from "types/types"
import { ref, unref } from "vue"

export default function(target?: MaybeRef<Element>) {
  const isSupported = document && document.fullscreenEnabled
  const isFullscreen = ref(false)
  const targetRef = target || document?.querySelector('html')

  async function enter() {
    if (!isSupported) {
      return
    }
    const element = unref(targetRef)
    await element?.requestFullscreen()
    isFullscreen.value = true
  }

  async function exit() {
    if (!isSupported) {
      return
    }
    await document.exitFullscreen()
    isFullscreen.value = false
  }

  async function toggle() {
    if (isFullscreen) {
      await exit()
    } else {
      await enter()
    }
  }

  return {
    isSupported,
    enter,
    exit,
    toggle
  }
}