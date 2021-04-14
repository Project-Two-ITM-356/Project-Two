// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function validateForm() {
  var w = document.forms["main"]["name"].value;
  var x = document.forms["main"]["email"].value;
  var y = document.forms["main"]["message"].value;
  if ((w == "")||(x == "")||(y == "")){
    alert("Please fill in the missing entries");
  }
  else {
    alert("Thank you for joining the Bakerie! See you soon with details in your inbox!")
  }
}

//Automatic Slideshow
var i = 0; // Start Point
var images = []; // Images Array
var time = 3000; // Time Between Switch

// Image List
images[0] = "assets/img/ImagePreview5.JPEG";
images[1] = "assets/img/ImagePreview6.JPEG";
images[2] = "assets/img/ImagePreview7.JPEG";
images[3] = "assets/img/ImagePreview8.JPEG";
images[4] = "assets/img/ImagePreview9.JPEG";
images[5] = "assets/img/ImagePreview10.JPEG";
images[6] = "assets/img/ImagePreview11.JPEG";
images[7] = "assets/img/ImagePreview12.JPEG";

// Change Image
function changeImg() {
  document.getElementById("slide").src = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;