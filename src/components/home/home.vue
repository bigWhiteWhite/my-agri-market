<template>
	<div id="home">
		<Head></Head>
		<router-view></router-view>
		<div id="content">
			<contentFirst></contentFirst>
			<contentTwo></contentTwo>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
	import Head from './head/head.vue'
	import contentFirst from './contentFirst/contentFirst.vue'
	import contentTwo from './contentTwo/contentTwo.vue'
	import Foot from './foot/foot.vue'
	export default {
		name:'myhome',
		components:{
			Head,contentFirst,contentTwo,Foot
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
#home{
	padding: 0;
	margin: 0;
	outline: none;
	box-sizing: border-box;
	border: none;
	#content{
		background-color: #f2f2f2;
	}
}
</style>
