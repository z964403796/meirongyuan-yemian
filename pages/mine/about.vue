<template>
	<view class="page">
		
		<view class="content" v-for="(item,index) in 2" :key="index" @tap="gopage('/pages/mine/about_det')">
			<view class="item card_dis" :style="{border:index==2-1?'none':''}">
				<view class="cell_text">關於HAIRLESS</view>
				<image src="../../static/images/Bars2@2x.png" class="m_img"></image>
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
			gopage(url){
				uni.navigateTo({
					url
				})
			}
			
		}
	}
</script>

<style scoped lang="scss">
	.page{
		
background: #F8F8F8;
min-height: 100vh;
	}
	.card{
		background: #FFFFFF;
		padding: 40upx 24upx 40upx 24upx;
	}
	.touxiang_img{
		width: 128upx;
		height: 128upx;
		border-radius: 100%;
	}
	.card_dis{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.more_img{
		width: 18upx;
		height: 30upx;
	}
	.card_content{
		display: flex;
	}
.biaoqian{

	background: linear-gradient(143deg, #9D8F65 0%, #333333 100%);
	border-radius: 16px;
	margin-right: 20upx;

font-size: 20upx;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #FFFFFF;
line-height: 28upx;
padding: 6upx 18upx;

}
.card_info{
	margin-left: 40upx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 10upx;
	}
.card_text{
	
	font-size: 40upx;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #333333;
	line-height: 40upx;

}
.cell{
	padding:40upx 28upx;
	background:#FFFFFF ;
	margin-top:20upx;
}
.m_img{
	width: 24upx;
	height: 38upx;
	}
	.content{
		background: #FFFFFF;
		padding-left: 28upx;
	}
	.item{
		padding: 40upx 0;
		border-bottom: 1upx solid #DDDDDD;
		padding-right: 28upx;
	}
	.cell_text{
	
		font-size: 32upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 44upx;

	}
	
</style>
