import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/mentors',
    name: 'mentors',
    component: () => import('../views/MentorsView.vue')
  },
  {
    path: '/reservations',
    name: 'reservations',
    component: () => import('../views/ReservationsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import( '../views/UserProfile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
