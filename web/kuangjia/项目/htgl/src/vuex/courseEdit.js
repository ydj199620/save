import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
// 允许跨域
axios.defaults.withCredentials=true;
// 注入 nodejs后台地址
var myAxios =axios.create({baseURL:'http://localhost:3000/'});

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


var videoList= function () {
    myAxios({
        method:'get',
        url:'/VueHandler/VideoHandler?action=show',
        params:{
            searchText:state.videoSearch,
            pageStart:state.videoStart,
            pageSize:state.pageSize
        }
    }).then(function(res){
        console.log(res);
        console.log(state.videoSearch);
        state.maxAdminCount=Math.ceil(res.data.data.count/state.pageSize);
        state.videoDate.list=[];
        for(var i=0;i<res.data.data.list.length;i++){

            state.videoDate.list.push(res.data.data.list[i]);
        }
    })
};





const state={
	Cname:'',
	Cdescribe:'',
	Cprice:'',
	CategoryOne:'',
	CategoryTwo:'',
	CategoryThree:'',
	Cpic:'',
	uploadUrl:{value:''},
    courseDtail:{value:""},//课程详情
	PicList:{
	 list:[{
			uuids:uuidfn(),
            imags:{value:""},//图片数据
            aTextU:"上传",//上传按钮名称
            aTextC:"清除",//清除按钮名称
            defaultStr:{value:"视频应小于1G"},
		},{
			
		}]
	},
    // 关于视频
    maxAdminCount:1,
    pageSize:3,
    videoSearch:'',
    videoStart:1,
    videoDate:{
        list:[],
        getListData:videoList,
        count:{   //分页时候用的 页数
            value:1
        },
        listOne:[],
    }
	
};





const mutations={
    //跳转到首页
    subFirstClick(state){
        state.videoStart=1;
        state.videoDate.count.value=state.videoStart
    },
    // 向上一页跳转
    subPreveClick(state){
        state.videoStart--;
        state.videoDate.count.value=state.videoStart
    },
    // 下一页
    subNextClick(state){
        if(state.videoStart<state.maxAdminCount){
            state.videoStart++;
            state.videoDate.count.value=state.videoStart
        }
    },
    // 向最后页跳转
    subLastClick(state){
        state.videoStart=state.maxAdminCount;
        state.videoDate.count.value=state.videoStart
    },
};



export default new Vuex.Store({
	state,
	mutations
})