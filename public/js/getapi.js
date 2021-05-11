// console.log("JS loaded")

//$("#Submit").on("click", function(event){
   // event.preventDefault();
    //console.log("On click", "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8OvhY7QMAhMu0xXN0STHwvWbeGZaTtrI&callback=initMap" )

    // Get Google API key, Copy sample code and try displaying google maps
//})
// var mylatlng = { lat: 37.989000, lng: -122.043390};
// var mapOptions = {
//     center: mylatlng,
//     zoom: 2,
//     mapTypeid: google.maps.mapTypeId.ROADMAP
// };

// var map = new google.maps.Map(document.getElementById("googleMap"),mapOptions)

function initMap() {
    var pointA = new google.maps.LatLng(51.7519, -1.2578),
        pointB = new google.maps.LatLng(50.8429, -0.1313),
        myOptions = {
            zoom: 7,
            center: pointA
        },
        map = new google.maps.Map(document.getElementById('map-canvas'), myOptions),
        // Instantiate a directions service.
        directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer({
            map: map
        }),
        markerA = new google.maps.Marker({
            position: pointA,
            title: "point A",
            label: "A",
            map: map
        }),
        markerB = new google.maps.Marker({
            position: pointB,
            title: "point B",
            label: "B",
            map: map
        });

    // get route from A to B
    calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);

}



function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
    directionsService.route({
        origin: pointA,
        destination: pointB,
        avoidTolls: true,
        avoidHighways: false,
        travelMode: google.maps.TravelMode.DRIVING
    }, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

initMap();