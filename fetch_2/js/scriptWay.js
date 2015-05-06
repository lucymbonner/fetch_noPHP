$(document).ready(function(){

// initialize map
	// Google API Key: AIzaSyAtkpcLyTqPcP4K64ykd6Gdq7y2rx1aufo

	var map;
    var city = new google.maps.LatLng(29.7580,-95.3698); //Houston

    // option places info bits
    var placeId;
    var placeName;
    var placeRating;
    var placeWebsite;
    var placeAddress;
    var placePhoneNumber;

    //option places markers and popup windows
    var marker;
    var infos = [];

	function initMap() {
		// style for map
            var styles = [
                {
                  stylers: [
                    { hue: "#00ffe6" },
                    { saturation: -20 }
                  ]
                },{
                  featureType: "road",
                  elementType: "geometry",
                  stylers: [
                    { lightness: 100 },
                    { visibility: "simplified" }
                  ]
                },{
                  featureType: "road",
                  elementType: "labels",
                  stylers: [
                    { visibility: "off" }
                  ]
                }
            ];
            var styledMap = new google.maps.StyledMapType(styles,
                {name: "Styled Map"});

            var mapOptions = {
                center: city,
                zoom: 13,
                scrollwheel: false,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                }
            };

            map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);

            map.mapTypes.set('map_style', styledMap);
            map.setMapTypeId('map_style');

	}

// On page load, initialize map
    google.maps.event.addDomListener(window, 'load', initMap);

// variables
	
	var startPoint;
	var startPointLatLng;

	var endPoint;
	var endPointLatLng;

// query functions

	function callStartPoint(results, status) {
	    	if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    var startMarker = new google.maps.Marker({
                        map: map,
                        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                        animation: google.maps.Animation.DROP,
                        place: {
                            placeId: results[i].place_id,
                            location: results[i].geometry.location,
                        }
                    });
                    placeId = results[i].place_id;
                    placeName = results[i].name;
                    placeRating = results[i].rating;
                    placeWebsite = results[i].website;
                    placeAddress = results[i].formatted_address;
               		startPointLatLng = results[i].geometry.location;

                    var infoWindowContent = '<div id="content">'+'<div id="siteNotice">'+'</div>'+
                        '<h5 id="placeNameHeadingMap">' + placeName 
                        + '</h5>'+'<div id="placeRatingMap">' + '<p>' + placeAddress 
                        + '</br>Rating: '+ placeRating + '</p>'+'</div>'+'</div>';

                    var infowindow = new google.maps.InfoWindow({
                        content: infoWindowContent
                    });

                    google.maps.event.addListener(marker,'click',(function(marker,infoWindowContent,infowindow) {
                        return function() {
                            closeInfos();
                            infowindow.setContent(infoWindowContent);
                            infowindow.open(map,marker);
                            infos[0]=infowindow;
                        };
                    })(marker,infoWindowContent,infowindow));

                }
            }
	};
	function callEndPoint(results, status) {
	    	if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    var endMarker = new google.maps.Marker({
                        map: map,
                        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                        animation: google.maps.Animation.DROP,
                        place: {
                            placeId: results[i].place_id,
                            location: results[i].geometry.location,
                        }
                    });
                    placeId = results[i].place_id;
                    placeName = results[i].name;
                    placeRating = results[i].rating;
                    placeWebsite = results[i].website;
                    placeAddress = results[i].formatted_address;
               		endPointLatLng = results[i].geometry.location;

                    var infoWindowContent = '<div id="content">'+'<div id="siteNotice">'+'</div>'+
                        '<h5 id="placeNameHeadingMap">' + placeName 
                        + '</h5>'+'<div id="placeRatingMap">' + '<p>' + placeAddress 
                        + '</br>Rating: '+ placeRating + '</p>'+'</div>'+'</div>';

                    var infowindow = new google.maps.InfoWindow({
                        content: infoWindowContent
                    });

                    google.maps.event.addListener(marker,'click',(function(marker,infoWindowContent,infowindow) {
                        return function() {
                            closeInfos();
                            infowindow.setContent(infoWindowContent);
                            infowindow.open(map,marker);
                            infos[0]=infowindow;
                        };
                    })(marker,infoWindowContent,infowindow));

                }
            }
	};
	function callOptions(results, status) {
	    	if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    var marker = new google.maps.Marker({
                        map: map,
                        animation: google.maps.Animation.DROP,
                        place: {
                            placeId: results[i].place_id,
                            location: results[i].geometry.location,
                        }
                    });
                    placeId = results[i].place_id;
                    placeName = results[i].name;
                    placeRating = results[i].rating;
                    placeWebsite = results[i].website;
                    placeAddress = results[i].formatted_address;

                    var infoWindowContent = '<div id="content">'+'<div id="siteNotice">'+'</div>'+
                        '<h5 id="placeNameHeadingMap">' + placeName 
                        + '</h5>'+'<div id="placeRatingMap">' + '<p>' + placeAddress 
                        + '</br>Rating: '+ placeRating + '</p>'+'</div>'+'</div>';

                    var infowindow = new google.maps.InfoWindow({
                        content: infoWindowContent
                    });

                    google.maps.event.addListener(marker,'click',(function(marker,infoWindowContent,infowindow) {
                        return function() {
                            closeInfos();
                            infowindow.setContent(infoWindowContent);
                            infowindow.open(map,marker);
                            infos[0]=infowindow;
                        };
                    })(marker,infoWindowContent,infowindow));

                }
            }
	};


// ON "FIND YOUR WAY" FORM SUBMIT BUTTON CLICK:
$("#wayButton").click(function(e) {

	console.log('wayButton clicked');

	// Find Start Location: text search their entered keyword or address
	// mark down Name, Lat, Lng

	startPoint = document.getElementById("startPoint").value;
	var requestStart = {
	        location: city,
	        radius: '1000', // meters
	        query: startPoint
	        };
	service = new google.maps.places.PlacesService(map);
	service.textSearch(requestStart, callStartPoint);
	console.log('start point: ' + startPoint);

	// Find End Location: text search their entered keyword or address
	// mark down Name, lat, lng

	var endPoint = document.getElementById("endPoint").value;
	var requestEnd = {
	        location: city,
	        radius: '1000', // meters
	        query: endPoint
	        };
	// service = new google.maps.places.PlacesService(map);
	service.textSearch(requestEnd, callEndPoint);
	console.log('end point: ' + endPoint);

	// Set what type to search for within bounds created below
	
	var searchType = document.getElementById("type1").value;
	var requestOptions = {
	        location: city,
	        radius: '1000', // meters
	        types: searchType
	        };
	// service = new google.maps.places.PlacesService(map);
	service.nearbySearch(requestOptions, callOptions);

	// Use lat/lng as X,Y coordinates and calculate vector with distance and direction
	// use vector as radius of radar search
	// eliminate anything not in the vector's direction +/- 30 degrees

	// OR make rectangular search box: Nearby Search with LatLngBounds
	// takes sw corner and ne corner parameters

	e.preventDefault();

}); // end of wayButton click function


//close all popup marker info windows when click on a new marker
function closeInfos(){
    /* If there are infoWindows open on the map */
    if(infos.length > 0) {    
        /* detach the info-window from the marker */
        infos[0].set("marker", null);
        /* and close it */
        infos[0].close();
        /* blank the array */
        infos.length = 0;
    }
}

}); //end of js file 