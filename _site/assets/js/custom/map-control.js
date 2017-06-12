var carawebsMap;

function initialize() {

	var centreLat = cwCentre.latitude;
	var centreLong = cwCentre.longitude;
	var mapOptions = {
		zoom: cwCentre.zoom,
		center: new google.maps.LatLng( centreLat, centreLong ),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		disableDefaultUI: false,
		styles:
		[
			{ featureType: "water", stylers:[{ visibility: "on"}, {color: cwCentre.waterColour }]},
			{ featureType: "landscape", stylers:[{ color: cwCentre.landColour}]},
			{ featureType: "road.highway", elementType:"geometry", stylers:[{ color: cwCentre.mainRoadColour }]},
			{ featureType: "road.arterial", elementType: "geometry", stylers:[{ color: cwCentre.minorRoadColour }]},
			{ featureType: "road.local", elementType:"geometry", stylers:[{ color:"#b9b8b4"}]},
			{ featureType: "road.highway", elementType: "labels", stylers: [{ visibility: "off" }]},
			{ featureType: "transit.line", elementType: "labels.icon", stylers: [{ visibility: "off" }]},
			{ featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#c5dac6"}]},
			{ featureType: "administrative", stylers: [{ visibility: "on"}, { lightness: 33}]},
			{ featureType: "poi.park", elementType: "labels", stylers: [{ visibility: "on" },{ lightness: 20}]},
			{ featureType: "road", stylers: [{ lightness: 20}]},
			{ featureType: 'administrative.locality', elementType: 'labels', stylers: [
				{ hue: '#ad495b' },
				{ saturation: 50 },
				{ lightness: -10 },
				{ gamma: 0.90 }
			]},
		]
	};

	// Display a map on the page
	var carawebsMap = new google.maps.Map( document.getElementById( "map-canvas" ), mapOptions );
	var center;

	// Centre the map on resize
	// ---------------------------------------------------------------------------
	function calculateCenter() {
		center = carawebsMap.getCenter();
	}

	google.maps.event.addDomListener( carawebsMap, 'idle', function() {
		calculateCenter();
	});

	google.maps.event.addDomListener( window, "resize", function() {
		carawebsMap.setCenter(center);
	});

	// End centre code

	carawebsMap.setTilt( 45 );

	// Main Marker
	var centreMarker = new google.maps.Marker({
		position: new google.maps.LatLng( centreLat, centreLong ),//center,
		//icon: cwCentre.mainMarker,
		icon: {
			url: cwCentre.mainMarker,
			size: new google.maps.Size(100, 133),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(50, 130),
			//scaledSize: new google.maps.Size(25, 25)
		},
		map: carawebsMap,
		title: cwCentre.title
	});

	var infoContent =
	"<h2>" + cwCentre.title + "</h2>" +
	"<p>" + cwCentre.description + "</p>";

	var infowindow = new google.maps.InfoWindow({
		content: infoContent
	});

	centreMarker.addListener('click', function() {
		infowindow.open( carawebsMap, centreMarker );
	});

	if( typeof markers !== 'undefined') {

		// Loop through our array of markers and place each one on the map
		// @see: https://developers.google.com/maps/documentation/javascript/examples/event-closure?csw=1
		var info = new google.maps.InfoWindow();
		for ( var i = 0; i < markers.length; i++ ) {

			var markerContent =
			"<h2>" + markers[i][0] + "</h2>" +
			"<p>" + markers[i][3] + "</p>";

			var position = new google.maps.LatLng( markers[i][1], markers[i][2] );

			var marker = new google.maps.Marker({
				position: position,
				icon: cwCentre.secondaryMarker,
				map: carawebsMap,
				title: markers[i][0]
			});

			attachMessage( marker, markerContent );

		}

		// Attaches an info window to a marker with the provided message. When the
		// marker is clicked, the info window will open with the secret message.
		function attachMessage( marker, secretMessage ) {
			var infowindow = new google.maps.InfoWindow({
				content: secretMessage
			});

			marker.addListener('click', function() {
				infowindow.open(marker.get('map'), marker);
			});

		}

	}// end markers conditional

}

google.maps.event.addDomListener( window, "load", initialize );
