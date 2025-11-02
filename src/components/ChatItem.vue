<script setup lang="ts">
  import type { ChatMessage } from '../types/chat'
  defineProps<{
    message: ChatMessage
  }>()
</script>

<template>
    <div class="chat-item">
  <p class="chat-message">
    <span v-for="part in message.parts" :key="part.id" :class="part.class">
      {{ part.text }}
    </span>
  </p>
    </div>
</template>

<style scoped>
.chat-message {
  padding: 4px;
  margin: 4px;
  white-space: pre-wrap;
}
.chat-item {
  padding: 4px;
  margin-bottom: 8px;
  background-color: #2d2f31;
  border-radius: 3px;
}
/* text node classes */
.chat-message-part-player {
  color: #5f6dd7;
}
.chat-message-part-location {
  color: #875fd7;
}
/** item types **/
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
/** color messages **/
/* see archipelago.js's ValidJSONColorType for details on these */
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
