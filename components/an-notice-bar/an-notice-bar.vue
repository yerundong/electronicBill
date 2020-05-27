<template>
	<view>
		<view class="an-notice-box" :style="'background-color: ' + bgColor + ';'">
			<view class="an-notice-icon"><uni-icons :color="color" type="sound" size="16" /></view>
			<scroll-view class="an-notice-content">
				<swiper @change = "change" class="swiper" :autoplay="true" :interval="switchTime * 1000" :duration="1000" :circular="true" :vertical="true">
					<swiper-item @click="moreClick" @touchmove.stop v-for="(item, index) in msgList" :key="index" :item-id = "index" class="an-notice-content-item">
						<view class="swiper-item">
							<text class="an-notice-content-item-text" :style="'color: ' + color + ';'">
								<text v-if="showSerial">{{ index + 1 + '. ' }}</text>
								{{ item.text }}
							</text>
						</view>
					</swiper-item>
				</swiper>
			</scroll-view>
			<view class="an-notice-more" @click="moreClick"><uni-icons type="arrowright" :color="moreColor" size="16" /></view>
		</view>
	</view>
</template>

<script>
import uniIcons from '@/components/uni-icons/uni-icons.vue';
export default {
	components: {
		uniIcons
	},
	props: {
		msgList: {
			type: Array,
			default: [{text: '暂无未读消息'}]
		},
		moreColor: {
			type: String,
			default: '#de8c17'
		},
		color: {
			type: String,
			default: '#de8c17'
		},
		bgColor: {
			type: String,
			default: '#fffbe8'
		},
		switchTime: {
			type: Number,
			default: 3
		},
		showSerial: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			list: [],
			current: 0,
		};
	},
	mounted() {
		// this.list = this.msgList;
		// debugger
		// this.show = true;
	},
	watch: {
		msgList: function() {
			// this.show = true;
			// if (this.text != this.copyText) {
			// 	this.copyText = this.text;
			// 	this.list = this.text.split('|');
			// 	if (this.list.length > 1) {
			// 		this.showSerial = true;
			// 	}
			// }
		}
	},
	methods: {
		change(e){
			this.current = e.detail.current;
		},
		moreClick() {
			// console.log(this.msgList[this.current])
			this.$emit('more', this.msgList[this.current]);
		}
	}
};
</script>

<style lang="scss">
.swiper {
	height: 46upx !important;
}
.an-notice-box {
	width: 100%;
	height: 46upx;
	padding: 0 10upx;
	overflow: hidden;
	// margin: 20upx 0;
	display: flex;
	justify-content: flex-start;
}
.an-notice-icon {
	width: 84upx;
	height: 46upx;
	line-height: 46upx;
	text-align: center;
	position: relative;
}
.an-notice-content {
	// width: calc(100% - 40upx);
	position: relative;
	font-size: 24rpx;
}
.an-notice-content-item {
	width: 100%;
	height: 46upx;
	text-align: left;
	line-height: 46upx;
}
.an-notice-content-item-text {
	display: block;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
.an-notice-more {
	// width: 60rpx;
	padding-right: 15rpx;
	height: 46upx;
	font-size: 12px;
	line-height: 46upx;
	text-align: right;
	color: #999;
}

@keyframes anotice {
	0% {
		transform: translateY(100%);
	}
	30% {
		transform: translateY(0);
	}
	70% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(-100%);
	}
}
</style>
