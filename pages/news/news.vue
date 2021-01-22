<template>
	<view class="page">
		<view class="card">
			<view class="item" v-for="(item,index) in list" :key="index">
				<view class="icon">
					<image src="../../static/images/xiaoxi@2x.png" ></image>
				</view>
				<view class="content" :style="{border:list.length== index+1?'none':''}">
					<view class="cell_dis">
						<view class="cell_status" :style="{ color:item.status==1?'#333333':'#B40606'}">預約未通過</view>
						<view class="cell_time">2020-09-22 18:30</view>
					</view>
					<view class="cell_dis" @tap="item.open = !item.open">
						<view :class="!item.open?'cell_ex':'cell_content'" >您預約的某某療程預約時間為2020-09-22 18:30
到2020-09-27 ，請在預約記錄查看具體療程。</view>
						
							<image src="../../static/images/re@2x.png" class="more_img" :style="{transform:item.open?'rotate(270deg)':''}"></image>
						
						
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
list:[{open:false,status:1},{open:false,status:0},{open:false,status:1},{open:false,status:0}]
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.page {

		background: #F8F8F8;
		min-height: 100vh;
	}

	.card {
		background: #FFFFFF;
	}
	.icon{
		margin: 28upx 26upx;
		display: flex;
		justify-content: center;
		image{
			width: 84upx;
			height: 84upx;
		}
	}
	.content{
		border-bottom: 1upx solid #DDDDDD;
		padding:28upx 28upx 28upx 0 ;
	}
	.more_img{
		width: 24upx;
		height: 20upx;
		margin-left: 20upx;
		margin-top: 18upx;
	}
	.item{
		display: flex;
	}
	.cell_dis{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.cell_status{
	
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		line-height: 40upx;

	}
	.cell_time{
		
		font-size: 22upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 32upx;

	}
	.cell_content{
	
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 34upx;
		margin-top: 18upx;
 margin-right: 20upx
	}
	.cell_ex{
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		line-clamp: 1;
		-webkit-box-orient: vertical;
		
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 34upx;
		margin-top: 18upx;
		    margin-right: 100upx
	}
</style>
