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
	 buyList:[],
	 allNum:0,				//选中商品的数量
	 onePrice:0,
	 allPrice:0,			//选中的商品的总价	
	 carShop:{},			//所有购物车中的商品
	 /* 购物列表结束 */
	/* 用户登陆状态开始*/
	currentUser:{},
	isLogin:false,
	token:"",
	isShow:true,//默认显示，登陆以后不显示
	isShow02:false,//默认不显示，登陆以后显示
	//userInfo: JSON.parse(localStorage.getItem("userInfo")),
	/* 用户登陆状态结束 */
	/* 商品详情 */
	currentPage:1,
	pageSize:8, //请求商品的数量
	/* 商品详情 */
	/* 用户修改地址信息 */
	changeAddress:{
		consignee: '',
		detailed: '',
		id:'',
		phone: '',
		region: '',
		selected: 0
	},
	tableData:[],//用户所有地址
	/* 用户修改地址信息 */
	/* 查看订单状态 */
	saledStatus:0
	/* 查看订单状态 */
}