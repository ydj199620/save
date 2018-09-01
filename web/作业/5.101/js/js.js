var iphone = document.getElementById('iphone');
var tishiyu = document.getElementById('tishiyu');
iphone.onfocus = function(){
	tishiyu.innerHTML = '请输入11位手机号码，仅支持大陆地区手机号。';
	tishiyu.style.color= '#999';
	iphone.style.borderColor= '#cdcdcd';
}
iphone.onblur =function(){
	var a = iphone.value;
	var b = /^1[3|4|5|7|8][0-9]{9}$/;
	if(a == ''){
		tishiyu.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;手机号不能为空！"
		tishiyu.style.color = 'red';
		iphone.style.borderColor = 'red';
	}else{
		if(a.length != 11){
			tishiyu.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;手机号长度为11位数字！"
			tishiyu.style.color = 'red';
			iphone.style.borderColor = 'red';
		}else{
			if(b.test(a) != true){
				tishiyu.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;手机号格式不正确！"
				tishiyu.style.color = 'red';
				iphone.style.borderColor = 'red';
			}else{
				tishiyu.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:lawngreen;background:dodgerblue;text-align:center;border-radius:10.5px;'>√</span>"
			}
		}
	}
}
var bottom = document.getElementById('bottom');
var xiaoyanzheng = document.getElementById('xiaoyanzheng');
var tishiyu1 = document.getElementById('tishiyu1');
var daojishi = document.getElementById('daojishi');
var tishiyu12 = document.getElementById('tishiyu12');
var e;
bottom.onclick = function(){
	clearInterval(e);
	var d = 60;
	var c = parseInt(Math.random()*1000000);
	xiaoyanzheng.style.borderColor= '#cdcdcd';
	e = setInterval(function aa(){
		if(d == 0){
			tishiyu1.innerHTML = '请重新获取验证码';
			daojishi.innerHTML = d;
			clearInterval(e);
			d = 60;
		}else{
			daojishi.innerHTML = d;
			tishiyu1.innerHTML = c;
			d--;
		}
	},1000)
}
xiaoyanzheng.onblur = function(){
	if(xiaoyanzheng.value == ''){
		tishiyu12.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;验证码不能为空！"
		tishiyu12.style.color = 'red';
		xiaoyanzheng.style.borderColor = 'red';
	}else{
			if(tishiyu1.innerHTML != xiaoyanzheng.value){
			tishiyu12.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;验证码不正确！"
			tishiyu12.style.color = 'red';
		}else{
			tishiyu12.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:lawngreen;background:dodgerblue;text-align:center;border-radius:10.5px;'>√</span>"
			xiaoyanzheng.style.borderColor= '#cdcdcd';
		}
	}
}
var pd = document.getElementById('pd');
var tishiyu2 = document.getElementById('tishiyu2');
pd.onfocus = function(){
	tishiyu2.innerHTML = '密码由6-30位的英文字母、数字和特殊字符组成，请使用强度较高的密码。';
	tishiyu2.style.color= '#999';
	pd.style.borderColor= '#cdcdcd';
}
pd.onblur =function(){
	var ab = pd.value;
	if(ab == ''){
		tishiyu2.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;密码不能为空！"
		tishiyu2.style.color = 'red';
		pd.style.borderColor = 'red';
	}else{
		if(ab.length>30||ab.length<6){
			tishiyu2.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;密码长度应在6-30个字符之间！"
			tishiyu2.style.color = 'red';
			pd.style.borderColor = 'red';
		}else{
			tishiyu2.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:lawngreen;background:dodgerblue;text-align:center;border-radius:10.5px;'>√</span>"
		}
	}
}
var pd2 = document.getElementById('pd2');
var tishiyu3 = document.getElementById('tishiyu3');
pd2.onfocus = function(){
	tishiyu3.innerHTML = '请再次填写一遍密码，以辅助检测密码输入是否正确。 ';
	tishiyu3.style.color= '#999';
	pd2.style.borderColor= '#cdcdcd';
}
pd2.onblur =function(){
	if(pd2.value == ''){
		tishiyu3.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;确认密码不能为空！"
		tishiyu3.style.color = 'red';
		pd2.style.borderColor = 'red';
	}else{
		if(pd2.value != pd.value){
			tishiyu3.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;两次密码输入的不一致！"
			tishiyu3.style.color = 'red';
			pd2.style.borderColor = 'red';
		}else{
			tishiyu3.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:lawngreen;background:dodgerblue;text-align:center;border-radius:10.5px;'>√</span>"
		}
	}
}
var name1 = document.getElementById('name1');
var tishiyu4 = document.getElementById('tishiyu4');
name1.onfocus = function(){
	tishiyu4.innerHTML = '按本人有效身份证件填写。';
	tishiyu4.style.color= '#999';
	name1.style.borderColor= '#cdcdcd';
}
name1.onblur =function(){
	var bb = name1.value;
	var cc =  /^[\u4E00-\u9FA5A-Za-z]+$/;
	if(bb == ''){
		tishiyu4.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;姓名不能为空！"
		tishiyu4.style.color = 'red';
		name1.style.borderColor = 'red';
	}else{
		if(cc.test(bb) != true){
			tishiyu4.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;姓名设置不正确！"
			tishiyu4.style.color = 'red';
			name1.style.borderColor = 'red';
		}else{
			tishiyu4.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:lawngreen;background:dodgerblue;text-align:center;border-radius:10.5px;'>√</span>"
		}
	}
}
var zhengjianhao = document.getElementById('zhengjianhao');
var tishiyu5 = document.getElementById('tishiyu5');
zhengjianhao.onfocus = function(){
	tishiyu5.innerHTML = '请认真核对您的证件号码，证件号码一经提交不能修改。';
	tishiyu5.style.color= '#999';
	zhengjianhao.style.borderColor= '#cdcdcd';
}
zhengjianhao.onblur =function(){
	var dd = zhengjianhao.value;
	var ff =  /^\d{15}$|^\d{17}[0-9Xx]$/;
	if(dd == ''){
		tishiyu5.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;姓名不能为空！"
		tishiyu5.style.color = 'red';
		zhengjianhao.style.borderColor = 'red';
	}else{
		if(ff.test(dd) != true){
			tishiyu5.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;身份证号格式有误！"
			tishiyu5.style.color = 'red';
			zhengjianhao.style.borderColor = 'red';
		}else{
			tishiyu5.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:lawngreen;background:dodgerblue;text-align:center;border-radius:10.5px;'>√</span>"
		}
	}
}
var email1 = document.getElementById('email1');
var tishiyu6 = document.getElementById('tishiyu6');
email1.onfocus = function(){
	tishiyu6.innerHTML = '请设定一个安全邮箱，忘记密码时可通过此邮箱找回密码。';
	tishiyu6.style.color= '#999';
	email1.style.borderColor= '#cdcdcd';
}
email1.onblur =function(){
	var gg = email1.value;
	var hh =  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	if(gg==''){
		tishiyu6.innerHTML = '请设定一个安全邮箱，忘记密码时可通过此邮箱找回密码。';
		tishiyu6.style.color= '#999';
		email1.style.borderColor= '#cdcdcd';
	}else{
		if(hh.test(gg) != true){
			tishiyu6.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;邮箱地址不正确！"
			tishiyu6.style.color = 'red';
			email1.style.borderColor = 'red';
		}else{
			tishiyu6.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:lawngreen;background:dodgerblue;text-align:center;border-radius:10.5px;'>√</span>"
		}	
	}
}
var bottom1 = document.getElementById('bottom1');
/*console.log(tishiyu7);
console.log(panduan)*/
var zz = false;
bottom1.onclick = function(){
	var a = iphone.value;
	var b = /^1[3|4|5|7|8][0-9]{9}$/;
	if(a == ''){
		tishiyu.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;手机号不能为空！"
		tishiyu.style.color = 'red';
		iphone.style.borderColor = 'red';
		zz=false
	}else{
		if(a.length != 11){
			tishiyu.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;手机号长度为11位数字！"
			tishiyu.style.color = 'red';
			iphone.style.borderColor = 'red';
			zz=false
		}else{
			if(b.test(a) != true){
				tishiyu.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;手机号格式不正确！"
				tishiyu.style.color = 'red';
				iphone.style.borderColor = 'red';
			}else{
				tishiyu.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:lawngreen;background:dodgerblue;text-align:center;border-radius:10.5px;'>√</span>"
				zz = true;
			}
		}
	}
	if(xiaoyanzheng.value == ''){
		tishiyu12.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;验证码不能为空！"
		tishiyu12.style.color = 'red';
		xiaoyanzheng.style.borderColor = 'red';
		zz=false
	}else{
			if(tishiyu1.innerHTML != xiaoyanzheng.value){
			tishiyu12.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;验证码不正确！"
			tishiyu12.style.color = 'red';
			zz=false
		}else{
			tishiyu12.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:lawngreen;background:dodgerblue;text-align:center;border-radius:10.5px;'>√</span>"
			xiaoyanzheng.style.borderColor= '#cdcdcd';
			zz = true;
		}
	}console.log(zz)
	var ab = pd.value;
	if(ab == ''){
		tishiyu2.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;密码不能为空！"
		tishiyu2.style.color = 'red';
		pd.style.borderColor = 'red';
		zz=false
	}else{
		if(ab.length>30||ab.length<6){
			tishiyu2.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;密码长度应在6-30个字符之间！"
			tishiyu2.style.color = 'red';
			pd.style.borderColor = 'red';
			zz=false
		}else{
			tishiyu2.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:lawngreen;background:dodgerblue;text-align:center;border-radius:10.5px;'>√</span>"
			zz = true;
		}
	}
	if(pd2.value == ''){
		tishiyu3.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;确认密码不能为空！"
		tishiyu3.style.color = 'red';
		pd2.style.borderColor = 'red';
		zz=false
	}else{
		if(pd2.value != pd.value){
			tishiyu3.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;两次密码输入的不一致！"
			tishiyu3.style.color = 'red';
			pd2.style.borderColor = 'red';
			zz=false
		}else{
			tishiyu3.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:lawngreen;background:dodgerblue;text-align:center;border-radius:10.5px;'>√</span>"
			zz = true;
		}
	}
	var bb = name1.value;
	var cc =  /^[\u4E00-\u9FA5A-Za-z]+$/;
	if(bb == ''){
		tishiyu4.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;姓名不能为空！"
		tishiyu4.style.color = 'red';
		name1.style.borderColor = 'red';
		zz=false
	}else{
		if(cc.test(bb) != true){
			tishiyu4.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;姓名设置不正确！"
			tishiyu4.style.color = 'red';
			name1.style.borderColor = 'red';
			zz=false
		}else{
			tishiyu4.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:lawngreen;background:dodgerblue;text-align:center;border-radius:10.5px;'>√</span>"
			zz = true;
		}
	}
	var dd = zhengjianhao.value;
	var ff =  /^\d{15}$|^\d{17}[0-9Xx]$/;
	if(dd == ''){
		tishiyu5.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;姓名不能为空！"
		tishiyu5.style.color = 'red';
		zhengjianhao.style.borderColor = 'red';
		zz=false
	}else{
		if(ff.test(dd) != true){
			tishiyu5.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;身份证号格式有误！"
			tishiyu5.style.color = 'red';
			zhengjianhao.style.borderColor = 'red';
			zz=false
		}else{
			tishiyu5.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:lawngreen;background:dodgerblue;text-align:center;border-radius:10.5px;'>√</span>"
			zz = true;
		}
	}
	var gg = email1.value;
	var hh =  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	if(gg==''){
		tishiyu6.innerHTML = '请设定一个安全邮箱，忘记密码时可通过此邮箱找回密码。';
		tishiyu6.style.color= '#999';
		email1.style.borderColor= '#cdcdcd';
		/*zz = true;*/
	}else{
		if(hh.test(gg) != true){
			tishiyu6.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:white;background:red;text-align:center;border-radius:10.5px;'>!</span>&nbsp;邮箱地址不正确！"
			tishiyu6.style.color = 'red';
			email1.style.borderColor = 'red';
			zz=false
		}else{
			tishiyu6.innerHTML = "<span style='width:21px;height:21px;display:inline-block;color:lawngreen;background:dodgerblue;text-align:center;border-radius:10.5px;'>√</span>"
			zz = true;
		}
	}
	if(zz == true){
		window.location.href = 'http://www.baidu.com';
	}
}
 