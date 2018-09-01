var miusicBoxUl = document.getElementById('miusicBoxUl');
var miusicLi = miusicBoxUl.children;
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