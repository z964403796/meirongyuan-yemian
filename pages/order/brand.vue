<template>
	<view class="page">
		<view class="title">選擇品牌</view>
		<view class="cell" @tap="gopage('/pages/order/order_list')">
			<image src="../../static/images/brank1@2x.png" class="cell_img"></image>
		</view>
		<view class="cell">
			<image src="../../static/images/brank2@2x.png" class="cell_img"></image>
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
		padding: 32upx;
	}
	.title{
		
		font-size: 36upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 50upx;

	}
	.cell_img{
		width: 100%;
		height: 284upx;
	}
	.cell{
		margin-top: 20upx;
		position: relative;
	}


</style>
