<template>
	<div class="content">
		<div class="title">
			<a href="/" target="" ><div alt="农商平台logo" title="农商平台官网" class="search-urls" ><img src="../../../resource/img/logo.png" alt="" class="header-index-img1 head-img-mr1" ></div></a>
		</div>
		<!-- 顶端搜索框 -->
		<div class="search">
			<div class="search-select">
				 <Dropdown><a>搜索商品<i class="iconfont icon-kucunguanli"></i></a></Dropdown>
			</div>
			<div class="search-text">
				<i class="iconfont icon-sousuo" ></i>
				<input type="text" placeholder="搜索您要的货品" v-model="keyword" class="search-text-models" >
			</div>
			<a class="search-buttn" @click="goSearch(keyword)">搜索</a>
		</div>
		<!-- 二维码图片 -->
		<div class="qr">
			<img src="../../../resource/img/logo.png" alt="">
			<div class="head-qr-text" >手机惠农网</div>
		</div>
		
		<!-- 顶端下拉搜索框，滚动超过一定距离才显示-->
		<div class="top-fix" v-show="showFixedSearch">
			<div  class="search-content">
				<router-link to="/"><img  src="http://localhost:8080/static/img/logo.6705a9a.png" alt="" class="search-img"></router-link>
				<div  class="search-div">
					<div>
						<div  class="search-select">
							<Dropdown>
							        <a href="javascript:void(0)">
							            搜索商品
							           <i class="iconfont icon-kucunguanli"></i>
							        </a>
							</Dropdown>
						</div> 
						<div  class="search-text">
							<i  class="iconfont icon-sousuo"></i> 
							<input  type="text" placeholder="搜索您要的货品" class="search-text-models" v-model="keyword">
						</div> 
						<a  class="search-button" @click="goSearch(keyword)">搜索</a>
					</div>
				</div>
				<div  class="user-login">
					<div class="login-div-text02" id="login-div-text02" v-show="this.$store.state.isShow">
						<router-link to="/login">免注册登录</router-link>
					</div>
					<div  class="top-title-text">欢迎来到农商平台</div>
					<el-dropdown id="user_is_login02" style="display: none;"  @command="handleCommand" v-show="this.$store.state.isShow02"> <!--  -->
					   <span class="el-dropdown-link">
						  <img :src="User.image" alt="" id="userimg02">
					     {{User.username}}<i class="el-icon-arrow-down el-icon--right"></i>
					   </span>
					   <el-dropdown-menu slot="dropdown" >
						 <el-dropdown-item command="goPerson">个人中心</el-dropdown-item>
					     <el-dropdown-item command="cancel">注销账户</el-dropdown-item>
					   </el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: '',
	data () {
    	return {
      		showFixedSearch:false,
			User:{
				username:'',
				img:""
			},
			keyword:"",
			oldKey:""
    	}
  	},
	watch:{
		
	},
	methods:{
		handleCommand(command){
			if(command === 'cancel'){
				localStorage.setItem("currentUser",null)//登出的时候，清空sessionStorage里的东西
				this.$store.dispatch('setUser',null)     //store清空
				this.User = {}
				console.log("注销以后"+ this.$store.state.currentUser)
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
					this.$router.push('/login')
				}
			}
			
		},
		 showSearch() {
			 // 获取当前滚动条向下滚动的距离
			 let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			 // 当页面滚动到高度300px处时，显示搜索框
			 if (scrollTop > 300) {
				 this.showFixedSearch = true;
			 } else {
				 this.showFixedSearch = false;
			 }
		 },
		 goSearch(a){/* 搜索功能 */
			this.$router.push({name:'Supply',query:{'name':''}})
			this.$router.push({name:'Supply',query:{'name':this.keyword}})
		 }
	},
	mounted() {
			// 监听页面滚动事件
			window.addEventListener("scroll", this.showSearch)
			
			if(this.$store.state.isLogin === true && this.$store.state.currentUser){//这里不仅要要求是登陆状态，
				if(this.$store.state.currentUser.role === 1){//说明role是普通用户
					this.User = this.$store.state.currentUser
				}
			}
	}
}
</script>

<style lang="scss" scoped>
@mixin s1 {
		position: absolute;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		display: -webkit-box;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		color: #999;
		letter-spacing: 0;
		top: 0;
		left: 101px;
		width: 460px;
		height: 40px;
		border: 2px solid #39bf3e;
		border-left: none;
	}
	@mixin s2 {
		outline: none;
		position: relative;
		border: none;
		width: 432px;
		margin-left: 10px;
		height: 36px;
		font-size: 16px;
		display: inline-block;
		overflow: hidden;
	}
	@mixin s3 {
		position: absolute;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		top: 0;
		height: 40px;
		width: 100px;
		left: 560px;
		background-color: #39bf3e;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #fff;
		letter-spacing: 0;
		display: inline-block;
		text-align: center;
		line-height: 44px;
	}
	@mixin s4 {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		letter-spacing: 0;
		position: relative;
		height: 40px;
		width: 101px;
		border: 2px solid #39bf3e;
		border-right: 1px solid #ddd;
		display: inline-block;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		.ivu-dropdown{
			position: relative;
			top: 5px;
			left: 10px;
			a{
				color: #39bf3e;
			}
			.ivu-select{
				position: relative;
				z-index: 99;
				li{
					color: #39bf3e;
				}
			}
		}
	}
.content{
	height: 122px;
	position: relative;
	display: -webkit-box;
	display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	margin: 0 auto;
	width: 1200px;
	background-color: #fff;
	.title{
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
	/* 顶端搜索框 */
	.search{
		position: relative;
		left: -150px;
		width: 650px;
		height: 40px;
		margin-top: 41px;
		z-index: 99;
		display: inline-block;
		button, input, textarea {
			color: inherit;
			font: inherit;
		}
		.search-select{
			@include s4
		}
		.search-text{
			@include s1
			i{
				color: #909090;
				margin-left: 10px;
			}
			.search-text-models{
				@include s2
			}
		}
		.search-buttn{
			@include s3
		}
	}
	/* 顶端下拉搜索框 */
	.top-fix{
		@mixin b1 {
			height: 60px;
			display: -webkit-box;
			display: flex;
		}
		@include b1;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 100%;
		-webkit-box-pack: center;
		justify-content: center;
		background-color: #fff;
		box-shadow: 0 4px 10px 0 rgba(89,99,84,.1);
		.search-content{
			@include b1;
			position: relative;
			width: 1200px;
			img{
				height: 46px;
				margin-top: 7px;
			}
			.search-div{
				position: relative;
				margin-left: 100px;
				margin-top: 10px;
				.search-select{
					@include s4
				}
				.search-text{
					@include s1
					.search-text-models{
						@include s2
					}
				}
				.search-button{
					@include s3
				}
			}
			.user-login{
				position: absolute;
				right: 0;
				font-size: 12px;
				line-height: 60px;
				display: inline-block;
				#userimg02{
					width: 30px;
					height: 40px;
					background-color: pink;
				}
				.top-title-text{
					display: inline-block;
					font-family: MicrosoftYaHei;
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #444;
					letter-spacing: 0;
				}
				.login-div-text02{
					cursor: pointer;
					position: relative;
					display: inline-block;
					a{
						text-decoration: none;
						color: #ff862c;
					}
				}
				.login-div{
					position: relative;
					margin-left: 5px;
					font-family: MicrosoftYaHei;
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #ff862c;
					letter-spacing: 0;
					display: inline-block;
					img{
						position: relative;
						top: 2px;
						display: inline-block;
						height: 15px;
						width: 15px;
					}
					.login-div-text{
						cursor: pointer;
						position: relative;
						display: inline-block;
					}
				}
			}
		}
	}

	//二维码图片
	.qr{
		margin-top: 10px;
		margin-right: 25px;
		width: 72px;
		height: 88px;
		border: 1px solid #eee;
		img{
			margin-top: 6px;
			margin-left: 5px;
			height: 60px;
			width: 60px;
		}
		.head-qr-text{
			font-family: MicrosoftYaHei;
			font-family: PingFangSC-Regular;
			font-size: 10px;
			color: #909090;
			letter-spacing: 0;
			text-align: center;
		}
	}
}

	
</style>
