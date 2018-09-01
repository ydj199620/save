<template>
	<div :style='alertStyle'>
		<div :style='alertAll'>
			<!-- 容器 -->
			<div class="alert-head">
				<span class="head-title">添加管理员</span>
				<img  src="../../assets/images/x.png" alt="" @click="byvalue()"/>
			</div>
			<ul class="alert-body">
				<li>
					<span>用户名：</span>
					<input type="text" ref="username" v-model="add.userName"/>
				</li>
				<li>
					<span>姓名：</span>
					<input type="text" ref="truename" v-model="add.turename"/>
				</li>
				<li>
					<span>手机号：</span>
					<input type="text" ref="phone" v-model="add.phone"/>
				</li>
				<li>
					<span>权限选择：</span>
					<select ref="power" v-model="add.power">
						<option>系统管理员</option>
						<option>课程管理员</option>
					</select>
				</li>
			</ul>
			<div style="padding-top:15px;">
				<button class="btn btn-success" @click="addready()">确定</button>
				<button class="btn btn-info" @click="byvalue()">取消</button>
			</div>
		</div>
	</div>
</template>

<script>
 import store from '@/vuex/store'
	export default {
    store,
		data(){
			return{
				alertStyle:{
					'width':window.innerWidth+'px',
					'height':window.innerHeight+'px',
					'position':'absolute', 
					'top':0,
					'left':0,
					'background':'rgba(255,255,255,0.8)'
				},
				alertAll:{
					'position':'relative',
					'width':'410px',
					'height':'250px',
					'top':window.innerHeight/2 -250/2 +'px',
					'left':window.innerWidth/2 -410/2 +'px',
					'background':'#fff',
					'border':'5px solid red'
        },
        addBtnFlag:{
          'display':'none'
        }
			}
		},
		methods:{
      byvalue:function(){
        this.$emit('mm',this.addBtnFlag.display)
        this.$store.commit('clear')
      },
      addready:function(){
        var that =this;
        var url1 ='';
        var data1={
            userName:this.add.userName,
            turename:this.add.turename,
            phone:this.add.phone,
            power:this.add.power
        }
        if(this.add.tokenId){
            data1.tokenId=this.add.tokenId;
            url1 = '/VueHandler/AdminHandler?action=update'
        }else{
            data1.password='123456';
            url1 = '/VueHandler/AdminLoginAndRegHandler?action=add'
        }
        if(this.$refs.username.value != ''&& this.$refs.truename.value != '' && this.$refs.phone.value != ''){
          this.$axios({
          url:url1,
          method:'post',
          data:data1
          }).then(function(res){
              if(res.data.success){
                alert('成功')
                that.$emit('mm',that.addBtnFlag.display)
                that.$store.commit('clear')
                that.$store.state.search1.getsearch();
                console.log(that.$store.state.userinfo)
              }else{
                alert('失败')
              }
          }).catch(function(err){
            console.log(err)
          })
        }else{
          alert('不能有空')
        }
      }
    },
    computed:{
      add:function(){
        return this.$store.state.userinfo
      }
    }
	}
</script>

<style scoped="">
  .alert-head {
    height: 30px;
    background: #4F66B3;
    margin-bottom: 10px;
  }

  .head-title {
    color: white;
    line-height: 30px;
    font-size: 14px;
    display: inline-block;
    float: left;
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

  ul.alert-body li select {
    width: 204px;
    height: 24px
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



