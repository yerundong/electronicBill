<template>
	<view class="bs_container">
		<form class="form_top">
			<view class="cu-form-group">
				<view class="title">
					<text class="iconfont iconzaixian"></text>
				</view>
				<input placeholder="请输入服务地址" name="input" v-model="dataForm.url"></input>
				<text class="iconfont iconsaoma" @click="scanHandle"></text>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="iconfont iconmima"></text>
				</view>
				<input placeholder="请输入账号" name="input" v-model="dataForm.usernumber"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="iconfont iconyonghu"></text>
				</view>
				<input placeholder="请输入密码" type="password" name="input" v-model="dataForm.password"></input>
			</view>
		</form>
		<view class="padding flex flex-direction bottom_btn">
			<button v-if="type==1" @click="bindHandle" class="cu-btn round bg-blue-1 lg">
				绑定
			</button>
			<button v-else @click="loginHandle" class="cu-btn round bg-blue-1 lg">
				登陆
			</button>
		</view>
	</view>
</template>

<script>
	import WxValidate from '@/js_sdk/WxValidate.min.js'
	let that;
	export default {
		data() {
			return {
				type: '',
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
			// 绑定
			bindHandle(){
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
			// 登陆
			loginHandle() {
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
		onLoad(option) {
			let {type} = option;
			this.type = type;
			
			if(type==1){
				uni.setNavigationBarTitle({
					title: "绑定账号"
				})
			}else{
				uni.setNavigationBarTitle({
					title: "登陆"
				})
			}
		},
		created() {
			that = this
		}
	}
</script>

<style lang="scss">
	.form_top{
		padding-top: 40rpx;
		display: block
	}
	.cu-form-group{
		margin: 0 60rpx;
		font-size: 28rpx;
		color: #737373;
		.iconfont{
			color: #666666;
			font-size: 42rpx;
		}
		.iconsaoma {
			color: #666666;
			font-size: 32rpx;
		}
	}
	.flex-direction{
		padding: 0 85rpx;
	}

	.bottom_btn{
		margin-top: 170rpx;
	}
</style>
