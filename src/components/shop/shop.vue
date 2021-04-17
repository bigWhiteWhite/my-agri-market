<template>
	<div class="" v-if="isRouterAlive">
		<Head></Head>
		<Search></Search>
		<!-- 商品列表 -->
		<div class="navTitle">
			<el-menu class="el-menu-demo" mode="horizontal" background-color="#fff"
				text-color="black" active-text-color="#ff862c" :router="true">
				<!-- #ffd04b -->
				<el-menu-item index="/">
					首页
				</el-menu-item>
				<el-menu-item index="3"><a href="/" target="_blank">店铺档案</a></el-menu-item>
				<el-menu-item index="4"><a href="/" target="_blank">店铺资质</a></el-menu-item>
				<el-menu-item index="5"><a href="/" target="_blank">联系方式</a></el-menu-item>
			</el-menu>
		</div>
		<!-- 商品详情 -->
		<div class="detail">
			<div class="detail-meta">
				<div class="tm-clear">
					<div class="box-left">
						<!-- 商品图片 -->
						<el-carousel height="418px" indicator-position="none" :autoplay="false" @change="changeshop" arrow="never">
							<el-carousel-item>
								<!--v-for="item in imgUrl" :key="item.index"  -->
								<div class="magnifier">
									<div class="small-box" @mouseover="handOver" @mousemove="handMove" @mouseout="handOut">
										<img class="smallPic" :src="ImgUrl"/><!-- :src='imglist[0].url' -->
										<!-- 遮罩层-->
										<div class="magnifier-zoom" v-show="showMask" :style="{background: configs.maskColor,height: configs.maskWidth + 'px',
													  width: configs.maskHeight + 'px', 
													  opacity: configs.maskOpacity, 
													  transform: transformMask}">
										</div>
									</div>
								</div>
							</el-carousel-item>
						</el-carousel>
						<!-- 小图转换大图 -->
						<div class="little_img">
							<ul><!-- 修改这里图片 -->
								<li v-for="img in imglist" @click='getIndex(img.url)' @mouseenter="getIndex(img.url)">
									<img :src="img.url" style="width: 50px; height: 50px">
								</li>
							</ul>
						</div>
						<!-- 放大区域 -->
						<div class="magnifier-layer" v-show="showMagnifier" :style="{ width: configs.width + 'px', 
											height: configs.height + 'px', left: configs.width + 20 + 'px' }">
							<div class="big-box" :style="{ width: bigWidth + 'px',height: bigHeight + 'px',left: moveLeft,top: moveTop}">
								<div class="big-box-img" :style="{ 
								  width: bigWidth - 2  + 'px', 
								  height: bigHeight - 2 + 'px' 
							  }">
									<img :src="ImgUrl" :style="{ 
								  minWith: bigWidth - 2 + 'px', 
								  minHeight: bigHeight -2 + 'px' ,
								  }" />
								</div>
							</div>
						</div>

						<!-- 分享收藏 -->
						<ul class="btn-list">
							<li class="">
								<i class="iconfont icon-xihuan"></i>
								<span>收藏</span>
							</li>
							<li class="">
								<i class="icon icon-video-share"></i>
								<span>分享</span>
							</li>
						</ul>
						
					</div>
					
					<shopRight></shopRight>
				</div>
			</div>
		</div>
		<!-- 更多信息 -->
		<moreDetail></moreDetail>
	</div>
</template>

<script>
	import Head from '../home/head/head-top.vue'
	import Search from '../home/head/search.vue'
	import shopRight from './shop-right.vue'
	import moreDetail from './shop-detail.vue'
	export default {
		name: '',
		components: {
			Head,Search,shopRight,moreDetail
		},
		data() {
			return {
				isRouterAlive:true,
				data:{},
				imglist:{},
				imgObj:{},
				ImgUrl: '', //大图片默认显示第一张
				configs: {
					width: 418, //放大区域
					height: 418, //放大区域
					maskWidth: 210, //遮罩
					maskHeight: 210, //遮罩
					maskColor: 'rgba(25,122,255,0.5)', //遮罩样式
					maskOpacity: 0.6,
					scale: 2, //放大比例
				},
				moveLeft: 0,
				moveTop: 0,
				transformMask: `translate(0px, 0px)`,
				showMagnifier: false,
				showMask: false,
			}
		},
		computed: {
			bigWidth() {
				return this.configs.scale * this.configs.width;
			},
			bigHeight() {
				return this.configs.scale * this.configs.height;
			}
		},
		methods: {
			//点击小图片时将图片路径赋值给大图
			getIndex(imgUrl) {
				this.ImgUrl = imgUrl;
			},
			$init() {
				this.imgObj = this.$el.getElementsByClassName('small-box')[0].getBoundingClientRect();
				setTimeout(() => {
					this.imgObj = this.$el.getElementsByClassName('small-box')[0].getBoundingClientRect();
				}, 500);
			},
			changeshop(e) {
				this.showMagnifier = false;
				this.showMask = false;
				this.transformMask = `translate(0px, 0px)`
				this.moveLeft = 0
				this.moveTop = 0
			},
			handMove(e) {
				// 动态获取小图的位置（或者监听 scroll ）
				let imgRectNow = this.imgObj;//这里出现过问题，跳转其他路由时无法及时的获取imgObj对象，因为$init函数的定时器延迟500ms
				//console.log(imgRectNow)
				let objX = e.clientX - imgRectNow.left;
				let objY = e.clientY - imgRectNow.top;

				// 计算初始的遮罩左上角的坐标
				let maskX = objX - this.configs.maskWidth / 2;
				let maskY = objY - this.configs.maskHeight / 2;

				// 判断是否超出界限,并纠正
				maskY = maskY < 0 ? 0 : maskY;
				maskX = maskX < 0 ? 0 : maskX;
				if (maskY + this.configs.maskHeight >= imgRectNow.height) {
					maskY = imgRectNow.height - this.configs.maskHeight;
				}
				if (maskX + this.configs.maskWidth >= imgRectNow.width) {
					maskX = imgRectNow.width - this.configs.maskWidth;
				}

				// 遮罩移动
				this.transformMask = `translate(${maskX}px, ${maskY}px)`;

				// 背景图移动
				this.moveLeft = -maskX * this.configs.scale + "px";
				this.moveTop = -maskY * this.configs.scale + "px";
			},
			handOut() {
				this.showMagnifier = false;
				this.showMask = false;
			},
			handOver() {
				this.showMagnifier = true;
				this.showMask = true;
			}
		},
		mounted() {
			this.isRouterAlive = false
			console.log(this.$route.query.pid)
			this.$init()
			var params = new URLSearchParams()
			params.append("pid",this.$route.query.pid)/* this.$store.state.pid */
			this.$axios.post('/product/detail/',params)
			.then(res=>{
			    if(res.status===200){
					this.isRouterAlive = true
			    	this.data =  res.data.data
					this.imglist =  res.data.data.imageList
					this.ImgUrl = this.imglist[0].url
					console.log(123)
					console.log(this.data)
					//console.log(this.imglist)
			    }else{
			   	 return 'error'
			    }
			})  
			.catch(err=>{
				console.log(err)
			})
		},
	}
</script>

<style lang="scss" scoped>
	.navTitle {
		height: 46px;
		width: 1200px;
		margin: 0 auto;
		font-size: 16px;
		color: #222;
	}

	.detail {
		width: 1190px !important;
		margin: 20px auto;

		.detail-meta {
			min-height: inherit;
			width: 990px;
			position: relative;
			z-index: 100;
			min-height: 600px;

			.tm-clear {
				padding: 0;
				margin: 0;

				.box-left {
					float: left;
					width: 418px;
					position: relative;
					/* 放大图片开始 */
					.small-box {
						position: relative;
						margin: 0 auto;
					}

					.magnifier-zoom {
						position: absolute;
						top: 0;
						left: 0;
					}

					.magnifier-layer {
						position: absolute;
						top: 0;
						right: 0;
						z-index: 1000;
						overflow: hidden;
						background-color: #fff;
					}

					.big-box {
						position: absolute;
					}

					.magnifier {
						position: relative;
						width: 418px;
						height: 418px;
						border-radius: 8px;
					}
					/* 放大图片结束 */
					.smallPic {
						width: 418px;
						height: 418px;
						border-radius: 8px;
					}
					//小图转换大图开始
					.little_img {
						text-align: center;
						margin-left: -16px;
						white-space: nowrap;
						position: relative;
						transition: left .2s cubic-bezier(0, 0, .25, 1);
						font-size: 0;
						list-style: none;

						li {
							display: inline-block;
							margin: 0 0 0 16px;
							padding-top: 22px;

							img {
								&:hover {
									border: 2px solid #39bf3e;
								}
							}
						}
					}
					//收藏按钮开始
					.btn-list{
						margin-top: 20px;
						cursor: pointer;
						list-style: none;
						li{
							margin-right: 20px;
							display: inline-block;
							font-size: 14px;
							color: #999;
						}
					}
				}
			}
		}
	}
</style>
