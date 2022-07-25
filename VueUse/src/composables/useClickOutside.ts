import type { MaybeRef } from "types/types";
import { unref } from "vue";

export interface OnClickOutsideOptions {
  /**
   * List of elements that should not trigger the event.
   */
  ignore?: MaybeRef<HTMLElement | null | undefined>[]
  /**
   * Use capturing phase for internal event listener.
   * @default true
   */
  capture?: boolean
  /**
   * Run handler function if focus moves to an iframe.
   * @default false
   */
  detectIframe?: boolean
}

export default function<T extends OnClickOutsideOptions>(
  target: MaybeRef<HTMLElement | null | undefined>, 
  handler: (e: T['detectIframe'] extends true ? PointerEvent | FocusEvent : PointerEvent) => void,
  options: T = {} as T
) {
  const { ignore, capture = true, detectIframe = false } = options
  
  if (!window) return

  function listen(e: PointerEvent) {
    const tar = e.target
    if (tar === unref(target)) return

    if (ignore?.includes(tar as HTMLElement)) return

    handler(e)
  }
  const cleanUp = [
    (() => {
      window.addEventListener('click', listen as (e: MouseEvent) => void, capture)
      return () => window.removeEventListener('click', listen as (e: MouseEvent) => void)
    })(),
    (() => {
      if (!detectIframe) return () => {}
      window.addEventListener('blur', handleIframe, capture)
      return window.removeEventListener('blur', handleIframe, capture)

      function handleIframe(e: any) {
        const tar = unref(target)
        if (
          document.activeElement?.tagName === 'IFRAME'
          && !tar?.contains(document.activeElement)
        )
          handler(e as any)
      }
    })()
  ] as (() => any)[]

  return () => cleanUp.forEach(fn => fn())
}