// Arrow Functions

// //ES5

// let welcomeES5 = function () {
//   console.log("hello from ES5");
// };

// welcomeES5();

// // ES 6

// let welcomeES6 = () => {
//   console.log("Hello from ES6");
// };

// welcomeES6();

// // * * *with parameters

// //ES5
// let multiplyES5 = function (x, y) {
//   return x * y;
// };
// console.log(multiplyES5(5, 10));

// //ES6
// // let multiplyES6 = (x, y) => {
// //   return x * y;
// // };

// //yada
// let multiplyES6 = (x, y) => x * y;

// console.log(multiplyES6(5, 6));

// //ES5
// let splitES5 = function (text) {
//   return text.split(" ");
// };

// console.log(splitES5("Modern Javascript Kursu"));

// //ES 6

// let splitES6 = (text) => {
//   return text.split(" ");
// };

// console.log(splitES6("Modern Javascript Kursu"));

// let getProductsES5 = function (id, name) {
//   return {
//     id: id,
//     name: name,
//   };
// };

// console.log(getProductsES5("1", "Samsung S8"));

// //ES6

// let getProductsES6 = (id, name) => ({
//   id: id,
//   name: name,
// });

// console.log(getProductsES6("1", "Samsung S10"));

// //----

// const phones = [
//   { name: "IPhone 8", price: 3000 },
//   { name: "IPhone 6", price: 2000 },
//   { name: "IPhone 5", price: 1000 },
//   { name: "IPhone 7", price: 2500 },
// ];

// let pricesES5 = phones.map(function (phone) {
//   return phone.price;
// });

// console.log(pricesES5);

// //ES6

// let pricesES6 = phones.map((phone) => phone.price);

// console.log(pricesES6);

// //ES5

// const arr = [1, 2, 3, 6, 10, 20, 30, 50, 55, 61, 79];

// let evenES5 = arr.filter(function (a) {
//   return a % 2 == 0;
// });

// console.log(evenES5);

// //ES6

// let evenES6 = arr.filter((a) => a % 2 == 0);
// console.log(evenES6);

// 'this' Keyword

//ES5
// let list = {
//   category: "phone",
//   names: ["IPhone 8", "Samsung S8", "IPhone 7"],
//   call: function () {
//     var self = this;
//     this.names.map(function (name) {
//       console.log(`${self.category} ${name}`);
//     });
//   },
// };

// ES6
// let list = {
//   category: "phone",
//   names: ["IPhone 8", "Samsung S8", "IPhone 7"],
//   call: function () {
//     this.names.map((name) => {
//       console.log(`${this.category} ${name}`);
//     });
//   },
// };

// list.call();

//ES 5
// function Game() {
//   this.live = 0;
//   this.addLive = function () {
//     let self = this;

//     this.OneUp = setInterval(function () {
//       console.log(++self.live);
//     }, 1000);
//   };
// }

// let player = new Game();
// player.addLive();

//ES6

// function Game() {
//   this.live = 0;
//   this.addLive = function () {
//     this.OneUp = setInterval(() => {
//       console.log(++this.live);
//     }, 1000);
//   };
// }

// let player = new Game();
// player.addLive();

// Spread Operator

// function getTotal(a, b, c) {
//   return a + b + c;
// }

// console.log(getTotal(10, 20, 30));

// let numbers = [10, 20, 30];

// //ES5

// console.log(getTotal.apply(null, numbers));

// //ES6

// console.log(getTotal(...numbers));

// let arr1 = ["two", "three"];
// let arr2 = ["one", "four", "five"];

// // arr1.push(...arr2);
// // arr1.unshift(...arr2);

// let arr3 = ["one", ...arr1, "four", "five"];

// console.log(arr3);

// let h1 = document.querySelector("h1");
// let divs = document.querySelectorAll("div");

// let tags = [h1, ...divs];
// tags.forEach((tag) => (tag.style.color = "red"));

// console.log(tags);

// Rest Parameters

//ES5

// function sumES5() {
//   let arr = Array.prototype.slice.call(arguments);
//   console.log(arr);

//   let result = 0;

//   arr.forEach(function (item) {
//     result += item;
//   });
//   return result;
// }

// console.log(sumES5(10, 20, 30));

//ES6

// function sumES6(...arr) {
//   let result = 0;

//   arr.forEach((item) => (result += item));
//   return result;
// }

// console.log(sumES6(10, 20, 30));

// //ES6
// function isDriver(age, ...years) {
//   years.forEach((year) => console.log(2022 - year >= age));
// }

// isDriver(18, 2004, 1990, 2008, 1983, 2005);

// Destructuring

//Destructuring assignment
// var a, b, rest;

// [a, b] = [10, 20];
// console.log(a);
// console.log(b);

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a);
// console.log(b);
// console.log(rest);

// ({ a, b } = { a: 10, b: 20 });
// console.log(a);
// console.log(b);

// ({ a, b, ...rest } = { a: 10, b: 10, c: 30, d: 40 });
// console.log(a);
// console.log(b);
// console.log(rest);

//array destructuring

const arrConfig = ["localhost", "8080", "900"];

//ES5
// var server = arrConfig[0];
// var port = arrConfig[1];
// var timeout = arrConfig[2];

// console.log(server, port, timeout);

//ES6

// const [server, post, timeout] = arrConfig;

// console.log(server, post, timeout);

//object destructuring

// const objConfig = {
//   server: "localhost",
//   port: "9090",
//   timeout: 800,
// };

// var server = objConfig.server;
// var port = objConfig.port;
// var timeout = objConfig.timeout;
// console.log(server, port, timeout);

// const { server, port, timeout } = objConfig;
// console.log(server, port, timeout);

// let { timeout: t } = objConfig;

// console.log(t);

// let { server, port, timeout = 900 } = objConfig;

// console.log(server, port, timeout);

// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// const [, , wed, , fri] = days;

// console.log(wed, fri);

// * * * Arrays in ES&

const boxes = document.querySelectorAll(".box");

// let boxesES5 = Array.prototype.slice.call(boxes);

// boxesES5.forEach(function (box) {
//   box.style.backgrounColor = "green";
// });

// ES6

// Array.from(boxes).forEach((box) => (box.style.backgrounColor = "green"));

// console.log(boxes);

// ES5
// let boxesES5 = Array.prototype.slice.call(boxes);
// for (let i = 0; i < boxesES5.length; i++) {
//   if (boxesES5[i].className == "box blue") {
//     continue;
//   }
//   boxesES5[i].textContent = "I'm changed";
//   boxesES5[i].style.backgroundColor = "blue";
// }

//ES6

// var boxesES6 = Array.from(boxes);

// for (let box of boxesES6) {
//   if (box.className == "box blue") {
//     continue;
//   }
//   box.textContent = "I'm changed";
//   box.style.backgroundColor = "blue";
// }

// console.log(boxesES6);

// from

// let arr = Array.from("Modern Javascript");
// console.log(arr);

// const products = [
//   { name: "Samsung S8", price: 3000 },
//   { name: "Samsung S7", price: 2000 },
//   { name: "Samsung S6", price: 1000 },
// ];
// console.log(Array.from(products, (prd) => prd));
// console.log(Array.from(products, (prd) => prd.name));
// console.log(Array.from(products, (prd) => prd.name == "Samsung S8"));

// console.log(products.find((prd) => prd.name == "Samsung S8"));

// console.log(products.filter((prd) => prd.name == "Samsung S8"));

// console.log(products.findIndex((prd) => prd.price == 2000));

// let numbers = ["a", "b", "c"];
// let entriess = numbers.entries();

// for (let i of entriess) {
//   console.log(i);
// }

// let keys = numbers.keys();

// for (let i of keys) {
//   console.log(i);
// }

// let values = numbers.values();

// for (let i of values) {
//   console.log(i);
// }

// * * *Maps : key/value pairs (collection)

// let val;
// const numbers = new Map();

// numbers.set(1, "one");
// numbers.set("2", "two");
// numbers.set(3, "three");
// numbers.set("four", "four");

// val = numbers;
// val = numbers.get(1);
// val = numbers.get("2");
// val = numbers.get("four");
// val = numbers.size;
// val = numbers.has(1);
// val = numbers.delete("four");
// val = numbers.has("four");
// numbers.clear(); //hepsini sıfırlar

// console.log(val);

// for (var [key, value] of numbers) {
//   console.log(key + "=" + value);
// }

// for (var [key, value] of numbers.entries()) {
//   console.log(key + "=" + value);
// }

// for (var key of numbers.keys()) {
//   console.log(key);
// }

// for (var value of numbers.values()) {
//   console.log(value);
// }

// numbers.forEach(function (key, value) {
//   console.log(`${key} ${value}`);
// });

// var first = new Map([
//   [1, "one"],
//   [2, "two"],
//   [3, "three"],
// ]);

// var second = new Map([
//   [4, "four"],
//   [5, "five"],
// ]);

// var merged = new Map([...first, ...second]);

// console.log(merged);

// * * *Sets (Collection -Unique value)

// let val;
// var mySet = new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add(2);
// mySet.add(4);
// mySet.add("iki");
// mySet.add({ a: 1, b: 2 });

// var obj = { a: 1, b: 2 };

// mySet.add(obj); // ekler çünkü referansları farklı

// val = mySet.has(1);
// val = mySet.size;
// val = mySet.delete(1);

// console.log(val);
// console.log(mySet);

// for (let item of mySet) {
//   console.log(item);
// }

// for (let item of mySet.keys()) {
//   console.log(item);
// }

// //key ve valueler aynı değeri döndürür sette öyle
// for (let item of mySet.values()) {
//   console.log(item);
// }

// console.log(Array.from(mySet));

// let mySet2 = new Set([1, 2, 3, 4]);

// console.log(mySet2);

// // intersect

// // var intersect = new Set(Array.from(mySet).filter((x) => mySet2.has(x)));
// //alttakiyle üstteki aynı
// var intersect = new Set([...mySet].filter((x) => mySet2.has(x)));

// console.log(intersect);

// //difference

// var difference = new Set([...mySet].filter((x) => !mySet2.has(x)));

// console.log(difference);

//Classes

//ES5

// var PersonES5 = function (name, job, yearOfBirth) {
//   this.name = name;
//   this.job = job;
//   this.yearOfBirth = yearOfBirth;
// };

// PersonES5.prototype.calculateAge = function () {
//   return 2022 - this.yearOfBirth;
// };

// var yigit = new PersonES5("yiğit", "student", 2010);

// console.log(yigit.calculateAge());

// console.log(yigit);

// //ES6

// class PersonES6 {
//   constructor(name, job, yearOfBirth) {
//     this.name = name;
//     this.job = job;
//     this.yearOfBirth = yearOfBirth;
//   }

//   calculateAge() {
//     return 2022 - this.yearOfBirth;
//   }

//   static sayHi() {
//     console.log("Hello there");
//   }
// }

// let emel = new PersonES6("emel", "teacher", 1989);
// console.log(emel.calculateAge());

// console.log(emel);
// // emel.sayHi();//hata verir
// PersonES6.sayHi();

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy);
//   }
// }

// const d1 = new Point(10, 10);
// const d2 = new Point(20, 20);

// console.log(Point.distance(d1, d2));

//Sub Classes

//ES5

// function PersonES5(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName= lastName;
// }
// PersonES5.prototype.sayHi()=function(){
//     return `Hello I'm ${this.firstName} ${this.lastName}`;
// }

// function CustomerES5(firstName,lastName, phone,username){
//     PersonES5.call(this,firstName,lastName);
//     this.phone = phone;
//     this.username= username;
// }

// CustomerES5.prototype = Object.create(PersonES5.prototype);

// var customer=new CustomerES5('sena' ,'turan','1234567','senaturan');
// console.log(customer.sayHi());

//ES6

class PersonES6 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    return `Hello I'm ${this.firstName + " " + this.lastName}`;
  }
}

class CustomerES6 extends PersonES6 {
  constructor(firstName, lastName, phone, username) {
    super(firstName, lastName);
    this.phone = phone;
    this.username = username;
  }

  static getTotal() {
    return 1000;
  }
}

let customer1 = new CustomerES6(
  "volkan",
  "yükselen",
  "123321",
  "volkanyukselen"
);

console.log(customer1.sayHi());
console.log(customer1);
// console.log(customer1).getTotal();//hata
console.log(CustomerES6.getTotal());
