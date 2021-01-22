import util from "@/common/util.js";
import fetch from "@/service/fetch";
const baseUrl = fetch.baseUrl
// 前台上传图片接口
function uploadImg(callback) {
	uni.chooseImage({
		count: 1, //默认9
		sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album', 'camera'], //从相册选择
		async success(res) {
			// console.log(res, config.imgUrl);
			uni.showLoading({
				title: "上传中",
				mask: true
			});
			console.log(uni.getStorageSync("token"))
			uni.uploadFile({
				// 需要上传的地址
				url: baseUrl + '/zb/User/uploadPic',
				// filePath  需要上传的文件
				filePath: res.tempFilePaths[0],
				name: 'file',
				formData: {
					token: uni.getStorageSync("token"),
				},
				success(res1) {
					// 显示上传信息
					let obj = {}
					res1.data.split(',').forEach(item => {
						let it = item.replace(/"/gi, '').replace(/{/gi, '').replace(/}/gi, '').split(':')
						obj[it[0]] = it[1]
					})
					console.log(obj)
					let message = obj.info
					//统一处理返回值
					if(obj.data){
						callback(obj.data)
					}else{
						util.Toast(`${message}`)
					}
				},
				complete: () => {
					uni.hideLoading()
				}
			});
		}
	});
}
module.exports = {
	uploadImg
}
