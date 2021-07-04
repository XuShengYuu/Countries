import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routesP = [{
    path: '/',
    name: 'Home',
    component: ()=>import("../pages/pc/home/Home.vue"),
  },{
    path: '/detail/:name',
    name: 'Detail',
    component: ()=>import("../pages/pc/detail/Detail.vue"),
  }]
const routesM = [{
    path: '/',
    name: 'Home',
    component: ()=>import("../pages/mobile/home/Home.vue"),
  }, {
    path: '/detail/:name',
    name: 'Detail',
    component: ()=>import("../pages/mobile/detail/Detail.vue"),
  }]

let routes = [];
if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
  routes = routesM
} else {
  routes = routesP
}

const router = new VueRouter({
  routes
})

export default router
