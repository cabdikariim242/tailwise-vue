import { createRouter, createWebHistory } from 'vue-router'
import buttons from '../views/buttons.vue'
import inputGroup from '../views/inputGroup.vue'
import alert from '../views/alert.vue'
import tabs from '../views/tabs.vue'
import TableViews from '../views/TableViews.vue'
import AccordionView from '../views/AccordionView.vue'
import DatePicker from '../views/DatePicker.vue'
import displayview from '@/views/displayview.vue'
import TomSelectView from '@/views/TomSelectView.vue'
import ImageZoomView from '@/views/ImageZoomView.vue'

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
    path: '/TableViews',
    name: 'TableViews',
    component: TableViews
   
  },
  {
    path: '/DatePicker',
    name: 'DatePicker',
    component: DatePicker
   
  },
  {
    path: '/AccordionView',
    name: 'AccordionView',
    component: AccordionView
   
  },
    {
    path: '/displayview',
    name: 'displayView',
    component: displayview
   
  },
    {
    path: '/tomselectView',
    name: 'TomSelectView',
    component: TomSelectView
  },
      {
    path: '/ImageZoomView',
    name: 'ImageZoomView',
    component: ImageZoomView
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
