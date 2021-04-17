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
				  <el-upload
					  class="upload-demo"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :on-preview="handlePreview"
					  multiple
					  :limit="3"
					  :file-list="fileList">
					  <el-button size="small" type="primary">点击上传</el-button>
					  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
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
			fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      		ruleForm: {
      		          name: '',
      		          detail:'',
      		        },
			rules: {
			  name: [
				{ required: true, message: '请输入商品名称', trigger: 'blur' },
				{ min: 3, max: 5, message: '长度在 3 到 10个字符', trigger: 'blur' }
			  ],
			  detail: [
				{ required: true, message: '请输入活动名称', trigger: 'blur' },
				{ min: 3, max: 5, message: '长度在 3 到 20个字符', trigger: 'blur' }
			  ]
			}
    	}
  	},
	methods: {
		handlePreview(file) {
			console.log(file);
		},
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
		}
	}
}
</style>
