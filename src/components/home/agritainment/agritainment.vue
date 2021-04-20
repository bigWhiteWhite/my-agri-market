<template>
	<div class="agritainment">
		<div class="wrap" v-for="(item,index) in message" :key="index">
			<div class="left">
				<img :src="item.imageList[0]" alt="">
			</div>
			<div class="content">
				<h3>{{item.address}}</h3>
				<div class="content-inner">
					<div class="content-inner-left">
						<div><span>地址：</span></div>
						<div><span>联系电话：</span></div>
						<div><span>农家菜：</span></div>
					</div>
					<div class="content-inner-right">
						<div>{{item.name}}</div>
						<div>{{item.phone}}</div>
						<div>{{item.pattern}}</div>
					</div>
				</div>
			</div>
			<div class="right">
				 <el-button type="success" round @click='godetail(item.id)'>我想看看</el-button>
			</div>
		</div>
		<div class="paging">
			<el-pagination
			  background @current-change="handleCurrentChange"
			  layout="prev, pager, next"
			  :total="1000">
			</el-pagination>
		</div>
		
	</div>
</template>

<script>

export default {
	name: '',
	data () {
    	return {
      		val:1,
			message:[]
    	}
  	},
	methods:{
		handleCurrentChange(val){
			this.val = val
			this.showList()
		},
		godetail(id){
			this.$router.push({name:'agritainmentDetail',query:{Aid:id}})
		},
		showList(){
			let params = new URLSearchParams
			params.append('pageNum',this.val)
			params.append('pageSize',5)
			this.$axios.get('/agritainment/list',{params})
			.then(res=>{
				//console.log(res)
				this.message = res.data.data.list
			})
			.catch(err=>{
				console.log(err)
			})
		}
	},
	mounted() {
		document.getElementById("classification").style.display = 'none'
		this.showList()
	}
}
</script>

<style lang="scss" scoped>
.agritainment{
	position: relative;
	width: 1200px;
	height: 800px;
	//border: 1px solid red;
	margin: 0 auto;
	.wrap{
		width: 100%;
		height: 250px;
		margin-top: 5px;
		//border: 1px solid blue;
		display: flex;
		.left{
			width: 400px;
			border: 1px solid pink;
			margin-right: 5px;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.content{
			flex: 1;
			//border: 1px solid black;
			h3{
				text-align: center;
			}
			.content-inner{
				display: flex;
				height: 100%;
				span{
					color: #dd5665;
					margin-right: 20px;
				}
				.content-inner-left{
					width: 213px;
					height: 100%;
					display: flex;
					justify-content: space-around;
					flex-direction: column;
				}
				.content-inner-right{
					flex: 1;
					height: 100%;
					justify-content: space-around;
					display: flex;
					flex-direction: column;
				}
			}
		}
		.right{
			width: 200px;
			//border: 1px solid grey;
			text-align: center;
		}
	}
	.paging{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
}
</style>
