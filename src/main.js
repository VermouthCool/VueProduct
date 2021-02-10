import Vue from 'vue'
import App from './App.vue'
import store from '../src/vuex/store'
import 'lib-flexible'
import VueI18n from 'vue-i18n'
import en from '../src/language/en'
import zh from '../src/language/zh'

Vue.config.productionTip = false
Vue.use(VueI18n)

var i18n = new VueI18n({
  locale: en,//(navigator.language || navigator.browserLanguage).toLowerCase(),
  messages: {
    'zh-cn': zh,
    'en': en
  }
})

new Vue({
  render: h => h(App),
  i18n,
  store
}).$mount('#app')
