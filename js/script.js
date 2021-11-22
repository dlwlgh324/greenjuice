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

    //모달창
    let modal = $('.modal');
    let modal_cont = $('.modal-cont');
    let modal_close = $('.modal-close');
    let modal_show = $('.modal-show');

    // modal_close클릭 시 modal 사라지기
    modal_close.click(function () {
        modal.fadeOut();
    });

    //modal클릭 시 modal사라지기
    modal.click(function () {
        modal.fadeOut();
    });

    //.modal-cont 를 마우스로 클릭하면 사라지지않기
    modal_cont.click(function (event) {
        event.stopPropagation();
    });

    //modal-show href막기 & 사라지게하기
    modal_show.click(function (event) {
        event.preventDefault();
        modal.fadeOut();
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
    new Swiper('.sw-cs', {
        slidesPerView: 4,
        slidesPerGroup: 2,
        spaceBetween: 5,
        speed: 500,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
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
    // new Swiper('.sw-banner', {
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