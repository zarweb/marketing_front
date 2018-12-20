$(function() {
    // $(window).on('load', function(){
    //     $(".sec").fadeOut(3000);
    // });

    //scroll body
    $("html").easeScroll({
        frameRate: 800,
        animationTime: 5000,
        stepSize: 300,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 30) {
            $(".fixed-top").addClass("back-active");
        } else {
            $(".fixed-top").removeClass("back-active");
        }
    });


    AOS.init();


    $('a[href^="#"]').click(function(){

        var the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 2500);

        return false;});
});
