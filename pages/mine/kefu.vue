<template>
	<view class="page">
		<view class="card">
		<view class="main_content">
			<view class="im">
			<image src="../../static/images/kef@2x.png" class="phone_img"></image></view>
			<view class="main_content_title">聯繫電話：888888888</view>
		</view>
		<view class="main_content" style="border: none;">
			<view class="im">
			<image src="../../static/images/email@2x.png" class="email_img"></image></view>
			<view class="main_content_title">客服郵箱：4828488@163.com</view>
		</view>
		</view>
	</view>
</template>

<script>
	var timer = null
	export default {
		data() {
			return {
				pwd: '',
				pwdeye: true,
				repwd: '',
				repwdeye: true,
				time: 0,
				phone: "",
				strPhone: "",
				code: "",


			}
		},

		onLoad() {
			
		},
		onPullDownRefresh() {
	
		},
		methods: {
			async submit() {
				if (!this.phone) {
					this.util.Toast('请输入账号')
				} else if (!this.key) {
					this.util.Toast('请输入私钥')
				} else if (!this.pwd) {
					this.util.Toast('请输入密码')
				} else if (this.pwd != this.repwd) {
					this.util.Toast('两次登录密码不一致')
				} else {
					let data = {
						phone: this.phone,
						priKey: this.key,
						password: this.pwd,
						confirmpass: this.repwd,
						type: 1
					}
					let res = await this.$api.updateLoginPwd(data)
					if (res) {
						this.util.Toast('修改成功')
						setTimeout(res => {
							uni.navigateBack({
								delta: 1
							})
						}, 500)
					}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.page {
		min-height: 100vh;
		background: #F8F8F8;
	}

	

	
.main_content{
	display: flex;
	padding:40upx 0;
		border-bottom: 1upx solid  #DDDDDD;
		align-items: center;
}

	

.main_content_title{

	font-size: 32upx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #333333;
	line-height: 44upx;

}



	.card{
		background: #FFFFFF;
		padding: 0 28upx;
		
	}
	.phone_img{
		width:54upx ;
		height: 48upx;
	}
	.email_img{
		width: 42upx;
		height: 33upx;
	}
	.im{
		width: 100upx;
		
	}
</style>
