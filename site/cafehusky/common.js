'use strict';

$(function(){

    //ハンバーガーメニュー
    $('.hamburger, .drawer, .drawer a').on('click', function(){
        $('#header').toggleClass('open');
        $('.drawer').slideToggle(300);
    });


    //入力チェック
    $('#submit-button').on('click', function(){

        //エラーメッセージを表示するためのエリアを初期化
        $('.error').text("");
        
        if($('input[name="your-name"]').val() == ""){
            $('#name-error').text('名前は必須項目です。');
        }
        if($('input[name="your-address"]').val() == ""){
            $('#address-error').text('メールアドレスは必須項目です。');
        }
        if($('textarea[name="your-inquiry"]').val() == ""){
            $('#inquiry-error').text('お問い合わせ内容は必須項目です。');
        }
    });


    //トップへ戻るが表示される
    const $toTop = $('.to-top');
    $toTop.hide();
    $(window).scroll(function(){

        if($(this).scrollTop() > 600){
            $toTop.fadeIn();
        }
        else{
            $toTop.fadeOut();
        }
    })

    //トップへ戻るがクリックされたら
    $toTop.on('click', function(){
        $('body,html').animate({scrollTop: 0}, 600);
        return false;
    })


    //スムーススクロール
    $('a[href^="#"]:not(a[href="#"])').click(function(){

        let href = $(this).attr('href');
        let target = $(href == '#' || href == "" ? 'html' : href);
        let position = target.offset().top - 100;
        $('html,body').animate({scrollTop:position}, 700, 'swing');
        console.log("check");
        return false;
    })


    //inview
    $('.site-title').on('inview', function(){
        $(this).addClass('inview');
    });
});