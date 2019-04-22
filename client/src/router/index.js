
import Vue from 'vue'
import Router from 'vue-router'

import Auth from '@/components/pages/Auth'
import Movies from '@/components/pages/Movies'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/',
      name: 'Movies',
      component: Movies,
      meta: {requiresAuth: true},

    },

  ]
})
