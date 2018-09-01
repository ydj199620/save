$(function(){
    $('#headerContant').load('header.html');
    $('#footerContent').load('footer.html');
  /*   var text1;
    $('.input1').focus(function(){
        text1=$(this).val();
        $(this).val('');
    })
    $('.input1').blur(function(){
        if($(this).val()==''){
            $(this).val(text1);
        }else{
            var text2=$(this).val();
            $(this).val(text2);
        }
    })
    $('.input2').focus(function(){
        text1=$(this).val();
        $(this).val('');
    })
    $('.input2').blur(function(){
        if($(this).val()==''){
            $(this).val(text1);
        }else{
            var text2=$(this).val();
            $(this).val(text2);
        }
    }) */
    var text1;
    $('.input1').focus(function(){
        text1 = $(this).attr('placeholder');
        $(this).attr('placeholder','');
    })
    $('.input1').blur(function(){
        $(this).attr('placeholder',text1);
    })
    $('.input2').focus(function(){
        text1 = $(this).attr('placeholder');
        $(this).attr('placeholder','');
    })
    $('.input2').blur(function(){
        $(this).attr('placeholder',text1);
    })
})