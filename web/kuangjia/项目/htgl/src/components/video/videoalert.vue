<template>
 <div :style='alertStyle'>
 	<div :style='alertAll'>
			<div class="alert-head">
				<span class="head-title">添加视频</span>
				<img  @click='close' src="../../assets/images/x.png" alt="" />
			</div>
			<div class="alert-a">
			<ul class="alert-body">
				<br />
				<li>
					&nbsp;<span>视频上传：</span>
                 <template v-if = "uploadFlag">
                     <input :placeholder="item.defaultStr.value"  height="20px" v-model='videoInfor.Vurl' style="margin-top: 60px;"></input>
                     <a  v-on:click="addVideo($event,item)"  style="color:white;font-size:2px !important;text-decoration: none;width:50px;height:21px;line-height:22px;background-color:#4F66B3;float:right;margin-top:60px;margin-right: 30px;">选择视频</a>
                 </template>     
                    
                  <template v-else>
                      <img v-bind:src="item.imags.value" width="150" height="80" style="vertical-align:bottom;margin-bottom:5px" />
                      <a  v-on:click="removeImage($event,item)"   v-on:mouseenter = "img_video_btn" v-text="item.aTextC" style="color:white;font-size:2px !important;text-decoration: none;text-aligh:top;width:50px;height:21px;line-height:22px;background-color:#4F66B3;position:absolute;top:85px;right:10px;margin-top:8px;border-radius:3px"></a>
                      <a  v-on:click="uploadImage($event,item)"  v-on:mouseenter = "img_video_btn" v-text="item.aTextU" style="color:white;font-size:2px !important;text-decoration: none;text-aligh:center;width:50px;height:21px;line-height:22px;background-color:#4F66B3;margin-top:40px;position:absolute;top:15px;right:10px;border-radius:3px"></a>
                  </template>    
                    
                    
                    <input type="file" accept="video/quicktime,video/x-mpeg2,video/x-msvideo,video/mpeg,video/mp4"  v-bind:id="item.uuids" @change="onFileChange($event,item)"  multiple style="display:none" >
        			<video  v-bind:src = "item.videos.value"  v-on:loadeddata="loadeddata($event,item)" v-show="false" id="videoId" controls="true">

                    </video>
				</li>
				<li>
					&nbsp;<span>视频名称：</span>
					<input type="text" v-model='videoInfor.Vname'/>
				</li>
				<li>
					&nbsp;<span>视频时长：</span>
					<input type="text" v-model='videoInfor.Vtime'/>
				</li>
			</ul>
			<div style="padding-top:15px;">
				<button class="btn btn-success" @click='enter'>确定</button>
				<button class="btn btn-info" @click='close'>取消</button>
			</div>
			</div>
 	</div>
 </div>
</template>

<script>
	import videoStore from '../../vuex/videoStore.js'
	export default {
		data(){
			return {
				haha:'',
				uploadFlag:true,
				alertStyle:{
					'width':window.innerWidth+'px',
					'height':window.innerHeight+'px',
					'position':'absolute',
					'top':0,
					'left':0,
					'background':'rgba(255,255,255,0.8)',
					'z-index':999
				},
				alertAll:{
					'position':'relative',
					'width':'500px',
					'height':'300px',
					'top':window.innerHeight/2 -500/2 +'px',
					'left':window.innerWidth/2 -410/2 +'px',
					'background':'#fff',
					'border':'5px solid red'
				}
			}
		},	
		methods:{
		close(){
			 	videoStore.commit('setInfor','none')
			 	videoStore.commit('setAddBtnFlag','none')
			this.item.defaultStr.value='';
			this.videos=[];
			},
		enter(){ 
	            var url=''; 
				var data={  
					Vurl:this.videoInfor.Vurl,
					Vname:this.videoInfor.Vname,
					Vtime:this.videoInfor.Vtime,
				};
				if(this.videoInfor.ID!=''){ 	
					data.ID=this.videoInfor.ID;
					url="/VueHandler/VideoHandler?action=update"
				}else{
					url="/VueHandler/VideoHandler?action=add"
				}
//				console.log(data);
				var _this=this;
				this.$axios({
					url:url,
					method:'post',
					data:data
				}).then(function(res){
					console.log(res);
					if(res.data.success){
						_this.close()   //关闭
						 videoStore.state.tableList.btnList.btn_click();
            // 数据 来自 vuex store
                     videoStore.commit('setInfor','none')
					}else{
						alert('操作失败');
					}
				})

			},
        img_video_btn:function(e){
            e.target.style.cursor = "pointer";
        },
         addVideo:function(e){//'选择按钮的单击事件'
           e.preventDefault();
           console.log(videoStore.state.videoList)
          document.getElementById(videoStore.state.videoList.list[0].uuids).click();
           return false;
        },
        onFileChange(e,item){
        	 var files = e.target.files || e.dataTransfer.files;
              if (!files.length||files[0].size>1024*1024*1024)return;//如果未选择任何视频或视频大小超过1G就终断操作
                             //开始制作缩略图
                 var url = URL.createObjectURL(files[0]);
                             //改变video标签的src使其重新加载数据
                 this.item.videos.value=url;
                           // vedioListStore.state.AlertInputArr.list[0].defaultObj.defaultStr.value=files[0].name;
             	this.createImage(files,item);
             	console.log(this.item.videos.value);
        },
        // 生成图片
      createImage(files,item) {
             if(typeof FileReader==='undefined'){
                 alert('您的浏览器不支持图片视频上传，请升级您的浏览器');
                 return false;
             };
              //控制选择框的显示与否
               this.uploadFlag=false;
           },
    loadeddata:function(e,item){//视频标签加载完数据后触发的事件
    
            var video = e.target;
            var canvas = document.createElement("canvas");
            canvas.width =  video.videoWidth*0.3;
            canvas.height =  video.videoHeight*0.3;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            item.imags.value=canvas.toDataURL("image/jpg");
   

     },
     // 清空图片
  removeImage: function(e,item) {
             this.vedios = [];
             this.uploadFlag=true;
              //item.defaultObj.defaultStr.value="";
         },
         // 上传图片
		 uploadImage: function(e,item) {
		 	alert('视频上传')
		 	var _this=this;
		//利用表单对象进行上传
		   var form = new FormData();
		  if(document.getElementById(item.uuids).files[0]){
		      //参数为上传控件的id和该控件的数据
		   form.append(item.uuids,document.getElementById(item.uuids).files[0]);
		  }
		  this.$axios.post('/VueHandler/UpLoadVideoHandler',form,{
		  	method:'post',
		  	headers:{'Content-Type':'multipart/form-data'}
		  }).then(function(res){
		  	console.log('我是上传视频的内容')
		  	console.log(res);
		  	console.log(item);
		  	 _this.uploadFlag = true;
		  	 item.defaultStr.value=res.data.cacheName;
		  	 _this.videoInfor.Vurl=res.data.cacheName;
		  })
		 }
		},
		computed:{
			videoInfor(){
				return videoStore.state.videoInfor
			},
			item(){
				return videoStore.state.videoList.list[0]
			}
		}
		
	}
</script>

<style scoped="">
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
  /*.alert-a {
  	width: 415px;
  	height: 213px;
  	background: red;
  	position: absolute;
  	top: 85px;
  	left: 20px;
  }*/
  ul.alert-body li {
    display: block;
    margin-bottom: 10px
  }
  ul.alert-body span{
  	display: inline-block;
  	margin-left: 50px;
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


<!--
WEB组 于昊工作日报 CP-1920
前端框架编程视频上传组件编写，南京校区电话面试，js拓展文件整理，前端宣传网站视频录制-->