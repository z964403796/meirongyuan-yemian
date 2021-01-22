<template>
	<view class="page">
		<view class="card">
			<view class="main_content">
				<input type="text" class="main_content_info" v-model="name" placeholder="請輸入暱稱" />
				<image v-if="name" @tap="name=''" src="../../../static/images/del@2x.png" class="del_img"></image>
				
			</view>
		</view>
		<!-- 提交 -->
		<view class="page_submit" @tap="submit">
			<view class="page_submit_file" :style="{background:name?' #333333':' #DCDCDB'}">完成</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
name:""
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
		padding: 40upx 28upx;
	}

	.page_submit {
		position: relative;
		margin-top: 60upx;


	}


	.page_submit_file {
		width: 220upx;
		height: 70upx;
		// background:;
		border-radius: 48upx;
		margin: 0upx auto;
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;

		line-height: 70upx;
		text-align: center;


	}

	.main_content {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.main_content_info {

			font-size: 32upx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #333333;
			line-height: 44px;

			width: 360upx;
		}
	}

	.content_input {
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		line-height: 40upx;
		width: 380upx;

	}
	.del_img{
		width:34upx;
		height: 34upx;
	}
</style>
