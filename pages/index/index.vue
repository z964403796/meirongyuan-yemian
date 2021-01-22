<template>
	<view class="page">
		<view class="banner_img">
			<u-swiper :list="bannerList" :height="310" @click="onSwper" :border-radius="16"></u-swiper>
		</view>
		<view class="cell">
			<image src="../../static/images/1@2x.png" class="bank_img"></image>
		</view>
		<view class="cell">
			<image src="../../static/images/2@2x.png" class="bank_img"></image>
		</view>
		
	</view>
</template>
<script>

	export default {
		data() {
			return {
				bannerList:[{image: '/static/images/banner@2x.png'},{image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'},{image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'}]
			};
		},
		
		onLoad() {},
		methods: {
			bookMeeting(e) {
				params = e;
				console.log(params)
			}
		},
	};
</script>

<style lang="scss">
	.page{
		padding: 24upx;
	}
	.bank_img{
		height:284upx ;
		width: 100%;
	}
	.cell{
		margin-top: 20upx;
	}
</style>
