// import JSEncrypt from 'jsencrypt'
import jiuaiDebounce from './jdk.js'

// function RSAEncryptLong(d) {
// 	d = encodeURIComponent(d);
// 	let encrypt = new JSEncrypt();
// 	let publicKey =
// 		'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIORadwfUB2cV6Eh2xR6+9WvbN4+qk8gXqzdCj9K1EvHdFbI8BuPYnCGNSKcJPZ5A5hc937LPDJX08hlHCnB5odx2diGA32x/51ttUKITljq8vwvLiG6aF+SUKLz+b8SnvljjTSG6H4F2bfNTU+q/4VjlAiiYahKRzaBGwLtauMtAgMBAAECgYAjtD2PH+xE7N2W+7IRX8Kh3aZktYrQSE+JB781J+Bu5CS9PHB0ejfTo4gd6VPak0KXgXskrJCcdNsjQdUfu+AMMvrY4yQ3PCvJMIXomoczHzbfXu9oNtMwJAyNVtT7NKmHOZq9rqGnbIy/i1VXRX16heKpsHP/05O2/n/4lVqwgQJBANRyjXx43cNQc8HLttfnJVqYjOOkLSp0Uu+DiZCR8kLIRn8uiWwggudvlyaUeCzi3xjSXtlekg2ubulu7R+OSmECQQCeijrJU+SLMQk5AJpv0cQwu6T5QC7iU0RlPeaK6a2NiwQWazOZWBgpzEBJ1pX1Xv32KM2uu5n6Y+qGJABslQRNAkByVgBtmAMJ5deW2hNamS0SV/2jWi1wptAn1WwI4XM3m9/M/Pe6uLia5AS+H7OZvLQDAN1JMUt7j4Bjo258yDChAkEAks1yo+w/6zeLz7GkT7iQj4Ohvn9VKpNp+Ml5ydWZtEAul8fKbsrpDQMp4HWIRD4isaaU1qC2cunER1Pc5K6T3QJAZZ/so1INq0aziRRHg7o0+2+BwsLcJnbsx9NRJPvDUnxMjzzlWXsI6icEv62OQn7O9VsKHJM0MATnqMPHNYAhyQ=='
// 	encrypt.setPublicKey(publicKey);
// 	let maxLength = 117;
// 	try {
// 		let lt = "";
// 		let ct = "";

// 		if (d.length > maxLength) {
// 			lt = d.match(/.{1,117}/g);
// 			lt.forEach(function(entry) {
// 				let t1 = encrypt.encrypt(entry);
// 				ct += t1;
// 			});
// 			return ct
// 		}
// 		let t = encrypt.encrypt(d);
// 		let y = t
// 		return y;
// 	} catch (ex) {
// 		return false;
// 	}
// }

function preventReClick(key, callback) {
	jiuaiDebounce.canDoFunction({
		key, //基于此值判断是否可以操作，如两个方法传入了同样的key，则会混淆，建议传入调用此事件的方法名，简单好梳理
		time: 2000, //如果传入time字段，则为定时器后，自动解除锁定状态，单位（毫秒）
		success: () => { //成功中调用应该操作的方法，被锁定状态不会执行此代码块内的方法
			// console.log('我被点击了')
			callback && callback()
		}
	})
}

function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function(n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function newFormatTime(time, type) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}
	const newDate = new Date(time);
	const year = newDate.getFullYear();
	const month = transform(newDate.getMonth() + 1);
	const day = transform(newDate.getDate());
	const hour = transform(newDate.getHours());
	const minute = transform(newDate.getMinutes());
	const second = transform(newDate.getSeconds());
	if (!type) {
		return year + '年' + month + '月' + day + '日';
	} else if (type == 1) {
		return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
	}
}

function transform(n) {
	n = n.toString()
	return n[1] ? n : '0' + n;
}

function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}

var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function(milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function(dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function(number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDay()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};

//获取cookie、
function getCookie(name) {
	let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)) {
		return (arr[2]);
	} else {
		return null;
	}
}

/*
 *  cookie
 */
//设置cookie,增加到vue实例方便全局调用
function setCookie(c_name, value) {
	const expiredays = 1000 * 24 * 60 * 60 * 7;
	let exdate = new Date();
	exdate.setTime(exdate.getTime() + expiredays);
	document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
};
// 删除cookie
function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};

// 隐藏
function tubiao() {
	/* 隐藏凸起图标 */
	var icon = plus.nativeObj.View.getViewById("icon");
	setTimeout(function() {
		icon.hide();
	}, 100);
};
//提示

function Toast(title, position) {
	// #ifdef APP-PLUS
	plus.nativeUI.toast(title, {
		verticalAlign: position
	});
	// #endif
	// #ifdef H5
	uni.showToast({
		title: title,
		duration: 2000,
		icon: 'none',
		position: position
	});
	// #endif
	// #ifdef MP-WEIXIN
	uni.showToast({
		title: title,
		duration: 2000,
		icon: 'none',
		position: position
	});
	// #endif
};
// 页面跳转
function navigateTo(url) {
	// 小程序跳转
	// #ifdef MP-WEIXIN
	uni.redirectTo({
		url
	});
	// #endif
	// app跳转
	// #ifdef APP-PLUS
	uni.navigateTo({
		url
	});
	// #endif
}
//音频播放
function playVoice(voicePath) {
	preventReClick('playVoice', () => {
		const innerAudioContext = uni.createInnerAudioContext();
		innerAudioContext.src = voicePath;
		innerAudioContext.play();
	})
}
//关闭音频
function Stop_playVoice() {
	innerAudioContext.stop();
}
// 分享
function share(data, callback) {
	const {
		provider,
		scene,
		type,
		title,
		href,
		imageUrl
	} = data
	/*
	typ值
	0	图文	weixin、sinaweibo
	1	纯文字	
	2	纯图片	
	3	音乐	weixin、qq
	4	视频	weixin、sinaweibo
	5	小程序	weixin
	
	scene 值
	WXSceneSession	分享到聊天界面
	WXSenceTimeline	分享到朋友圈
	WXSceneFavorite	分享到微信收藏
	*/
	uni.share({
		provider,
		scene,
		type,
		title,
		href,
		imageUrl,
		success: res => {
			callback && callback(res)
		},
		fail: () => {},
		complete: () => {}
	});
}
/*
 * 浮点型数据进行乘法运算
 * @param
 * @return
 * @exception/throws
 * @deprecated
 */
function FloatMul(arg1, arg2) {
	var m = 0,
		s1 = arg1.toString(),
		s2 = arg2.toString();

	try {
		m += s1.split(".")[1].length;
	} catch (e) {}

	try {
		m += s2.split(".")[1].length;
	} catch (e) {}

	return (
		(Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
		Math.pow(10, m)
	);
}


module.exports = {
	formatTime: formatTime,
	formatLocation: formatLocation,
	dateUtils: dateUtils,
	newFormatTime: newFormatTime,
	getCookie: getCookie,
	setCookie: setCookie,
	delCookie: delCookie,
	Toast: Toast,
	navigateTo: navigateTo,
	share: share,
	tubiao: tubiao,
	playVoice: playVoice,
	Stop_playVoice: Stop_playVoice,
	preventReClick: preventReClick,
	FloatMul:FloatMul

}
