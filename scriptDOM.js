// let val;

// val = window.document;
// val = document.all;
// val = document.all.length;
// val = document.all[10];
// val = document.head;
// val = document.body;
// val = document.anchors;
// val = document.URL;
// val = document.domain;
// val = document.images;
// val = document.title;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.scripts;
// val = document.scripts[2];
// val = document.scripts[2].getAttribute("src");

// console.log(val);

//Selecting Elements

//  *** Single Elements
// let val;
// val = document.getElementById("header");
// val = document.getElementById("header").id;
// val = document.getElementById("header").className;

// val = document.getElementById("header");
// // val = val.id;
// // val = val.className;

// val.style.fontSize = "45px";
// val.style.fontWeight = "bold";
// val.style.color = "red";

// val = document.getElementById("header").innerText = "my ToDo App";

// val = document.getElementById("header").innerHTML = "<b>my ToDo App</b>"; //inner htmlde html kodları eklenebilir innertextten farklı olarak

// console.log(val);

//  *document.querySelector()*

// console.log(document.querySelector("#header")); //id ye göre

// console.log(document.querySelector(".card-header")); //class'a göre bulduğu ilk bu classa sahip eleman

// console.log(document.querySelector("div")); //ilk divi seçer

// document.querySelector("li").style.color = "red";
// document.querySelector("li:last-child").style.color = "blue";
// document.querySelector("li:nth-child(2)").style.color = "yellow";

// document.querySelector("li:nth-child(3)").textContent = "Task item";
// document.querySelector("li:nth-child(2)").textContent = "Task item";

// document.querySelector("li").className =
//   "list-group-item list-group-item-primary";
// //var olan classlarda değişiklik yaptık
// document.querySelector("li").classList.add("active");
//olan classların üstüne yeni bir class ekledik.

//  *** Multiple Elements

//class name
//document.getElementsByClassName()

// let val;
// val = document.getElementsByClassName("list-group-item");

// val = document.getElementsByClassName("list-group-item")[0];
// val = document.getElementsByClassName("list-group-item")[2];
//yada
// val = val[2];

// val[1].style.color = "blue";
// val[1].style.fontSize = "25px";
// val[2].textContent = "new item";

// for (let i = 0; i < val.length; i++) {
//   console.log((val[i].style.color = "red"));
//   console.log((val[i].textContent = "new item"));
// }

//document.getElementByTagName()

// val = document.getElementsByTagName("li");
// val = document.getElementById("task-list");
// val = val.getElementsByTagName("a"); yada
// val = document.getElementById("task-list").getElementsByTagName("a");

//document.querySelectorAll()
// val = document.querySelectorAll("li");

// val.forEach(function (item, index) {
//   item.textContent = `${index} - hello`;
// });

// val = document.querySelectorAll("li:nth-child(even)");

// val.forEach(function (item) {
//   item.style.background = "#ccc";
// });

// console.log(val);

// let val;

// let list = document.querySelector(".list-group");

// val = list;

// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;
// val = list.childNodes[1].nodeType;

// val = list.children; // text boşlukları gelmez bunda
// val = list.children[0];
// val = list.children[2];

// val = list.children[2].textContent = "new item";
// val = list.children[3].children;

// val = list.firstChild;
// val = list.firstElementChild;

// val = list.lastChild;
// val = list.lastElementChild;

// val = list.childElementCount;

// val = list.parentNode;
// val = list.parentElement; //1 üst eleman
// val = list.parentElement.parentElement; //2 üst sınıf

// val = list.children[0].nextSibling; //aynı sınıf bir sonraki eleman
// val = list.children[0].nextElementSibling;

// val = list.children[1].previousSibling; //aynı sınıf bir sonraki eleman
// val = list.children[1].previousElementSibling;

// console.log(val);

// for (let i = 0; i < list.children.length; i++) {
//   console.log(list.children[i]);
// }

// // yukardaki de aşağıdaki de aynı sonucu verir, aşağıdakinin '==3' lü versiyonuda sadece textleri verir.
// for (let i = 0; i < list.childNodes.length; i++) {
//   if (list.childNodes[i].nodeType == 1) {
//     console.log(list.childNodes[i]);
//   }
// }

// Creating Elements

// create element

// const li = document.createElement("li");

// // add class

// li.className = "list-group-item list-group-item-secondary";

// // set attribute
// li.setAttribute("title", "new item");
// li.setAttribute("data-id", "5");

// //text node

// const text = document.createTextNode("new item");
// li.appendChild(text);

// const a = document.createElement("a");
// a.setAttribute("href", "#");
// a.className = "delete-item float-right";
// a.innerHTML = '<i class="fas fa-times"></i>';

// // append a to li
// li.appendChild(a);

// // append li to ul
// document.querySelector("#task-list").appendChild(li);

// console.log(li);

// silme değiştirme

// const taskList = document.querySelector("#task-list");

//    *****removing element

// taskList.remove(); //direkt ul nesnesini siler

// taskList.childNodes[7].remove(); // 7.elemanı siler

// taskList.children[3].remove(); //3. elementi siler

// taskList.removeChild(taskList.children[0])

//  ****removing attribute

// taskList.children[0].removeAttribute("class"); // attribute unu sildik

// for (let i = 0; i < taskList.children.length; i++) {
//   taskList.children[i].removeAttribute("class");
// }

// console.log(taskList);

// //  ***Replacing Elements

// const cardHeader = document.querySelector(".card-header");

// // create element

// const h2 = document.createElement("h2");
// h2.setAttribute("class", "card-header");
// h2.appendChild(document.createTextNode("My List"));

// const parent = document.querySelector(".card");
// parent.replaceChild(h2, cardHeader);

// console.log(cardHeader);

//   *** Classes

const taskList = document.querySelector("#task-list");

let val;
link = taskList.children[0].children[0];

// val = link.className;
// val = link.classList;
// val = link.classList[1];

// link.classList.add("new");
// link.classList.remove("new");
console.log(link);

// Attributes

val = link.getAttribute("class");
val = link.getAttribute("data-id");
val = link.setAttribute("href", "http://sadikturan.com");
val = link.hasAttribute("href"); //özellik var mı ?

console.log(val);
