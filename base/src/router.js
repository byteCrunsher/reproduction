import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import CustomAppContainer from './views/CustomAppContainer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/apps/*',
      component: CustomAppContainer,
    }
  ]
})
