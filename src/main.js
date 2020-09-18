import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/tailwind.css'

import '@/assets/css/mobirise-icons/mobirise-icons.css'
import '@/assets/css/mobirise-icons2/mobirise2.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import '@/assets/css/gg.css'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  created () {
    AOS.init()
  },
}).$mount('#app')
