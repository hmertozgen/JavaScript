//selectors

console.log($("#list"));
console.log($("h3"));
console.log($("li"));
console.log($(".item"));
console.log($("a"));
console.log($("ul li a"));
console.log($("#list a"));

//styling content

document.getElementById("header").style.color = "red"; //JS

$("#header").css("color", "blue"); //JQuery

$("#list a").css("text-decoration", "none");
$("a").css("text-decoration", "none");

var styles = {
  color: "grey",
  fontSize: "20px",
  border: "1px solid",
};
$("ul li").css(styles);

// var listeler = document.querySelectorAll("li");
//JS de seçme yöntemi bu
// for (let i = 0; i < listeler.length; i++) {
//   listeler[i].style.color = "red";
// }
//eklemek içinde for veya foreach yöntemi

$("a").css({
  color: "green",
  fontSize: "20px",
  border: "1px solid red",
}); //yukardaki styles'ı böyle içeride yazabilliriz

//item classı olanlar yok oldu
// $(".item").css("display", "none");
//yada
$(".item").css({
  display: "none",
});
