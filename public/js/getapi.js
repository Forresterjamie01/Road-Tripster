console.log("JS loaded")

//$("#Submit").on("click", function(event){
   // event.preventDefault();
    //console.log("On click", "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8OvhY7QMAhMu0xXN0STHwvWbeGZaTtrI&callback=initMap" )

    // Get Google API key, Copy sample code and try displaying google maps
//})
var mylatlng = { lat: 37.989000, lng: -122.043390};
var mapOptions = {
    center: mylatlng,
    zoom: 2,
    mapTypeid: google.maps.mapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapOptions)