$(function(){
	var height1=$(window).height();
	var jfq=0;
    var jfq2=0;
    var tag=true;
    //开机动画
    $('.title, #index_one,#index_two').css('height',$(window).height()+'px');
    $('.title').children('p').delay(2000).show().animate({'top':'10%'},1000).addClass('animated fadeInUp');
    $('.title-p').delay(3000).show().animate({'bottom':'0'},1000).addClass('animated fadeInUp');
    $('#index_one').dblclick(function(){
        $('#index_one').slideUp(1000,function(){
			tag=true;
			jfq2=0;
		}); 
        $('.title').children('p').delay(2000).hide().animate({'top':'-100%'},1000).removeClass('animated fadeInUp');
        $('.title-p').delay(3000).hide().animate({'bottom':'-60px'},1000).removeClass('animated fadeInUp');
   })
    setTimeout(function(){
        $('#index_one').slideUp(1000,function(){
			tag=true;
			jfq2=0;
		});
        $('.title').children('p').delay(2000).hide().animate({'top':'-100%'},1000).removeClass('animated fadeInUp');
        $('.title-p').delay(3000).hide().animate({'bottom':'-60px'},1000).removeClass('animated fadeInUp');
    },6000);


    //内容盒子
    $('.main_wrap,.main-wrap-li,.main-wrap-wrap,.main-two,.main-three,.main-three-one,.main-four').css({
        'height':$(window).height()+'px',
        'width':($(window).width()-203)+'px'
    })
    //第一部分
    var a= 0;
    $('.huadong>span:last').click(function(){
    	a++;
    	if(a>2){
    		a=2;
    		$(this).fadeOut(1000);
    	}else{
    		$('.main-wrap-ul').animate({'left':-($(window).width()-203)*a+'px'},500);
    		$('.huadong>span:first').fadeIn(1000);
    	}
    })
     $('.huadong>span:first').click(function(){
    	a--;
    	if(a<0){
    		a=0;
    		$(this).fadeOut(1000);
    	}else{
    		$('.main-wrap-ul').animate({'left':-($(window).width()-203)*a+'px'},500);
    		$('.huadong>span:last').fadeIn(1000);
    	}
    })

    //第二部分
   
   	function second(){
    /*if(hideTop==-height1){*/
        $('.animate1').animate({'left':'0'},1000);
        $('.animate2').animate({'left':'360px'},1000);
        var jsq=0;
        setTimeout(function(){
            $('.main-two-top:first').animate({'top':'0'},1000,function(){
                $('.main-two-top>div>div').show(300);
            });
            $('.main-two-top').children('div').css({'border-radius':'120px 0px'});
		},1500)
		setTimeout(function(){
			setInterval(function(){
				if(jsq>5){
					jsq=0;
				}
				$('.main-two-top>div').removeClass('faguang');
				$('.main-two-top>div').eq(jsq).addClass('faguang');
				jsq++;
			},1000)
		},2500)
      }
    //第三部分
    $('.main-three-first').click(function(){
        $('.main-three-dongman').show(300);
    })
    $('.main-three-dongman>div:last').click(function(){
        $('.main-three-dongman').hide(300);
    })
    $('.main-three-second').click(function(){
        $('.main-three-dongman2').show(300);
    })
    $('.main-three-dongman2>div:last').click(function(){
        $('.main-three-dongman2').hide(300);
    })
    var jsq2=0;
    $('.qiehuan-right').click(function(){
        jsq2++;
        if(jsq2>1){
            jsq2=1;
        }
        $('.main-three-wrap').animate({'left':-100*jsq2+'%'},1000);
        $(this).find('div').animate({'width':'100%'},1000);
        $('.qiehuan-left').find('div').animate({'width':'0'},1000)
    })
    $('.qiehuan-left').click(function(){
        jsq2--;
        if(jsq2<0){
            jsq2=0;
        }
        $('.main-three-wrap').animate({'left':-100*jsq2+'%'},1000);
        $(this).find('div').animate({'width':'100%'},1000);
        $('.qiehuan-right').find('div').animate({'width':'0'},1000)
    })
	
	
	//呼吸灯
	setInterval(function(){
		setTimeout(function(){
			$('.main-huxideng').children('div').find('em').fadeIn(500)
		},1000)
		setTimeout(function(){
			$('.main-huxideng').children('div').find('em').fadeOut(500)
		},2000)
	})
    
	//整屏幕滑动
	var tag2=true;
    function huadong(){
    	tag=false;
    	$('.main-wrap-wrap>div').animate({'top':-height1*jfq+'px'},1000,function(){
    		jfq2=0;
    		tag=true;
		});
		$('.nav>div').eq(jfq+1).addClass('bianse').siblings().removeClass('bianse');
    	if(jfq==1){
    		$('.main-wrap-wrap>div').animate({'top':-height1*jfq+'px'},1000,function(){
    			if(tag2){
					second(); 
					tag2=false;
				}
    			jfq2=0;
    			tag=true;
    		});
		}
    }
    var scrollF =function(){
    	var event =event || window.event;
    	if(event.details){
    		if(event.details>0){
    			//屏幕向下滑动
    			if(tag){
    				if(jfq2>0){
    					jfq++;
	    				if(jfq>3){
	    					jfq=3
	    				}
    					huadong();
    				}
    			}
    		}else{
    			setTimeout(function(){
    				jfq2++;
    			},100)
    		}
    		if(event.details<0){
    			//屏幕向上滑动
    			if(tag){
    				if(jfq2>0){
	    				jfq--;
	    				if(jfq<0){
	    					jfq=0;
	    				}
	    				huadong();
    				}
    			}
    		}else{
    			setTimeout(function(){
    				jfq2++;
    			},100)
    		}
    	}
    	if(event.wheelDelta){
    		if(event.wheelDelta>0){
    			//屏幕向上滑动
    			if(tag){
    				if(jfq2>0){
	    				jfq--;
	    				if(jfq<0){
	    					jfq=0;
	    				}
	    				huadong();
    				}
    			}
    		}else{
    			setTimeout(function(){
    				jfq2++;
    			},100)
    		}
    		if(event.wheelDelta<0){
    			//屏幕向下滑动
    			if(tag){
    				if(jfq2>0){
    					jfq++;
	    				if(jfq>3){
	    					jfq=3
	    				}
    					huadong();
    				}
    			}
    		}else{
    			setTimeout(function(){
    				jfq2++;
    			},100)
    		}
    	}
    }
    if(document.addEventListener){
    	document.addEventListener('DOMMouseScroll',scrollF,false);
    }
	window.onmousewheel=document.onmousewheel=scrollF;
	$('.nav>div:first').siblings().click(function(){
		jfq=$(this).index()-1;
		huadong();
	})
	$('.nav>div:last').click(function(){
		window.open('index.html');
	});
	var hash1 =window.location.hash;
	if(hash1){
		var jfq3 = hash1.slice(1);
		$('#index_one').slideUp(1,function(){
			tag=true;
			jfq2=0;
		});
		if(jfq3<4&&jfq3>=0){
			jfq=Number(jfq3);
			huadong();
		}
	}
})