<template>
	<div class="shop-datail">
		<div class="buy-protection">
			<div class="list">
				<div class="inline-block" v-for="(item,index) in buyprotection">
					<i>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-icon-test"></use>
						</svg>
					</i>{{item.message}}
				</div>
			</div>
		</div>
		<div class="abc">
			<div class="business yxsj"><!-- 商家信息 -->
				<div class="businessLog"><img src="//files.cnhnb.com/fas-ssr/supplydetails/img/ae904ff.png" alt=""></div>
				<div class="businessUser"><img src="https://image.cnhnb.com/image/png/head/2021/02/24/40995dcc1d094110a4e37ad21a3015d5.png"
					class="s-img-default"lazy="loaded">
					<p>盛丰农产品</p>
				</div>
				<ul class="user">
					<li><span>身份认证：</span>
						<div class="identity">
							<div class="yx"></div>
							<div class="hnb"><span>1年</span></div>
							<div class="mjbz"><span>1年</span></div>
							<div class="bzj"><img src="https://files.cnhnb.com/xapp/imgs/bzj/bzj20000.png" alt=""></div>
						</div>
					</li>
					<li><span>所在地区：</span>
						<p>山东省淄博市沂源县</p>
					</li>
					<li><span>主营类目：</span>
						<p>生姜</p>
					</li>
				</ul>
				<div class="data-infor data-infor-mjbz data-infor-active">
					<div class="left">
						<p class="data-infor-price">￥23.2万元</p>
						<p>累计成交</p>
					</div>
					<div class="right">
						<p class="data-infor-price">22441</p>
						<p>访客</p>
					</div>
				</div>
				<div class="score">
					<p>店铺评分<span class="fontcolor fontsize">5</span></p>
					<div class="score-start">
							<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xingxing"></use></svg>
							<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xingxing"></use></svg>
							<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xingxing"></use></svg>
							<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xingxing"></use></svg>
							<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xingxing"></use></svg>
					</div>
				</div>
				<div class="buttom">
					<div class="left">联系我们</div> <a
						href="https://vip608252445.cnhnb.com" target="_blank" class="right">进店逛逛</a>
				</div>
				<div class="dialog" style="display: none;">
					<div class="dialog-container">
						<div class="dialog-title">联系商家<span class="close-btn">×</span></div>
						<div class="content">请拨打转接号码</div>
						<div class="remark">（温馨提示：拨打的手机号码必须和登录的手机号码一致）</div>
					</div>
				</div>
			</div>
			
			<shopDetail02></shopDetail02>
		</div>
	</div>
</template>

<script>
	import shopDetail02 from './shop-detail02.vue'
	export default {
		name: '',
		components:{
			shopDetail02
		},
		data() {
			return {
				buyprotection: [{message: '虚假价格赔付'}, {message: '货不对板赔付'}, {message: '少货赔付'}, {message: '未按时发货赔付'}, {message: '承诺在线交易'}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shop-datail {
		width: 1200px;
		margin: 0 auto;
		padding-top: 0px;
		padding-bottom: 60px;

		.buy-protection {
			margin-bottom: 20px;
			width: 1200px;
			background: url(//files.cnhnb.com/fas-ssr/supplydetails/img/ca1c549.png) no-repeat;
			background-size: 100% 100%;
			padding: 0 90px 0 260px;
			height: 88px;

			.list {
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				justify-items: center;
				height: 88px;
				padding: 15px 0;

				.inline-block {
					font-size: 16px;
					color: #222222;
					vertical-align: middle;
					display: flex;
					justify-content: space-between;
					align-items: center;

					&:not(:last-child) {
						margin-right: 40px;
					}
				}

				i {
					font-size: 14px;
					width: 14px;
					height: 14px;

					.icon {
						width: 100%;
						height: 100%;
					}
				}
			}
			
			
		}
		
		//商品详情
		.abc{
			display: flex;
			//商家头像
			.business{
				float: left;
				margin-right: 77px;
				width: 190px;
				height:400px;
				border-radius: 2px;
				background: url(//files.cnhnb.com/fas-ssr/supplydetails/img/9ac97f5.png) no-repeat;
				background-size: 100% 100%;
				border: 1px solid #FF8C9B;
				box-shadow: 5px 3px 5px #faecea;
				.businessLog{
					text-align: center;
					padding-top: 20px;
					img{
						width: 180px;
						height: 26px;
					}
				}
				.businessUser{
					padding: 15px 23px 15px 15px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					img{
						width: 34px;
						height: 34px;
						border-radius: 50%;
					}
					p{
						width: 110px;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						font-size: 14px;
					}
				}
				.user{
					padding: 0 15px;
					li{
						margin-bottom: 12px;
						font-size: 12px;
						color: #646464;
						display: flex;
						justify-content: flex-start;
						align-items: baseline;
						span{
							
						}
						.identity{
							display: flex;
							justify-content: flex-start;
							align-items: center;
							flex-direction: row;
							width: 98px;
							flex-wrap: wrap;
							margin-left: -3px;
							margin-top: -3px;
							.yx{
								background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAOCAYAAAA8E3wEAAAAAXNSR0IArs4c6QAAAs5JREFUOBG9VF1IFFEU/u7M7rjqqiUW4fpgthFpqbQRBhlkBPmYpJmJj76E9PcSET1EGkHRDyhZL0VaZFRqPxCB+mDRkkahCZlp2GL00vqzm7uzM3M7c9fddXV7tAt37jf3nHO/c858d9hMEsp1HbcA5NBcyeGRZdSz3xb8IJaVJosU4pESkSnVNYDFKpwk50bIRcUCW/bug+30GUh5G8CyHbCdPQd5a2HYVrpbrLJrO1jGKoETPHIsSzflwiKktN6G+uSxMNmOn4Q++gX6p49gKSlgaemAooBpGpgtGbBaIeUXwP66B2rbPVj3lEH/NgZjchIwDASaLsD4PhGlMVvKo28EUjuISFUJpMK6vxygxpuB4AtutPoPVSL0rBtIJsL5P7C/fEVJjUIfHEBSwzFob/qhfxgUMWpXJzA3G6WIq9BaVQ3lQAUCLc2Yr6W2ElnG1C/Muooh5+ZCc7sBUhgMHWZ77Z3dmN3hQuDKZRg/p8ShyrQXBlWoEbkYoVCUTACzwsiccRXzQOtNPt/SLPa8jnVc93oF1iYm+PQmZ9TXjAl2POS+2hoevN/OdY9H+GpDQ1wbH+eG389NPFddFRcTV6H5nfSxr5DW54lk5IItMEZGYhkyFsOE+EL2/rojSG66BE6tC1xshGVXKWznG+ErCwtpcZCp0n8OS0kJtIH3YbtJtoQwEsjSM6AcroHa3RXZArPbCccnaBoTEjLzYFKgUluH0Ivn4hCxJ1DswSQKJ9/U9gcIXL8K4/OwMOrDw5Cys7E6ZMB6sCoWQGiZSpNOnIJM94z7fJCcTvgrK0RAWl8/ieYdNFKf1tsjKkh76xZqDN69E1byoqOZqW5SutbXK0QUMS0jlEt2QlqzFiwrC2p7G12RoPCVNufDdrQBLDMTgRvX6HvNwbLNBcnhgEz3EGa1CYb6qAOhrqdRy///tVHl9UTviaawckD8vP8CmUAgMWxoSAMAAAAASUVORK5CYII=) no-repeat;
								background-size: 100% 100%;
								width: 27px;
								height: 14px;
								margin-left: 3px;
								margin-top: 3px;
								border-radius: 2px;
							}
							.hnb{
								background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAAAXNSR0IArs4c6QAAAaVJREFUSA1j/H91Sfv/729L///7w8xADGBmZWAQVGH4zy1GjGqy1TAyMtxlYmDMYfx3duLf/3//MJFkEtCR/2WsSNJCjmJGBoaXTCQ7DmTT39/k2Eeynv8MDOIsIF3PX7xlOHfuNtgACUlhBmNDVRTDzl+4w/Di1TuwmKG+CoOEuBCKPC05YAeKiwoyXL56n+Hho5cMOtqKGA48cfIaw6Ur9xhkZcUY3FxMaOkeDLPBaY+JmYkhIc6dgYWVheEK0KFnzt6CKzx77hbYcSC5RKAaZibSkivcIDIZcNtA0RbgZw02ZsXqfQyfPn1l+PzpG8PyVfvAYgG+VgySEsJkWkO+NnAUw7Q7OxgyXLp0l+HW7ScMS1dAHPb16w8GNVUZBmdHI5gyutLwEITZGh/rzsDBwcZw6fJdMAax42PcYNJ0pzEcKCTIyxAWbA93CIgtJMQH59ObgRLFMMstLbQZLl6+x8AALIhA7IEEWB0IclB0hPNAugtuNwsjM8s/bLUJLy8XXBEGA1Qf0wGAqzpGDuEuRiaWv0TbB20sEK2eTIXgxgIjYwIABr5ujlaDIDkAAAAASUVORK5CYII=) no-repeat;
								background-size: 100% 100%;
								font-size: 12px;
								color: #6d3e23;
								width: 40px;
								height: 14px;
								text-align: right;
								margin-left: 3px;
								margin-top: 3px;
								line-height: 14px;
								padding-right: 3px;
							}
							.mjbz{
								background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAAAXNSR0IArs4c6QAAAhZJREFUSA1jnL7sUc/1Ox8Lvn3/y8xABODmZGbwcZZm0NMQIEI1+UoYGRifMTExZDNdv/OpkFjHgaz7+v0vw5a9T8m3mUid/xn+S/39xzCT5dv3P0wwPbrqvAx3HnxlsDQSYlCR52JgZGSESTH8/PWP4fCZtwx3H34DOxIuQVPGfzG443i4mRmyYhQZRIXZGcK9pRgePv3OcPnmJzhmY2VicLUWpalzsBnOAhN0sRJl+PL1D8OTF98ZmJgYGY6efcfw5dtfmDQDKwsTgw4whOkNwA5UU+Rm8LQXY3j97hfDv38MDHcefmXoq9Zm+P8f1Tnrdz1HFaADD+zAnz//MYAstzERBlu5aP1jBi5gbhUHRnegmyTD7JUPGf7+/c/w/tNvOjgJ1QqwAx8++87AzMwIdiAvNwtDeoQ8mM8CjFYeID82QAasCxTCkxbeRzWBxjx4GoTZ8xmYDrtn32WwAubkq7c/MWTHKjK0T7/DYGcuzLDj4CuYMrrR8FyMbKOJngCDoiwXXOjvv/8M/s7iwNAkqiyH66MGA8OBHOxMDO62ogwnL7yHmw8qA89e/cgQ7C4JF6MXA+7Adx9/MVy8/pGBFVjebTvwiuHijU8Mn4DRfe32Z7Bblmx4wvD0xQ96uQtuD2Ne05W/yLUJXAYPA1QfV2Vr41FBLSnGV0yaKnz9wCIFUSITMBvWWCCgjGJpUGOBmYkhHQA8e6zYY/5HAAAAAABJRU5ErkJggg==) no-repeat;
								background-size: 100% 100%;
								font-size: 12px;
								color: #657ad0;
								width: 40px;
								height: 14px;
								text-align: right;
								padding: 1px 2px;
								margin-left: 3px;
								margin-top: 3px;
								line-height: 14px;
								padding-right: 3px;
							}
							.bzj{
								height: 15px;
								width: 70px;
								display: inline-block;
								margin-left: 3px;
								margin-top: 3px;
								img{
									width: 100%;
									height: 100%;
									margin: 0;
								}
							}
						}
					}
				}
				.data-infor{
					font-size: 12px;
					color: #909090;
					.left{
						float: left;
						width: 50%;
						text-align: center;
						.data-infor-price{
							font-size: 16px;
							color: #FF442F;
							margin-bottom: 4px;
						}
					}
					.right{
						float: left;
						width: 50%;
						text-align: center;
						.data-infor-price{
							font-size: 16px;
							color: #FF442F;
							margin-bottom: 4px;
						}
					}
				}
				.score{
					padding: 17px 32px;
					font-size: 12px;
					color: #666;
					text-align: center;
					.score-start{
						margin-top: 6px;
						margin-left: -10px;
						.icon{
							width: 14px;
							height: 14px;
						}
					}
					p{
						.fontsize{
							font-size: 14px;
							color: #F86515;
						}
					}
					
				}
				.buttom{
					padding: 0 15px;
					padding-bottom: 20px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					color: #FF442F;
					.left{
						width: 73px;
						height: 24px;
						line-height: 24px;
						text-align: center;
						font-size: 12px;
						border-radius: 12px;
						color: #FF442F;
						border: 1px solid #FF442F;
						cursor: pointer;
					}
					.right{
						width: 73px;
						height: 24px;
						color: #fff;
						line-height: 24px;
						text-align: center;
						font-size: 12px;
						border-radius: 12px;
						background-color: #FF442E;
						cursor: pointer;
					}
				}
			}
			
			//商品介绍
			
		}
	}
</style>
