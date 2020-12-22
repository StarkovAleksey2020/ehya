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

  var historySliderButtonLeft = $('.history-info-buttons__image--left');
  var historySliderButtonRight = $('.history-info-buttons__image--right');

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
  var historySliderNarrow = new Swiper('.swiper-container-narrow', {
    // Optional parameters
    loop: false,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      prevEl: '.history-info-buttons__left',
      nextEl: '.history-info-buttons__right',
    },
  });

    if (historySliderNarrow.isBeginning) {
      historySliderButtonLeft.removeClass("button-on");
      historySliderButtonLeft.addClass("button-off");
      historySliderButtonRight.removeClass("button-off");
      historySliderButtonRight.addClass("button-on");
    }
  historySliderNarrow.on('slideChange', function () {
    if (historySliderNarrow.isBeginning) {
      historySliderButtonLeft.removeClass("button-on");
      historySliderButtonLeft.addClass("button-off");
      historySliderButtonRight.removeClass("button-off");
      historySliderButtonRight.addClass("button-on");
    }
    if (historySliderNarrow.isEnd) {
      historySliderButtonLeft.removeClass("button-off");
      historySliderButtonLeft.addClass("button-on");
      historySliderButtonRight.removeClass("button-on");
      historySliderButtonRight.addClass("button-off");
    }
    if (!historySliderNarrow.isEnd && !historySliderNarrow.isBeginning) {
      historySliderButtonLeft.removeClass("button-off");
      historySliderButtonLeft.addClass("button-on");
      historySliderButtonRight.removeClass("button-off");
      historySliderButtonRight.addClass("button-on");
    }
  });

  $('#target').keyup(function (e) {
      if (e.keyCode === 27) {
        clearInput(e);
      }
    });
  
  function clearInput(event) {
    event.preventDefault();
      $('input').val('');
      $("input").removeClass("invalid");
      $("label").remove(".invalid");
  }

    jQuery.validator.addMethod("emailfull", function(value, element) {
 return this.optional(element) || /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(value);
    }, "Please enter valid email address!");
  
  // Обработка форм
  $('.form').each(function () {
    $(this).validate({
      rules: {
        email: {
          required: true,
          email: true,
          emailfull: true
        },
      },
      errorClass: "invalid",
      messages: {
        email: {
          required: "Please specify your email",
          email: "Email address format is name@domain.com",
        },
      },
    });
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal)

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      closeModal(e);
    }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    $('input').val('');
    $('textarea').val('');
    $("input").removeClass("invalid");
    $("label").remove(".invalid");
    modalDialog.scrollTop(0);
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("input").removeClass("invalid");
    $("label").remove(".invalid");
}

// Маска номера телефона
  $(".phoneInput").mask("+7 (999) 999-99-99");

});