import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home/home.vue'
import Login from '../components/login/01-login.vue'
import codeLogin from '../components/login/02-code-login.vue'
import vaildCodeLogin from '../components/login/03-vaild-code-login.vue'
import Shop from '../components/shop/shop.vue'
import Buy from '../components/shop/pages/01-buy.vue'
import buyCar from '../components/shop/pages/02-buy-car.vue'
import confirmMessage from '../components/shop/pages/03-confirm-message.vue'
import personSpace from '../components/person-space/person-space.vue'

/* 个人中心路由 */
import personShouye from '../components/person-space/person-space-right/shouye.vue'
import personPurchase from '../components/person-space/person-space-right/Purchase.vue'
import personAddress from '../components/person-space/person-space-right/address.vue'
import personBuikPurchase from '../components/person-space/person-space-right/buik-Purchase.vue'
import personChangeCode from '../components/person-space/person-space-right/change-code.vue'
import personCoupon from '../components/person-space/person-space-right/coupon.vue'
import personFavorite from '../components/person-space/person-space-right/favorite.vue'
import personRefund from '../components/person-space/person-space-right/refund.vue'
/* 个人中心路由 */

/* 供货商界面 */
import Supplier from '../components/supplier/supplier.vue'
import index from '../components/supplier/supplier-select/index.vue'
import orderList from '../components/supplier/supplier-select/order/list.vue'
import orderSaled from '../components/supplier/supplier-select/order/saled.vue'
import supplyList from '../components/supplier/supplier-select/supply/list.vue'
import supplyRelease from '../components/supplier/supplier-select/supply/release.vue'
/* 供货商界面 */

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
	{//首页
	  path: '/',
	  name: 'home',
	  component:Home
	},
	{//登陆页面
	  path: '/login',
	  component:Login,
	  children:[
		{
			path:'',//path最左侧的/永远代表根路由
			name:'vaildCodeLogin',
			component:vaildCodeLogin
		},
		{
			path:'codelogin',        //省略写法，去掉斜杠
			name:'codeLogin',
			component:codeLogin
		},
	  ]	
	},
	{//商品详情页面
	  path: '/shop',
	  name: 'shop',
	  component:Shop
	},
	{//购物结算页面
	  path: '/buy',
	  component:Buy,
	  children:[
		  {
			 path:'',//path最左侧的/永远代表根路由
			 name:'buyCar',
			 component:buyCar 
		  },
		  {
			 path:'confirmMessage',
			 name:'confirmMessage',
			 component:confirmMessage 
		  },
	  ]
	},
	{//个人中心界面
	  path: '/personspace',
	  name: 'personSpace',
	  component:personSpace,
	  children:[
	  		  {
	  			 path:'/personspace/shouye',//path最左侧的/永远代表根路由
	  			 name:'personShouye',
	  			 component:personShouye 
	  		  },
	  		  {
	  			 path:'/personspace/Purchase',
	  			 name:'personPurchase',
	  			 component:personPurchase 
	  		  },
			  {
				 path:'/personspace/address',
				 name:'personAddress',
				 component:personAddress 
			  },
			  {
				 path:'/personspace/buikPurchase',
				 name:'personBuikPurchase',
				 component:personBuikPurchase 
			  },
			  {
				 path:'/personspace/changeCode',
				 name:'personChangeCode',
				 component:personChangeCode 
			  },
			  {
				 path:'/personspace/coupon',
				 name:'personCoupon',
				 component:personCoupon 
			  },
			  {
				 path:'/personspace/favorite',
				 name:'personFavorite',
				 component:personFavorite 
			  },
			  {
				 path:'/personspace/refund',
				 name:'personRefund',
				 component:personRefund 
			  },
			  
	  ]
	},
	{//供货商界面
	  path: '/supplier',
	  name:'Supplier',
	  component:Supplier,
	  children:[
		  {
			 path:'/supplier/index',//path最左侧的/永远代表根路由
			 name:'index',
			 component:index 
		  },
		  {
			 path:'/supplier/orderlist',//path最左侧的/永远代表根路由
			 name:'orderList',
			 component:orderList 
		  },
		  {
			 path:'/supplier/ordersaled',//path最左侧的/永远代表根路由
			 name:'orderSaled',
			 component:orderSaled 
		  },
		  {
			 path:'/supplier/supplylist',//path最左侧的/永远代表根路由
			 name:'supplyList',
			 component:supplyList 
		  },
		  {
			 path:'/supplier/supplyrelease',//path最左侧的/永远代表根路由
			 name:'supplyRelease',
			 component:supplyRelease 
		  },
		  
	  ]
	},

	]
})
