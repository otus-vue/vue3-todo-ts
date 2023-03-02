import { createRouter, createWebHistory } from 'vue-router'
import Todos from "@/components/Todo/Todos.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Todos
    }
  ]
})

export default router
