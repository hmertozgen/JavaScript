// // const { Console } = require("console");

// console.log("Merhaba");
// console.error("Hata oluştu!");
// console.warn("Bir uyarı oluştu!");
// /*
// sdsad
// sadsad
// yorum satırları
// */

// //yorum satırı

// //Ders 2 Değişkenler

// // var age;
// // console.log(age);

// // age = 20;
// // console.log(age);

// // var fullname = `Sadık Turan`;
// // console.log(fullname);

// // fullname = `Çınar Turan`;
// // console.log(fullname);

// // //Değişkenler sayıyla başlayamaz, komut isimleriyle tanımlama yapılamaz, boşluk bırakılamaz

// // //var,let,const

// // let city = `Kocaeli`;
// // console.log(city);

// // const email = `abc@gmail.com`; //artık değiştirileme(const)

// // console.log(email);

// // //email = "sda@gmail.com";
// // //console.log(email);  HATA verdi

// // ---------------Ders 3 : Değişken tipleri------------

// // Primitive Types

// //string

// let firstName = `Mert`;
// console.log(typeof firstName);

// //Number
// let age = 20;
// let money = 100.5;

// console.log(typeof money);

// //Boolean
// let isActive = false;
// console.log(typeof isActive);

// //null

// let job = null;
// console.log(typeof job);

// //undefined
// let car;
// console.log(car);

// //Reference Types - Objects

// // Array

// let names = ["Ali", "Ahmet", "Can"];
// console.log(typeof names);

// //object

// let address = {
//   city: "Kocaeli",
//   country: "Türkiye",
// };
// console.log(typeof address);

// // Function

// var calculateAge = function () {
//   return 0;
// };
// console.log(typeof calculateAge);

// //***************** */
// // Ders-4: Tür Dönüşümü

// // let num1 = "5";
// // let num2 = "10";
// // console.log(typeof num1);
// // console.log(typeof num2);
// // console.log(num1 + num2);
// let num1 = Number("5");
// let num2 = Number("10");
// let total = num1 + num2;
// console.log(total);

// //String to number

// val = String(10);
// console.log(typeof val);
// console.log(val.length);
// val1 = String(true);
// console.log(typeof val1);

// //array to string

// val = String([1, 2, 3, 4]);

// //toString()

// // val = (10).toString();
// // val = false.toString();

// //String to Number

// val = Number("10");
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number("a");
// val = Number([1, 2, 3, 4]);

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

//parseInt
//parseFloat

// val = parseInt("10");
// val = parseInt("10.5");
// val = parseFloat("10.5");
// console.log(val);
// console.log(typeof val);

//******* Operatörler********/
// let val;
// const a = 10;
// const b = 5;
// const c = 5;
// let d = 3;

//1-Aritmetik operatörler

// val = a + b;
// val = a - b;
// val = a * b;
// val = a / b;
// val = a % b;
// val = d++;
// val = ++d;
// val = d--;
// val = --d;

//2- Atama operatörleri

// val += a;
// val -= a;
// val *= a;
// val /= a;
// val %= a;

//3-Karşılaştırma operatörleri

// val = a == b;
// val = b == c;
// val = b === c; //hem değer  hem type eşitliğine bakılır
// val = 5 == "5"; //true
// val = 5 === "5"; //false
//büyüktürler küçüktürler her dilde aynı

//4- Mantıksal operatörler

// && (AND)

// (a>b) && (a>c) //biri false gelsede sonuc false olur

// || (OR)

// (a>b) && (a>c) //biri bile true gelse sonuc true olur

// ! (Not)

//!true=false
//!false=true

// console.log(val);
// console.log(typeof val);
