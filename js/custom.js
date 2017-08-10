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

/*======================================
    TESTIMONIALS
========================================*/
$(function () {
    // Counter
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*======================================
    STATS
========================================*/
$(function () {
    // Counter
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/*======================================
    CLIENTS
========================================*/
$(function () {
    // Owl Carousel
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
