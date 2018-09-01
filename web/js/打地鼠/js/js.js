var textbox =document.getElementById('textbox');
var startbtn = textbox.firstElementChild;
var img1 = document.getElementById('img1');
var gover = document.getElementById('GOver');
var timer;
var timer1;
var jfq1 =0;
var score = document.getElementById('score');
var jfq = gover.lastElementChild;
var endbtn = textbox.lastElementChild;
var gmspeak = document.getElementById('gmspeak');
var speakSpan =document.getElementById('speakSpan');
var wolfbox =document.getElementById('wolfbox');
flag=true;//判断多次点击也只执行一次点击效果
var arr = [
    {
        'top':285,
        'left':45
    },
    {
        'top':217,
        'left':167
    },
    {
        'top':258,
        'left':300
    },
    {
        'top':376,
        'left':45
    },
    {
        'top':332,
        'left':175
    },
    {
        'top':362,
        'left':318
    },
    {
        'top':485,
        'left':65
    },
    {
        'top':455,
        'left':200
    },
    {
        'top':488,
        'left':330
    }
];
startbtn.onclick =function(){
    textbox.style.display = 'none';
    yd();
    timer1=setInterval(function(){
        creatwolf();
    },2000)
    
}
function creatwolf(){
    var a = parseInt(Math.random()*10);
    var b = parseInt(Math.random()*9);
    var div1 = document.createElement('div');
    if(a>4){
        div1.setAttribute('id','bigwolf');
    }else{
        div1.setAttribute('id','smallwolf');
    }
    div1.style.top = arr[b].top +'px';
    div1.style.left = arr[b].left+ 'px';
    wolfbox.appendChild(div1);
    zhanggao(div1);
    div1.onclick =function(){
        hitwolf(this);
    }
}
function hitwolf(wolf){
    if(flag){//如果为true执行点击效果
        flag=false;//首先使flag为false，让点击效果无法重复点击执行
        if(wolf.getAttribute('id')=='smallwolf'){
            jfq1-=10;
        }
        if(wolf.getAttribute('id')=='bigwolf'){
            jfq1+=10;
        }
        score.innerHTML = jfq1;
        jfq.innerHTML = score.innerHTML;
        hitwolf1(wolf)
    }
}
function hitwolf1(wolf1){
    var e = 5;
    clearInterval(wolf1.time);
    wolf1.timer2=setInterval(function(){
        e+=1
        wolf1.style.backgroundPositionX = -108*e+'px';
        if(e==10){
            wolfbox.removeChild(wolf1);
            clearInterval(wolf1.timer2);
            flag=true;//等图片消失执行完成后，再使flag的值为true
        }
    },100)
}
function zhanggao(obj){
    var c= 0;
    var d =1;
    obj.time=setInterval(function(){
        if(c==5){
            d=-d
        }
        c+=d;
        obj.style.backgroundPositionX = -108*c+'px';
        if(c<=-1){
            if(obj.getAttribute('id')=='smallwolf'){
                jfq1+=10;
                score.innerHTML = jfq1;
                jfq.innerHTML = score.innerHTML;
            }
            clearInterval(obj.time);
            wolfbox.removeChild(obj);
        }
        console.log(4)
    },100)
}
gover.onclick=function(){
    textbox.style.display = 'block';
    gover.style.display ='none';
    img1.style.width = '270px';
    jfq1=0;
    score.innerHTML = jfq1;
}
endbtn.onclick =function(){
    gmspeak.style.display='block';
}
speakSpan.onclick =function(){
    gmspeak.style.display='none';
}
function yd(){
    var leader = img1.offsetWidth;
    console.log(leader)
    timer=setInterval(function(){
        leader--;
        img1.style.width = leader +'px';
        if(leader<=0){
            clearInterval(timer);
            gover.style.display = 'block';
            clearInterval(timer1);
        }
    },100)
}
