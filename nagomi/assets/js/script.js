$(function(){

    $(function() {
        $('body').fadeIn(1000); //1秒かけてフェードイン！
    });

    $('.btn-trigger').on('click', function() {
        $(this).toggleClass('active');
        return false;
    });

    $(function(){
        $('a[href^="#"]:not([href="#"])').click(function(){
            // aのところが#から始まっているもの　かつ　#一文字ではないもの
            // a[属性セレクタ(^=は～で始まる要素)]
            // :not([条件])　()うちの条件ではないもの
    
            var target = $($(this).attr("href")).offset().top;
                // 先ほど選択したaのうちクリックしたaタグのリンクの拾って距離を図る
    
            target -=70;
                // 変数targetの数字から70減らす(-だけだとtargetの値が７０になる)
    
            $("html,body").animate({scrollTop: target}, 500);
                // htmlとbody両方入れることによってブラウザのバグを防ぐ
                // ページ全体を{何をどう動かすか：クリックした飛ばしたい位置}０．５秒かけて
                // animateで出てくるscrollTopは違う意味になる
    
            return false;
                // aタグのリンクに飛ばないようにする
        })
    });

    $(function () {
        var fadeIn = $('.fade-in');
        $(window).scroll(function () {
          $(fadeIn).each(function () {
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop(); 
            var windowHeight = $(window).height();
            if (scroll > offset - windowHeight + 110) {
              $(this).addClass("scroll-in");
            }
          });
        });
    });

    $(function(){
        $(window).scroll(function (){
            $('.fadein').each(function(){
                var position = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > position - windowHeight + 200){
                    $(function(){
                        $('.fadein').each(function(i){
                            $(this).delay(i * 200).queue(function(){
                                $(this).addClass('active');
                            });
                        });
                    });
                }
            });
        });
    });	

    function fadeAnime(){

        // ふわっ
        $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
          var elemPos = $(this).offset().top-50;//要素より、50px上の
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll >= elemPos - windowHeight){
          $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
          }else{
          $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
          }
          });
      }
      
      // 画面をスクロールをしたら動かしたい場合の記述
        $(window).scroll(function (){
          fadeAnime();/* アニメーション用の関数を呼ぶ*/
        });// ここまで画面をスクロールをしたら動かしたい場合の記述
      
      // 画面が読み込まれたらすぐに動かしたい場合の記述
        $(window).on('load', function(){
          fadeAnime();/* アニメーション用の関数を呼ぶ*/
        });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
        
    

});