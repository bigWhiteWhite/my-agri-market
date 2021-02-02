<template>
	<div class="head">
		<div class="top-nav-content">
			<div class="top-title">
				<div class="top-title-text">欢迎来到农贸商场</div>
			</div>
			<div class="top-ul"></div>
		</div>
		<div class="top-search"></div>
		<div class="top-fix"></div>
  </div>
</template>

<script>
export default {
  name: 'myhead',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.head{
	position: relative;
	height: 190px;
	width: 100%;
	background-color: black;
	.top-nav-content{
		position: relative;
		height: 34px;
		width: 100%;
		background-color: #fff;
		border-bottom: 1px solid #e6e6e6;
	}
}
</style>
