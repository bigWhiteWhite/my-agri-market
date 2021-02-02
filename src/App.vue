<template>
  <div id="app">
	  <Home></Home>
  </div>
</template>

<script>
	import Home from './components/home.vue'
	export default {
		components:{
			Home
		},
		name: 'App',
		data(){
			return {
				
			}
		},
		
	}
</script>

<style lang="scss" scoped>
*, :after, :before {
	-webkit-box-sizing: inherit;
	box-sizing: inherit;
}
.clearfix:after,.clearfix:before{
				content: "";
				display: block;
				clear: both;
			}
	
</style>
