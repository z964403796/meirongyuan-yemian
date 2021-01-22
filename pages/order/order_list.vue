<template>
	<view class="page">
		<view class="card">
			<view class="type_content">
				<view :class="el.name == type?'item_type_check':'item_type'" v-for="(el,i) in typeList" :key="i" @tap="type=el.name">{{el.name}}</view>
			</view>
			<view class="title">請選擇療程</view>
			<view class="item" v-for="(item,index) in list" :key="index">
			
				<view  @tap="xuan(item)" class="icon">
					<image v-if="item.check" src="../../static/images/choose@2x.png"></image>
					<image v-else src="../../static/images/null@2x.png"></image>
				</view>
				<view class="item_dis">
					<view>
						<view>{{item.name}}</view>
						<view>下次療程日:{{item.date}}或之後</view>
					</view>
					<view class="item_time">
						<view class="item_time_text">60</view>
						<view class="item_time_unit">分鐘</view>
					</view>
				</view>
			</view>
			<view class="explain">友情提醒：一段20字左右的字段一段20字左右的字段一段20字</view>
		</view>
		<view class="cell_btn">
			<view class="btn" @tap="gopage('/pages/order/address')" :style="{background:ids.length==0?' #DCDCDB':' #333333'}">立即預約</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeList: [{
					name: "全身"
				}, {
					name: "頭部"
				}, {
					name: "面部"
				}, {
					name: "上半身"
				}],
				list: [{
					id:"1",
					name: "療程名稱",
					date: "2020-09-20",
					time: "60",
					check:false
				},{
					id:"2",
					name: "療程名稱",
					date: "2020-09-20",
					time: "60",
					check:false
				},{
					id:"3",
					name: "療程名稱",
					date: "2020-09-20",
					time: "60",
					check:false
				}],
				ids: [],
				type:"全身"
			}
		},
		methods: {
			gopage(url){
				uni.navigateTo({
					url
				})
			},
			xuan(item){
				item.check = !item.check
				var arr = []
				this.list.forEach(el => {
				
				
						
						if (el.check) {
							arr.push(el.id)
						}
					
				})
				
				this.ids = arr
				
			}

		}
	}
</script>

<style scoped lang="scss">
	.btn {
		width: 560upx;
		height: 96upx;
		border-radius: 48upx;
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 42upx;
	}

	.cell_btn {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card {
		padding-left: 32upx;
	}

	.explain {

		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 34upx;
		margin-top: 200upx;

	}

	.title {
		border-bottom: 1upx solid #DDDDDD;

		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 40upx;
		padding: 20upx 0;
	}

	.item_time {
		width: 84upx;
		height: 84upx;
		border-radius: 42upx;
		border: 1px solid #C1AE75;
		text-align: center;

	}

	.item_time_text {

		font-size: 36upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #C1AE75;
		line-height: 50upx;

	}

	.item_time_unit {

		font-size: 22upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #C1AE75;
		line-height: 22upx;

	}

	.item_dis {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30upx 38upx 30upx 0;
		border-bottom: 1upx solid #DDDDDD;
		width: 616upx;
	}

	.icon {
		width: 82upx;
		// margin: 32upx 50upx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 32upx;

		image {
			width: 48upx;
			height: 48upx;
		}
	}

	.item {
		display: flex;
		// align-items: center;
		// justify-content: space-between;
	}

	.type_content {
		display: flex;
		padding-right: 32upx;
		align-items: center;
		justify-content: space-between;
		margin-top: 40upx;
	}

	.item_type_check {
		width: 140upx;
		height: 48upx;
		background: linear-gradient(288deg, #333333 0%, #C1AE75 100%);
		border-radius: 24upx;

		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 48upx;
		text-align: center;

	}
	.item_type{
		width: 140upx;
		height: 48upx;
		border-radius: 24upx;
		border: 1upx solid #999999;

		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 48upx;
		text-align: center;
	}
	
</style>
