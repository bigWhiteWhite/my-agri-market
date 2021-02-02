<template>
  <div id="app">
	  <Home></Home>
	  sdasd
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
@import url("./static/reset.css");
*, :after, :before {
	-webkit-box-sizing: inherit;
	box-sizing: inherit;
}
.clearfix:after,.clearfix:before{
				content: "";
				display: block;
				clear: both;
			}
#app{
	background-color: pink;
	width: 100%;
	height: 100%;
}	
</style>
