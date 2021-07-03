import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import *as filters from './filters/numbersFormat.js'

Vue.config.productionTip = false

Object.keys(filters).forEach(key=>{
    Vue.filter(key,filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
