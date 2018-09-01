<template>
	<div :style="alertStyle">     <!-- 遮罩层 -->
		<div :style="alertAll">      <!--放置修改密码弹窗的 容器-->
			<div class="alert-head">
				&nbsp;<span class="head-title">修改密码</span>
				<img src="../assets/images/x.png" alt="" @click="close()"/>
			</div>
			<ul class="alert-body">
				<li>	
					<span>当前密码:</span>
					<input type="text" v-model='password.old_pw'/>	
				</li>
				<li>
					<span>新密码:</span>
					<input type="text" v-model='password.new_pw'/>
				</li>
				<li>
					<span>确定密码:</span>
					<input type="text" v-model='password.enter_pw'/>
				</li>
		
			</ul>
		    <div>
		    	<button class="btn btn-success" @click="ready()">确定</button>
		    	<button class="btn btn-info" @click="close()">取消</button>
		    </div>
		</div>	
	</div>
</template>

<script>
	export default {
		data(){
			return{
			  password:{
			  	old_pw:'', //原始密码
			  	new_pw:'', //新密码
			  	enter_pw:'' //确认密码
			  },
        alertStyle:{   //遮罩层
          'width':window.innerWidth+'px',
          'height':window.innerHeight+'px',
          'position':'absolute',
          'top':0,
          'left':0,
          'background':"white",
          'opacity':0.9,
          'z-index':123
        },
        alertAll:{
          'width':"410px",
          "height":"200px",
          "position":'relative',
          "top":window.innerHeight/2-200/2+'px',
          "left":window.innerWidth/2-410/2 +'px',
          "border":"5px solid #4F66bb",
          "background":"#fff"
        }
			}
		},
		methods:{
			close:function(){
        this.$emit('kk')
      },
      ready:function(){
        var that =this;
        if(this.password.old_pw != ''&& this.password.new_pw != '' && this.password.enter_pw != ''){
          if(this.password.new_pw == this.password.enter_pw){
            this.$axios({
              url:'/VueHandler/AdminHandler?action=updatepass',
              method:'post',
              data:{
                userPwd:this.password.old_pw,
                newPwd:this.password.new_pw
              }
            }).then(function(res){
              if(res.data.success){
                alert('修改成功')
                that.$emit('kk')
              }else{
                alert('修改失败')
              }
            }).catch(function(err){
              alert(err)
            })
          }else{
            alert('两次密码不一样')
          }
        }else{
          alert('请输入完整信息')
        }
      }
		}
	}
</script>

<style scoped>
  .alert-head {
    height: 30px;
    background: #4F66B3;
    margin-bottom: 10px

  }

  .head-title {
    color: white;
    line-height: 30px;
    font-size: 14px;
    display: inline-block;
    /*float: left*/
  }

  .alert-head img {
    display: inline-block;
    float: right;
    margin-top: 5px;
    margin-right: 5px;
    cursor: pointer;
  }

  ul.alert-body li {
    display: block;
    margin-bottom: 10px
  }

  ul.alert-body li span {
    display: inline-block;
    width: 80px;
    text-align: right;
  }

  ul.alert-body li input {
    width: 200px;
  }

  .btn {
    width: 80px;
    height: 30px;
    line-height: 20px;
    border: none;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }

  .btn-info {
    background: #3cadcf;
    float: right;
    margin-right: 60px;

  }

  .btn-info:hover {
    background: #1f8fb0;
  }

  .btn-success {
    background: #5cb85c;
    float: left;
    margin-left: 60px;
  }

  .btn-success:hover {
    background: #449d44;
  }	
	
</style>

