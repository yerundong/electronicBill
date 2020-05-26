<template>
	<view class="bs_container">
		<view class="top_wrap">
			<view class="blue_rad_bg"></view>
			<!-- 通告栏 -->
			<an-notice-bar @more="noticeMore" bgColor="#FFF29C" color="#FF6600" moreColor="#FF6600" switchTime="5" :msgList="noticeMsg"></an-notice-bar>
		</view>
	</view>
</template>

<script>
import AnNoticeBar from '@/components/an-notice-bar/an-notice-bar.vue';

export default {
	components: { AnNoticeBar },
	data() {
		return {
			noticeMsg: [
				{
					text: '这是通告栏这是NoticeBa告栏这是通告栏这是NoticeBa告栏这是通告栏这是NoticeBa告栏',
					id: '1'
				},
				{
					text: '这是通告栏这栏这是NoticeBa告栏',
					id: '2'
				},
				{
					text: '阿萨德阿萨德阿萨德阿萨德阿萨德',
					id: '3'
				}
			]
		};
	},
	methods: {
		noticeMore(item) {
			console.log(item);
		}
	},
	created() {
		// this.request.login({a: 1, b:123})
		// this.action.judgeLogin()
	}
};
</script>

<style lang="scss">
.top_wrap {
	height: 430rpx;
	background-color: red;
	position: relative;
	overflow: hidden;
	.blue_rad_bg {
		height: 400rpx;
		background: $uni-blue;
		border-radius: 0 0 50% 50%;
		width: 140%;
		position: absolute;
		left: -20%;
		top: 0;
		z-index: 0;
	}
	an-notice-bar {
		z-index: 1;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
}
</style>
