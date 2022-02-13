//Jquery Fading // opasitesi azalarak kaybolur-gelir
//$(selector).fadeln(speed,callback); //görününmez ise efektli bir şekilde getiriyor
//$(selector).fadeOut(speed,callback); //görünür elemanı efektli kaybediyor.
//$(selector).fadeToggle(speed,callback); //yine joker
//$(selector).fadeTo(speed,callback); //opacitesini belli bir değerden belli bir değere götürür.

//Jquery Sliding // kayarak kaybolur-gelir
//$(selector).slideDown(speed,callback);
//$(selector).slideUp(speed,callback);
//$(selector).slideToggle(speed,callback);

//tanıtım bitti örnekler

$(document).ready(function () {
  $("#fadein").click(function () {
    $("p").fadeIn("slow");
  });

  $("#fadeout").click(function () {
    $("p").fadeOut(1000, function () {
      alert("paragraf gösterildi.");
    });
  });
  $("#toggle").click(function () {
    $("p").fadeToggle(2000);
  });

  $("#fadeto").click(function () {
    $("p").fadeTo("slow", 0.5);
  });
});
