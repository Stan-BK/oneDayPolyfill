import { onScopeDispose, ref } from 'vue'
export default function(opt: { 
                                name: string,
                                window?: Window
                             }) {
  const isSupported = support()
  const isClosed = ref(false)
  const channel = ref<BroadcastChannel | null>(null)
  const data = ref()
  const error = ref<Event | null>(null)

  if (isSupported) {
    const bc = new BroadcastChannel(opt.name)
    channel.value = bc
    bc.addEventListener('message', function(e) {
      data.value = e.data
    })
    bc.addEventListener('messageerror', function(e) {
      error.value = e
    })
    bc.addEventListener('close', function() {
      isClosed.value = true
    })
  }
  
  function post(message: string) {
    if (channel.value) {
      channel.value.postMessage(message)
    }
  }
  
  function close() {
    if (channel.value) {
      channel.value.close()
    }
    isClosed.value = true
  }

  function support() {
    return window && window.BroadcastChannel
  }

  onScopeDispose(() => {
    close()
  })

  return {
    isSupported,
    post,
    close,
    error,
    isClosed,
    channel,
    data
  }
}