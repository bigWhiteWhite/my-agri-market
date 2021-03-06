<template>
	<div class="person-space">
		<Head></Head>
		<div class="user-title-bg">
			<div class="user-title-content">
				
			</div>
		</div>
		<div class="user-content">
			<div class="left">
				 <el-col>
				    <el-menu
				      default-active="1"
				      class="el-menu-vertical-demo"
					  :router=true
				      background-color="#fff"
					  active-background-color="#ff862c"
				      text-color="#39bf3e"
				      active-text-color="#ff862c">
				      <el-menu-item index="/personspace/shouye">
				        <i class="iconfont icon-nav_home-active"></i>
				        <span slot="title">首页</span>
				      </el-menu-item>
				      <el-menu-item index="/personspace/Purchase">
				        <i class="iconfont icon-kucunguanli"></i>
				        <span slot="title">已买到的货品</span>
				      </el-menu-item>
					  <el-menu-item index="/personspace/refund">
					    <i class="iconfont icon-gangweiguanli"></i>
					    <span slot="title">退货退款</span>
					  </el-menu-item>
					  <el-menu-item index="/personspace/buikPurchase">
					    <i class="iconfont icon-kucunshishezhi"></i>
					    <span slot="title">代发批量下单</span>
					  </el-menu-item>
					  <el-menu-item index="/personspace/favorite">
					    <i class="iconfont icon-xihuan"></i>
					    <span slot="title">收藏夹</span>
					  </el-menu-item>
					  <el-menu-item index="/personspace/coupon">
					    <i class="iconfont icon-wendang"></i>
					    <span slot="title">优惠券</span>
					  </el-menu-item>
					  <el-menu-item index="/personspace/address">
					    <i class="iconfont icon-shengchanguanli"></i>
					    <span slot="title">收货地址管理</span>
					  </el-menu-item>
					  <el-menu-item index="/personspace/changeCode">
					    <i class="iconfont icon-suo"></i>
					    <span slot="title">修改密码</span>
					  </el-menu-item>
				    </el-menu>
				  </el-col>
			</div>
			<div class="right">
				<router-view></router-view>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Head from '../home/head/head-top.vue'
import Footer from '../home/foot/foot.vue'
export default {
	name: '',
	components:{
		Head,Footer
	},
	data () {
    	return {
      		
    	}
  	},
	methods:{
	},
	mounted() {
		//先去除logo
		let logo = document.querySelector('.title')
		logo.style.display = 'none'
	}
}
</script>

<style lang="scss" scoped>
.person-space{
	position: relative;
	background: #f5f5f5;
	.user-title-bg{
		position: relative;
		top: 0;
		width: 100%;
		height: 80px;
		background-color: #39bf3e;
		.user-title-content{
			position: relative;
			margin: 0 auto;
			width: 1200px;
			height: 80px;
			background-color: #39bf3e;
			display: -webkit-box;
			display: flex;
			-webkit-box-pack: justify;
			justify-content: space-between;
			-webkit-box-align: center;
			align-items: center;
		}
	}
	@mixin flex{
		display: -webkit-box;
		display: flex;
		padding-bottom: 30px;
		min-height: 650px;
	}
	
	.user-content{
		@include flex;
		position: relative;
		margin: 0 auto;
		width: 1200px;
		.left{
			padding: 0px 0;
			width: 180px;
			background: #fff;
			>>>.el-col{
				width:100%;
				/* >>>.el-menu-vertical-demo */
				ul{//改变列表hover
					/* li:hover{
						background-color: black !important;
					}
					li:focus{
						background-color: black !important;
					} */
				}
				
			}
		}
		.right{
			flex: 1;
			margin: 20px 0 0 20px;
		}
	}
}
</style>
