<template>
	<div class="top-nav-content">
		<div class="top-nav-wrap">
			<div class="top-title"><!-- 注册链接 -->
				<div class="top-title-text">欢迎来到农商平台</div>
				<div class="login-div" >
					<div class="login-div-text" id="login-div-text" v-show="this.$store.state.isShow" >
						<router-link to="/login">免注册登录</router-link><i class="iconfont icon-gongyingshangxinxi"></i>
					</div>
					 <el-dropdown id="user_is_login" style="display: none;"  @command="handleCommand" v-show="this.$store.state.isShow02"><!--  -->
					   <span class="el-dropdown-link">
						  <img :src="User.image" alt="" id="userimg">
					     {{User.username}}<i class="el-icon-arrow-down el-icon--right"></i>
					   </span>
					   <el-dropdown-menu slot="dropdown" >
						 <el-dropdown-item command="goPerson">个人中心</el-dropdown-item>
					     <el-dropdown-item command="cancel">注销账户</el-dropdown-item>
					   </el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
			<div class="top-ul">
					<el-menu  class="el-menu-demo" mode="horizontal"   @select="handleSelect">
						<el-menu-item index="1">首页</el-menu-item>
						<el-menu-item index="2">个人中心</el-menu-item>
						<el-menu-item index="3">供应商后台</el-menu-item>
						<el-submenu index="3">
						<template slot="title">我的工作台</template>
							<el-menu-item index="2-1">微信公众号</el-menu-item>
							<el-menu-item index="2-2">微信小程序</el-menu-item>
							<el-menu-item index="2-3">选项3</el-menu-item>
						</el-submenu>
					</el-menu>
			</div>
			
			
			<div class="title">
				<a href="/" target="" ><div alt="农商平台logo" title="农商平台官网" class="search-urls" ><img src="../../../resource/img/logo.png" alt="" class="header-index-img1 head-img-mr1" ></div></a>
			</div>
			
			<el-backtop  :bottom="100" :visibility-height="0" :right="50"><!-- 回到顶部对象 -->
				<div style="{height: 100%;background-color: #39bf3e;box-shadow: 0 0 6px rgba(0,0,0, .12);text-align: center;line-height: 40px;color: white;border-radius: 50% 50%;}">
					顶部
				</div>
			</el-backtop>
		</div>
		
		
	</div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
	name: '',
	data () {
    	return {
			activeIndex:'1',
			User:{
				username:'',
				img:""
			}
    	}
  	},
	computed: {
		...mapState(['currentUser']),
	},
	methods:{
		handleSelect(key, keyPath){
			if(key === '1' && this.$route.path !== '/'){//为了防止多次点击首页引起错误，也就是不能首页跳到首页
				this.$router.push('/')
			}
			if(key === '2' && (this.$route.path !== '/login' && this.$route.path !== '/personspace/shouye') ){//查看是否登陆,为了防止多次点击首页引起错误
				//console.log(this.$route.path)//保存的是上一个路由，所以可以防止多次点击引起错误
				if(this.$store.state.isLogin === true && this.$store.state.currentUser){//这里不仅要要求是登陆状态，
					if(this.$store.state.currentUser.role === 1){//说明role是普通用户
						this.$router.push('/personspace/shouye')
					}
				}else{
					this.$router.push('/login')
				}
			}
			if(key === '3' && this.$route.path !== '/supplier'){//为了防止多次点击首页引起错误，也就是不能首页跳到首页
				this.$router.push('/supplier')
			}
		},
		handleCommand(command){
			if(command === 'cancel'){
				localStorage.setItem("currentUser",null)//登出的时候，清空sessionStorage里的东西
				this.$store.dispatch('setUser',null)     //store清空
				this.User = {}
				this.$store.state.isShow = true
				this.$store.state.isShow02 = false
				window.location.href ="/"
				//this.$router.push('/')
			}else if(command === 'goPerson' && this.$route.path !== '/personspace/shouye'){
				if(this.$store.state.isLogin === true && this.$store.state.currentUser){//这里不仅要要求是登陆状态，
					if(this.$store.state.currentUser.role === 1){//说明role是普通用户
						this.$router.push('/personspace/shouye')
					}
				}else{
					console.log(this.$route.path)
					//this.$router.push('/login')
				}
			}
			
		}
	},
	mounted() {
		if(this.$store.state.isLogin === true && this.$store.state.currentUser){//这里不仅要要求是登陆状态，
			if(this.$store.state.currentUser.role === 1){//说明role是普通用户
				this.User = this.$store.state.currentUser
			}
		}
		
	}
}
</script>

<style lang="scss" scoped>
.top-nav-content{
		position: relative;
		height: 34px;
		width: 100%;
		background-color: #fff;
		border-bottom: 1px solid #e6e6e6;
		.top-nav-wrap{
			position: relative;
			width: 1200px;
			margin: 0 auto;
			height: 34px;
			background-color: #fff;
			border-bottom: 1px solid #eee;
			@mixin t1 {/* 头部的登陆样式混合器 */
				display: inline-block;
				font-family: MicrosoftYaHei;
				font-family: PingFangSC-Regular;
				font-size: 12px;
				letter-spacing: 0;
			}
			.top-title{/* 头部的登陆样式 */
				@include t1;
				height: 35px;
				width: auto;
				line-height: 30px;
				.top-title-text{
					@include t1;
					display: inline-block;
					font-family: MicrosoftYaHei;
					font-family: PingFangSC-Regular;
					font-size: 12px;
					letter-spacing: 0;
				}
				.login-div{
					@include t1;
					font-size: 16px;
					position: relative;
					margin-left: 5px;
					color: #ff862c;
					img{
						position: relative;
						top: 2px;
						display: inline-block;
						height: 15px;
						width: 15px;
					}
					>>>.el-dropdown {
					    font-size: 16px;
					  }
					 .el-dropdown-link {
					    cursor: pointer;
					    color: #ff862c;
						
					  }
					 
					.login-div-text{
						cursor: pointer;
						position: relative;
						display: inline-block;
						a{
							text-decoration: none;
							color: #ff862c;
						}
						i{
							float: right;
							margin-left: 8px;
							margin-top: 1px;
						}
					}
				}
			}
			
			.top-ul{/* 头部的个人中心 */
				position: absolute;
				height: 34px;
				right: 0;
				display: inline-block;
				>>>.el-menu.el-menu--horizontal{
					height: 34px;
					line-height: 31px;
					
					.el-menu-item.is-active{
						color: #ff862c;
						border-bottom: 2px solid #ff862c;
					}
					.el-menu-item,.el-submenu{
						height: 34px;
						line-height: 31px;
						&:hover{
							color:#ff862c ;
						}
					}
					.el-submenu{
						.el-submenu__title{
							height: 34px;
							line-height: 31px;
							&:hover{
								color:#ff862c ;
							}
						}
					}
				}
			}
				
				
			.title{/* 农商平台logo */
				display: -webkit-box;
				display: flex;
				-webkit-box-align: center;
				align-items: center;
				a{
					text-decoration: none;
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #333;
					letter-spacing: 0;
					.search-urls{
						width: 260px;
						height: 123px;
						position: relative;
						left: 0;
						display: inline-block;
						cursor: pointer;
						img{
							position: absolute;
							top: 20px;
							height: 80px;
							width: 88px;
						}
					}
				}
			}
		}
}
	
</style>
