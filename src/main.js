// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router,{ createRouter } from './router'
import store from './store'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' //这个样式必须引入
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './icons' // icon
import '@/styles/index.scss' // global css
import axios from 'axios'
import { getToken } from '@/utils/auth' // get token from cookie
import './permission'

Vue.config.productionTip = false
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false }) // NProgress Configuration

Vue.use(Element, {
  size: 'medium', // set element-ui default size
})


router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
const routs = this.$route
export default routs
