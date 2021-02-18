v<template>
	<div class="content-newest">
		<div class="newest">
			<div class="lastest-supply">
				<div class="lastest-supply-top">
					<div class="left">
						<div class="lastest-supply-top-title">最新供应</div>
						<span>实时掌握最新供应</span>
					</div>
					<a href="/" target="_blank" class="more">
						<div class="right">
							<i class="iconfont icon-lanmujiantou" style="font-size:12px;"></i>
							<Icon type="ios-arrow-forward" />
						</div>
					</a>
				</div>
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-inner">
							 <el-carousel  :autoplay="false" arrow="never"  trigger="click">
							    <el-carousel-item >
									<div class="newest-supply" v-for="(item02,index) in mySupply" :key="item02.id">
										<a href="/gongying/4802425/" target="_blank" >
											<div class="news-img-div">
												<img :alt="item02.news" :src="item02.path" class="s-img-default newest-supply-img"  lazy="loaded">
											</div>
											<div :title="item02.news" class="newest-supply-title">
											{{item02.news}}
											</div> 
											<div class="newest-supply-price" >
												{{item02.price}}<span >元/箱</span>
											</div>
										</a>
									</div>
							    </el-carousel-item>
								<el-carousel-item >
									<div class="newest-supply" v-for="(item,index) in mySupply02" :key="item.id">
										<a href="/gongying/4802425/" target="_blank" >
											<div class="news-img-div">
												<img :alt="item.news" :src="item.path" class="s-img-default newest-supply-img"  lazy="loaded">
											</div>
											<div :title="item.news" class="newest-supply-title">
											{{item.news}}
											</div> 
											<div class="newest-supply-price" >
												{{item.price}}<span >元/箱</span>
											</div>
										</a>
									</div>
								</el-carousel-item>
							  </el-carousel>
						</div>
					</div>
				</div>
			</div>
			<div class="lastest-purchase"><!-- 最新采购 -->
				<div class="lastest-purchase-top">
					<div class="left">
						<div class="lastest-purchase-top-title">最新采购</div>
						<span>实时掌握采购信息</span>
					</div>
					<a href="/" target="_blank" class="more">
						<div class="right">
							<i class="iconfont icon-lanmujiantou" style="font-size:12px;"></i>
							<Icon type="ios-arrow-forward" />
						</div>
					</a>
				</div>
				<contentNewest02></contentNewest02>
				
			</div>
			<div class="lastest-quotation"><!-- 产地行情 -->
				<div class="lastest-quotation-top">
					<div class="left">
						<div class="lastest-quotation-top-title">产地行情</div>
						<span>{{nowTime}}</span>
					</div>
					<a href="/" target="_blank" class="more">
						<div class="right">
							<i class="iconfont icon-lanmujiantou" style="font-size:12px;"></i>
							<Icon type="ios-arrow-forward" />
						</div>
					</a>
				</div>
				
				<contentNewest03></contentNewest03>
			</div>
		</div>
	</div>
</template>

<script>
import contentNewest02 from './content-newest02.vue'
import contentNewest03 from './content-newest03.vue'
import moment from 'moment'
export default {
	components:{
		contentNewest02,contentNewest03
	},
	name: '',
	data () {
    	return {
			nowTime:"",
			mySupply:[{id:"01",news:"赣南脐橙水果新鲜当季整箱橙子应季现季正宗江西脐橙赣州",price:"84",path:"https://image.cnhnb.com//image/jpeg/head/2019/11/05/7d877da93ae947bbab558ab328b67dfc.jpeg?imageView2/1/w/351/h/351/format/jpg/interlace/1/quality/100/ignore-error/1"},
						{id:"02",news:"手剥巴旦木，精选好果，奶香味。整箱散装，一件10斤",price:"35",path:"https://image.cnhnb.com/image/jpeg/head/2019/11/15/1abca8247a2b467e8cb31a02f57423c4.jpeg?imageView2/1/w/351/h/351/format/jpg/interlace/1/quality/100/ignore-error/1"},
						{id:"03",news:"洪湖市市大闸蟹  湖北洪湖市大闸蟹原产地直供",price:"115",path:"https://image.cnhnb.com/image/jpeg/head/2019/10/28/1d0acc6e8c6b414a8981754934e22a3c.jpeg?imageView2/1/w/351/h/351/format/jpg/interlace/1/quality/100/ignore-error/1"},
						{id:"04",news:"迁西板栗  2020迁西老树鲜板栗，不掺假，坏果陪付，（5斤试炒装包邮）",price:"56",path:"https://image.cnhnb.com/image/jpeg/head/2020/11/03/964708fe96c64c89b35b3b1d38ca5a5f.jpeg?imageView2/1/w/351/h/351/format/jpg/interlace/1/quality/100/ignore-error/1"}],
			mySupply02:[{id:"01",news:"长白山人参  长白山6年林下人参白参原皮生晒参白全须一手货源全国包邮",price:"78",path:"https://image.cnhnb.com/image/jpeg/head/2020/03/24/91ab5987a6f84993a5ebf0c824c424ff.jpeg?imageView2/1/w/351/h/351/format/jpg/interlace/1/quality/100/ignore-error/1"},
						{id:"02",news:"配合饲料  颗粒饲料，适合散养柴鸡，麻鸡，三黄鸡，公鸡，杂交肉鸡，乌鸡等",price:"89",path:"https://image.cnhnb.com/image/jpeg/head/2021/01/14/ec9db5a6380c461fa4e8e64c8eb1d7ea.jpeg?imageView2/1/w/351/h/351/format/jpg/interlace/1/quality/100/ignore-error/1"},
						{id:"03",news:"冬桃苗  中华二号冬桃树苗，嫁接苗，基地直供，现挖现发，保证成活率",price:"45",path:"https://image.cnhnb.com/image/jpeg/head/2020/11/17/2d8cf45676df4c79bfeaae35020d4018.jpeg?imageView2/1/w/351/h/351/format/jpg/interlace/1/quality/100/ignore-error/1"},
						{id:"04",news:"新疆核桃  2020年新货，新疆薄皮核桃，手捏既开，不满意退",price:"80",path:"https://image.cnhnb.com/image/jpeg/head/2020/06/24/b749d243ccaa4d5e8f393d7ca635547d.jpeg?imageView2/1/w/351/h/351/format/jpg/interlace/1/quality/100/ignore-error/1"}]
    	}
  	},
	mounted() {
		this.nowTime = moment().format('YYYY-MM-DD')
	}
}
</script>

<style lang="scss" scoped>
.content-newest{
	position: relative;
	height: 635px;
	background-color: #f2f2f2;
	.newest{
		position: relative;
		background-color: #f2f2f2;
		top: 160px;
		height: 475px;
		display: -webkit-box;
		display: flex;
		margin: 0 auto;
		width: 1200px;
		@mixin lastest {
			width: 392px;
			height: 475px;
			background-color: #fff;
		}
		@mixin t3{
			display: -webkit-box;
			display: flex;
		}
		@mixin lastest02{
			margin-left: 20px;
			margin-top: 20px;
			-webkit-box-pack: justify;
			justify-content: space-between;
			-webkit-box-align: center;
			align-items: center;
		}
		@mixin lastest03{
			font-family: MicrosoftYaHei-Bold;
			font-family: PingFangSC-Regular;
			font-size: 24px;
			color: #222;
			letter-spacing: 0;
		}
		@mixin lastest04 {
			margin-left: 10px;
			font-family: MicrosoftYaHei;
			font-family: PingFangSC-Regular;
			font-size: 12px;
			color: #909090;
			letter-spacing: 0;
			line-height: 40px;
		}
		@mixin lastest05 {
			display: -webkit-box;
			display: flex;
			-webkit-box-pack: center;
			justify-content: center;
			-webkit-box-align: center;
			align-items: center;
			height: 24px;
			width: 24px;
			margin-right: 20px;
			border: 1px solid #39bf3e;
			border-radius: 50px;
			color: #39bf3e;
		}
		@mixin lastest06 {
			font-family: iconfont!important;
			font-size: 16px;
			font-style: normal;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
		@mixin lastest-supply-swiper {
			-ms-transform-style: preserve-3d;
			-moz-transform-style: preserve-3d;
			-webkit-transform-style: preserve-3d;
		}
		
		.lastest-supply{
			@include lastest
			.lastest-supply-top{//最新供应头部
				@include t3;
				@include lastest02;
				.left{
					@include t3;
					.lastest-supply-top-title{
						@include lastest03;
					}
					span{
						@include lastest04;
					}
				}
				a{
					text-decoration: none;
					.right{
						@include lastest05;
						.iconfont{
							@include lastest06;
						}
						
					}
				}
			}
			.swiper-container{
				margin: 0 auto;
				position: relative;
				overflow: hidden;
				z-index: 1;
				.swiper-wrapper{
					@include lastest-supply-swiper
					transform: translate3d(0px, 0px, 0px);
					transition-duration: 0ms;
					z-index: 1;
					display: -webkit-box;
					display: flex;
					-webkit-transition-property: -webkit-transform;
					transition-property: -webkit-transform;
					transition-property: transform;
					transition-property: transform,-webkit-transform;
					-webkit-transform: translateZ(0);
					transform: translateZ(0);
					box-sizing: content-box;
					.swiper-inner{
						width: 392px;
						-webkit-flex-shrink: 0;
						-ms-flex: 0 0 auto;
						flex-shrink: 0;
						@include lastest-supply-swiper
						>>>.el-carousel__button{//改变指示器的颜色
							background-color:#39bf3e;
						}
						.el-carousel--horizontal{
							height: 416px;
							width: 100%;
							background-color: #fff;
							>>>.el-carousel__container{
								height: 374px;
								width: 285px;
								-webkit-flex-shrink: 0;
								-ms-flex: 0 0 auto;
								flex-shrink: 0;
								.el-carousel__item{
									//height: 364px;
									margin-left: 51px;
									margin-right: 56px;
									-webkit-box-pack: justify;
									justify-content: space-between;
									display: -webkit-box;
									display: flex;
									flex-wrap: wrap;
									.newest-supply{
										height: 170px;
										width: 110px;
										margin-top: 20px;
										overflow: hidden;
										a{
										    .news-img-div{
												height: 110px;
												width: 110px;
												overflow: hidden;
												transition: 0.5s;
												&:hover{
													transform: scale(1.1);
												}
												img{
													height: 110px;
													width: 110px;
													border-radius: 2px;
												}
											}
											.newest-supply-title{
												text-align: center;
												margin-top: 6px;
												font-family: MicrosoftYaHei;
												font-family: PingFangSC-Regular;
												font-size: 14px;
												color: #222;
												letter-spacing: 0;
												width: 110px;
												white-space: nowrap;
												text-overflow: ellipsis;
												overflow: hidden;
											}
											.newest-supply-price{
												margin-top: 5px;
												font-family: MicrosoftYaHei-Bold;
												font-family: PingFangSC-Regular;
												font-size: 18px;
												color: #ff442f;
												letter-spacing: 0;
												text-align: center;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
		.lastest-purchase{
			width: 391px;
			height: 475px;
			background-color: #fff;
			margin-left: 10px;
			@include lastest
			.lastest-purchase-top{
				@include t3;
				@include lastest02;
				.left{
					@include t3;
					.lastest-purchase-top-title{
						@include lastest03;
					}
					span{
						@include lastest04;
					}
				}
				a{
					text-decoration: none;
					.right{
						@include lastest05;
						.iconfont{
							@include lastest06;
						}
					}
				}
			}
		}
		
		.lastest-quotation{
			width: 397px;
			height: 475px;
			margin-left: 10px;
			background-color: #fff;
			.lastest-quotation-top{
				@include t3;
				@include lastest02;
				.left{
					@include t3;
					.lastest-quotation-top-title{
						@include lastest03;
					}
					span{
						@include lastest04;
					}
				}
				a{
					text-decoration: none;
					.right{
						@include lastest05;
						.iconfont{
							@include lastest06;
						}
					}
				}
			}
		}
	}
}
</style>
