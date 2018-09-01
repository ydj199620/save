$(function(){
	setInterval(function(){
		var json ={
			'left':'15'
		}
		if($('.video').find('img').css('left')=='15px'){
			$('.video').find('img').stop().css('left','8px')
		}else{
			$('.video').find('img').stop().animate(json,500);
		}
	},500)
	var left1 = 0;
	setInterval(function(){
		if(parseInt($('.wenzi-wrap1').css('left'))>=-793.56){
			left1 = left1-1;
			$('.wenzi-wrap1').css({
				'left':left1+'px'
			});
		}else{
			left1 = 0;
			$('.wenzi-wrap1').css({
				'left':'0'
			});
		}
	},50)
	setInterval(function(){
		if(parseInt($('.wenzi-wrap2').css('left'))>=-440){
			left1 = left1-1;
			$('.wenzi-wrap2').css({
				'left':left1+'px'
			});
		}else{
			left1 = 0;
			$('.wenzi-wrap2').css({
				'left':'0'
			});
		}
	},50)
	var json={
		'opacity':'1'
	};
	var index;
	var obj=[{
		'top': '501px',
    	'left': '4px',
	    'width': '250px',
	    'height': '597px'
	},{
		'top': '457px',
    	'left': '-110px',
    	'width': '206px',
    	'height': '498px'
	},{
		'top': '377px',
    	'left': '3px',
    	'width': '228px',
   	 	'height': '485px'
	},{
		'top': '609px',
    	'left': '0',
    	'width': '228px',
    	'height': '485px'
	},{
		'top': '607px',
   		'left': '0',
   		'width': '227px',
    	'height': '421px'
	},{
		'top': '566px',
    	'left': '-26px',
    	'width': '194px',
    	'height': '560px'
	},{
		'top': '611px',
    	'left': '4px',
    	'width': '247px',
    	'height': '557px'
	}]
	$('.prople_ul').children('li').mouseover(function(){
		index=$(this).index();
		json.top=obj[index].top;
		json.left=obj[index].left;
		json.width=obj[index].width;
		json.height=obj[index].height;
		$(this).find('span').slideUp(300);
		$(this).siblings().find('span').slideDown(300);
		$('.images').children('li').eq(index).show().addClass('animated bounceInLeft').siblings().stop().hide().removeClass('bounceInLeft');
		$('.wenzibox').children('li').eq(index).css('display','block').stop().animate(json,1000,'elasticOut').siblings().stop().css({
			'opacity':'0',
			'top':'0',
			'left':'0',
			'height':'0',
			'width':'0'
		}).hide();
		$('.title-left').children('li').eq(index).show().addClass('animated bounceInRight').siblings().hide().removeClass('bounceInRight');
		$('.title-right').children('li').eq(index).show().addClass('animated bounceInRight').siblings().hide().removeClass('bounceInRight');
		/* .catch(function(e){
			// console.log("a.play catch>", e);
		 }) */
	})
	$('.prople_ul').children('li').click(function(){
		$('.audio1').attr('src','music/m'+(index+1)+'_1.mp3');
		$('.audio1').attr('autoplay','autoplay')
	})
	/*$('.prople_ul').children('li').mouseout(function(){
		$('.wenzibox').children('li').eq(index).siblings().css({
			'opacity':'0',
			'top':'0',
			'left':'0',
			'height':'0',
			'width':'0'
		});
	})*/
})
