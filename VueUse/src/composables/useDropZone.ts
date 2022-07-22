import type { MaybeRef } from "types/types";
import { onMounted, ref, unref } from "vue";

export default function(target: MaybeRef<HTMLElement | undefined | null>, onDrop?: (files: File[] | null) => void) {
  const isOverDropZone = ref(false)
  
  if (window) {
    onMounted(() => {
      const t = unref(target)
      t?.addEventListener('dragenter', (event) => {
        event.preventDefault()
        isOverDropZone.value = true
      })
      t?.addEventListener('dragover', (event) => {
        event.preventDefault()
      })
      t?.addEventListener('dragleave', (event) => {
        event.preventDefault()
        isOverDropZone.value = false
      })
      t?.addEventListener('drop', (event) => {
        event.preventDefault()
        isOverDropZone.value = false
        const files = Array.from(event.dataTransfer?.files ?? [])
        onDrop?.(files.length === 0 ? null : files)
      })
    })
  }

  return {
    isOverDropZone
  }
}