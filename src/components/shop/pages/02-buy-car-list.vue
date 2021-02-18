<template>
	<div>
		<div class="cart-tbody" v-for="(item,index) in buyList">
			<!-- 购买商品标题 -->
			<div class="shop">
				<div class="cart-checkbox">
					<input type="checkbox" name="checkShop" class="jdcheckbox">
				</div>
				<span class="shop-txt">
					<a href="#" class="shop-name" target="_blank" rel="noreferrer">
						{{item.title}}
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
									<input type="checkbox" name="checkItem" class="jdcheckbox" @click="selectOne(index)">
									<span class="line-circle"></span>
								</div>
							</div>
							<div class="cell p-goods">
								<div class="goods-item">
									<div class="p-img ">
										<a href="/" target="_blank">
											<img :src=item.img>
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
								<span class="p-price-cont">￥{{item.price}}</span>
							</div>
							
							<div class="cell p-quantity">
								<!-- 计数器 -->
								<el-input-number v-model="item.num" :min="1"  size="mini"
														@change="myallNum">
								</el-input-number><!--  @change="handleChange" -->
								<p class="ac">有货</p>
							</div>
							<div class="cell p-sum"><strong>¥{{item.price*item.num}}</strong></div>
							<div class="cell p-ops">
								<a class="p-ops-item" @click="del(index)">删除</a>
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
    	}
  	},
	computed:{
		...mapState(['buyList']),
	},
	methods:{
	    ...mapActions(['del','selectOne','myallNum',]),
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
					padding-right: 40px;
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
