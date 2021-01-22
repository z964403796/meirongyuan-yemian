<template>
	<view class="page">
		<view class="card">
		<view class="main_content">
			<view class="main_content_title">手機號</view>
			<input type="text" class="main_content_info" v-model="phone" placeholder="請輸入手機號" />
		</view>
		<view class="main_content">
			<view class="main_content_title">驗證碼</view>
			<input type="text" class="main_content_info" v-model="code" placeholder="請輸入驗證碼" />
			<view class="codebtn" @tap="getcode">{{time==0?'獲取驗證碼':time+' S'}}</view>
		</view>
		<view class="main_content">
			<view class="main_content_title">新密碼</view>
			<input type="text" class="main_content_info" v-model="pwd" placeholder="請輸入密碼" />
		</view>
		<view class="main_content" style="border:none">
			<view class="main_content_title">確認新密碼</view>
			<input type="text" class="main_content_info" v-model="repwd" placeholder="請再次輸入密碼" />
		</view>
		</view>
		<!-- 提交 -->
		<view class="page_submit"  @tap="submit">
			<view class="page_submit_file" :style ="{background:phone&&code&&pwd&& repwd?' #333333':' #DCDCDB'}" >完成</view>
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

	.set_content {
		background: #FFFFFF;
		border-radius: 16upx;

	}

	.content {
		display: flex;
		align-items: center;
		padding: 30upx 0;
		border-bottom: 1upx solid #EEEEEE;

		.content_title {
			width: 180upx;
			font-size: 28upx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #222222;
			line-height: 40upx;

			padding: 0 30upx;

		}

	}

	.page_submit {
		position: relative;
		margin-top: 60upx;


	}
	

	.page_submit_file {
		width: 572upx;
		height: 96upx;
		// background:;
		border-radius: 48upx;
		margin: 0upx auto;
		font-size: 36upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;

		line-height: 96upx;
		text-align: center;
	}

	.main_content {
		
		padding: 40upx 0;
		display: flex;
		border-bottom: 1upx solid  #DDDDDD;;
	

		.main_content_title {
			width: 190upx;
			font-size: 32upx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #333333;
			line-height: 44upx;

		}

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

.codebtn{
		font-size:28upx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:#C1AE75;
		line-height:40upx;
		min-width: 160upx;
		text-align: center;
	}


	.card{
		background: #FFFFFF;
		padding: 0 28upx;
		
	}
</style>
