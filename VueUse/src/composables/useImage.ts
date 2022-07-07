import type { MaybeRef } from "types/types"
import { ref, unref, watch } from "vue"

export interface UseImageOptions {
  src: string
  srcset?: string
  sizes?: string
}

export default async function(options: MaybeRef<UseImageOptions>) {
  const isLoading = ref(false)
  const isReady = ref(false)
  const error = ref<unknown | undefined>(undefined)
  try {
    isLoading.value = true
    await loadImg(unref(options))
    isLoading.value = false
    isReady.value = true
  } catch(e) {
    isLoading.value = false
    error.value = e
  }

  watch(() => unref(options),
    loadImg,
    { deep: true }
  )

  return {
    isLoading,
    isReady
  }
}
async function loadImg(options: UseImageOptions) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const { src, srcset, sizes } = options

    img.src = src
    srcset && (img.srcset = srcset)
    sizes && (img.sizes = sizes)
    img.onload = () => resolve(img)
    img.onerror = reject
  })
}