<template>
	<view class="carousel">
		<swiper circular="true" duration="300" touchable @change="swiperchange" class="swiper" indicator-dots="true"
		 indicator-color="#B3B3B3" autoplay="true">
			<swiper-item v-for="(item, index) in goodsData" :key="index" class="swiper-item">
				<view class="image-wrapper">
					<image :src="item.pic" class="loaded"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="dots" v-if="goodsData.length !== 0">
			{{currentIndex}}<text class="line"> / </text><text class="text">{{goodsData.length}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 1,
				showVideo: false,
				platform: '',
				videos: ''
			}
		},
		props: {
			goodsData: {
				type: Array
			}
		},
		created() {
			this.platform = uni.getSystemInfoSync().platform //判断当前是安卓还是ios
		},
		methods: {

			swiperchange(e) {
				this.currentIndex = e.detail.current + 1
			},
			preview(imgs, index) { //预览图片
				uni.previewImage({
					current: index,
					urls: imgs
				})
			},

		}
	}
</script>
<style scoped lang="scss">
	.carousel {
		position: relative;
		overflow: hidden;

		.dots {
			width: 80upx;
			height: 46upx;
			line-height: 42upx;
			font-size: 30upx;
			text-align: center;

			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;

			background: #B3B3B3;
			position: absolute;
			bottom: 30upx;
			right: 30upx;
			z-index: 20;
			color: #FFFFFF;

			border-radius: 44upx;
			.text{
				font-size: 26upx;
				color: #DFDFDF;
			}
			.line{
				color: #DFDFDF;
			}
		}
	}

	.swiper {
		width: 100vw;
		height: 748upx;
		z-index: 100;
	}

	.loaded {
		width: 100vw;
		height: 748upx;
	}
</style>
