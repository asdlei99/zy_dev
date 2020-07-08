import Vue from 'vue'
import Mini from './main'
import 'modern-normalize'
import '../lib/element/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(Mini)
}).$mount('#app')
