import { ref } from "vue"

export default function() {
  const isSupported = window && 'ScreenOrientation' in window
  const screenOrientation = isSupported ? window.screen.orientation : {} as ScreenOrientation
  const orientation = ref<OrientationType | undefined>(screenOrientation.type)
  const angle = ref(screenOrientation.angle || 0)

  if (isSupported) {
    window.addEventListener('orientationchange', function() {
      orientation.value = screenOrientation.type
      angle.value = screenOrientation.angle
    })
  }

  function lockOrientation(type: OrientationLockType) {
    if (!isSupported) return Promise.reject('Not supported')
    return screenOrientation.lock(type)
  }

  function unlockOrientation() {
    if (!isSupported) return Promise.reject('Not supported')
    return screenOrientation.unlock()
  }

  return {
    isSupported,
    orientation,
    angle,
    lockOrientation,
    unlockOrientation
  }
}