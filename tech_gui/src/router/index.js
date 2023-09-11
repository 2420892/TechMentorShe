import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SignupMentee from '../components/SignupMentee.vue'
import LogInVue from '@/components/LogIn.vue';



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
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/AdminView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import( '../views/UserProfile.vue')
  },
  {
    path: '/profilelog',
    name: 'profilelog',
    component: () => import( '../views/ProfileView.vue')
  },
  {
    path: '/SignupMentee',
    name: 'SignupMentee',
    component: SignupMentee,
  },
  {
    path: '/SingleView/:mentorID',
    name: 'SingleView',
    component: () => import('../views/SingleView.vue'),
  },
    
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogInVue,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
