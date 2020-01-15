import Vue from 'vue'
import appHeader from '@/components/header/header.vue'
import appFooter from '@/components/footer/footer.vue'
import appSidebar from '@/components/sidebar/sidebar.vue'
import appMenuMain from '@/components/menu-main/menu-main.vue'
import appButtonMenuMain from "@/components/button-menu-main/button-menu-main.vue"

Vue.component('app-header', appHeader)
Vue.component('app-footer', appFooter)
Vue.component('app-sidebar', appSidebar)
Vue.component('app-menu-main', appMenuMain)
Vue.component('app-button-menu-main', appButtonMenuMain)