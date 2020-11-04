import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/system',
    name: 'System',
    component: () => import( '../views/System.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import( '../views/Product.vue')
  },
  {
    path: '/partner',
    name: 'Partner',
    component: () => import( '../views/Partner.vue')
  },
  {
    path: '/connection',
    name: 'Connection',
    component: () => import( '../views/Connection.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
