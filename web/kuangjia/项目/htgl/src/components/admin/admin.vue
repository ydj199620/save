<template>
	<div>
		<div>
			<head-component></head-component>
			<!-- 头部栏 -->
		</div>
		<div class="adminListContent">
			<span style="color: #2880E4;">首页/ </span><span>用户管理/ </span><span>系统人员</span>                                   
			<div class="fc_section_wrap">
				<ul>
					<li class="admin_top_input">
						<input type="text" placeholder="姓名查询" v-model='searchText'/>
					</li>
					<li class="admin_top_input">
						<button  class="btn_class" style="background: #5CB85C;" @click="searchValue()">查询</button>
					</li>
					<li class="admin_top_add">
						<button  class="btn_class" style="background: #4F66B3;" @click='show()'>+添加</button>
					</li>
				</ul>
			</div>
			
			<!--表格-->
			<div class="functional_block">
				<div class="functional_block_top">
					<div class="functional_block_left"></div>
					<div class="functional_block_right">系统人员列表</div>
				</div>
				<div class="functional_block_bottom">
					<!-- 列表组件   这个组件的 属性tableListData  -->
					<list-components @mm='hide'></list-components>
				</div>
			</div>
			<!-- 弹窗 -->
			<div v-bind:style='addBtnFlag'>
				<!-- 弹窗内容   以前 v-if  v-show -->
				<!-- 弹窗内容  异步到位  display -->
				<!--<h3>我是弹窗内容</h3>-->
				<add-components @mm='hide' ></add-components>
			</div>
		</div>
	</div>
</template>

<script>
	import fchead from '../fchead'
	import list from './listData'
	import add from './adminAlert'
	import store from '@/vuex/store'
    export default {
		store,
		components:{
			"head-component":fchead,
			"list-components":list,
			"add-components":add
		},
    	data(){
    		return{
			  searchText:'',   //搜索框里面的值
			  addBtnFlag:{
				  'display':'none'
			  }
    		}
    	},
    	methods:{
    		show:function(){
				this.addBtnFlag.display='block';
			},
			hide:function(a){
				this.addBtnFlag.display = a;
			},
			searchValue:function(){
				this.$store.state.textValue = this.searchText;
				this.$store.state.search1.getsearch();
			}
    	}
    	
    }
</script>

<style scoped>
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
		margin-bottom: 15px;
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