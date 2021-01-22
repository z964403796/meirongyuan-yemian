<template>
	<view>
		<view class="seat_content">
			<image src="/static/images/ss_none@2x.png" class="seat_img"></image>
			<view class="seat_text">{{title}}</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:'seat',
		props:{
			title:{
				type: String,
				default: "暂无内容"
			},
		},
		data() {
			return {
			
			}
		},
		methods: {
			
			
		}
	}
</script>

<style scoped >
	.seat_img{
		width: 404upx;
		height: 294upx;
	}
	.seat_text{
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #888888;
		line-height: 40upx;
		margin-top: 40upx;
	}
	.seat_content{
		margin-top: 236upx;
	text-align: center;
	}

</style>
