// import config from "@/config/index.js";
const baseUrl = 'http://aidijiatec.cc'
import util from "@/common/util.js";
// import {
// 	RSA
// } from '@/common/rsa.js';
import Vue from 'vue'
/**
 * 请求数据封装方法
 * @param method 请求方式 GET POST PUT
 * @param url 请求地址（login/login）
 * @param data 请求对象
 * @param loading 是否展示loading
 * @param loadingTitle 展示loading文字
 * @returns {Promise<unknown>}
 */
function fetch(method, url, data, loading, loadingTitle) {
	// console.log(url)
	return new Promise((resolve, reject) => {
		//显示加载动画
		if (loading) {
			// uni.showLoading({
			// 	title: loadingTitle,
			// 	mask: true
			// });
		}
		//获取token
		const params = {}
		let me_id = uni.getStorageSync("member_id") ? uni.getStorageSync("member_id") : '';
		// console.log(me_id, RSA)
		// data.me_id = me_id
		// console.log(data)
		// params.str = RSA.RSAEncryptLong(JSON.stringify(data));
		// if (/==/.test(params.str)) {
		// 	 params.str =  params.str.slice(0,  params.str.indexOf('=') + 1)
		// }
		// console.log(params.str)
		let token = uni.getStorageSync("token") ? uni.getStorageSync("token") : '';
		// let obj = {
		// 	token,
		// 	me_id
		// }
		// data.token = token
		// console.log(params)
		//添加token
		// Object.assign(params, data)
		// Object.assign(params, obj)
		//发起请求
		// console.log({
		// 	me_id,
		// 	token,
		// 	...data
		// })
		uni.request({
			url,
			method,
			data: {
				member_id: me_id,
				token,
				...data
			},
			header: {
				// 数据被编码为名称/值对
				"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
			},
			success: res => {
				// console.log(res)
				let code = res.data.status
				let message = res.data.info

				// console.log(res)
				//结束加载动画
				//统一处理返回值
				if (loading) {
					setTimeout(() => {
						switch (Number(code)) {
							case 1:
								resolve(res.data.data)
								break;
							case -998:
								util.Toast('您的账号已离线,请重新登录');
								setTimeout(() => {
									uni.reLaunch({
										url: "/pages/login/login"
									})
								}, 1500)
								uni.hideLoading();
								break;
							case -999:
								util.Toast('您的账号已离线,请重新登录');
								setTimeout(() => {
									uni.reLaunch({
										url: "/pages/login/login"
									})
								}, 1500)
								uni.hideLoading();
								break;
							case -5:
								uni.showModal({
									title: '',
									content: message,
									confirmText: "知道了",
									success: function(res) {

									}
								});
								break;
							case -2:
								resolve(res.data)
								util.Toast(`${message}`)
								uni.hideNavigationBarLoading()
								break;
								case -555:
									resolve(res.data)
									util.Toast(`${message}`)
									uni.hideNavigationBarLoading()
									break;
							default:
								util.Toast(`${message}`)
								uni.hideNavigationBarLoading()
								break;
						}
					}, 500)
				} else {
					switch (Number(code)) {
						case 1:
							resolve(res.data.data)
							break;
						case -998:
							util.Toast('您的账号已离线,请重新登录');
							setTimeout(() => {
								uni.reLaunch({
									url: "/pages/login/login"
								})
							}, 1500)
							uni.hideLoading();
							break;
						case -999:
							util.Toast('您的账号已离线,请重新登录');
							setTimeout(() => {
								uni.reLaunch({
									url: "/pages/login/login"
								})
							}, 1500)
							uni.hideLoading();
							break;
						case -5:
							uni.showModal({
								title: '',
								content: message,
								confirmText: "知道了",
								success: function(res) {

								}
							});
							break;
						case -2:
							resolve(res.data)
							util.Toast(`${message}`)
							uni.hideNavigationBarLoading()
							break;
							case -555:
								resolve(res.data)
								util.Toast(`${message}`)
								uni.hideNavigationBarLoading()
								break;
						default:
							util.Toast(`${message}`)
							uni.hideNavigationBarLoading()
							break;
					}
				}
			},
			fail: err => {
				reject(err);
			},
			complete: () => {
				setTimeout(function() {
					uni.stopPullDownRefresh(); //停止下拉刷新动画	
				}, 500);
				if (loading) {
					// setTimeout(() => {
					// 	uni.hideLoading();
					// }, 500)
				}
			}
		});
	})
}
export default {
	get(url, params, loading, loadingTitle) {
		return fetch('GET', baseUrl + '/zb/' + url, params, loading, loadingTitle)
	},
	post(url, params, loading, loadingTitle) {
		return fetch('POST', baseUrl + '/zb/' + url, params, loading, loadingTitle)
	},
	put(url, params, loading, loadingTitle) {
		return fetch('PUT', baseUrl + '/zb/' + url, params, loading, loadingTitle)
	},
	baseUrl
}
