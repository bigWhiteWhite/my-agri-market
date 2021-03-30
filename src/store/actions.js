import {CREATED_CODE,SELECT_ALL,DEL,
ALL_PRICE,SELECT_ONE,ALL_NUM,USER_STATUS,SEARCH_SHOP} from './mutation-type'
import $axios from 'axios'
import Router from '../router/index.js'
export default {
	
	//创建验证码
	createdCode({commit}){
		commit(CREATED_CODE)
	},
	/* 购物列表开始 */
	//点击全选按钮
	selectAll({commit}) {
		commit(SELECT_ALL)
	},
	//删除按钮
	del({commit},k) {
		commit(DEL,{k})
	},
	//单选按钮
	selectOne({commit},k){
		commit(SELECT_ONE,{k})
	},
	//所有选中商品的数量和总价
	myallNum({commit}){
		commit(ALL_NUM)
	},
	/* 购物列表结束 */
	/* 修改用户状态 */
	setUser({commit},user){
		commit(USER_STATUS,{user})
	},
	/* 修改用户状态 */
	
}