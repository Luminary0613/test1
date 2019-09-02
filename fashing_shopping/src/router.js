import Vue from 'vue'
import Router from 'vue-router'
import Footer from './components/Footer'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('./views/home'),
        Footer
      }
    },
    {
      path: '/hot',
      name: 'hot',
      components: {
        default: () => import('./views/hot'),
      }
    },
    {
      path: '/acc',
      name: 'acc',
      components: {
        default: () => import('./views/acc'),
      }
    },
    {
      path: '/custom',
      name: 'custom',
      components: {
        default: () => import('./views/custom'),
      }
    },
    {
      path: '/find',
      name: 'find',
      components: {
        default: () => import('./views/find'),
        Footer
      }
    },
    {
      path: '/fashion',
      name: 'fashion',
      components: {
        default: () => import('./views/fashion'),
        Footer
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('./views/user'),
        Footer
      }
    }
  ]
})
