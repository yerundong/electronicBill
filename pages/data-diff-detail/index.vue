<template>
	<view>
		<uni-card
		v-for="(item, i) in details" :key="i"
		:title="item.no"
		thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
		:extra="item.date"
		>
			<view class="bill-card">
				<view class="bill-content">
					<view class="bill-issueSpot">开票点：{{item.issueSpot}}</view>
					<view class="bill-issuePerson">交款人：{{item.issuePerson}}</view>
				</view>
				<view class="bill-amount">￥{{item.amount}}</view>
			</view>
		</uni-card>
	</view>
</template>

<script>
import uniCard from '@/components/uni-card/uni-card.vue';
export default {
	name: 'data-diff-detail',
	components: {
		uniCard
	},
	data () {
		return {
			details: []
		}
	},
	mounted () {
		this.onInit()
	},
	methods: {
		/**
		 * 初始化 参数
		 */
		onInit () {
			for (let i = 0; i< 10; i++) {
				this.details.push({
					no: '365895164658741',
					date: '2020-02-05 20:12',
					issueSpot: '1001',
					issuePerson: '李四',
					amount: 234121
				})
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.bill-card {
	display: flex;
	flex-direction: row;
	
	.bill-content {
		flex: 2;
		margin: 0 10rpx;
	}
	.bill-amount {
		flex: 1;
		height: 100%;
		margin: auto;
		font-size: 30rpx;
		line-height: 100%;
		text-align: center;
	}
}
</style>
