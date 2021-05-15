// console.log("JS loaded")

// $("#Submit-button").on("click", function(event){
//    event.preventDefault();
//     console.log("On click",  )
//     $.ajax({
//         url:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBcf3IxWUAULMkaW1loafJ8KCekyuzBNvs=initMap",
//         method: "GET"
//     }).then(function(apiresult){
//         console.log(apiresult)
//     })
//     //Get Google API key, Copy sample code and try displaying google maps
// })

// // Note: This example requires that you consent to location sharing when
// // prompted by your browser. If you see the error "The Geolocation service
// // failed.", it means you probably did not give permission for the browser to
// // locate you.
// let map, infoWindow;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("googleMap"), {
//     center: { lat: 37.871666, lng: -122.272781 },
//     zoom: 6,
//   });
//   infoWindow = new google.maps.InfoWindow();
//   const locationButton = document.createElement("button");
//   locationButton.textContent = "Pan to Current Location";
//   locationButton.classList.add("custom-map-control-button");
//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
//   locationButton.addEventListener("click", () => {
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: 37.871666,
//             lng: -122.272781,
//           };
//           infoWindow.setPosition(pos);
//           infoWindow.setContent("Location found.");
//           infoWindow.open(map);
//           map.setCenter(pos);
//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   });
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infoWindow.open(map);
// }


function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var haight = new google.maps.LatLng( 37.871666, -122.272781);
    var oceanBeach = new google.maps.LatLng( 37.871666, -122.272781);
    var mapOptions = {
      zoom: 14,
      center: haight
    }
    var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
    directionsRenderer.setMap(map);
  }
  
  function calcRoute() {
    var selectedMode = document.getElementById('mode').value;
    var request = {
        origin: haight, // $("#id").val
        destination: oceanBeach, //
        // Note that JavaScript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode]
    };
    directionsService.route(request, function(response, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(response);
      }
    });
  }