// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar-shrink").offset().top > 50) {
        $(".navbar-shrink").addClass("top-nav-collapse");
    } else {
        $(".navbar-shrink").removeClass("top-nav-collapse");
    }
});
