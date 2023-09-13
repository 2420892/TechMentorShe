import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SignupMentee from '../components/SignupMentee.vue'
import LogInVue from '@/components/LogIn.vue';
import SignupMentorVue from '@/components/SignupMentor.vue';
import { useCookies } from "vue3-cookies"
const {cookies} = useCookies()



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "LogIn" });
      }
    },
  },
  
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "LogIn" });
      }
    },
  },
  {
    path: '/mentors',
    name: 'mentors',
    component: () => import('../views/MentorsView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "LogIn" });
      }
    },
  },
  {
    
      path: '/reservations',
      name: 'reservations',
    component: () => import('../views/ReservationsView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "LogIn" });
      }
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/AdminView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "LogIn" });
      }
    },
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import( '../views/UserProfile.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "LogIn" });
      }
    },
  },
  {
    path: '/profilelog',
    name: 'profilelog',
    component: () => import( '../views/ProfileView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "LogIn" });
      }
    },
  },
  {
    path: '/SignupMentee',
    name: 'SignupMentee',
    component: SignupMentee,

  },
  {
    path: '/SignupMentor',
    name: 'SignupMentor',
    component: SignupMentorVue,
  },
  {
    path: '/SingleView/:mentorID',
    name: 'SingleView',
    component: () => import('../views/SingleView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "LogIn" });
      }
    },
  },
    
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogInVue,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
