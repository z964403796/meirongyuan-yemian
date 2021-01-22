import fetch from "@/service/fetch";
export const Home = {
	//爱嘀嘉联系客服
	relationService(data) {
		return fetch.post("Index/relationService", { ...data
		}, false, "");
	},
	//爱嘀嘉公告列表
	getNewsList(data) {
		return fetch.post("Packet/getNewsList", { ...data
		}, false, "");
	},
	//爱嘀嘉公告详情
	getNewsInfo(data) {
		return fetch.post("Packet/getNewsInfo", { ...data
		}, false, "");
	},
	//爱嘀嘉商学院
	commercialCollege(data) {
		return fetch.post("Index/commercialCollege", { ...data
		}, false, "");
	},
	//爱嘀嘉文章详情
	getCollegeInfo(data) {
		return fetch.post("Index/getCollegeInfo", { ...data
		}, false, "");
	},
	//爱嘀嘉行情
	getTradingDetails(data) {
		return fetch.post("Packet/getTradingDetails", { ...data
		}, false, "");
	},
	
	
	
};
