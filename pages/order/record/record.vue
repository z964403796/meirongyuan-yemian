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
			<view class="item" v-for="(item,index) in dataList" :key="index" @tap="gopage('/pages/order/record/detail')">
				<view class="cell_dis">
					<view class="cell_name">dermes</view>
					<view class="cell_det">詳情<image src="../../../static/images/Bars@2x.png" class="more_img"></image>
					</view>
				</view>
				<view class="cell_con">
					CPS身體更新活膚療程-全手臂-繁忙時段
				</view>

				<view class="jindu">
					<view class="jindu_active" :style="{width:100 / (item.zong /item.xian)+'%',background:100 / (item.zong /item.xian)==100?'#CBCBCB':''}"></view>
					<text>已完成 {{item.xian}}/{{item.zong}}</text>
				</view>

			</view>
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
				dataList: [{
					zong: "21",
					xian: "21"
				}, {
					zong: "21",
					xian: "10"
				}],
				show: false
			}
		},
		methods: {
			gopage(url) {
				uni.navigateTo({
					url
				})
			},
			change(index){
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

	.jindu {

		height: 36upx;
		border-radius: 18upx;

		background: #EAE7DF;
		position: relative;
		margin-top: 20upx;

		text {


			font-size: 20upx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 34upx;
			position: absolute;
			left: 40upx;
			z-index: 3;
		}

		// margin-bottom: 14upx;
	}

	.jindu_active {
		position: absolute;
		left: 0;
		top: 0;
		height: 36upx;
		background: linear-gradient(360deg, #B59E5A 0%, #C1AE75 100%);
		z-index: 2;
		border-radius: 18upx;
		max-width: 100%;



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
		margin-left: 24upx;
		padding: 32upx 26upx 32upx 0;
		border-bottom: 1upx solid #DDDDDD;
	}

	.cell_dis {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.cell_det {
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 34upx;
		display: flex;
		align-items: center;


	}

	.cell_name {

		font-size: 28upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 40upx;

	}

	.cell_con {

		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 34upx;
		margin-top: 18upx;

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
	.cell_title{
		
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 40upx;
		padding: 28upx 0;

	}
	.popup_content{
		margin-top: 50upx;
		padding: 0 24upx;
	}
</style>
