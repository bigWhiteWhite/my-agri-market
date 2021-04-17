<template>
	<div class="buy-car">
		<div class="cart-filter-bar">
			<ul class="switch-cart">
				<li class="switch-cart-item">
					<a href="#">
						<em>全部商品</em><span class="number">3</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="cart-thead">
			<div class="column t-checkbox">
				<div class="cart-checkbox">
					<input type="checkbox" name="select-all" class="jdcheckbox" @click="selectAll">
				</div>
				全选
			</div>
			<div class="column t-goods">商品</div>
			<div class="column t-props">&nbsp;</div>
			<div class="column t-price">单价</div>
			<div class="column t-quantity">数量</div>
			<div class="column t-sum">小计</div>
			<div class="column t-action">操作</div>
		</div>

		<!-- 购物车列表 -->
			<buyCarList></buyCarList>
		<!--  -->
		<buyCarListFoot></buyCarListFoot>
	</div>
</template>

<script>
	import buyCarList from './02-buy-car-list.vue'
	import buyCarListFoot from './02-buy-car-list-foot.vue'
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default {
		name: '',
		components:{
			buyCarList,buyCarListFoot
		},
		data() {
			return {
			}
		},
		computed:{
			...mapState(['buyList']),
		},
		methods:{
		    ...mapActions(['selectAll']),
			
		},
		mounted() {
			this.$store.state.buyActive = 1
			
			
		}
	}
</script>

<style lang="scss" scoped>
	.buy-car {
		position: relative;

		.cart-filter-bar {
			margin-top: 10px;
			position: relative;
			z-index: 100;
			width: 100%;
			height: 40px;

			.switch-cart {
				float: left;
				position: relative;
				overflow: hidden;

				.switch-cart-item {
					float: left;
					position: relative;
					font-weight: 700;
					font-size: 16px;
					height: 28px;
					line-height: 28px;
					text-align: center;
					padding: 0 0 10px;
					cursor: pointer;
					margin: 5px 30px 0 0;

					a {
						em {
							color: #e2231a;
						}

						.number {
							color: #e2231a;
							font-size: 14px;
							margin-left: 5px;
						}
					}
				}
			}
		}

		//购物车头部
		.cart-thead {
			display: block;
			height: 42px;
			line-height: 32px;
			margin: 0 0 10px;
			padding: 5px 0;
			background: #f3f3f3;
			border: 1px solid #e9e9e9;
			border-top: 0;
			position: relative;

			.column {
				float: left;
			}

			.t-checkbox {
				float: left;
				height: 18px;
				line-height: 18px;
				padding-top: 7px;
				width: 122px;
				padding-left: 11px;

				.cart-checkbox {
					position: relative;
					z-index: 3;
					float: left;
					margin-right: 5px;
				}
			}

			.t-goods {
				float: left;
				width: 208px;
			}

			.t-props {
				float: left;
				width: 250px;
				height: 32px;
			}

			.t-price {
				float: left;
				width: 120px;
				padding-right: 50px;
				text-align: right;
			}

			.t-quantity {
				float: left;
				width: 80px;
				text-align: center;
			}

			.t-sum {
				float: left;
				width: 100px;
				padding-right: 40px;
				text-align: right;
			}

			.t-action {
				float: left;
				width: 75px;
			}
		}

		
	}
</style>
