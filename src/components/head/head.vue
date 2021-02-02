<template>
	<div class="head"><!-- 头部组件 -->
		<div class="top-nav-content">
			<div class="top-nav-wrap">
				<div class="top-title">
					<div class="top-title-text">欢迎来到农商平台</div>
					<div class="login-div" >
						<img src="//files.cnhnb.com/fas/home/img/9e2d99c.png" alt="" >
						<div class="login-div-text" >免注册登陆</div>
					</div>
				</div>
				<div class="top-ul">
					 <Menu mode="horizontal"  active-name="1">
					        <MenuItem name="1">
					            <Icon type="ios-paper" />
					            个人中心
					        </MenuItem>
					        <MenuItem name="2">
					            <Icon type="ios-people" />
					            供应商后台
					        </MenuItem>
					        <Submenu name="3">
					            <template slot="title">
					                <Icon type="ios-stats" />
					                手机端
					            </template>
					            <MenuGroup title="使用">
					                <MenuItem name="3-1">手机端</MenuItem>
					                <MenuItem name="3-2">小程序</MenuItem>
					                <MenuItem name="3-3">公众号</MenuItem>
					            </MenuGroup>
					        </Submenu>
					    </Menu>
				</div>
			</div>
		</div>
		<div class="top-search">
			<div class="content">
				<div class="title">
					<a href="/" target="" ><div alt="农商平台logo" title="农商平台官网" class="search-urls" ><img src="../../resource/img/logo.png" alt="" class="header-index-img1 head-img-mr1" data-v-0f65cdd8=""></div></a>
				</div>
				<div class="search">
					<div class="search-select">
						 <Dropdown>
						        <a href="javascript:void(0)">
						            下拉菜单
						            <Icon type="ios-arrow-down"></Icon>
						        </a>
						        <DropdownMenu slot="list" class="ivu-select">
						            <DropdownItem >供应</DropdownItem>
						            <DropdownItem divided>采购</DropdownItem>
						            <DropdownItem divided>行情</DropdownItem>
						        </DropdownMenu>
						    </Dropdown>
					</div>
					<div class="search-text">
						<i class="iconfont icon-sousuo" ></i>
						<input type="text" placeholder="搜索您要的货品" value="" class="search-text-models" >
					</div>
					<div class="search-buttn">搜索</div>
				</div>
				<div class="qr">
					<img src="../../resource/img/logo.png" alt="">
					<div class="head-qr-text" data-v-0f65cdd8="">手机惠农网</div>
				</div>
			</div>
			<div class="nav-head">
				<div class="classification" ><div class="mascot-ui"><img src="//files.cnhnb.com/fas/home/img/33ae5c7.png" alt=""></div> <img src="//files.cnhnb.com/fas/home/img/15d577b.png" alt="" class="fenlei-icon" > <span>货品分类</span></div>
				<div class="nav-head-ul">
					<Menu mode="horizontal"  active-name="1">
					        <MenuItem name="1">
					            <Icon type="ios-paper" />
					            首页
					        </MenuItem>
					        <MenuItem name="2">
					            <Icon type="ios-people" />
					            供应大厅
					        </MenuItem>
					        <Submenu name="3">
					            <template slot="title">
					                <Icon type="ios-stats" />
					                采购大厅
					            </template>
					            <MenuGroup title="使用">
					                <MenuItem name="3-1">新增和启动</MenuItem>
					                <MenuItem name="3-2">活跃分析</MenuItem>
					                <MenuItem name="3-3">时段分析</MenuItem>
					            </MenuGroup>
					            <MenuGroup title="留存">
					                <MenuItem name="3-4">用户留存</MenuItem>
					                <MenuItem name="3-5">流失用户</MenuItem>
					            </MenuGroup>
					        </Submenu>
					        <MenuItem name="4">
					            <Icon type="ios-call" />
					            行情大厅
					        </MenuItem>
							<MenuItem name="5">
							    <Icon type="md-briefcase" />
							    行情资讯
							</MenuItem>
							<MenuItem name="6">
							    <Icon type="ios-construct" />
							    农技学堂
							</MenuItem>
							<MenuItem name="7">
							    <Icon type="ios-aperture" />
							    农商代卖
							</MenuItem>
							<MenuItem name="8">
							    <Icon type="ios-build" />
							    综合设置
							</MenuItem>
					    </Menu>
				</div>
			</div>
		</div>
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
	background-color: #fff;
	.top-nav-content{
		position: relative;
		height: 34px;
		width: 100%;
		background-color: #fff;
		border-bottom: 1px solid #e6e6e6;
		.top-nav-wrap{
			position: relative;
			width: 1200px;
			margin: 0 auto;
			height: 34px;
			background-color: #fff;
			border-bottom: 1px solid #eee;
			@mixin t1 {/* 头部的登陆样式混合器 */
				display: inline-block;
				font-family: MicrosoftYaHei;
				font-family: PingFangSC-Regular;
				font-size: 12px;
				letter-spacing: 0;
			}
			.top-title{/* 头部的登陆样式 */
				@include t1;
				height: 35px;
				width: auto;
				line-height: 30px;
				.top-title-text{
					@include t1;
					display: inline-block;
					font-family: MicrosoftYaHei;
					font-family: PingFangSC-Regular;
					font-size: 12px;
					letter-spacing: 0;
				}
				.login-div{
					@include t1;
					position: relative;
					margin-left: 5px;
					color: #ff862c;
					img{
						position: relative;
						top: 2px;
						display: inline-block;
						height: 15px;
						width: 15px;
					}
					.login-div-text{
						cursor: pointer;
						position: relative;
						display: inline-block;
					}
				}
			}
			
			.top-ul{/* 头部的个人中心 */
				position: absolute;
				height: 34px;
				right: 0;
				display: inline-block;
				.ivu-menu{
					height: 35px;
					line-height: 31px;
				}
				.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
					color: #ff862c;
					border-bottom: 2px solid #ff862c;
				}
			}
				
		}
	}
	
	.top-search{
		position: relative;
		top: 0;
		width: 100%;
		background-color: #fff;
		height: 123px;
		.content{
			height: 122px;
			position: relative;
			display: -webkit-box;
			display: flex;
			-webkit-box-pack: justify;
			justify-content: space-between;
			margin: 0 auto;
			width: 1200px;
			background-color: #fff;
			.title{
				display: -webkit-box;
				display: flex;
				-webkit-box-align: center;
				align-items: center;
				a{
					text-decoration: none;
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #333;
					letter-spacing: 0;
					.search-urls{
						width: 260px;
						height: 123px;
						position: relative;
						left: 0;
						display: inline-block;
						cursor: pointer;
						img{
							position: absolute;
							top: 20px;
							height: 80px;
							width: 88px;
						}
					}
				}
			}
			
			.search{
				position: relative;
				left: -180px;
				width: 650px;
				height: 40px;
				margin-top: 41px;
				z-index: 99;
				display: inline-block;
				button, input, textarea {
				    color: inherit;
				    font: inherit;
				}
				.search-select{
					font-family: PingFangSC-Regular;
					font-size: 16px;
					letter-spacing: 0;
					position: relative;
					height: 40px;
					width: 101px;
					border: 2px solid #39bf3e;
					border-right: 1px solid #ddd;
					display: inline-block;
					border-top-left-radius: 20px;
					border-bottom-left-radius: 20px;
					.ivu-dropdown{
						position: relative;
						top: 5px;
						left: 10px;
						a{
							color: #39bf3e;
						}
						.ivu-select{
							li{
								color: #39bf3e;
							}
						}
						
					}
				}
				.search-text{
					position: absolute;
					font-family: PingFangSC-Regular;
					font-size: 16px;
					display: -webkit-box;
					display: flex;
					-webkit-box-align: center;
					align-items: center;
					color: #999;
					letter-spacing: 0;
					top: 0;
					left: 101px;
					width: 460px;
					height: 40px;
					border: 2px solid #39bf3e;
					border-left: none;
					i{
						color: #909090;
						margin-left: 10px;
					}
					.search-text-models{
						outline: none;
						position: relative;
						border: none;
						width: 432px;
						margin-left: 10px;
						height: 36px;
						font-size: 16px;
						display: inline-block;
						overflow: hidden;
					}
				}
				.search-buttn{
					position: absolute;
					border-top-right-radius: 20px;
					border-bottom-right-radius: 20px;
					top: 0;
					height: 40px;
					width: 100px;
					left: 560px;
					background-color: #39bf3e;
					font-family: PingFangSC-Regular;
					font-size: 16px;
					color: #fff;
					letter-spacing: 0;
					display: inline-block;
					text-align: center;
					line-height: 44px;
				}
			}
			
			.qr{
				margin-top: 10px;
				width: 72px;
				height: 88px;
				border: 1px solid #eee;
				img{
					margin-top: 6px;
					margin-left: 5px;
					height: 60px;
					width: 60px;
				}
				.head-qr-text{
					font-family: MicrosoftYaHei;
					font-family: PingFangSC-Regular;
					font-size: 10px;
					color: #909090;
					letter-spacing: 0;
					text-align: center;
				}
			}
		}
		
		.nav-head{
			position: relative;
			display: -webkit-box;
			display: flex;
			-webkit-box-pack: center;
			justify-content: center;
			margin: 0 auto;
			width: 1200px;
			height: 34px;
			.classification{
				width: 200px;
				height: 36px;
				display: -webkit-box;
				display: flex;
				-webkit-box-align: center;
				align-items: center;
				-webkit-box-flex: 0;
				flex: none;
				background: #39bf3e;
				font-family: MicrosoftYaHei;
				font-family: PingFangSC-Regular;
				font-size: 16px;
				color: #fff;
				letter-spacing: 0;
				border-top-left-radius: 5px;
				border-top-right-radius: 5px;
				.mascot-ui{
					position: absolute;
					left: 70px;
					top: -33px;
					height: 30px;
					width: 60px;
				}
				.fenlei-icon{
					margin-left: 17px;
					height: 14px;
					width: 14px;
				}
				span{
					margin-left: 10px;
				}
			}
			
			.nav-head-ul{
				position: relative;
				height: 34px;
				width: 1200px;
				.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
					color: #39bf3e;
					border-bottom: 2px solid #39bf3e;
				}
				.ivu-menu-horizontal{
					line-height: 35px;
					height: 36px;
				}
					
			}
		}
	}
}
</style>
