// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function validateForm() {
  var w = document.forms["isudForm"]["name"].value;
  var x = document.forms["isudForm"]["email"].value;
  var y = document.forms["isudForm"]["message"].value;
  if ((w == "")||(x == "")||(y == "")){
    alert("Please fill in the missing entries");
  }
  else {
    alert("Thank you for your message! See you soon in your inbox!")
  }
}