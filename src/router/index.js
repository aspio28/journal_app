import { createRouter, createWebHashHistory } from 'vue-router'

import daybookRouter from '@/modules/daybook/router/index'

const routes = [
  {
    path: '/',
    ...daybookRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
