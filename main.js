import Vue from 'vue'
import App from './App'
import '@/common/entry.js'
import '@/components/entry.js'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
