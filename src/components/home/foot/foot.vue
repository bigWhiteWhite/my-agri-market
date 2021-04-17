<template>
	<div class="footer-bg">
		<div class="bt-content">
			<div class="new-ui" style="display: none;">
				<img src="//files.cnhnb.com/potato/img/index-btm-xiaomi.df3e1742.png" alt="" class="btm-xiaomi">
			</div>
			<div class="bt-ul-content">
				<a href="/" target="_blank"rel="" 
							v-for="(item,index) in ulContent" :key=item.id>
					<div class="items">{{item.title}}</div>
				</a>
				<a href="/" target="_blank" rel="">
					<div class="items">产品价格大全</div></a>
						<a href="" target="_blank" rel="">
					<div class="items">产品地图</div>
				</a>
			</div>
			<div class="bt-content-t1" v-for="(item,index) in contentT1" :key=item.id>
				{{item.message}}
			</div>
			
			<div class="bt-content-i">
				<a target="cyxyv" href=""rel="nofollow">
					<img src="https://aqyzmedia.yunaq.com/labels/label_sm_90030.png">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'foot',
		data() {
			return {
				ulContent:[{id:"01",title:"关于我们"},
							{id:"02",title:"服务协议"},
							{id:"03",title:"隐私协议"},
							{id:"04",title:"友情链接"},
							{id:"05",title:"成功案例"},
							{id:"06",title:"农商平台大事件"},
							{id:"07",title:"产品库"},
							{id:"08",title:"品种库"}],
				contentT1:[{id:"01",message:"湛江科技学院 | 服务热线：123465"},
							{id:"02",message:"营业执照号 湛江农贸科技有限公司"},
							{id:"03",message:"增值电信业务经营许可证：经营许可证编号"},
							]
			}
		}
	}
</script>

<style lang="scss" scoped>
@mixin t1{
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	font-family: MicrosoftYaHei;
	font-family: PingFangSC-Regular;
	color: #646464;
}
.footer-bg{
	padding-top: 20px;
	width: 100%;
	background-color: #222;
	.bt-content{
		position: relative;
		margin: 0 auto;
		width: 1200px;
		padding-bottom: 20px;
		background-color: #222;
		.new-ui{
			position: absolute;
			right: -102px;
			top: -71px;
			height: 51px;
			width: 102px;
		}
		.bt-ul-content{
			height: 24px;
			-webkit-flex-wrap: wrap;
			flex-wrap: wrap;
			-webkit-box-pack: center;
			-webkit-justify-content: center;
			justify-content: center;
			margin-left: auto;
			margin-right: auto;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			align-items: center;
			a{
				display: inline-block;
				text-decoration: none;
				.items{
					display: -webkit-box;
					display: -webkit-flex;
					display: flex;
					-webkit-box-pack: center;
					-webkit-justify-content: center;
					justify-content: center;
					font-family: MicrosoftYaHei;
					font-family: PingFangSC-Regular;
					color: #646464;
					-webkit-box-align: center;
					-webkit-align-items: center;
					align-items: center;
					height: 14px;
					padding-left: 15px;
					padding-right: 15px;
					border-right: 1px solid #646464;
					font-size: 13px;
					letter-spacing: 0;
					@include t1
				}
			}
		}
		.bt-content-t1{
			margin-top: 10px;
			font-size: 12px;
			display: -webkit-box;
			@include t1 
		   a{
			   color: #646464;
			   text-decoration: none;
		   }
		}
	}
}
</style>
