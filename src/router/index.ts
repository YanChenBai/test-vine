import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/pages/index.vine'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      name: 'home',
      component: IndexPage,
    },
  ],
})

export default router
