<template>
	<div class="index">
		<div class="bg">
			<div class="from">
				<h3>添加商品</h3>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="商品名称" prop="name">
				    <el-input v-model="ruleForm.name"></el-input>
				  </el-form-item>
				  <el-form-item label="商品描述" prop="detail">
				    <el-input v-model="ruleForm.detail"></el-input>
				  </el-form-item>
				  <el-form-item label="商品单价" prop="price">
				    <el-input v-model="ruleForm.price"></el-input>
				  </el-form-item>
				  <el-form-item label="商品库存" prop="stock">
				    <el-input v-model="ruleForm.stock"></el-input>
				  </el-form-item>
				  <el-form-item label="商品单位" prop="unit" >
				    <el-input v-model="ruleForm.unit" placeholder="如:元/头"></el-input>
				  </el-form-item>
				  <el-form-item label="商品属性"><!--  prop="propertyMap"  -->
				    <el-input v-model="propertyMap[0].name" placeholder="属性名 如:品种"></el-input>
					<el-input v-model="propertyMap[0].value" placeholder="属性值 如:公猪苗"></el-input>
				  </el-form-item>
				  <el-form-item label="商品属性" >
				    <el-input v-model="propertyMap[1].name" placeholder="属性名 如:公母"></el-input>
					<el-input v-model="propertyMap[1].value" placeholder="属性值 如:公"></el-input>
				  </el-form-item>
				  <el-form-item label="商品属性"  >
				    <el-input v-model="propertyMap[2].name" placeholder="属性名 如:地区"></el-input>
					<el-input v-model="propertyMap[2].value" placeholder="属性值 如:广东"></el-input>
				  </el-form-item>
				  <el-form-item label="配送邮费" prop="postage">
				    <el-input v-model="ruleForm.postage"></el-input>
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
					    <el-button type="primary" @click="submitForm('ruleForm')">上传商品</el-button>
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
					  price:'',
					  stock:'',
					  postage:'',
					  unit:'',
			},
			propertyMap:[
				{name:"",value:""},
				{name:"",value:""},
				{name:"",value:""},
			],
			rules: {
			  name: [
				{ required: true, message: '请输入商品名称', trigger: 'blur' },
				//{ min: 3, max: 5, message: '长度在 3 到 10个字符', trigger: 'blur' }
			  ],
			  detail: [
				{ required: true, message: '请输入商品详情', trigger: 'blur' },
				//{ min: 3, max: 5, message: '长度在 3 到 20个字符', trigger: 'blur' }
			  ],
			  price: [
				{ required: true, message: '请输入商品价格', trigger: 'blur' },
				//{ min: 3, max: 5, message: '长度在 3 到 20个字符', trigger: 'blur' }
			  ],
			  stock: [
				{ required: true, message: '请输入商品库存', trigger: 'blur' },
				//{ min: 3, max: 5, message: '长度在 3 到 20个字符', trigger: 'blur' }
			  ],
			  postage: [
					{ required: true, message: '请输入邮费', trigger: 'blur' },
					//{ min: 3, max: 5, message: '长度在 3 到 20个字符', trigger: 'blur' }
			  ],
			  unit: [
					{ required: true, message: '请输入单位', trigger: 'blur' },
					//{ min: 3, max: 5, message: '长度在 3 到 20个字符', trigger: 'blur' }
			  ],
			  propertyMap: [
					{ required: true, message: '请输入商品属性', trigger: 'blur' },
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
				
				/* this.$axios.post('/shop/product/add',{
					"category_id": 13,
					"detail": "23123",
					"image": [
						"http://8.140.117.209:8081/images/3ab7a3db-e64c-4faf-ade8-6851785c10e9.jpg"
					],
					"name": "123123",
					"postage": 123,
					"price": 123,
					"propertyMap":{
						"种猪": "123",
						"种猪": "123",
						"种猪": "123"
					},//
					"stock": 11,
					"unit": "123"
				})
				.then(res=>{
					console.log(res)
				})
				.catch(err=>{
					
				}) */
			  if (valid) {
				this.$message({
				  type: 'success',
				  message: '商品上传成功'
				})
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
				
				/* console.log("this.ruleForm.detail")
				console.log(this.ruleForm.detail)
				console.log("this.imgsrc")
				console.log(this.imgsrc)
				console.log("postage")
				console.log(postage)
				console.log("price")
				console.log(price)
				console.log("mypropertyMap")
				console.log(mypropertyMap)
				console.log("stock")
				console.log(stock)
				console.log("this.ruleForm.unit")
				console.log(this.ruleForm.unit) */
				
				this.$axios.post('/shop/product/add',{
					"category_id": 13,
					"detail": this.ruleForm.detail,
					"image": [
						this.imgsrc
					],
					"name": this.ruleForm.name,
					"postage": postage,
					"price": price,
					"propertyMap":mypropertyMap,//
					"stock": stock,
					"unit": this.ruleForm.unit
				})
				.then(res=>{
					console.log(res)
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
				  console.log(res.data.data[0])
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
	.bg{
		width: 100%;
		height: 100%;
		padding: 20px;
		border: 1px solid red;
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
