export default {
	// 判断登录
	judgeLogin(gologin = true) {
		return new Promise((resolve, reject) => {
			if (!uni.getStorageSync("access_token")) {
				resolve(false)
				if (gologin) {
					uni.navigateTo({
						url: '/pages/login/index',
					})
				}

			} else {
				$http.isTokenValid().then(res => {
					if (res.error_no != 0) {
						resolve(false)
						if (gologin) {
							uni.navigateTo({
								url: '/pages/login/index',
							})
						}

					} else {
						resolve(true)
					}
				})
			}
		})
	},
	/**
	 * @method 格式化数字
	 * @param <object> option.cardinal 基数
	 * @param <object> option.cardinal 保留小数
	 * @param <object> option.suffix 单位
	 */
	formatNumberUnit(option) {
		let cardinal = option.cardinal || 10000;
		let decimal = option.decimal || 2;
		let suffix = option.suffix || '';
		let value = (option.value / cardinal).toFixed(decimal);
		let unit = '';
		
		if (cardinal <= 100) {
			unit = '百';
		} else if (cardinal == 1000) {
			unit = '千';
		} else if (cardinal == 10000) {
			unit = '万';
		} else if (cardinal == 100000) {
			unit = '十万';
		} else if (cardinal == 1000000) {
			unit = '百万';
		} else if (cardinal == 10000000) {
			unit = '千万';
		} else if (cardinal == 100000000) {
			unit = '亿';
		}
		return {
			value: value, 
			unit: unit + suffix
		}
	}
}
