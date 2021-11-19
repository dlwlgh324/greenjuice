$(document).ready(function () {

    // 위로 가기
    $('.gotop').click(function (e) {
        // href를 막는다.
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        });
    });
    // 스크롤바 처리
    $(window).scroll(function () {
        // 스크롤바의 위치
        var scY = $(window).scrollTop();
        if (scY >= 200) {
            $('.gotop').addClass('gotop-active');
        } else {
            $('.gotop').removeClass('gotop-active');
        }
    });

    // 비주얼 슬라이드
    new Swiper('.sw-visual', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        effect: "fade",
        crossEffect: {
            crossFade: true
        },
        speed: 1000,
    });

    // customer 슬라이드
    new Swiper('.sw-cu', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 5,
        speed: 1000,
    });


    // 베스트 상품 메뉴 
    var best_cate_list = $('.best-cate-list>li');
    var best_cate_bg = $('.best-cate-bg');
    var distanceY = 55;
    $.each(best_cate_list, function (index, item) {
        var aTag = $(this).find('>a');
        var nowLi = $(this);
        aTag.click(function (e) {
            e.preventDefault();
            best_cate_bg.css('top', index * distanceY);
            best_cate_list.removeClass('best-cate-focus');
            nowLi.addClass('best-cate-focus');
        });
    });


    // // 배너슬라이드
    // new Swiper('.swiper-container', {
    //     loop: true,
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    //     effect: "fade",
    //     crossEffect: {
    //         crossFade: true
    //     },
    //     speed: 1000,
    // });

    // 펼침 목록 만들기
    $('.f-site-bt').click(function () {
        $('.f-site-list').stop().slideToggle();
        $('.f-site-bt').toggleClass('f-site-bt-active');
    });

});