// let val;
// let num = 10;
// val = num;

// //object literal
// let yigit = {
//   name: "yiğit",
//   yearOfBirth: 2010,
//   job: "student",
// };

// //array
// let numbers = [10, 20, 30];

// val = num;
// val = yigit;
// val = numbers;

// console.log(val);
// console.log(typeof val);

//object literal
// let yigit = {
//   name: "yiğit",
//   yearOfBirth: 2010,
//   job: "student",
// };

// * * * Constructor

// function Person(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;

//   this.calculateAge = function () {
//     return 2022 - this.yearOfBirth;
//   };
// }

// asagıdakiyle üstteki aynı

// let Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;

//   this.calculateAge = function () {
//     return 2022 - this.yearOfBirth;
//   };
// };

// let yigit = new Person("Yiğit", 2010, "student");
// let emel = new Person("Emel", 1989, "Teacher");

// console.log(yigit.name);
// console.log(yigit.yearOfBirth);
// console.log(yigit.job);
// console.log(yigit.calculateAge());

// console.log("****************");

// console.log(emel.name);
// console.log(emel.yearOfBirth);
// console.log(emel.job);
// console.log(emel.calculateAge());

// *  * ProtoType (inheritance) *  * //

// let Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calculateAge = function () {
//   return 2022 - this.yearOfBirth;
// }; // proto kısmına eklendi

// Person.prototype.getName = function () {
//   return this.name;
// };

// Person.prototype.lastName = "Turan";

// let emel = new Person("emel", 1989, "teacher");
// let yigit = new Person("yiğit", 2010, "student");
// console.log(emel);
// console.log(emel.calculateAge());
// console.log(emel.getName());
// console.log("*************");
// console.log(yigit);
// console.log(yigit.calculateAge());
// console.log(yigit.getName());

// console.log(emel.hasOwnProperty("name")); //objessi olanlara true döner
// console.log(emel.hasOwnProperty("lastName")); //protoype kısmına alınan özellikler false çünkü person'a ait zaten

// console.log(emel.lastName);
// console.log(yigit.lastName);

//  * * *Object.create * * *

// let personProto = {
//   calculateAge: function () {
//     return 2022 - this.yearOfBirth;
//   },
// };

// let yigit = Object.create(personProto);
// yigit.name = "yiğit";
// yigit.yearOfBirth = 2010;
// yigit.job = "student";

// let emel = Object.create(personProto, {
//   name: { value: "emel" },
//   yearOfBirth: { value: 1989 },
//   job: { value: "teacher" },
// });
// console.log(emel);
// console.log(emel.calculateAge());

// console.log(yigit);
// console.log(yigit.calculateAge());

//  * * *Prototypal Inheritance

// let Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calculateAge = function () {
//   return 2022 - this.yearOfBirth;
// };

// let Teacher = function (name, yearOfBirth, job, subject) {
//   Person.call(this, name, yearOfBirth, job); //this'e 3 özelliği Persondan kalıtım olarak aldık.
//   this.subject = subject;
// };

// *** Inherit the Person prototype methods

// Teacher.prototype = Object.create(Person.prototype);

// *** set Teacher constructor
// Teacher.prototype.constructor = Teacher;

// Teacher.prototype.greeting = function () {
//   return "hello my name is " + this.name;
// };

// let emel = new Teacher("emel", 1989, "teacher", "math");

// console.log(emel);
// console.log(emel.calculateAge());

// string

// var str1 = "Sadık";
// var str2 = new String("Sadık");

// console.log(str1);
// console.log(typeof str1);
// console.log(str2);
// console.log(typeof str2);

// if (str1 === "Sadık") {
//   console.log("yes");
// } else {
//   console.log("no");
// }
// // asağıdaki no gelir. çünkü type'ı object
// if (str2 === "Sadık") {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// String.prototype.repeat = function (n) {
//   return new Array(n + 1).join(this);
// };

// console.log("sadık".repeat(2));

// // Number

// var num1 = 10;
// var num2 = new Number(10);

// //Boolean

// var bool1 = true;
// var bool2 = new Boolean(true);

// //Object
// var obj1 = {
//   name: "sadık",
// };

// var obj2 = {
//   name: "sadık",
// };

// // Array

// var arr1 = ["ada", "yiğit", "sena", "çınar"];
// var arr2 = new Array("ada", "yiğit", "sena", "çınar");

// Array.prototype.remove = function (member) {
//   var index = this.indexOf(member);

//   if (index > -1) {
//     this.splice(index, 1);
//   }
//   return this;
// };

// console.log(arr1.remove("sena"));

// * * *Primitive & Objects differences

// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);

// var obj1 = {
//   name: "Ada",
//   age: 10,
// };

// var obj2 = obj1;

// obj1.age = 12;

// console.log(obj1.age);
// console.log(obj2.age);

// var num = 50;
// var account = {
//   name: "Yiğit",
//   accountNumber: "1213465",
// };

// function update(a, b) {
//   a = 100;
//   b.accountNumber = "2222222";
// }

// update(num, account);

// console.log(num); // 50 değişmedi primitive tip

// console.log(account); // account number değişti referans tip

// var products = [
//   { name: "product name", price: 1000 },
//   { name: "product name", price: 1000 },
//   { name: "product name", price: 1000 },
//   { name: "product name", price: 1000 },
//   { name: "product name", price: 1000 },
//   { name: "product name", price: 1000 },
// ];
// function filterProducts(prd) {}

// filterProducts(products);

// * * * Callback Functions

// let val;

// function MultipleByTwo(a, b, c, callback) {
//   let arr = [];

//   if (callback && typeof callback === "function") {
//     for (let i = 0; i < 3; i++) {
//       arr[i] = callback(arguments[i] * 2);
//     }
//   }
//   return arr;
// }

// function addOne(a) {
//   return a + 1;
// }

// function addTwo(a) {
//   return a + 2;
// }
// function addThree(a) {
//   return a + 3;
// }

// // val = MultipleByTwo(5, 10, 20, addOne);
// val = MultipleByTwo(5, 10, 20, function (a) {
//   return a + 15;
// });

// // val = addOne(10);

// // for (let i=0;i<val.length;i++){
// //   val[i] =addOne(val[i]);
// // } // fazladan for döngüsü oldu callback kullanırsak gerek kalmaz

// console.log(val);

// Immediate Functions

// function welcome() {
//   var days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   var today = new Date();

//   var msg = "Welcome. Today is " + days[today.getDay()];
//   return msg;
// }
// (function(){

// })();

// (function(){

// }());

// (function (name) {
//   var days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   var today = new Date();

//   var msg = "Welcome I am " + name + " Today is " + days[today.getDay()];
//   console.log(msg);
// })("çınar");

// // console.log(welcome());

// * * *Functions that Return Functions

// function Question(hobby) {
//   switch (hobby) {
//     case "car":
//       return function (name) {
//         console.log(name + " do you have a car ?");
//       };
//       break;

//     case "book":
//       return function (name) {
//         console.log(`${name} what is your favorite book?`);
//       };
//       break;

//     case "software":
//       return function (name, type) {
//         console.log(
//           `${name} what is your favorite software language? mine >> ${type}`
//         );
//       };
//       break;

//     default:
//       return function (name) {
//         console.log(`${name} How are you?`);
//       };
//   }
// }

// let carQuestion = Question("car");

// carQuestion("Mert");

// let bookQuestion = Question("book");

// bookQuestion("Yiğit");

// var softwareQuestion = Question("software");

// softwareQuestion("Mert", "Javascript");

// * * * Getter & Setter

// const person = {
//   firstName: "Sadık",
//   lastName: "Turan",
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   setFullName: function (value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// person.setFullName("Mert Özgen");
// console.log(person.getFullName());

// const person = {
//   firstName: "Sadık",
//   lastName: "Turan",
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

//yada

// const person = {
//   firstName: "Sadık",
//   lastName: "Turan",
// };

// Object.defineProperty(person, "fullName", {
//   get function() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set function(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
//   writable: true, //artık dışardan değiştirilebilir. set edilebilir.
// });

// Object.defineProperty(person, "age", {
//   value: 50,
//   writable: true, //artık dışardan değiştirilebilir. set edilebilir.
// });

// person.age = 55;

// person.fullName = "Mert Özgen";
// console.log(person.fullName);
// console.log(person);
// console.log(person.age);

// * * * Call,Ağğly &Bind

// var welcome = function (a, b) {
//   console.log(
//     "Welcome " + this.name + ".Are you interesten in " + a + " and " + b
//   );
// };

// var yigit = { name: "Yiğit" };
// var ada = { name: "Ada" };

// welcome.call(yigit, "asp.net", "angular");
// welcome.call(ada, "asp.net", "angular");

// welcome.apply(yigit, ["asp.net", "angular"]);
// welcome.apply(ada, ["asp.net", "angular"]);

// welcomeYigit = welcome.bind(yigit);
// welcomeYigit("asp.net", "angular");
// welcomeAda = welcome.bind(ada);
// welcomeAda("asp.net", "angular");

// * * *Demo :Numeric Range

var num = {
  min: 0,
  max: 100,
  checkNumericRange: function (value) {
    if (typeof value !== "number") {
      return false;
    } else {
      return value >= this.min && value <= this.max;
    }
  },
};

console.log(num.checkNumericRange(20));
console.log(num.checkNumericRange(-20));

var num1 = { min: 50, max: 60 };

console.log(num.checkNumericRange.call(num1, 55));
console.log(num.checkNumericRange.call(num1, 65));

console.log(num.checkNumericRange.apply(num1, [52]));

var checkNumber = num.checkNumericRange.bind(num1);
console.log(checkNumber(56));
