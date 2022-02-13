// Loops

// for loop

// for (let i = 0; i <= 10; i++) {
//   if (i == 3) {
//     console.log("en sevdiğim rakam : " + i);
//     continue;
//   } else if (i == 6) {
//     console.log("en sevmediğim rakam 6");
//     break;
//   }
//   console.log(i);
// }

//while
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do-while loop
let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

let cars = ["Bmw", "Mercedes", "Toyota"];
let people = [
  { firstName: "Ada", lastName: "Bilgi" },
  { firstName: "Yiğit", lastName: "Bilgi" },
  { firstName: "Çınar", lastName: "Turan" },
];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// for-in

// for (let i in cars) {
//   console.log(`index : ${i} value : ${cars[i]}`);
// }

// for (let i in people) {
//   console.log(`index : ${i} value : ${people[i].firstName}`);
// }

//foreach
// cars.forEach(function (item) {
//   console.log(item);
// });

// people.forEach(function (item) {
//   console.log(item.lastName);
// });

//map : returns an array

// let val = people.map(function (item) {
//   return item.firstName + " " + item.lastName;
// });
// console.log(val);

// let numbers = [1, 5, 6, 8, 10];
// let num = numbers.map(function (n) {
//   return n * n;
// });

// console.log(num);

//   ******* Sayı Tahmin Oyunu *******

//1-10 arasında rastgele üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
//  ** puanlama yapın
//  ** kullanıcı kaç kerede bileceğini belirtebilsin

var randomNum = Math.floor(Math.random() * 10 + 1);

var hak = 5;
var guess;
var sayac = 0;

console.log(randomNum);

while (hak > 0) {
  guess = Number(prompt("1bir sayı giriniz."));
  if (guess == randomNum) {
    console.log(`${hak}. hakkınızda bildiniz.`);
    console.log(`puan: ${100 - 20 * (5 - `${hak}`)}`);
    break;
  } else if (randomNum < guess) {
    console.log(`${hak - 1} hakkınız kaldı. Aşağı inin`);
  } else if (randomNum > guess) {
    console.log(`${hak - 1} hakkınız kaldı. Yukarı çıkın`);
  }
  hak--;

  if (hak == 0) {
    console.log("Hakkınız bitti.");
  }
}
