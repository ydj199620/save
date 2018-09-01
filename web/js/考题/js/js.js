var searchul = document.getElementById('searchUl');
var lis = searchul.children;
var yc = document.getElementsByClassName('yincang');
var jsq=0;
var jsq2=0;
for(var z = 0;z<lis.length;z++){
    lis[z].item = z;
    lis[z].onmouseover =function(){
        yc[this.item].style.display= 'block';
    }
    lis[z].onmouseout =function(){
        yc[this.item].style.display= 'none';
    }
}
var list =document.getElementsByClassName('list');
for(var j= 0;j<list.length;j++){
    list[j].item1=j;
    list[j].onmouseover =function(){
        var img1 = list[this.item1].firstElementChild;
        img1.style.visibility= 'visible';
    }
    list[j].onmouseout =function(){
        var img1 = list[this.item1].firstElementChild;
        img1.style.visibility= 'hidden';
    }
}
var img2box =document.getElementById('img2box');
var left = document.getElementById('iconLeft');
var right = document.getElementById('iconRight');
var img2 = img2box.children;
var width1 = img2box.children[0].offsetWidth;
var ulli = document.getElementById('biaodianul').children;
ulli[0].className = 'lis';
for(var i =0;i<ulli.length;i++){
    ulli[i].item=i;
    ulli[i].onclick =function(){
        for(var x=0;x<ulli.length;x++){
            ulli[x].className ='';
        }
        this.className='lis';
        aa(img2box,{'left':-width1*jsq})
        jsq=this.item;
        jsq2=this.item;
    }
}
var newli = img2box.firstElementChild.cloneNode(true);
img2box.appendChild(newli);
left.onclick=function(){
    clearInterval(img2box.timer);
    if(jsq==0){
        jsq = img2.length-1;
        img2box.style.left = -width1*(img2.length-1)+'px';
    }
    jsq--;
    if(jsq2==0){
        jsq2 =img2.length-1;
    }
    jsq2--;
    for(var k=0;k<ulli.length;k++){
        ulli[k].className = '';
    }
    ulli[jsq2].className='lis';
    aa(img2box,{'left':-width1*jsq});
}
right.onclick=function(){
    clearInterval(img2box.timer);
    if(jsq==img2.length-1){
        jsq = 0;
        img2box.style.left = '0px';
    }
    jsq++;
    jsq2++;
    for(var v=0;v<ulli.length;v++){
        ulli[v].className = '';
    }
    if(jsq2==img2.length-1){
        jsq2 =0;
    }
    ulli[jsq2].className='lis';
    aa(img2box,{'left':-width1*jsq});
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
/* var img3 =document.getElementsByClassName('img3_121')[0];
var img3_1 =document.getElementsByClassName('img3_1')[0];
var img3_13=document.getElementsByClassName('img3_13')[0];
img3_1.onmouseover=function(){
    img3.style.display='block';
    img3_13.style.backgroundColor ='white';
}
img3_1.onmouseout=function(){
    img3.style.display='none';
    img3_13.style.backgroundColor ='#ccc';
}
 */