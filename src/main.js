// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuesax from 'vuesax'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(VueRouter)
Vue.use(Vuesax)
Vue.use(Vuex)

import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';

import HomePage from '@/components/HomePage/HomePage'
import NewsPage from '@/components/NewsPage/NewsPage'

/*function*/
import DataManager from './common/DataManager'

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

const store = new Vuex.Store({
  state: {
    filesListData:[
      {"title": ""}
    ],
    fileAttrList:[''],
    checkboxes:[]
  },
  mutations: {
    getFilesListData (state, payload) {
      state.filesListData = payload.data
    },
    getFileAttrList (state, payload) {
      state.fileAttrList = payload.data
    },
    updateListdata (state, payload) {
      console.log(payload)
    },
    addListdata (state, payload){
      state.checkboxes.push(payload)
    },
    removeListdata (state, payload){
      let arr = [...state.checkboxes],
        index = arr.indexOf(payload)
      if(index > -1){
        arr.splice(index, 1)
        state.checkboxes = arr
      }
    }
  },
  getters: {},
  actions: {
    getFilesListData (context) {
      //获取文件数据列表
      DataManager.getDataInfo().then(response => {
        let re = []
        response.data.forEach( (d, i) => {
            let checkModel = d + '_' + i
            let obj = {'title': d.name}
              obj[checkModel] = false
            re.push(obj)
        })
        context.commit('getFilesListData', {data: re})
      })
    },
    getFileAttrList (context, payload) {
      //获取数据文件属性
      DataManager.getFileAttrList(payload.dataName).then(response => {
        console.log(response.data)
      })
    }
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted() {
    this.$store.dispatch('getFilesListData') // init listdata
  }
}).$mount('#app')
