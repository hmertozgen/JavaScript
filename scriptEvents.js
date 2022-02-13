// const btn = document.querySelector("#btnDeleteAll");
// const btn2 = document.querySelector("#btnAddNewTask");

// btn.addEventListener("click", function () {
//   console.log("btn clicked");

// });

//fonksiyonu içeride yazabiliriz dışarıdan da alabiliriz

// btn.addEventListener("click", btnClick);
// btn.addEventListener("click", btnClick2);
// btn2.addEventListener("click", btnClick);

// function btnClick() {
//   console.log("btn clicked");
// }

// function btnClick2() {
//   console.log("btn 2 clicked");
// }

// const btn = document.querySelector("#btnDeleteAll");
// const btn2 = document.querySelector("#btnAddNewTask");

// btn.addEventListener("click", function (e) {
//   let val;
//   val = e;

//   val = e.target; //hangi butona tıkladığımızı gösterir
//   val = e.target.id;
//   val = e.target.classList;
//   val = e.type;

//   console.log(val);

//   e.preventDefault(); // a tagında hareketi engelliyor scrollun yukarı aşağı gitmesini. (default değeri engelliyor)
// });

// Mouse Events

// const btn = document.querySelector("#btnDeleteAll");
// const ul = document.querySelector("#task-list");

// click
// btn.addEventListener("click", eventHandler);
// ul.addEventListener("click", eventHandler);

// double click
// btn.addEventListener("dblclick", eventHandler);

// //mouse down
// btn.addEventListener("mousedown", eventHandler);
// //mouse up
// btn.addEventListener("mouseup", eventHandler);

// //mouseenter
// ul.addEventListener("mouseenter", eventHandler);
// //mouseleave
// ul.addEventListener("mouseleave", eventHandler);

// //mouseover
// ul.addEventListener("mouseover", eventHandler);
// //mouseout
// ul.addEventListener("mouseout", eventHandler);

//mouse move

// const h5 = document.querySelector("h5");
// ul.addEventListener("mousemove", eventHandler);

// function eventHandler(event) {
//   console.log(`event type : ${event.type}`);
//   h5.textContent = `Mouse X : ${event.offsetX}
//   Mouse Y : ${event.offsetY}`;
// }

//  ***Keyboard Events

// const input = document.querySelector("#txtTaskName");

// const form = document.querySelector("form");
// input.addEventListener("keydown", eventHandler);
// input.addEventListener("keyup", eventHandler);
// input.addEventListener("keypress", eventHandler);
// input.addEventListener("focus", eventHandler);
// input.addEventListener("blur", eventHandler);
// input.addEventListener("cut", eventHandler);
// input.addEventListener("paste", eventHandler);
// input.addEventListener("select", eventHandler);

// form.addEventListener("submit", eventHandler);

// function eventHandler(e) {
//   console.log("event type " + e.type);
//   console.log("key code " + e.keyCode);
//   console.log("value :" + e.target.value);

//e.target.style.backgroundColor = "yellow";

//   e.preventDefault(); //eventin default değerini engeller
// }

//  ***Event Bubbling

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// form.addEventListener("click", function (e) {
//   console.log("form");
//   e.stopPropagation();
// });

// cardBody.addEventListener("click", function (e) {
//   console.log("card body");
//   e.stopPropagation();
// });

// card.addEventListener("click", function (e) {
//   console.log("card");
//   e.stopPropagation();
// });

// container.addEventListener("click", function (e) {
//   console.log("container");
//   e.stopPropagation();
// });

// Event Capturing

// form.addEventListener(
//   "click",
//   function (e) {
//     console.log("form");
//   },
//   true
// );

// cardBody.addEventListener(
//   "click",
//   function (e) {
//     console.log("card body");
//   },
//   true
// );

// card.addEventListener(
//   "click",
//   function (e) {
//     console.log("card");
//   },
//   true
// );

// container.addEventListener(
//   "click",
//   function (e) {
//     console.log("container");
//   },
//   true
// );

// const deleteItems = document.querySelectorAll(".fa-times");

// deleteItems.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     console.log(e.target);
//   });
// });

const ul = document.querySelector("ul");

ul.addEventListener("click", function (e) {
  if (e.target.className === "fas fa-times") {
    // console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
    e.preventDefault();
  }
});
