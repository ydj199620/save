$(function(){
    $('.nav_1').hover(function(){
        $(this).find('a').css({'color':'#fdda46','text-shadow':'1px 1px skyblue'});
    },function(){
        $(this).find('a').css({'color':'white','text-shadow':'0px 0px '});
    })
    $('.nav').hover(function(){
        $(this).find('a').css({'color':'#fdda46','text-shadow':'1px 1px skyblue'});
        $(this).stop().find('ul').slideDown(500,'elasticOut');
    },function(){
        $(this).find('a').css({'color':'white','text-shadow':'0px 0px '});
        $(this).stop().find('ul').hide();
    })
    $('.nav_2').hover(function(){
        $(this).find('a').css({'color':'#fdda46','text-shadow':'1px 1px skyblue'});
        $(this).stop().find('div').show(300);
    },function(){
        $(this).find('a').css({'color':'white','text-shadow':'0px 0px '});
        $(this).stop().find('div').hide(300);
    })
    var json = {
       	'width':'100%',
        'height':'1080px',
        'top':'0',
        'left':'0'
    }
    $('.background_one').animate(json,500);
})
