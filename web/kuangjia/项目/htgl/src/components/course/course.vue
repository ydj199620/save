<template>
<div>
	   <div> 
	   <fchead></fchead>
	   </div>
	   <div class="coursetContent">
	   <span style="color:#2880E4">首页/</span> <span>用户管理/</span> <span>课程列表</span>
	   <div class="fc_section_wrap course_top_input">
	   	  <input type="text" placeholder="课程名称搜索" v-model='searchText'/>
	   	  &nbsp;<span>专业选择：</span>
	   	  <select v-model='CategoryOneN' @change='changeOut(CategoryOneN)'>
	   	  	<option v-for='i in CategoryOne' >{{i.title}}</option>
	   	  </select>
  	   	  <select v-model='CategoryTwoN' @change='changeTh(CategoryTwoN)'>
	   	  	<option v-for='i in CategoryTwo'>{{i.title}}</option>
	   	  </select>
  	   	  <select v-model='CategoryThreeN' >
	   	  	<option v-for='i in CategoryThree'>{{i.title}}</option>

	   	  </select>
	   	  &nbsp; <button class="btn_class" style="background: #5cb85c;" @click='search()'>查询</button>
	   	  <button  class="btn_class" style="background:#4F66B3;float: right;margin-top: 6px;">+ 添加</button>
	   </div>
	   <!--表格-->
	   <div class="functional_block">
	   	  <div class="functional_block_top">
	   	    <div class="functional_block_left"></div>
	   	    <div class="functional_block_right">课程列表</div>
	   	  </div>
	   	  <div class="functional_block_bottom">
	   	  	<tables :listStore='listStore'></tables>
	   	  </div>
	   </div>
	   </div>
</div>
</template>

<script>
	import fchead from '../fchead.vue';
	import tables from './list.vue';
	import course from '../../vuex/course'
	export default {
		components:{fchead,tables},
		data(){
			return {
			searchText:'',
			cataLog:[],
			CategoryOne:[],
			CategoryTwo:[],
			CategoryThree:[],
			CategoryOneN:[],
			CategoryTwoN:[],
			CategoryThreeN:[]
			}
		},
		methods:{
		search(){
            course.state.searchText=this.searchText;
			course.state.CategoryOne=this.CategoryOneN;
			course.state.CategoryTwo=this.CategoryTwoN;
			course.state.CategoryThree=this.CategoryThreeN;
			course.state.listDate.btnList.btn_click();
			this.searchText='';
			course.state.searchText=''
			
		},
		changeOut(v){
		    this.CategoryTwo=[];
			for(var i=0;i<this.CategoryOne.length;i++){
				if(this.CategoryOne[i].title==v){
                   for(var j=0;j<16;j++){
                   	if(this.cataLog[j].fatherId==this.CategoryOne[i].sysId){
                          this.CategoryTwo.push(this.cataLog[j]);
                   	}
                   }
				}
			}          
		},
		changeTh(value){
	    this.CategoryThree=[];
			for(var i=0;i<this.CategoryTwo.length;i++){
				if(this.CategoryTwo[i].title==value){
                   for(var j=0;j<16;j++){
                   	if(this.cataLog[j].fatherId==this.CategoryTwo[i].sysId){
                          this.CategoryThree.push(this.cataLog[j]);
                   	}
                   }
				}
			} 	
		},
		changeOn(value,father,child){
			this.child=[];
			console.log('aaaaaaaaaaaaa');
			console.log(father);
			console.log(father);
			console.log('aaaaaaaaaaaaa');
			for(var i=0;i<father.length;i++){
				if(father[i].title==value){
					for(var j=0;j<16;j++){
                   	if(this.cataLog[j].fatherId==father[i].sysId){
                          child.push(this.cataLog[j]);
                   	}	
					}
				}
			}
		}
		},
		computed:{
			listStore(){
				return course.state.listDate;
			}
		},
		mounted:function(){
	
		course.state.listDate.btnList.btn_click();
		var _this=this;
		this.$axios({
			url:'/VueHandler/CourseHandler?action=getcategory',
			method:'GET',
		}).then(function(res){
			_this.cataLog=res.data.data;
           for(var i =0;i<16;i++){           
            if(res.data.data[i].fatherId==0){
            	_this.CategoryOne.push(res.data.data[i])
            }     
           };
		})
	    }
	}
</script>

<style>
	ul li {
		list-style: none
	}
	
	.coursetContent {
		padding-top: 10px;
		padding-left: 10px;
		padding-right: 10px;
		background: #F5F5F5;
		min-width: 1100px;
		height: 100%;
	}
	
	.course_top_input input {
		width: 250px;
		height: 30px;
		padding-left: 5px;
		margin-top: 4px;
	}
	.course_top_input select{
		width: 250px;
		height: 30px;
		margin-top: 4px;
	}
	.fc_section_wrap {
		height: 45px;
		padding: 10px;
		border: 1px solid #C0C0C0;
		background: #FFFFFF;
		margin-top: 15px;
		margin-botton: 15px;
	}
	
	.fc_section_wrap ul {
		margin: 0;
		padding: 0;
	}
	
	.fc_section_wrap ul li {
		display: inline-block;
		margin: 0;
		margin-right: 5px;
		padding: 0;
	}
	
	.admin_top_add {
		float: right;
	}
	
	.btn_class {
		width: 80px;
		height: 32px;
		margin: 0;
		padding: 0;
		border: none;
		cursor: pointer;
		color: #fff;
		margin-right: 10px;
	}
	
	.functional_block {
		width: 100%;
		line-height: 34px;
		background: #fff;
		text-align: left;
		margin-top: 15px;
		border: 1px solid #C0C0C0;
	}
	
	.functional_block_top {
		height: 34px;
		position: relative;
		border-bottom: 1px solid #C0C0C0;
	}
	
	.functional_block_left {
		position: absolute;
		width: 34px;
		height: 34px;
		border-right: 1px solid #C0C0C0;
		background: url(../../assets/functional_block.png) no-repeat center;
	}
	
	.functional_block_right {
		padding-left: 40px;
	}
	
	.functional_block_bottom {
		overflow: hidden;
	}
</style>