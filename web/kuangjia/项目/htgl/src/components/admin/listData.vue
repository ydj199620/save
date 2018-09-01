<template>
	<div class="box">
		<table class="tableList_table">
			<thead>
				<tr>
					<th>姓名</th>
					<th>真是姓名</th>
					<th>后台权限</th>
					<th>手机</th>
					<th>编辑日期</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(v,i) in search2" :key="(v,i)">
					<td>{{v.userName}}</td>
					<td>{{v.turename}}</td>
					<td>{{v.power}}</td>
					<td>{{v.phone}}</td>
					<td>{{v.upDateAt}}</td>
					<td>
						<button @click="updata1(v)">编辑</button>
						<button @click="del(v)">删除</button>
					</td>
				</tr>
			</tbody>
			<tfoot>
				<!--分页器-->
				<tr>
					<td colspan="6" style="border:1px solid red">
						
						<div>
							<ul class="pageTheLi">
								<li @click="first">
									<a>
										<img src="../../assets/first.png" />
									</a>
								</li>
								<li @click="pre">
									<a>
										<img src="../../assets/prev.png" />
									</a>
								</li>
								<li>
									{{page}}
								</li>
								<li @click="next">
									<a>
										<img src="../../assets/next.png" />
									</a>
								</li>
								<li @click="last">
									<a>
										<img src="../../assets/last.png" />
									</a>
								</li>
							</ul>
						</div>
					</td>
				</tr>
			</tfoot>
		</table>
	</div>
</template>

<script>
    import store from '@/vuex/store'
    export default {
      store,
      data(){
        return{
          addBtnFlag1:{
            'display':'block'
          }
        }
      },
      computed:{
        search2:function(){
          return this.$store.state.search1.arr
        },
        page:function(){//用来保存shore里的页面数
          return this.$store.state.page
        }
      },
      mounted:function(){
        this.$store.state.search1.getsearch();
      },
      methods:{
        updata1:function(v){
          this.$emit('mm','block');
          this.$store.commit('clear',v)
        },
        next:function(){
          this.$store.commit('nextpage')
          this.$store.state.search1.getsearch();//每次添加重新执行查询函数
        },
        pre:function(){
          this.$store.commit('pevpage')
          this.$store.state.search1.getsearch();
        },
        first:function(){
          this.$store.commit('firstpage')
          this.$store.state.search1.getsearch();
        },
        last:function(){
          this.$store.commit('lastpage')
          this.$store.state.search1.getsearch();
        },
        del:function(v){
          var that =this;
          this.$axios({
            url:'/VueHandler/AdminHandler?action=delete',
            method:'get',
            params:{
              tokenId:v.ID
            }
          }).then(function(res){
            if(res.data.success){
              alert('删除成功')
              that.$store.state.search1.getsearch();
            }else{
              alert('删除失败')
            }
          }).catch(function(err){
            console.log(err)
          })
        }
      }
    }
</script>

<style scoped>
  ul li{
    list-style: none;
  }
  *{
    margin: 0;
    padding: 0
  }
  .tableList_table {
    width:100%;
    /*height:400px;*/
    background-color:#FFFFFF;
    border-collapse:collapse;
  }
  .tableList_table thead tr{
    color:#666666;
    background-color:#EFEFEF;
    border:1px solid #C0C0C0;
    height:34px;
    font-size:13px;
  }
  .tableList_table tbody tr{
    height:34px;
    font-size:14px;
  }
  .tableList_table tbody tr td{
    padding-left: 10px;
    height:34px;
    font-size:14px;
  }
  .tableList_table thead tr{
    border-right:none;
  }
  .tableList_table thead tr th{
    padding-left:10px;
    border-right:1px solid #C0C0C0;
  }
  .tableList_tr_black {
    background-color:#FAFAFA;
  }
  .tableList_table tbody tr:hover { /*鼠标移入时的背景颜色*/
    background-color:#ECF4FF;
  }
  .tableList_table tbody button {
    margin:0;
    padding:0;
    list-style-type:none;
    color:blue;
    background:none;
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    width:50px;
    height:30px;
    line-height:30px;
  }
  .tableList_table tbody button:hover{
    cursor:pointer;
  }
  #tableList_table_tbody_tr_click {
    border:1px solid #C0C0C0;
  }
  .tableList_table tfoot {
    width:100%;
  }
  .tableList_table tfoot tr {
    width:100%;
    height:30px;
    border:1px solid #C0C0C0;
  }
  .tableList_table tfoot tr td{
    height:30px;
  }
  .tableList_table tfoot tr td li{
    border:none;
  }
  .tableList_table tfoot tr td li img{
    vertical-align: bottom;
    margin-bottom:3px;
  }
  .tableList_table tfoot tr td li img:hover{
    cursor:pointer;
  }
  .paging_class {
    text-align:left;
  }
  .box {
    padding: 0;
  }
  .pageTheLi li{
    float: left;
    margin-left: 30px;
  }
</style>