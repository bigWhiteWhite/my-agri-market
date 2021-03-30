<template>
	<div class="allcontent" >
		<contentFirst></contentFirst>
		<contentTwo></contentTwo>
	</div>
</template>

<script>
import contentFirst from './contentFirst.vue'
import contentTwo from '../contentTwo/contentTwo.vue'
export default {
	name: '',
	components:{
		contentFirst,contentTwo
	},
	data () {
    	return {
    	}
  	},
	mounted(){
		document.getElementById("classification").style.display = ''
	}
}
</script>

<style lang="scss" scoped>
.allcontent{
	background-color: #f2f2f2;
}
</style>
