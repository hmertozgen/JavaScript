// LOCAL STORAGE  --- tarayıcı kapansada bilgielr durur.
let val;
//set item

const firstName = localStorage.setItem("firstName", "Sadık");

const lastName = localStorage.setItem("lastName", "Turan");

let hobies = ["sinema", "araba", "gezmek"];
// get item
val = localStorage.getItem("firstName");
val = localStorage.getItem("lastName");

//remove item
// localStorage.removeItem("firstName");
// localStorage.removeItem("lastName");

// clear

// localStorage.clear();

// set array to storage

// localStorage.setItem("hobies", hobies); //string şeklinde saklar
localStorage.setItem("hobies", JSON.stringify(hobies)); //object şeklinde saklar

val = JSON.parse(localStorage.getItem("hobies"));

console.log(val);
console.log(localStorage);

// SESSION STORAGE--tarayıcı kapnınca bilgiler gider
// const city = sessionStorage.setItem("city", "Kocaeli");
// const countrry = sessionStorage.setItem("country", "Türkiye");

// console.log(sessionStorage);
