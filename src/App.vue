<template>
  <section class="todoapp">
    <todo-input @add-todo="addTodo"></todo-input>
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <todo-item v-for="todo in filteredTodos"
                   :key="todo.id"
                   :todo="todo"
                   @toggle-completed="toggleCompleted"
                   @set-text="setText(todo.id, $event)"
                   @destroy="removeTodo(todo.id)"
        ></todo-item>
      </ul>
    </section>
    <todo-filters :left="leftCount" @set-filter="filter = $event"></todo-filters>
  </section>
  <todo-footer></todo-footer>
</template>

<script setup lang="ts">
import TodoItem from "@/components/TodoApp/TodoItem.vue";
import TodoFooter from "@/components/TodoApp/TodoFooter.vue";
import TodoFilters from "@/components/TodoApp/TodoFilters.vue";
import TodoInput from "@/components/TodoApp/TodoInput.vue";
import {computed, reactive, ref} from "vue";
import { type Todo, TodoFilter } from "@/interfaces";



let todos = reactive<Todo[]>([
  {
    id: 1,
    title: 'Buy laptop',
    isCompleted: false
  },
  {
    id: 2,
    title: 'Run laptop',
    isCompleted: false
  },
  {
    id: 3,
    title: 'Clean my room',
    isCompleted: true
  },
])

function addTodo(text: string) {
  todos.push({
    id: todos.length + 1,
    title: text,
    isCompleted: false
  })
}

function toggleCompleted(id: number) {
  const todo = todos.find(todo => todo.id === id)
  if (todo)
    todo.isCompleted = !todo.isCompleted
  else
    throw new Error('invalid todo')
}

const leftCount = computed(
    () => todos.filter(todo => !todo.isCompleted).length
)

function setText(id: number, newText: string) {
  const todo = todos.find(todo => todo.id === id)
  if (todo)
    todo.title = newText
}



const filter = ref(TodoFilter.Active)

const filteredTodos = computed(() => {
  switch (filter.value) {
    case TodoFilter.All: return todos;
    case TodoFilter.Completed: return todos.filter(todo => todo.isCompleted);
    case TodoFilter.Active: return todos.filter(todo => !todo.isCompleted);
  }
})

console.log(filteredTodos)

function removeTodo(id: number) {
  const i = todos.findIndex((todo) => todo.id === id)
  todos.splice(i, 1)
}
</script>