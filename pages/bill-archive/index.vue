<template>
	<view class="content">
		<view class="search-bar" @click="onSearch">
			<uni-search-bar placeholder="输入票号/交款人查询" @confirm="featchDataBySearcher" @v-model="search.keyword" @cancel="onCancel"></uni-search-bar>
		</view>
		<view class="calendar-bar" v-if="!isSearching">
			<view>
				<picker mode="date" fields="year" start="1910" end="2120" @change="yearSelectChange">
					<view class="year-select">{{search.year}}年ᐁ</view>
				</picker>
			</view>
			<view class="calendar-line">
				<view class="calendar-item" v-for="(m,i) in month" :key="i" v-if="i<6">
					<uni-tag size="small" :type="search.month === m.value ? 'primary' : 'default'" :text="m.label" @click="monthTagClick(m.value)" :disabled="m.disabled"></uni-tag>
				</view>
			</view>
			<view class="calendar-line">
				<view class="calendar-item" v-for="(m,i) in month" :key="i" v-if="i>=6">
					<uni-tag size="small" :type="search.month === m.value ? 'primary' : 'default'" :text="m.label" @click="monthTagClick(m.value)" :disabled="m.disabled"></uni-tag>
				</view>
			</view>
		</view>
		
		<view class="bill-list" v-if="!isSearching">
			<bill-template v-for="(bill,i) in bills" :key="i" :bill="bill"></bill-template>
		</view>
		<view class="bill-list" v-if="isSearching">
			<bill-search-template v-for="(bill,i) in sbills" :key="i" :bill="bill"></bill-search-template>
		</view>
	</view>
</template>

<script>
	import billTemplate from './bill-template';
	import billSearchTemplate from './bill-search-template';
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue';
	import uniTag from "@/components/uni-tag/uni-tag.vue";
	export default {
		name: 'bill-archive',
		components: {
			billTemplate,
			billSearchTemplate,
			uniSearchBar,
			uniTag
		},
		data () {
			return {
				isSearching: false, // 是否是归档检索
				month: [], // 月份标签
				search: { // 查询条件
					keyword: null, // 关键字
					year: null, // 年份
					month: null // 月份
				},
				bills: [
					{
						name: '医疗门诊收费票据',
						amount: 1231,
						issueMonth: 4,
						issueNum: 10000
					},{
						name: '医疗门诊收费票据',
						amount: 1231,
						issueMonth: 4,
						issueNum: 10000
					},{
						name: '医疗门诊收费票据',
						amount: 1231,
						issueMonth: 4,
						issueNum: 10000
					},{
						name: '医疗门诊收费票据',
						amount: 1231,
						issueMonth: 4,
						issueNum: 10000
					},{
						name: '医疗门诊收费票据',
						amount: 1231,
						issueMonth: 4,
						issueNum: 10000
					}
				],
				sbills: [
					{
						name: '医疗门诊收费票据',
						no : 124123214,
						issueAgen: '北京大学第一医院',
						issueDate: '202005201',
						issuePerson: '张三',
						amount: 12412
					},{
						name: '医疗门诊收费票据',
						no : 124123214,
						issueAgen: '北京大学第一医院',
						issueDate: '202005201',
						issuePerson: '张三',
						amount: 12412
					},{
						name: '医疗门诊收费票据',
						no : 124123214,
						issueAgen: '北京大学第一医院',
						issueDate: '202005201',
						issuePerson: '张三',
						amount: 12412
					},{
						name: '医疗门诊收费票据',
						no : 124123214,
						issueAgen: '北京大学第一医院',
						issueDate: '202005201',
						issuePerson: '张三',
						amount: 12412
					},{
						name: '医疗门诊收费票据',
						no : 124123214,
						issueAgen: '北京大学第一医院',
						issueDate: '202005201',
						issuePerson: '张三',
						amount: 12412
					}
				]
			}
		},
		mounted () {
			this.onInit()
			this.setMonthTagDisabled(this.search.year)
			this.featchDataByDate()
		},
		methods: {
			/**
			 * 初始化 参数
			 */
			onInit () {
				this.search.year = this.$moment().year()
				this.search.month = this.$moment().month()
			},
			/**
			 * 根据归档日期 获取票据列表
			 */
			featchDataByDate () {
				console.log('featchDataByDate:', this.search)
			},
			/**
			 * 根据关键字查询 获取票据列表
			 */
			featchDataBySearcher ({value}) {
				console.log('featchDataBySearcher:', value)
			},
			/**
			 * 禁用当前月份之后的月份标签
			 */
			setMonthTagDisabled (year) {
				this.month = []
				let currentMonth = this.$moment().format('YYYY-MM')
				for (let i = 1; i <= 12; i++) {
					if (this.$moment(year+'-'+i).isBefore(currentMonth)) {
						this.month.push({
							label: i + "月",
							value: i,
							disabled: false
						})
					} else {
						this.month.push({
							label: i + "月",
							value: i,
							disabled: true
						})
					}
				}
			},
			/**
			 * 年份下拉选择 change事件
			 */
			yearSelectChange ({detail: {value}}) {
				this.search.year = value
				this.setMonthTagDisabled(value)
				this.search.month = this.$moment().month()
				this.featchDataByDate()
			},
			/**
			 * 月份标签 click事件
			 */
			monthTagClick (value) {
				this.search.month = value
				this.featchDataByDate()
			},
			/**
			 * 跳转至 归档检索界面
			 */
			onSearch () {
				this.isSearching = true
				uni.setNavigationBarTitle({
					title: "归档检索"
				});
			},
			/**
			 * 取消查询 返回票据归档界面
			 */
			onCancel () {
				this.isSearching = false
				uni.setNavigationBarTitle({
					title: "票据归档"
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.content {
	height: 100%;
	width: 100%;
}
.calendar-bar {
	display: flex;
	flex-direction: column;
	background-color: white;
	.year-select {
		text-align: center;
	}
	.calendar-line {
		display: flex;
		flex-direction: row;
		margin: 3px 0px;
		.calendar-item {
			flex: 1;
			.item-button {
				&.active {
					background-color: rgb(15, 174, 255);
				}
				background-color: white;
				font-size: 5px;
				border-radius: 30px;
				border: none;
				width: 90%;
				height: 30px;
			}
			uni-button:after {
				border: none;
			}
		}
	}
}
.bill-list {
	margin-top: 5px;
}
</style>
