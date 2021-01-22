<template>
	<view class="page">
		
		<view class="content">
			<view class="item_ex card_dis" >
				<view class="cell_text">用戶頭像</view>
				<view class="cell_content"  @tap="upload">
					<image src="/static/images/success@2x.png" class="touxiang_img"></image>
					<image src="/static/images/Bars2@2x.png" class="m_img"></image>
				</view>
				
			</view>
			<view class="item card_dis" >
				<view class="cell_text">手機號碼</view>
				<view class="cell_con">
					15788990986
				</view>
				
			</view>
			<view class="item card_dis" style="border: none;" @tap="gopage('/pages/mine/info/user')">
				<view class="cell_text">暱稱</view>
				<view class="cell_content">
					<view class="cell_con">
						用戶超有錢
					</view>
					<image src="/static/images/Bars2@2x.png" class="m_img"></image>
				</view>
				
				
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
			},
			upload() {
				this.$upload.uploadImg(async res_url => {
					console.log(res_url,"++=")
					let data = {
						pic: res_url
					}
					let res = await this.$api.updateNickOrPic(data)
					if (res) {
						this.init()
					}
				});
			},
			
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
	
font-size: 32upx;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
line-height: 44upx;

}
.cell{
	padding:40upx 28upx;
	background:#FFFFFF ;
	margin-top:20upx;
}
.m_img{
	width: 24upx;
	height: 38upx;
	margin-left: 20upx;
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
	.item_ex{
		padding: 20upx 0;
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
	.touxiang_img{
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
		
	}
	.cell_content{
		display: flex;
		align-items: center;
	}
	.cell_con{
		font-size: 32upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999990;
		line-height: 44upx;

	}
	
</style>
