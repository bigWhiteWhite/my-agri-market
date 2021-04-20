<template>
	<div class="agritainment-detail">
		我是农家乐详情
		<div class="bg-red-600">sdadads</div>
	</div>
</template>

<script>

export default {
	name: '',
	data () {
    	return {
			Aid:0,
			message:[]
    	}
  	},
	methods:{
		detail(){
			console.log(typeof this.Aid)
			
			let params = new URLSearchParams
			params.append('AId',this.Aid)
			this.$axios.post('agritainment/detail',params)
			.then(res=>{
				console.log(res.data.data)
				this.message = res.data.data
			})
			.catch(err=>{
				console.log(err)
			})
		}
	},
	mounted() {
		this.Aid = parseInt(this.$route.query.Aid) 
		this.detail()
	}
}
</script>

<style lang="scss" scoped>
.agritainment-detail{
	position: relative;
	width: 1200px;
	height: 800px;
	margin: 0 auto;
}
</style>
