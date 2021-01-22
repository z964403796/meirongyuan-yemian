<template>
	<view class="page">

		<tale-calendar @calendarTap="calendarTap"></tale-calendar>
		<view class="fenge_line" v-if="timeShow"></view>
		<view v-if="timeShow">
			<view class="title">選擇時間</view>
			<view class="time_content">
				<view class="item_con" v-for="(item,index) in list" :key="index">
					<view @tap="item.check = !item.check">
						<image v-if="item.check" src="../../static/images/choose@2x.png" class="xuan_img"></image>
						<image v-else src="../../static/images/null@2x.png" class="xuan_img"></image>
					</view>
					<view>{{item.time}}</view>

				</view>

			</view>
		</view>
		<view class="cell_btn">
			<view class="btn " :class="!timeShow?'active':''" @tap="gopage('/pages/order/address')" :style="{background:!timeShow?' #DCDCDB':' #333333'}">提交</view>
		</view>
	</view>
</template>

<script>
	import taleCalendar from "@/components/tale-calendar/tale-calendar.vue";
	export default {
		data() {
			return {
				timeShow: false,
				list: [{
					time: "13:15-15:00",
					check: false
				}, {
					time: "13:15-15:00",
					check: false
				}, {
					time: "13:15-15:00",
					check: false
				}, {
					time: "13:15-15:00",
					check: false
				}, {
					time: "13:15-15:00",
					check: false
				}, {
					time: "13:15-15:00",
					check: false
				}, {
					time: "13:15-15:00",
					check: false
				}, ]
			}
		},
		components: {
			taleCalendar,
			// dayTable,lxCalendar
		},
		methods: {
			calendarTap(year, month, day) {
				console.log(year, month, day, "——+——+")
				this.timeShow = true

			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		margin-top: 20upx;
	}

	.btn {
		width: 560upx;
		height: 96upx;
		border-radius: 48upx;
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 42upx;

	}

	.active {
		margin-top: 200upx
	}

	.cell_btn {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 40upx;
	}

	.fenge_line {
		height: 20upx;
		background: #F8F8F8;
	}

	.xuan_img {
		width: 48upx;
		height: 48upx;
		margin-right: 40upx;
	}

	.time_content {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		padding: 20upx 0 0 42upx;
		// justify-content: space-between;
	}

	.item_con {
		display: flex;
		align-items: center;
		// justify-content: center;
		width: 50%;
		padding: 20upx 0;

		font-size: 32upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 44upx;


	}

	.title {

		font-size: 36upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 50upx;
		padding: 24upx 42upx;
		border-bottom: 1upx solid #DDDDDD;
	}
</style>
