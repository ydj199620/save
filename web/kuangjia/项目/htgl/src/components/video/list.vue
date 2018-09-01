<template>
	
	<div class="box">
		<table class="tableList_table">
			<thead>
				<tr>
					<th width="15%">名称</th>
					<th width="35%">绑定课程</th>
					<th width="20%">时长</th>
					<th width="15%">上传日期</th>
					<th width="15%">操作</th>
				</tr>
			</thead>
			<tbody>
			<!--<tr>
					<td>admin</td>
					<td>913123564@qq.com</td>
					<td>12312313222</td>
					<td>1975/08/21</td>
					<td>
						<button>编辑</button>
						<button>删除</button>
					</td>
		    </tr>-->
				<tr v-for='(data,index) in listData'>
					<td>{{data.Vname}}</td>
					<td>{{data.Vstate}}</td>
					<td>{{data.Vtime}}</td>
					<td>{{data.createAt}}</td>
					<td >
					    <button @click='show(data)'>编辑</button>
						<button v-if='data.Vstate.length==0' @click='deleteV(data)'>删除</button>	
					</td>
				</tr>
			</tbody>
			<tfoot >
			      <tr>  <!-- 绑定行数 -->
			        <td colspan="6"  class="paging_class">
			          <div >
			            <ul class="pageTheLi">
			              <li>
			                <a  @click='onFirstClick()'>
			                  <img src="../../assets/first.png">
			                </a>
			              </li>
			              <li>
			                <a  @click='onPriveClick()'>
			                 <img src="../../assets/prev.png">
			               </a>
			             </li>
			             <li style="border:none;" >
			              {{counts.value}}
			            
			            </li>
			            <li>
			              <a  @click='onNextClick()'>
			               <img src="../../assets/next.png">
			             </a>
			           </li>
			           <li>
			            <a  @click='onLastClick()'>
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
import videoData from '../../vuex/videoStore'
	export default {
		data(){
			return {
				counts:videoData.state.tableList.count
			}
		},
		props:['listData'],
		methods:{
			show(data){
				videoData.commit('setAddBtnFlag','block')
				videoData.commit('setInfor',data)
			},
			deleteV(data){
				var _this=this;
				this.$axios({
					url:'/VueHandler/VideoHandler?action=delete',
					method:'GET',
					params:{
						ID:data.ID
					}
				}).then(function(res){
					console.log(res);
					if(res.data.success){
						 videoData.state.tableList.btnList.btn_click();
					}else{
						alert('删除视频失败');
					}
				})
			},
		onFirstClick(){
			console.log(this.listData)
			alert(1);
				videoData.commit('subFirstClick');
				videoData.state.tableList.getListData();
		},
		onPriveClick(){
				videoData.commit('subPreveClick');
				videoData.state.tableList.getListData();
		},
		onNextClick(){
				videoData.commit('subNextClick');
				videoData.state.tableList.getListData();
		},
		onLastClick(){
				videoData.commit('subLastClick');
				videoData.state.tableList.getListData();	
		}
		},
		computed:{
		},
		mounted:function(){
          
		}
		
	}
</script>

<style scoped="">
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