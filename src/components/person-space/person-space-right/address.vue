<template>
	<div class="address">
		<div class="right-content">
			<div class="address-from-root">
				<div class="title">新增收货地址</div>
				<div class="my-from">
					<el-form :label-position="labelPosition" label-width="100px" :model="userAddress">
					  <el-form-item label="收货人名称">
					    <el-input v-model="userAddress.name"></el-input>
					  </el-form-item>
					  <el-form-item label="手机号">
					    <el-input v-model="userAddress.phone"></el-input>
					  </el-form-item>
					  <el-form-item label="详细地址">
					    <el-input v-model="userAddress.address"></el-input>
					  </el-form-item>
					</el-form>
				</div>
				<div class="root">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	components:{
	},
	data () {
    	return {
			labelPosition: 'left',
      		 userAddress: {
				name: '',
				phone: '',
				address: ''
			}
    	}
  	}
}
</script>

<style lang="scss" scoped>
.address{
	background-color: pink;
	width: 1000px;
	height: 500px;
	.right-content{
		.address-from-root{
			background: #fff;
			padding: 30px 20px;
			text-align: left;
			.title{
				font-size: 16px;
				color: #333;
				margin-bottom: 20px;
			}
			.my-from{
				background-color: #fff;
				width: 50%;
			}
			.root{
				
			}
		}
	}
}
</style>
