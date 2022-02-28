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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/formInput1',
    name: 'FormInput1',
    component: () => import('../views/FormInput1.vue')
  },
  {
    path: '/formInput2',
    name: 'FormInput2',
    component: () => import('../views/FormInput2.vue')
  },
  {
    path: '/formInput3',
    name: 'FormInput3',
    component: () => import('../views/FormInput3.vue')
  },
  {
    path: '/formInput4',
    name: 'FormInput4',
    component: () => import('../views/FormInput4.vue')
  },
  {
    path: '/formInput5',
    name: 'FormInput5',
    component: () => import('../views/FormInput5.vue')
  },
  {
    path: '/formInput6',
    name: 'FormInput6',
    component: () => import('../views/FormInput6.vue')
  },
  {
    path: '/formInput7',
    name: 'FormInput7',
    component: () => import('../views/FormInput7.vue')
  },
  {
    path: '/formInput8',
    name: 'FormInput8',
    component: () => import('../views/FormInput8.vue')
  },
  {
    path: '/formInput9',
    name: 'FormInput9',
    component: () => import('../views/FormInput9.vue')
  },
  {
    path: '/formInput10',
    name: 'FormInput10',
    component: () => import('../views/FormInput10.vue')
  },
  {
    path: '/formInput11',
    name: 'FormInput11',
    component: () => import('../views/FormInput11.vue')
  },
  {
    path: '/form1',
    name: 'Form1',
    component: () => import('../views/Form1.vue')
  },
  {
    path: '/form2',
    name: 'Form2',
    component: () => import('../views/Form2.vue')
  },
  {
    path: '/form3',
    name: 'Form3',
    component: () => import('../views/Form3.vue')
  },
  {
    path: '/form4',
    name: 'Form4',
    component: () => import('../views/Form4.vue')
  },
  {
    path: '/datatable1',
    name: 'Data Table 1',
    component: () => import('../views/DataTable1.vue')
  },
  {
    path: '/productform1',
    name: 'Product Form 1',
    component: () => import('../views/ProductForm1.vue')
  },
  {
    path: '/productTable',
    name: 'Product Table',
    component: () => import('../views/product/ProductTable.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
