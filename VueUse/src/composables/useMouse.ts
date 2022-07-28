import { ref } from "vue"

export default function() {
  if (!window) {
    return {
      x: 0,
      y: 0
    }
  }

  const x = ref(0)
  const y = ref(0)

  function initEvent() {
    window.addEventListener('mousemove', function(e) {
      setPos(e)
    })
    window.addEventListener('dragover', function(e) {
      setPos(e)
    })
  }

  function setPos(e: PointerEvent | DragEvent) {
    x.value = e.pageX
    y.value = e.pageY
  }

  initEvent()

  return {
    x,
    y
  }
}