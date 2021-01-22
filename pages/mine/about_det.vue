<template>
	<view class="page">
			<rich-text :nodes="protocol"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				protocol:''
			}
		},
		onLoad(e) {
	
		},
		// 右侧点击
		onNavigationBarButtonTap(e) {
			console.log(1111111111)
		},
		
		async onShow() {
			let res = await this.$zcyapi.protocol({})
			this.protocol = res.protocol.replace(/<img/gi,'<img style="max-width:100%;height:auto;"')
		},
		onPullDownRefresh() {
			console.log('下拉刷新')
		},
		onReachBottom() {
			console.log('上拉')
		},
		methods: {
			gopage(url){
				this.util.playVoice('/static/audio/click.mp3');
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>


<style scoped>
	.page{
		width: 100%;
		box-sizing: border-box;
		min-height:100vh ;
		padding: 30upx;
		background: #fff;
	}
</style>
