import fetch from "@/service/fetch";
export const Mine = {
	//查询财务日志
	getMemberFin(data) {
		return fetch.post("User/getMemberFin", { ...data
		}, false, "");
	},
	//财务日志类型
	getFinType(data) {
		return fetch.post("User/getFinType", { ...data
		}, false, "");
	},
	//点击实名认证判断实名状态
	judgeReal(data) {
		return fetch.post("User/judgeReal", { ...data
		}, false, "");
	},

	//实名认证
	realName(data) {
		return fetch.post("User/realName", { ...data
		}, false, "");
	},

	//获取交易行情
	getTickerQuotation(data) {
		return fetch.post("Index/getTickerQuotation", { ...data
		}, false, "");
	},
	//意见反馈
	addFeedback(data) {
		return fetch.post("User/addFeedback", { ...data
		}, false, "");
	},
	//反馈列表
	feedbackList(data) {
		return fetch.post("User/feedbackList", { ...data
		}, false, "");
	},
	//反馈详情
	feddbackInfo(data) {
		return fetch.post("User/feddbackInfo", { ...data
		}, false, "");
	},
	//修改头像和昵称
	updateNickOrPic(data) {
		return fetch.post("User/updateNickOrPic", { ...data
		}, false, "");
	},
	//我的--个人信息
	getMyInfo(data) {
		return fetch.post("User/getMyInfo", { ...data
		}, false, "");
	},
	//领券大厅
	canGetCouponList(data) {
		return fetch.post("Index/canGetCouponList", { ...data
		}, false, "");
	},
	//领取优惠券
	getCoupon(data) {
		return fetch.post("Index/getCoupon", { ...data
		}, false, "");
	},
	//优惠券列表
	myCoupon(data) {
		return fetch.post("Index/myCoupon", { ...data
		}, false, "");
	},
	//修改登录密码
	updateLoginPwd(data) {
		return fetch.post("User/updateLoginPwd", { ...data
		}, false, "");
	},
	
	//关于我们
	aboutMe(data) {
		return fetch.post("User/aboutMe", { ...data
		}, false, "");
	},
	//外部注册页链接--团队邀请
	teamRecruit(data) {
		return fetch.post("User/teamRecruit", { ...data
		}, false, "");
	},
	
	//收货地址列表
	addresslist(data) {
		return fetch.post("User/addresslist", { ...data
		}, false, "");
	},
	//删除收货地址
	deladdress(data) {
		return fetch.post("User/deladdress", { ...data
		}, false, "");
	},
	//执行修改收货地址接口
	doeditaddress(data) {
		return fetch.post("User/doeditaddress", { ...data
		}, false, "");
	},
	//显示修改收货地址接口
	editaddress(data) {
		return fetch.post("User/editaddress", { ...data
		}, false, "");
	},
	//添加收货地址
	addaddress(data) {
		return fetch.post("User/addaddress", { ...data
		}, false, "");
	},
	//收藏列表
	collectList(data) {
		return fetch.post("Store/collectList", { ...data
		}, false, "");
	},
	//收藏商品
	shouCang(data) {
		return fetch.post("Store/shouCang", { ...data
		}, false, "");
	},
	//退款原因
	refundReason(data) {
		return fetch.post("Order/refundReason", { ...data
		}, false, "");
	},
	//评价页数据
	commentData(data) {
		return fetch.post("Order/commentData", { ...data
		}, false, "");
	},
	//评价功能
	addAcomment(data) {
		return fetch.post("Store/addAcomment", { ...data
		}, false, "");
	},
	//切换用户语言包
	updateMemberLanguage(data) {
		return fetch.post("Index/updateMemberLanguage", { ...data
		}, false, "");
	},
	//店铺申请协议
	shopApplyRule(data) {
		return fetch.post("User/shopApplyRule", { ...data
		}, false, "");
	},
	//申请店铺
	applyForShop(data) {
		return fetch.post("User/applyForShop", { ...data
		}, false, "");
	},
	//我的订单
	mineOrderList(data) {
		return fetch.post("Order/myOrderList", { ...data
		}, false, "");
	},
	//订单详情
	mineOrderInfo(data) {
		return fetch.post("Order/myOrderInfo", { ...data
		}, false, "");
	},
	//申请退款页面数据
	refundData(data) {
		return fetch.post("Order/refundData", { ...data
		}, false, "");
	},
	//提交退款
	submitRefund(data) {
		return fetch.post("Order/submitRefund", { ...data
		}, false, "");
	},
	//确认收货
	affrimOrder(data) {
		return fetch.post("Order/affrimOrder", { ...data
		}, false, "");
	},
	//删除订单
	delOrder(data) {
		return fetch.post("Order/delOrder", { ...data
		}, false, "");
	},
	//取消订单
	offOrder(data) {
		return fetch.post("Order/offOrder", { ...data
		}, false, "");
	},
	//我的团队
	myTeam(data) {
		return fetch.post("User/myTeam", { ...data
		}, false, "");
	},
	//退款售后列表
	getRefundList(data) {
		return fetch.post("Order/getRefundList", { ...data
		}, false, "");
	},
	//退款详情
	refundInfo(data) {
		return fetch.post("Order/refundInfo", { ...data
		}, false, "");
	},
	//撤销退款申请
	cexiao(data) {
		return fetch.post("Order/cexiao", { ...data
		}, false, "");
	},
	//版本号
	hotDownload(data) {
		return fetch.post("Login/hotDownload", { ...data
		}, false, "");
	},
	//钱包页数据
	walletData(data) {
		return fetch.post("User/walletData", { ...data
		}, false, "");
	},
	
};
