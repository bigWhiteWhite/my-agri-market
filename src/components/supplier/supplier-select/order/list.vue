<template>
	<div class="purchase">
		<div class="checkout-form">
			<div class="steps-title">
				<h3>全部订单</h3>
			</div>
			<div class="wrap" v-for="(item,index) in message" :key='index'>
				<div class="uer-mes">
					<div class="mes"><span style="color: #72bf3e;">顾客姓名：</span>{{item.consignee}}</div>
					<div class="mes"><span style="color: #72bf3e;">配送地址：</span>{{item.address}}</div>
					<div class="mes"><span style="color: #72bf3e;">顾客电话：</span>{{item.phone}}</div>
					<div class="mes"><span style="color: #72bf3e;">交易金额：</span>{{item.totalPrice}}</div>
					<div class="mes"><span style="color: #72bf3e;">邮费：</span>{{item.postage}}</div>
					<div class="mes" v-if="item.order_status === 0?true:false"><span style="color: #72bf3e;">商品状态：</span>已取消</div>
					<div class="mes" v-if="item.order_status === 10?true:false"><span style="color: black;">商品状态：</span>未付款</div>
					<div class="mes" v-if="item.order_status === 20?true:false"><span style="color: #72bf3e;">商品状态：</span>已付款</div>
					<div class="mes" v-if="item.order_status === 30?true:false"><span style="color: #2367c7;">商品状态：</span>已发货</div>
					<div class="mes" v-if="item.order_status === 40?true:false"><span style="color: pink;">商品状态：</span>交易完成</div>
				</div>
				<div class="item" >
					<div class="image"><img :src="item.orderProductVO.image" alt=""></div>
					<div class="inner">
						<div class="name">店铺：{{item.orderProductVO.shop_name}}</div>
						<div class="name">商品名：{{item.orderProductVO.name}}</div>
						<div class="price">单价：￥{{item.orderProductVO.price/100}}</div>
						<div class="quantity">购买数量：{{item.orderProductVO.quantity}}</div>
					</div>
					<div>
						<el-popconfirm
						  confirm-button-text='是的'
						  cancel-button-text='我再想想' @confirm='shipments(item.order_no)'
						  icon="el-icon-info"
						  icon-color="red"
						  title="确定要发货吗？"
						>
						  <el-button slot="reference">我已发货</el-button>
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
			console.log(this.currentPage)
			let params = new URLSearchParams
			params.append('pageNum',this.currentPage)
			params.append('pageSize',4)
			this.$axios.post('/shop/order/list',params)
			.then(res=>{
				console.log(res.data.data.list)
				this.message = res.data.data.list
			})
			.catch(err=>{
				//console.log(err)
			})
		},
		shipments(order_no){
			console.log(order_no)
			let params = new URLSearchParams
			params.append('orderNo',order_no)
			this.$axios.post('/shop/order/delivered',params)
			.then(res=>{
				console.log(res)
				console.log(res.data.status===10000)
				if(res.data.status===10000){
					this.showList()
					this.$message({
					  message: '发货成功',
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
			.uer-mes{
				display: flex;
				.mes{
					margin-right: 10px;
				}
			}
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
	
	/* .block{
		position: fixed;
		bottom: 0px;
	} */
}
</style>
