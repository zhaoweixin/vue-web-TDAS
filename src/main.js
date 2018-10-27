// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuesax from 'vuesax'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Vuesax)

import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage/HomePage'
import NewsPage from '@/components/NewsPage/NewsPage'
import BodyLeft from '@/common/BodyLeft/BodyLeft'
import BodyRight from '@/common/BodyRight/BodyRight'
import BodyMiddle from '@/common/BodyMiddle/BodyMiddle'
import BodyBottom from '@/common/BodyBottom/BodyBottom'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';

Vue.config.productionTip = false

const routes = [
	//route for the home route of the webpage
	{ path: '/', redirect: '/home' },
	//route for the about route of the webpage
  { path: '/home', name: 'home', component: HomePage },
  { path: '/news', name: 'news', component: NewsPage }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app', 
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')


