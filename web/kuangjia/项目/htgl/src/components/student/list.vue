<template>
	<div class="box">
		<table class="tableList_table">
			<thead>
				<tr>
					<th width="10%">用户</th>
					<th width="35%">邮箱</th>
					<th width="20%">手机</th>
					<th width="15%">注册日期</th>
					<th width="10%">状态</th>
					<th width="20%">操作</th>
				</tr>
			</thead>
			<tbody>
				<!--<tr>
					<td>admin</td>
					<td>913123564@qq.com</td>
					<td>12312313222</td>
					<td>1975/08/21</td>
					<td>解冻</td>
					<td>
						<button>冻结</button>
					</td>
				</tr>-->
				<tr v-for='(data,index) in listData' :key="(data,index)">
					<td>{{data.userName}}</td>
					<td>{{data.email}}</td>
					<td>{{data.phone}}</td>
					<td>{{data.createAt}}</td>
					<td >{{data.isstate===true?'解冻':'冻结'}}</td>
					<td >
						<button @click="isstate(data)">{{data.isstate===true?'冻结':'解冻'}}</button><!-- @click="isState(data)" -->
					</td>
				</tr>
			</tbody>
	<tfoot >
      <tr>  <!-- 绑定行数 -->
        <td colspan="6"  class="paging_class">
          <div >
            <ul class="pageTheLi">
              <li @click="first()">
                <a>
                  <img src="../../assets/first.png">
                </a>
              </li>
              <li @click="pre()">
                <a>
                 <img src="../../assets/prev.png">
               </a>
             </li>
             <li style="border:none;" >
             1
              <!--1-->
            </li>
            <li @click="next()">
              <a>
               <img src="../../assets/next.png">
             </a>
           </li>
           <li @click="last()">
            <a>
             <img src="../../assets/last.png">
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
	import store from '@/vuex/studentstore'
	export default {
		store,
    computed:{
      listData:function(){
        return this.$store.state.studentarr//获取传送过来的数据创建账号
      }
    },
    mounted:function(){
      this.$store.state.getstudent()//调用方法，使后台信息加载到表格里
    },
    methods:{
        next:function(){
          this.$store.commit('nextpage')
          this.$store.state.getstudent();//每次添加重新执行查询函数
        },
        pre:function(){
          this.$store.commit('pevpage')
          this.$store.state.getstudent();
        },
        first:function(){
          this.$store.commit('firstpage')
          this.$store.state.getstudent();
        },
        last:function(){
          this.$store.commit('lastpage')
          this.$store.state.getstudent();
        },
        isstate:function(v){
          this.$axios({
            url:'/VueHandler/AdminHandler?action=lockuser',
            method:'get',
            params:{
              tokenId:v.tokenId
            }
          }).then(function(res){
            if(res.data.success){
              v.isstate=!v.isstate
            }
          }).catch(function(err){
              console.log(err)
          })
        }
    }
	}
</script>

<style>
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