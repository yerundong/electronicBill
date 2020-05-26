<template>
	<view class="bs_container">
		<form>
			<view class="cu-form-group titleWidth">
				<view class="title">服务地址</view>
				<input placeholder="服务地址" name="input" v-model="dataForm.url"></input>
				<text class="iconfont iconsaomiao" @click="scanHandle"></text>
			</view>
			<view class="cu-form-group titleWidth">
				<view class="title">用户账号</view>
				<input placeholder="账号" name="input" v-model="dataForm.usernumber"></input>
			</view>
			<view class="cu-form-group titleWidth">
				<view class="title">用户密码</view>
				<input placeholder="密码" type="password" name="input" v-model="dataForm.password"></input>
			</view>
			<view class="rememberPsw_wrap">
				<checkbox value="rememberPsw" checked="true" />记住密码
			</view>
		</form>
		<view class="padding flex flex-direction">
			<button @click="loginHandle" class="cu-btn bg-blue margin-tb-sm lg">登陆</button>
			<button @click="wxLoginHandle" class="cu-btn bg-blue margin-tb-sm lg">微信授权快捷登陆</button>
			<!-- <button open-type="getUserInfo" class="cu-btn bg-blue margin-tb-sm lg" @getuserinfo="getUserInfo">getUserInfo</button>
			<button open-type="getPhoneNumber" class="cu-btn bg-blue margin-tb-sm lg" @getphonenumber="getPhoneNumber">getPhoneNumber</button> -->
		</view>
	</view>
</template>

<script>
	import WxValidate from '@/js_sdk/WxValidate.min.js'
	let that;
	export default {
		data() {
			return {
				rememberPsw: true,
				dataForm: {
					url: '',
					usernumber: '',
					password: '',
				},
				rules: {
					url: {
						required: true,
					},
					usernumber: {
						required: true,
					},
					password: {
						required: true,
					},
				},
				messages: {
					url: {
						required: '请填写服务地址'
					},
					usernumber: {
						required: '请填写账号'
					},
					password: {
						required: '请填写密码'
					},
				}
			}
		},
		methods: {
			// 扫码
			scanHandle() {
				// 允许从相机和相册扫码
				uni.scanCode({
					scanType: 'qrCode',
					success(res) {
						if (res.errMsg == "scanCode:ok") {
							that.dataForm.url = res.result;
						}
					}
				})
			},
			// 初始化验证函数
			initValidate() {
				this.WxValidate = new WxValidate(this.rules, this.messages);
			},
			getUserInfo(e) {
				console.log(e)
				uni.setStorageSync('userInfo', e.detail.userInfo)
			},
			getPhoneNumber(e) {
				console.log(e.detail.errMsg)
				console.log(e.detail.iv)
				console.log(e.detail.encryptedData)
			},
			loginHandle() {
				wx.navigateToMiniProgram({
				  appId: 'wx63930b9d12a42a99',
				  path: 'page/home/index?id=123',
				  extraData: {
				    foo: 'bar'
				  },
				  envVersion: 'develop',
				  success(res) {
				    // 打开成功
				  }
				})
				const valid = this.WxValidate.checkForm(this.dataForm);
				console.log(valid)
				if (valid) {

				} else {
					uni.showToast({
						title: this.WxValidate.errorList[0].msg,
						duration: 2000,
						icon: 'none'
					});
				}
			},
			wxLoginHandle() {
				this.get_userInfo()
				uni.login({
					success(res) {
						if (res.code) {
							console.log(that.request.jscode2session)
							
							// that.request.jscode2session({
							// 	appid: 'wx63930b9d12a42a99',
							// 	js_code: res.code,
							// 	grant_type: 'authorization_code',
							// 	secret: 'e53301a63ddd30a743af48b74f315270'
							// }).then(res => {
								
							// })
							
						} else {
							console.log('登录失败！' + res.errMsg)
						}
					}
				})
			},
			// 获取用户信息
			get_userInfo() {
				wx.getUserInfo({
					success: (res) => {
						console.log(res)
					},
					fail: (res) => {
						console.log(res)
					}
				})
			},
		},
		onShow() {
			this.initValidate()
		},
		created() {
			that = this
		}
	}
</script>

<style lang="scss">
	.iconsaomiao {}

	.rememberPsw_wrap {
		padding-left: 30rpx;
		font-size: 32rpx;

		checkbox {
			margin-right: 10rpx;
		}

	}
</style>
