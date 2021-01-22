import fetch from "@/service/fetch";
export const C2C = {
	//获取买单
	getBuyOrder(data) {
		return fetch.post("Ctoc/getBuyOrder", { ...data
		}, false, "");
	},
	//获取卖单
	getSellOrder(data) {
		return fetch.post("Ctoc/getSellOrder", { ...data
		}, false, "");
	},
	//我的订单
	myOrderList(data) {
		return fetch.post("Ctoc/myOrderList", { ...data
		}, false, "");
	},
	//订单详情
	orderInfo(data) {
		return fetch.post("Ctoc/orderInfo", { ...data
		}, false, "");
	},

	//点击购买
	clickBuy(data) {
		return fetch.post("Ctoc/clickBuy", { ...data
		}, false, "");
	},

	//点击出售
	clickSell(data) {
		return fetch.post("Ctoc/clickSell", { ...data
		}, false, "");
	},
	//确认购买
	affirmBuy(data) {
		return fetch.post("Ctoc/affirmBuy", { ...data
		}, false, "");
	},
	//确认出售
	affirmSell(data) {
		return fetch.post("Ctoc/affirmSell", { ...data
		}, false, "");
	},

	//内部转账手续费
	ctc_sell(data) {
		return fetch.post("Ctoc/ctc_sell", { ...data
		}, false, "");
	},
	//CTC快捷区可交易币种
	canCtcBi(data) {
		return fetch.post("Ctoc/canCtcBi", { ...data
		}, false, "");
	},
	//CTC选中当前币种获取当前币种可交易币种
	getCanDealBi(data) {
		return fetch.post("Ctoc/getCanDealBi", { ...data
		}, false, "");
	},
	//获取当前币种对选中币种的汇率--用于计算下面预估金额
	getHuilv(data) {
		return fetch.post("Ctoc/getHuilv", { ...data
		}, false, "");
	},
	//ctc快捷区--我要买
	quickBuy(data) {
		return fetch.post("Ctoc/quickBuy", { ...data
		}, false, "");
	},
	//ctc快捷区--我要卖
	quickSell(data) {
		return fetch.post("Ctoc/iWantToSell", { ...data
		}, false, "");
	},
	//判断是否强制实名
	judgeqingzhiReal(data) {
		return fetch.post("User/judgeqingzhiReal", { ...data
		}, false, "");
	},
	


};
