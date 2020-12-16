$(document).ready(function () {
  var menuButton = $(".menu-button")
  menuButton.on('click', function () {
    /*console.log('menuButton: ', menuButton);*/
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  })
});