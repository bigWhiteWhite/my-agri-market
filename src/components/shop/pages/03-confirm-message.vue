<template>
	<div class="confirm-container">
		<div class="content">
			<div class="checkout-title">
				<span class="title-txt">填写并核对订单信息</span>
			</div>
			<div class="checkout-steps">
				<div class="steps-title">
					<h3>收货人信息</h3>
					<div class="extra-r">
						<a @click="addAddress">新增收货地址</a>
						<input type="hidden">
					</div>
				</div>
				<addressSon v-if="addOrUpdataVisible" ref="changeAddress"></addressSon>
				<div class="user-message" v-for="(item,index) in this.$store.state.tableData" :key="index">
					<div class="user">
						<div class="user-name"><span>{{item.consignee}}</span></div>
						<div class="user-address"><span>{{item.region}}</span><span>{{item.detailed}}</span></div>
						<div class="user-phone"><span>{{item.phone}}</span></div>
						<div class="defaultAddress" v-if="item.selected===1?true:false"><a>默认地址</a></div>
					</div>
					<div class="change">
						<a @click="changeAddress($event)" :id="'address|'+item.id">编辑</a> 
					</div>
				</div>
			</div>
			<div class="checkout-form">
				<div class="steps-title">
					<h3>订单信息</h3>
				</div>
				<div class="wrap" v-for="(item,index) in payShop" :key='index'>
					<div class="image"><img :src="item.image" alt=""></div>
					<div class="inner">
						<div class="name">商品名：{{item.name}}</div>
						<div class="price">单价：￥{{item.price/100}}</div>
						<div class="quantity">数量：{{item.quantity}}</div>
					</div>
				</div>
			</div>
			<div class="checkout-foot">
				<div class="steps-title">
					<h3>配送至</h3>
					<div class="address">
						<div class="user-name"><span>{{defaultAddress.consignee}}</span></div>
						<div class="user-address"><span>{{defaultAddress.region}}</span><span>{{defaultAddress.detailed}}</span></div>
						<div class="user-phone"><span>{{defaultAddress.phone}}</span></div>
						<div class="defaultAddress" v-if="defaultAddress.selected===1?true:false"><a>默认地址</a></div>
					</div>
					<div class="pay">
						<a >提交订单</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
import addressSon from '../../person-space/person-space-right/address-son.vue'
export default {
	name: '',
	components:{
		addressSon
	},
	data () {
    	return {
			addressId:'',
			addOrUpdataVisible:false,
			payShop:[],
			defaultAddress:{}
    	}
  	},
	mounted() {
		this.$store.state.buyActive = 2
		this.$store.dispatch('addressList')//获取地址
		this.showDefaultAddress() //获取默认地址
		//获取订单信息
		this.$axios.get('/cart/list')//渲染购物车列表
		.then(res=>{
			//console.log(res)
			this.$store.state.carShop = res.data.data
			//console.log(this.$store.state.carShop)
			this.$store.state.carShop.forEach(item=>{
				if(item.selected){
					//console.log(123)
					this.payShop.push(item)
					//console.log(this.payShop)
				}
			})
		})
		.catch(err=>{
			console.log(err)
		})
	},
	computed:{
		...mapState(['buyList']),
	},
	created() {
		this.$store.dispatch('addressList')//获取地址
	},
	methods:{
		changeAddress(e){//修改地址
			this.$store.state.changeAddress = {}
			var arr = e.target.id.split("|")
			var id = parseInt(arr[1]) 
			this.$store.state.changeAddress.id = id
			var params = new URLSearchParams
			params.append("id",this.$store.state.changeAddress.id)
			 this.$axios.post('/user/info/selectId',params)//获取特定的地址进行修改
			 .then(res=>{
				 this.$store.state.changeAddress = res.data.data
				 this.$store.state.changeAddress.phone = this.$store.state.changeAddress.phone*1
				 this.addOrUpdataVisible = true
				 this.$store.dispatch('addressList')//获取地址
				 this.$nextTick(()=>{
				 	this.$refs.changeAddress.init(this.addressId)
				 })
			 })
			 .catch(err=>{
				 console.log(err)
			 })
		},
		addAddress(){
			this.$router.push({name:'personAddress'})
		},
		showDefaultAddress(){
			this.$store.state.tableData.forEach(item=>{
				if(item.selected === 1){
					this.defaultAddress = item
					console.log(this.defaultAddress)
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.confirm-container{
	padding-bottom: 20px;
	.content{
		width: 990px;
		margin: 0 auto;
		//确认订单标题
		.checkout-title{
			height: 42px;
			line-height: 42px;
			font-size: 16px;
			font-family: "Microsoft YaHei";
			overflow: hidden;
			.title-txt{
				float: left;
			}
		}
		//确认订单信息步骤
		.checkout-steps{
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
				.extra-r{
					float: right;
					a{
						color: #005ea7;
						&:hover{
							color: red;
						}
					}
				}
			}
			.user-message{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin:10px 10px;
				.user{
					display: flex;
					flex-direction: row;
					.user-name{
						width: 110px;
						height: 30px;
						margin-right: 20px;
						border: 1px solid gray;
						text-align: center;
						&:hover{
							border: 2px solid red;
						}
						a{
							
						}
					}
					.user-address{
						margin-right: 30px;
						span{
							margin:0 5px;
						}
					}
					.user-phone{
						margin-right: 100px;
					}
					.defaultAddress{
						font-size: 12px;
						color: red;
						a{
							&:hover{
								color: red;
							}
						}
						
					}
				}
				.change{
					a{
						&:hover{
							color: red;
						}
					}
				}
				
			}
		}
		
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
		
		.checkout-foot{
			background-color: #fff;
			padding: 0 20px;
			border: 1px solid #f0f0f0;
			.steps-title{
				line-height: 40px;
				width: 100%;
				height: 40px;
				color: #333;
				h3{
					font-size: 14px;
					height: 40px;
					line-height: 40px;
					float: left;
				}
				margin-right: 100px;
				.address{
					float: left;
					width: 50%;
					margin-left: 100px;
					display: flex;
					justify-content: space-between;
				}
				.pay{
					width: 80px;
					height: 100%;
					border: 1px solid red;
					float: right;
					text-align: center;
					font-size: 18px;
					font-family: Microsoft YaHei;
					background: #e54346;
					overflow: hidden;
					a{
						display: inline-block;
						width: 100%;
						color: #fff;
					}
				}
			}
			
		}
	}
}
</style>
