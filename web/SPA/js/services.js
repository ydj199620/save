$(function(){
    $('#headerContant').load('header.html');
    $('#footerContent').load('footer.html');
    $('.Bgwhite>em').children('span').click(function(){
        var index1 = $(this).index();
        $(this).addClass('yincang2').siblings().removeClass('yincang2');
        $('.Bgwhite>div').hide().eq(index1).fadeIn(300);
    })
    $('button').click(function(){
        window.open('learnmore.html')
    })
})