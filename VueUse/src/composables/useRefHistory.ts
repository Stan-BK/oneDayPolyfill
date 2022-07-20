import { reactive, ref, watch, type Ref } from "vue"

export interface UseRefHistoryOptions {
  deep?: boolean
  flush?: 'pre' | 'post' | 'sync',
  clone?: boolean,
  capacity?: number
}
export default function<Raw>(source: Ref<Raw>, options: UseRefHistoryOptions = {}) {
  const {
    deep = false,
    flush = 'pre',
    clone = false,
    capacity = Infinity
  } = options
  const stack: any[] = []
  const obviousStack = reactive<any[]>([])
  const isTracking = ref(true)
  const watchOpt = {
    flush,
    deep
  }
  
  let stopWatch = watch(source, watchValue, Object.assign({}, watchOpt, { immediate: true }))
  function watchValue (newVal: any) {
    if (obviousStack.length >= capacity) {
      stack.shift()
      obviousStack.shift()
    }
    clone && (newVal = JSON.parse(JSON.stringify(newVal)))
    stack.splice(obviousStack.length)
    stack.push(newVal)
    obviousStack.push(newVal)
  }

  const undo = () => {
    if (obviousStack.length <= 0) return
    stopWatch()
    const val = obviousStack.pop()
    source.value = val
    resumeWatch()
  }

  const redo = () => {
    if (obviousStack.length === stack.length) return
    stopWatch()
    const val = stack[obviousStack.length]
    obviousStack.push(val)
    source.value = val
    resumeWatch()
  }

  const clear = () => {
    clearStack()
  }

  const dispose = () => {
    clearStack()
    stopWatch()
  }

  const pause = () => {
    isTracking.value = false
    stopWatch()
  }

  const resume = () => {
    isTracking.value = true
    resumeWatch()
  }

  function clearStack() {
    stack.length = 0
    obviousStack.length = 0
  }

  function resumeWatch() {
    stopWatch = watch(source, watchValue, watchOpt)
  }

  return {
    isTracking,
    redo,
    undo,
    clear,
    dispose,
    pause,
    resume,
    history: obviousStack
  }
}