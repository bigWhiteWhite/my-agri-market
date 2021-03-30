<template>
	<div class="product-right">
		<div class="daohang">
			<el-tabs v-model="activeName">
				<el-tab-pane label="商品详情" name="first">
					<div class="detail-text fs14 gray6">
						<p class="fs18 small-title">商品属性</p>
						<ul class="eye-flex eye-flex-wrap detail-text-render eye-renderer">
							<li class="eye-renderer__item" style="width:33.333333333333336%;" v-for="(item,index) in message" :key = 'item.nid'>
								<div class="eye-renderer__inner"><span>{{item.name}}:</span> <span>{{item.propertyValueVoList[0].value}}</span></div>
							</li>
						</ul>
					</div>
					<div class="product-detail gray6">
						<p class="fs18 small-title">商品详情</p>
						<p class="description fs14">
							{{data.detail}}
						<p class="fs14 ">可以提供：<span class="fs14-span">基地直供、产地代办、送货上门、协助找车、支持代卖、技术跟车</span></p>
					</div>
					<!-- 图片导航开始 -->
					<div class="swiper">
						 <el-carousel :interval="4000" type="card" height="200px">
						    <el-carousel-item v-for="item in data.imageList" :key="data.imageList.id">
								<img :src="item.url" alt="">
						    </el-carousel-item>
						  </el-carousel>
					</div>
				</el-tab-pane>
				<el-tab-pane label="采购评价" name="second"></el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				activeName: 'first',
				data:{},
				message:{},
			}
		},
		mounted() {
			var params = new URLSearchParams
			params.append("pid",this.$route.query.pid)
			this.$axios.post('/product/detail',params)
			.then(res=>{
				this.data = res.data.data
				this.message = res.data.data.propertyNameList
			})
			.catch(err=>{
				console.log(err)
			})
			
		}
	}
</script>

<style lang="scss" scoped>
	.product-right {
		float: left;
		width: 990px;

		.daohang {
			width: 100%;

			>>>.el-tabs__active-bar {
				background-color: #f15a29;
			}

			>>>.el-tabs__item.is-active {
				color: red;
			}

			>>>.el-tabs__item {
				width: 250px;
				text-align: center;
				font-size: 20px;
			}
			@mixin t1 {
				color: #222;
				position: relative;
				padding-left: 14px;
				line-height: 24px;
				margin-bottom: 10px;
				font-size: 18px;
				
				&::after {
					display: block;
					content: '';
					height: 18px;
					width: 4px;
					border-radius: 2px;
					background-color: #FF442F;
					position: absolute;
					top: 4px;
					left: 0;
				}
			}
			.detail-text {
				margin: 20px 0;
				width: 670px;
				padding: 0 10px;
				.small-title {
					@include t1
				}
				ul {
					display: flex;
					padding: 5px 10px;
					border: none;
					font-size: 12px;
					list-style: none;
					color: #646464;

					li {
						font-size: 16px;
					}
				}
			}
			
			.product-detail{
				margin: 20px 0;
				width: 670px;
				padding: 0 10px;
				margin-bottom: 60px;
				text-align: left;
				margin: 30px 0 30px 0;
				line-height: 24px;
				.small-title{
					@include t1
				}
				p{
					padding: 0 10px;
					font-size: 15px;
					margin-top:20px ;
					color: #222;
				}
			}
			
			.swiper{
				width: 580px;
				img{
					width: 100%;
					height: 100%;
				}
				.el-carousel__item h3 {
				    color: #475669;
				    font-size: 14px;
				    opacity: 0.75;
				    line-height: 200px;
				    margin: 0;
				  }
				  
				  .el-carousel__item:nth-child(2n) {
				    background-color: #99a9bf;
				  }
				  
				  .el-carousel__item:nth-child(2n+1) {
				    background-color: #d3dce6;
				  }
			}
		}
	}
</style>
