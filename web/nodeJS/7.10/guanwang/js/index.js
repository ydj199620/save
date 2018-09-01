$(function(){
    var jsq = 0;
    var jsq1 = 0;
    var time;
    var jsonLBT;
    $('#headerContent').load('header.html');
    $('#mainContent').load('main.html');
    $('#footerContent').load('footer.html');
    //首页轮播
    aa();
    $('.lunbo').hover(function(){
        clearInterval(time);
        $('.biaodian').children('li').click(function(){
            var index = $(this).index()
            $(this).stop().css({
                'background':'url(img/point_h_dd3c18f.png) no-repeat',
                'width': '51px',
                'height': '15px'
            }).siblings().stop().css({
                'background':'url(img/point_e7ec0e8.png) no-repeat',
                'width': '15px',
                'height': '15px'
            })
            jsonLBT = {
                'left': -580*index+'px'
            }
            $('.lunbotuBox').animate(jsonLBT,300)
            jsq=index;
            jsq1=index;
        })
    },function(){
        aa();
    })
    var img1 = $('<li><img src="img/1af6f2bb-e1e3-493f-ae08-4b64a71dcc21.png"/></li>');
    $('.lunbotuBox').append(img1);
    function aa(){
        time=setInterval(function(){
           /*  console.log('jsq'+jsq)
            console.log('jsq1'+jsq1) */
            jsq++;
            if(jsq==$('.lunbotuBox').children('li').length){
                $('.lunbotuBox').css('left','0px');
                jsq=1;
            }
            jsq1++;
            $('.biaodian').children('li').css({
                'background':'url(img/point_e7ec0e8.png) no-repeat',
                'width': '15px',
                'height': '15px'
            })
            if(jsq1==$('.lunbotuBox').children('li').length-1){
                jsq1=0;
            }
            jsonLBT = {
                'left': -580*jsq+'px'
            }
            var json1={
                'width': '51px',
                'height': '15px'
            }
            var json2 ={
                'width': '15px',
                'height': '15px'
            }
            $('.lunbotuBox').stop().animate(jsonLBT,1000);
            $('.biaodian').children('li').eq(jsq1).stop().css('background','url(img/point_h_dd3c18f.png) no-repeat').animate(json1,500).siblings().stop().css('background','url(img/point_e7ec0e8.png) no-repeat').animate(json2,500)
        },2000)
        //console.log(jsq+'--'+jsq2)
      
        //return jsonLBT;
    }
    //视频
   $('.video1').click(function(){
     /*   var a = ( $(document).scrollTop());
        $('.video2').css('top',a+'px')  */
       $('.video2').css('display','inline-block');
       $('.video2').find('video').attr('src','video/ccc436549d7ab7fe28f93df3c32bca57qt.mp4');
       $('.video2').find('video').attr('controls','controls')
   })
   $('.video2').find('div').find('i').click(function(){
    $('.video2').css('display','none');
    $('.video2').find('video').removeAttr('src')
   })

   	//百叶窗
   $('.baiyechuang').children('.pictureUL').find('li').each(function(index){
    $('.baiyechuang').children('.pictureUL').find('li').eq(index).css({
            'left':(140*(index-1)+639)+'px'
        })
    $('.baiyechuang').children('.pictureUL').find('li').eq(0).css({
            'left':'0px'
     })
    $('.baiyechuang').children('.pictureUL').find('li').eq(0).find('img:first').css({
    	'width':'0',
    	'height':'350px'
    })
   })
 /*  $('.baiyechuang').children('.titleUL').find('li').each(function(index){
    $('.baiyechuang').children('.titleUL').find('li').eq(index).css({
            'left':(140*(index-1)+639)+'px'
        })
     $('.baiyechuang').children('.titleUL').find('li').eq(0).css({
            'left':'0px',
            'display':'none'
        })
   })*/
  	$('.baiyechuang').children('.pictureUL').find('li').mouseover(function(){
   		var index1=$(this).index();
   		var lis = $('.baiyechuang').children('.pictureUL').find('li');
   		lis.eq(index1).find('img:first').stop().fadeOut(300).css({
   			'width':'0',
    		'height':'350px',
   		});
   		$(this).stop().animate({'left':140*index1+'px'},500);
   		for(var i=0;i<index1;i++){
   			lis.eq(i).find('img:first').css({
   				'width':'140px',
    			'height':'350px'
   			}).fadeIn(300);
   			$('.baiyechuang').children('.pictureUL').find('li').eq(i).stop().animate({'left':140*i+'px'},500);
   		}
   		for(var j=index1+1;j<$('.baiyechuang').children('.pictureUL').find('li').length;j++){
   			lis.eq(j).find('img:first').css({
   				'width':'140px',
    			'height':'350px'
   			}).fadeIn(300);
   			$('.baiyechuang').children('.pictureUL').find('li').eq(j).stop().animate({'left':(140*(j-1)+639)+'px'},500);
   		}
   })
  	
  	//同人作品
  	$('.chuankouBox_main_bottom').find('ul').find('li').click(function(){
  		var index2 =$(this).index();
  		$(this).removeClass('off1').addClass('on1').siblings().addClass('off1')
  		$('.chuankouBox_main_main').children('div').animate({'left':-1200*index2+'px'},1000,'backIn')
      })
  	//遮罩效果
      $('.chuankouBox_top').each(function(index){
        $('.chuankouBox_top').eq(index).find('div:last').click(function(){
            if($('.chuankouBox_main').eq(index).hasClass('flag')){
                $('.chuankouBox_main').eq(index).fadeOut(800);
                $('.chuankouBox_main').eq(index).removeClass('flag');
            }else{
                $('.chuankouBox_main').hide(800);
                $('.chuankouBox_main').removeClass('flag');
                $('.chuankouBox_main').eq(index).addClass('flag');
                $('.chuankouBox_main').eq(index).fadeIn(800);
            }
        })
      })
  	
  	//音画专区
  	yinhuaLBT();
  	var j =0;
  	var k =0;
  	var timer1;
  	var clone =$('.yinhuaLBT>ul:first').clone(true);
  	$('.yinhuaLBT').append(clone);
  	$('.yinhuaZQ').hover(function(){
            clearInterval(timer1);
            $('.zuoyou>ul').find('li').fadeIn(500);
			$('.anniu').find('ul').find('li').click(function(){
				var index2=$(this).index();
				$('.anniu>ul').find('li').find('span').css('color','black');
	  			$('.anniu>ul').find('li').eq(index2).find('span').css('color','white');
				$('.anniu>ul').find('li').stop().eq(index2).addClass('anniuBG').find('s').css({'width':'0','left':'73px'}).animate({'width':'73px','left':'0px'},1000);
		  		$('.anniu>ul').find('li').stop().eq(index2).siblings().find('s').animate({'width':'0','left':'0px'},1000).removeClass('anniuBG');
		  		$('.anniu>ul').find('li').eq(index2).siblings().find('span').css('color','black');
				$('.yinhuaLBT').animate({'left':-1200*index2+'px'},1000,'backIn');
				j=index2;
				k=index2;
			})
	},function(){
        yinhuaLBT();
        $('.zuoyou>ul').find('li').fadeOut(500);
	})
  	function yinhuaLBT(){
  		timer1=setInterval(function(){
  			zuoyou();
  		},2000)
      }
    $('.zuoyou>ul>li:first').click(function(){
        zuoyou();
    })
    $('.zuoyou>ul>li:last').click(function(){
        if(j==0){
            j=4;
            $('.yinhuaLBT').css('left','-4800px');
        }
        if(k==0){
            k=4;
        }
        j--;
        k--;
        $('.yinhuaLBT').animate({'left':-1200*j+'px'},1000,'backIn');
        console.log( $('.yinhuaLBT').css('left'))
        $('.anniu>ul').find('li').find('span').css('color','black');
        $('.anniu>ul').find('li').eq(k).find('span').css('color','white');
        $('.anniu>ul').stop().find('li').eq(k).addClass('anniuBG').find('s').css({'width':'0','left':'73px'}).animate({'width':'73px','left':'0px'},1000);
        $('.anniu>ul').find('li').eq(k).siblings().find('s').animate({'width':'0','left':'0px'},1000).removeClass('anniuBG');
    })
    function zuoyou(){
        j++;
        k++;
        if(j>4){
            j=1;
            $('.yinhuaLBT').css('left','0');
        }
        if(k>3){
            k=0;
        }
        $('.yinhuaLBT').animate({'left':-1200*j+'px'},1000,'backIn');
        $('.anniu>ul').find('li').find('span').css('color','black');
        $('.anniu>ul').find('li').eq(k).find('span').css('color','white');
        $('.anniu>ul').stop().find('li').eq(k).addClass('anniuBG').find('s').css({'width':'0px','left':'73px'}).animate({'width':'73px','left':'0px'},1000);
        $('.anniu>ul').find('li').eq(k).siblings().find('s').animate({'width':'0px','left':'0px'},1000).removeClass('anniuBG');
      }
    
    
    //正则验证
    var zz = false;
    $('.btn').click(function(){
    	//电话
    	var a = $('.lianxidianhua').find('input')[0].value;
		var b = /^1[3|4|5|7|8][0-9]{9}$/;
		if(a == ''){
			$('.lianxidianhua').find('input').attr('placeholder','手机号码必填');
			zz=false
		}else{
			if(a.length != 11){
				$('.panduan').find('div').eq(2)[0].innerText='请输入正确的手机号!';
				$('.panduan').find('div').eq(2).css('color','red')
				zz=false
			}else{
				if(b.test(a) != true){
					$('.panduan').find('div').eq(2)[0].innerText='请输入正确的手机号!';
					$('.panduan').find('div').eq(2).css('color','red')
					zz=false
				}else{
					zz = true;
				}
			}
		}
		//姓名
		var bb = $('.mingzi').find('input')[0].value;
		var cc =  /^[\u4E00-\u9FA5A-Za-z]+$/;
		if(bb == ''){
			$('.mingzi').find('input').attr('placeholder','姓名必填');
			zz=false
		}else{
			if(cc.test(bb) != true){
				$('.panduan').find('div').eq(0)[0].innerText='请输入正确的姓名!';
				$('.panduan').find('div').eq(0).css('color','red');
				zz=false
			}else{
				zz = true;
			}
		}
		//邮箱
		var gg = $('.youxiang').find('input')[0].value;
		var hh =  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		if(gg==''){
			$('.youxiang').find('input').attr('placeholder','邮箱必填');
			zz=false;
		}else{
			if(hh.test(gg) != true){
				$('.panduan').find('div').eq(1)[0].innerText='请输入正确的邮箱!';
				$('.panduan').find('div').eq(1).css('color','red');
				zz=false;
			}else{
				zz=true;
			}	
		}
		//内容
		var dd = $('.text1').find('textarea')[0].value;
		if(dd==''){
			$('.text1').find('textarea').attr('placeholder','必填');
		}else{
			zz==true;
		}
		if(zz == true){
			window.location.href = 'http://www.baidu.com';
		}
    })
    
    
    //新闻简介
    $('.xinwenjianjie_top').children('ul').find('li').mouseover(function(){
    	var index2 =$(this).index();
    	$(this).addClass('open').siblings().removeClass('open');
    	$('.xinwenjianjie_wrap').stop().animate({'left':-584*index2+'px'},300);
    })
    
    
    //结尾
    $('.jiewei_first').hover(function(){
    	$(this).find('div:first').find('img').css('display','block').animate({
    		'left':'30px',
    		'top':'-30px',
    		'opacity':'0'
    	},500)
    },function(){
    	$(this).find('div:first').find('img').stop().css({
    		'left':'0px',
    		'top':'0px',
    		'opacity':'1',
    		'display':'none'
    	})
    })
    $('.jiewei_three').hover(function(){
    	$('.jiewei_three_yincang').css('display','block').animate({'opacity':'1'},500)
    },function(){
    	$('.jiewei_three_yincang').css('display','none').animate({'opacity':'0'},500)
    })
    
    
    //返回顶部
    $('#fanhuidingbu').click(function(){
    	$('body,html').animate({'scrollTop':'0'},1000);
    })

    //公众号
    $('#gongzonghao').children('img').click(function(){
        $(this).hide();
        $('#gongzonghao').css({
            'height':'360px',
            'width':'203px'
        });
        $('.gongzonghao_wrapone').show(300);
    })
    $('.gongzonghao_wrapone').children('img').click(function(){
        $('.gongzonghao_wrapone').hide();
        $('#gongzonghao').css({
            'height':'117px',
            'width':'38px'
        });
        $('#gongzonghao').children('img').show(300);
    })

    //返回顶部
    $(window).scroll(function(){
        var hideTop=$(window).scrollTop();
        if(hideTop>=$(window).height()){
            $('#fanhui').fadeIn(300);
        }else{
            $('#fanhui').fadeOut(300,function(){
                $('#fanhui').children('img').attr('src','img/fanhui.png');
            });
        }
    })
    $('#fanhui').click(function(){
        $('#fanhui').children('img').attr('src','img/startfanhui.png');
        $('body,html').animate({
            'scrollTop':'0'
        },1500)
    })
})