const config = require('@/domain.config');
import cookie from '@/common/cookie.js'
const cookie_ = cookie.get() ? JSON.stringify(cookie.get()) : undefined;

let md5 = require('@/js_sdk/md5.min.js');

// @param <boolean> needSubUrl url是否需要补全前缀
const request = function({
	needSubUrl = true,
	...options
}) {
	let url = needSubUrl ? config.domain + options.url : options.url;
	let header = options.header || {
		'content-type': 'application/json',
		'cookie': cookie_
	};
	let stamp = new Date().getTime();
	let stringA = `appid=appid&data=${JSON.stringify(options.data)}&noise=${stamp}&key=192006250b4c09247ec02f6a2d&version=1.0`;
	let sign = md5(stringA);
	let data = {
		"appid": "appid",
		"data": options.data,
		"noise": stamp,
		"version": "1.0",
		"stringA": stringA,
		"sign": sign
	}
	
		return new Promise((resolve, reject) => {
			const requestTask = uni.request({
				url: url,
				method: options.method,
				data: options.data,
				header: header,
				timeout: options.timeout,
				success(res) {
					resolve(res.data)
				},
				fail(error) {
					reject(error)
				},
			})
		})
}
export default request;
