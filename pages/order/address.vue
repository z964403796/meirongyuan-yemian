<template>
	<view class="page">
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

		<view class="cell">
			<image src="../../static/images/order1@2x.png" class="cell_img"></image>

		</view>
		<view class="cell">
			<image src="../../static/images/order_bg@2x.png" class="cell_img"></image>
			<view class="cell_icon">
				<image src="../../static/images/order_icon@2x.png"></image>
			</view>
			<view class="cell_content">
				<view class="cell_title">選擇療程</view>
				<view class="cell_text">點擊更多查看已經預約的療程</view>
			</view>
		</view>
		<view class="cell">
			<image src="../../static/images/order2@2x.png" class="cell_img"></image>
			<view class="more">
				<image src="../../static/images/yuyue4@2x.png" class="more_img"></image>
			</view>
		</view>
		<view class="cell_btn">
			<view class="btn" @tap="gopage('/pages/order/time')">自選日期</view>
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

<style lang="scss" scoped>
	.page {
		padding: 32upx;
	}

	.cell_img {
		width: 100%;
		height: 208upx;
	}

	.cell {
		margin-top: 20upx;
		position: relative;
	}

	.more {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 40upx;
		display: flex;
		align-items: center;
	}

	.more_img {
		width: 66upx;
		height: 66upx;
	}

	.cell_icon {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 40upx;
		display: flex;
		align-items: center;

		image {
			width: 104upx;
			height: 104upx;
		}

	}

	.cell_content {

		position: absolute;
		top: 52upx;
		bottom: 52upx;
		left: 172upx;


	}

	.cell_title {

		font-size: 36upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #999999;
		line-height: 50upx;

	}

	.cell_text {
		margin-top: 20upx;
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 34upx;

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
		margin-top: 252upx;
		background: #333333;
	}

	.cell_btn {
		display: flex;
		align-items: center;
		justify-content: center;
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
	.one{
		margin-right:10upx;
		margin-left: 30upx;
	}
	.three{
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
		padding-bottom: 12upx;

	}

	.head_check {

		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 40upx;

	}
</style>
