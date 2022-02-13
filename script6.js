// Functions

// function yasHesapla(dogumYili) {
//   return 2021 - dogumYili;
// }
// let ageAda = yasHesapla(1996);
// let ageYigit = yasHesapla(1999);
// let ageCinar = yasHesapla(1983);

// console.log(ageCinar);

// function EmekliligeKacYilKaldi(dogumYili, isim) {
//   let yas = yasHesapla(dogumYili);
//   let emeklilik = 65 - yas;

//   if (emeklilik > 0) {
//     console.log(`${isim} Emekli olmanıza ${emeklilik} yıl kaldı`);
//   } else {
//     console.log("Emeklilik yaşınız geçmiş");
//   }
// }
// EmekliligeKacYilKaldi(1996, "Mert");

// Function Declarations

// function sum(a, b) {
//   var c = a + b;
//   return c;
// }
// console.log(sum(10, 20));

// Function Ezpressions

// const sum = function (a, b) {
//   if (typeof a === "undefined") {
//     a = 0;
//   }
//   if (typeof b === "undefined") {
//     a = 0;
//   }

//   var c = a + b;
//   return c;
// };

// const sum = function (a = 0, b = 0) {
// //  değer girmezsek default olan  değerler kullanılır
//   var c = a + b;
//   return c;
// };

// function args() {
//   console.log(arguments);
// }
// console.log(args(10, 20, 30));

// function sumAll() {
//   var total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

// console.log(sum(10, 20));
// console.log(sum(10, 20, 30));
// console.log(sum(10)); //NaN
// console.log(sumAll(10, 20, 30, 10, 30));

// Functions ornek
