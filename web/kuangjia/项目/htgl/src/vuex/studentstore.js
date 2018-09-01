import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
Vue.use(vuex);
var studentlist =function(){
    axios({
        url:'/VueHandler/AdminHandler?action=usershow',
        method:'post',
        data:{
            pageStart:state.page,
			userName:state.userName,
			email:state.email,
			phone:state.phone
        }
    }).then(function(res){
        state.studentarr=[]
        state.pagemax = Math.ceil(res.data.data.count/res.data.data.pageSize)//res有个count属性是显示数组中数据个数，pageSize是显示每页有多少个
        for(var i=0;i<res.data.data.list.length;i++){
            var obj = {//整理需要的用户信息
                userName:res.data.data.list[i].userName,
                email:res.data.data.list[i].email,
                phone:res.data.data.list[i].phone,
                isstate:res.data.data.list[i].isstate,
                createAt:res.data.data.list[i].createAt,
                tokenId:res.data.data.list[i].tokenId
            }
            state.studentarr.push(obj);
        }
    }).catch(function(err){
        console.log(err)
    })
}

const state={
    getstudent:studentlist,
    studentarr:[],
    page:1,//页数
    pagemax:1,//总页数
    userName:'',//查询条件的用户名
    email:'',//查询条件的邮箱
    phone:''//查询条件的电话
}

const mutations={
    nextpage(state){
        state.page++
        if(state.page>state.pagemax){
            state.page=state.pagemax
        }
    },
    pevpage(state){
        state.page--
        if(state.page<1){
            state.page=1
        }
    },
    firstpage(state){
        state.page=1;
    },
    lastpage(state){
        state.page=state.pagemax;
    }
}

export default new vuex.Store({
    state,
    mutations
})