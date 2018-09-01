<template>
    <div> 
      	<div>
			<!-- 头部栏 -->
			<fchead></fchead>
		</div>
		<div class="adminListContent">
			<span style="color:#2880E4">首页/</span> <span>用户管理/</span> <span>系统人员</span>
		    <div class="fc_section_wrap">
		    	<!-- 搜索框 -->
		    	<ul>
					<li class="admin_top_input">
						<input type="text" placeholder="模糊查找视频：名称" v-model='searchText' />
					</li>
					<li>
						<button @click='search()' class="btn_class" style="background: #5cb85c;">查询</button>
					</li>	
						<button  @click='alertShow'  class="btn_class" style="background:#4F66B3;float: right;">+ 视频添加</button>
				</ul>
		    </div>
		    <!--添加弹窗-->
		    <div v-bind:style='addBtnFlag' >
		    	<alert></alert>
		    </div>
		   <!-- 表格 -->
			<div class="functional_block">
				<div class="functional_block_top">
					<div class="functional_block_left"></div>
					<div class="functional_block_right">视频列表</div>
				</div>
				<div class="functional_block_bottom">
				   <list :listData='tableListDataStore'></list>
				</div>
			</div> 
		</div>
    </div> 
</template>

<script>
	import fchead from '../fchead.vue'
	import alert from './videoalert.vue'
	import list from './list.vue'
	import videoStore from '../../vuex/videoStore'
	export default {
		data(){
			return {
				searchText:''
			}
		},
		videoStore,
		components:{fchead,alert,list},
		methods:{
			alertShow(){
				videoStore.commit('setAddBtnFlag','block')
				videoStore.commit('setInfor')
			},
    		search(){
    			console.log('123123123123')
    			console.log(this.tableListDataStore)
    		    videoStore.state.searchText = this.searchText;
    		    videoStore.state.tableList.btnList.btn_click();
    		    videoStore.state.searchText='';
    		    this.searText='';
    		}
		},
    	computed:{
    		addBtnFlag(){   // 通过计算属性的方式 将数据仓库里面的数据 储存在本地的 addBtnFlag属性上面
    			return   videoStore.state.addBtnFlag// 控制显示 隐藏的字段
    		},
            tableListDataStore(){
            	return videoStore.state.tableList.list 
            }
            
    	},
    	mounted:function(){
    		videoStore.state.tableList.btnList.btn_click();
    	}
	}
</script>

<style scoped="">
	ul li {
		list-style: none
	}
	
	.adminListContent {
		padding-top: 10px;
		padding-left: 10px;
		padding-right: 10px;
		background: #F5F5F5;
		min-width: 1100px;
		height: 100%;
	}
	
	.admin_top_input input {
		width: 250px;
		height: 25px;
		padding-left: 5px;
	}
	
	.fc_section_wrap {
		height: 35px;
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
		position: relative;
		z-index: 2;
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