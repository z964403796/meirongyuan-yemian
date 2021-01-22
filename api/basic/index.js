import fetch from "@/service/fetch";
export const Basic = {
  //注册
  register(data) {
    return fetch.post("Reg/add", { ...data }, false, "");
  },
  //服务协议条款
  protocol(data) {
    return fetch.post("Reg/zhuceXieyi", { ...data }, false, "");
  },
  //忘记密码
  retrievePwdPhone(data) {
    return fetch.post("Login/findpwd", { ...data }, false, "");
  },
  //登录
  login(data) {
    return fetch.post("Login/check", { ...data }, false, "");
  },
  //获取助记词
  getZhujici(data) {
    return fetch.post("Login/getZhujici", { ...data }, false, "");
  },
  //设置或验证助记词
  setOrVerify(data) {
    return fetch.post("Login/setOrVerify", { ...data }, false, "");
  },
  
};
