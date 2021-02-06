<template>
	<div class="hot-recommend">
			<div class="hr-inner">
				<div class="hr-title">
					<div class="tiao"></div>
					<img src="//files.cnhnb.com/fas/home/img/a558d1f.png" alt="">
					<div class="first-titles">热门推荐</div>
					<div class="tiao"></div>
				</div>
				
				<div class="hot-fruit-rm">
					<div class="recommend-content">
						<div class="recommend-lefts" style="background-image: url(https://files.cnhnb.com/fas/home/img/95b85a8.png);">
							<div class="first-name">禽畜肉蛋</div>
							<div class="recommend-left-t2">基地直供 运输包活</div>
							<a href="/p/qcrd/" target="_blank">
								<div class="look-more">查看更多<i class="el-icon-caret-right"></i></div>
							</a>
							<div class="second-content">
								<div class="second-name-item" v-for="(item,index) in secondNameItem" :key=item.id>
									<a href="/p/huochu/" target="_blank" :title=item.title>
										<div class="second-name-items">{{item.name}}</div>
									</a>
								</div>
							</div>
						</div>
						<div class="recommend-right">
							<div class="index-item-bg" v-for="(item,index) in recommed" :key=item.id >
								<div class="product-v2">
									<a href="/gongying/4003090/" target="_blank">
										<div class="data-imgs">
											<img src="https://image.cnhnb.com/image/jpeg/head/2020/03/26/c7a0b75bb63f4fd88dbe06e923e67341.jpeg?imageView2/1/w/525/h/525/format/jpg/interlace/1/quality/100/ignore-error/1"class="s-img-default" data-v-490b5e9c="" data-src="https://image.cnhnb.com/image/jpeg/head/2020/03/26/c7a0b75bb63f4fd88dbe06e923e67341.jpeg?imageView2/1/w/525/h/525/format/jpg/interlace/1/quality/100/ignore-error/1"lazy="loaded">
											<div class="vedio-icon"><img src="//files.cnhnb.com/fas/home/img/59b9079.png" alt=""></div>
										</div>
										<div class="shops-text">
											<div class="shops-price-bg">
												<div class="shops-price">¥<span class="sp1">4600</span></div>
												<div class="turnover">成交15.4万元</div>
											</div>
										</div>
										<div class="title-field">
											<div class="title one-line">
												<div class="title-tag">优选</div>太湖猪 太湖原种母猪，太湖一代母猪自产自销，仅此一家，谨防上当受骗。
											</div>
											<div class="cw-tags">
												<div class="cw-tag icon-item-005">保证金20000元</div>
											</div>
										</div>
										<div class="shops-btm">
											<div class="shops-btm-l">
												<img src="https://image.cnhnb.com/supply/icon/vip_y1.png" alt="" class="icon-imgs"style="width:auto;margin-left:0px;">
												<img src="https://image.cnhnb.com/supply/icon/level8.png" alt="" class="sell-grade">
												<img src="//files.cnhnb.com/fas/home/img/eb88040.png" alt="" class="icon-imgs">
												<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAAGXcA1uAAAAAXNSR0IArs4c6QAAA3JJREFUSA2tFutLU3H03Lv5WM40nykYlH2JoKQm85WzMkowA78kZmClCdG/EPQp6EufQ9MoSxBJyiw1fM3SWlpZFERBomluvhJ8zK09OufM+2tuzin0g3vP+Z337zx+90qAK7Mn101QJuTKnirCQaaXzWUjABJy3iDUS5J0GcoHK9zKknPisiCr1wA/lkb+ibGS14uM6eNCY4GegTwjswhKqFqJtqq9hBmVkEhMl8JAz4uoEUmhcLQKQ0AKSQmNhFwul5sgn2TWPisE0RTjss1pgzPJp2FyxcwEOgetgD78omLxAC/00s25vT/6gGILukSw53ed87O54lzhPFOMw/MfBV8tMB+kfqwBHmU0ArqFxvEmSIs+6JFACwslprKg4ZitFs4fJyurN7cLDR3zceK3Vas0yasKhkrk3kI3Wj8pD8GE9czEYlChN2ed9FBJDligQJ64DkFPjAJUK1GHwd/v4MJQJT+K5Rtfb3IdyocqmKTUiuuQvuMw3NXVKLIMW83PGX5b/L6Gzm1pmhuEooFifozTfSxwfd81hqUpZ9cosAd9TDq0ZDULxpJjCUxzb6EoqRCWnVawrExBYngC81lhwvoL2i0dTJBBBa3mZ6LfidgzbYTHGU3M5yxR2YMtah9qoy3Vge4OmfrD42vjNw0PVrqGe+lI38kkp8uKUxS8ATc26+GScZWsKXuZ2zEZ8AbajKFgMnRkcrCACdWqJTVU7r4IBYmnIC4sNpjuuvwZ2yy0WdqhZqQOHG4HoINFUYSWzOZNG3a4HPBk8imMLo/hpRyH12AhRIVECafkqOh1Me+5jwijqOnOtNimhCAh0SHRsD0kUtCcbifkvyoAu8suaLdHqqFeVwep2lSmeWdAOCBOqBwKsfiZ8F2YQjouk1WSChLDEuCndVyIUXrjw+LF3htZ44CMRKi3efPXxRv1D6HN3AEvpjohLeoA0KTLEo+tn/waBzSDXdPdfkIqHL8Ticeh6sNVmLBOMH9vRCr8wUJ+gs+QYzzKNK1aC/d0tZAUvlPYEA4G54YgPUYHpSklgumLNOkbfEnr7smWsqiL+BNPBI1KA4ei07gzFIGtwBn7DLyfHwYr3kiry8TfzmyjofN/TbFimaa532DM97QGUrFTpGxjHv2kXMJi76fhU4Q3A2moUOcLwtp+Q+8dhPzH8RfjMf9u7m+wzQAAAABJRU5ErkJggg=="
												 alt="" class="icon-imgs">
											 </div>
											<div class="shops-btm-r">
												莒南县
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
						
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
				secondNameItem: [{id: "01",name: "活畜",title: "活畜"},
									{id: "03",name: "活禽",title: "活禽"},
									{id: "04",name: "禽畜苗",title: "禽畜苗"},
									{id: "05",name: "蛋类",title: "蛋类"},
									{id: "06",name: "动物毛绒",title: "动物毛绒"}],
				recommed:[{id:"01"},
							{id:"02"},
							{id:"03"},
							{id:"04"},
							{id:"05"},
							{id:"06"},
							{id:"07"},
							{id:"08"},
							{id:"09"},
							{id:"10"}]
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hot-recommend {
		width: 100%;
		background-color: #f2f2f2;

		/* 热门推荐标题 */
		.hr-inner {
			position: relative;
			margin-left: auto;
			margin-right: auto;
			margin-top: 20px;
			width: 1200px;
			background-color: #fff;

			.hr-title {
				position: relative;
				display: -webkit-box;
				display: flex;
				-webkit-box-align: center;
				align-items: center;
				-webkit-box-pack: center;
				justify-content: center;
				height: 73px;
				background-color: #f2f2f2;

				.tiao {
					width: 60px;
					height: 4px;
					border-top: 1px solid #222;
					border-bottom: 1px solid #222;
				}

				img {
					margin-left: 20px;
					margin-right: 10px;
				}

				.first-titles {
					font-family: PingFangSC-Regular;
					letter-spacing: 0;
					font-weight: 700;
					font-size: 28px;
					color: #222;
					margin-right: 20px;
				}
			}
		}

		/* 热门推荐内容 */
		.hot-fruit-rm {
			position: relative;
			width: 1200px;
			height: 631px;
			background-color: #f2f2f2;

			.recommend-content {
				display: -webkit-box;
				
				.recommend-lefts {
					width: 195px;
					height: 601px;

					.first-name {
						font-family: MicrosoftYaHei-Bold;
						font-family: PingFangSC-Regular;
						font-size: 24px;
						color: #fff;
						font-weight: 700;
						letter-spacing: 0;
						margin-left: 20px;
						margin-top: 50px;
					}

					.recommend-left-t2 {
						font-family: MicrosoftYaHei;
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #fff;
						letter-spacing: 0;
						margin-left: 20px;
						margin-top: 6px;
					}

					a {
						text-decoration: none;

						.look-more {
							color: #ff6d00;
							width: 83px;
							height: 24px;
							margin-top: 12px;
							margin-left: 20px;
							border-radius: 12px;
							background-color: #fff;
							display: -webkit-box;
							display: flex;
							-webkit-box-align: center;
							align-items: center;
							-webkit-box-pack: center;
							justify-content: center;
							font-family: MicrosoftYaHei;
							font-family: PingFangSC-Regular;
							font-size: 12px;
							letter-spacing: 0;

							i {
								font-size: 15px;
							}
						}
					}

					.second-content {
						margin-left: 10px;
						margin-right: 10px;
						margin-top: 217px;
						display: -webkit-box;
						display: flex;
						-webkit-box-pack: justify;
						justify-content: space-between;
						flex-wrap: wrap;

						.second-name-item {
							margin-top: 10px;
							background: rgba(17, 17, 17, .2);
							border-radius: 14px;
							display: -webkit-box;
							display: flex;
							-webkit-box-align: center;
							align-items: center;
							-webkit-box-pack: center;
							justify-content: center;
							width: 85px;
							height: 28px;
							font-family: MicrosoftYaHei;
							font-family: PingFangSC-Regular;
							font-size: 14px;
							letter-spacing: 0;

							&:hover {
								background: rgba(17, 17, 17, 0.5);
							}

							a {
								text-decoration: none;

								.second-name-items {
									color: #fff;
									text-align: center;
								}
							}
						}
					}
				}

				.recommend-right {
					display: -webkit-box;
					display: flex;
					flex-wrap: wrap;
					height: 601px;
					width: 1005px;
					background-color: #f2f2f2;
					.index-item-bg{
						.product-v2{
							position: relative;
							height: 300px;
							width: 200px;
							border: 2px solid #fff;
							background-color: #fff;
							margin-top: 0;
							margin-left: 1px;
							a{
								text-decoration: none;
								.data-imgs{
									position: relative;
									margin-top: 20px;
									height: 160px;
									margin-left: 20px;
									margin-right: 20px;
									.s-img-default{
										width: 100%;
										height: 100%;
									}
									.vedio-icon{
										position: absolute;
										height: 19px;
										width: 19px;
										right: 10px;
										bottom: 10px;
										img{
											height: 100%;
											width: 100%;
										}
									}
								}
								.shops-text{
									margin: 7px 20px 0;
									.shops-price-bg{
										height: 24px;
										display: -webkit-box;
										display: flex;
										-webkit-box-pack: justify;
										justify-content: space-between;
										.shops-price{
											line-height: 24px;
											font-family: MicrosoftYaHei-Bold;
											font-size: 12px;
											color: #ff442f;
											letter-spacing: 0;
											.sp1{
												font-size: 18px;
											}
										}
										.turnover{
											font-family: PingFangSC-Regular;
											font-size: 12px;
											color: #909090;
											letter-spacing: 0;
											line-height: 28px;
										}
									}
								}
								.title-field{
									margin-top: 4px;
									padding: 0 20px;
									.one-line{
										-webkit-line-clamp: 1;
										    height: 18px;
									}
									.title{
										font-size: 14px;
										color: #222;
										font-weight: 400;
										line-height: 18px;
										overflow: hidden;
										text-overflow: ellipsis;
										display: -webkit-box;
										-webkit-line-clamp: 2;
										-webkit-box-orient: vertical;
										white-space: normal;
										word-break: break-all;
										height: 35px;
										.title-tag{
											position: relative;
											top: -1px;
											font-size: 11px;
											height: 15px;
											line-height: 15px;
											display: inline-block;
											padding-left: 2px;
											padding-right: 2px;
											border-radius: 2px;
											color: #fff;
											background: #ff442f;
										}
									}
									.cw-tags{
										height: 18px;
										margin-top: 5px;
										overflow: hidden;
										display: -webkit-box;
										display: flex;
										flex-wrap: wrap;
										width: 100%;
										.cw-tag{
											margin-left: 6px;
											height: 18px;
											padding-left: 4px;
											padding-right: 4px;
											font-family: PingFangSC-Regular;
											font-size: 11px;
											display: -webkit-box;
											display: flex;
											-webkit-box-flex: 0;
											flex: none;
											-webkit-box-align: center;
											align-items: center;
										}
										.icon-item-005{
											background: #eff4fb;
											border: 1px solid #8a9fcc;
											color: #4869af;
											border-radius: 4px;
										}
									}
								}
								.shops-btm{
									display: -webkit-box;
									display: flex;
									-webkit-box-align: center;
									align-items: center;
									margin-top: 14px;
									-webkit-box-pack: justify;
									justify-content: space-between;
									height: 12px;
									margin-left: 20px;
									margin-right: 20px;
									width: calc(100% - 40px);
									.shops-btm-l{
										display: -webkit-box;
										display: flex;
										-webkit-box-align: center;
										align-items: center;
										.icon-imgs{
											margin-left: 4px;
											height: 12px;
											width: 12px;
										}
										.sell-grade{
											margin-left: 4px;
											height: 12px;
											width: 25px;
										}
									}
									.shops-btm-r{
										width: 60px;
										position: relative;
										white-space: nowrap;
										overflow: hidden;
										text-overflow: ellipsis;
										font-family: MicrosoftYaHei;
										font-size: 12px;
										color: #909090;
										letter-spacing: 0;
										text-align: right;
									}
								}
							}
						}
					}
				}
			}
		}

	}
</style>
