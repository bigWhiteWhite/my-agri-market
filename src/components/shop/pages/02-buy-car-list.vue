<template>
	<div>
		<div class="cart-tbody" v-for="(item,index) in carShop">
			<!-- 购买商品标题 -->
			<div class="shop">
				<div class="cart-checkbox">
					<!-- <input type="checkbox" name="checkShop" class="jdcheckbox"> -->
				</div>
				<span class="shop-txt">
					<a href="#" class="shop-name" target="_blank" rel="noreferrer">
						{{item.name}}
					</a>
				</span>
			</div>
			
			<!-- 购买商品列表 -->
			<div class="item-list">
				<div class="item-combine">
					<div class="item-item">
						<div class="item-form">
							<div class="cell p-checkbox">
								<div class="cart-checkbox">
									<input type="checkbox" name="checkItem"  
									class="jdcheckbox" @click="selectOne({productId:item.productId,index:index})">
									<span class="line-circle"></span><!-- :value="index" v-model="radio" -->
								</div>
							</div>
							<div class="cell p-goods">
								<div class="goods-item">
									<div class="p-img ">
										<a href="/" target="_blank">
											<img :src=item.image>
										</a>
									</div>
									<div class="p-msg">
										<div class="p-name">
											<a href="/" target="_blank">
												<i class="product-icon JD_SUPERMARKET" title=""></i>
												{{item.message}}
											</a>
										</div>
										<div class="p-extend p-extend-new"></div>
									</div>
								</div>
							</div>
							<div class="cell p-props"></div>
							<div class="cell p-price">
								<span class="p-price-cont">￥{{item.price/100}}</span>
							</div>
							
							<div class="cell p-quantity">
								<!-- 计数器 -->
								<el-input-number v-model="item.quantity" :min="1"  size="mini"
														@change="myallNum({count:item.quantity,productId:item.productId})">
								</el-input-number><!--  @change="handleChange" -->
								<p class="ac">有货</p>
							</div>
							<div class="cell p-sum"><strong>¥{{item.price/100*item.quantity}}</strong></div>
							<div class="cell p-ops">
								<el-button type="text" @click="deleteShop(item.productId)">删除</el-button>
							</div>
						</div>
						<div class="item-line clearfix"></div>
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
	data () {
    	return {
      		num:1,
			//radio:"0",
			allProductId:[]
    	}
  	},
	computed:{
		...mapState(['buyList','carShop']),
	},
	methods:{
	    ...mapActions(['selectOne','myallNum',]),
		deleteShop(productId){
			this.$confirm('确定从购物车删除此商品吗?', '删除商品', {
			  confirmButtonText: '确定',
			  cancelButtonText: '取消',
			  type: 'warning'
			}).then(() => {
			  this.$message({
				type: 'success',
				message: '删除成功!'
			  });
			  this.$nextTick(()=>{
				  this.$store.dispatch('del',productId)
			  })
			}).catch(() => {
			  this.$message({
				type: 'info',
				message: '已取消删除'
			  });          
			});
		}
	},
	mounted() {
		this.$axios.get('/cart/list')//渲染购物车列表
		.then(res=>{
			console.log(res)
			this.$store.state.carShop = res.data.data
			console.log(this.$store.state.carShop)
		})
		.catch(err=>{
			console.log(err)
		})
		checkItem = document.getElementsByName("checkItem")
		let selectAll = document.getElementsByName("select-all")
		checkItem.forEach(item=>{//改变全选按钮
			if(item.checked === false){
				this.$store.state.allSelect=false
				selectAll[0].checked = false
				selectAll[1].checked = false
				return
			}
		})
		let checkItem = document.getElementsByName("checkItem")
		this.$store.state.allNum = 0
		this.$store.state.carShop.forEach((item,index)=>{//很重要，循环遍历购物车，判断谁的selected是1，改变单选框的状态
			if(item.selected === 1){
				checkItem[index].checked = true
				this.$store.state.allNum +=1
			}else{
				checkItem[index].checked = false
			}
		})
		//计算购物车总价
		this.$store.dispatch('allPrice')
		
	}
}
</script>

<style lang="scss" scoped>

//购物车内容
.cart-tbody {
	margin-bottom: 20px;
	//购买商品标题
	.shop {
		height: 30px;
		line-height: 30px;
		padding-left: 11px;
		.cart-checkbox {
			z-index: 3;
			float: left;
			margin-right: 5px;

			.jdcheckbox {
				position: relative;
				vertical-align: middle;
				float: none;
				margin: 0 3px 0 0;
				padding: 0;
				z-index: 3;
			}
		}
		.shop-txt {
			float: left;
			width: 42%;
		
			.shop-name {
				color: #666;
				display: inline-block;
				*display: inline;
				*zoom: 1;
				max-width: 260px;
				overflow: hidden;
				vertical-align: middle;
				height: 30px;
				line-height: 30px;
				font-weight: 700;
		
				&:hover {
					color: #e2231a;
				}
			}
		}
	}

	//购买商品列表
	.item-list{
		@mixin t1 {
			float: left;
			padding: 15px 0 10px;
		}
		border: 1px solid #f1f1f1;
		border-top: 2px solid #aaa;
		background: #fff;
		.item-combine{
			position: relative;
			border-top: 1px solid #ccc;
			.item-form{
				display: block;
				border-top: 1px solid #f0f0f0;
				.p-checkbox{
					@include t1
					z-index: 3;
					width: 30px;
					min-height: 10px;
					margin-left: 10px;
					position: absolute;
					left: 0;
					top: 0;
					.cart-checkbox{
						z-index: 3;
						float: left;
						margin-right: 5px;
						.jdcheckbox{
							position: relative;
							vertical-align: middle;
							float: none;
							margin: 0 3px 0 0;
							padding: 0;
							z-index: 3;
						}
						.line-circle{
							display: block;
							position: absolute;
							z-index: 2;
							top: -5px;
							left: 5px;
							height: 25px;
							width: 1px;
						}
					}
				}
				.p-goods{
					@include t1
					width: 300px;
					margin-left: 50px;
					.goods-item{
						display: block;
						.p-img{
							position: relative;
							float: left;
							width: 80px;
							height: 80px;
							border: 1px solid #eee;
							margin-right: 10px;
							background: #fff;
							padding: 0;
							text-align: center;
							overflow: visible;
							a{
								color: #666;
								img{
									width: 100%;
									height: 100%;
								}
							}
						}
						.p-msg{
							.p-name{
								height: 40px;
								line-height: 20px;
								overflow: hidden;
								a{
									color: #666;
								}
							}
						}
					}
				}
				.p-props{
					@include t1
					width: 130px;
					min-height: 10px;
					line-height: 20px;
					overflow: hidden;
					padding: 15px 0 0 20px;
				}
				//价格
				.p-price{
					@include t1
					position: relative;
					width: 150px;
					padding-right: 50px;
					text-align: right;
					outline: none;
					margin-left: 70px;
					.p-price-cont{
						color: #333;
					}
				}
				//计数器
				.p-quantity{
					@include t1
					width: 84px;
					>>>.el-input-number--mini{
						width: 80px;
						.el-input-number__increase{
							width: 20px;
						}
						.el-input-number__decrease{
							width: 20px;
						}
						.el-input__inner{
							padding-left: 10px;
							padding-right: 10px;
						}
					}
					.ac{
						margin-left:25px;
						color: #aaa;
						font-size: 2px;
					}
				}
				//小计
				.p-sum{
					@include t1
					width: 100px;
					padding-right: 40px;
					text-align: right;
					font-family: verdana;
					margin-left:15px;
					strong{
						display: block;
						color: #333;
					}
				}
				.p-ops{
					@include t1
					width: 75px;
					margin-left:-20px;
					a{
						display: block;
						color: #666;
						font-size: 2px;
						&:hover{
							color: red;
						}
					}
				}
			}
		}
	}
}

.clearfix{
	*zoom: 1;
}
.clearfix:after,.clearfix:before{
	content: "";
	display: block;
	clear: both;
}
</style>
