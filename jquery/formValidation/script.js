$(document).ready(function () {
  function isEmail(email) {
    var pattern =
      /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
    return pattern.test(email);
  }

  $("#btn").click(function () {
    var errorMessage = "";
    $("#error").html("");
    if ($("#email").val() == "") {
      errorMessage += "<p>email alanı doldurulması zorunlu alan</p>";
    }
    if (isEmail($("#email").val() == false)) {
      errorMessage += "<p>mail alanı düzgün girilmedi</p>";
    }

    if ($.isNumeric($("#phone").val()) == false) {
      errorMessage += "<p>phone alanı düzgün girilmemiş</p>";
    }
    if ($("#phone").val() == "") {
      errorMessage += "<p>phone alanı doldurulması zorunlu alan</p>";
    }

    if ($("#password").val() == "") {
      errorMessage += "<p>password alanı doldurulması zorunlu alan</p>";
    }
    if ($("#password").val() != $("#repassword").val()) {
      errorMessage += "<p>password alanları eşleşmedi</p>";
    }

    if (errorMessage != "") {
      $("#error").html(errorMessage);
    }
  });
});
