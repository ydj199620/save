window.onload = function(){
	var a = document.body;
	var b = document.getElementById('chun');
	var c = document.getElementById('xia');
	var d = document.getElementById('qiu');
	var e = document.getElementById('dong');
	a.style.background = 'url(img/chun.jpg)';
	a.style.backgroundSize = '100%';
	b.onmouseover = function(){
		a.style.background = 'url(img/chun.jpg)';
		a.style.backgroundSize = '100%';
	}
	c.onmouseover = function(){
		a.style.background = 'url(img/xia.jpg)';
		a.style.backgroundSize = '100%';
	}
	d.onmouseover = function(){
		a.style.background = 'url(img/qiu.jpg)';
		a.style.backgroundSize = '100%';
	}
	e.onmouseover = function(){
		a.style.background = 'url(img/dong.jpg)';
		a.style.backgroundSize = '100%';
	}
}
