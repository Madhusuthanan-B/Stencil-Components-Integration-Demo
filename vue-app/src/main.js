import Vue from 'vue'
import App from './App.vue'
import { defineCustomElements } from '@foo/core-library/loader'

Vue.config.productionTip = false
Vue.config.ignoredElements = ['core-card', 'core-nav-bar', 'core-list-group', 'core-spinner', 'core-btn', 'core-drop-down']
defineCustomElements(window)

new Vue({
  render: h => h(App),
}).$mount('#app')
