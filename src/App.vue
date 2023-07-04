<template>
  <section class="todoapp">
    <todo-header @add-todo="addTodo"></todo-header>
    <todos :todos="viewTodo" @set-is-completed="setIsCompleted"></todos>
    <todo-footer :count="countLeft"
                 @clear-completed="clearCompleted"
                 @set-mode="currentMode = $event"
    ></todo-footer>
  </section>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a></p>
    <p>Refactored by <a href="https://github.com/cburgmer">Christoph Burgmer</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>


<script setup lang="ts">
import TodoHeader from '@/components/Todo/TodoHeader.vue';
import TodoFooter from '@/components/Todo/TodoFooter.vue';
import {computed, ref} from 'vue';
import type { Ref } from 'vue'
import type { Todo } from "@/interfaces";
import { Mode } from "@/interfaces";

const todos = ref<Todo[]>([
  {
    id: 1,
    text: 'first todo',
    isCompleted: false,
  }, {
    id: 2,
    text: 'second todo',
    isCompleted: true,
  }, {
    id: 3,
    text: 'third todo',
    isCompleted: false,
  },
])

const currentMode = ref(Mode.All)

const viewTodo = computed(() =>
    filterTodoByMode(todos.value, currentMode))

function filterTodoByMode(todos: Todo[], mode: Ref<Mode>) {
  switch (mode.value) {
    case Mode.All: return todos;
    case Mode.Active: return todos.filter(t => !t.isCompleted)
    case Mode.Completed: return todos.filter(t => t.isCompleted)
  }
}

function setIsCompleted({ id, val }: {id: number, val: boolean}) {
  const todo = todos.value.find(todo => todo.id === id)
  if (todo)
    todo.isCompleted = val
  else
    throw new Error('Undefined todo')
}

function clearCompleted() {
  todos.value = todos.value.filter(t => !t.isCompleted)
}

function addTodo(text: string) {
  todos.value.push({ id: todos.value.length + 1, text, isCompleted: false })
}

const countLeft = computed(() => todos.value.filter(t => !t.isCompleted).length)
</script>