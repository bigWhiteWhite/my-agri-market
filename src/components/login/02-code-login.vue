<template>
	<div class="code-login">
		<div>
			<div class="item border-m-f">
				<i class="el-icon-s-custom"></i> 
				<input type="text" placeholder="请输入账号">
			</div>
			<div class="item border-m-f">
				<i class="el-icon-view"></i> 
				<input type="password" placeholder="请输入密码">
		    </div>
		</div>
		<!-- 选择验证码还是密码登陆按钮 -->
		<div class="switch">
			<span style="cursor: pointer;"><router-link :to="{name:'vaildCodeLogin'}">找回密码</router-link></span> 
			<span style="cursor: pointer;"><router-link :to="{name:'vaildCodeLogin'}">使用短信验证码登录</router-link></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {

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
			margin-top: 25px;
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
}
</style>
