import { onScopeDispose, ref } from "vue"

export interface MemoryInfo {
  readonly jsHeapSizeLimit: number
  readonly totalJSHeapSize: number
  readonly usedJSHeapSize: number
  [Symbol.toStringTag]: 'MemoryInfo'
}

export default function(options?: {
  delay: number
} = { delay: 1000 }) {
  const { delay } = options
  const isSupported = 'performance' in window && 'memory' in performance
  if (!isSupported) {
    return {
      isSupported,
      memory: ref<MemoryInfo>({
        jsHeapSizeLimit: 0,
        usedJSHeapSize: 0,
        totalJSHeapSize: 0,
        [Symbol.toStringTag]: 'MemoryInfo'
      })
    }
  }
  const memory = ref<MemoryInfo>(performance.memory)
  let timer: any
  
  timer = setInterval(() => {
    memory.value = performance.memory
  }, delay)

  onScopeDispose(() => clearInterval(timer))

  return {
    isSupported,
    memory
  }
}