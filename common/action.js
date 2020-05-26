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
}
