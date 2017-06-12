$(window).load(function() {

  // executes when complete page is fully loaded, including all frames, objects and images
  //alert("window is loaded");

  // Sticky Nav
  // ----------------------------------------------------------------------------
  var $sticky_navigation = $('#sticky-nav-wrap');

  if( $sticky_navigation.length ) {

    // grab the initial top offset of the navigation
    var sticky_navigation_offset_top = $sticky_navigation.offset().top;

    // our function that decides whether the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function(){

      var scroll_top = $(window).scrollTop(); // our current vertical position from the top

      // if we've scrolled more than the navigation, change its position to fixed
      // to stick to top, otherwise change it back to relative.
      // Add a bit extra to prevent the static class being triggered if the
      // content height is not tall enough to require the static navbar.
      if (scroll_top > sticky_navigation_offset_top + 50 ) {

        $('#sticky-nav-wrap .navbar').removeClass('navbar-static-top').addClass('fixed-top');
        $( ".wrap" ).css( "margin-top", "50px" );
      //  $( ".contact-nav" ).show( "400" );

      } else {

        $('#sticky-nav-wrap .navbar').removeClass('fixed-top').addClass('navbar-static-top');
        $( ".wrap" ).css( "margin-top", "0" );
      //  $( ".contact-nav" ).hide( "400" );

      }

    };

    // Run the function on load
    sticky_navigation();

    // ...and run it again every time the user scrolls
    $(window).scroll(function() {

      sticky_navigation();

    });

  }

});
