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
    //获取数据
    var index2 =0;
    var index3=0;
    aa();
    function aa(){
        var lists = listData['listData0'+index2];
        if(lists){
            var lis = lists.data.list;
            var b;
            for(var i =0;i<lis.length;i++){
                b =$('.first-wrap').html().replace("$img$",lis[i].coverImg)
                                        .replace("$title$",lis[i].title)
                                        .replace('$time$',lis[i].creatAt)
                                        .replace('$des$',lis[i].describe)
                                        .replace('$p1$',lis[i].p1)
                                        .replace('$p2$',lis[i].p2)
                                        .replace('$lujing$',lis[i].sysId);
                $('#mainContent').append(b);
                if(index3%2==0){
                    $('.first').eq(index3).addClass('marginR');
                }
                index3++;
            }
        }else{
            $('#more').find('img').attr('src','img/img_one/nothing.png');
        }
        $('#mainContent').on('click','.first',function(){
           var luJ=$(this).attr('fasong');
           console.log(luJ)
            window.open('article.html?xiaoniaoNews'+luJ,'_blank');
        })
    }
    $('#more').find('img').click(function(){
        index2++;
        aa();
    })
})
