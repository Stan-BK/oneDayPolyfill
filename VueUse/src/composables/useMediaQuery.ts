import { onScopeDispose, ref } from 'vue'

export default function(query: string) {
  let isSupported = window && 'matchMedia' in window
  let mediaQuery: MediaQueryList | undefined
  const matches = ref(false)

  function update() {
    if (!isSupported) {
      return
    }
    // if (mediaQuery == null) {
      mediaQuery = window.matchMedia(query)
    // }
    matches.value = mediaQuery.matches
  }

  update()

  if (isSupported) {
    if (!mediaQuery) return matches

    mediaQuery.addEventListener('change', update)

    onScopeDispose(() => {
      mediaQuery?.removeEventListener('change', update)
    })
  }

  return matches
}