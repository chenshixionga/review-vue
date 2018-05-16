// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SlotChild from '@/components/componentDemo/SlotChild'
import FocusDirective from '@/components/directiveDemo/focusDirective'
import GlobalDirective from '@/components/directiveDemo/globalDirective'

Vue.config.productionTip = false

//注册全局组件
Vue.component('slotChild',SlotChild)
Vue.component('focusDirective',FocusDirective)
Vue.directive('global',GlobalDirective)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
