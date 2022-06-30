import type { MaybeRef } from "types/types";
import type { Ref } from "vue";
import { ref, unref, watch } from 'vue'

export default function(
  prop: MaybeRef<string>,
  target: Element | Ref,
  opt: {
    initialValue?: string
  } = {initialValue: ''}
) {
  const val = ref(opt.initialValue)
  const el = unref(target) || window.document.documentElement

  watch(() => unref(prop), (prop) => {
    if (el && window) {
      val.value = getComputedStyle(el).getPropertyValue(unref(prop)) || opt.initialValue
    }
  }, {
    immediate: true
  })

  watch(val, (value) => {
    if (el) {
      el.style.setProperty(unref(prop), value)
    }
  })

  return val
}