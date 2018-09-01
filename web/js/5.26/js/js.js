var miusicBoxUl = document.getElementById('miusicBoxUl');
var miusicLi = miusicBoxUl.children;
var audio1 = document.getElementById('audio1');
for(var i =0;i<miusicLi.length;i++){
	miusicLi[i].style.backgroundImage = 'url(img/yinyue_'+i+'.png)';
	miusicLi[i].style.backgroundPositionX = '0px';
	miusicLi[i].style.backgroundPositionY ='0px';
	miusicLi[i].item = i;
	miusicLi[i].onmouseover =function(){
		this.style.backgroundImage = 'url(img/yinyue_'+this.item+'.png)';
		this.style.backgroundPositionX = '0px';
		this.style.backgroundPositionY ='-57px';
		
	}
	miusicLi[i].onmouseout =function(){
		this.style.backgroundImage = 'url(img/yinyue_'+this.item+'.png)';
		this.style.backgroundPositionX = '0px';
		this.style.backgroundPositionY ='0px';
		/* audio1.pause();//控制音频关
		audio1.src = ''; */
	}
	miusicLi[i].onclick =function(){
		audio1.src = 'music/sound0'+this.item+'.mp3';
		audio1.play();//控制音频开
	}
}
var imgEmail =document.getElementById('imgEmail');
var imgTell = document.getElementById('imgTell');
imgEmail.onmouseover =function(){
	imgTell.style.display = 'block';
	imgTell.style.width = '148px';
	animate(imgTell,imgTell.offsetWidth)
}
function animate(obj,target){
		clearInterval(obj.time);
		//leader = leader+step;  当前位置= 当前位置+步数
		imgTell.style.width = "0px";
		var leader = obj.offsetWidth;//当前位置
		
		var step = 2;
		if(leader >target){
			step = -step;
		}
		if(leader <target){
			step = step;
		}
		obj.time = setInterval(function(){
			if(leader!=target){
				leader = leader+step;
				obj.style.width = leader+'px';
			}else{
				clearInterval(obj.time);
			}
			console.log('定时器');
			console.log(leader+'当前位置');
		},10);
		
}
imgEmail.onmouseout =function(){
	imgTell.style.display = 'none';
}
var stick =document.getElementById('stick');
var b ;
stick.onclick =function(){
	zz(0);
}
function scroll(){
	return  obj = {
		'top':window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
		'left':window.pageXOffset ||document.documentElement.scrollLeft || document.body.scrollLeft ||0
	}
}
function zz(target){
	clearInterval(b);
	b = setInterval(function(){
		var leader = window.scroll().top;
		var step = 0;
		if(target>leader){
			step=Math.ceil((target-leader)/10)
		}
		if(target<leader){
			step=Math.floor((target-leader)/10)
		}
		if(target!=leader){
			leader = leader +step;
			window.scrollTo(0,leader)
		}else{
			clearInterval(b);
		}
	},20)
}
var list1 = listData.listData00.data.list;
/* var list2 = listData.listData01.data.list; */
var mainMain = document.getElementById('main-main');
for(var k =0;k<list1.length;k++){
	/*var div = document.createAttribute('div');*/
	var div1 ='<div class="box3One">'+
					'<div class="box3img"><img src="'+list1[k].coverImg+'"></div>'+
	                '<div class="box3span">'+
	                   '<p class="box3-span1">'+list1[k].title+'</p>'+
	                   '<p class="box3-span2">'+list1[k].creatAt+'</p>'+
	                   '<span class="box3-span3">'+list1[k].describe+'</span>'+
	               '</div>'+
	            '</div>'
	mainMain.innerHTML += div1;
	var box3One = document.getElementsByClassName('box3One');
	if(k%2==0){
		box3One[k].style.float = 'left';
	}else{
		box3One[k].style.float = 'right';
	}
}
var select1 = document.getElementById('select1');
var img1 =select1.firstElementChild;
var mouse =document.getElementById('mouse');
var img2 = mouse.firstElementChild;
var list2 = listData.listData02.data.list;
select1.onmouseover = function(){
	time(0);
	select1.onclick =function(){
		img2.src = 'img/list_gomore_bg_nomore.jpg';
		select1.style.display = 'none';
	}
}
clearInterval(time.c);
select1.onmouseout =function(){
	console.log(img1.offsetTop)
	time(-select1.offsetHeight);
}
function time(target){
	clearInterval(time.c);
	time.c = setInterval(function(){
		var leader = img1.offsetTop;
		console.log(leader)
		var step = 2;
		if(leader >target){
			step = -step;
		}
		if(leader <target){
			step = step;
		}
		if(target!=leader){
			leader = leader +step;
			img1.style.top = leader +'px';
		}else{
			clearInterval(time.c);
		}
	},20)
}
var boxlist =document.getElementsByClassName('boxlist');
var boxul2 = document.getElementsByClassName('boxul2');
boxul2[0].style.height = '150px';
//boxul2[1].style.height = '150px';
for(var j =0;j<boxlist.length;j++){
	boxlist[j].item =j;
	boxlist[j].onmouseover =function(){
		boxul2[this.item].style.display ='block';
		//animate(boxul2[this.item],boxulHeight);
	}
	boxlist[j].onmouseout =function(){
		boxul2[this.item].style.display ='none';
		//animate(boxul2[this.item],boxulHeight);
	}
}


/*function animate(obj,target){
		clearInterval(obj.time);
		//leader = leader+step;  当前位置= 当前位置+步数
		imgTell.style.width = "0px";
		var leader = obj.offsetHeight;//当前位置
		
		var step = 2;
		if(leader >target){
			step = -step;
		}
		if(leader <target){
			step = step;
		}
		obj.time = setInterval(function(){
			if(leader!=target){
				leader = leader+step;
				obj.style.height = leader+'px';
			}else{
				clearInterval(obj.time);
			}
			console.log('定时器');
			console.log(leader+'当前位置');
		},10);
		
}*/