import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import appHeader from '@/components/header/header.vue'
import appFooter from '@/components/footer/footer.vue'
import appSidebar from '@/components/sidebar/sidebar.vue'

Vue.config.productionTip = false

Vue.component('app-header', appHeader)
Vue.component('app-footer', appFooter)
Vue.component('app-sidebar', appSidebar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
