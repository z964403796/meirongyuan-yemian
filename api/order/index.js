import fetch from "@/service/fetch";
export const Shop = {
	//首页--商品分类
	getTypeList(data) {
		return fetch.post("Index/getTypeList", { ...data
		}, false, "");
	},
	//首页轮播图
	getInxpic(data) {
		return fetch.post("Index/getInxpic", { ...data
		}, false, "");
	},
	//是否弹红包弹窗
	isTanHongBao(data) {
		return fetch.post("Index/isTanHongBao", { ...data
		}, false, "");
	},
	//开红包
	openRedBag(data) {
		return fetch.post("Index/openRedBag", { ...data
		}, false, "");
	},
	//搜索历史
	getSeekHistory(data) {
		return fetch.post("Index/getSeekHistory", { ...data
		}, false, "");
	},
	//转账
	transfer(data) {
		return fetch.post("Index/transfer", { ...data
		}, false, "");
	},
	//转账记录
	transferRecord(data) {
		return fetch.post("Index/transferRecord", { ...data
		}, false, "");
	},
	//清空搜索历史
	delHistory(data) {
		return fetch.post("Index/delHistory", { ...data
		}, false, "");
	},
	//首页生鲜专区
	getFreshList(data) {
		return fetch.post("/Index/getFreshList", { ...data
		}, false, "");
	},
	//首页的秒杀商品
	getMiaoSha(data) {
		return fetch.post("Index/getMiaoSha", { ...data
		}, false, "");
	},
	//首页--发现好店
	getNiceShop(data) {
		return fetch.post("Index/getNiceShop", { ...data
		}, false, "");
	},
	//首页猜你喜欢
	guessWhatYouLike(data) {
		return fetch.post("Index/guessWhatYouLike", { ...data
		}, false, "");
	},
	//秒杀商品列表
	getMiaoShaGoods(data) {
		return fetch.post("Store/getMiaoShaGoods", { ...data
		}, false, "");
	},
	//秒杀规则
	getMiaoshaRule(data) {
		return fetch.post("/Store/getMiaoshaRule", { ...data
		}, false, "");
	},
	//店铺头部信息
	getShopInfo(data) {
		return fetch.post("Index/getShopInfo", { ...data
		}, false, "");
	},
	//店铺分类
	getShopType(data) {
		return fetch.post("Store/getShopType", { ...data
		}, false, "");
	},
	//发现好店列表
	getNiceShopList(data) {
		return fetch.post("Store/getNiceShopList", { ...data
		}, false, "");
	},
	//秒杀商品详情
	getMsGoodsInfo(data) {
		return fetch.post("Store/getMsGoodsInfo", { ...data
		}, false, "");
	},
	//普通商品详情
	getGoodsDetails(data) {
		return fetch.post("Store/getGoodsDetails", { ...data
		}, false, "");
	},
	//获取商品规格
	getGoodsDetail(data) {
		return fetch.post("Store/getGoodsDetail", { ...data
		}, false, "");
	},
	//获取所有规格的详情和价钱
	getDetailInfo(data) {
		return fetch.post("Store/getDetailInfo", { ...data
		}, false, "");
	},
	//所有分区接口
	fenquGoodsList(data) {
		return fetch.post("Index/fenquGoodsList", { ...data
		}, false, "");
	},
	//生鲜专区列表
	getShengxianList(data) {
		return fetch.post("Store/getShengxianList", { ...data
		}, false, "");
	},
	//搜索商品
	searchGoods(data) {
		return fetch.post("Index/searchGoods", { ...data
		}, false, "");
	},
	//店铺简介
	getShopIntro(data) {
		return fetch.post("Store/getShopIntro", { ...data
		}, false, "");
	},

	//店铺活动列表
	getShopActGoods(data) {
		return fetch.post("Store/getShopActGoods", { ...data
		}, false, "");
	},
	//商品评价列表
	getGoodsComment(data) {
		return fetch.post("Store/getGoodsComment", { ...data
		}, false, "");
	},
	//确认订单页面
	confirmAnorder(data) {
		return fetch.post("Store/confirmAnorder", { ...data
		}, false, "");
	},
	//获取可用优惠券
	getCanCoupon(data) {
		return fetch.post("Store/getCanCoupon", { ...data
		}, false, "");
	},
	//下单接口
	buyOrder(data) {
		return fetch.post("Store/buyOrder", { ...data
		}, false, "");
	},
	
	//去支付
	goPay(data) {
		return fetch.post("Store/goPay", { ...data
		}, false, "");
	},
	//内部转账手续费
	zz_fee(data) {
		return fetch.post("Ctoc/zz_fee", { ...data
		}, false, "");
	},
	
};

