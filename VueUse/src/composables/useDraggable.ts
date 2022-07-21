import type { MaybeRef } from "types/types";
import { computed, onMounted, ref, toRefs, unref } from "vue";

type PointerType = 'mouse' | 'touch' | 'pen'

interface Position {
  x: number
  y: number
}

 interface UseDraggableOptions {
  exact?: boolean
  preventDefault?: boolean
  stopPropagation?: boolean
  draggingElement?: HTMLElement | SVGElement | Window | Document | null | undefined
  pointerTypes?: PointerType[]
  initialValue?: Position
  onStart?: (position: Position, event: PointerEvent) => void | false
  onMove?: (position: Position, event: PointerEvent) => void
  onEnd?: (position: Position, event: PointerEvent) => void
}

export default function(target: MaybeRef<HTMLElement | SVGElement | null | undefined>, options: UseDraggableOptions = {}) {
  const draggingElement = options.draggingElement ?? window
  const position = ref<Position>(unref(options.initialValue) ?? { x: 0, y: 0})
  const pressPos = ref<Position>()

  function filterEvent(e: PointerEvent) {
    if (options.pointerTypes)
      return options.pointerTypes.includes(e.pointerType as PointerType)
    return true
  }

  function start(e: PointerEvent) {
    if (!filterEvent(e)) return
    if (options.exact && unref(target) !== e.target) return
    const rect = unref(target)!.getBoundingClientRect()
    const pos = {
      x: e.pageX - rect.left,
      y: e.pageY - rect.top
    }
    if (options.onStart?.(pos, e) === false) return
    pressPos.value = pos
    handleEvent(e)
  }

  function move(e: PointerEvent) {
    if (!filterEvent(e)) return
    if (!pressPos.value) return
    position.value.x = e.pageX - pressPos.value.x
    position.value.y = e.pageY - pressPos.value.y
    
    options.onEnd?.(position.value, e)
    handleEvent(e)
  }

  function end(e: PointerEvent) {
    if (!filterEvent(e)) return
    pressPos.value = undefined
    options.onEnd?.(position.value, e)
    handleEvent(e)
  }

  function handleEvent(e: PointerEvent) {
    options.preventDefault && e.preventDefault()
    options.stopPropagation && e.stopPropagation()
  }

  onMounted(() => {
    if (window) {
      const t = unref(target)
      t?.addEventListener('pointerdown', start as (e: Event) => void, true)
      t?.addEventListener('pointermove', move as (e: Event) => void, true)
      t?.addEventListener('pointerup', end as (e: Event) => void, true)
    }
  })
  return {
    ...toRefs(position.value),
    position,
    isDragging: computed(() => !!pressPos.value),
    style: computed(() => `left:${position.value.x}px;top:${position.value.y}px`)
  }
}