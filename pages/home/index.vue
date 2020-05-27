<template>
	<view class="bs_container">
		<view class="top_wrap">
			<view class="blue_rad_bg"></view>
			<!-- 通告栏 -->
			<an-notice-bar @more="noticeMore" bgColor="#FFF29C" color="#FF6600" moreColor="#FF6600" switchTime="5" :msgList="noticeMsg"></an-notice-bar>
			<view class="user_wrap">
				<view class="user_head"><image src="../../static/icon/shouye_03.png" mode=""></image></view>
				<view class="usr_text_wrap">
					<view class="name ellipsis">娜娜</view>
					<view class="part ellipsis">
						福建省立医院 财务中心
						<uni-icons type="arrowright" :color="moreColor" size="16" />
					</view>
				</view>
			</view>
			<view class="sta_wrap">
				<view class="sta_part">
					<view class="sta_part_cont">
						<view class="title">
							开票统计
						</view>
						<view class="money">
                            <text class="value">23.67</text><text class="unit">万元</text> 
						</view>
						<view class="count">
						    1392343489笔
						</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="sta_part">
					<view class="sta_part_cont">
						<view class="title">
							开票统计
						</view>
						<view class="money">
					        <text class="value">23333.67</text><text class="unit">万元</text> 
						</view>
						<view class="count">
						    13989笔
						</view>
					</view>
				</view>
			</view>
			<view class="threeMenu_wrap">
				<view class="menu_part">
					<image src="../../static/icon/icon2.png" mode=""></image>
					<view class="name">票据查验</view>
				</view>
				<view class="menu_part">
					<image src="../../static/icon/icon1.png" mode=""></image>
					<view class="name">票据归档</view>
				</view>
				<view class="menu_part">
					<image src="../../static/icon/icon3.png" mode=""></image>
					<view class="name">监控分析</view>
				</view>
			</view>
		</view>
		<!-- 票据库存 -->
		<view class="bill_stock">
			<view class="">
				<view class="stock_title">
					票据库存
				</view>
				<view class="stock_item" v-for="(item, index) in stockList" :key="index">
					<image class="stock_icon" :src="item.icon" mode=""></image>
					<view class="stock_con">
						<view class="con_top">
							{{item.name}}
							<text>{{item.count}}</text>
						</view>
						<view class="con_bottom">
							{{item.num}}
							<text v-if="item.noEn">库存不足</text>
						</view>
					</view>
				</view>
			</view>
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
			],
			stockList:[{
				name: '医疗门诊机打票据',
				icon: '../../static/icon/shouye_21.png',
				count: 34,
				noEn: true,
				num: 234829
			},{
				name: '医疗门诊电子票据',
				icon: '../../static/icon/shouye_24.png',
				count: 3124,
				noEn: false,
				num: 234829
			},{
				name: '医疗住院机打票据',
				icon: '../../static/icon/shouye_26.png',
				count: 23434,
				noEn: false,
				num: 234829
			}]
		};
	},
	methods: {
		noticeMore(item) {
			console.log(item);
			uni.setBackgroundColor({
				backgroundColor: '#ffffff'
			})
		}
	},
	onPullDownRefresh(){
		uni.setBackgroundColor({
			backgroundColor: '#fff'
		})
		 uni.stopPullDownRefresh();
	},
	onReachBottom(){
		
	},
	created() {
		// this.action.formatNumberUnit({
		// 	value: 123123,
		// 	suffix: '元'
		// })
		// this.request.login({a: 1, b:123})
		// this.action.judgeLogin()
	}
};
</script>

<style lang="scss">
.top_wrap {
	position: relative;
	overflow: hidden;
	border-bottom: 18rpx solid rgba(235,239,243,1);
	.blue_rad_bg {
		height: 343rpx;
		background: $uni-blue;
		border-radius: 0 0 50% 50%;
		width: 140%;
		position: absolute;
		left: -20%;
		top: 0;
	}
	an-notice-bar {
		z-index: 10;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
	.user_wrap {
		padding: 74rpx 30rpx 0;
		position: relative;
		z-index: 2;
		box-sizing: border-box;
		display: flex;
		.user_head {
			width: 78rpx;
			height: 78rpx;
			border-radius: 50%;
			image {
				width: 78rpx;
				height: 78rpx;
				border-radius: 50%;
				background: #eee;
			}
		}
		.usr_text_wrap {
			padding-left: 30rpx;
			box-sizing: border-box;
			color: #fff;
			overflow: hidden;
			width: 100%;
			.name {
				font-size: 28rpx;
			}
			.part {
				padding-right: 30rpx;
				width: 100%;
				font-size: 24rpx;
				position: relative;
				uni-icons {
					width: 28rpx;
					position: absolute;
					top: 0;
					right: 0;
				}
			}
		}
	}
	.sta_wrap {
		width: 668rpx;
		height: 205rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0rpx 0rpx 16rpx 0rpx rgba(84, 115, 222, 0.45);
		border-radius: 10rpx;
		position: relative;
		margin: 18rpx auto 0;
		display: flex;
		position: relative;
		.sta_part {
			flex: 1;
			height: 100%;
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			.sta_part_cont{
				.title{
					font-size: 20rpx;
				}
				.money{
					margin: 8rpx 0;
					.value{
						color: $uni-blue;
						font-size: 38rpx;
						margin-right: 5rpx;
					}
					.uni{
						font-size: 18rpx;
					}
				}
				.count{
					font-size: 20rpx;
				}
			}
		}
		.line {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
			width: 1rpx;
			height: 113rpx;
			background: rgba(0, 0, 0, 1);
			opacity: 0.2;
			float: right;
		}
	}
	.threeMenu_wrap{
		height: 186rpx;
		padding: 0 40rpx;
		display: flex;
		.menu_part{
			flex: 1;
			text-align: center;
			padding-top: 49rpx;
			image{
				width: 64rpx;
				height: 64rpx;
			}
			.name{
				font-size: 22rpx;
				padding-top: 10rpx;
			}
		}
	}
}
.bill_stock{
	padding: 0 35rpx;
	.stock_title{
		padding-top: 26rpx;
		font-size:28rpx;
		line-height:26rpx;
	}
	.stock_item{
		height: 135rpx;
		border-bottom: 1rpx solid rgba(0,0,0,.15);
		display: flex;
		align-items: center;
		.stock_icon{
			width: 54rpx;
			height: 54rpx;
			margin-right: 26rpx;
		}
		.stock_con{
			width: 100%;
			.con_top{
				height:26rpx;
				font-size:28rpx;
				line-height:30rpx;
				margin-bottom: 22rpx;
				text{
					float: right;
					font-size:30rpx;
					font-weight:bold;
				}
			}
			.con_bottom{
				height:19rpx;
				font-size:24rpx;
				color:#8C8C8C;
				text{
					display: block;
					width:80rpx;
					height:24rpx;
					background:rgba(254,240,234,1);
					border:1rpx solid rgba(233, 89, 36, 1);
					text-align: center;
					line-height: 24rpx;
					font-size:14rpx;
					color: #E95924;
					float: right;
				}
			}
		}
	}
}
</style>
