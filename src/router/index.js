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

Vue.use(Router)

export default new Router({
  routes: [
	{
	  path: '/',
	  name: 'home',
	  component:Home
	},
	{
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
	{
	  path: '/shop',
	  name: 'shop',
	  component:Shop
	},
	{
	  path: '/buy',
	  component:Buy,
	  children:[
		  {
			 path:'',//path最左侧的/永远代表根路由
			 name:'buyCar',
			 component:buyCar 
		  },
		  {
			 path:'',
			 name:'confirmMessage',
			 component:confirmMessage 
		  },
	  ]
	},
	
  ]
})
