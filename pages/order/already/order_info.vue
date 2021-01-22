<template>
	<view class="page">
		<view class="card">
			<view class="title">多謝你的選擇及預約</view>
			<view class="card">
				<view class="item_cell">
					<view class="item_cell_title">購買療程</view>
					<view class="item_cell_text">療程名稱是一個很長的名稱大概有30字左右的字段</view>
				</view>
				<view class="item_cell">
					<view class="item_cell_title">療程時間</view>
					<view class="item_cell_text">2020-11-27（週五）12：00-13：00</view>
				</view>
				<view class="item_cell">
					<view class="item_cell_title">療程地址</view>
					<view class="item_cell_text">尖沙咀店</view>
				</view>
			</view>
		</view>
		<view class="explain">若想登記/更改預約，請到我的賬戶>我的療程</view>
		<view class="map_img">
			<image src="/static/images/map@2x.png"></image>
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
			gopage(url) {
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

	.item_cell {
		display: flex;
		padding: 18upx 28upx;
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

	.title {
		padding: 30upx 0;
		font-size: 28upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 400;

		color: #C1AE75;
		line-height: 40upx;

		margin-left: 28upx;
		border-bottom: 1upx solid #DDDDDD;

	}

	.map_img image {
		width: 100%;
		height: 710upx;
	}

	.explain {
		text-align: center;
		padding: 28upx;

		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #A3A3A3;
		line-height: 34upx;

	}
</style>
