import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Footer from './components/footer.vue'

import 'reset-css'
import 'normalize.css'
import '@/plugins/vant'

Vue.config.productionTip = false
Vue.component('Footer', Footer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
