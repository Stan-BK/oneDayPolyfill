import { computed, ref } from "vue"

export default function() {
  let count = ref(0)
  window?.addEventListener('blur', () => count.value++, true)
  window?.addEventListener('focus', () => count.value++, true)
  return computed(() => {
    count.value
    return window?.document.activeElement
  })
}