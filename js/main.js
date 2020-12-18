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

  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
  
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clicable: true,
    },
  });
  $(".swiper-container").mouseenter(function() {
    reviewsSlider.autoplay.stop();
  });

  $(".swiper-container").mouseleave(function() {
    reviewsSlider.autoplay.start();
  });

  var historySlider = new Swiper('.history-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    loopFillGroupWithBlank: false,
    spaceBetween: 20,
    slidesPerGroup: 2,
    // Navigation arrows
    navigation: {
      nextEl: '.history-info-buttons__left',
      prevEl: '.history-info-buttons__right',
    },
  });
});