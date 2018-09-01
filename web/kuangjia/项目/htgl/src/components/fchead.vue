<template>
	<div class="bg">
		<div class="header_wrap">
			<div class="logo_wrap"><a><img src="../assets/back_logo.png" alt="" /></a></div>
		    <ul class="header_nav">
		    	<li><a><i class="fa fa-globe"></i>卓新思创</a></li>
		    	<li><a><i class="fa fa-comment"></i>在线客服</a></li>
		    	<li><a><i class="fa fa-book"></i>常见问题</a></li>
		    	<li @click="cover()"><a><i class="fa fa-lock"></i>安全中心</a></li>
		    	<li @click="quit()"><a><i class="fa fa-sign-out"></i>退出</a></li>
		    	<li><a><span class="name">{{tureName}}</span>
		    <img style="float: right;" src="../assets/touxiang.jpg" alt="" /></a></li>
		    </ul>
		</div>
		<!-- 弹窗控制 -->
		<div v-show="isSwitch">
			<safeAlert @kk="closeCover"></safeAlert>
			<!--
			父组件接收到了子组件发送过来的自定义事件
			父组件会执行 XXX函数
			-->
		</div>
		<div>
			<div class="nav" id="nav">
				<ul>
					<li>
						<div class="navName">
							<i class="icon icon-user"></i>
							<span>用户管理</span>
						</div>
						<div class="navItem navItem1">
							<div class="Item">
								<a href="/#/admin">
								<i class="icon icon-user"></i>
								<span>系统人员</span>
								</a>
								
							</div>
							<div class="Item">
								<a href="/#/student">
								<i class="icon icon-user"></i>
								<span>学员管理</span>
								</a>
							</div>
						</div>
					</li>
					<li>
						<div class="navName">
							<i class="icon icon-user"></i>
							<span>课程管理</span>
						</div>
						<div class="navItem navItem1">
							<div class="Item">
								<a href="/#/course">
								<i class="icon icon-user"></i>
								<span>课程管理</span>
								</a>
							</div>
							<div class="Item">
								<a href="/#/courseEdit">
								<i class="icon icon-user"></i>
								<span>课程编辑</span>
								</a>
							</div>
							<div class="Item">
								<a href="/#/video">
							<i class="icon icon-user"></i>
								<span>视频管理</span>	
								</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import safeAlert from './safeAlert'
export default {
  components:{safeAlert},
	data(){
		return{
			isSwitch:false,  // 控制安全弹窗 显示
			tureName:'请登录'
    }
  },
   methods:{
      quit:function(){
        this.$axios({
          url:'/VueHandler/AdminHandler?action=quit',
          method:'get'
        }).then(function(res){
          if(res.data.success){
            alert('退出成功');
            window.location.href='#/login'
          }else{
            alert('退出失败')
          }
        }).catch(function(err){
            console.log(err)
        })
      },
      cover:function(){
        this.isSwitch = true;
      },
      closeCover:function(){
        this.isSwitch =false;
      }
  }

}
</script>

<style>
  ul li {
    list-style: none;
  }

  .bg {
    background: url(../assets/images/index_body_bg.jpg);
    height: 100px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .header_wrap {
    height: 50px;
    background: #222222;
    font-size: 12px;
  }

  .logo_wrap {
    margin: 4px 0 0 18px;
    float: left;
  }

  .header_nav {
    float: right;
    color: #9d9d9d;
  }

  .header_nav li {
    float: left;
    line-height: 50px;
    padding: 0 15px;
  }

  .header_nav li a:hover {
    color: #fff;
    cursor: pointer;
  }

  .header_nav li a {
    color: #9D9D9D;
    position: relative;
  }

  .header_nav li a .icon {
    top: 0;
    border: none;
    left: -20px;
  }

  .header_nav i, .header_nav .name {
    margin-right: 6px;
  }
  ul li {
    list-style: none;
  }

  .nav {
    width: 100%;
    height: 50px;
    background: url(../assets/images/white_opacity_bg.png);
    position: relative;
  }

  .nav ul {
    /*padding-left: 500px;*/
    overflow: hidden;
    margin: 0 auto;
    width: 100%;
  }

  .nav ul li .navName {
    font-size: 16px;
    float: left;
    padding: 0 30px;
    color: whitesmoke;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    position: relative;
  }

  .nav ul li .navName i {
    margin-right: 10px;
  }

  /*  上下白   设置基本属性  用css 伪类 设置*/
  .nav ul li .navName::before, .nav ul li .navName::after {
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    transition: .3s ease;
    opacity: 0;
  }

  /* 设置位置 颜色 */
  .nav ul li .navName::before {
    top: 20px;
    left: 66px;
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
  }

  .nav ul li .navName::after {
    bottom: 20px;
    right: 66px;
    border-bottom: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
  }

  /*白色的那个条*/
  .nav .navItem {
    position: absolute;
    z-index: 200;
    /*left: -80px;*/
    top: 50px;
    width: 100%;
    height: 144px;
    background-color: white;
    border: 1px solid #ececec;
    display: none;
  }

  /* 白条中内容 */
  .nav .navItem .Item {
    float: left;
    margin: 52px 40px;
    width: 249px;
    height: 40px;
    border: 1px solid #ececec;
    font-size: 15px;
    line-height: 42px;
    text-align: center;
    cursor: pointer;
    transition: .2s ease;
  }

  .nav .navItem .Item:hover {
    background: #4c5c9c;
    color: white;
    font-size: 16px;

  }

  .nav .navItem .Item i {
    margin-right: 13px;
  }

  /*控制显示的移入*/
  .nav ul li:hover > .navItem {
    display: block;
  }

  /* 鼠标移入时 显示的 上下白 */
  .nav ul li:hover > .navName::before {
    top: 2px;
    left: 2px;
    opacity: 1;
    /*transition: .3s ease;*/
  }

  .nav ul li:hover > .navName::after {
    bottom: 2px;
    right: 2px;
    opacity: 1;
    /*transition: .3s ease;*/
  }
</style>