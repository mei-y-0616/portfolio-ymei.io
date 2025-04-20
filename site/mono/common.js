'use strict';

$(function(){

    //---ハンバーガーメニュー動作
    const $menuSet = $('.menu, .mask')
    $('.hamburger,.mask, .menu a').on('click', function(){
        
        $('#header').toggleClass('open');
        open();
    });
    //リサイズ時のバグ対処
    $(window).resize(function(){
        if($(window).width() > 768){
            $('#header').removeClass('open');
            open();
        }
    })

    function open(){
        if($('#header').hasClass('open')){
            $menuSet.fadeIn(300);
        }
        else{
            $menuSet.fadeOut(300);
        };
    }//toggleClass ifで書き換えたかったね


    //ページごとでjqueryプラグイン入れているやつ
   
    //URLの取得
    let url = location.href;

    if(url.indexOf("index.html") >= 0){
            //---スライダー動作
        $('.slider').slick({
            arrows:false,
            slidesToShow:3,
            centerMode:true,
            centerPadding:'10vw',
            autoplay:true,
            swipe:false,
            pauseOnHover:false,
            pauseOnFocus:false,
            //これより下流れるスライド設定
            autoplaySpeed:0,
            speed:6000,
            cssEase:"linear",

            responsive:[
                {
                    breakpoint:768,
                    settings:{
                        slidesToShow:1,
                        centerPadding:'25vw'
                    }
                },
            ]
        });
    }

    if(url.indexOf("works.html") >= 0){
            //---colorbox
        $('.grid a').colorbox({
            maxWidth:'90%',
            maxHeight:'90%'
        });

    }

    if(url.indexOf("index.html") >= 0){

        $('.inview').on('inview', function(){
            $(this).addClass('is-inview');
        });
        $('.inview-delay').on('inview', function(){
            $(this).addClass('is-inview-delay');
        });
    }
    





   
});