/*
包含多个由action触发去直接更新状态的方法的对象
*/
import {CREATED_CODE,SELECT_ALL,DEL,ALL_PRICE,SELECT_ONE,ALL_NUM} from "./mutation-type";
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
	
	//单选按钮
	[SELECT_ONE](state,{k}){
		if (event.currentTarget.checked) {//如果选中则添加到选中数组中
			state.allSelectedBuys.push(state.buyList[k])
			allPrice()//计算总价
			allnum()//计算数量
		} else {
			for (var i = 0; i < state.allSelectedBuys.length; i++) {//当取消选中是，要从数组中减去这个成员
				if (state.buyList[k].id === state.allSelectedBuys[i].id) {
					state.allSelectedBuys.splice(i, 1);
					state.allSelect = false;
					break;
				}
			}
			allPrice()//计算总价
			allnum()//计算数量
		}
		function allPrice(){
			state.allPrice = 0
			for (let j=0;j < state.allSelectedBuys.length;j++) {
				state.allPrice += state.allSelectedBuys[j].num * state.allSelectedBuys[j].price
			}
		}
		function allnum(){
			state.allNum = 0
			for(let i = 0;i<state.allSelectedBuys.length;i++){
				state.allNum += state.allSelectedBuys[i].num
			}
		}
	},
	//获取选择商品的总数量和总价格
	[ALL_NUM](state){//已经绑定了计数器，当计数器发生改变时，结算的总数量和总价格也会发生改变
		state.allNum = 0
		for(let i = 0;i<state.allSelectedBuys.length;i++){
			state.allNum += state.allSelectedBuys[i].num
		}
		state.allPrice = 0
		for (let j=0;j < state.allSelectedBuys.length;j++) {
			state.allPrice += state.allSelectedBuys[j].num * state.allSelectedBuys[j].price
		}
	},
	//购物车全选按钮
	[SELECT_ALL](state){
		let jdcheckbox = document.getElementsByClassName("jdcheckbox")
		state.allSelect = !state.allSelect
		if(state.allSelect){
			for(var i=0;i<jdcheckbox.length;i++){
				jdcheckbox[i].checked=true;
			}
			//event.currentTarget.checked表示点击完后该选择框的状态
			if (!event.currentTarget.checked) {
				state.allSelectedBuys = [];
			} else {
				state.allSelectedBuys = [];//先置空，然后再重新添加，不然数组里会有重复！因为有可能点击全选之前已经选择了几个单选按钮。也就是数组里已经添加过了对应的id。
				state.buyList.forEach((item, k) => {
					state.allSelectedBuys.push(item)
				})
			}
			allPrice()
			allnum()
		}else{
			for(var i=0;i<jdcheckbox.length;i++){
				jdcheckbox[i].checked=false;
			}
			state.allSelectedBuys = []
			state.allPrice = 0
			allPrice()
			allnum()
		}
		function allPrice(){
			state.allPrice = 0
			for (let j=0;j < state.allSelectedBuys.length;j++) {
				state.allPrice += state.allSelectedBuys[j].num*state.allSelectedBuys[j].price
			}
		}
		function allnum(){
			state.allNum = 0
			for(let i = 0;i<state.allSelectedBuys.length;i++){
				state.allNum += state.allSelectedBuys[i].num
			}
			console.log(state.allNum)
		}
		//console.log("全选按钮")
		//console.log(state.allSelectedBuys)
	},
	
	//购物车删除按钮
	[DEL](state,{k}) {
		if (!confirm("确认删除吗")) {
			window.event.returnValue = false;
		}
		else {
			console.log(1)
			 //如果该条信息已被选中
			if(state.allSelectedBuys.indexOf(state.buyList[k].id)!==-1){
			  var index = state.allSelectedBuys.indexOf(state.buyList[k].id);
			  console.log(index)
			  state.allSelectedBuys.splice(index,1);
			}
			state.buyList.splice(k, 1);
			console.log(state.allSelectedBuys)
		}
	},
	
}