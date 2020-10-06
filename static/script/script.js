$(document).ready(function () {
  $(".button-collapse").sideNav();

  $("#item_description").val("");
  $("#item_description").trigger("autoresize");

  //   $('.datepicker').pickadate({
  //     selectMonths: true, // Creates a dropdown to control month
  //     selectYears: 15, // Creates a dropdown of 15 years to control year,
  //     today: 'Today',
  //     clear: 'Clear',
  //     close: 'Ok',
  //     closeOnSelect: false // Close upon selecting a date,
  //   });

//   $(".timepicker").pickatime({
//     default: "now", // Set default time: 'now', '1:30AM', '16:30'
//     fromnow: 0, // set default time to * milliseconds from now (using with default = 'now')
//     twelvehour: false, // Use AM/PM or 24-hour format
//     donetext: "OK", // text for done-button
//     cleartext: "Clear", // text for clear-button
//     canceltext: "Cancel", // Text for cancel-button,
//     container: undefined, // ex. 'body' will append picker to body
//     autoclose: false, // automatic close timepicker
//     ampmclickable: true, // make AM PM clickable
//     aftershow: function () {}, //Function for after opening timepicker
//   });
});

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: -28.024, lng: 140.887 },
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.

  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
  { lat: -31.56391, lng: 147.154312 },
  { lat: -33.718234, lng: 150.363181 },
  { lat: -33.727111, lng: 150.371124 },
  { lat: -33.848588, lng: 151.209834 },
  { lat: -33.851702, lng: 151.216968 },
  { lat: -34.671264, lng: 150.863657 },
  { lat: -35.304724, lng: 148.662905 },
  { lat: -36.817685, lng: 175.699196 },
  { lat: -36.828611, lng: 175.790222 },
  { lat: -37.75, lng: 145.116667 },
  { lat: -37.759859, lng: 145.128708 },
  { lat: -37.765015, lng: 145.133858 },
  { lat: -37.770104, lng: 145.143299 },
  { lat: -37.7737, lng: 145.145187 },
  { lat: -37.774785, lng: 145.137978 },
  { lat: -37.819616, lng: 144.968119 },
  { lat: -38.330766, lng: 144.695692 },
  { lat: -39.927193, lng: 175.053218 },
  { lat: -41.330162, lng: 174.865694 },
  { lat: -42.734358, lng: 147.439506 },
  { lat: -42.734358, lng: 147.501315 },
  { lat: -42.735258, lng: 147.438 },
  { lat: -43.999792, lng: 170.463352 },
];
