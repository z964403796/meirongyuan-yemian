<template>
	<view class="page">
		<view class="card card_dis">
			<view class="card_content" @tap="gopage('/pages/mine/info/info')">
				<image src="../../static/images/success@2x.png" class="touxiang_img"></image>
				<view class="card_info">
					<view class="card_text">這個用戶很COOl</view>
					<view class="card_content">
						<view class="biaoqian">女</view>
						<view class="biaoqian">會員編碼：7482784847</view>
					</view>
				</view>
			</view>
			<image src="../../static/images/more@2x.png" class="more_img"></image>
		</view>
		<view class="cell card_dis" @tap="gopage('/pages/mine/updateLogin')">
			<view class="cell_text">修改密碼</view>
			<image src="../../static/images/backm@2x.png" class="m_img"></image>
		</view>
		<view class="content">
			<view class="item card_dis"  @tap="gopage('/pages/mine/kefu')">
				<view class="cell_text">聯繫客服</view>
				<image src="../../static/images/backm@2x.png" class="m_img"></image>
			</view>
			<view class="item card_dis"  @tap="gopage('/pages/mine/about')">
				<view class="cell_text">關於我們</view>
				<image src="../../static/images/backm@2x.png" class="m_img"></image>
			</view>
			<view class="item card_dis" @tap="clean=true" style="border:none">
				<view class="cell_text">清除缓存</view>
				<image src="../../static/images/backm@2x.png" class="m_img"></image>
			</view>
		</view>
		<view class="content">
				<view class="btn" @tap="quit">退出登錄</view>
		</view>
			<u-modal v-model="clean" content="确定清除缓存" title="" :show-cancel-button="true" confirm-text="确定"></u-modal>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				clean:false
			}
		},
		methods: {
			gopage(url){
				uni.navigateTo({
					url
				})
			},
			quit() {
				uni.reLaunch({
					url: "/pages/login/login"
				})
				uni.setStorageSync("token", "")
				uni.setStorageSync("member_id", "")
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
	width: 12upx;
	height: 20upx;
	}
	.content{
		background: #FFFFFF;
		padding:0 28upx;
		margin-top:20upx;
	}
	.item{
		padding: 40upx 0;
		border-bottom: 1upx solid #DDDDDD;;
	}
	.cell_text{
	
		font-size: 32upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 44upx;

	}
	.btn{
		text-align: center;
		padding: 40upx;
	}
</style>
