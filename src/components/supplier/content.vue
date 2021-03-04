<template>
	<div class="supplier-content">
		<router-view></router-view>
	</div>
</template>

<script>

export default {
	name: '',
	data () {
    	return {
      		
    	}
  	}
}
</script>

<style lang="scss" scoped>
.supplier-content{
	overflow: auto;
	position: absolute;
	bottom: 0;
	left: 240px !important;
	right: 0;
	top: 58px;
}
</style>
