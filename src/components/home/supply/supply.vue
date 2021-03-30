<template>
	<div class="supply">
		<div class="g-content">
			<div class="search-bar">
				<div class="separator"><!-- 面包屑 -->
					<el-breadcrumb separator-class="el-icon-arrow-right">
					  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					  <el-breadcrumb-item>供应大厅</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				
				<ul class="search-bar-ul"><!-- 一级目录 -->
					<li class="sub-row" v-for="(item,index) in data"
						:key="item.id" @click="twoCatalog(item.id,item.name)">
						<el-button round>{{item.name}}</el-button>
					</li> 
				</ul>
				<ul class="small-search-bar-ul" style="display: none;" id="small-search-bar-ul"><!-- 二级目录 -->
					<li class="small-sub-row" v-for="(item,index) in twochildCategory" 
						:key="item.id" @click="threeCatalog(item.id,item.name)">
						 <el-button round size="small"  type="success">{{item.name}}</el-button>
					</li>
				</ul>
				<ul class="mini-search-bar-ul" style="display: none;" id="mini-search-bar-ul"><!-- 三级目录 -->
					<li class=" mini-sub-row" v-for="(item,index) in threechildCategory" 
						:key="item.id" @click="threeSearch(item.name)">
						 <el-button round size="mini"  type="warning">{{item.name}}</el-button>
					</li>
				</ul>
				<el-divider></el-divider>
				<div class="hot"><!-- 热门推荐 -->
					<el-link type="success" :underline="false">热门推荐</el-link>
					<div class="hot-supply">
						<div class="hot-supply-item" v-for="(item,index) in hot" :key="item.id">
							<a @click="changeKey(item.name)">{{item.name}}</a>
						</div>
					</div>
				</div>
				
				<el-divider></el-divider>
				
				<div class="recommend-right">
					<div class="index-item-bg" v-for="(item,index) in list" :key=item.pid >
						<div class="product-v2">
							<router-link  :to = "{name:'shop',query:{pid:`${item.pid}`}}" target="_blank">
								<div class="data-imgs">
									<img :src=item.image class="s-img-default" lazy="loaded">
									<div class="vedio-icon"><img src="//files.cnhnb.com/fas/home/img/59b9079.png" alt=""></div>
								</div>
								<div class="shops-text">
									<div class="shops-price-bg">
										<div class="shops-price">¥<span class="sp1">{{item.price/100}}</span><span class="sp2">{{item.unit}}</span></div>
										<div class="turnover">成交15.4万元</div>
									</div>
								</div>
								<div class="title-field">
									<div class="title one-line">
										<div class="title-tag">优选</div>{{item.name}}
									</div>
									<div class="cw-tags">
										<div class="cw-tag icon-item-005">部分包邮</div>
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
							</router-link>
						</div>
					</div>
				</div>
				
				<div class="pagination">
					<el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000"></el-pagination>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: '',
	data () {
    	return {
      		data:{},
			hot:{},
			list:{},
			currentPage:1,
			keyName:'',
			twochildCategory:{},
			threechildCategory:{}
    	}
  	},
	watch:{
		'$route':function(){//当搜索关键字(传递过来的this.route.query)发生改变,那么重新搜索
			this.search()
		}
	},
	methods:{
		//获取二级目录
		twoCatalog(a,key){
			//console.log(key)
			var params = new URLSearchParams
			params.append("categoryId",a)
			this.$axios.get('/category/listByOne',{params})
			.then(res=>{
				//console.log(res.data.data)
				this.twochildCategory = res.data.data
				//console.log(this.twochildCategory)
			})
			.catch(err=>{
				console.log(err)
			})
			document.getElementById('small-search-bar-ul').style.display = ''
			document.getElementById('mini-search-bar-ul').style.display = 'none'
			//this.$router.push({name:'Supply',query:{'name':key}})
			//this.search()
		},
		//获取三级目录
		threeCatalog(b,key){
			//if(!this.childCategory){
				var params = new URLSearchParams
				params.append("categoryId",b)
				this.$axios.get('/category/listByOne',{params})
				.then(res=>{
					//console.log(res.data.data)
					this.threechildCategory = res.data.data
				})
				.catch(err=>{
					console.log(err)
				})
			//}
			document.getElementById('mini-search-bar-ul').style.display = ''
			//this.$router.push({name:'Supply',query:{'name':key}})
			//this.search()
		},
		handleCurrentChange(val) {//获取分页符
			this.currentPage = val
			var params = new URLSearchParams
			params.append("pageNum",this.currentPage)
			params.append("pageSize",10)
			this.$axios.get('/product/list/all',{params})
			.then(res=>{
				this.list = res.data.data.list
			})
			.catch(err=>{
				console.log(err)
			})
		},
		//热门推荐目录搜索
		changeKey(newKey){
			//this.$route.query.name = newKey是不行的，实际上改了但是浏览器地址上没有及时发生改变，需要再一次跳转
			this.$router.push({name:'Supply',query:{'name':''}})
			this.$router.push({name:'Supply',query:{'name':newKey}})
			this.search()
		},
		//三级目录搜索
		threeSearch(newKey){
			//this.$route.query.name = newKey是不行的，实际上改了但是浏览器地址上没有及时发生改变，需要再一次跳转
			this.$router.push({name:'Supply',query:{'name':''}})
			this.$router.push({name:'Supply',query:{'name':newKey}})
			this.search()
		},
		search(){
			/* 展示商品 */
			//console.log(this.$route.query.name)
			var params = new URLSearchParams
			//console.log(this.currentPage)
			if(this.$route.query.name){
				this.keyName = this.$route.query.name
			}
			params.append("name",this.keyName)
			params.append("pageNum",this.currentPage)
			params.append("pageSize",10)
			//console.log(this.currentPage)
			this.$axios.get('/product/list/all',{params})
			.then(res=>{
				this.list = res.data.data.list
				//console.log(this.currentPage)
				//console.log(this.list)
			})
			.catch(err=>{
				console.log(err)
			})
		}
	},
	
	mounted() {
		document.getElementById("classification").style.display = 'none'
		/* 目录列表 */
		this.$axios.get('/category/listOne')
		.then(res=>{
			this.data = res.data.data
			//console.log(res.data)
		})
		.catch(err=>{
			console.log(err)
		})
		/* 热门推荐 */
		this.$axios.get('/category/listThree')
		.then(res=>{
			this.hot = res.data.data
		})
		.catch(err=>{
			console.log(err)
		})
		/* 展示商品 */
		this.search()
	}
}
</script>

<style lang="scss" scoped>
.supply{
	.g-content{
		position: relative;
		margin: 0 auto;
		width: 1200px;
		.search-bar{
			.separator{
				height: 50px;
				text-align: center;
				>>>.el-breadcrumb{
					padding-top:23px;
					padding-left: 32px;
					height: 100%;
					font-size: 16px;
				}
			}
			//border: 1px solid #ddd;
			.search-bar-ul{
				margin: 10px;
				padding: 0;
				width: 900px;
				list-style: none;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				
			}
			.small-search-bar-ul{
				margin-left: 20px;
				padding: 0;
				width: 450px;
				list-style: none;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
			}
			.mini-search-bar-ul{
				margin: 20px 26px;
				padding: 0;
				width: 250px;
				list-style: none;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
			}
			.hot{
				margin-left: 35px;
				.hot-supply{
					margin-top: 10px;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					width: 900px;
					//background-color: pink;
					.hot-supply-item{
						a{
							color: #000;
							&:hover{
								color: #39bf3e ;
							}
						}
					}
				}
			}
			//分页
			.pagination{
				width: 510px;
				margin: 5px auto;
				>>>.el-pagination{
					button{
						width: 40px;
						height: 40px;
					}
					ul{
						li{
							width: 40px;
							height: 40px;
							line-height: 40px;
							&:not(.disabled).active{
								background-color: #39bf3e ;
								color: #FFF;
							}
							&:hover{
								background-color: #39bf3e ;
								color: #fff;
							}
						}
					}
				}
			}
			//商品详情
			.recommend-right {
				display: -webkit-box;
				display: flex;
				flex-wrap: wrap;
				height: 601px;
				width: 1040px;
				margin-bottom: 30px;
				.index-item-bg{
					margin-right: 5px;
					margin-bottom: 10px;
					border: 1px solid #f4f4f4;
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
											font-size: 15px;
										}
										.sp2{
											font-size: 13px;
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
										border: 1px solid #FF862C;
										color: #FF862C ;
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
