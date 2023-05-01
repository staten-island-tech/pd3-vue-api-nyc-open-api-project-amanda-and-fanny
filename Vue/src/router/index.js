import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bronx',
      name: 'bronx',
      component: () => import('../views/BronxViews.vue')
    },
    {
      path: '/brooklyn',
      name: 'brooklyn',
      component: () => import('../views/BrooklynViews.vue')
    },

    {
      path: '/island',
      name: 'island',
      component: () => import('../views/StatenViews.vue')
    }
  ]
})

export default router
