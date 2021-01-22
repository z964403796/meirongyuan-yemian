<template>
	<view class="page">
		<image src="../../static/images/success@2x.png" class="success_img"></image>
		<view class="explain">密碼修改成功，3秒後跳回登錄頁</view>
		<view class="btn" @tap="gopage()" >返回登錄頁</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			setTimeout(el=>{
				this.gopage()
			},3000)
			
		},
		methods: {
			gopage(){
				uni.reLaunch({
					url:"/pages/login/login"
				})
			}

		}
	}
</script>

<style scoped lang="scss">
	.page {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 86upx;
	}

	.success_img {
		width: 192upx;
		height: 192upx;

	}

	.explain {

		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 40upx;
		margin-top: 68upx;

	}

	.btn {
		width: 572upx;
		height: 96upx;
		border-radius: 48px;
		border: 1upx solid #696969;
		font-size: 36upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 54upx;
	}
</style>
