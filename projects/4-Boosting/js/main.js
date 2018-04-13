$(document).ready(function(){

  //scroll effects
  $(window).scroll(function(){
    //console.log($(window).scrollTop());
    if($(window).scrollTop()>300){
      $('.section1 img').animate({left:0},1000);
      $('.section1 h3').animate({right:0},500);
      $('.section1 h4').animate({right:0},750);
      $('.section1 p').animate({right:0},1000);
      $('.section1 li').animate({'opacity':'1'},2000);
    }
    if($(window).scrollTop()>900){
      $('.section2 h3').animate({'opacity':'1'},100);
      $('.section2 .one').animate({left:0},500);
      $('.section2 .two').animate({left:0},750);
      $('.section2 .three').animate({left:0},1000);
      $('.section2 img').animate({'opacity':'1'},3000);
    }
  });
  $('#login').on('click',function(){
    $('.login').css("display","block").animate({'z-index':'99'},100);
  })

  $('.close').on('click',function(){
    $('.login').css("display","none").animate({'z-index':'-1'},100);
  })

});
