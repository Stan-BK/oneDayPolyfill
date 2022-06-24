import { ref } from 'vue'

declare global {
  interface Location {
    [key: string]: any
  }
}

type location = {
  [key: string]: any
}

const attributes = ['hash', 'host', 'hostname', 'href', 'origin', 'pathname', 'port', 'protocol', 'search']

export default function() {
  const obj: location = ref({})
  function buildState(state: string) {
    for (let attr of attributes) {
      obj.value[attr] = location[attr]
    }
    obj.value['trigger'] = state
    obj.value['state'] = history['state']
    obj.value['length'] = history['length']
  }
  buildState('load')
  window.addEventListener('popstate', function() {
    buildState('popstate')
  })
  window.addEventListener('hashchange', function() {
    buildState('hashchange')
  })
  return obj
}