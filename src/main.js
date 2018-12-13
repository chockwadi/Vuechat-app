import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import { store } from './store/store'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
