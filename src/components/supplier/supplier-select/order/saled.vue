<template>
	<div class="purchase">
		<div class="checkout-form">
			<div class="steps-title">
				<h3>已发布商品信息</h3>
			</div>
			<div class="wrap" >
				<el-tabs v-model="activeName" @tab-click="handleClick">
				    <el-tab-pane label="用户已取消" name="first"><saledItem v-if='saledStatus ===0'></saledItem></el-tab-pane>
				    <el-tab-pane label="未付款" name="second"><saledItem v-if='saledStatus ===10'></saledItem></el-tab-pane>
				    <el-tab-pane label="已付款" name="third"><saledItem v-if='saledStatus ===20'></saledItem></el-tab-pane>
				    <el-tab-pane label="已发货" name="fourth"><saledItem v-if='saledStatus ===30'></saledItem></el-tab-pane>
					<el-tab-pane label="交易完成" name="five"><saledItem v-if='saledStatus ===40'></saledItem></el-tab-pane>
				  </el-tabs>
			</div>
			
		</div>
		

	</div>
</template>

<script>
//import mymap from '../../../baiDuMap/baiDuMap.vue'
import saledItem from './saled-item/saled-item.vue'
import {mapState} from 'vuex'
export default {
	components:{
		saledItem
	},
	name: '',

	data () {
    	return {
			activeName: 'first'
    	}
  	},
	computed:{
		...mapState(['saledStatus']),
	},
	methods:{
		handleClick(tab, event) {
			switch (tab.index) {
				case "0":
					this.$store.state.saledStatus = 0
					break;
				case "1":
					this.$store.state.saledStatus = 10
					break;
				case "2":
					this.$store.state.saledStatus = 20
					break;
				case "3":
					this.$store.state.saledStatus = 30
					break;
				case "4":
					this.$store.state.saledStatus = 40
					break;
				
			}
		}
	},
	mounted() {
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
			
		}
	}
	

}
</style>
