<template>
	<div id="home">
		<Head></Head>
		<router-view></router-view>
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
	
}
</style>
