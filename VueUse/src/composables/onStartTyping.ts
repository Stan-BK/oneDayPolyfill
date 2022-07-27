import type { MaybeRef } from "types/types"

const isTypedCharValid = ({
  keyCode,
  metaKey,
  ctrlKey,
  altKey,
}: KeyboardEvent) => {
  if (metaKey || ctrlKey || altKey)
    return false

  // 0...9
  if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105))
    return true

  // a...z
  if (keyCode >= 65 && keyCode <= 90)
    return true

  // All other keys.
  return false
}

export default function(callback: (e: KeyboardEvent) => void) {
  if (window) {
    document.body.addEventListener('keydown', function(e) {
      if (!document.activeElement) {
        isTypedCharValid(e) && callback(e)
      }
    })
  }
}