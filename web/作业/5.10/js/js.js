var tishiyu = document.getElementById('tishiyu');
var shoujihao = document.getElementById('shoujihao');
shoujihao.onfocus = function(){
	tishiyu.innerHTML = '请输入11位手机号码，仅支持大陆地区手机号。';
	tishiyu.style.color= '#999';
}
shoujihao.onblur = function(){
	var phone = shoujihao.value;
	var tishiyu3 = /^[1][3,4,5,7,8][0-9]{9}$/;
	if(phone == ''){
		tishiyu.innerHTML = "<span style='width:20px;height:20px;border-radius:10px;color:white;background:red;display:inline-block;text-align:center'>!</span>&nbsp;手机号不能为空";
		tishiyu.style.color = 'red';
		shoujihao.style.borderColor = 'red';
	}else{
		if(phone.length != 11){
			tishiyu.innerHTML = "<span style='width:20px;height:20px;border-radius:10px;color:white;background:red;display:inline-block;text-align:center'>!</span>&nbsp;手机号长度为11位数字！";
			tishiyu.style.color = 'red';
			shoujihao.style.borderColor = 'red';
		}else{
			if(tishiyu3.test(phone) != true){
				tishiyu.innerHTML = "<span style='width:20px;height:20px;border-radius:10px;color:white;background:red;display:inline-block;text-align:center'>!</span>&nbsp;手机号格式不正确！";
				tishiyu.style.color = 'red';
				shoujihao.style.borderColor = 'red';
			}else{
				tishiyu.innerHTML = "<span style='width:20px;height:20px;border-radius:10px;color:white;background:dodgerblue;display:inline-block;text-align:center'>√</span>";
			}
		}
	}
}
var pw = document.getElementById('xiaoyanzheng');
var hq = document.getElementById('bottom');
hq.onclick = function(){
	var sj = parseInt(Math.random()*999999);
	
}
