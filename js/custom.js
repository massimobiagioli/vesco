/*======================================
    SERVICES
========================================*/
$(function () {
    // Animate on scroll
    new WOW().init();
});

/*======================================
    WORK
========================================*/
$(function () {
    // Magnific popup
    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*======================================
    TEAM
========================================*/
$(function () {
    // Owl Carousel
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
