<template>
	<div class="swiper-container"><!-- 最新采购 -->
			<el-carousel  :autoplay="false" arrow="never"  trigger="click">
				<el-carousel-item>
					<a href="#" target="_blank" v-for="(item,index) in purchase" :key=item.id>
						<div class="latest-purchase-item">
							<div class="purchase-item-left">
								<div class="shop-name">{{item.name}}</div> 
								<div class="shop-address">{{item.address}}</div>
							</div>
							<div class="purchase-item-right">{{item.num}}</div>
						</div>
					</a>
			    </el-carousel-item>
						
				<el-carousel-item >
					<a href="#" target="_blank" v-for="(item02,index) in purchase02" :key=item02.id>
						<div class="latest-purchase-item">
							<div class="purchase-item-left">
								<div class="shop-name">{{item02.name}}</div> 
								<div class="shop-address">{{item02.address}}</div>
							</div>
							<div class="purchase-item-right">{{item02.num}}</div>
						</div>
					</a>
				</el-carousel-item>
			</el-carousel>
		  
	</div>
</template>

<script>

export default {
	name: '',
	data () {
    	return {
      		purchase:[{id:"01",name:"干玉米 黄玉米粒",address:"期望货源地：全国",num:"20000斤"},
						{id:"02",name:"徐闻菠萝 新鲜菠萝",address:"徐闻：全国",num:"30000斤"},
						{id:"03",name:"猪苗 优质猪苗",address:"期望货源地：湖南省长沙市",num:"10头"},
						{id:"04",name:"葡萄 巨峰葡萄",address:"期望货源地：全国",num:"20000斤"},
						{id:"05",name:"丹参",address:"期望货源地：全国",num:"100公斤"},],
			purchase02:[{id:"01",name:"兔子  肉兔",address:"期望货源地：全国",num:"200只"},
						{id:"02",name:"公鸡  种鸡",address:"期望货源地：全国",num:"300只"},
						{id:"03",name:"牛  肉牛",address:"期望货源地：全国",num:"50头"},
						{id:"04",name:"鸭  肉鸭",address:"期望货源地：全国",num:"100只"},
						{id:"05",name:"鹅  肉鹅",address:"期望货源地：全国",num:"200只"},]
    	}
  	}
}
</script>

<style lang="scss" scoped>
.swiper-container{
	height: 412.7px;
	margin: 0 auto;
	position: relative;
	overflow: hidden;
	z-index: 1;
	@mixin a1 {
		-ms-transform-style: preserve-3d;
		-moz-transform-style: preserve-3d;
		-webkit-transform-style: preserve-3d;
	}
	.el-carousel{
		margin-top: 12.7px;
		width: 391px;
		height: 400px;
		>>>.el-carousel__button{//改变指示器的颜色
			background-color:#39bf3e;
		}
		.el-carousel__item{
			height: 400px;
			width: 100%;
			background-color: #fff;
			
			a{
				text-decoration: none;
				.latest-purchase-item{
					display: -webkit-box;
					display: flex;
					-webkit-box-align: center;
					align-items: center;
					-webkit-box-pack: justify;
					justify-content: space-between;
					margin-top: 12.7px;
					margin-left: 20px;
					margin-right: 20px;
					height: 60px;
					background-color: hsla(0,0%,84.7%,.2);
					border-radius: 6px;
					.purchase-item-left{
						margin-left: 19px;
						.shop-name{
							font-family: MicrosoftYaHei;
							font-family: PingFangSC-Regular;
							font-size: 16px;
							color: #222;
							letter-spacing: 0;
						}
						.shop-address{
							margin-top: 5px;
							font-family: MicrosoftYaHei;
							font-family: PingFangSC-Regular;
							font-size: 12px;
							color: #909090;
							letter-spacing: 0;
							width: 220px;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}
					.purchase-item-right{
						margin-right: 21px;
						font-family: MicrosoftYaHei;
						font-family: PingFangSC-Regular;
						font-size: 22px;
						color: #ff442f;
						letter-spacing: 0;
						span{
							margin-left: 4px;
							font-family: MicrosoftYaHei;
							font-family: PingFangSC-Regular;
							font-size: 14px;
						}
					}
				}
			}
		}
	}
}
</style>
