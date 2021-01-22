<template>
	<view class="page">
		<view class="title">預約</view>
		<view class="cell" @tap="gopage('/pages/order/brand')">
			<image src="../../static/images/yuyue1@2x.png" class="cell_img"></image>
			<view class="more">
				<image src="../../static/images/yuyue4@2x.png" class="more_img"></image>
			</view>
		</view>
		<view class="cell" @tap="gopage('/pages/order/already/already')">
			<image src="../../static/images/yuyue3@2x.png" class="cell_img"></image>
			<view class="more">
				<image src="../../static/images/yuyue4@2x.png" class="more_img"></image>
			</view>
		</view>
		<view class="cell" @tap="gopage('/pages/order/record/record')">
			<image src="../../static/images/yuyue2@2x.png" class="cell_img"></image>
			<view class="more">
				<image src="../../static/images/yuyue4@2x.png" class="more_img"></image>
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
					url:url
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
		height: 208upx;
	}
	.cell{
		margin-top: 20upx;
		position: relative;
	}
	.more{
		position: absolute;
		top: 0;
		bottom: 0;
		right:40upx ;
		display: flex;
		align-items: center;
	}
	.more_img{
		width: 66upx;
		height: 66upx;
	}

</style>
