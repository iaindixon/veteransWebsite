function initialize() {
    'use strict';
    var mapCanvas = document.getElementById('map-canvas'),
        mapOptions = {
          center: new google.maps.LatLng(35.994033, -78.898619),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
    },
    map = new google.maps.Map(mapCanvas, mapOptions);
}
try {
    google.maps.event.addDomListener(window, 'load', initialize);
} catch (e) {
}