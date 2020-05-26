import utils from '@/common/utils.js'

export default {
	get() {
		return uni.getStorageSync('cookies')
	},
	set(value){
		let type = utils.getVariableType(value);
		if(type == 'Object'){
			uni.setStorageSync('cookies', value)
		}
	},
	clear(){
		uni.removeStorageSync('cookies');
	},
	setItem(name, value) {
		let cookies = uni.getStorageSync('cookies');
		let type = utils.getVariableType(cookies);
		if(type == 'Object'){
			cookies[name] = value
		} else {
			cookies = {
				[name]: value
			}
		}
		uni.setStorageSync('cookies', cookies)
	},
	getItem(name) {
		let cookies = uni.getStorageSync('cookies');
		let type = utils.getVariableType(cookies);
		if(type == 'Object'){
			return cookies[name]
		}else{
			return undefined
		}
	},
	clearItem(name){
		let cookies = uni.getStorageSync('cookies');
		let type = utils.getVariableType(cookies);
		if(type == 'Object'){
			delete cookies[name]
		}
		uni.setStorageSync('cookies', cookies)
	}
}

