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
						<a>新增收货地址</a>
						<input type="hidden">
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
	name: '',
	data () {
    	return {
      		
    	}
  	},
	mounted() {
		this.$store.state.buyActive = 2
	},
	computed:{
		...mapState(['buyList']),
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
			
		}
	}
}
</style>
