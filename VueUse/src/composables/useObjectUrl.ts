import type { MaybeRef } from "types/types";
import { watch, onScopeDispose, ref, unref, readonly } from "vue";

export default function(object: MaybeRef<Blob | MediaSource | undefined>) {
  const url = ref<string | undefined>()

  watch(() => unref(object), (newUrl) => {
    release()

    if (newUrl) {
      url.value = URL.createObjectURL(newUrl)
    }
  }, { immediate: true })

  onScopeDispose(release)

  function release() {
    url.value && URL.revokeObjectURL(url.value)
    url.value = undefined
  }
  
  return readonly(url)
}