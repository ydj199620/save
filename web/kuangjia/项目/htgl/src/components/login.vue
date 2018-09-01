<template>
	<div class="content">
	    <bg-canvas></bg-canvas>
	    <!--包裹的div-->
	    <div class="login_wrap" >
	      <img src="../assets/back_logo.png" class="logo" alt="" />
          <form>
          	<!-- 图标 和 输入框  -->
          	<div class="oneinput_box">
          		<span class="icon">
          			<i class="fa fa-user"></i>
          		</span>
          		<input ref='input_user' type="text" placeholder="用户名" />
          	</div>
          	<div class="oneinput_box">
          		<span class="icon">
          			<i class="fa fa-lock"></i>
          		</span>
          		<input ref='input_pw' type="text" placeholder="密码" />
          	</div>
          	<div class="oneinput_box">
          		<span class="icon">
          			<i class="fa fa-lock"></i>
          		</span>
          		<input ref="input_veri" type="text" style="width: 310px;" placeholder="请输入验证码" />
          		<!--<div style="width: 99px;height: 30px;border: 1px solid red;display: inline-block;"></div>-->
          	    <veri ref="veriCode"></veri>
          	</div>
          </form>
          <button class="btn btn-info" @click="findPw">忘记密码</button>
          <button class="btn btn-success" @click='login'>登录</button>
	    </div>
	</div>
</template>

<script>	
import bgCanvas from './login/bgCanvas.vue';
import veri from './login/verification.vue'
/*   ref="XXX" ==> 标识  
 *   this.$refs.XXX.value
 * */

export default {
	components:{bgCanvas,veri},
	mounted:function(){
//		alert(this.$refs.input_veri.value)
	},
	methods:{
    //1获取到用户输入的验证码
    //2把用户输入的验证码发送给服务器
    //3用axios请求后台
    findPW:function(){
      alert('服务暂未开通');
    },
    login:function(){
      var val1 = this.$refs.input_veri.value.trim();
      var user1 =this.$refs.input_user.value.trim();
      var psd1 =this.$refs.input_pw.value.trim();
      var that = this;
      this.$axios({
        url:'/VueHandler/AdminLoginAndRegHandler?action=checkVerification',
        method:'get',
        params:{veri:val1}
      }).then(function(res){
        if(res.data.success){
          alert('验证码正确');
          that.$axios({
            url:'/VueHandler/AdminLoginAndRegHandler?action=login',
            method:'post',
            data:{userName:user1,password:psd1}
          }).then(function(res){
            if(res.data.success){
              alert('登录成功');
              window.location.href ='#/home'
            }else{
              alert(res.data.err);
              that.$refs.veriCode.changeVeri()
            }
          })
        }else{
          alert('验证码错误')
          that.$refs.veriCode.changeVeri()
        }
      }).catch(function(err){

      })
    }
	}
}



/* 
findPw:function(){
			alert('服务暂未开通')
		},
		login(){ */
//			alert(this.$refs.input_veri.value)
/* 1.获取到输入的验证码的值

 * 2.把输入的值 发送给服务器 让服务器自己去确定，我的验证码输入的是否正确
 *    （用接口 URL：/VueHandler/AdminLoginAndRegHandler?action=checkVerification ）
 * 3.axios 
 *  1234       1234 
 * */
      /*  var _this=this;
       var veri =this.$refs.input_veri.value.trim();
       var userName =this.$refs.input_user.value.trim();
       var password =this.$refs.input_pw.value.trim();
       this.$axios({
       	method:'get',
       	url:'/VueHandler/AdminLoginAndRegHandler?action=checkVerification',
       	params:{veri:veri}   //参数 ~~~~~ data
       }).then(function(response){
        if(response.data.success){
        	alert("验证码成功"); */
// 验证 账号密码的正确
// /VueHandler/AdminLoginAndRegHandler?action=login
//   1.获取前端输入的账号密码
//   2.请求  ==》 服务器   。。。。使用接口进行登录的判断

        /* 	_this.$axios({
        		method:'post',
        		url:'/VueHandler/AdminLoginAndRegHandler?action=login',
        		data:{
        			userName:userName,
        			password:password
        		}
        	}).then(function(res){
        		if(res.data.success){
        			alert('登陆成功');
        			window.location.href='/home'
        		}else{
        			alert(res.data.err);
        			_this.$refs.veriCode.changeVeri();
        		}
        	}).catch(function(err){
        		alert(err);
        	})
        }else{  // 验证码匹配失败
        	alert(response.data.err)
        	//  调用 重新获取验证码的 方法     验证码的组件  changeVeri()
        	//  ref  --> 验证码的组件
        	_this.$refs.veriCode.changeVeri();
        }
       	
       }).catch(function(err){
       	alert(err);
       })
		} */
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
  .content {
    background: #0d1953;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .content img {
    border: none;
  }

  .content bg-cavas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .login_wrap {
    width: 560px;
    height: 320px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -180px;
    margin-left: -280px;
    z-index: 3;
    color: #fff;
  }

  .login_wrap .logo {
    margin-left: 180px;
    margin-bottom: 29px;
  }

  .login_wrap form {
    margin-left: 50px;
  }

  .login_wrap input {
    background: #0d1953;
    width: 413px;
    height: 34px;
    line-height: 34px;
    border: 1px solid #3c498a;
    margin-left: 0px;
    padding-left: 5px;
    color: #fff;
  }

  input:focus {
    outline: none;
  }

  .oneinput_box {
    position: relative;
    margin-bottom: 25px;
    overflow: hidden;
    width: 457px;
    padding-left: 10px;
  }

  .oneinput_box * {
    float: left;
  }

  .oneinput_box span {
    background: #0d1953;
    border: 1px solid #3c498a;
    padding: 11px 9px;
    border-right: none 0;
    height: 12px;
    width: 10px;
    padding-left: 10px;
    overflow: hidden;

  }

  .oneinput_box .icon {
    top: 0;
    left: 10px;
    font-size: 10px;
    width: 9px;
    height: 12px;
  }

  .oneinput_box .fa-lock {
    top: 0;
    left: 10px;
    font-size: 10px;
    width: 9px;
    height: 12px;
    z-index: 1000000000;
  }

  .erwei_code {
    width: 91px;
    height: 34px;
    float: right;
    cursor: pointer;
  }

  .btn {
    width: 113px;
    height: 34px;
    line-height: 34px;
    border: none;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }

  .btn-info {
    background: #3cadcf;
    float: left;
  }

  .btn-info:hover {
    background: #1f8fb0;
  }

  .btn-success {
    background: #5cb85c;
    float: right;
  }

  .btn-success:hover {
    background: #449d44;
  }	
</style>


