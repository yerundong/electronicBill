<template>
	<uni-card 
	:title="bill.name"
	thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
	>
		<view class="bill-card">
			<view class="bill-content">
				<view class="bill-amount">金额汇总：{{bill.amount}}</view>
				<view class="bill-issueMonth">开票月份：{{bill.issueMonth}}月</view>
			</view>
			<view class="bill-issueNum">{{bill.issueNum}}份</view>
		</view>
	</uni-card>
</template>

<script>
import uniCard from '@/components/uni-card/uni-card.vue';
export default {
	name: 'bill-template',
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
		margin: 0 5px;
	}
	.bill-issueNum {
		flex: 1;
		height: 38px;
		margin: atuo;
		font-size: 15px;
		line-height: 38px;
		text-align: center;
	}
}
</style>
