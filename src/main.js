/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import GlobalIcon from '@/components/icons/global-icon.vue'

Vue.component('GlobalIcon', GlobalIcon)

Vue.config.productionTip = false

new Vue({
  // Icon,
  render: h => h(App),
}).$mount('#app')
