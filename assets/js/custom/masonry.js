$(function(){
		var container = $('#masonry-container');

		container.imagesLoaded(function(){

			container.masonry({
			   itemSelector: '.item',
			   columnWidth: function( containerWidth ) {
				  return containerWidth /3;// depends how many boxes per row
				}(), // () to execute the anonymous function right away and use its result
				isAnimated: true
			});
		});
	});
