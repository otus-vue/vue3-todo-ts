<template>
  <footer class="footer">
    <span class="todo-count">{{ left }} items left</span>
    <ul class="filters">
      <li>
        <a href="#"
           @click="$emit('set-filter', TodoFilter.All)" class="selected">All</a>
      </li>
      <li>
        <a href="#"
           @click="$emit('set-filter', TodoFilter.Active)">Active</a>
      </li>
      <li>
        <a href="#"
           @click="$emit('set-filter', TodoFilter.Completed)">Completed</a>
      </li>
    </ul>
    <button class="clear-completed">Clear completed</button>
  </footer>
</template>

<script setup lang="ts">
import { type TodoFilter } from "@/interfaces";

interface Props {
  left: number
}
defineProps<Props>()
const emit = defineEmits<{
  (e: 'set-filter', filter: TodoFilter): void
}>()
</script>