<template>
	<view class="page">
		
		<view class="card">
			<view class="header_content">
				<view class="header_tab">
					<u-tabs :list="list" :height="100" :is-scroll="true" :current="current" @change="change" active-color="#333333"
					 inactive-color="#999999"></u-tabs>
				</view>
				<view class="header_line"></view>
				<view class="heaser_paixu" @tap="show=true">
					時間<image src="../../../static/images/paixu@2x.png" class="paixu_img"></image>
				</view>
			</view>
			</view>
			<view class="item" v-for="(item,index) in 2" :key="index" @tap="gopage('/pages/order/already/update_order')">
				<view class="cell_name">dermes</view>
				<view class="cell_con">
					CPS身體更新活膚療程-全手臂-繁忙時段
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
				<view class="btn">更改預約流程</view>

			</view>
		
		<u-popup v-model="show" mode="top">
			<view class="popup_content">
				<view class="cell_title">时间選擇</view>
				<view class="cell">时间正序</view>
				<view class="cell">时间倒敘</view>
			</view>
		</u-popup>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				list: [{
					name: '所有療程'
				}, {
					name: 'HAIRLESS'
				}, {
					name: 'FACEMORE'
				}],

				show: false
			}
		},
		methods: {
			gopage(url) {
				uni.navigateTo({
					url
				})
			},change(index){
				this.current = index
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
	}



	.paixu_img {
		width: 23upx;
		height: 33upx;
		margin-left: 10upx;
	}

	.more_img {
		width: 18upx;
		height: 29upx;
		margin-left: 10upx;
	}

	.header_line {
		width: 1upx;
		height: 26upx;
		background: #999999;
		margin-right: 20upx;

	}

	.header_content {
		display: flex;
		align-items: center;
		border-bottom: 1upx solid #DDDDDD;
	}

	.heaser_paixu {
		display: flex;
		align-items: center;
	}

	.item {
		margin-bottom: 20upx;
		padding: 32upx 24upx;
		position: relative;
		background-color: #FFFFFF;
	}





	.cell {
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 40upx;
		padding: 20upx 0;
		border-top: 1upx solid #DDDDDD;
	}

	.cell_title {

		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 40upx;
		padding: 28upx 0;

	}

	.popup_content {
		margin-top: 50upx;
		padding: 0 24upx;
	}

	.btn {
		width: 212upx;
		height: 64upx;
		background: #C1AE75;
		border-radius: 32upx;

		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 64upx;
		text-align: center;
		position: absolute;
		right: 24upx;
		bottom: 36upx;

	}
	.item_cell{
		display: flex;
		margin-top: 20upx;
	}
	.item_cell_title{
		width: 126upx;
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 34upx;
}
	.item_cell_text{
		
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 34upx;

	}
	.cell_name{
	
		font-size: 28upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 40upx;

	}
	.cell_con{
		
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 34upx;
		padding: 26upx 0;
		border-bottom: 1upx solid #DDDDDD;
	}
</style>
