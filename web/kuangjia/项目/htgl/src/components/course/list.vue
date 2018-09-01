<template>
	<div class="box">
	    <table class="tableList_table">
	    	<thead>
	    		<tr>
					<th width="10%">课程名称</th>
					<th width="15%">课程代号</th>
					<th width="15%">在学人数</th>
					<th width="15%">所属分类</th>
					<th width="15%">编辑日期</th>
					<th width="10%">状态</th>
					<th width="25%">操作</th>
	    		</tr>
	    	</thead>
	    	<tbody>
				<!--<tr>
					<td>HTML</td>
					<td>12580</td>
					<td>11</td>
					<td>H5跨平台</td>
					<td>1975/08/21</td>
					<td>已下架</td>
					<td>
						<button>上架</button>
						<button>编辑</button>
						<button>删除</button>
						<button>置顶</button>
					</td>
				</tr>-->
				<tr v-for='(data,index) in listData'>
					<td>{{data.Cname}}</td>
					<td>{{data.Cnumber}}</td>
					<td>0</td>
					<td>{{data.CategoryOne}}/{{data.CategoryTwo}}/{{data.CategoryThree}}</td>
					<td>{{data.createAt}}</td>
					<td>{{data.isState==1?'草稿':data.isState==2?'上架':'下架'}}</td>
		            <td>							
		            	<button @click="isState(data)" v-text="data.isState==1?'上架':data.isState==2?'下架':'草稿'"></button>
						<button @click="updateCourse(data)">编辑</button>
						<button @click='deleteCourse(data)'>删除</button>
						<button @click='stickData(data)'  v-text="data.isTop==true?'置顶':'已置顶'"></button>
		            </td>
				</tr>
	    	</tbody>
	    	<tfoot>
      <tr>  <!-- 绑定行数 -->
        <td colspan="7"  class="paging_class">
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
              <!--1-->
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
    import courseData from '../../vuex/course'
	export default {
		data(){
			return {
				counts:this.listStore.count
			}
		},
		props:['listStore'],
		methods:{	   
	   isState(data){
			this.$axios({
				method: 'POST',
				url: '/VueHandler/CourseHandler?action=state',
				data:{
					ID: data.ID
				}
			}).then(function(res) {
                  if(data.isState==1){
                  	data.isState=2;
                  }else if(data.isState==2){
                  	data.isState=3;
                  }else{
                  	data.isState=1;
                  }

			})
	    },
        stickData:function(data){//处理是否置顶
            this.$axios({
                    method: 'post',
                    url:"/VueHandler/CourseHandler?action=top",
                    data:{
                        ID:data.ID
                    }
                }).then(function (response) {
                    if(response.data.success){
                        //重新请求数据
                       courseData.state.listDate.getListData();
                    }


                });
            },
        deleteCourse(data){
            this.$axios({
                    method: 'post',
                    url:"/VueHandler/CourseHandler?action=delete",
                    data:{
                        _id:data._id,
                        ID:data.ID
                    }
                }).then(function (response) {
                    if(response.data.success){
                        //重新请求数据
                       courseData.state.listDate.getListData();
                    }
                });
        },
            updateCourse(data){
                window.location = encodeURI(encodeURI("/courseEdit?ID="+data.ID+"&_id="+data._id));

            },
		onFirstClick(){
			
				courseData.commit('subFirstClick');
				courseData.state.listDate.getListData();
		},
		onPriveClick(){
				courseData.commit('subPreveClick');
				courseData.state.listDate.getListData();
		},
		onNextClick(){
				courseData.commit('subNextClick');
				courseData.state.listDate.getListData();
		},
		onLastClick(){
				courseData.commit('subLastClick');
				courseData.state.listDate.getListData();	
		}
		},
		computed:{
			listData() {
				return this.listStore.list
			},
//			isStateNow(){
//				if({{data.isState}})
//			}
		},
		mounted:function(){
			
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