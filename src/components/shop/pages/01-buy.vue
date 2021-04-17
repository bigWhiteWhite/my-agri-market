<template>
	<div class="buy-car">
		<Head></Head>
		<!-- 步骤条 -->
		<div class="step">
			<el-steps :space="200" :active="this.$store.state.buyActive" finish-status="success">
			  <el-step title="购物车"></el-step>
			  <el-step title="物流信息"></el-step>
			  <el-step title="支付"></el-step>
			</el-steps>
		</div>
		<!-- 步骤路由显示 -->
		<div class="container">
			<div class="content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import Head from '../../home/head/head-top.vue'
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
	name: '',
	components:{
		Head
	},
	data () {
    	return {
    	}
  	},
	cumputed:{
	},
	created() {
		/* 跳转到购物车，提交商品数量和id */
		this.$route.query.productId  = this.$route.query.productId *1
		this.$route.query.count   = this.$route.query.count  *1
		var params = new URLSearchParams
		params.append('count',this.$route.query.count)
		params.append('productId',this.$route.query.productId)
		this.$axios.post('/cart/add',params)
		.then(res=>{
			/* console.log(res)
			console.log("我是add") */
		})
		.catch(err=>{
			
		})
	}
}
</script>

<style lang="scss" scoped>
.buy-car{
	.step{
		float: right;
		width: 500px;
		margin-right: 190px;
		margin-top: 50px;
		>>>.el-step__head{
			//color:#39bf3e ;
		}
		>>>.el-step__main{
			.is-finish{
				//color:#39bf3e ;
			}
		}
	}
	.container{
		margin-top: 130px;
		padding-bottom: 20px;
		.content{
			width: 990px;
			margin: 0 auto;
		}
	}
}
</style>
