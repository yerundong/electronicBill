import Vue from 'vue'
import App from './App'
import '@/common/entry.js'
import '@/components/entry.js'
import moment from '@/common/moment/moment.min.js'
Vue.config.productionTip = false
Vue.prototype.$moment = moment
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
