import { ref } from "vue"

export default function() {
  if (!document) return ref('visibile')

  const visibility = ref(document.visibilityState)
  document?.addEventListener(
    'visibilitychange',
    () => {
      visibility.value = document.visibilityState
    }
  )

  return visibility
}