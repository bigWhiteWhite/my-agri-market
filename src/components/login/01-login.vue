<template>
	<div class="login">
		<div class="topHead">
			<topHead></topHead>
		</div>
		<div class="hn-login">
			<div class="login-content">
				<div class="wrap">
					<h2>欢迎登陆农商平台 </h2>
					
					<router-view></router-view>
					
					<button class="go" @click="login">
						<a href="/personspace">登陆<Icon type="md-log-in" /></a>
					</button>
					<br>

				</div>
			</div>

			<div class="login-bg"><img src="https://files.cnhnb.com/potato/img/loginBackground.b4a370f5.jpg" alt=""></div>
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
			login() { //登陆验证
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
					height: 400px;
					background: #fff;
					//margin-right: 0;
					margin-top: 10%;
					text-align: center;
					border-radius: 10px;
					padding: 50px 50px;

					h2 {
						color: #ff862c;
						margin-top: 5%;
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
