<template>
	<div class="login">
		<div class="topHead">
			<topHead></topHead>
		</div>
		<div class="hn-login">
			<div class="login-content">
				<div class="wrap">
					<span class="register-title" id="register-title"><router-link :to="{name:'adminUserRegister'}">还未注册？立刻注册</router-link></span>
					<h2>你好，亲爱的商家 </h2>
					<router-view></router-view>
					<br>
				</div>
			</div>

			<div class="login-bg" style="background-color: #38ca64;">
				<div style="width: 900px;height: 100px;font-size: 50px;color: #fff;line-height: 620px;margin-left: 100px;">
					欢迎来到农商平台，立刻加入我们吧！</div>
			</div>
		</div>

		<Foot></Foot>
	</div>
</template>

<script>
	import topHead from '../home/head/head-top.vue'
	import Foot from '../home/foot/foot.vue'
	export default {
		components: {
			topHead,
			Foot
		},
		name: 'login',
		data() {
			return {

			}
		},
		methods:{
			
		}
		
	}
</script>

<style lang="scss" scoped>
	.login {
		.topHead {
			position: relative;
			height: 134px;
			width: 100%;
			background-color: #fff;
		}

		.hn-login {
			position: relative;
			height: 620px;

			.login-content {
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				-webkit-box-pack: end;
				-webkit-justify-content: flex-end;
				justify-content: flex-end;
				position: relative;
				margin: 0 auto;
				width: 1200px;

				.wrap {
					//用户登陆详细界面
					width: 30%;
					height: 430px;
					background: #fff;
					//margin-right: 0;
					margin-top: 10%;
					text-align: center;
					border-radius: 10px;
					padding: 50px 50px;
					.register-title{
						a{
							color: #39bf3e;
						}
					}
					h2 {
						color: #ff862c;
						margin-top: 0%;
					}
				}

			}

			//登陆页面背景
			.login-bg {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 620px;
				overflow: hidden;
				z-index: -1;

				img {
					display: block;
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center center;
				}
			}
		}


	}
</style>
