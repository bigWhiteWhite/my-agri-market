<template>
	<div class="shouye">
		<div class="shop-information-bg">
			<div class="shop-left-content">
				<div class="sell-information">
					<div class="user-img">
						<img src="//image.cnhnb.com/20b0aaeb-c6cb-48c1-9481-80952abca595" alt="用户头像">
					</div>
					<div class="user-name">
						{{currentUser.username}}
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

			<div class="user-hot">
				<div class="hot-title">
					热门推荐
				</div>
				<div class="user-hot-content">
					<div class="eye-renderer__inner" v-for="(item,index) in list">
						<a href="/gongying/4770591/" target="">
							<div class="proinfo-list horizontal">
								<p class="simg"><img :src="item.image"class="s-img-default" lazy="loaded"></p>
								<p class="pro-title fs12 gray3">{{item.name}}</p>
								<div class="pro-price fs18 orange">{{item.price/100}}{{item.unit}}</div>
								<p class="shop-name fs12 gray6">王任伟</p>
								<div class="fs12 gray9 address">
									<i class="iconfont icon-dizhi fs12"></i> 四川省成都市锦江区
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		name: '',
		computed: {
			...mapState(['currentUser'])
		},
		data() {
			return {
				list:{}
			}
		},
		mounted(){
			var params = new URLSearchParams
			params.append("pageNum",1)
			params.append("pageSize",10)
			this.$axios.get('/product/list/all',{params})
			.then(res=>{
				this.list = res.data.data.list
				console.log(this.list)
			})
			.catch(err=>{
				console.log(err)
			})
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
				@include t1 display: inline-block;

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

			.shop-right-content {
				width: 760px;
				border: none;
				position: absolute;
				left: 240px;
				top: 10px;
				display: inline-block;
				border: 1px solid #eaeaea;

				.merchant-certification {
					font-family: PingFangSC-Regular;
					font-size: 16px;
					color: #333;
					letter-spacing: 0;
					height: 46px;
					line-height: 46px;
					width: 100%;
					background: #fff;

					div {
						position: relative;
						left: 20px;

						span {}
					}
				}

				.user-volume {
					height: 154px;
					width: 100%;
					background: #fff;
					border-top: 1px solid #eaeaea;

					ul {
						margin: 0;
						padding: 0;
						list-style: none;

						li {
							position: relative;
							left: 0;
							top: 36px;
							float: left;
							height: 80px;
							width: 25%;
							border-right: 1px solid #ddd;
							text-align: center;

							&:last-child {
								border-right: none;
							}

							@mixin t2 {
								position: relative;
								top: 15px;
								color: #333;
								letter-spacing: 0;
							}

							span {
								@include t2 font-family: PingFangSC-Regular;
								font-size: 14px;
							}

							p {
								@include t2 font-family: PingFangSC-Semibold;
								font-size: 24px;
							}
						}
					}
				}
			}

			.user-hot {
				width: 992px;
				margin: 0 0 10px 9px;
				.hot-title {
					color: #45b035;
					font-size: 24px;
				}
				.user-hot-content {
					background-color: #fff;
					border: 1px solid #eaeaea;
					display: flex;
					flex-wrap: wrap;
					width: 100%;
					justify-content: space-around;
					.eye-renderer__inner{
						a{
							text-decoration: none;	
							.proinfo-list{
								display: inline-block;
								width: 140px;
								height: 324px;
								width: 180px;
								margin-top: 20px;
								.simg{
									height: 180px;
									.s-img-default{
										height: 180px;
										width: 100%;
										-o-object-fit: cover;
										object-fit: cover;
										-o-object-position: center;
										object-position: center;
									}
								}
								.pro-title{
									margin-top: 5px;
									overflow: hidden;
									height: 32px;
									color: #333;
									font-size: 12px;
								}
								.pro-price{
									margin-top: 6px;
									color: #ff442f;
									font-size: 18px;
								}
								.shop-name{
									margin-bottom: 4px;
									white-space: nowrap;
									overflow: hidden;
									text-overflow: ellipsis;
									color: #666;
									font-size: 12px;
								}
								.address{
									white-space: nowrap;
									overflow: hidden;
									text-overflow: ellipsis;
									color: #999;
									font-size: 12px;
								}
							}
						}
					}
				}
			}

		}
	}
</style>
