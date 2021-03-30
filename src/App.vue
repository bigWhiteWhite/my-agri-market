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
		created() {
			 //在页面加载时读取localStorage里的状态信息
			localStorage.getItem("currentUser") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("currentUser"))));
			//在页面刷新时将vuex里的信息保存到sessionStorage里
			window.addEventListener("beforeunload",()=>{
			  localStorage.setItem("currentUser",JSON.stringify(this.$store.state))
			});
			// 兼容iphone手机
			window.addEventListener("pagehide",()=>{
			  localStorage.setItem("currentUser",JSON.stringify(this.$store.state))
			});
			//如果页面加载的时候sessionstorage没有的话 就从vuex中取
			localStorage.setItem("isLogin",this.$store.state.isLogin)
		},
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
