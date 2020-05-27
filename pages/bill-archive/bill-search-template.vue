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
export default {
	name: 'bill-template',
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
	.bill-amount {
		flex: 1;
		height: 57px;
		margin: atuo;
		font-size: 15px;
		line-height: 57px;
		text-align: center;
	}
}
</style>
