import type { MaybeRef } from "types/types"
import { ref, unref } from "vue"

export interface ScriptTagOptions {
  immediate?: boolean
  async?: boolean
  type?: string
  manual?: boolean
  crossOrigin?: 'anonymous' | 'use-credentials'
  referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
  noModule?: boolean
  defer?: boolean
  attrs?: Record<string, string>
}

export default function(src: MaybeRef<string>, onLoaded: (el: HTMLScriptElement) => void = () => {}, options: ScriptTagOptions = {}) {
  const {
    immediate = true,
    manual = false,
    async = true,
    type = 'text/javascript',
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    attrs = {}
  } = options

  const script = ref<undefined | null | HTMLScriptElement>()
  let _promise: Promise<HTMLScriptElement> | null

  function loadScript(waitForScriptLoaded: boolean) {
    _promise = new Promise((resolve, reject) => {
      const scriptTag = script.value = document.createElement('script')
      scriptTag.src = unref(src)
      scriptTag.async = async
      scriptTag.type = type
      defer && (scriptTag.defer = defer)
      noModule && (scriptTag.noModule = noModule)
      crossOrigin && scriptTag.setAttribute('crossOrigin', crossOrigin)
      referrerPolicy && scriptTag.setAttribute('referrerPolicy', referrerPolicy)

      if (script.value) {
        resolve(script.value)
      }

      const el = document.querySelector(`script[src="${unref(src)}"]`) as HTMLScriptElement
      if (el) {
        script.value = el
        el.hasAttribute('isLoaded') &&  resolve(el)
        return
      }

      scriptTag.addEventListener('error', error => reject(error))
      scriptTag.addEventListener('abort', e => reject(e))
      scriptTag.addEventListener('load', () => {

        scriptTag.setAttribute('isLoaded', 'true')
        onLoaded(scriptTag)
        resolve(scriptTag)
      })

      document.head.appendChild(scriptTag)

      if (!waitForScriptLoaded) {
        resolve(scriptTag)
      }
    })
  }

  function load(waitForScriptLoaded: boolean = false) {
    loadScript(waitForScriptLoaded)
    return 
  }

  function unload() {
    _promise = null

    if (script.value) script.value = null
    const el = document.querySelector(`script[src="${unref(src)}"]`)
    el && document.head.removeChild(el)
  }

  return {
    script,
    load,
    unload
  }
}