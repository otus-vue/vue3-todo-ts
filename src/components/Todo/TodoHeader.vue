<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo"
           placeholder="What needs to be done?"
           autofocus v-model="text"
           @keyup.enter="addTodo"
    >
  </header>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('')

interface Emits {
  (e: 'add-todo', str: string): void
}

const emit = defineEmits<Emits>()
function addTodo() {
  emit('add-todo', text.value)
  text.value = ''
}
</script>