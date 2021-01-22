<template>
	<view class="page">
	<view class="title">忘記密碼</view>
			<view class="login_input">
				<input v-model="phone" placeholder="請輸入手機號" />
			</view>
			<view class="login_input" >
				<input type="text" v-model="code" placeholder="請輸入驗證碼" />
				<view class="codebtn" @tap="getcode">{{time==0?'獲取驗證碼':time+' S'}}</view>
			</view>
			<view class="login_input">
				<input v-model="pwd" password="true" placeholder="請輸入新密碼" />
			</view>
			<view class="login_input">
				<input v-model="pwd" password="true" placeholder="請輸入新密碼" />
			</view>
			<view class="btn" @tap="sure">完成</view>

	</view>
	
</template>

<script>
	var timer = null
	export default {
		data() {
			return {
				active:1,
				phone:'',
				pwd:'',
				pwdeye:true,
				repwd:'',
				repwdeye:true,
				code:'',
				time:0,
			}
		},
		components: {
			
		},
		onLoad() {

		},
		methods: {
			gopage(url){
				uni.navigateTo({
					url
				})
			},
			async sure(){
				uni.reLaunch({
					url:"/pages/login/success"
				})
				if(!this.phone){
					this.util.Toast('请输入手机号')
				}else if(!this.code){
					this.util.Toast('请输入验证码')
				}else if(!this.pwd){
					this.util.Toast('请输入密码')
				}else if(this.pwd != this.repwd){
					this.util.Toast('两次登录密码不一致')
				}else {
					let data = {
						phone:this.phone,
						code:this.code,
						password:this.pwd,
						confirm_password:this.repwd,
					}
					let res = await this.$zcyapi.retrievePwdPhone(data)
					if(res){
						this.util.Toast('修改成功')
						setTimeout(res=>{
							uni.navigateBack({
								delta:1
							})
						},500)
					}
				}
			},
			// 获取手机号
			async getcode(){
				if(this.time>0){
					return
				}
				if(!this.phone){
					this.util.Toast('请输入手机号')
				}else{
					this.time = 60
					timer = setInterval(res=>{
						if(this.time==0){
							clearInterval(timer)
						}else{
							this.time--
						}
					},1000)
					let res = await this.$zcyapi.getPhoneCode({phone:this.phone})
					if(res){
						this.util.Toast('发送成功')
					}
					
				}
			},
		}
	}
</script>

<style scoped>
	
	.login_input {
		border-bottom: 1upx solid #EEEEEE;
		padding: 40upx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.page {
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

