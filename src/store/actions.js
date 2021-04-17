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
		let jdcheckbox = document.getElementsByClassName("jdcheckbox")
		this.state.allSelect = !this.state.allSelect
		if(this.state.allSelect){
			for(var i=0;i<jdcheckbox.length;i++){
				jdcheckbox[i].checked=true;
			}
			isAllSelect(1)
			this.state.allNum = this.state.carShop.length
		}else{
			for(var i=0;i<jdcheckbox.length;i++){
				jdcheckbox[i].checked=false;
			}
			isAllSelect(0)
			this.state.allNum = 0
		}
		function isAllSelect(selected){
			var params = new URLSearchParams
			params.append('selected',selected)
			$axios.post('/cart/checkAll',params)
			.then(res=>{
				console.log(res)
			})
			.catch(err=>{
				console.log(err)
			})
		}
	},
	//购物车删除按钮
	del({commit},productId) {
		var params = new URLSearchParams
		let jdcheckbox = document.getElementsByClassName("jdcheckbox")
		params.append('productId',productId)
		$axios.post('/cart/delete',params)
		.then(res=>{
			this.state.carShop = res.data.data
			//console.log(this.state.carShop)
			for(var i=0;i<jdcheckbox.length;i++){
				jdcheckbox[i].checked=false;
			}
		})
		.catch(err=>{
			console.log(err)
		})
	},
	//单选按钮
	selectOne({commit},data){
		let selected = 0
		event.currentTarget.checked?selected = 1:selected = 0//判断是否勾选
		var params =new URLSearchParams
		params.append('productId',data.productId)
		params.append('selected',selected)
		$axios.post('/cart/check',params)
		.then(res=>{
			this.state.carShop = res.data.data
			let checkItem = document.getElementsByName("checkItem")
			let selectAll = document.getElementsByName("select-all")
			checkItem.forEach(item=>{
				if(item.checked === false){
					this.state.allSelect=false
					selectAll[0].checked = false
					selectAll[1].checked = false
					return
				}
			})
			this.dispatch('allPrice')		//计算购物车总价
			
			this.state.allNum = 0//置空购物车的数量
			this.state.carShop.forEach((item,index)=>{//很重要，循环遍历购物车，判断谁的selected是1，改变单选框的状态
				if(item.selected === 1){
					checkItem[index].checked = true
					this.state.allNum +=1
				}else{
					checkItem[index].checked = false
				}
			})
		})
		.catch(err=>{
			console.log(err)
		})
		
		
	},
	//所有选中商品和总价
	allPrice({commit}){
		$axios.post('/cart/totalPrice')
		.then(res=>{
			//console.log(res)
			this.state.allPrice = res.data.data/100
		})
		.catch(err=>{
			console.log(err)
		})
	},
	//所选商品数量
	myallNum({commit},data){
		/* console.log(data.count)
		console.log(data.productId) */
		var params = new URLSearchParams
		params.append('count',data.count)
		params.append('productId',data.productId)
		$axios.post('/cart/update',params)
		.then(res=>{
			//console.log(res)
			if(res.data.status === 10016){
				return alert("库存不足")
			}else{
				this.state.carShop = res.data.data
				this.dispatch('allPrice')		//计算购物车总价
			}
			
		})
		.catch(err=>{
			console.log(err)
		})
	},
	/* 购物列表结束 */
	/* 修改用户状态 */
	setUser({commit},user){
		commit(USER_STATUS,{user})
	},
	/* 修改用户状态 */
	/* 获取地址列表 */
	addressList(){//获取用户所有地址
		$axios.get('/user/info/list')
		.then(res=>{
			//console.log(res.data.data)
			this.state.tableData = res.data.data
			
		})
		.catch(err=>{
			console.log(err)
		})
	}
	/* 获取地址列表 */
}