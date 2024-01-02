$(function(){
    // jsをすべて読み終えてから動作する

    // トップに戻るボタンのスムーススクロール。クリックしたときにするすると戻る
    $(".toTop img").click(function(){
        // toTopのimgがクリックされたら
        $("html,body").animate({scrollTop:0}, 500);
        // ページのtopまで0.5秒かけてアニメーションされる

    });

    // ドロップダウンメニュー
    $("#navi").children("li").hover(function(){
        // ホバーしたら
        $(this).children("ul").stop().slideToggle(300);
        // hoverされた子要素のulが0.3秒かけてslidToggleされる。下にメニューバー
    });

    // stickyしたらナビゲーションに影をつける処理
    $(window).scroll(function(){
        if($("nav").offset().top == $(window).scrollTop()){
                // ナビの上につくときと画面をスクロールして上についたときに

                $("nav ul").css("box-shadow","0 5px 5px rgba(0,0,0,0.5)");
                // 影をつける
        } else{

            $("nav ul").css("box-shadow","none");
            // 影をなくす

        }

    });

    // slickの起動
    $(".slide").slick({
        autoplay:true,
            // 自動再生をオンにする
        fade:true,
            // スライドショーからフェードアウトに切り替わる
        autoplayspeed:800,
            // 0.8秒たてば動き出す
        speed:3500,
            // ゆっくりと3.5秒かけて変わる
        arrows:false,
        // 矢印の表示をなくす
        pauseOnFocus:false,
        pausOneHover:false,
        pauseOnDotsHover:false,
    });
    // htmlのslick読み込みあり記述

    // フェードアップアニメを再生させるためにクラス名をつける処理
    function fadeanime(){
        $(".fadeUpTrigger").each(function(){
            // 一つ一つ確認する

            var frameIn = $(this).offset().top - $(window).height();
            // ページの上から写真までの位置を図る - その時開いているブラウザの高さを調べる

            if(frameIn <= $(window).scrollTop()){
                // フレームイン以上スクロールされれば

                $(this).addClass("fadeUp");
                // faseUpのクラス名がつけばアニメーションがされる
            }
        });
    }

    $(window).scroll(function(){
        fadeAnime();
    });

    
    
});