<template>
	<div id="supplier">
		<supplierHead></supplierHead>
		<supplierSidebar></supplierSidebar>
		<supplierContent><router-view></router-view></supplierContent>
	</div>
</template>

<script>
import supplierHead from './head.vue'
import supplierSidebar from './sidebar.vue'
import supplierContent from './content.vue'
export default {
	name: '',
	components:{
		supplierHead,supplierSidebar,supplierContent
	},
	data () {
    	return {
      		
    	}
  	}
}
</script>

<style lang="scss" scoped>

</style>
