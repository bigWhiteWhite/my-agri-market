<template>
	<div class="dsd">
		adfskndj
		<div class="baidumap" id="allmap">
		
		</div>
	</div>
	
</template>

<script>
import BMap from 'BMap'
import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT'
export default {
	name: '',
	data () {
    	return {
      		
    	}
  	},
	mounted () {
	  this.baiduMap()
	},
	methods: {
	  // 返回
	  goback () {
	    this.$router.go(-1)
	  },
	  baiduMap () {
	    var map = new BMap.Map('allmap')
	    var point = new BMap.Point(111.742579, 40.818675)
	    map.centerAndZoom(point, 12)
	    var marker = new BMap.Marker(point)  // 创建标注
	    map.addOverlay(marker)              // 将标注添加到地图中
	  }
	}

}
</script>

<style lang="scss" scoped>
	.dsd{
		width: 100%;
		height: 300px;
		.baidumap{
			width: 100%;
			height: 100%;
		}
	}

</style>
