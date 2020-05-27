<template>
	<uni-card
	:title="bill.name"
	thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
	:extra="bill.no"
	>
		<view class="bill-card">
			<view class="bill-content">
				<view class="bill-issueAgen">开票单位：{{bill.issueAgen}}</view>
				<view class="bill-issueDate">开票日期：{{bill.issueDate}}</view>
				<view class="bill-issuePerson">交易人：{{bill.issuePerson}}</view>
			</view>
			<view class="bill-amount">￥{{bill.amount}}</view>
		</view>
	</uni-card>
</template>

<script>
import uniCard from '@/components/uni-card/uni-card.vue';
export default {
	name: 'bill-search-template',
	components: {
		uniCard
	},
	props: {
		bill: Object
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
