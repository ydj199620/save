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
		method:'POST',
		url:'/VueHandler/VideoHandler?action=showlist',
		data:{
			pageStart:state.pageStart,
			searchText:state.searchText,	

		}
	}).then(function(res){
state.maxAdminCount=Math.ceil(res.data.data.count/state.pageSize) 
		state.tableList.list=[];
		console.log(res);
		for(var i=0;i<res.data.data.list.length;i++){
			let obj={
				Vurl:res.data.data.list[i].Vurl,
				Vname:res.data.data.list[i].Vname,
				Vtime:res.data.data.list[i].Vtime,
				Vstate:res.data.data.list[i].Vstate,
				upDateAt:res.data.data.list[i].upDateAt,
				createAt:res.data.data.list[i].createAt,
				ID:res.data.data.list[i].ID,	
			};
			state.tableList.list.push(obj);
			console.log('我是列表数据')
			console.log(state.tableList.list)
			console.log('我是列表数据')
		}
	})
}

var uuidfn = function() {//生成uuid码

    var len=8;
    var radix = 0;
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
        // rfc4122, version 4 form
        var r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random()*16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');
};

const state={
	addBtnFlag:{  //显示隐藏 --》添加弹窗
		'display':'none'
	},
	videoInfor:{
		Vname:'',
		Vtime:'',
		Vurl:'',
		ID:''
	},
	searchText:'',
	pageStart:1,
	pageSize:3,
	maxAdminCount:1,
	tableList:{  
		getListData:tableList,  
		list:[],   
		btnList:{   		
			btn_click(){
				tableList(); 
			}
		}
	    ,count:{   //分页时候用的 页数
	    	value:1
	    }
	},
	videoList:{
		list:[{
			uuids:uuidfn(),
            imags:{value:""},//图片数据
			videos:{value:""},//视频数据
            aTextU:"上传",//上传按钮名称
            aTextC:"清除",//清除按钮名称
            defaultStr:{value:"视频应小于1G"},
		},{
			
		}]
	},
	
};

const mutations={
	setAddBtnFlag:function(state,str){
		state.addBtnFlag.display= str;
	},
	setInfor(state,data){ //data 为了编辑准备的
		if(data){ 
		state.videoInfor.Vname=data.Vname;
		state.videoInfor.Vtime=data.Vtime;
		state.videoInfor.Vurl=data.Vurl;		
		state.videoInfor.ID=data.ID;		
		}else{ //清空
		state.videoInfor.Vname='';
		state.videoInfor.Vtime='';
		state.videoInfor.Vurl='';
		}
	},
    //跳转到首页
		subFirstClick(state){
		 state.pageStart=1;
		 state.tableList.count.value=state.pageStart
		},    
    // 向上一页跳转
		subPreveClick(state){
		 state.pageStart--;
		 state.tableList.count.value=state.pageStart
		},
		// 下一页
		subNextClick(state){
			if(state.pageStart<state.maxAdminCount){			
			state.pageStart++;
		 state.tableList.count.value=state.pageStart	
			}
		},
    // 向最后页跳转
		subLastClick(state){
		 state.pageStart=state.maxAdminCount;
		 state.tableList.count.value=state.pageStart
		},	
};




export default new Vuex.Store({
	state,
	mutations
})
