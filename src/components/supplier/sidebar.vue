<template>
	<div class="supplier-sidebar">
		<el-col >
		    <el-menu default-active="2" class="el-menu-vertical-demo" :router = true active-text-color="#39bf3e">
				<el-menu-item index="/supplier/index">
				  <i class="iconfont icon-nav_home-active"></i>
				  <span slot="title">添加商品</span>
				</el-menu-item>
		      <el-submenu index="2">
		        <template slot="title">
		          <i class="iconfont icon-login_eye"></i>
		          <span>订单管理</span>
		        </template>
		        <el-menu-item-group>
		          <el-menu-item index="/supplier/orderlist">订单列表</el-menu-item>
		          <el-menu-item index="/supplier/ordersaled">售后订单列表</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		      <el-submenu index="3">
		        <template slot="title">
		          <i class="iconfont icon-zhiliangguanli"></i>
		          <span>供应管理</span>
		        </template>
		        <el-menu-item-group>
		          <el-menu-item index="/supplier/supplylist">供应列表</el-menu-item>
		          <el-menu-item index="/supplier/supplyrelease">发布列表</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
			  <el-submenu index="4">
			    <template slot="title">
			      <i class="iconfont icon-zhiliangguanli"></i>
			      <span>农家乐管理</span>
			    </template>
			    <el-menu-item-group>
			      <el-menu-item index="/supplier/agritainmentAdd">添加农家乐</el-menu-item>
			      <el-menu-item index="/supplier/agritainmentList">我的农家乐</el-menu-item>
			    </el-menu-item-group>
			  </el-submenu>
		      
		    </el-menu>
		</el-col>
		
	</div>
</template>

<script>

export default {
	name: '',
	data () {
    	return {
      		isCollapse:true
    	}
  	}
}
</script>

<style lang="scss" scoped>
.supplier-sidebar{
	box-shadow: 2px 2px 4px #dfdfdf;
	color: #999!important;
	width: 240px;
	overflow: auto;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	top: 58px;
	.el-col-24{
		ul{
			li{
				/* &:hover{
					color: red;
				}
				&:focus{
					color: red;
				} */
			}
		}
	}
}
</style>
