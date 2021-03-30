<template>
	<div class="supplier-head">
		<div id="header-logo" class="logo-bg">
			<img src="https://files.cnhnb.com/merchant/logo.jpg" class="logo-icon">
			<div class="logo-title" @click="toShouYe">
				<div class="title">供应商后台</div> 
				<span class="sub-title"></span>
			</div>
			<div class="sidebar-open"  @click="toShouYe">
				<svg class="icon" aria-hidden="true">
				      <use xlink:href="#icon-zhuye"></use>
				</svg>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {

			}
		},
		methods:{
			toShouYe(){
				this.$router.push('/')
			}
		}
	}
</script>

<style lang="scss" scoped>
.supplier-head {
	height: 58px;
	background: #45b035 !important;
	.logo-bg{
		position: relative;
		font-size: 16px;
		float: left;
		position: relative;
		text-align: center;
		height: 58px;
		width: 	240px;
		background-color: hsla(0,0%,100%,.1);
		color: #fff;
		.logo-icon{
			width: 87px!important;
			height: 29px!important;
			display: inline-block;
			position: absolute;
			top: 50%;
			margin-top: -14px;
			left: 12px;
		}
		.logo-title{
			position: absolute;
			top: 18px;
			left: 110px;
			right: 0;
			text-align: left;
			.title{
				font-size: 16px;
				font-weight: 700;
				height: 16px;
			}
			.sub-title{
				font-size: 11px;
				color: #efefef;
			}
		}
		.sidebar-open{
			position: absolute;
			right: -45px;
			width: 45px;
			height: 58px;
			line-height: 58px;
			vertical-align: middle;
			background: #fff;
			text-align: center;
			cursor: pointer;
			font-size: 25px;
			border-bottom: 2px solid #45b035;
			svg{
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
