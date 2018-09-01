
var ulbox = document.getElementById('ulbox');
var imgChild = ulbox.firstElementChild.children;
var bigbox = document.getElementById('bigbox');
var imgbox = document.getElementById('imgbox');
var left = document.getElementById('left');
var right = document.getElementById('right')
var arr = [//创建配置单
	//1
	{
		'width':400,
		'left':40,
        'opacity':0.5,
		'zIndex':2,
		'top':0
	},
	//2
	{
		'width':600,
		'left':0,
		'opacity':0.8,
		'zIndex':3,
		'top':50
	},
	//3
	{
		'width':800,
		'left':200,
		'opacity':1,
		'zIndex':4,
		'top':80
	},
	//4
	{
		'width':600,
		'left':600,
		'opacity':0.8,
		'zIndex':3,
		'top':50
	},
	//5
	{
		'width':400,
		'left':760,
		'opacity':0.5,
		'zIndex':2,
		'top':0
	}
]
chushi()
function chushi(){
    for(var i=0;i<imgChild.length;i++){//循环遍历每个图片
        aa(imgChild[i],arr[i],function(){})//使每个图片设置配置单的属性
    }
}
bigbox.onmouseover =function(){
    aa(imgbox,{'opacity':1},function(){})
}
bigbox.onmouseout =function(){
    aa(imgbox,{'opacity':0},function(){})
}
right.onclick =function(){
    arr.push(arr.shift());//点击一次使配置单第一个放到最后一个
    chushi();
}
left.onclick =function(){
    arr.unshift(arr.pop());//点击一次使配置单最后一个放到第一个
    chushi();
}
for(var j =0;j<imgChild.length;j++){//循环遍历所有图片
    imgChild[j].item=j;//绑定值
    imgChild[j].onclick = function(){//每个图片有个点击事件
        for(var k=0;k<arr.length;k++){//循环遍历arr数组中每个对象
            if(arr[this.item].zIndex!=4){//点击图片时，每个图片身上的arr配置单中的index不等于4的时候
                arr.push(arr.shift());//使配置单把第一个删除添加到最后一个，直到当前图片身上的index值为4
            }else{//等于4的时候跳出
                break;
            }
        }
        chushi();//执行每个图片按照更新后的配置单排列
    }
}
function aa(obj,json2,fun){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        for(var k in json2){
            if(k=='opacity'){
                var leader = parseFloat(bb(obj,null,k));//k是属性；
                var target = json2[k];//json1[k]是获取值；
                var step = ((target-leader)/10)*1000;
                (target-leader)>0?step=Math.ceil(step):step=Math.floor(step);
                leader = leader+step/1000;
                obj.style[k] = leader;
            }else if(k=='zIndex'){
                obj.style[k] = json2[k];//z-index只能直接改变
            }else{
                var leader = parseInt(bb(obj,null,k));//k是属性；
                var target = json2[k];//json1[k]是获取值；
                console.log(k);
                console.log(json2[k]);
                var step = (target-leader)/10;
                (target-leader)>0?step=Math.ceil(step):step=Math.floor(step);
                console.log(leader+'--'+step);
                    leader = leader+step;
                    obj.style[k] = leader + 'px';
            }
            if(leader!=target){
                flag =false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            fun&&fun();//回调函数
                //另一种回调函数方法
                /*if(fun){
                 * 	fun();
                 * }*/
        }
    },50)
}
function bb(obj,obj1,obj2){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,obj1)[obj2];
    }else{
        return obj.currentStyle[obj2];
    }
}