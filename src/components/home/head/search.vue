<template>
	<div class="content">
		<div class="title">
			<a href="/" target="" ><div alt="农商平台logo" title="农商平台官网" class="search-urls" ><img src="../../../resource/img/logo.png" alt="" class="header-index-img1 head-img-mr1" ></div></a>
		</div>
		<!-- 顶端搜索框 -->
		<div class="search">
			<div class="search-select">
				 <Dropdown>
				        <a href="javascript:void(0)">
				            下拉菜单
				            <Icon type="ios-arrow-down"></Icon>
				        </a>
				        <DropdownMenu slot="list" class="ivu-select">
				            <DropdownItem >供应</DropdownItem>
				            <DropdownItem >采购</DropdownItem>
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
		<!-- 二维码图片 -->
		<div class="qr">
			<img src="../../../resource/img/logo.png" alt="">
			<div class="head-qr-text" >手机惠农网</div>
		</div>
		
		<!-- 顶端下拉搜索框，滚动超过一定距离才显示-->
		<div class="top-fix" v-show="showFixedSearch">
			<div  class="search-content">
				<img  src="http://localhost:8080/static/img/logo.6705a9a.png" alt="" class="search-img">
				<div  class="search-div">
					<div>
						<div  class="search-select">
							<Dropdown>
							        <a href="javascript:void(0)">
							            下拉菜单
							            <Icon type="ios-arrow-down"></Icon>
							        </a>
							        <DropdownMenu slot="list" class="ivu-select">
							            <DropdownItem >供应</DropdownItem>
							            <DropdownItem >采购</DropdownItem>
							            <DropdownItem divided>行情</DropdownItem>
							        </DropdownMenu>
							</Dropdown>
						</div> 
						<div  class="search-text">
							<i  class="iconfont icon-sousuo"></i> 
							<input  type="text" placeholder="搜索您要的货品" class="search-text-models">
						</div> 
						<div  class="search-button">搜索</div>
					</div>
				</div>
				<div  class="user-login">
						<div  class="top-title-text">欢迎来到农商平台</div>
						<div  class="login-div">
							<img  src="//files.cnhnb.com/fas/home/img/9e2d99c.png" alt="">
							<div  class="login-div-text">免注册登录</div>
						</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: '',
	data () {
    	return {
      		showFixedSearch:false,
    	}
  	},
	methods:{
		 showSearch() {
			 // 获取当前滚动条向下滚动的距离
			 let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			 // 当页面滚动到高度300px处时，显示搜索框
			 if (scrollTop > 300) {
				 this.showFixedSearch = true;
			 } else {
				 this.showFixedSearch = false;
			 }
		 },
	},
	mounted() {
			// 监听页面滚动事件
			window.addEventListener("scroll", this.showSearch)
	}
}
</script>

<style lang="scss" scoped>
@mixin s1 {
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
	}
	@mixin s2 {
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
	@mixin s3 {
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
	@mixin s4 {
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
				position: relative;
				z-index: 99;
				li{
					color: #39bf3e;
				}
			}
		}
	}
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
	/* 顶端搜索框 */
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
			@include s4
		}
		.search-text{
			@include s1
			i{
				color: #909090;
				margin-left: 10px;
			}
			.search-text-models{
				@include s2
			}
		}
		.search-buttn{
			@include s3
		}
	}
	/* 顶端下拉搜索框 */
	.top-fix{
		@mixin b1 {
			height: 60px;
			display: -webkit-box;
			display: flex;
		}
		@include b1;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 100%;
		-webkit-box-pack: center;
		justify-content: center;
		background-color: #fff;
		box-shadow: 0 4px 10px 0 rgba(89,99,84,.1);
		.search-content{
			@include b1;
			position: relative;
			width: 1200px;
			img{
				height: 46px;
				margin-top: 7px;
			}
			.search-div{
				position: relative;
				margin-left: 100px;
				margin-top: 10px;
				.search-select{
					@include s4
				}
				.search-text{
					@include s1
					.search-text-models{
						@include s2
					}
				}
				.search-button{
					@include s3
				}
			}
			.user-login{
				position: absolute;
				right: 0;
				font-size: 12px;
				line-height: 60px;
				display: inline-block;
				.top-title-text{
					display: inline-block;
					font-family: MicrosoftYaHei;
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #444;
					letter-spacing: 0;
				}
				.login-div{
					position: relative;
					margin-left: 5px;
					font-family: MicrosoftYaHei;
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #ff862c;
					letter-spacing: 0;
					display: inline-block;
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
		}
	}

	//二维码图片
	.qr{
		margin-top: 10px;
		margin-right: 25px;
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

	
</style>
