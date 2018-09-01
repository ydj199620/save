<template>
	<div>
		<div class="adminListContent">
        <span style="color:#777777;font-size:10px">- - - - 课 程 列 表 - - - -</span>	
        <div class="functional_block">
        	<div class="functional_block_top">
        		<div class="functional_block_left"></div>
        		<div class="functional_block_right">课程信息</div>
        	</div>
        	<div class="fc_section_wrap">
        		<div class="courseListInput_left">
        			<ul>
        				<li >
    					<span style="display:inline-block;width:380px;text-align:left">
    						<i style='color:red'>*</i><span style='font-size:8px'>课程名称:</span>
    						<input class="inputNews" type="text"  v-model='Cname'/>
    						<span>
    							<i style="font-size:8px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;60字以内</i>
    						</span>
    					</span>
        				</li>
        				<li >
    					<span style="display:inline-block;width:740px;text-align:left">
    						<i style='color:red'>*</i><span style='font-size:8px'>课程描述:</span>
    						<input type="text" class="inputNews" v-model='Cdescribe'/>
    						<span>
    							<i style="font-size:8px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100字以内</i>
    						</span>
    					</span>
        				</li>	
        				<li >
    					<span style="display:inline-block;width:740px;text-align:left">
    						<i style='color:red'>*</i><span style='font-size:8px'>课程价格:</span>
    						<input type="text" class="inputNews" v-model='Cprice'/>
    						<span>
    							<i style="font-size:8px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;课程价格以元为单位，免费课程设置为0</i>
    						</span>
    					</span>
        				</li>
        				<li>
        					<span style="display:inline-block;width:80px;text-align:left"><span style='font-size:8px'>&nbsp;&nbsp;专业选择：</span></span>
        				     <select class="inputSelect" v-model='CategoryOne' @change="checkOne(CategoryOne)">
        				     	<option  v-for="i in firstCategory" :key="i">{{i.title}}</option>
        				     </select>
         				     <select class="inputSelect" v-model='CategoryTwo'  @change="checkTwo(CategoryTwo)">
								 <option  v-for="i in secondCategory" :key="i">{{i.title}}</option>
        				     </select>
         				     <select class="inputSelect" v-model='CategoryThree'>
        				     	<option v-for="i in thirdCategory" :key="i">{{i.title}}</option>
        				     </select>
        				</li>
        				<li>
        					<button class="buttonAll" @click="saveInfor()" v-if="saveBtn">保存</button>
							<p v-else style="width: 30px;height: 40px"></p>
        				</li>
        			</ul>
        		</div>
        		<div class="courseListInput_right">
        			 <span style='font-size:8px;'>课程封面：</span>
        			  <img v-bind:src = "item.imags.value"  class = "courseListInput_right_img"/>
                    <a style='font-size:8px;color:blue;cursor:pointer' v-on:click = "coverImgDelete()" class="courseListInput_right_a_left">清除</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a style='font-size:8px;color:blue;cursor:pointer' v-on:click = "upload()" class="courseListInput_right_a_right">上传</a>			  
        		</div>
        	</div>
        </div>
		</div>
		<!-- 遮层 -->
		 <div v-show="courseListAddBtn" ref="alertC" style="width:100%;height:950px;position:absolute;top:300px;left:0;background:#fff;z-index:300;opacity:0.6"></div>
		<!-- 中间模块 -->   
        <div class="course_middle_wrap" >
			<div class="functional_block_top">
				<div class="functional_block_left"></div>
				<div class="functional_block_right">课程内容</div>
			</div>
			<div class=" course_middle" >
				<div class="courseListTablelist_left">
					<br />
					<button @click="addDir" class="buttonAll">添加目录</button>
					<p style="height: 1px;"></p>
					<div class="courseListTablelist_left_div">
   					   <div style="width: 100%;height: 400px;border:1px solid red;">
					   	<table class="tableList_table" >
							<thead>
							<tr>
								<th width="20%">目录</th>
								<th width="45%">课件数</th>
								<th width="35%">操作</th>
							</tr>
							</thead>
							<tbody>
                                <tr style="height: 20px">
									<td width="20%">1</td>
									<td width="45%">2</td>
									<td width="35%"><button>确定</button>
									</td>
								</tr>
							<tr ref="selectOne" v-for="(i,index) in dirInfor" @click="selectVideo(i,index,dirInfor)" :key="(i,index)">

								<td width="20%">{{i.CDName}}</td>
								<td width="45%">{{i.CourseNumber}}</td>
								<td width="35%">

									<button @click="deleteDir(i)">删除</button>
								</td>
							</tr>
					   		</tbody>
					   	</table>
					   </div>
					</div>

				</div>
				
			</div>
			<div class=" course_middle" >
				<div class="courseListTablelist_left">
					<br />
					<button class="buttonAll" @click="alertVideo">添加视频</button>
					<p style="height: 1px;"></p>
					<div class="courseListTablelist_left_div">
					   <div style="width: 100%;height: 400px;border:1px solid red;">
					   	<table class="tableList_table">
							<thead>
							<tr style="padding: 0px;margin: 0px">
								<th width="20%">视频名称</th>
								<th width="45%">时长</th>
								<th width="35%">操作</th>
							</tr>
							</thead>
							<tbody>
                                <tr v-for="i in videoSelected" :key="i">
									<td>{{i.Vname}}</td>
									<td>{{i.Vtime}}</td>
									<td>
										<button @click="deleteVideo(i)">删除</button>
									</td>
								</tr>
					   		</tbody>
					   	</table>
					   </div>
					</div>

				</div>
				
			</div>
		</div>
		<br>
		<!-- 富文本框 -->
	    <div class="course_detail">
			<div class="functional_block_top">
				<div class="functional_block_left"></div>
				<div class="functional_block_right">课程详情</div>
			</div>
			<div class="functional_block_bottom">
			<uediter   :contentTxt="ueditorContentTxt"></uediter>
				<p style="height:10px"></p>
			<button class="buttonAll" @click="saveAll()">确定</button>
			<h1></h1>
			</div>
	    </div>
	     <!-- 图片上传 -->
	    <div v-show='flagUp' :style="flagUpAlert" >
	    	<div class="alert-head">
				<span class="head-title">图片上传</span>
				<img  @click='close' src="../../assets/images/x.png" alt="" />		
	    	</div>
         <template v-if = "uploadFlag">
             <input  height="20px"  style="margin-top: 30px;margin-left: 50px;width: 300px;">
             <a  @click='addPic($event,item)' style="color:white;font-size:2px !important;text-decoration: none;width:50px;height:21px;line-height:22px;background-color:#4F66B3;float:right;margin-top:30px;margin-right: 80px;">选择视频</a>
         </template>
         <template v-else>
         	<img v-bind:src = "item.imags.value" width="300px" height="100px" style="vertical-align:bottom;margin-bottom:5px;margin-left: 30px"/>
			 <a  v-on:click="removeImage($event,item)"   v-text="item.aTextC" style="color:white;font-size:2px !important;text-decoration: none;text-aligh:center;width:50px;height:21px;line-height:22px;background-color:#4F66B3;position:absolute;top:85px;right:50px;margin-top:8px;border-radius:3px"></a>
			 <a  v-on:click="uploadImage($event,item)"   v-text="item.aTextU" style="color:white;font-size:2px !important;text-decoration: none;text-aligh:center;width:50px;height:21px;line-height:22px;background-color:#4F66B3;margin-top:40px;position:absolute;top:15px;right:50px;border-radius:3px"></a>
         </template>
          <input type="file" accept="image/gif,image/jpeg,image/x-png"  v-bind:id="item.uuids"   @change="onFileChange($event,item)"  multiple style="display:none" >
	    </div>
		<!--目录上传-->
		<div v-show="directFlag" :style="flagUpAlert">
			<div class="alert-head">
				<span class="head-title">添加目录</span>
				<img  @click="close()" src="../../assets/images/x.png" alt="" />
			</div>
			<span style="display: inline-block;margin-left: 30px" >目录名称:</span><input v-model="dirName" type="text" height="20px"  style="margin-top: 30px;margin-left: 10px;width: 300px;">

			<br>
			<br>
			<button style="margin-left: 170px" @click="addDirAlert">确定</button>
			<button style="margin-left: 50px" @click="close">取消</button>
		</div>
		<!--视频弹窗-->
		<div v-show="videoFlag" :style="flagVideo" >
			<div class="alert-head" style="margin: 0px">
				<span class="head-title">添加视频</span>
				<img  @click="close()" src="../../assets/images/x.png" alt="" />
			</div>
			<div class="adminListContent" style="width: 800px;height: 70px">
				<span style="color:#2880E4">首页/</span> <span>用户管理/</span> <span>视频管理</span>
				<div class="video_search_wrap" >
					<ul>
						<li class="admin_top_input">
							<input type="text" v-model="videoSearch1">
						</li>
						<li>
							<button class="buttonAll" @click="alertVideoSearch" style="background: #5cb85c;">查询</button>
						</li>
					</ul>
				</div>
				<div class="video_block">
					<div class="functional_block_top">
						<div class="functional_block_left"></div>
						<div class="functional_block_right">视频列表</div>
					</div>
					<div class="functional_block_bottom">
						<table class="tableList_table">
							<thead>
							<tr style="padding: 0px;margin: 0px">
								<th width="20%">视频名称</th>
								<th width="25%">绑定课程</th>
								<th width="15%">视频时长</th>
								<th width="25%">上传日期</th>
								<th width="15%">操作</th>
							</tr>
							</thead>
							<tbody>
                                <tr>
									<td>1</td>
									<td>1</td>
									<td>1</td>
									<td>1</td>
									<td>
										<button>删除</button>
									</td>
								</tr>
							<tr v-for="i in videoItem" :key="i">
								<td>{{i.Vname}}</td>
								<td>{{i.Vstate}}</td>
								<td>{{i.Vtime}}</td>
								<td>{{i.updateAt}}</td>
								<td><button @click="addVideo(i)">添加</button></td>
							</tr>
							<tr>&nbsp;</tr>
							<tr>&nbsp;</tr>
							<tr>&nbsp;</tr>
							</tbody>
							<tfoot>
							<tr>  <!-- 绑定行数 -->
								<td colspan="5"  class="paging_class">
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
				</div>
			</div>
		</div>
	</div> 
</template>

<script>
	import courseEditListStore from '../../vuex/courseEdit.js';
//	import UM from './umeditor.min'
//	import table from './table.vue';
	import uediter from './uediter'
	export default {
		components:{uediter},
		data(){
			return{
				Cname:'',
				Cdescribe:'',
				Cprice:'',
				CategoryOne:'',
				CategoryTwo:'',
				CategoryThree:'',
				Cpic:'',
				//						三级联动分类
				categoryAll:[],
				firstCategory:[],
				secondCategory:[],
				thirdCategory:[],
				saveBtn:true,         //保存按钮
				courseListAddBtn:true, //遮层
				flagUp:false,          //上传按钮
				directFlag:false,      //目录
				uploadFlag:true,        //上传图片
				videoFlag:false,         //视频弹窗
				uploadFlag_imgurl:courseEditListStore.state.uploadUrl,//上传返回的图片路径
				flagUpAlert:{
					'position':'absolute',
					'width':'500px',
					'height':'150px',
					'top':window.innerHeight/2 -600/2 +'px',
					'left':window.innerWidth/2 -700/2 +'px',
					'background':'#fff',
					'border':'2px solid red',
					'z-index':'400'
				},
				flagVideo:{
					'position':'absolute',
//					'width':'800px',
					'height':'600px',
					'top':window.innerHeight/2 -600/2 +'px',
					'left':window.innerWidth/2 -700/2 +'px',
					'background':'#fff',
					'border':'2px solid red',
					'z-index':'400'
				},
				dirName:"", //目录名字
				dirAll:[],  //所有目录信息
				CDid:'',  //目录对应的课程的ID
         //		编辑的目录信息
				dirInfor:[],
				ueditorContentTxt:courseEditListStore.state.courseDtail.value,//课程详情信息 courseEditListStore.state.courseDtail.value
				videoSearch1:'',                                         //搜索框
				counts:courseEditListStore.state.videoDate.count,
			    dirNow:''  , //当前选中的目录的信息
				videoListNow:[],   //视频弹窗 视频列表
				videoSelected:[],
			}
		},
		methods:{
			coverImgDelete(){
				alert('删除图片')
//				 /UpLoadPicHandler?action=delete
				var that=this;
				this.$axios({
					url:'/VueHandler/UpLoadPicHandler?action=delete',
					method:'GET',
					params:{
						pathName: this.uploadFlag_imgurl
					},

				}).then(function (res) {
					that.item.imags.value="";
				});
			},
			upload(){
//				this.courseListAddBtn=true;
				this.flagUp=true;
				this.uploadFlag=true;
				this.item.imags.value="";
			},
			close(){
				this.item.imags.value="";
				this.flagUp=false;
				this.directFlag=false;
				this.videoFlag=false;
			},
			addPic(e){
				e.preventDefault();
				document.getElementById(courseEditListStore.state.PicList.list[0].uuids).click();
				return false;
			},
			onFileChange(e,item){
				var files = e.target.files || e.dataTransfer.files;
				if (!files.length||files[0].size>1024*1024*1024)return;//如果未选择任何视频或视频大小超过1G就终断操作
				//开始制作缩略图
				var url = URL.createObjectURL(files[0]);
				//改变video标签的src使其重新加载数据
				this.item.imags.value=url;
				this.createImage(files,item);
			},
			createImage(files,item) {
				if(typeof FileReader==='undefined'){
					alert('您的浏览器不支持图片视频上传，请升级您的浏览器');
					return false;
				};
				//控制选择框的显示与否
				this.uploadFlag=false;
			},
			removeImage: function(e,item) {
				this.item.imags.value="";
				this.uploadFlag=true;
				//item.defaultObj.defaultStr.value="";
			},
			uploadImage(e,item){
				var _this=this;
				var form = new FormData();
				if(document.getElementById(item.uuids).files[0]){
					//参数为上传控件的id和该控件的数据
					form.append(item.uuids,document.getElementById(item.uuids).files[0]);
				};
				this.$axios.post('/VueHandler/UpLoadPicHandler',form,{
					method:'post',
					headers:{'Content-Type':'multipart/form-data'}
				}).then(function(res){
					_this.flagUp=false;
//					item.defaultStr.value=res.data.cacheName;
					_this.uploadFlag_imgurl.value=res.data.cacheName;
				})
			},
			saveOver(){
				this.$refs.alertC.style.top=0;
				this.$refs.alertC.style.height='300px';
			},
//			保存
			saveInfor(){
				var that=this;
				this.$axios({
					url:'/VueHandler/CourseHandler?action=add',
					method:'POST',
					data:{
						Cname:this.Cname,
						Cdescribe:this.Cdescribe,
						Cprice:this.Cprice,
						CategoryOne:this.CategoryOne,
						CategoryTwo:this.CategoryTwo,
						CategoryThree:this.CategoryThree,
						Cpic:this.uploadFlag_imgurl,
						Cdetails:courseEditListStore.state.courseDtail.value
					},

				}).then(function (res) {
					alert('课程添加成功');
					console.log(1111111111111);
					console.log(res);
					if(res.data.length!=0){
						that.CDid=res.data._id;
						that.$refs.alertC.style.top=0;
						that.$refs.alertC.style.height='300px';
						console.log(55555555555555)
						console.log(that.CDid)
					}

				});

			},
			checkOne(value){
				this.secondCategory=[];
                 for(var x in this.firstCategory){
                      if(this.firstCategory[x].title==value){
						  for(var k in this.categoryAll){
							if(this.categoryAll[k].fatherId==this.firstCategory[x].sysId){
								this.secondCategory.push(this.categoryAll[k])
							}
						  }
					  }
				 }
			},
			checkTwo(value){
				console.log(value);
				this.thirdCategory=[];
				for(var x in this.secondCategory){
					if(this.secondCategory[x].title==value){
						for(var k in this.categoryAll){
							if(this.categoryAll[k].fatherId==this.secondCategory[x].sysId){
								this.thirdCategory.push(this.categoryAll[k])
							}
						}
					}
				}
			},
//			目录添加
			getTableDirectoryList(){  //获取当前目录信息
                var that=this;
				this.$axios({
					method:'get',
					url:'/VueHandler/VideoHandler?action=finddir'+'&CDid='+this.CDid,
				}).then(function(res){
					that.dirInfor=[];
					for(var i=0;i<res.data.data.list.length;i++){
						let obj={
							CDName:res.data.data.list[i].CDName,
							CDid:res.data.data.list[i].CDid,
							CourseNumber:res.data.data.list[i].CourseNumber,
							ID:res.data.data.list[i].ID,
							_id:res.data.data.list[i]._id,
								edit: true,
								clickClass: "",
								putaway: false,
								deleteButton: true,
								stick: false
						};
						that.dirInfor.push(obj);
					}
				})
			},
			addDir(){
				this.directFlag=true;

			},
			addDirAlert(){
				var that=this;
				this.$axios({
					method:'POST',
					url:'/VueHandler/CourseHandler?action=AddDirectory',
					data:{
						CDName:this.dirName,
						CDid:this.CDid,
						ID:''
					}
				}).then(function (res) {
					if(res.data.data.success){
						that.dirAll=res.data.data.list;
						console.log('我是目录')
						console.log(that.dirAll)
						that.dirName='';
						that.getTableDirectoryList();
					}
				});
				this.close()
			},
			deleteDir(value){
				var that=this;
				this.$axios({
					url:'/VueHandler/CourseHandler?action=deleteDirectory',
					method:'GET',
					params:{
						_id:value._id,
						CDid:value.CDid
					}
				}).then(function(res){
					console.log(value._id);
					console.log(value.CDid);
					console.log(res);
					that.getTableDirectoryList();
				})
			},
			selectVideo(value,index,all){
				this.dirNow='';
				console.log(this.$refs);
				this.$refs.selectOne[0].bgColor='red';
               for(var i =0;i<all.length;i++){
				   this.$refs.selectOne[i].bgColor='#ECF4FF';
			   };
				this.$refs.selectOne[index].bgColor='red';


				var that=this;
                  this.$axios({
					  url:'/VueHandler/VideoHandler?action=showdir',
					  method:'GET',
					  params:{
						  _id:value._id,
						  CDid:value.CDid
					  }
				  }).then(function(res){
					  console.log(res);
					  that.dirNow=value._id
					  that.videoSelected=res.data.data.list;

				  })
			},
			alertVideo(){
				this.videoFlag=true;
				courseEditListStore.state.videoDate.getListData();
			},
//			视频分页
			alertVideoSearch(){
				console.log(this.videoSearch);
				alert(1);
				courseEditListStore.state.videoSearch=this.videoSearch1
				courseEditListStore.state.videoDate.getListData();
			},
			onFirstClick(){
				console.log(this.listData)
				alert(1);
				courseEditListStore.commit('subFirstClick');
				courseEditListStore.state.videoDate.getListData();
			},
			onPriveClick(){
				courseEditListStore.commit('subPreveClick');
				courseEditListStore.state.videoDate.getListData();
			},
			onNextClick(){
				courseEditListStore.commit('subNextClick');
				courseEditListStore.state.videoDate.getListData();
			},
			onLastClick(){
				courseEditListStore.commit('subLastClick');
				courseEditListStore.state.videoDate.getListData();
			},
//			视频添加
			addVideo(i){
				var that=this;
				this.$axios({
					url:'/VueHandler/CourseHandler?action=addvideo',
					method:'GET',
					params:{
						_id:this.dirNow,    //目录 Id
						CDid:this.CDid,  //课程Id
						Vid:i._id    //视频Id

					}
				}).then(function(res){
					console.log(res);
                       if(res.data.success){
						   alert('视频绑定成功');
						   that.videoSelected=res.data.data.list;
					   }else {
						   alert('请重新添加')
					   }
				})
			},
			deleteVideo(i){
				var that=this;
				this.$axios({
					url:'/VueHandler/CourseHandler?action=delvideo',
					params:{
						_id:this.dirNow,
						CDid:this.CDid,
						Vid:i._id
					},
					method:'GET'
				}).then(function(res){
					if(res.data.success){
						var obj={
							_id:that.dirNow,
							CDid:that.CDid,
						}
						that.selectVideo(obj);
						alert('删除成功')
					}else{
						alert('删除失败')
					}
				})
			},
//			保存全部
			saveAll(){
				var that=this;
				this.$axios({
					url:'/VueHandler/CourseHandler?action=update',
					method:'POST',
					data:{
						_id:this.CDid,
						Cname:this.Cname,
						Cdescribe:this.Cdescribe,
						Cprice:this.Cprice,
						CategoryOne:this.CategoryOne,
						CategoryTwo:this.CategoryTwo,
						CategoryThree:this.CategoryThree,
						Cpic:this.uploadFlag_imgurl,
						Cdetails:courseEditListStore.state.courseDtail.value

					}
				}).then(function(res){
					console.log(that.Cname);
					console.log(res);
					window.location = "/#/course";

				})
			}
		},
		computed:{
			item(){
				return courseEditListStore.state.PicList.list[0];
			},
			videoItem(){
				return courseEditListStore.state.videoDate.list
			},
//			videoSearch1(){
//				return	'CSS'
//			},
		},
		mounted(){
//			三级联动
			var that=this;
			var _this=this;
			this.$axios({
				url:'/VueHandler/CourseHandler?action=getcategory',
				method:'GET'
			}).then(function (res) {

				that.categoryAll=res.data.data;
				for(var i in res.data.data){
					if(res.data.data[i].fatherId==0){
						that.firstCategory.push(res.data.data[i])
					}
				}
			});
//			 获取编辑的课程的信息
			function getUrlParam (name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if (r!= null) {
					return unescape(r[2]);
				}else{
					return null;
				}
			};
           if(getUrlParam('ID')){
			   this.saveBtn=false;
			   this.courseListAddBtn=false;
			this.$axios({
				url:'/VueHandler/CourseHandler?action=getcourse',
				method:'GET',
				params:{
                    ID:getUrlParam('ID'),
					_id:getUrlParam('_id')
				}
			}).then(function(res){
				console.log(res);
				console.log(getUrlParam('_id'));
//				课程信息
				console.log(res)
				console.log(res.data.data.courselist.Cdetails)
				        _this.Cname=res.data.data.courselist.Cname;
				        _this.Cpic=res.data.data.courselist.Cpic.value;
						_this.Cdescribe=res.data.data.courselist.Cdescribe;
				courseEditListStore.state.courseDtail.value=res.data.data.courselist.Cdetails;
				console.log(courseEditListStore.state.courseDtail.value);
				_this.Cprice=res.data.data.courselist.Cprice;
				        _this.uploadFlag_imgurl=res.data.data.courselist.Cpic.value;
				         _this.item.imags.value=res.data.data.courselist.Cpic.value;
						_this.CDid=getUrlParam('_id');
						_this.CategoryOne=res.data.data.courselist.CategoryOne;
						_this.CategoryTwo=res.data.data.courselist.CategoryTwo;
						_this.CategoryThree=res.data.data.courselist.CategoryThree;
						_this.checkOne(res.data.data.courselist.CategoryOne);
						_this.checkTwo(res.data.data.courselist.CategoryTwo);
//				目录信息
				_this.dirInfor=res.data.data.dirlist

			})
		   }


		}
	}
</script>

<style>
  	li {
  		text-decoration: none;
  	}

  	.inputNews{
  		width: 180px;
  		height: 20px;
  	}
  	.inputSelect{
  		width: 200px;
  		height: 30px	
  	}
    .courseListInput_left{
        position:relative;
        width:40%;
    }
     .courseListInput_right{
            position:absolute;
            width:55%;
            top:20px;
            right:60px;
            height:150px;
      }
      .courseListInput_right_img {
        display:block;
        width:190px;
        height:90px;
        border:1px solid #C0C0C0;
      }
      .courseListTablelist_left {
            position:relative;
            width:100%;

      }
      /*.courseListInput_left select {
      	width: 120px;
      }*/
      .buttonAll {
		width: 80px;
		height: 32px;
		margin: 0;
		padding: 0;
		border: none;
		cursor: pointer;
		color: #fff;
		background: #5cb85c;
		margin-right: 10px;
      }
      .courseListTablelist_left_div {
             border:1px solid #D6D6D6;
      }
       .courseListTablelist_right {
              position:absolute;
             width:50%;
              top:10px;
             right:10px;
        }
         .courseListTablelist_right_div {
                 border:1px solid #D6D6D6;
          }
    .adminListContent{
        padding-top:10px;
        background:#F5F5F5;
        width:1900px;
        height:100%;
    }
    .course_middle_wrap{
        margin: 10px 10px 0 10px; 
        border: 1px solid gainsboro;
        min-width:1100px;
        height:100%;
        overflow: hidden;
    }
    .fc_section_wrap {
        position:relative;
        height:100%;
        padding:10px 0 10px 0;
        border:1px solid #C0C0C0;
        background:#FFFFFF;
        margin-top:15px;
        margin-botton:15px;
    }
    .fc_section_wrap ul {
            margin:0;
            padding:0;
    }
    .fc_section_wrap ul li{
            margin:0;
            margin-right:5px;
            padding:0;
     }
     .functional_block_bottom{
                position:relative;
                padding:10px;
        }
        .functional_block {
             width:100%;
             line-height:34px;
        	 background:#fff;
        	 text-align:left;
        	 margin-top:15px;
        	 border:1px solid #8FB4D7;
        	 padding: 0 0px 0 0;
        	       	 
        }
        .functional_block_top{
            height:34px;
            position:relative;
             border-bottom:1px solid #8FB4D7;
        }
        .functional_block_left {
            position:absolute;
            width:34px;
            height:34px;
            border-right:1px solid #8FB4D7;
            background:url(../../assets/functional_block.png) no-repeat center;
        }
        .functional_block_right{
            padding-left:40px;
        }
        .course_middle{
        	width:40%;
        	float: left;
        	padding: 10px;
        	padding-bottom: 40px;
        	height: 500px;
        	margin-left: 30px;
        }
         .tableList_table {
		    width:100%;
		    background-color:#FFFFFF;
		    border-collapse:collapse;
		  }
		 .tableList_table thead tr th{
			    color:#666666;
			    background-color:#EFEFEF;
			    border:1px solid #C0C0C0;
			    height:34px;
			    font-size:13px;
			  }
		  .tableList_table thead tr{
		    border-right:none;
			  text-align: center;
		  }
		  .tableList_table tbody tr{
		    padding-left:10px;
			  width: 100%;
			  text-align: center;
		    border-right:1px solid #C0C0C0;
		  }
	.tableList_table tbody tr:hover{
		background-color:#ECF4FF;
	}
	.tableList_table tfoot {
		width:100%;
	}
	.tableList_table tfoot tr {
		width:100%;
		height:50px;
		border:1px solid #C0C0C0;
	}
	.tableList_table tfoot tr td{
		height:30px;
	}
	.tableList_table tfoot tr td li{
		border:none;
		float: left;
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
	/*弹窗*/
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
	    float: left
	  } 
    .alert-head img {
    display: inline-block;
    float: right;
    margin-top: 5px;
    margin-right: 5px;
    cursor: pointer;
  }
	.courseListInput_right_img {
        display:block;
        width:190px;
        height:90px;
        border:1px solid #C0C0C0;
      }
	.video_search_wrap {

		position:relative;
		width: 1090px;
		height: 50px;
		/*line-height: 30px;*/
		border:1px solid #C0C0C0;
		background:#FFFFFF;
		margin-top:15px;

	}
	.admin_top_input input {
		margin-left: 20px;
		width: 450px;
		height: 25px;
		padding-left: 5px;
	}
	.video_search_wrap ul {
		margin: 0;
		padding: 0;
	}

	.video_search_wrap ul li {
		display: inline-block;
		margin: 0;
		padding-top: 10px;
		margin-right: 5px;

	}
	.video_block {
		width:99%;
		line-height:34px;
		background:#fff;
		text-align:left;
		margin-top:15px;
		border:1px solid #8FB4D7;
		/*padding: 0 10px 0 10px;*/

	}
  
</style>