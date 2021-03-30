<template>
	<div class="code-login">
		<div>
			<el-alert class="alert"  :title=this.data.msg type="error" show-icon style="display: none;"></el-alert>
			<el-alert class="alert" :title=this.data.msg  type="success" show-icon style="display: none;"></el-alert>
			<div class="item border-m-f">
				<i class="iconfont icon-yonghu_huaban1"></i> 
				<input type="text" placeholder="请输入用户名" v-model="username">
			</div>
			<div class="item border-m-f">
				<i class="iconfont icon-suo"></i> 
				<input type="password" placeholder="请输入密码" v-model="password">
		    </div>
			<div class="item input" style="width: 60%;height: 44.4px;">
				<!-- 验证码 -->
				<i class="iconfont icon-yonghu_huaban1"></i>
				<input class="inUser" type="text" :placeholder="rules.vaildCode[0].message" v-model="form.vaildCode"
				  autocomplete="off" style="width: 83%;"><!-- @keydown.enter="loginCode" -->
				<vaildCode></vaildCode>
			</div>
		</div>
		<!-- 选择验证码还是密码登陆按钮 -->
		<div class="switch">
			<span style="cursor: pointer;"><router-link :to="{name:'vaildCodeLogin'}">找回密码</router-link></span> 
			<span style="cursor: pointer;" @click="clear"><router-link :to="{name:'vaildCodeLogin'}" >使用短信验证码登录</router-link></span>
		</div>
		
		<button class="go" @click="login" id="loginbutton">
			<a href="#">登陆<i class="iconfont icon-play-times"></i></a><!-- //personspace -->
		</button>
	</div>
</template>

<script>
	import vaildCode from './vaild-code.vue'
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default {
		name: '',
		components:{
			vaildCode
		},
		data() {
			return {
				username:'',
				password:'',
				data:{}
			}
		},
		computed: {
			...mapState(['form', 'checkCode', 'rules']),
		
		},
		methods: {
			...mapActions(['login', 'createdCode']),
			clear(){
				this.username = this.password = ''
			},
			login() { //登陆验证
				// if (this.$store.state.form.seccode != this.$store.state.checkCode) {
				// 	this.$store.state.rules.vaildCode[0].message = "验证码输入错误"
				// 	this.$store.state.codeList = []
				// 	this.$store.dispatch('createdCode')
				// 	return false;
				// };
					var params = new URLSearchParams()
					//console.log(this.username)
					params.append("username",this.username)
					params.append("password",this.password)
					this.$axios.post('/login',params)
					.then(res=>{
						if(res.data.status !== 10000){
							document.querySelectorAll('.code-login  .alert')[0].style.display = ''
							document.querySelectorAll('.code-login  .alert')[1].style.display = 'none'
							this.data = res.data
						}else{
							document.querySelectorAll('.code-login  .alert')[0].style.display = 'none'
							document.querySelectorAll('.code-login  .alert')[1].style.display = ''
							this.data = res.data
							this.$store.dispatch('setUser',res.data.data)
							//console.log(this.$store.state.currentUser)
							this.$router.push('/')
						}
					
					})  
					.catch(err=>{
						console.log(err)
					})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.code-login{
	.item{
		position: relative;
		margin-top: 14px;
		height: 38px;
		i{
			//输入框字体图标
			font-size: 20px;
			color: #ff862c;
			margin-top: 20px;
			margin-left: -5px;
			float: left
		}
		input{
			//输入框样式
			border: 0;
			width: 90%;
			font-size: 15px;
			color: black;
			background: #ffffff00;
			border-bottom: 2px solid #ff862c;
			padding: 5px 10px;
			margin-top: 10px;
			outline: none;
		}
	}
	
	//选择验证码还是密码登陆按钮
	.switch{
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		margin-top: 40px;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		color: #45b035;
		a{
			text-decoration: none;
			color: #45b035;
		}
	}
	//登陆按钮
	.go {
		margin-top: 20px;
		width: 40%;
		height: 30px;
		border-radius: 10px;
		border: 0;
		color: #fff;
		font-size: 15px;
		background-color: #39bf3e;
		//background-image: linear-gradient(to right, #39bf3e 0%, #fff 100%);
		outline: none;
	
		a {
			font-size: 19px;
			text-decoration: none;
			color: #ffffff;
	
			i {
				margin-left: 5px;
			}
		}
	}
}
</style>
