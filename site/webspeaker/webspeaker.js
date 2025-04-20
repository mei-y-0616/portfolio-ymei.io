'use strict';

$(function(){
    $('.hamburger').on('click', function(){
        $('.drawer').addClass('open hidden');
        $(this).hide();
    });
    $('.drawer-btn').on('click', function(){
        $('.drawer').removeClass('open');
        if(window.innerWidth <= 700){
            $('.hamburger').show();
        }
        setTimeout(function(){
            $('.drawer').removeClass('hidden');
        },300);
    });

    /*ハンバーガーが消えるバグ対策*/
    $(window).on('resize',function(){
        if(window.innerWidth <= 700){
            $('.hamburger').show();
        }
        else{
            $('.hamburger').hide();
        }
    });

    /*inviewアニメーション*/
    $('.fadeup').on('inview', function(){
        $(this).addClass('inview');
    })
});