<template>
	<div class="cartFooter " :class="{'cartFixed':active}">
		<div class="cart-toolbar clearfix">
			<div class="toolbar-wrap">
				<input type="hidden" value="1">
				<div class="selected-item-list hide" style="display: none;"></div>
				<div class="options-box">
					<div class="left">
						<div class="select-all"><input type="checkbox" class="jdcheckbox" name="select-all" @click="selectAll"><span>全选</span></div>
						<div class="operation">
							<a class="opt-batch-remove" @click="clearSelectBuys">删除选中的商品</a>
							<a class="opt-cleaner" @click="clearBuys">
								<strong id="J_opt_cart_cleaner">清理购物车</strong>
							</a>
						</div>
					</div>
					<div class="right">
						<div class="combine">
							<div class="btn-area">
								<div  class="pay" @click="goConfirm"><!-- :to="{name:'confirmMessage'}" -->
									去结算
									<b></b>
								</div>
							</div>
							<div class="price-sum">
								<div>
									<div class="price-show">
										<span class="txt">总价：</span>
										<span class="price priceShow">
											<em>￥{{allPrice}}</em>
										</span>
										<b class="ml5 price-tips"></b>
									</div>
									
									<el-col   :style="{ position: 'relative', top: -22+'px', left: -150+'px'}">
									      <span class="amount-sum">已选择<em>{{allNum}}</em>件商品<b class="up"></b></span><br>
									</el-col>
									  
									<div class="price-sum-extra"></div>
								</div>
							</div>
							<div class="clr"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default {
		name: '',
		data() {
			return {
				sd:[{},{}],
				active:false,
				wheight:document.documentElement.clientHeight,
			}
		},
		computed:{
			...mapState(['allSelectedBuys','allPrice','allNum']),
		},
		methods:{
			...mapActions(['selectAll','myallNum']),
			//跳转确认物流界面
			goConfirm(){
				let mes = 0
				this.$store.state.carShop.forEach((item,index)=>{//很重要，循环遍历购物车，判断谁的selected是1，改变单选框的状态
					if(item.selected === 1){
						mes = 1
						this.$axios.post('/order/createForCart') //创建订单
						.then(res=>{
							console.log(res)
						})
						.catch(err=>{
							
						})
						
						return this.$router.push({name:'confirmMessage'})
					}
				})
				if(mes==0){
					return alert("至少选择一个商品吧")
				}
			},
			/* 清理购物车 */
			clearBuys(){
				if (!confirm("确认清空购物车吗")) {
					return
				}else{
					this.$store.state.carShop.forEach((item,index)=>{//很重要，循环遍历购物车，判断谁的selected是1，改变单选框的状态
						let productId = item.productId
						//console.log(typeof(productId) )
						this.$store.dispatch('del',productId)
						this.$store.state.allNum = 0
						this.$store.state.allPrice = 0
					})
				}
			},
			/* 清理选中的商品 */
			clearSelectBuys(){
				//let jdcheckbox = document.getElementsByClassName("jdcheckbox")
				//console.log(jdcheckbox)
				if (!confirm("确认删除选中的商品吗")) {
					return
				}else{
					this.$store.state.carShop.forEach((item,index)=>{//很重要，循环遍历购物车，判断谁的selected是1，改变单选框的状态
					console.log("owso")
						if(item.selected === 1){
							//console.log(item)
							let productId = item.productId
							//console.log(typeof(productId) )
							this.$store.dispatch('del',productId)
							this.$store.state.allNum = 0
							this.$store.state.allPrice = 0
						}
					})
					//this.$store.dispatch('del')
				}
			},
			/*实现结算的动态浮动的效果*/
			recount(dheight){
				this.wheight < dheight ? this.active = true : this.active = false;
			},
			abc(dheight){
				//let atop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
				let atop;  
				if(document.documentElement.scrollTop){
					atop = document.documentElement.scrollTop 
				}else if(document.body.scrollTop){
					atop = document.body.scrollTop
				}else{
					atop = window.pageYOffset
				}
				(atop >= dheight - this.wheight) ? this.active = false : this.active = true;
			}
		},
		mounted() {
			//不将dheight在函数里面获取，因为每一次都要调用函数，浮动以后offsetop产生改变
			//会产生闪烁的效果
			var $top = document.querySelector(".cartFooter")
			var dheight = $top.offsetTop
			this.recount(dheight)
			
			window.addEventListener("scroll",() => {
				this.recount(dheight)
				this.abc(dheight)
			})
			
			
		}
	}
</script>

<style lang="scss" scoped>
	/*正常的css*/
	.cartFooter {
		position: relative;
		border: 1px solid #ddd;
		background: #fff;
		color: #333;
		height: 52px;
		line-height: 50px;
		padding: 0 0 0 15px;
		margin: 20px 0;
		z-index: 10;
		a {
			color: #333;
		}
		.cart-toolbar{
			height: 50px;
			width: 970px;
			border: 1px solid #f0f0f0;
			background: #fff;
			position: relative;
			margin: 0 auto;
			.toolbar-wrap{
				.options-box{
					.left{
						height: 50px;
						width: 363px;
						.select-all{
							float: left;
							height: 50px;
							*width: 60px;
							line-height: 48px;
							padding: 0 0 0 9px;
							white-space: nowrap;
							.jdcheckbox{
								margin: 5px 3px 0 0;
								display: inline-block;
								vertical-align: text-bottom;
							}
							span{
								display: inline-block;
								margin: 2px 3px 0 0;
								float: right;
							}
						}
						.operation{
							float: left;
							height: 50px;
							line-height: 50px;
							a{
								float: left;
								margin-left: 10px;
								color: #666;
								&:hover{
									color: red;
								}
							}
						}
					}
					.right{
						position: absolute;
						height: 52px;
						right: -3px;
						top: -1px;
						width: 650px;
						max-width: 670px;
						.combine{
							float: right;
							width: 670px;
							.btn-area{
								float: right;
								height: 50px;
								.pay{
									display: block;
									position: relative;
									width: 94px;
									height: 50px;
									line-height: 52px;
									color: #fff;
									text-align: center;
									font-size: 18px;
									font-family: Microsoft YaHei;
									background: #e54346;
									overflow: hidden;
									cursor: pointer;
									b{
										    display: block;
										    position: absolute;
										    width: 94px;
										    height: 52px;
										    top: 0;
										    left: 0;
										    overflow: hidden;
									}
								}
							}
							
							.price-sum{
								position: relative;
								float: right;
								height: 50px;
								width: auto;
								line-height: 20px;
								margin: 7px 20px 0 10px;
								.price-show{
									float: right;
									.txt{
										float: left;
										width: 50px;
										text-align: right;
										color: #999;
									}
									.priceShow em{
										font-size: 16px;
										color: #e2231a;
										font-family: verdana;
										font-weight: 700;
									}
								}
								.amount-sum{
									float: right;
									color: #999;
									line-height: 20px;
									cursor: pointer;
									em{
										color: #e2231a;
										font-weight: 700;
										font-family: verdana;
										margin: 0 3px;
									}
								}
							}
						}
					}
				}
			}
		}
	}

	/*浮动效果*/
	.cartFixed {
		position: fixed;
		bottom: -25px;
		left: 266px;
		background: #fff;
		box-shadow: 0 -1px 8px rgba(0, 1, 1, .08);

		.cartWidth {
			width: 1220px;
			margin: 0 auto;
		}

		.settLement {
			line-height: 50px;
			height: 50px;
		}
	}
</style>
