import type { MaybeRef } from "types/types";
import { onScopeDispose, unref, watch } from "vue";

export function useEventListener(event: Event, listener: () => any, options?: boolean | AddEventListenerOptions): () => void
export function useEventListener(target: MaybeRef<EventTarget | null | undefined>, event: Event, listener: () => any, options?: boolean | AddEventListenerOptions): () => void
export default function useEventListener(...args: any[]): () => void {
  let event: string
  let target: MaybeRef<EventTarget> | undefined
  let listener: any
  let options: any
  if (typeof args[0] === 'string') {
    [event, listener, options] = args
  } else {
    [target, event, listener, options] = args 
  }
  if (target == null) {
    target = document
  }
  let cleanUp = () => {}
  const stopWatch = watch(() => unref(target), (tar) => {
    cleanUp()
    tar?.addEventListener(event, listener, options)
    cleanUp = () => {
      tar?.removeEventListener(event, listener, options)
      cleanUp = () => {}
    }
  }, { immediate: true, flush: 'post' })

  const stop = () => {
    stopWatch()
    cleanUp()
  }

  onScopeDispose(stop)

  return stop
}