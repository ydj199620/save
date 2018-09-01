$(document).ready(function(){
    $('#headerContent').load('header.html');
    $('#footerContent').load('footer.html');
    $(window).scroll(function(){
        var hideTop=$(window).scrollTop();
        if(hideTop>=200/* $(window).height() */){
            $('#fanhui').fadeIn(300);
        }
        if(hideTop<200){
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
    var a=window.location.href.split('?');
    var b=a[a.length-1];
    console.log(b);
    var articlelists = articleData[b];
    if(articlelists){
        $('.title').html(articlelists.data.typeTitle);
        $('.title-two').html(articlelists.data.typeEntitle);
        $('.title-three').html(articlelists.data.title);
        $('.time>span:first').html(articlelists.data.updateAt);
        $('.time>span:last').html(articlelists.data.updateByFullName);
        $('.img1').attr('src',articlelists.data.coverImg);
        $('.img2').attr('src',articlelists.data.img1);
        $('.neirong').html(articlelists.data.content);
    }
    $('.aixin>div:first').click(function(){
        var panduan = $('.dianzan').find('span').html();
       if(panduan!=21){
        $('.dianzan').find('span').html(21);
        $(this).css('background-position-Y','-73px');
       }else{
        $('.dianzan').find('span').html(20);
        $(this).css('background-position-Y','0px');
       }
    });
})