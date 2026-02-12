<script setup lang="ts">
import { ref } from 'vue'
import InputField from '../components/InputField.vue'
import ChatItem from '../components/ChatItem.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import Toast from '../components/Toast.vue'
import { useChatStore } from '../stores/ChatStore'
import { ChatClientStatus } from '../enums/chat'

const url = ref('')
const slot = ref('')
const password = ref('')
const message = ref('')
const chatStore = useChatStore()

async function sendMessage(e: Event) {
  e.preventDefault()
  chatStore.sendMessage(message.value)
  message.value = ''
}

async function clearToast() {
  chatStore.resetConnection()
}
</script>

<template>
  <div class="chat-log">
    <ChatItem v-for="message in chatStore.chatLog" :id="message.id" :message="message" />
  </div>
  <Toast
    v-if="chatStore.status == ChatClientStatus.ERRORED"
    title="Failed to connect to Archipelago"
    :text="chatStore.errorMessage"
    @close="clearToast"
  />
  <form
    class="chat-input"
    v-if="chatStore.status == ChatClientStatus.CONNECTED"
    @submit="sendMessage"
  >
    <InputField name="message" v-model="message" />
    <button name="message" type="submit">Say</button>
  </form>
  <form class="chat-input" @submit.prevent="() => chatStore.connect(url, slot)" v-else>
    <InputField name="url" label="URL" v-model="url" />
    <InputField name="slot" label="Slot" v-model="slot" />
    <InputField name="password" label="Password" v-model="password" />
    <LoadingSpinner v-if="chatStore.status == ChatClientStatus.CONNECTING" style="flex-grow: 1;" />
    <button name="connect" type="submit" v-else>Connect</button>
  </form>
</template>

<style scoped>
.chat-log {
  background-color: #1d1f21;
  min-height: 100px;
  padding: 8px;
  border-radius: 3px;
}
.chat-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px 0;
}
button {
  flex-shrink: 1;
  margin: 0;
  padding: 4px;
  background-color: #1d1f21;
  color: #efefef;
  border: 2px solid #1d1f21;
  border-radius: 3px;
}
button:hover {
  background-color: #2d2f31;
}
</style>
