
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/index/index","pages/order/order","pages/news/news","pages/mine/mine","pages/login/policy","pages/login/protocol","pages/login/forget_pwd","pages/login/success","pages/order/brand","pages/mine/updateLogin","pages/mine/kefu"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"美容院","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#999999","selectedColor":"#333333","borderStyle":"black","backgroundColor":"#FFFFFF","spacing":"5px","fontSize":"12px","iconWidth":"19px","list":[{"pagePath":"pages/index/index","text":"主頁","iconPath":"static/bar_icon/zhuye.png","selectedIconPath":"static/bar_icon/sel_zhuye.png"},{"pagePath":"pages/order/order","text":"預約","iconPath":"static/bar_icon/yuyue@2x.png","selectedIconPath":"static/bar_icon/sel_yuyue.png"},{"pagePath":"pages/news/news","text":"收件匣","iconPath":"static/bar_icon/xiaoxi.png","selectedIconPath":"static/bar_icon/sel_xiaoxi@2x.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"static/bar_icon/my.png","selectedIconPath":"static/bar_icon/sel_my.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"beautySalon","compilerVersion":"2.9.8","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarTitleText":"登錄"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首頁"}},{"path":"/pages/order/order","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"預約"}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"收件匣"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/login/policy","meta":{},"window":{"navigationBarTitleText":"隱私政策","enablePullDownRefresh":false}},{"path":"/pages/login/protocol","meta":{},"window":{"navigationBarTitleText":"用戶協議","enablePullDownRefresh":false}},{"path":"/pages/login/forget_pwd","meta":{},"window":{"navigationBarTitleText":"忘記密碼","enablePullDownRefresh":false}},{"path":"/pages/login/success","meta":{},"window":{"navigationBarTitleText":"修改成功","enablePullDownRefresh":false}},{"path":"/pages/order/brand","meta":{},"window":{"navigationBarTitleText":"預約療程","enablePullDownRefresh":false}},{"path":"/pages/mine/updateLogin","meta":{},"window":{"navigationBarTitleText":"修改密碼","enablePullDownRefresh":false}},{"path":"/pages/mine/kefu","meta":{},"window":{"navigationBarTitleText":"聯繫客服","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
