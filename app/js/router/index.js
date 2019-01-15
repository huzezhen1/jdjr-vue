import Vue from 'vue'
import Router from 'vue-router'
import Home from '../home/index.vue'
import Earn from '../earn/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/earn',
      name: 'Earn',
      component: Earn,
    },
  ],
})
