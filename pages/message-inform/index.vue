<template>
	<view>
		<uni-card
		v-for="(item, i) in messages" :key="i"
		:title="item.type"
		:extra="item.date"
		>
			<view class="content">
				{{item.content}}
			</view>
		</uni-card>
	</view>
</template>

<script>
import uniCard from '@/components/uni-card/uni-card.vue';
export default {
	name: 'message-inform',
	components: {
		uniCard
	},
	data () {
		return {
			messages: []
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
				this.messages.push({
					type: '[库存预警]',
					date: '2020-02-05 20:12',
					content: 'xxxx库存不足，请及时处理'
				})
			}
		}
	}
}
</script>

<style>
</style>
