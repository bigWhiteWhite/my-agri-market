<template>
	<div class="head"><!-- 头部组件 -->
		<topHead></topHead>
		
		<div class="top-search"><!-- 搜索框 -->
			<topSearchIner></topSearchIner>
		</div>
	</div>
</template>

<script>
import topSearchIner from "./top-search-inner.vue"
import topHead from './head-top.vue'
export default {
  name: 'myhead',
  components:{
	  topSearchIner,topHead
  },
  data () {
    return {
    }
  },
  mounted(){
	  
  }
}
</script>

<style lang="scss" scoped>
.head{
	position: relative;
	height: 190px;
	width: 100%;
	background-color: #fff;
	.top-search{
		position: relative;
		top: 0;
		width: 100%;
		background-color: #fff;
		height: 123px;
	}
}
</style>
