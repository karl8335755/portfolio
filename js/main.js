$(document).ready(function(){

  	//intro

    if($(window).width()<=1100){
      $('#intro').remove();
      $('.bannertext h1').animate({opacity:'1'},1000);
    }
    $('#intro').on('ended click',function(){
      $(this).fadeOut(500,function(){
        $(this).remove();
        $('.bannertext h1').animate({opacity:'1'},500);
      });
    });    


    //arrow to projects
    $('#arrow').on('click',function(){
      $('html,body').animate({scrollTop:$('.banner').height()},1000);
    })
    //scroll effects
    // $(window).scroll(function(){
    //   //console.log($(window).scrollTop());
    //   if($(window).scrollTop()>630){
    //     $('#lrs,#moemoe').animate({left:0},1000);
    //   }
    //   if($(window).scrollTop()>1000){
    //     $('#app').addClass('rotate');
    //   }
    //   if($(window).scrollTop()>1630){
    //     $('#boost,#vivi').animate({left:0},1000);
    //   }
    // });
    
});