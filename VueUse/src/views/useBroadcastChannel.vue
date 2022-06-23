<script setup lang="ts">
import { ref } from 'vue'
import useBroadcastChannel from '../composables/useBroadcastChannel'
// import {useBroadcastChannel} from '@vueuse/core'
const {
  isSupported,
  channel,
  post,
  close,
  error,
  isClosed,
  data
} = useBroadcastChannel({ name: 'vueuse-demo-channel' })

const hasOtherWindow = ref(false)
const message = 'Hello, VueUse World!'

if (channel.value) {
  channel.value.onmessage = function(e) {
    alert('new message from parent tab')
  }
}

function sendBroadcast() {
  if (!hasOtherWindow.value) {
    window.open('/useBroadcastChannel')
    hasOtherWindow.value = true
  } else {
    post(message)
  }
}
</script>
<template>
  <button @click="sendBroadcast">{{ hasOtherWindow ? 'send broadcast' : 'open same tab' }}</button>
</template>
<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'useBroadcastChannel'
})
</script>