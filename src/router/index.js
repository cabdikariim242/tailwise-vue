import { createRouter, createWebHistory } from 'vue-router'
import buttons from '../views/buttons.vue'
import inputGroup from '../views/inputGroup.vue'
import alert from '../views/alert.vue'
import tabs from '../views/tabs.vue'
import AccordionView from '../views/AccordionView.vue'

const routes = [
  {
    path: '/buttons',
    name: 'buttons',
    component: buttons
  },
  {
    path: '/inputGroup',
    name: 'inputGroup',
    component: inputGroup
  },
  {
    path: '/alert',
    name: 'alert',
    component: alert
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: tabs
   
  },
  {
    path: '/AccordionView',
    name: 'AccordionView',
    component: AccordionView
   
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
