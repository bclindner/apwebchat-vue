<script setup lang="ts">
import { ref } from 'vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import { useChatStore } from '../stores/ChatStore'
import { ChatClientStatus } from '../enums/chat'

const url = ref('')
const slot = ref('')
const message = ref('')
const chatStore = useChatStore()

async function sendMessage(e: Event) {
  e.preventDefault()
  chatStore.sendMessage(message.value)
  message.value = ''
}
</script>

<template>
  <div class="chat-log">
    <div class="chat-item" v-for="message in chatStore.chatLog" :key="message.id">
      <p class="chat-message">
        <span v-for="part in message.parts" :key="part.id" :class="part.class">
          {{ part.text }}
        </span>
      </p>
    </div>
  </div>
  <form
    class="chat-input"
    v-if="chatStore.status == ChatClientStatus.CONNECTED"
    @submit="sendMessage"
  >
    <div class="chat-input-field">
      <input name="message" v-model="message" />
      <button name="message" type="submit">Say</button>
    </div>
  </form>
  <form class="chat-input" @submit.prevent="() => chatStore.connect(url, slot)" v-else>
    <div class="chat-input-field">
      <label for="url">URL</label>
      <input name="url" v-model="url" />
    </div>
    <div class="chat-input-field">
      <label for="slot">Slot</label>
      <input name="slot" v-model="slot" />
    </div>
    <LoadingSpinner v-if="chatStore.status == ChatClientStatus.CONNECTING" style="flex-grow: 1;" />
    <button name="connect" type="submit" v-else>Connect</button>
  </form>
</template>

<style scoped>
.chat-log {
  background-color: #1d1f21;
  min-height: 100px;
  padding: 8px 8px 4px 8px;
  border-radius: 3px;
}
.chat-item {
  padding: 4px;
  margin-bottom: 8px;
  background-color: #2d2f31;
  border-radius: 3px;
}
.chat-message {
  padding: 4px;
  margin: 4px;
  white-space: pre-wrap;
}
.chat-input {
  display: flex;
  align-items: center;
  margin: 8px 0;
}
.chat-input-field {
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;
}
input {
  flex-grow: 1;
  padding: 4px 4px 4px 0;
  margin: 4px 4px 4px 0;
  background-color: #1d1f21;
  color: #efefef;
  border: 2px solid #1d1f21;
  border-radius: 3px;
}
label {
  margin: 8px 4px 8px 0;
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
/* text node classes */
.chat-message-part-item-default {
  color: #5f6dd7;
}
.chat-message-part-item-filler {
  color: #5ed6d4;
}
.chat-message-part-item-useful {
  color: #5f6dd7;
}
.chat-message-part-item-progression {
  color: #875fd7;
}
.chat-message-part-item-trap {
  color: #d65e80;
}

.chat-message-part-player {
  color: #5f6dd7;
}
.chat-message-part-location {
  color: #875fd7;
}
/* see ValidJSONColorType for details on these */
.chat-message-part-color-bold {
  font-weight: bold;
}
.chat-message-part-color-underline {
  text-decoration: underline;
}
.chat-message-part-color-black {
  color: black;
}
.chat-message-part-color-red {
  color: red;
}
.chat-message-part-color-green {
  color: green;
}
.chat-message-part-color-yellow {
  color: yellow;
}
.chat-message-part-color-blue {
  color: blue;
}
.chat-message-part-color-magenta {
  color: magenta;
}
.chat-message-part-color-cyan {
  color: cyan;
}
.chat-message-part-color-white {
  color: white;
}
.chat-message-part-color-red_bg {
  background-color: red;
}
.chat-message-part-color-green_bg {
  background-color: green;
}
.chat-message-part-color-yellow_bg {
  background-color: yellow;
}
.chat-message-part-color-blue_bg {
  background-color: blue;
}
.chat-message-part-color-magenta_bg {
  background-color: magenta;
}
.chat-message-part-color-cyan_bg {
  background-color: cyan;
}
.chat-message-part-color-white_bg {
  background-color: white;
}

@media only screen and (max-width: 768px) {
  .chat-input {
    flex-direction: column;
  }
}
</style>
