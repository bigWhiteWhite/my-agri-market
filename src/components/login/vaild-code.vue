<template>
  <div class="ValidCode disabled-select" :style="`width:${width}; height:${height}`" @click="refreshCode">
    <span v-for="(item, index) in this.$store.state.codeList" :key="index" :style="getStyle(item)">{{item.code}}</span>
  </div>
</template>
 
<script>
import {mapActions,mapState,mapGetters} from 'vuex'
export default {
  name: 'validCode',
  props: {
    width: {
      type: String,
      default: '100px'
    },
    height: {
      type: String,
      default: '40px'
    },
    length: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('createdCode')
  },
  methods: {
	...mapActions(['refreshCode','createdCode']),
	refreshCode(){//刷新验证码
		this.$store.state.codeList = []
		this.$store.dispatch('createdCode')
	},
    getStyle (data) {
      return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`
    }
  }
}
</script>
 
<style scoped lang="scss">
  .ValidCode{
    position: relative;
	top: -40px;//-40
	left: 140px;
	border: #ff862c solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
	font-size: 20px;
    span{
		font-size: 20px;
      display: inline-block;
    }
  }
</style>