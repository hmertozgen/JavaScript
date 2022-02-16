//callback()

// var products = [
//   { id: 1, name: "Samsung S8", price: 3000 },
//   { id: 1, name: "Samsung S7", price: 2000 },
//   { id: 1, name: "Samsung S6", price: 1000 },
// ];

// let added = true;

// function addProduct(prd, callback) {
//   if (added) {
//     setTimeout(() => {
//       products.push(prd);
//       callback(null, prd);
//     }, 2000);
//   } else {
//     callback("500", prd);
//   }
// }

// function getProducts() {
//   setTimeout(() => {
//     products.forEach((p) => {
//       console.log(p.name);
//     });
//   }, 1000);
// }

// // addProduct({ id: 4, name: "Samsung S5", price: 500 }, getProducts);

// addProduct({ id: 4, name: "Samsung S5", price: 500 }, function (err, data) {
//   if (err) {
//     console.log("hata :" + err);
//   } else {
//     console.log(data);
//   }
// });

// //promise

// var products = [
//   { id: 1, name: "Samsung S8", price: 3000 },
//   { id: 1, name: "Samsung S7", price: 2000 },
//   { id: 1, name: "Samsung S6", price: 1000 },
// ];

// let added = true;

// function addProduct(prd, callback) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       products.push(prd);
//       let added = true;

//       if (added) {
//         resolve();
//       } else {
//         reject("hata : 500");
//       }
//     });
//   });
// }

// function getProducts() {
//   setTimeout(() => {
//     products.forEach((p) => {
//       console.log(p.name);
//     });
//   }, 1000);
// }

// // addProduct({ id: 4, name: "Samsung S5", price: 500 }, getProducts);

// addProduct({ id: 4, name: "Samsung S5", price: 500 })
//   .then(getProducts)
//   .catch(function (err) {
//     console.log(err);
//   });

//* * *Promise example

/*
var p = new Promise(function (resolve, reject) {
  if (true) {
    resolve("success");
  } else {
    reject("Failure");
  }
});

p.then(function (data) {
  console.log(data);
}).catch(function (error) {
  console.log(error);
});
*/

//2.

/*
new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(5);
  }, 1000);
})
  .then(function (number) {
    console.log(number);
    return number * number;
  })
  .then(function (number) {
    console.log(number);
    return number * number;
  })
  .then(function (number) {
    console.log(number);
    return number * number;
  });
*/

//3.

// const isMomHappy = true;
// const willGetNewPhone = new Promise((resolve, reject) => {
//   if (isMomHappy) {
//     const phone = {
//       name: "IPhone 8",
//       price: 4000,
//       color: "silver",
//     };
//     resolve(phone);
//   } else {
//     const error = new Error("mom is not happy");
//     reject(error);
//   }
// });

// const showToFriends = function (phone) {
//   const message = "Hey friends this is my new phone " + phone.name;
//   return Promise.resolve(message);
// };

// const askMom = function () {
//   willGetNewPhone
//     .then(showToFriends)
//     .then((message) => {
//       console.log(message);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// askMom();

//* * * 4.

let myObj = {
  url: "https://randomuser.me/api/?results=5",
};

let request = (obj) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(obj.method || "GET", obj.url);

    if (xhr.header) {
      Object.keys[obj.headers].forEach((key) => {
        xhr.setRequestHeader(key, obj.headers[key]);
      });
    }
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.onerror = () => {
      reject(xhr.statusText);
    };
    xhr.send(obj.body);
  });
};

// request(myObj)
//   .then((data) => {
//     let users = JSON.parse(data);
//     let html = "";
//     users.results.forEach((user) => {
//       html += `
//       <div>
//         <img src="${user.picture.medium}">
//         <div>
//           ${user.name.title}
//           ${user.name.first}
//           ${user.name.last}

//         </div>
//       </div>

//       `;
//     });
//     document.querySelector("#users").innerHTML = html;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

let buildHtml = function (data) {
  let users = JSON.parse(data);
  let html = "";
  users.results.forEach((user) => {
    html += `
      <div>
        <img src="${user.picture.medium}">
        <div>
          ${user.name.title}
          ${user.name.first}
          ${user.name.last}

        </div>
      </div>
      
      `;
  });
  document.querySelector("#users").innerHTML = html;

  return Promise.resolve("Html is loaded");
};

request(myObj)
  .then(buildHtml)
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.log(error);
  });
