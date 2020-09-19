$(document).ready(function () {
  $(".button-collapse").sideNav();

  $("#textarea1").val("New Text");
  $("#textarea1").trigger("autoresize");

  //   $('.datepicker').pickadate({
  //     selectMonths: true, // Creates a dropdown to control month
  //     selectYears: 15, // Creates a dropdown of 15 years to control year,
  //     today: 'Today',
  //     clear: 'Clear',
  //     close: 'Ok',
  //     closeOnSelect: false // Close upon selecting a date,
  //   });

  //   document.getElementById("matfix").addEventListener("click", function (e) {
  //     e.stopPropagation();
  //   });
});
