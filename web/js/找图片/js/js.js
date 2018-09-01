var btn =document.getElementById('btn');
var time =document.getElementById('time');
var imgbox = document.getElementById("imgbox");
var time1 =document.getElementById('time1');
var djs = 60;
var timer;
var index = 1;//保存一个值用来获取图片的数量
var jsq2= 0;
btn.onclick =function(){
     getTime();//点击开始执行倒计时事件
     clearImg();//先把原来图片清除
     createImg();//在创建图片
     btn.style.visibility = 'hidden';
}
function getTime(){//点击后使倒计时开始倒数
    timer=setInterval(function(){
        if(djs<=0){//倒计时为0或者比0小
            clearInterval(timer);//清除定时器
            alert('GAME OVER!');//执行alert提示游戏结束
            /* imgbox.children[sjs].onclick=null;//使图片点击效果结束 */
        }else{//放在判断里面写执行内容，不然倒计时不到0就会停止执行
            djs -= 0.1;//倒计时每次减0.1
            djs = djs.toFixed(2);//使数字保留2位小数
            time.innerHTML = djs;//使他的内容开始倒计时
        }
    },50)
}
function clearImg(){//清除原来的图片
    imgbox.innerHTML = '';
}
function createImg(){//创建新的图片
    index++;
    if(index>10){
        index = 10;
    }
    time1.innerHTML =jsq2;
    jsq2++;
    var jsq = Math.pow(index,2);//每次点击创建的图片数量
    var width1 = imgbox.clientWidth/index-10;//每次点击图片的宽度都为原来宽度除以获取的定时器减去左边距的距离
    for(var i=0;i<jsq;i++){//循环创建图片
        var img1 = document.createElement('img');//创建img标签
        img1.src = 'img/one_1.png';//使img的图片都为多数的图片
        img1.style.width = width1 +'px';
        imgbox.appendChild(img1);//循环一次加一个img
    }
    suoyin(jsq);//使其中一个图片随机位置变成别的图片
}
function suoyin(num){
    var sjs = parseInt(Math.random()*num);//获取随机下标
    imgbox.children[sjs].src = 'img/one_0.png';//使每次imgbox下的所有子元素中随机的一个img图片改成另一张图片
    imgbox.children[sjs].onclick=function(){//每次点击那个图片
        if(djs>0){//定时器的时间不为0的时候
            clearImg();//先删除图片
            createImg();//在创建图片
        }else{//定时器为0时
            imgbox.children[sjs].onclick=null;//清除点击事件
            alert('GAME OVER!');//并且跳出游戏结束
        }
    }
}