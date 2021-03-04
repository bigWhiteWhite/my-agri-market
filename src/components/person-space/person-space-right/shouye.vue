<template>
	<div class="shouye">
		<div class="shop-information-bg">
			<div class="shop-left-content">
				<div class="sell-information">
					<div class="user-img">
						<img src="//image.cnhnb.com/20b0aaeb-c6cb-48c1-9481-80952abca595" alt="用户头像">
					</div>
					<div class="user-name">
						hn1529615
						<div class="sayHello">
							上午好
						</div>
					</div>
				</div>
			</div>

			<div class="shop-right-content narrow">
				<div class="merchant-certification">
					<div>
						认证情况
						<span></span>
					</div>
				</div>
				<div class="user-volume">
					<ul>
						<li style="cursor: pointer;">
							<p class="count">0</p> <span class="label">待付款</span>
						</li>
						<li style="cursor: pointer;">
							<p class="count">0</p> <span class="label">待发货</span>
						</li>
						<li style="cursor: pointer;">
							<p class="count">0</p> <span class="label">待收货</span>
						</li>
						<li style="cursor: pointer;">
							<p class="count">0</p> <span class="label">待退款</span>
						</li>
					</ul>
				</div>
			</div>
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
	.shouye {
		position: relative;
		width: 100%;

		.shop-information-bg {
			margin: 0 auto;
			position: relative;
			width: 100%;

			@mixin t1 {
				position: relative;
				height: 220px;
				width: 240px;
			}

			.shop-left-content {
				@include t1 
				display: inline-block;
				.sell-information {
					@include t1 background-image: url(//files.cnhnb.com/fas-ssr/users/img/c695a5f.png);
					background-size: contain;
					.user-img {
						position: relative;
						top: 38px;
						height: 74px;
						width: 74px;
						margin: 0 auto;
						img {
							height: 100%;
							width: 100%;
							border-radius: 50px;
						}
					}
					.user-name {
						position: relative;
						text-align: center;
						top: 50px;
						margin: 0 auto;
						font-family: PingFangSC-Medium;
						font-size: 16px;
						color: #fff;
						letter-spacing: 0;
						.sayHello {
							margin-top: 10px;
							font-family: PingFangSC-Regular;
							font-size: 14px;
							color: #fff;
							letter-spacing: 0;
						}
					}
				}
			}
			
			.shop-right-content{
				width: 760px;
				border: none;
				position: absolute;
				left: 240px;
				top: 10px;
				display: inline-block;
				border: 1px solid #eaeaea;
				.merchant-certification{
					font-family: PingFangSC-Regular;
					font-size: 16px;
					color: #333;
					letter-spacing: 0;
					height: 46px;
					line-height: 46px;
					width: 100%;
					background: #fff;
					div{
						position: relative;
						left: 20px;
						span{
							
						}
					}
				}
				.user-volume{
					height: 154px;
					width: 100%;
					background: #fff;
					border-top: 1px solid #eaeaea;
					ul{
						margin: 0;
						padding: 0;
						list-style: none;
						li{
							position: relative;
							left: 0;
							top: 36px;
							float: left;
							height: 80px;
							width: 25%;
							border-right: 1px solid #ddd;
							text-align: center;
							&:last-child{
								border-right: none;
							}
							@mixin t2 {
								position: relative;
								top: 15px;
								color: #333;
								letter-spacing: 0;
							}
							span{
								@include t2
								font-family: PingFangSC-Regular;
								font-size: 14px;
							}
							p{
								@include t2	
								font-family: PingFangSC-Semibold;
								font-size: 24px;
							}
						}
					}
				}
			}
			
			
		}
	}
</style>
