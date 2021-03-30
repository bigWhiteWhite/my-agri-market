<template>
	<div class="user-register">
		<div> <!--v-show="alertfail(this.data.status)" -->
			 <el-alert class="alert"  :title=this.data.msg type="error" show-icon style="display: none;"></el-alert>
			 <el-alert class="alert" :title=this.data.msg  type="success" show-icon style="display: none;"></el-alert>
			 <el-alert class="alert" title='请重新确认你的密码' type="warning" show-icon style="display: none;"> </el-alert>
			<div class="item border-m-f">
				<i class="iconfont icon-yonghu_huaban1"></i> 
				<input type="text" placeholder="用户名" v-model="username">
			</div>
			<div class="item border-m-f">
				<i class="iconfont icon-suo"></i> 
				<input type="password" placeholder="用户密码" v-model="password">
		    </div>
			<div class="item border-m-f">
				<i class="iconfont icon-suo"></i> 
				<input type="password" placeholder="确认密码" v-model="confirmpassword">
			</div>
		</div>
		<!-- 选择验证码还是密码登陆按钮 -->
		<div class="switch">
			<span style="cursor: pointer;"><router-link :to="{name:'codeLogin'}">立刻登录</router-link></span>
		</div>
		<button class="userregister" @click="user_register">
			<a >注册<i class="iconfont icon-play-times"></i></a><!-- //personspace -->
		</button>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				username:'',
				password:'',
				confirmpassword:'',
				data:{}
			}
		},
		computed:{
			
		},
		methods:{
			user_register(){
				if (this.password !== this.confirmpassword) {
					document.querySelectorAll('.user-register  .alert')[0].style.display = 'none'
					document.querySelectorAll('.user-register  .alert')[1].style.display = 'none'
					document.querySelectorAll('.user-register  .alert')[2].style.display = ''
					this.password = this.confirmpassword = ''
				} else{
					var params = new URLSearchParams()
					params.append("username",this.username)
					params.append("password",this.password)
					this.$axios.post('/register',params)
					.then(res=>{
						console.log(res.data)
						if(res.data.status !== 10000){
							document.querySelectorAll('.user-register  .alert')[0].style.display = ''
							document.querySelectorAll('.user-register  .alert')[1].style.display = 'none'
							document.querySelectorAll('.user-register  .alert')[2].style.display = 'none'
							this.data = res.data
						}else{
							document.querySelectorAll('.user-register  .alert')[0].style.display = 'none'
							document.querySelectorAll('.user-register  .alert')[1].style.display = ''
							document.querySelectorAll('.user-register  .alert')[2].style.display = 'none'
							this.data = res.data
							this.$router.push('/')
						}
					
					})  
					.catch(err=>{
						console.log(err)
					})
				}
			}
		},
		mounted(){
			document.getElementById('register-title').style.display = 'none'
		}
	}
</script>

<style lang="scss" scoped>
.user-register{
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
		margin-top: 20px;
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
	button {
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
