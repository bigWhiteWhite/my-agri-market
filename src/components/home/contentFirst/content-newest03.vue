<template>
	<div><!-- 产地行情 -->
		<div class="latest-supply-head">
			<div class="head_1">类型</div>
			<div class="head_2" >产品/品种</div> 
			<div class="head_3" >时间</div> 
			<div class="head_4" >批发价</div> 
			<div >涨跌</div>
		</div>
		
		<div class="scroll-market-list">
			<ul id="con1">
				<a href="/" v-for="(item,index) in market" :key=item.id>
					<li>
						<div class="head_1">{{item.source}}</div>
						<div class="head_2">{{item.name}}</div>
						<div class="head_3">{{item.time}}</div>
						<div class="head_4">{{item.price}}/斤</div>
						<i :class="item.upDown"></i>
					</li>
				</a>
			</ul>
		</div>
	</div>
</template>

<script>

export default {
	name: '',
	data () {
    	return {
      		market:[{id:"00",source:"市场",name:"松树菌",time:"02-06",price:"28",upDown:"iconfont icon-baoxincai"},
						{id:"01",source:"市场",name:"松树菌",time:"02-06",price:"28",upDown:"iconfont icon-bottom"},
						{id:"02",source:"市场",name:"松树菌",time:"02-06",price:"28",upDown:"iconfont icon-righttop"},
						{id:"03",source:"市场",name:"松树菌",time:"02-06",price:"28",upDown:"iconfont icon-bottom"},
						{id:"04",source:"市场",name:"松树菌",time:"02-06",price:"28",upDown:"iconfont icon-bottom"},
						{id:"05",source:"市场",name:"松树菌",time:"02-06",price:"28",upDown:"iconfont icon-righttop"},
						{id:"06",source:"市场",name:"松树菌",time:"02-06",price:"28",upDown:"iconfont icon-bottom"},
						{id:"07",source:"市场",name:"松树菌",time:"02-06",price:"28",upDown:"iconfont icon-bottom"},
						{id:"08",source:"市场",name:"松树菌",time:"02-06",price:"28",upDown:"iconfont icon-righttop"},
						{id:"09",source:"市场",name:"松树菌",time:"02-06",price:"28",upDown:"iconfont icon-bottom"},
						{id:"10",source:"市场",name:"松树菌",time:"02-06",price:"28",upDown:"iconfont icon-righttop"},
						{id:"11",source:"市场",name:"松树菌",time:"02-06",price:"28",upDown:"iconfont icon-bottom"},
						{id:"12",source:"市场",name:"松树菌",time:"02-06",price:"28",upDown:"iconfont icon-righttop"}]
    	}
  	}
}
</script>

<style lang="scss" scoped>
.latest-supply-head{
	height: 44px;
    width: 100%;
    display: -webkit-box;
    display: flex;
    font-family: MicrosoftYaHei;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #444;
    letter-spacing: 0;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid #f4f4f4;	
	.head_1{
		margin-left: 20px;
		width: 58px;
		
	}
	.head_2{
		width: 116px;
		
	}
	.head_3{
		width: 69px;
		
	}
	.head_4{
		width: 86px;
		
	}
}

.scroll-market-list{
		position: absolute;
		width: 397px;
		height: 372px;
		overflow: hidden;
		#con1{
			-webkit-animation: move-data-v-6a0700f7 14s linear 0s infinite normal;
			animation: move 4s linear 0s infinite normal;
		}
		@keyframes move{
		    0%{
		        transform: translateY(0px) 
		    }
		    49.9%{
		        transform: translateY(-70px) 
		    }
		    50%{
		        transform: translateY(-71px) 
		    }
		    100%{
		        transform: translateY(0px) 
		    }
		}
		ul{
			margin: 0;
			padding: 0;
			list-style: none;
			a{
				text-decoration: none;
				&:nth-child(odd)>li{
					background-color: #f8f8f8;
				}
				li{
					display: -webkit-box;
					display: flex;
					-webkit-box-align: center;
					align-items: center;
					height: 53px;
					width: 100%;
					font-family: MicrosoftYaHei;
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #222;
					letter-spacing: 0;
					i{
						font-size: 25px;
					}
					.head_1{
						margin-left: 20px;
						width: 58px;
						
					}
					.head_2{
						width: 116px;
						
					}
					.head_3{
						width: 69px;
						
					}
					.head_4{
						width: 86px;
						
					}
				}
			}
		}
}
</style>
