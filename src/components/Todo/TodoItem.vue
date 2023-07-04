<template>
  <li class="todo" :class="{ 'completed': props.todo.isCompleted }">
    <div class="view">
      <input class="toggle" type="checkbox"
             :checked="props.todo.isCompleted"
             @input="setIsCompleted"
      />
      <label>{{ props.todo.text }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" type="text" />
  </li>
</template>

<style scoped></style>

<script setup lang="ts">
import type { Todo } from "@/interfaces";

interface Props {
  todo: Todo
}
const props = defineProps<Props>()

interface Emits {
  (e: 'set-is-completed', isCompleted: boolean): void
  (e: 'asdfg', todo: Todo): void
}

const emit = defineEmits<Emits>()
function setIsCompleted() {
  emit('set-is-completed', !props.todo.isCompleted)
}
</script>