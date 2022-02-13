//Arrays

// let names = ["çınar", "sena", "ada", "yiğit"];

// let years = [2017, 1999, 2012, 2010, 2000];

// let mix = ["sadık", "turan", 1983, null, undefined, "sinema", "kitap"];

//get array item

// console.log(names[0]);
// console.log(names[3]);

//set array item

// names[names.length] = "emel";

//add item

// years.push(1986); //en sona ekler
// years.unshift(1986); // en başa ekler

//remove item

// years.pop(); //en sondaki eleman gider
// years.shift(); //en baştaki eleman gider.

//indexof

// let index = names.indexOf("ada");
// console.log("index : " + index);

// reverse-- ters çevirir
// names.reverse();

// sort --Z sıralama alfabetik olarak

// years.sort();

//concat -->birleştirme

// let val = years.concat(names);
// console.log(val);

//  splice ---> kaçıncı indexten baslayacak, kaç tane silinecek,ne eklenecek
// names.splice(2, 0, "seda");

//   find

//   filter

// function over18(year) {
//   let age = 2022 - year;
//   return age >= 18;
// }
// let val = years.find(over18); // 18 yaşından büyük olan ilk kişiyi bulur
// console.log(val);

// let val2 = years.filter(over18); //18 yaşından büyük olan herkesi getirir.
// console.log(val2);

// console.log(names);
// console.log(names.length);
// console.log(typeof names);

// console.log(years);

// console.log(mix);

//  ********** örnekler   *********

let arr = ["Bmw", "Mercedes", "Opel", "Mazda"];
// let arr = new Array("Bmw", "Mercedes", "Opel", "Mazda");

console.log(arr.length);

//dizinin ilk ve son elemanı hangisidir

console.log(
  `Dizinin ilk elemanı --> ${arr[0]}'dır ve dizinin son elemanı ---> ${
    arr[arr.length - 1]
  }`
);

// "Renault" değerini dizininn sonuna ekleyin

arr.push("Renault");
arr[arr.length] = "Porsche";

// "Toyota" değerini dizininn sonuna ekleyin

arr.unshift("Toyota");

// ilk değeri siliniz

arr.shift();

//son değeri siliniz.

arr.pop();

//dizi elemanlarını ters çevirin

arr.reverse();

//dizi elemanlarını alfabetik olarak sıralayın

arr.sort();

// [1,5,2,80,15] dizisini sıralayın

var numbers = [1, 5, 2, 80, 15];

console.log(numbers.sort()); //alfabetik sıra yaptı sayıya göre değil

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
console.log(numbers.sort(compare));

//opel değeri dizinin bir elemanı mıdır?

console.log(arr.includes("Opel"));

console.log(arr.indexOf("Opel"));

console.log(arr);

//let str="Chevrolet,Dacia"
//ifadesini diziye çeviriniz

let str = "Chevrolet,Dacia";
let arr2 = str.split(",");
console.log(arr2);

//Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin

let arr3;
arr3 = arr.concat(arr2);
console.log(arr3);

//oluşturulan diziden son 2 elemanı siliniz.

arr3.splice(arr3.length - 2, 2);
console.log(arr3);

var arr4 = arr3.slice(1, 3);
console.log(arr4);

/*  Aşağıda verilen elemanları bir dizi içerisinde saklayınız. 

    studentA  : Yiğit Bilgi 2010
    studentB  : Sena Turan 1999
    studentB  : Ahmet Turan 1998 

*/

let studentA = ["Yiğit", "Bilgi", 2010];
let studentB = ["Sena", "Turan", 1999];
let studentC = ["Ahmet", "Turan", 1998];

let students = [studentA, studentB, studentC];

console.log(students);
console.log(students[0]);
console.log(students[0][0]);
console.log(students[2][1]);
