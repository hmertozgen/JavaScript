//animate

$(document).ready(function () {
  $("#animate").click(function () {
    let box = $("#box");

    box.animate(
      {
        left: "200px",
        width: "300px",
        height: "300px",
        top: "250px",
      },
      "slow"
    );
    box.animate(
      {
        fontSize: "40px",
      },
      3000,
      function () {
        alert("animasyon bitti.");
      }
    );
  });
});
