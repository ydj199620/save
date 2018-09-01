$(function(){
   var tag=true;
   $('.nav-anniu').click(function(){
        if(tag){
            $('.top-center').find('ul').slideDown(1000);
        }else{
            $('.top-center').find('ul').slideUp(1000);
        }
        tag =!tag;
    })
})