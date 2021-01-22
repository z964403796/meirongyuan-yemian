<template>
	<view class="page">
		<view v-if="type==0">
			<view class="logo_cell">
				<image src="../../static/images/HAiRLESSlogo@2x.png" class="ha_img"></image>
				<view class="fenge_line"></view>
				<image src="../../static/images/FaceMORElogo@2x.png" class="fa_img"></image>
			</view>
			<view class="login_content">
				<view class="login_input">
					<input v-model="phone" placeholder="請輸入手機號" />
				</view>
				<view class="login_input">
					<input v-model="pwd" password="true" placeholder="請輸入密碼" />
				</view>
				<view class="btn" @tap="denglu()">登錄</view>
				<view class="login_dis">
					<view class="tab_sel" @tap="type=1">使用驗證碼登錄</view>
					<view class="password" @tap="gopage('/pages/login/forget_pwd')">忘記密碼？</view>
				</view>
			</view>
			<view class="tishi">
				<view class="tishi_content" v-if="!xieyi">
					<image src="../../static/images/bg@2x.png" class="tishi_img"></image>
					<view  class="hanzi" >請勾選同意後再進行登錄</view>
				</view>
				
			
			<view class="xieyi">
				<image src="../../static/images/Fill@2x.png" v-if="xieyi" @tap="xieyi=false"></image>
				<image src="/static/images/nocheck@2x.png" v-else @tap="xieyi=true"></image>
				同意 <text @tap="gopage('/pages/login/protocol')">《用戶協議》</text> 和<text @tap="gopage('/pages/login/policy')">《隱私政策》</text>
			</view>
			</view>
		</view>
		<view class="login_content" v-else>
		<view class="title">驗證碼登錄</view>
				<view class="login_input">
					<input v-model="phone" placeholder="請輸入手機號" />
				</view>
				<view class="login_input" >
					<input type="text" v-model="code" placeholder="請輸入驗證碼" />
					<view class="codebtn" @tap="getcode">{{time==0?'獲取驗證碼':time+' S'}}</view>
				</view>
				<view class="btn" @tap="denglu()">登錄</view>
				<view class="login_dis">
					<view class="tab_sel" @tap="type=0">使用密碼登錄</view>
					<view class="password" @tap="gopage('/pages/login/forget_pwd')">忘記密碼？</view>
				</view>
		
		</view></view>

	</view>
</template>

<script>
	var timer = null
	export default {
		data() {
			return {
				type: 0,
				xieyi: false,
				phone:"",
				pwd:"",
				time:0,
			}
		},
		methods: {
			gopage(url){
				uni.navigateTo({
					url
				})
			},
			denglu(){
				setTimeout(res => {
					uni.switchTab({
						url: '/pages/index/index'
					})
				}, 500)
			}

		}
	}
</script>

<style scoped lang="scss">
	.logo_cell {
		display: flex;
		justify-content: center;
		margin-top: 130upx;
	}

	.ha_img {
		width: 254upx;
		height: 64upx;
	}

	.fa_img {
		width: 274upx;
		height: 64upx;
	}

	.fenge_line {
		width: 2upx;
		height: 46upx;
		background: #C1AE75;
		margin: 0 22upx;

	}

	.login_input {
		border-bottom: 1upx solid #EEEEEE;
		padding: 40upx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.login_content {
		padding: 0 88upx;
		margin-top: 100upx;
	}

	.btn {
		width: 572upx;
		height: 96upx;
		background: linear-gradient(203deg, #C1AE75 0%, #D7AE80 100%);
		border-radius: 48upx;

		font-size: 36upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 72upx;
	}

	.login_dis {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 66upx;
	}

	.tab_sel {

		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 40upx;

	}

	.password {

		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #C1AE75;
		line-height: 40upx;

	}

	.xieyi {

		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;

		display: flex;
		align-items: center;
		justify-content: center;
		text {
			color: rgba(193, 174, 117, 1);
		}
	}

	.xieyi image{
		width: 28upx;
		height: 28upx;
		margin-right: 10upx;
	}
	.tishi{
		position: relative;
		margin-top: 342upx;
	}
	.tishi_img{
		width: 292upx;
		height: 80upx;
		
	}
	.hanzi{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display:flex;
		justify-content: center;
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 64upx;

	}
	.tishi_content{
		position: absolute;
		top: -86upx;
		left: 176upx;
	}
	.codebtn{
		font-size:28upx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:#C1AE75;
		line-height:40upx;
		min-width: 160upx;
		text-align: center;
	}
	.title{
		font-size: 48upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 66upx;
		margin-bottom: 40upx;
	}
	
</style>
