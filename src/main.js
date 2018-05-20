// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from '@/vuex/store'
import SlotChild from '@/components/componentDemo/SlotChild'
import FocusDirective from '@/components/directiveDemo/focusDirective'
import {globalDirective} from '@/components/directiveDemo/globalDirective.js'
import {globalFilter} from '@/components/filter/globalFilter.js'
import {globalGuard} from '@/components/routerDemo/routeGuard.js'

Vue.config.productionTip = false

// axios 使用Vue 原型属性配置
// axios.defaults.baseURL = "http://www.wwtliu.com"

Vue.prototype.api  = "/api"

Vue.prototype.$axios = axios

// 注册全局组件
Vue.component('slotChild',SlotChild)
Vue.component('focusDirective',FocusDirective)

// 注册全局组件
Vue.directive('globalDirective',globalDirective)

// 注册全局过滤器
Vue.filter('globalFilter',globalFilter)

// 全局路由守卫
router.beforeEach(globalGuard)

// 全局后置钩子
router.afterEach((to, from) => {
  console.log(to);
  console.log(from);
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
