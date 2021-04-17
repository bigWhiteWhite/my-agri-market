<template>
	<div class="address">
		<div class="right-content">
			<div class="address-from-root">
				<div class="alert">
					<el-alert :title="alert.title" :type="alert.type" show-icon center></el-alert>
				</div>
				<div class="title">新增收货地址</div>
				<div class="my-from">
					<el-form :label-position="labelPosition" label-width="150px" :model="userAddress" :rules="rules"
						ref="ruleForm">
						<el-form-item label="收货人名称" prop="consignee">
							<el-input v-model="userAddress.consignee"></el-input>
						</el-form-item>
						<el-form-item label="手机号" prop="phone">
							<el-input v-model.number="userAddress.phone"></el-input>
						</el-form-item>
						<el-form-item label="区域" prop="region">
							<el-cascader size="large" :options="options" v-model="selectedOptions"
								@change="handleChange"></el-cascader>
						</el-form-item>
						<el-form-item label="详细地址" prop="detailed">
							<el-input v-model="userAddress.detailed"></el-input>
						</el-form-item>
						<el-form-item label="是否设置为默认地址">
							<el-radio-group v-model="userAddress.selected" @change="show">
								<el-radio label=1>是</el-radio>
								<el-radio label=0>否</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="addressFrom('ruleForm')">立即创建</el-button>
							<el-button @click="clear">重置</el-button>
						</el-form-item>
					</el-form>
				</div>
			</div>
		</div>
		<addressSon v-if="addOrUpdataVisible" ref="changeAddress"></addressSon>
		<div class="show-address">
			<el-alert title="我的收货地址" type="warning" :closable="false"></el-alert>
			<el-table :data="this.$store.state.tableData" stripe height="264" border style="width: 100%">
				<el-table-column prop="id" label="地址ID" width="110"></el-table-column>
				<el-table-column prop="consignee" label="收货人" width="110"></el-table-column>
				<el-table-column prop="phone" label="收货手机号" width="180"></el-table-column>
				<el-table-column prop="region" label="区域" width="180"></el-table-column>
				<el-table-column prop="detailed" label="详细地址"></el-table-column>
				<el-table-column prop="selected" label="默认地址为1" width="110"></el-table-column>
				<el-table-column fixed="right" label="操作" width="100">
					<template slot-scope="scope">
						<el-button @click="changeAddress($event)" type="text" size="small">修改</el-button>
						<el-button @click="deleteAddress" type="text" size="small">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	import {regionData,CodeToText} from 'element-china-area-data'
	import addressSon from './address-son.vue'
	export default {
		name: '',
		components: {addressSon},
		data() {
			return {
				addressId:'',
				addOrUpdataVisible:false,
				alert: {
					type: 'success',
					title: "保存成功"
				},
				labelPosition: 'left',
				userAddress: {
					consignee: '',
					detailed: '',
					phone: '',
					region: '',
					selected: 0
				},
				radio: 0,
				options: regionData,
				selectedOptions: [],
				rules: {
					consignee: [{required: true,message: '请输入收货人名称',trigger: 'blur'},
								{min: 2,max: 10,message: '长度在 3 到 5 个字符',trigger: 'blur'}],
					region: [{required: true,message: '请选择收货区域',trigger: 'change'}],
					phone: [{required: true,message: '请输入收货号码',trigger: 'blur'},
							{type: 'number',message: '请重新输入正确电话号码',trigger: 'blur'}],
					detailed: [{required: true,message: '请输入详细地址',trigger: 'change'}],
				},
			}
		},
		methods: {
			clear(){this.userAddress = {}},
			show() {},
			handleClose(done) {
			        this.$confirm('确认关闭？')
			          .then(_ => {
			            done();
			          })
			          .catch(_ => {});
			      },
			
			handleChange(arr) {//区域字符串相加
				this.userAddress.region = CodeToText[arr[0]] + CodeToText[arr[1]] + CodeToText[arr[2]]
			},
			changeAddress(e){//修改地址
				this.$store.state.changeAddress = {}
				this.addressId = e.currentTarget.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].innerHTML
				this.$store.state.changeAddress.id = this.addressId
				this.$store.state.changeAddress.id = this.$store.state.changeAddress.id*1
				var params = new URLSearchParams
				params.append("id",this.$store.state.changeAddress.id)
				 this.$axios.post('/user/info/selectId',params)//获取特定的地址进行修改
				 .then(res=>{
					 this.$store.state.changeAddress = res.data.data
					 this.$store.state.changeAddress.phone = this.$store.state.changeAddress.phone*1
					 this.addOrUpdataVisible = true
					 this.$nextTick(()=>{
					 	this.$refs.changeAddress.init(this.addressId)
					 })
				 })
				 .catch(err=>{
					 console.log(err)
				 })
			},
			deleteAddress(e){//删除地址
				this.addressId = e.currentTarget.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].innerHTML
				this.$confirm('是否永久删除本地址, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					let addressId = this.addressId*1
					var params = new URLSearchParams
					params.append('id',addressId)
					this.$axios.get("/user/info/delete",{params})
					.then(res=>{
						//console.log(res)
						//window.location.reload();
						this.$store.dispatch('addressList')
						this.userAddress.region = ''
						this.$refs.ruleForm.resetFields(); 
					})
					.catch(err=>{
						console.log(err)
					})
					this.$message({
						type: 'success',
						message: '删除成功!'
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					})         
				})
			},
			addressFrom(formName) { //判断用户是否输入正确，正确才会进行存储地址
				this.$refs[formName].validate((valid) => {
					if (valid) {
						//this.$store.state.changeAddress = this.userAddress
						document.querySelector(".address-from-root .alert").style.display = ''
						this.alert.title = "保存成功"
						this.alert.type = "success"
						this.userAddress.phone += ''
						this.userAddress.selected = this.userAddress.selected*1
						this.$axios.post('/user/info/add', {
								"consignee":this.userAddress.consignee,"detailed":this.userAddress.detailed,
								"phone": this.userAddress.phone,"region": this.userAddress.region,
								"selected": this.userAddress.selected
						})
						.then(res => {
							this.$store.dispatch('addressList')
							this.userAddress.region = ''
							this.$refs.ruleForm.resetFields(); 
						})
						.catch(err => {
							console.log(err)
						})
					} else {
						document.querySelector(".address-from-root .alert").style.display = ''
						this.alert.title = "保存失败，请输入完整的地址信息"
						this.alert.type = "error"
						return false;
					}
				});
			},
			
		},
		mounted() {
			document.querySelector(".address-from-root .alert").style.display = 'none'
			this.$store.dispatch('addressList')
		}
	}
</script>

<style lang="scss" scoped>
	.address {
		width: 1000px;

		.right-content {
			margin-bottom: 20px;

			.address-from-root {
				background: #fff;
				padding: 30px 20px;
				text-align: left;

				.alert {
					width: 328px;
					margin-left: 150px;
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

		.show-address {
			width: 100%;
			height: 300px;
		}
	}
</style>
