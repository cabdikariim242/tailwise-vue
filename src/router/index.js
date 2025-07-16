import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import hospital from '../views/hospital.vue'
import factory from '../views/factory.vue'
import banking from '../views/banking.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hospital',
    name: 'hospital',
    component: hospital
  },
  {
    path: '/factory',
    name: 'factory',
    component: factory
  },
  {
    path: '/banking',
    name: 'banking',
    component: banking
   
  },
  {
    path: '/about',
    name: 'about',
   component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
