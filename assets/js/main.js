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
