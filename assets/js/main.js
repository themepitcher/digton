(function ($) {    
    "use strict"

    $(document).ready(function () {

        // data background
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });

        // mobile menu
        $('nav').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991.98",
            onePage: false
        });

        // magnific popup init
        $(".popup-gallery").magnificPopup({
            delegate: '.popup-img',
            type: 'image',
            gallery: {
                enabled: true
            },
        });

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        
        // counter up 
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });

        // accordion
        $('.accordion-header').on('click', function () {
            const $item = $(this).parent();
            const isActive = $item.hasClass('active'); 
            
            $('.accordion-item').removeClass('active');
            if (!isActive) {
                $item.addClass('active');
            }
        });

        // testimonial slider
        $('.testimonial-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            speed: 1000,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            arrows: true,
            prevArrow: '<span class="prev-arrow"><i class="fa-solid fa-arrow-left-long"></i></span>',
            nextArrow: '<span class="next-arrow"><i class="fa-solid fa-arrow-right-long"></i></span>',
            responsive: [{
                breakpoint: 991.98,
                settings: {
                    arrows: false,
                }
            }]
        });

        // brand slider
        $('.brand-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 5000,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 0,
            dots: false,
            arrows: false,
            cssEase: 'linear',
            responsive: [{
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });

    });

    $(window).on('scroll', function () {

        // navbar fix
        const headerHeight = $(".header-top").outerHeight();
        if ($(this).scrollTop() > headerHeight) {
            $(".menu-area").addClass("fixed-top");
        } else {
            $(".menu-area").removeClass("fixed-top");
        }

        // back to top scroll
        var scrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            scrollTop.fadeIn(1000);
        } else {
            scrollTop.fadeOut(1000);
        }

    });

    $(window).on('load', function () {

        // wow js
        new WOW().init();

        // preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        // back to top animate
        $(".back-to-top").on('click', function () {
            $("html").animate({
                "scrollTop": "0"
            }, 1000);
        });

    });

})(jQuery);
