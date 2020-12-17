$(document).ready(function () {
  var menuButton = $(".menu-button")
  menuButton.on('click', function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  })

  var tabsItem = $('.trends-title__tabs-item');
  var contentItem = $('.trends-cards');

  tabsItem.on("click", function(event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("trends-title__tabs-item--accent");
    console.log('activeContent: ',activeContent);
    contentItem.removeClass("trends-cards--visible");
    $(activeContent).addClass("trends-cards--visible");
    $(this).addClass("trends-title__tabs-item--accent");
  });
});