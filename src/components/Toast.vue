<script setup lang="ts">
  defineProps<{
    title: string,
    text: string,
    duration: number,
  }>()
  defineEmits<{
    (e: 'close'): void
  }>()
</script>

<template>
  <div class="toast">
    <div class="toast-content">
      <h2>{{title}}</h2>
      <p>{{text}}</p>
    </div>
    <button class="exit-button" @click="$emit('close')">X</button>
  </div>
</template>

<style scoped>
.toast {
  position: fixed;
  bottom: 8px;
  max-width: 700px;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 4px;
  padding: 0;
  margin: 0;
  background-color: #ff0000e0;
}

.toast-content {
  padding: 1em;
}

.exit-button {
  position: absolute;
  right: 1em;
  top: 1em;
  background: white;
  color: black;
  border: none;
  padding: 0.25em;
  margin: 0;
  border-radius: 4px;
}
</style>
