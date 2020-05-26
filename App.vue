<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch');
		},
		onShow: function() {
			// console.log('App Show');
		},
		onHide: function() {
			// console.log('App Hide');
		},
		globalData: {
			test: 'test'
		}
	};
</script>

<style lang="scss">
	/* 引入全局iconfont */
	@import url('@/static/iconfont/index.css');
	/* 引入colorUI样式 */
	@import url('@/static/colorui/main.css');
	@import url('@/static/colorui/icon.css');
	/* 全局样式 */
	@import '@/static/style/index.scss'
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */
</style>
