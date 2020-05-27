<template>
	<view>
		<uni-list>
		    <uni-list-item title="用户账号" :rightText="person.userAccount" :show-arrow="false"></uni-list-item>
			<uni-list-item title="用户名" :rightText="person.userName":show-arrow="false"></uni-list-item>
			<uni-list-item title="所属机构" :rightText="person.agenName":show-arrow="false"></uni-list-item>
			<uni-list-item title="所属岗位" :rightText="person.officeName":show-arrow="false"></uni-list-item>
			<uni-list-item title="手机号" :rightText="person.phone":show-arrow="false"></uni-list-item>
			<uni-list-item title="email" :rightText="person.email":show-arrow="false"></uni-list-item>
			<uni-list-item title="微信userid" :rightText="person.wxUserId":show-arrow="false"></uni-list-item>
		</uni-list>
		<button type="primary">退出登录</button>
	</view>
</template>

<script>
import uniList from "@/components/uni-list/uni-list.vue"
import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
export default {
	name: 'personal-center',
	components: {
		uniList,
		uniListItem
	},
	data () {
		return {
			person: {
				userAccount: null,
				userName: null,
				agenName: null,
				officeName: null,
				phone: null,
				email: null,
				wxUserId: null
			}
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
			this.person = {
				userAccount:'001',
				userName: '张三',
				agenName: '人民医院',
				officeName: '收费员',
				phone: '1254654321',
				email: '41684351@qq.com',
				wxUserId: '00000001'
			}
		}
	}
}
</script>

<style>
</style>
