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
