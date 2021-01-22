<template>
	<view class="page">
		<view class="card">
			<view class="title">dermes</view>
			<view class="content">CPS身體更新活膚療程-全手臂-繁忙時段</view>
			<view class="jindu">
				<view class="jindu_active" :style="{width:100 / (50 /20)+'%',background:100 / (50 /20)==100?'#CBCBCB':''}"></view>
				<text>已完成  {{12}}/{{24}}</text>
			</view>
			<view class="explain">只顯示12月內的療程記錄</view>
			<view class="item" v-for="(item,index) in 2" :key="index" :style="{border:2==index+1?'none':''}">
				<view class="item_dis">
					<view class="item_time">2020-09-22 18:30</view>
					<view class="item_status">已完成</view>
				</view>
				<view class="item_text">療程名稱療程名稱療程名稱療程名稱療程名稱療程名稱</view>
			</view>
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
		padding: 24upx;
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
	.item_text{
	
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 34upx;
		margin-top: 20upx;

	}
	.item_time{
		
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 40upx;

	}
	.item_status{
		
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #2FA223;
		line-height: 34upx;

	}
	.item{
	
		border-bottom: 1upx solid #DDDDDD;
		padding: 20upx 0;
	}
	.item_dis{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.explain{
		
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 34upx;
		margin: 36upx 0 20upx 0;

	}
	.content{
		
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 34upx;
		margin-top: 18upx;

	}
	.title{

		font-size: 28upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 40upx;

	}
</style>
