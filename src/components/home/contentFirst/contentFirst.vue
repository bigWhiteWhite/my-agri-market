<template>
  <div class="contentFirst">
	<div class="content-outSwiper">
		<div class="content-inSwiper">
			<div class="fruit-left-navs"><!-- 菜单导航 -->
				<el-menu  class="el-menu-vertical-demo"
					@open="handleOpen" @close="handleClose" :collapse="isCollapse" v-for="(item,index) in data" :key = item.id >
					<el-submenu index="1">
						<template slot="title"><!-- 一级目录 -->
							<div class="shucai">
								  <i class="iconfont icon-chukudan"></i>
								  <i >{{item.name}}</i>
							</div>
							<span slot="title">{{item.name}}</span>
							<el-divider></el-divider>
						</template>
						<!-- 二级目录 -->
						<el-menu-item index="2-4" v-for="(item02,index) in item.childCategory" :key = item02.id>
						  <template slot="title">{{item02.name}}</template>
						</el-menu-item>
					  </el-submenu>
				</el-menu>
			</div>
			<div class="content-inSwiper-Swiper"><!-- content里面轮播图 -->
				<el-carousel height="380px" >
				      <el-carousel-item v-for="(item,index) in inSwiper" :key=item.id class='noaho02'>
				        <div class="demo-carousel">
				        	<img :src="item.path" alt="" style="width: 100%;height: 100%;">
				        </div>
				      </el-carousel-item>
				</el-carousel>
			</div>
			<ul class="fruit-groom"><!-- 批发等 -->
				<li v-for="(item,index) in fruit" :key='item.id'>
					<a href="/" target="_blank" >
						<div>
							<img :src="item.path" alt="">
						</div>
					</a>
				</li>
			</ul>
				
		</div>
	</div>
	<!-- 最新供应等 -->
	<contentNewest></contentNewest>
  </div>
</template>

<script>
import contentNewest from './content-newest.vue'
export default {
	name: 'contentFirst',
	components:{
		contentNewest
	},
	data () {
		return {
			data:{},
			list:{},
			childCategory:[
				//{"禽畜苗","鸡苗","鸭苗","鹅苗","猪苗","蛋类"}
			],
			setting:{autoplay:false},
			isCollapse: true,
			inSwiper:[{id:"01",title:"蔬菜水果",path:'../../../../static/农贸轮播背景/swiper02.jpg'},
					{id:"02",title:"新鲜水产",path:'../../../../static/农贸轮播背景/swiper01.jpg'},
					{id:"03",title:"禽畜肉蛋",path:'../../../../static/农贸轮播背景/swiper03.jpg'},
					{id:"04",title:"农副加工",path:'../../../../static/农贸轮播背景/swiper04.jpg'}
					],
			fruit:[{id:'1',path:"//files.cnhnb.com/fas/home/img/60e6c2b.png"},
					{id:'2',path:"https://files.cnhnb.com/fas/home/img/0bd5720.png"},
					{id:'3',path:"https://files.cnhnb.com/fas/home/img/c08ba40.png"},
					{id:'4',path:"https://files.cnhnb.com/fas/home/img/5b94cc1.png"}]
						
		}
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	},
	mounted(){
		this.$axios.get('/category/list')
		.then(res=>{
			this.data = res.data.data
			this.list = res.data.data
			//console.log(this.data)
			//console.log(this.data)
		})
		.catch(err=>{
			
		})
	}
}
</script>

<style lang="scss" scoped>
.contentFirst{
	position: relative;
	margin: 0 auto;
	width: 100%;
	font-family: PingFangSC-Regular;
	font-size: 14px;
	letter-spacing: 0;
	background-color: #f2f2f2;
	//content的轮播图
	.content-outSwiper{
		-webkit-tap-highlight-color: transparent;
		padding: 0;
		margin: 0;
		outline: none;
		box-sizing: border-box;
		border: none;
		position: relative;
		width: 100%;
		height: 380px;
		transition: all 1.5s;
		.content-inSwiper{
			position: relative;
			left: 0;
			top: 0px;
			margin: 0 auto;
			width: 1200px;
			height: 512px;
			font-family: PingFangSC-Regular;
			font-size: 14px;
			letter-spacing: 0;
			z-index: 88;
			//content的导航菜单
			.fruit-left-navs{
				position: relative;
				left: 0px;
				top: 0px;
				height: 508px;
				width: 200px;
				display: inline-block;
				z-index: 99;
				.el-submenu.is-active .el-submenu__title{
					top: 0;
				}
				.el-divider--horizontal{
					margin: 10px 0;//改变上下间隔
					color: black;
				}
				.el-submenu__title{
					//color: #39bf3e;
					.shucai{
						float: left;
						width: 40px;
						height: 30px;
						svg{
							width: 100%;
							height: 100%;
						}
					}
				}
				.el-menu--collapse{
					width: 201px;//改变宽度
					height: 76px;
					color: black;
					.el-submenu{    //
						&:nth-of-type(1){
							top: 0px;//改变·里的位置
							height: 100%;//改变点击框高度
						}
					}
					
				}
				>>>.el-submenu__title:hover{
					//background-color: pink;改变hover颜色
				}
				.el-menu-vertical-demo:not(.el-menu--collapse) {
				    width: 200px;
				    min-height: 400px;
				 }
				.el-divider--horizontal{//改变下横线的颜色和位置
					top: -11px;
					background-color: #39bf3e;
				}
			}
			//里面的轮播图
			.content-inSwiper-Swiper{
				position: relative;
				top: -507px;
				left: 210px;
				width: 990px;
				height: 380px;
			}
			
			.fruit-groom{
				margin-top: -495px;
				margin-right: 0px;
				float: right;
				li{
					overflow: hidden;
					margin-left: 10px;
					float: left;
					img:hover{
						transition: 1s;
						transform:scale(1.1) ;
					}
				}
			}
			
		}
	}
}
</style>

