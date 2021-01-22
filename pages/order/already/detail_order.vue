<template>
	<view class="page">
		<view class="card">
			<view class="title">預約詳情</view>
			<view class="item_cell">
				<view class="item_cell_title">醫美品牌</view>
				<view class="item_cell_text">HAIRLESS</view>
			</view>
			<view class="item_cell">
				<view class="item_cell_title">預約療程</view>
				<view class="item_cell_text">療程名稱是一個很長的名稱大概有30字左右的字段</view>
			</view>
		</view>
		<view class="content">
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
		<view class="cell_btn">
			<view class="btn "  @tap="gopage('/pages/order/already/order_info')" >確認</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
gopage(url){
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.page {

		background: #F8F8F8;
		min-height: 100vh;
	}

	.card {
		background: #FFFFFF;
		padding: 12upx 0;
	}
	.content{
		background: #FFFFFF;
		padding: 12upx 0;
		margin-top: 20upx;
	}
	.item_cell {
		display: flex;
		padding: 20upx 28upx;
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
		width: 500upx;

	}
	.title{
		padding: 30upx 0;
		font-size: 36upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 50upx;
		margin-left: 28upx;
		border-bottom: 1upx solid #DDDDDD;

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
		margin-top: 420upx;
		background: #333333;
	
	}
	
	
	.cell_btn {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 40upx;
	}
</style>
