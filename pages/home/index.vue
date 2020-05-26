<template>
	<view class="bs_container">
		<!-- <uni-nav-bar status-bar fixed :shadow="false" color="" :border="false" title="电子票据移动应用"></uni-nav-bar> -->
		<view class="con">
			asdasdasdasd
			asdasdasdasdasd
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: 0
			}
		},
		methods: {
			add() {
				this.msg++
			},
			navigateTo(name) {
				uni.navigateTo({
					url: `/pages/${name}/index`
				})
			}
		},
		created() {
			// this.request.login({a: 1, b:123})
			
			this.action.judgeLogin()
		}
	}
</script>

<style lang="scss">
	.con{
		height: 4000rpx;
		background-color: red;
	}
</style>
