<template>
	<view class="page">
		<view class="order_info">
			<view class="head">
				<view class="head_el one">
					1
				</view>
				<view class="line">
				</view>
				<view class="head_el active">
					2
				</view>
				<view class="line">
				</view>
				<view class="head_el three">
					3
				</view>
			</view>
			<view class="head_dis">
				<view>醫美品牌</view>
				<view class="head_check">療程及地點</view>
				<view>日期及時間</view>
			</view>
			<view class="item_cell">
				<view class="item_cell_title">療程地點</view>
				<view class="item_cell_text">尖沙咀店</view>
			</view>
			<view class="item_cell">
				<view class="item_cell_title">預約日期</view>
				<view class="item_cell_text">2020-11-27（週五）</view>
			</view>
			<view class="item_cell">
				<view class="item_cell_title">預約時間</view>
				<view class="item_cell_text">12：00-13：00</view>
			</view>
		</view>
		<view class="fenge_line"></view>
		<tale-calendar @calendarTap="calendarTap" :isShowClick="true" :isTime="isTime"></tale-calendar>
		<view class="fenge_line"></view>
		<view>
			<view class="title">選擇時間</view>
			<view class="time_content">
				<view class="item_con" v-for="(item,index) in list" :key="index">
					<view @tap="item.check = !item.check">
						<image v-if="item.check" src="/static/images/choose@2x.png" class="xuan_img"></image>
						<image v-else src="/static/images/null@2x.png" class="xuan_img"></image>
					</view>
					<view>{{item.time}}</view>

				</view>

			</view>
		</view>
		<view class="cell_btn">
			<view class="cancel" @tap="cancel">取消預約</view>
			<view class="btn" @tap="save">確認更改</view>
		</view>

		<!-- 	 <lxCalendar @change="change"></lxCalendar>
		<day-table scrollHeight="height:calc(100vh)" v-on:bookMeeting='bookMeeting($event)'> </day-table> -->
	</view>
</template>

<script>
	import taleCalendar from "@/components/tale-calendar/tale-calendar.vue";
	// import dayTable from "@/components/luoxiao-dayTable/dayTable.vue";
	// import lxCalendar from '../../components/lx-calendar/lx-calendar.vue'
	export default {
		data() {
			return {
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
				}, ],
				isTime: "2020-12-29"
			}
		},
		components: {
			taleCalendar,
			// dayTable,lxCalendar
		},
		methods: {
			calendarTap(year, month, day) {
				console.log(year, month, day, "——+——+")

			},
			cancel(){
				uni.navigateBack({
					delta:1
				})
			},
			save(){
				this.gopage('/pages/order/already/detail_order')
			},
			gopage(url){
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		margin-top: 20upx;
	}


	.active {
		margin-top: 200upx
	}

	.cell_btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 40upx 32upx 40upx 42upx;
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

	.item_cell {
		display: flex;
		margin-top: 20upx;
	}

	.item_cell_title {
		width: 126upx;
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 34upx;
	}

	.item_cell_text {

		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 34upx;

	}

	.line {
		width: 184upx;
		height: 1upx;
		background: #C5C5C5;

	}

	.head {
		display: flex;
		align-items: center;
		// justify-content: center;
		margin-top: 20upx;
	}

	.head_el {
		width: 54upx;
		height: 54upx;
		background: #C5C5C5;
		border-radius: 42upx;

		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 40upx;
		display: flex;
		align-items: center;
		justify-content: center;


	}

	.one {
		margin-right: 10upx;
		margin-left: 30upx;
	}

	.three {
		margin-left: 26upx;
	}

	.active {
		background: linear-gradient(142deg, #C1AE75 0%, #333333 100%);
		margin: 0 22upx 0 26upx;

	}

	.head_dis {
		display: flex;
		align-items: center;
		justify-content: space-between;

		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 40upx;
		margin-top: 10upx;
		padding-bottom: 32upx;
		border-bottom: 1upx solid #DDDDDD;
		padding-right: 30upx;

	}

	.head_check {

		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 40upx;

	}

	.order_info {

		padding: 0upx 0 38upx 34upx;
	}

	.cancel {
		width: 328upx;
		height: 96upx;
		border-radius: 48upx;
		border: 2upx solid #979797;

		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 96upx;
		text-align: center;
		box-sizing:content-box
	}

	.btn {
		width: 328upx;
		height: 96upx;
		background: #333333;
		border-radius: 48upx;

		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 96upx;
		text-align: center;
	}
</style>
