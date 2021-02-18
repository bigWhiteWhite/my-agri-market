/*状态对象*/
export default {
	/* 验证码开始 */
	codeList: [],
	form: {
	        phone: "",
	        vaildCode: "",
	        seccode:""
	},
	checkCode:'',
	rules: {
		phone: [{ required: true, message: "手机号", trigger: "blur" }],
		vaildCode: [{ required: true, message: "请输验证码", trigger: "blur" }],
		seccode: [{ required: true, message: "请输短信验证码", trigger: "blur" }],
    }, 
	/* 验证码结束 */
	
	/* 购物步骤条开始 */
	buyActive:1,
	/* 购物步骤条结束 */
	
	 /* 购物列表开始 */
	 allSelect:false,//是否全选
	 //所有购物车商品
	 buyList:[{id:"0",title:"酒街网旗舰店",name:"茅台",message:"茅台 集团 习酒 银质 53度 500ml*6瓶 整箱装白酒 口感酱香型",price:888.00,num:1,img:"//img30.360buyimg.com/n0/s80x80_jfs/t1/153946/10/17967/158938/6022003bE13c0b2e1/ae038d988dc95ae5.jpg.dpg"},
			  {id:"1",title:"OKSJ手机旗舰店",name:"华为nova8 5G手机",message:"华为nova8 5G手机【春节正常送】全网通智能 亮黑色 8G+128G",price:3879.00,num:1,img:"https://img30.360buyimg.com/n0/s80x80_jfs/t1/169577/19/6089/405539/6020ee05Ef760ec59/da0294828529482c.jpg.dpg"},
	 ],
	 allNum:0,				//选中商品的数量
	 allSelectedBuys: [],	 //选中的购物车商品
	 onePrice:0,
	 allPrice:0,			//选中的商品的总价	
	 /* 购物列表结束 */
	
}