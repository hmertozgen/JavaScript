//JQuery methods

console.log($("h1").text());
console.log($("ul").text());
console.log($("ul li").text());

$("h1").text("Javascript"); //text'i  değiştirir.

console.log($("input").val());

// console.log($("input").val("sss"));

$("img").attr("width", "400");

function adsoyad() {
  var ad = $("#ad").val();
  var soyad = $("#soyad").val();

  console.log("adınız ve soyadınız: " + ad + " " + soyad);

  $("#ad").addClass("highlight");
  $("#soyad").removeClass("green");

  $("#soyad").toggleClass("highlight"); //toggleclass o class varsa siler yoksa ekler
}
