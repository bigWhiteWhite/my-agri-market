<template>
	<div class="purchase">
		<div class="checkout-form">
			<div class="steps-title">
				<h3>已发布商品信息</h3>
			</div>
			<div class="wrap" v-for="(item,index) in message" :key='index'>
				<div class="item" >
					<div class="image"><img :src="item.image" alt=""></div>
					<div class="inner">
						<div class="name">商品id：{{item.pid}}</div>
						<div class="name">商品名：{{item.name}}</div>
						<div class="price">单价：￥{{item.price/100}}</div>
						<div class="quantity">单位：{{item.unit}}</div>
					</div>
					<div>
						<el-popconfirm
						  confirm-button-text='是的'
						  cancel-button-text='我再想想' @confirm='deleteShop(item.pid)'
						  icon="el-icon-info"
						  icon-color="red"
						  title="确定下架这个商品吗？"
						>
						  <el-button slot="reference">下架商品</el-button>
						</el-popconfirm>
					</div>
				</div>
			</div>
			
		</div>
		
		<div class="block" >
			  <el-pagination
			    layout="prev, pager, next"
				@current-change="handleCurrentChange"
			    :total="50">
			  </el-pagination>
		</div>
	</div>
</template>

<script>
//import mymap from '../../../baiDuMap/baiDuMap.vue'
export default {
	name: '',

	data () {
    	return {
      		currentPage:1,
			message:[]
    	}
  	},
	methods:{
		handleCurrentChange(e){
			this.currentPage = e
			this.showList()
		},
		showList(){
			let params = new URLSearchParams
			params.append('pageNum',this.currentPage)
			params.append('pageSize',5)
			this.$axios.get('/shop/product/list',{params})
			.then(res=>{
				//console.log(res.data.data.list)
				this.message = res.data.data.list
			})
			.catch(err=>{
				console.log(err)
			})
		},
		deleteShop(pid){
			//console.log(pid)
			let params = new URLSearchParams
			params.append('pid',pid)
			this.$axios.post('/shop/product/delete',params)
			.then(res=>{
				console.log(res.data.status===10000)
				if(res.data.status===10000){
					this.showList()
					this.$message({
					  message: '下架成功',
					  center: true
					});
				}
				
			})
			.catch(err=>{
				console.log(err)
			})
		}
	},
	mounted() {
		this.showList()
	}
}
</script>

<style lang="scss" scoped>
.purchase{
	position: relative;
	width: 1000px;
	.checkout-form{
		background-color: #fff;
		padding: 0 20px;
		border: 1px solid #f0f0f0;
		.steps-title{
			line-height: 40px;
			height: 40px;
			color: #333;
			h3{
				font-size: 14px;
				height: 40px;
				line-height: 40px;
				float: left;
			}
		}
		.wrap{
			display: flex;
			flex-direction: column;
			margin: 10px;
			.user-message{
				display: flex;
				.mes{
					margin-right:62px;
				}
			}
			.item{
				display: flex;
				justify-content: start-left;
				.image{
					width: 100px;
					height: 100px;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.inner{
					margin-left: 50px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					width: 500px;
				}
			}
		}
	}
	
	.block{
		position: fixed;
		bottom: 20px;
	}
}
</style>
