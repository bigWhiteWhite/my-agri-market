<template>
  <div id="app">
	  <router-view></router-view>
  </div>
</template>

<script>
	export default {
		components:{
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
.clearfix{
	*zoom: 1;
}

	
</style>
