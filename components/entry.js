import Vue from 'vue';

// 引入全局组件
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"

const components = {
	uniNavBar,
}

// 注册全局组件
Object.keys(components).map(key => {
	Vue.component(`${key}`, components[key])
})
