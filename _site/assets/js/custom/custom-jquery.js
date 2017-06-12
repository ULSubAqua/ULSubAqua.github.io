$(document).ready(function() {

  // Target your .container, .wrapper, .post, etc.
  // $(" .video-container" ).fitVids();
  //
  // // Initialize MixitUp
  // $(function(){
  //
  //   $( "#mixitup-container" ).mixItUp();
  //
  // });


	// Back to Top Navigation
	// ---------------------------------------------------------------------------
	$(window).scroll(function() {

		if ($(this).scrollTop() > 200) {
			$('#go-top').fadeIn(200);
		} else {
			$('#go-top').fadeOut(200);
		}

	});

	// Animate the scroll to top
	$('#go-top').click(function(event) {

		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 500);

	});

	// Smoothscroll
	// see: http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
	// ---------------------------------------------------------------------------

  $('a[href^="#internal-main"]').on('click',function (e) {

	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top -50
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {

    $('.page-scroll a').bind('click', function(event) {

        var $anchor = $(this);
        $('html, body').stop().animate({

            scrollTop: $($anchor.attr('href')).offset().top -260
        }, 1000 );

        event.preventDefault();

    });

  });

	// Testimonials Carousel
	// ---------------------------------------------------------------------------
	$('#testimonials-carousel').carousel({

		interval: 6000

	});

	$('#pause-carousel').click(function() {

		$('#testimonials-carousel').carousel('pause');
		$(this).hide();
		$( "#play-carousel").fadeIn(200);

	});

	$('#play-carousel').click(function() {

		$('#testimonials-carousel').carousel('cycle');
		$(this).hide();
		$( "#pause-carousel").fadeIn(200);

	});

});

// Intro Carousel
	// ---------------------------------------------------------------------------

	$('#pause-carousel').click(function() {
		//alert('clicked');
		//console.log("pause-carousel");
		$('#myCarousel').carousel('pause');
		$(this).hide();
		$( "#play-carousel").fadeIn(200);

	});

	$('#play-carousel').click(function() {

		$('#myCarousel').carousel('cycle');
		$(this).hide();
		$( "#pause-carousel").fadeIn(200);

	});

/*scroll function
-----------------------------------------------------------------------------
function scrollToID(id, speed){

	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");

	}

}
*/
