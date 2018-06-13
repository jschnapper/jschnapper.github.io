// Open modal and deselect product description

$(".btn__modal-trigger").click(function() {
  // Triggering modal
  if ($(this).hasClass("--off")) {
    $(this).removeClass("--off");
    $(this).addClass("--on");
    $(".email-container").removeClass("email-container--closed");
    $(".email-container").addClass("email-container--open");
    $(".main-container").addClass("main-container__overlay--open");
  }
  // deselect descriptions
  $(".description__clickable").removeClass("description--active");
    $(".description__clickable").removeClass("description--inactive");
});

// Close modal by clicking the "X"
$(".email-container__close-btn").click(function() {
    $(".main-container").removeClass("main-container__overlay--open");
    $(".btn__modal-trigger").addClass("--off");
    $(".btn__modal-trigger").removeClass("--on");
    $(".email-container").addClass("email-container--closed");
    $(".email-container").removeClass("email-container--open");
});

// Close modal by confirming email
$(".btn__confirm").click(function() {
    $(".main-container").removeClass("main-container__overlay--open");
    $(".btn__modal-trigger").addClass("--off");
    $(".btn__modal-trigger").removeClass("--on");
    $(".email-container").addClass("email-container--closed");
    $(".email-container").removeClass("email-container--open");
});

// Focus on selected product description
$(".description__clickable").click(function() { $(".description__clickable").addClass("description--inactive");
  $(this).removeClass("description--inactive");
  $(this).addClass("description--active")
});