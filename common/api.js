import request from './request.js';
// console.log(request)

export default {
	// 登录
	login(query){
		return request({
			url: '/platmanager/login',
			method: 'post',
			data: query,
		})
	},
	jscode2session(query){
		return request({
			url: 'https://api.weixin.qq.com/sns/jscode2session',
			needSubUrl: false,
			method: 'get',
			data: query,
		})
	}
}