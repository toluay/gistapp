import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/Register'
import Login from '../components/Login'

import Cart from '../components/Cart'
import Products from '../components/Products/Index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
   
    {
      path: '/',
      name: 'products',
      component: Products
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    
    ]
});