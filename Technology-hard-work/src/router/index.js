import { createRouter, createWebHistory } from 'vue-router'

import PageData01 from '../views/PageData01.vue'
import PageData02 from '../views/PageData02.vue'
import PageData03 from '../views/PageData03.vue'
import PageData04 from '../views/PageData04.vue'
import PageData05 from '../views/PageData05.vue'
import PageData06 from '../views/PageData06.vue'
import PageData07 from '../views/PageData07.vue'
import PageData08 from '../views/PageData08.vue'
import PageData09 from '../views/PageData09.vue'
import PageData10 from '../views/PageData10.vue'
import PageData11 from '../views/PageData11.vue'
import PageData12 from '../views/PageData12.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'PageData01',
      component: PageData01,
    },
    {
      path: '/PageData02',
      name: 'PageData02',
      component: PageData02,
    },
    {
      path: '/PageData03',
      name: 'PageData03',
      component: PageData03,
    },
    {
      path: '/PageData04',
      name: 'PageData04',
      component: PageData04,
    },
    {
      path: '/PageData05',
      name: 'PageData05',
      component: PageData05,
    },
    {
      path: '/PageData06',
      name: 'PageData06',
      component: PageData06,
    },
    {
      path: '/PageData07',
      name: 'PageData07',
      component: PageData07,
    },
    {
      path: '/PageData08',
      name: 'PageData08',
      component: PageData08,
    },
    {
      path: '/PageData09',
      name: 'PageData09',
      component: PageData09,
    },
    {
      path: '/PageData10',
      name: 'PageData10',
      component: PageData10,
    },
    {
      path: '/PageData11',
      name: 'PageData11',
      component: PageData11,
    },
    {
      path: '/PageData12',
      name: 'PageData12',
      component: PageData12,
    },
 
  ],
})

export default router
