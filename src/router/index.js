import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Home.vue'
import Detail from '../pages/detail/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/detail/:name',
    name: 'Detail',
    component: Detail
  }]

const router = new VueRouter({
  routes
})

export default router
