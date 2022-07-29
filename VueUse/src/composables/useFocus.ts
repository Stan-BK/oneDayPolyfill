import type { MaybeRef } from "types/types";
import { computed, unref, watch } from "vue";
import useActiveElement from "./useActiveElement";

export interface UseFocusOptions {
  initialValue?: boolean
}

export default function(target: MaybeRef<HTMLElement|null|undefined>, options: UseFocusOptions = {}) {
  const { initialValue = false } = options

  const activeElement = useActiveElement()
  const targetElement = computed(() => unref(target))
  const focused = computed({
    get() {
      return activeElement.value === targetElement.value
    },
    set(value: boolean) {
      if (!value && focused.value) {
        targetElement.value?.blur()
      } else {
        targetElement.value?.focus()
      }
    }
  })

  watch(targetElement, () => focused.value = initialValue, { immediate: true })

  return {
    focused
  }
}