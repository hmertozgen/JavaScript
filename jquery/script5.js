// show-hide

// $(document).ready(function () {
//   $("#hide").click(function () {
//     $("p").hide();
//   });

//   $("#show").click(function () {
//     $("p").show();
//   });

//   $("#toggle").click(function () {
//     $("p").toggle();
//   }); // joker eleman hangi buton lazımsa onu yapar
// });

//$(selector).show(speed,callback);
//$(selector).hide(speed,callback);
//$(selector).toggle(speed,callback);
//kullanım şekli-- speed-->ms yada fast,slow

$(document).ready(function () {
  $("#hide").click(function () {
    $("p").hide("fast");
  });

  $("#show").click(function () {
    $("p").show(1000, function () {
      alert("paragraf gösterildi");
    });
  });

  $("#toggle").click(function () {
    $("p").toggle(2000);
  });
});
