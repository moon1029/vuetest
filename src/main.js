import Vue from 'vue'
import VueRoute from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRoute)

new Vue({
  render: h => h(App)
}).$mount('#app')
