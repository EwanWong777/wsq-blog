import Vue from 'vue'
import Cookies from 'js-cookie'
import Element from 'element-ui'

import 'normalize.less/normalize.less'
import 'element-ui/lib/theme-chalk/index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './styles/common.less'

import App from './App'
import router from './router'
import i18n from './i18n'
import store from './store'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = true

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')