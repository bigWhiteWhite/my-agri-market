import {CREATED_CODE,SELECT_ALL,DEL,ALL_PRICE,SELECT_ONE,ALL_NUM} from './mutation-type'
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
}