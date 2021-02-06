<template>
	<div id="home">
		<Head></Head>
		<Content></Content>
	</div>
</template>

<script>
	import Head from './head/head.vue'
	import Content from './contentFirst/content.vue'
	export default {
		name:'myhome',
		components:{
			Head,Content
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
