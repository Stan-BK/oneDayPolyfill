import type { MaybeRef } from "types/types";
import { onMounted, ref, unref, toRefs, watch } from "vue";

export interface UseElementBoundingOptions {
  reset?: boolean
  windowResize?: boolean
  windowScroll?: boolean
  immediate?: boolean
}

export default function(target: MaybeRef<HTMLElement | undefined | null>, options: UseElementBoundingOptions = {}) {
  const height = ref(0)
  const bottom = ref(0)
  const left = ref(0)
  const right = ref(0)
  const top = ref(0)
  const width = ref(0)
  const x = ref(0)
  const y = ref(0)

  options.windowScroll && window.addEventListener('scroll', update, { passive: true })
  options.windowResize && window.addEventListener('resize', update, { passive: true })

  function update() {
    const t = unref(target)

    if (!t) {
      if (options.reset) {
        height.value = 0
        bottom.value = 0
        left.value = 0
        right.value = 0
        top.value = 0
        width.value = 0
        x.value = 0
        y.value = 0
      }
      return
    }
    const rect = t.getBoundingClientRect()

    height.value = rect.height
    bottom.value = rect.bottom
    left.value = rect.left
    right.value = rect.right
    top.value = rect.top
    width.value = rect.width
    x.value = rect.x
    y.value = rect.y
  }

  onMounted(() => {
    options.immediate && update()

    const resizeObs = new ResizeObserver(update)
    resizeObs.observe(unref(target) as Element)
  })

  watch(() => unref(target), elem => !elem && update())

  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y,
    update
  }
}