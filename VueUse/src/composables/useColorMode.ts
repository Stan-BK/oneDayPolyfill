import { computed, ref, watch } from 'vue'
import { useStorage, usePreferredDark } from '@/composables'

export default function(opt: {
  selector?: string,
  attribute?: string,
  storage?: Storage,
  storageKey?: string,
  modes?: Record<string, string>
} = {}) {
  const {
    selector = 'html',
    attribute = 'class',
    storage = localStorage,
    storageKey = 'vueuse-color-scheme',
  } = opt
  let modes = {
    auto: '',
    light: 'light',
    dark: 'dark',
    ...opt.modes || {}
  }
  const preferredDark = usePreferredDark()
  const preferredMode = computed(() => preferredDark.value ? 'dark': 'light')
  const store = useStorage(storageKey, 'auto', storage)

  const state = computed({
    get() {
      return store.value === 'auto'
      ? preferredMode.value
      : store.value
    },
    set(val) {
      store.value = val
    }
  })

  function updateMode() {
    if (!document) return

    const el = document.querySelector(selector)
    
    if (el) {
      Object.keys(modes).forEach(mode => {
        if (mode !== state.value) return
        
        if (attribute === 'class') {
          const hasChange = Object.values(modes).some(item => {
            if (item === '') return false
            if (el.className.includes(item)) {
              el.className = el.className.replace(item, state.value)
              return true
            }
            return false
          })
          !hasChange && el.setAttribute(attribute, el.className + state.value)
        } else {
          el.setAttribute(attribute, state.value)
        }
      })
    }
  }

  watch(state, updateMode, { immediate: true })
  
  return state
}