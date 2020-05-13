import Vue from 'vue'
import App from './App'
import store from './store'
import request from './utils/request'

Vue.prototype.$store = store   //挂载Vuex
Vue.prototype.request = request // 挂载请求
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
