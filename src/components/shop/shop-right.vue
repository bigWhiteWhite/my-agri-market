<template>
	<div class="box-right">
		<div class="title">
			<!-- 标题 -->
			<h1>{{data.name}}</h1>
			<p class="newp">{{data.update_time}}</p>
		</div>
		<div class="price">
			<!-- 价格 -->
			<dl class="tm-price-panel tm-price-cur">
				<dt class="tb-metatit">价格</dt>
				<dd>
					<em class="tm-yen">¥</em>
					<span class="tm-price">{{data.price/100}}</span>
					<div class="staticPromoTip">
						<!--rullBanner ids:$ids true-->
					</div>
				</dd>
			</dl>
			<dl class="tm-promo-panel" style="display: none;"><dt class="tb-metatit">价格</dt>
				<dd></dd>
			</dl>
			<dl class="tm-shopPromo-panel"></dl>
		</div>
		<!-- 货品来源 -->
		<div class="resource">
			<span class="info-left">地区</span>
			<span class="info-right">山东</span><!-- {{message[3].propertyValueVoList[0].value}} -->
		</div>
		<!-- 累计评价 -->
		<ul class="assess">
			<li class="tm-ind-item">
				<div class="tm-indcon"><span class="tm-label">累计评价</span><span class="tm-count">538</span></div>
			</li>
			<li class="tm-ind-item tm-ind-emPointCount">
				<div class="tm-indcon">
					<a href="//vip.tmall.com/vip/index.htm" target="_blank">
						<span class="tm-label">送个人积分</span>
						<span class="tm-count">2</span>
					</a>
				</div>
			</li>
		</ul>
		<!-- 选择数量 -->
		<div class="num">
			<span class="num-left">购买数量:</span>
			<InputNumber :max="1000" :min="1" v-model="value1"></InputNumber>
			<span class="num-right">斤</span>
		</div>
		<!-- 规格选择 -->
		<div class="txt">
			<span class="specs">规格选择:</span>
			<ul class="eye-flex-wrap">
				<li class="eye-renderer__item" style="width:25%;">
					 <el-button type="success" plain>可爱儿童</el-button>
				</li>
			</ul>
		</div>
		<!-- 下单按钮 -->
		<div class="action">
			<el-button type="info">电话询问</el-button>
			<el-button type="danger">
					<router-link to="/Buy">立刻采购</router-link>
			</el-button>
		</div>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default {
		name: '',
		data() {
			return {
				value1: 100,
				data:{},
				message:{},
			}
		},
		mounted() {
			var params = new URLSearchParams()
			params.append("pid",this.$route.query.pid)/* this.$store.state.pid */
			this.$axios.post('/product/detail/',params)
			.then(res=>{
			    if(res.status===200){
			    	this.data =  res.data.data
					this.message =  res.data.data.propertyNameList
					//console.log(this.data)
					//console.log(this.message)
			    }else{
			   	 return 'error'
			    }
			})  
			.catch(err=>{
				console.log(err)
			})
		}
	}
</script>

<style lang="scss" scoped>
	.box-right {
		margin: 0 0 0 460px;
		color: #666;
		padding: 0 0 10px;

		//标题
		.title {
			padding: 20px 10px 12px;
			color: #000;

			h1 {
				font-family: "microsoft yahei";
				padding-bottom: .2em;
				line-height: 1;
				font-size: 16px;
				font-weight: 700;
				color: #FF0036;
			}

			.newp {
				font-size: 14px;
				color: #000;
				font-family: "microsoft yahei";
			}
		}

		//价格
		.price {
			background-color: #e9e9e9;
			background-repeat: no-repeat;
			backgroung-position: left 0;
			background-image: url("data:image/png;base64,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");
			position: relative;
			left: 0;
			z-index: 10;
			font: 12px/1.5 "Microsoft Yahei", tahoma, arial;
			padding-bottom: 5px;
			padding-top: 5px;
			margin-right: 20px;

			.tm-price-panel {
				line-height: 30px;
				position: static;
				color: #333;
				padding-left: 0;

				.tb-metatit {
					color: #999;
					font-size: 12px;
					text-align: left;
					float: left;
					width: 69px;
					margin: 0 0 0 8px;
					text-align: left;
					float: left;
					width: 66px;
				}

				dd {
					@mixin t1 {
						font-family: Arial;
						text-decoration: none;
						-webkit-font-smoothing: antialiased;
						vertical-align: middle;
					}

					position: relative;
					color: #333;
					margin-left: 70px;
					font-family: Arial;

					.tm-yen {
						@include t1 color: #FF0036;
						font-size: 18px;
					}

					.tm-price {
						@include t1 color: #FF0036;
						font-size: 24px;
						font-weight: bolder;
					}
				}
			}
		}

		//来源
		.resource {
			margin: 15px 0;
			display: flex;

			.info-left {
				font-size: 14px;
				width: 70px;
				padding-right: 10px;
				display: inline-block;
				white-space: nowrap;
			}

			.info-right {
				font-size: 14px;
				color: #222;
			}
		}

		//评价
		.assess {
			border: 1px dotted #c9c9c9;
			border-width: 1px 0;
			margin: -1px 20px 0 0;
			padding: 10px 0;
			position: relative;
			overflow: hidden;
			display: flex;

			.tm-ind-item {
				float: left;
				width: 33%;
				text-align: center;
				position: relative;
				left: -1px;
				border-left: 1px solid #e5dfda;
				flex: 1;
				line-height: 16px;

				@mixin t2 {
					display: inline-block;
					line-height: 16px;
					height: 16px;
					color: #999;
				}

				.tm-label {
					display: inline-block;
					line-height: 16px;
					height: 16px;
					color: #999;
					@include t2
				}

				.tm-count {
					display: inline-block;
					line-height: 16px;
					height: 16px;
					color: #FF0036;
					font-weight: 700;
					margin-left: 3px;
				}
			}

			.tm-ind-emPointCount {
				display: inline-block;
				margin: 0 auto;
				line-height: 16px;

				a {
					text-decoration: none;
				}
			}
		}

		//数量
		.num {
			margin-top: 15px;
			.num-left {
				margin-top: 5px;
				margin-right: 13px;
				text-align: left;
				float: left;
				width: 66px;
			}

			.num-right {
				margin-left: 5px;
				text-align: right;
			}
		}
		//规格选择
		.txt{
			    margin: 15px 0;
			    display: flex;
				.specs{
					    vertical-align: top;
						width: 70px;
						padding-right: 10px;
						display: inline-block;
						white-space: nowrap;
				}
				.eye-flex-wrap{
					flex-wrap: wrap;
					display: inline-block;
					width: 670px;
					cursor: pointer;
					list-style: none;
					li{
						font-size: 14px;
						margin: 0 10px 10px 0;
						padding: 3px 5px;
						text-align: center;
						display: inline-block;
					}
					
				}
		}
		//下单按钮
		.action {
			position: relative;
			top:45px;
			a{
				text-decoration: none;
				color: white;
			}
		}
	}
</style>
