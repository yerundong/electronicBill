<template>
	<view class="bs_container">
		<image class="limg" src="../../static/image/login.png" mode=""></image>
		<view class="padding flex flex-direction">
			<button @click="wxLoginHandle" class="cu-btn round bg-blue-1 lg">
				<text class="iconfont iconweixin"></text> 
				微信授权快捷登陆
			</button>
			<button @click="loginHandle" class="blank cu-btn">
				账号密码登陆
			</button>
		</view>
	</view>
</template>

<script>
let that;
export default {
	data() {
		return {
			btn_disabled: false,
		};
	},
	methods: {
		loginHandle(){
			uni.navigateTo({
				url:`./login?type=2`
			})	
		},
		wxLoginHandle() {
			// this.get_userInfo();
			this.btn_disabled = true;
			uni.navigateTo({
				url:`./login?type=1`
			})
			// uni.login({
			// 	success(res) {
			// 		if (res.code) {
			// 			console.log(res.code);
			// 		} else {
			// 			console.log('登录失败！' + res.errMsg);
			// 		}
			// 	}
			// });
		}
	},
	onShow() {},
	onLoad() {},
	created() {
		that = this;
	}
};
</script>

<style lang="scss">
	.bs_container{
		.limg{
			display: block;
			width: 273rpx;
			height: 294rpx;
			margin: 170rpx auto 270rpx;
		}
		.iconweixin{
			font-size: 50rpx;
			margin-right: 7rpx;
		}
		.flex-direction{
			padding: 0 75rpx;
		}
		.cu-btn.blank{
			color: #526690;
			margin-top: 60rpx;
			font-size: 30rpx;
		}
	}
</style>
