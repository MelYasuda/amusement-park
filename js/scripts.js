$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

if (height >= 60) {
  $("#adultAllowableRides").show();
} else {
    $("#childrenAllowableRides").show();
}
});
