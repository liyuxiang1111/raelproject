import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
//使用bootsrap
import 'bootstrap/dist/css/bootstrap.min.css'
//使用swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/css/swiper.css'
Vue.use(VueAwesomeSwiper)
//使用animatcss
import animate from '@/assets/css/animate.css'
Vue.use(animate)
//使用element-ui -S
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1:8888'
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
