<template>
	<div>
		<div class="form" :model="form" :rules="rules">
			<div class="input">
				<!-- 手机号 -->
				<i class="el-icon-phone"></i>
				<input class="inPhone" type="text" :placeholder="rules.phone[0].message" autocomplete="off" v-model="form.phone">
			</div>
			<div class="input" style="width: 60%;height: 44.4px;">
				<!-- 验证码 -->
				<i class="el-icon-s-custom"></i>
				<input class="inUser" type="text" :placeholder="rules.vaildCode[0].message" v-model="form.vaildCode"
				 @keydown.enter="loginCode" autocomplete="off" style="width: 83%;">
				<vaildCode></vaildCode>
			</div>
			<div class="input">
				<!-- 短信验证码 -->
				<i class="el-icon-key"></i>
				<input class="inPass" type="password" :placeholder="rules.seccode[0].message" autocomplete="off" v-model="form.seccode">
				<el-button type="text">获取验证码</el-button>
			</div>

		</div>
		<!-- 选择验证码还是密码登陆按钮 -->
		<div class="switch">
			<span style="cursor: pointer;"></span> 
			<span style="cursor: pointer;"><router-link :to="{name:'codeLogin'}">使用密码登录</router-link></span>
		</div>
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
	data () {
    	return {
      		
    	}
  	},
	computed: {
		...mapState(['form', 'checkCode', 'rules']),
	
	},
	methods: {
		...mapActions(['login', 'createdCode']),
		loginCode() { //登陆验证
			if (this.$store.state.form.seccode != this.$store.state.checkCode) {
				this.$store.state.rules.vaildCode[0].message = "验证码输入错误"
				this.$store.state.codeList = []
				this.$store.dispatch('createdCode')
				return false;
			};
		}
	}
}
</script>

<style lang="scss" scoped>
.form {
	.input {
		margin-top: 5%;
		i {
			//输入框字体图标
			font-size: 20px;
			color: #ff862c;
			margin-top: 25px;
			margin-left: -5px;
			float: left
		}
		.inPass{
			width: 62%;
		}
		.el-button--text{
			color:#ff862c ;
		}
		input {
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
}
//选择验证码还是密码登陆按钮
.switch{
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	margin-top: 5px;
	-webkit-box-pack: justify;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	color: #45b035;
	a{
		text-decoration: none;
		color: #45b035;
	}
}
</style>
