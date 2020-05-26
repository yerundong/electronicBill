import Vue from 'vue';

// 引入全局组件
// import uniNavBar from "./"

const components = {
	
}

// 注册全局组件
Object.keys(components).map(key => {
	Vue.component(`${key}`, components[key])
})