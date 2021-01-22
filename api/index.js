/*
  请求入口文件
*/
import {Basic} from "./basic/index";
import {Mine} from "./mine/index";
import {Index} from "./index/index";
import {News} from "./news/index";
import {Order} from "./order/index";
export const Api = {
	...Basic,
	...Mine,
	...News,
	...Index,
	...Order,

};
