<template>
	<view class="arealist">
		<view class="head">
			<view class="item" v-for="(itme,i) in address" :key="i"  :class="i==acitve?'active':''" @tap="changeactive(i)">{{itme.name}}</view>
			<view class="close" @tap="confim">确定</view>
		</view>
		<scroll-view class="body" scroll-y="true">
			<view v-for="(item,index) in arr" :key="index" @tap="changeaddress(item)" :class="address[acitve].city_id==item.city_id?'add_active':''" >{{item.name}}</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address:[{
					city_id:'',
					name:'省份'
					
				}],
				acitve:0,
				arr:[]
			}
		},
		async mounted() {
			uni.showLoading({
				title:'加载中',
				mask:true
			})
		    let res = await this.$zcyapi.getProvince({})
			uni.hideLoading()
			this.arr = res
		},
		methods: {
			gopage(url){
				this.util.playVoice('/static/audio/click.mp3');
				uni.navigateTo({
					url
				})
			},
			confim(){
				if(this.address[2]&&this.address[2].city_id){
					this.$emit('confim',this.address)
				}else{
					this.util.Toast('请全部选择')
				}
				
			},
			async changeactive(index){
				if(this.acitve==index){
					return
				}
				
				uni.showLoading({
					title:'加载中',
					mask:true
				})
				let data = {}
				if(index!=0){
					data.city_id =this.address[index-1].city_id
				}
				let res = await this.$zcyapi.getProvince(data)
				uni.hideLoading()
				this.acitve = index
				this.arr = res
				
				
			},
			changeaddress(item){
				this.address.splice(this.acitve,1,item)
				if(this.acitve==0){
					if(this.address.length>=2){
						this.address[1]={city_id:'',name:'城市'}
						this.address.splice(2,1)
						return
					}
					this.address.push({city_id:'',name:'城市'})
				}else if(this.acitve==1){
					if(this.address.length>=3){
						this.address[2]={city_id:'',name:'区县'}
						
						return
					}
					this.address.push({city_id:'',name:'区县'})
				}
			}
		}
	}
</script>

<style scoped>
	.arealist{
		width: 100%;
		height:690upx;
		background:rgba(0,42,52,1);
	}
	.head{
		height: 90upx;
		display: flex;
		box-sizing: border-box;
		border-bottom: 1upx solid #000D17;
		position: relative;
		padding: 0 20upx;
		
	}
	.close{
		position: absolute;
		height:90upx;
		font-size:28upx;
		font-family:PingFangSC-Regular,PingFang SC;
		color:rgba(136,136,136,1);
		line-height:90upx;
		right: 40upx;
	}
	.item{
		padding:0 20upx;
		height: 90upx;
		line-height: 90upx;
	}
	.active{
		border-bottom: #3FE7E8 solid 2upx;
	}
	.body{
		padding: 30upx 28upx 0;
		overflow-x:scroll;
		height:600upx
	}
	.body view{
		margin-bottom: 30upx;
	}
	.add_active{
		color: #3FE7E8 !important;
	}
	
</style>

