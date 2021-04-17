<template>
	<div class="address-son">
		<el-dialog title="修改地址" :visible.sync="visible" width="750" append-to-body>
		    <div class="address02-from-root">
		    	<div class="alert" id="alerto2" v-show="isAlert">
		    		<el-alert  :title="alert.title" :type="alert.type" show-icon center></el-alert>
		    	</div>
		    	<div class="title">修改收货地址</div>
		    	<div class="my-from">
		    		<el-form label-width="150px" :label-position="labelPosition" :model="changeAddress" :rules="rules"
		    			ref="ruleForm">
		    				<el-form-item label="收货人名称" prop="consignee">
		    					<el-input v-model="changeAddress.consignee"></el-input>
		    				</el-form-item>
		    				<el-form-item label="手机号" prop="phone">
		    					<el-input v-model.number="changeAddress.phone"></el-input>
		    				</el-form-item>
		    				<el-form-item label="区域" prop="region">
		    					<el-cascader size="large" :options="options" v-model="selectedOptions"
		    						@change="handleChange"></el-cascader>
		    				</el-form-item>
		    				<el-form-item label="详细地址" prop="detailed">
		    					<el-input v-model="changeAddress.detailed"></el-input>
		    				</el-form-item>
		    				<el-form-item label="是否设置为默认地址">
		    					<el-radio-group v-model="changeAddress.selected" @change="show">
		    						<el-radio label=1>是</el-radio>
		    						<el-radio label=0>否</el-radio>
		    					</el-radio-group>
		    				</el-form-item>
		    				<el-form-item>
		    					<el-button type="primary" @click="newAddress('ruleForm')">立即修改</el-button>
		    					<el-button @click="clear">重置</el-button>
		    				</el-form-item>
		    			</el-form>
		    	</div>
		    </div>
		</el-dialog>
	</div>
</template>

<script>
import {regionData,CodeToText} from 'element-china-area-data'
import {mapState} from 'vuex'
export default {
	name: '',
	data () {
    	return {
			isAlert:false,
      		visible:false,
			alert: {
				type: 'success',
				title: "修改成功"
			},
			labelPosition: 'left',
			
			selectedOptions: [],
			rules: {
				consignee: [{required: true,message: '请输入收货人名称',trigger: 'blur'},
							{min: 2,max: 10,message: '长度在 2 到 10 个字符',trigger: 'blur'}],
				region: [{required: true,message: '请选择收货区域',trigger: 'change'}],
				phone: [{required: true,message: '请输入收货号码',trigger: 'blur'},
						{type: 'number',message: '请输入正确的电话号码,只能为数字',trigger: 'blur'}],
				detailed: [{required: true,message: '请输入详细地址',trigger: 'change'}],
			},
			options: regionData,selectedOptions02: [],
    	}
  	},
	computed:{
		...mapState(['changeAddress'])
	},
	methods:{
		clear(){this.$store.state.changeAddress = {}},
		show() {},
		handleChange(arr) {//区域字符串相加
			this.changeAddress.region = CodeToText[arr[0]] + CodeToText[arr[1]] + CodeToText[arr[2]]
		},
		init(id){
			this.visible = true
		},
		newAddress(formName){
			//console.log(formName)
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$store.state.changeAddress.selected = this.$store.state.changeAddress.selected*1
					this.$store.state.changeAddress.id = this.$store.state.changeAddress.id*1
					this.$axios.post('/user/info/update', {
							"consignee":this.$store.state.changeAddress.consignee,"detailed":this.$store.state.changeAddress.detailed,
							"id": this.$store.state.changeAddress.id,
							"phone": this.$store.state.changeAddress.phone,"region": this.$store.state.changeAddress.region,
							"selected": this.$store.state.changeAddress.selected
					})
					.then(res => {
						this.isAlert = true
						this.$store.dispatch('addressList')
						this.$store.state.changeAddress.region = ''
						this.$store.state.changeAddress = {}
						this.$refs.ruleForm.resetFields(); 
						this.alert.title = "修改成功"
						this.alert.type = "success"
					})
					.catch(err => {
						console.log(err)
						this.isAlert = true
					})
				} else {
					this.alert.title = "修改失败，请输入完整的地址信息"
					this.alert.type = "error"
					return false;
				}
			});
		},
		addressList(){//获取用户所有地址
			this.$axios.get('/user/info/list')
			.then(res=>{
				this.tableData = res.data.data
			})
			.catch(err=>{
				console.log(err)
			})
		}
	},
	mounted() {
	}
}
</script>

<style lang="scss" scoped>
.address-son{
	width: 600px;
	.address-from-root {
		background: #fff;
		padding: 30px 20px;
		text-align: left;
	
		.alert {
			width: 328px;
		}
	
		.title {
			font-size: 16px;
			color: #333;
			margin-bottom: 20px;
		}
	
		.my-from {
			background-color: #fff;
			width: 50%;
		}
	
		.root {}
	}
}

</style>
