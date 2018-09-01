//引入vue 和vuex
import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
//加载vuex
vue.use(vuex)

axios.defaults.withCredentials =true;
var myAxios =axios.create({baseURL:'http://localhost:3000'})

var search =function(){
    myAxios({
        url:'/VueHandler/AdminHandler?action=show',
        method:'get',
        params:{
            searchText:state.textValue,
            pageStart:state.page
        }
    }).then(function(res){
        //总共分成几页
        state.pageMax = Math.ceil(res.data.data.count/res.data.data.pageSize)//res有个count属性是显示数组中数据个数，pageSize是显示每页有多少个
        state.search1.arr=[];//每次执行使数组为空，不会出现添加多个
        for(var i=0;i<res.data.data.list.length;i++){
            var obj ={
                userName:res.data.data.list[i].userName,
                turename:res.data.data.list[i].turename,
                password:res.data.data.list[i].password,
                power:res.data.data.list[i].power,
                ID:res.data.data.list[i].tokenId,
                upDateAt:res.data.data.list[i].upDateAt,
                phone:res.data.data.list[i].phone,
            }
            state.search1.arr.push(obj);
        }
    }).catch(function(err){
        console.log(err)
    })
}
//存储公共数据
const state = {
    userinfo:{
        userName:'',
        turename:'',
        phone:'',
        power:'',
        password:'',
        tokenId:''
    },
    search1:{
        getsearch:search,
        arr:[]
    },
    page:1,//保存页数
    pageMax:1,//保存总页数
    textValue:''//保存模糊查询的内容
}
//存储公共方法
const mutations={//修改state里面的值
    clear(state,data){
        if(data){
            state.userinfo.userName=data.userName;
            state.userinfo.turename=data.turename;
            state.userinfo.phone=data.phone;
            state.userinfo.power=data.power;
            state.userinfo.tokenId=data.ID;
        }else{
            state.userinfo.userName='';
            state.userinfo.turename='';
            state.userinfo.phone='';
            state.userinfo.power='';
            state.userinfo.password='';
            state.userinfo.tokenId='';
        }
    },
    nextpage(state){
        state.page++
        if(state.page>state.pageMax){
            state.page=state.pageMax
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
        state.page=state.pageMax;
    }
}
//创建并暴露vuex的实例
export default new vuex.Store({
    state,
    mutations
})