$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".backtotap").fadeIn();
    } else {
      $(".backtotap").fadeOut();
    }
  });

  $(".backtotap").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
    return false;
  });
});
