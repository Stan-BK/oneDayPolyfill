import { ref, watch } from 'vue'

export default function(value?: string) {
  const title = ref('')
  if (value != undefined) {
    title.value = value
  }

  function modifyTitle(val: string) {
    document.title = val
  }

  watch(title, (newVal) => {
    title.value = newVal
    modifyTitle(title.value)
  }, {
    immediate: true
  })
  
  return title
}