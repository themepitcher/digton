(function ($) {
    
    "use strict"
    $(document).ready(function () {

        // data background
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });


        // mobile menu
        $('#mobile-menu').meanmenu({
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
    

    });

    $(window).on('scroll', function () {

        // back to top scroll
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 500) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }

        // navbar fix
        const headerHeight = $(".header-top").outerHeight();
        if ($(this).scrollTop() > headerHeight) {
            $(".menu-area").addClass("fixed-top");
        } else {
            $(".menu-area").removeClass("fixed-top");
        }

    });

    $(window).on('load', function () {

        // wow js
        new WOW().init();

        // preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        // back to top animate
        $(".back-to-top").click(function () {
            $("html, body").animate({ 
                scrollTop: 0 
            }, 1500);
            return false;
        });

    });

})(jQuery);
