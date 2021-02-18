<template>
	<div>
		<!-- 搜索框 -->
		<Search></Search>
		
		<!--菜单导航  -->
		<div class="nav-head">
			<div class="classification" ><div class="mascot-ui"><img src="//files.cnhnb.com/fas/home/img/33ae5c7.png" alt=""></div> <img src="//files.cnhnb.com/fas/home/img/15d577b.png" alt="" class="fenlei-icon" > <span>货品分类</span></div>
			<div class="nav-head-ul">
				<Menu mode="horizontal"  active-name="1">
				        <MenuItem name="1">
				            <Icon type="ios-paper" />
				            首页
				        </MenuItem>
				        <MenuItem name="2">
				            <Icon type="ios-people" />
				            供应大厅
				        </MenuItem>
				        <Submenu name="3">
				            <template slot="title">
				                <Icon type="ios-stats" />
				                采购大厅
				            </template>
				            <MenuGroup title="来看看">
				                <MenuItem name="3-1">新增商品</MenuItem>
				                
				            </MenuGroup>
				            <MenuGroup title="来瞧瞧">
				                <MenuItem name="3-4">热卖商品</MenuItem>
				            </MenuGroup>
				        </Submenu>
				        <MenuItem name="4">
				            <Icon type="ios-call" />
				            行情大厅
				        </MenuItem>
						<MenuItem name="5">
						    <Icon type="md-briefcase" />
						    行情资讯
						</MenuItem>
						<MenuItem name="6">
						    <Icon type="ios-construct" />
						    农技学堂
						</MenuItem>
						<MenuItem name="7">
						    <Icon type="ios-aperture" />
						    农商代卖
						</MenuItem>
						<MenuItem name="8">
						    <Icon type="ios-build" />
						    综合设置
						</MenuItem>
				    </Menu>
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
		.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
			color: #39bf3e;
			border-bottom: 2px solid #39bf3e;
		}
		.ivu-menu-horizontal{
			line-height: 35px;
			height: 36px;
		}
	}
}

</style>
