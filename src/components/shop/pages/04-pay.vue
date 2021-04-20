<template>
	<div class="pay">
			<div style="display: flex;flex-direction: column;width: 500px; text-align: center;">
				<img :src="src" alt="" style="width: 500px; height: 500px;">
				<span>微信扫描二维码支付哦~亲！</span>
			</div>
	</div>
</template>

<script>
import qs from 'qs'
export default {
	name: '',
	data () {
    	return {
      		src:''
    	}
  	},
	mounted() {
		console.log(qs)
		this.$store.state.buyActive = 3
		console.log( this.$route.query.data instanceof Array)
		
		 let ldidList = []
		 for (var i = 0; i < this.$route.query.data.length; i++) {
		    ldidList.push(this.$route.query.data[i])
		 }
		 console.log(this.$route.query.data)  //这里就是我要传的数组参数["340124400498002122", "340121401000542666"]
		 qs.stringify({ ldidList: ldidList }, { arrayFormat: 'repeat' })
		this.$axios.post('/order/qrcode',ldidList)
		.then(res=>{
			console.log(res.data.data)
			this.src = res.data.data
		})
		.catch(err=>{
			console.log(err)
		})
	}
}
</script>

<style lang="scss" scoped>

</style>
