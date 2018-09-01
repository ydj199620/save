import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
// 允许跨域
axios.defaults.withCredentials=true;
// 注入 nodejs后台地址
var myAxios =axios.create({baseURL:'http://localhost:3000/'});

var tableList=function(){
	myAxios({
		method:'post',
		url:'/VueHandler/CourseHandler?action=show',
		data:{
			searchText:state.searchText,
			pageStart:state.pageStart,
			_id:state._id,
			CategoryOne:state.CategoryOne,
			CategoryTwo:state.CategoryTwo,
			CategoryThree:state.CategoryThree
		}
	}).then(function(res){
		state.maxAdminCount=Math.ceil(res.data.data.count/state.pageSize);
		state.listDate.list=[];
		for(var i=0;i<res.data.data.list.length;i++){
			let obj={
				_id:res.data.data.list[i]._id,
				Cname:res.data.data.list[i].Cname,
				Cnumber:res.data.data.list[i].Cnumber,
				createAt:res.data.data.list[i].createAt,
				upDateAt:res.data.data.list[i].upDateAt,
				isState:res.data.data.list[i].isState,
				isTop:res.data.data.list[i].isTop,
				CategoryOne:res.data.data.list[i].CategoryOne,
				CategoryTwo:res.data.data.list[i].CategoryTwo,
				CategoryThree:res.data.data.list[i].CategoryThree,
				ID:res.data.data.list[i].ID,	
			};
			state.listDate.list.push(obj);
		}
	})
}








const state={
	    _id:'',
		searchText:'',
		pageStart:1,
		maxAdminCount:1,
		pageSize:3,
		CategoryOne:'',
		CategoryTwo:'',
		CategoryThree:'',
		listDate:{
			getListData:tableList, 
			list:[],
			btnList:{
				btn_click(){
					tableList();
				}
			},
			count:{   //分页时候用的 页数
		    	value:1
		    }
	    }
};
const mutations={
    //跳转到首页
		subFirstClick(state){
		 state.pageStart=1;
		 state.listDate.count.value=state.pageStart
		},    
    // 向上一页跳转
		subPreveClick(state){
		 state.pageStart--;
		 state.listDate.count.value=state.pageStart
		},
		// 下一页
		subNextClick(state){
			if(state.pageStart<state.maxAdminCount){			
			state.pageStart++;
		 state.listDate.count.value=state.pageStart	
			}
		},
    // 向最后页跳转
		subLastClick(state){
		 state.pageStart=state.maxAdminCount;
		 state.listDate.count.value=state.pageStart
		},
};
export default new Vuex.Store({
	state,
	mutations
})
