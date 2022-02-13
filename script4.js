//if-else statements and switch-case

const firstName = "Mert";
const age = 19;
const isStudent = true;
const school = "university";

if (firstName == "Mert") {
  console.log("Merhaba Mert");
}

// 20.04.2017 tarihinde trafiğe çıkan bir aracın servis bakım süreleri aşağıda verilmiştir. Bu bilgilere göre servis uyarısı veriniz. 1.bakım:1yıl,2.bakım:2yıl,3.bakım:3yıl

let releaseTheTraffic = new Date("04/20/2018");
// let dt = new Date();
let nowMS = Date.now();
let lastMaintenance =
  (nowMS - releaseTheTraffic.getTime()) / 1000 / 60 / 60 / 24 / 365;
console.log(lastMaintenance);

if (lastMaintenance >= 1 && lastMaintenance < 2) {
  console.log("1.bakım süresi gelmiş");
} else if (lastMaintenance >= 2 && lastMaintenance < 3) {
  console.log("2.bakım süresi gelmiş");
} else if (lastMaintenance >= 3 && lastMaintenance < 4) {
  console.log("3.bakım süresi gelmiş");
} else if (lastMaintenance >= 4) {
  console.log("son bakım süresi gelmiş");
} else {
  console.log("bakım süresi gelmemiş");
}

//örnek 2

// let result = prompt("who's there?");

// if (result == "cancel") {
//   console.log("cancelled");
// } else if (result == "Admin") {
//   console.log("welcome Admin");

//   var password = prompt("enter your password: ");

//   if (password == "cancel") {
//     console.log("cancelled");
//   } else if (password == "1234") {
//     console.log("welcome Admin");
//   } else {
//     console.log("wrong password");
//   }
// } else {
//   console.log("I dont know you");
// }

// Object Literals
let val;

let person = {
  firstName: "Çınar",
  lastName: "Turan",
  age: 7,
  hobbies: ["music", "game"],
  adress: {
    city: "Kocaeli",
    country: "Türkiye",
  },
  getBirthYear: function () {
    return 2022 - this.age;
  },
};
val = person;
val = person.firstName;
val = person.lastName;
val = person["firstName"];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.adress;
val = person.adress.city;
val = person.adress["city"];
val = person.getBirthYear();

let people = [
  { firstName: "Çınar", lastName: "Turan" },
  { firstName: "Sena", lastName: "Turan" },
  { firstName: "Seda", lastName: "Turan" },
];

// val = people[2];
// val = people[2].firstName;

for (let i = 0; i < people.length; i++) {
  console.log(people[i].firstName);
}

console.log(val);
console.log(typeof people);

//object literal ornek

let carInfo = {
    id:'bmw116d_123',
    model:'bmw 116',
    yil=2015,
    renk:'beyaz',
    serveLoad:[
        {
            id:'bmw116d_123_1',
            tarih:'20.01.2016',
            km:'13000',
            ucret:900,
            detay : [
                {
                    id:'bmw116d_123_1_1',
                    aciklama:'yağ değişim ücreti',
                    ucret:300

                },
                {
                    id:'bmw116d_123_1_2',
                    aciklama:'filtre değişim ücreti',
                    ucret:300

                } ,
                {
                    id:'bmw116d_123_1_3',
                    aciklama:'fren hidroliği değişim ücreti',
                    ucret:300

                }
            ]

        },
        {
            id:'bmw116d_123_2',
            tarih:'10.01.2017',
            km:'28000',
            ucret:1800,
            detay : [
                {
                    id:'bmw116d_123_2_1',
                    aciklama:'yağ değişim ücreti',
                    ucret:350

                },
                {
                    id:'bmw116d_123_2_2',
                    aciklama:'filtre değişim ücreti',
                    ucret:350

                },
                {
                    id:'bmw116d_123_2_3',
                    aciklama:'fren hidroliği değişim ücreti',
                    ucret:300

                },
                {
                    id:'bmw116d_123_2_2',
                    aciklama:'filtre değişim ücreti',
                    ucret:800

                }
            ]
        }
    ]
}


