<template>
	<view>
		<!-- 筛选规格 -->
		<u-popup v-model="showModal" mode="bottom" border-radius="14">
			<view class="goods_popup">
				<view class="popup_close" @tap="showModal = false">
					<image src="../../static/images/close_popup@2x.png"></image>
				</view>
		
				<view class="goods_popup_info">
					<image src="../../static/images/spxq_img@2x.png"></image>
					<view class="goods_popup_content">
						<view class="goods_popup_name">{{goodsData.goods_name}}</view>
						<view class="goods_popup_val">{{selectArr.price?selectArr.price: goodsData.price}}DC</view>
						<view class="goods_popup_text">选择 {{ selectList.join(' ') }}</view>
					</view>
		
				</view>
				<view class="goods_popup_model">
					<view class="" v-for=" (el,i) in  skuArr" :key="i">
		
		
						<view class="goods_popup_title">{{el.name}}</view>
						<view class="goods_popup_models">
							<view v-for=" (item,index) in  el.data" :key="index" @tap=" getValue(item, i) " :class="selectList[i]==item?'popup_model_active' : 'popup_model_item' ">
								{{item}}
							</view>
						</view>
					</view>
				</view>
				<view class="goods_popup_dis">
					<view class="goods_popup_title">购买数量</view>
					<view class="goods_popup_num">
						<u-number-box :min="1" v-model="value" @change="valChange"></u-number-box :min="1">
					</view>
				</view>
				<view>
					<view class="goods_popup_confirm" v-if="isbuy" @tap="submit()">确定</view>
					<view v-else class="goods_popup_btns">
						<view class="goods_popup_addcart" @tap="submit(),btnType=1">
							加入购物车
						</view>
						<view class="goods_popup_dingjin">
							立 即 购 买
						</view>
					</view>
				</view>
		
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
