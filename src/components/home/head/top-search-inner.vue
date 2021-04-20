<template>
	<div>
		<!-- 搜索框 -->
		<Search></Search>
		
		<!--菜单导航  -->
		<div class="nav-head">
			<div class="classification" id="classification"><div class="mascot-ui"><img src="//files.cnhnb.com/fas/home/img/33ae5c7.png" alt=""></div> <img src="//files.cnhnb.com/fas/home/img/15d577b.png" alt="" class="fenlei-icon" > <span>货品分类</span></div>
			<div class="nav-head-ul">
				<el-menu :default-active="activeIndex" class="el-menu-demo" 
						mode="horizontal"  :router='true' text-color="#000" active-text-color="#39bf3e"> <!-- #ff862c -->
				  <el-menu-item index='content'>
					  <i class="iconfont icon-nav_home-active"></i>首页
				  </el-menu-item>
				  <el-menu-item index="supply">
					  <i class="iconfont icon-nav_home-active"></i>供应大厅
				  </el-menu-item>
				  <el-menu-item index="agritainment"><i class="iconfont icon-wendang"></i>农家乐</el-menu-item>
				</el-menu>
			</div>
		</div>
		
		
	</div>
</template>

<script>
import Search from './search.vue'
export default {
  name: '',
  components:{
	  Search
  },
  data () {
    return {
		activeIndex:'1'
    }
  },
  methods:{
	  goshuye(){
		  this.$router.push({name:"Content"})
	  },
	  gosupply(){
		  this.$router.push({name:"Supply"})
	  },
	  goAgritainment(){
			this.$router.push({name:"Agritainment"})
	  }
  }
 
  
}
</script>

<style lang="scss" scoped>
/* 菜单导航 */	
.nav-head{
	position: relative;
	display: -webkit-box;
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	margin: 0 auto;
	width: 1200px;
	height: 34px;
	.classification{
		width: 200px;
		height: 36px;
		display: -webkit-box;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-flex: 0;
		flex: none;
		background: #39bf3e;
		font-family: MicrosoftYaHei;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #fff;
		letter-spacing: 0;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		.mascot-ui{
			position: absolute;
			left: 70px;
			top: -33px;
			height: 30px;
			width: 60px;
		}
		.fenlei-icon{
			margin-left: 17px;
			height: 14px;
			width: 14px;
		}
		span{
			margin-left: 10px;
		}
	}
	.nav-head-ul{
		position: relative;
		height: 34px;
		width: 1200px;
		z-index: 98;//设置小于搜索菜单
		
		ul{
			line-height: 35px;
			height: 36px;
			li{
				line-height: 35px;
				height: 100%;
				text-align: center;
				//width: 100px;
				i{
					position: relative;
					top: -2px;
					left: -10px;
				}
				a{
					//float: left;
					display: inline-block;
					width: 100%;
					height: 100%;
					//margin-left:-20px ;
					//padding-right:10px ;
				}
			}
		}
	}
}

</style>
