// // Date Object

// let d = new Date();
// //Set Methods
// d.setFullYear(2020);
// d.setMonth(5);
// d.setDate(21);
// d.setHours(10);
// d.setMinutes(45);

// //Get Methods
// console.log(d.getDate());
// console.log(d.getDay()); // 0 pazar
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMonth()); //0 ocak
// console.log(d.getSeconds());

// console.log(d);
// console.log(typeof d);

// let birthday = new Date(1996, 8, 14);

// console.log(d.getFullYear() - birthday.getFullYear());
// console.log(d.getMonth() - birthday.getMonth());

//exercise

// let dt = new Date();

// console.log(`${dt.getMonth() + 1}  ${dt.getDate()}  ${dt.getFullYear()}`);

// let dtA = new Date("8/24/2010 14:50:10");
// let dtB = new Date(2010, 7, 24, 14, 50, 10);

// console.log(dtA);
// console.log(dtB);

//Numbers

// let val;

// val = 10;
// val = Number("10");
// val = parseInt("10");
// val = parseInt("10.5");
// val = parseInt("10a");
// val = parseInt("a10a");
// val = isNaN("10");
// val = isNaN("a10");

// let num = 10.12456789;
// val = num.toPrecision(6); //toplam 6 basamak
// val = num.toFixed(2); //virgülden sonra 2 basamak

// val = Math.PI;
// val = Math.round(2.4);
// val = Math.round(2.7);
// val = Math.ceil(2.4); //her zaman yukarı yuvarlanır
// val = Math.floor(2.7); //her zaman asağı yuvarlar

// val = Math.sqrt(9);
// val = Math.pow(2, 3);
// val = Math.round(2.7);
// val = Math.abs(-100);
// val = Math.min(1, 2, 3, 5, 6, 7, 8, 9, -1);
// val = Math.max(1, 2, 3, 5, 6, 7, 8, 9, -1);
// val = Math.floor(Math.random() * 100 + 1); //randomda 0 ile 1 arası verir

// console.log(val);
// console.log(typeof val);

//string uyg

var sentence =
  " Template Literals or template strings is ability Have multi-line strings without any funny business.  ";

var url = "http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye";

//cümle kaç karakterlidir.

console.log(sentence.length);

//kaç kelimeden oluşuyor

console.log(sentence.split(" ").length);

//tüm cümleyi küçük harfe çevirin

console.log(sentence.toLowerCase());

//cümlenin başındaki ve sonundaki boşlukları siliniz.

console.log(sentence.trim());

// '-' karakterini silin

console.log(sentence.replace("-", " "));

// url içinden str kısmını çıkarınız.

var str = "http://";
console.log(url.substring(0, str.length)); //0dan uzunluğa kadar
console.log(url.substr(0, str.length)); //0dan sonra uzunluk kadar

//url hangi protocol'u kullanmaktadır (http,https)

console.log(url.startsWith("http"));
console.log(url.startsWith("https"));

//url, '.com' ifadesini içeriyormu

console.log(url.indexOf(".com"));
console.log(url.includes(".com"));

console.log(
  url
    .toLowerCase()
    .replace(/ /g, "")
    .replace(/ı/g, "i")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
);
