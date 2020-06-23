import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Register from './components/register'
import { ipcRenderer } from 'electron'
import 'modern-normalize'
Register.registerComponents()
Vue.prototype.$ipc = ipcRenderer
Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
