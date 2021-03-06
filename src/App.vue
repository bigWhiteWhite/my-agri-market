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
.icon {
       width: 1em; height: 1em;//宽高可设成100% 这样可以根据父级元素改变图标大小
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
}

	
</style>
