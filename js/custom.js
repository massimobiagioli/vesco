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
        autoplayHoverPause: true,
        responsive: {
            // breakpoint for 0 up
            0: {
                items: 1
            },
            // breakpoint for 480 up
            480: {
                items: 2
            },
            // breakpoint for 768 up
            768: {
                items: 3
            }
        }
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
        autoplayHoverPause: true,
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
        autoplayHoverPause: true,
        responsive: {
            // breakpoint for 0 up
            0: {
                items: 1
            },
            // breakpoint for 480 up
            480: {
                items: 3
            },
            // breakpoint for 768 up
            768: {
                items: 5
            },
            // breakpoint for 992 up
            992: {
                items: 6
            }
        }
    });
});

/*======================================
    NAVIGATION
========================================*/

// Show/Hide Black transparent navigation
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            // hide
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// Smooth Scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        // get/return id link #about, #work, #team, etc.
        var section = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250), "easeInOutExpo";
    });
});

// Close mobile menu on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});
