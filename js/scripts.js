var height
$(document).ready(function() {

  var age = parseInt(prompt("How tall are you?"));

if (height >= 60) {
  adultAllowableRides();
} else {
    $(#childrenRides).show();
}


if (height < 60) {
  childrenAllowableRides();
}  else {
    $(#adultRides).show();
}

});
});
