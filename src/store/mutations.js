/*
包含多个由action触发去直接更新状态的方法的对象
*/
import {CREATED_CODE,SELECT_ALL,DEL,ALL_PRICE,
SELECT_ONE,ALL_NUM,USER_STATUS,SEARCH_SHOP} from "./mutation-type";
//从mutation-type传过来的是小写的变量而且是字符串，传导mutation的时候，
// 为了将字符串换为变量，要使用[]的方式调用

export default {
	
	//创建验证码
	[CREATED_CODE](state){
			state.codeList=[]
		  let len = 4,
		  chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789',
		  charsLen = chars.length
		// 生成
		for (let i = 0; i < len; i++) {
		  let rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)]
		  state.codeList.push({
		    code: chars.charAt(Math.floor(Math.random() * charsLen)),
		    color: `rgb(${rgb})`,
		    fontSize: `1${[Math.floor(Math.random() * 10)]}px`,
		    padding: `${[Math.floor(Math.random() * 10)]}px`,
		    transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
		  })
		}
		//获取生成的验证码
		state.checkCode = state.codeList.map(item => item.code).join('')
	},
	//获取选择商品的总数量和总价格

	/* 更改用户状态信息 */
	[USER_STATUS](state,user){
		if(user.user){
			state.currentUser = user.user
			state.isLogin = true
			state.isShow = false
			state.isShow02 = true
		}else if(user.user === null){
			//登出的时候，清空sessionStorage里的东西
			localStorage.setItem("currentUser",null)
			state.currentUser = null
			state.isLogin = false
			state.token = ""
		}
	},
	/* 更改用户状态信息 */
	/* 搜索商品*/
	[SEARCH_SHOP](state,key){
	
	}
	 /* 搜索商品 */
	
}