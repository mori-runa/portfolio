$(function(){
  // jsをすべて読み終えてから動作する

  // トップに戻るボタンのスムーススクロール。クリックしたときにするすると戻る
  $(".toTop img").click(function(){
      // toTopのimgがクリックされたら
      $("html,body").animate({scrollTop:0}, 500);
      // ページのtopまで0.5秒かけてアニメーションされる

  });

  $(window).scroll(function (){

    $('.js-fade').each(function(){

      var pos = $(this).offset().top;

      var scroll = $(window).scrollTop();

      var windowHeight = $(window).height();

      if (scroll > pos - windowHeight + 100){

        $(this).addClass('scroll')
        ;
      }

    });

  });

  // $(document).ready(function () {

  //   $('.container').on('mouseover', function () {

  //       $(this).children('.caption').stop().fadeIn();

  //   });

  //   $('.container').on('mouseout', function () {

  //       $(this).children('.caption').stop().fadeOut();

  //   });
  
  // });


  
});