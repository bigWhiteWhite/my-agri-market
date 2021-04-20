<template>
	<div class="index">
		<div class="bg">
			<div class="from">
				<h3>添加农家乐</h3>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="农家乐名" prop="name">
				    <el-input v-model="ruleForm.name"></el-input>
				  </el-form-item>
				  <el-form-item label="农家乐简介" prop="detail">
				    <el-input v-model="ruleForm.detail"></el-input>
				  </el-form-item>
				  <el-form-item label="农家乐地址" prop="address">
				    <el-input v-model="ruleForm.address"></el-input>
				  </el-form-item>
				  <el-form-item label="联系电话" prop="phone">
				    <el-input v-model="ruleForm.phone"></el-input>
				  </el-form-item>
				  <el-form-item label="特色" prop="pattern" >
				    <el-input v-model="ruleForm.pattern" placeholder="如:北京烤鸭"></el-input>
				  </el-form-item>
				  <el-upload
					  class="upload-demo"
					  action="http://8.140.117.209:8081/shop/upload/file"
					  :on-preview="handlePreview"
					  :http-request="uploadImg"
					  multiple
					  :limit="3"
					  :file-list="fileList">
					  <el-button size="small" type="primary">点击上传</el-button>
					  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
					  <div class="imgStyle mar_top10" v-if="imgsrc===''?false:true">
					     <img :src="imgsrc" alt="" style="width: 200px;height: 100px;">
					  </div>
					</el-upload>
					<el-form-item>
					    <el-button type="primary" @click="submitForm('ruleForm')">上传农家乐信息</el-button>
					    <el-button @click="resetForm('ruleForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: '',
	data () {
    	return {
			fileList: [ 
			],
			imgsrc:'',
      		ruleForm: {
      		          name: '',
      		          detail:'',
					  address:'',
					  phone:'',
					  pattern:'',
			},
			propertyMap:[
				{name:"",value:""},
				{name:"",value:""},
				{name:"",value:""},
			],
			rules: {
			  name: [
				{ required: true, message: '请输入农家乐名称', trigger: 'blur' },
				//{ min: 3, max: 5, message: '长度在 3 到 10个字符', trigger: 'blur' }
			  ],
			  detail: [
				{ required: true, message: '请输入农家乐名详情', trigger: 'blur' },
				//{ min: 3, max: 5, message: '长度在 3 到 20个字符', trigger: 'blur' }
			  ],
			  address: [
				{ required: true, message: '请输入农家乐地址', trigger: 'blur' },
				//{ min: 3, max: 5, message: '长度在 3 到 20个字符', trigger: 'blur' }
			  ],
			  phone: [
				{ required: true, message: '请输入联系电话', trigger: 'blur' },
				//{ min: 3, max: 5, message: '长度在 3 到 20个字符', trigger: 'blur' }
			  ],

			  pattern: [
					{ required: true, message: '请输入特色', trigger: 'blur' },
					//{ min: 3, max: 5, message: '长度在 3 到 20个字符', trigger: 'blur' }
			  ],

			}
    	}
  	},
	methods: {
		handlePreview(file) {
			console.log(file);
		},
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
			  if (valid) {
				
				console.log(this.ruleForm)
				let postage = parseInt(this.ruleForm.postage)
				let price = parseInt(this.ruleForm.price)
				let stock = parseInt(this.ruleForm.stock)
				let propertyMap00 = this.propertyMap[0].name
				let propertyMap01 = this.propertyMap[1].name
				let propertyMap02 = this.propertyMap[2].name
				
				function PropertyMap(){}
				var mypropertyMap = new PropertyMap
				mypropertyMap[propertyMap00] = this.propertyMap[0].value
				mypropertyMap[propertyMap01] = this.propertyMap[1].value
				mypropertyMap[propertyMap02] = this.propertyMap[2].value
			
				this.$axios.post('/shop/agritainment/add',
					{
					  "address": this.ruleForm.address,
					  "detail": this.ruleForm.detail,
					  "imageList": [
					    this.imgsrc
					  ],
					  "name": this.ruleForm.name,
					  "pattern":this.ruleForm.pattern,
					  "phone": this.ruleForm.phone
					})
				.then(res=>{
					console.log(res)
					this.$message({
					  type: 'success',
					  message: '商品上传成功'
					})
				})
				.catch(err=>{
					
				}) 
				
			  } else {
				console.log('error submit!!');
				return false;
			  }
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		 uploadImg(item) {
			 console.log(item)
		      var isFlag = (item.file.type == 'image/jpeg' || item.file.type == 'image/png')? true : false;
		      if(!isFlag){
		        this.$message({
		          type: 'warning',
		          message: '上传图片只能是 JPG、PNG 格式!'
		        })
		        return false
		      }
		      let formData = new FormData();
		      formData.append('file', item.file);//若查看可使用 formData.get('file')
		      this.$axios.post('/shop/upload/file',formData)
			  .then(res => {
				  console.log(123)
				  console.log(res)
				  this.imgsrc = res.data.data[0]
		        var res = res.data;
		        if(res.status == 10000){
		          this.$message({
		            type: 'success',
		            message: '上传成功'
		          })
		          //this.dialogImageUrl = res.data + '?' + new Date().getTime();//new Date().getTime()使用时间戳更换每次的修改的图片
		        }
		      })
		    }
	}
}
</script>

<style lang="scss" scoped>
.index{
	padding: 20px;
	.bg{
		width: 100%;
		height: 100%;
		padding: 20px;
		.from{
			width: 500px;
			.upload-demo{
				margin-left: 25px;
				button{
					//margin-left: -115px;
				}
			}
		}
	}
}
</style>
