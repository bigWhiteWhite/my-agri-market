<template>
	<div class="purchase">
		<div class="checkout-form">
			<div class="steps-title">
				<h3>订单信息</h3>
			</div>
			<div class="wrap" v-for="(item,index) in message" :key='index'>
				<div class="user-message">
					<div class="mes"><span style="color: #72bf3e;">收货人：</span> {{item.consignee}}</div>
					<div class="mes"><span style="color: #72bf3e;">收货地址：</span>{{item.address}}</div>
					<div class="mes"><span style="color: #72bf3e;">收货电话：</span>{{item.phone}}</div>
					<div class="mes" v-if="item.order_status === 0?true:false"><span style="color: #72bf3e;">商品状态：</span>已取消</div>
					<div class="mes" v-if="item.order_status === 10?true:false"><span style="color: black;">商品状态：</span>未付款</div>
					<div class="mes" v-if="item.order_status === 20?true:false"><span style="color: #72bf3e;">商品状态：</span>已付款</div>
					<div class="mes" v-if="item.order_status === 30?true:false"><span style="color: #2367c7;">商品状态：</span>已发货</div>
					<div class="mes" v-if="item.order_status === 40?true:false"><span style="color: pink;">商品状态：</span>交易完成</div>
				</div>
				<div class="item" >
					<div class="image"><img :src="item.orderProductVO.image" alt=""></div>
					<div class="inner">
						<div class="name">商品名：{{item.orderProductVO.name}}</div>
						<div class="price">单价：￥{{item.orderProductVO.price/100}}</div>
						<div class="quantity">数量：{{item.orderProductVO.quantity}}</div>
					</div>
					<div>
						<div v-if="item.order_status !== 0?true:false" style="width: 100px;height: 50px;" @click="cancel(item.order_no)"><el-button type="primary">取消订单</el-button></div>
						<div v-if="item.order_status === 10?true:false"><el-button type="primary">立刻支付</el-button></div>
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

export default {
	name: '',
	data () {
    	return {
      		payShop:{},
			message:[],
			status:'',
			currentPage:1//当前页数
    	}
  	},
	methods:{
		showList(page){
			var params = new URLSearchParams
			params.append('pageNum',this.currentPage)
			params.append('pageSize',5)
			this.$axios.get('/order/list',{params})
			.then(res=>{
				console.log(res.data.data.list)
				this.message = res.data.data.list
			})
			.catch(err=>{
				console.log(err)
			})
		},
		handleCurrentChange(e){
			this.currentPage = e
			this.showList()
		},
		cancel(orderNo){
			console.log(orderNo)
			var params = new URLSearchParams
			params.append('orderNo',orderNo)
			this.$axios.post('/order/cancel',params)
			.then(res=>{
				this.showList()
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
	width: 1000px;
	border: 1px solid red;
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
		
	}
}
</style>
