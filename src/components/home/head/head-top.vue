<template>
	<div class="top-nav-content">
		<div class="top-nav-wrap">
			<div class="top-title"><!-- 注册链接 -->
				<div class="top-title-text">欢迎来到农商平台</div>
				<div class="login-div" >
					<img src="//files.cnhnb.com/fas/home/img/9e2d99c.png" alt="" >
					<div class="login-div-text" ><router-link to="/login">免注册登陆</router-link></div>
				</div>
			</div>
			<div class="top-ul">
				 <Menu mode="horizontal"  active-name="1">
						<MenuItem name="1" to="/login">
							<Icon type="ios-paper" />
							个人中心
						</MenuItem>
						<MenuItem name="2" to="/supplier">
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
			
			
			<div class="title">
				<a href="/" target="" ><div alt="农商平台logo" title="农商平台官网" class="search-urls" ><img src="../../../resource/img/logo.png" alt="" class="header-index-img1 head-img-mr1" ></div></a>
			</div>
			
			<el-backtop  :bottom="100" :visibility-height="0" :right="50"><!-- 回到顶部对象 -->
				<div style="{height: 100%;background-color: #39bf3e;box-shadow: 0 0 6px rgba(0,0,0, .12);text-align: center;line-height: 40px;color: white;border-radius: 50% 50%;}">
					顶部
				</div>
			</el-backtop>
		</div>
		
		
	</div>
</template>

<script>

export default {
	name: '',
	data () {
    	return {
      		
    	}
  	}
}
</script>

<style lang="scss" scoped>
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
						a{
							text-decoration: none;
							color: #ff862c;
						}
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
				
				
			.title{/* 农商平台logo */
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
		}
}
	
</style>
