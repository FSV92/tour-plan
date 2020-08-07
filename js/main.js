$(document).ready(function () {
  //Слайдеры
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    keyboard: {
      enabled: true,
    },
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
    keyboard: {
      enabled: true,
    },
  });
  //Мобильное меню
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    $("body").toggleClass("lock-scroll");
  });
  //Модальные окна
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  var modalForm = $(".modal__form");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  modalOverlay.on("click", closeModal);
  $(this).on("keydown", closeModalKey);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }

  function closeModal(evt) {
    evt.preventDefault();
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    modalForm[0].reset();
  }

  function closeModalKey(evt) {
    if (evt.keyCode === 27) {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      modalForm[0].reset();
    }
  }
  //Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Name required",
          minlength: "Minimum of 2 letters",
        },
        email: {
          required: "Email required",
          email: "Format 'name@domain.com'",
        },
        phone: {
          required: "Phone required",
          minlength: "Minimum of 10 numbers",
        },
      },
    });
  });
  //Маска телефона
  $("input[type=tel]").mask("+7(000)000-00-00");
});