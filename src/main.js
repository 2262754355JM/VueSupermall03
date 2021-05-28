import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from './vant/vant'
import 'network/mock.js'
import toast from 'components/common/toast/index'



Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()
Vue.use(vant);
Vue.use(toast)
new Vue({
  router,
  store,
 
  render: h => h(App)
}).$mount('#app')
