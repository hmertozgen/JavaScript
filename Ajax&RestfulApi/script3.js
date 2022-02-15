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

//promise

var products = [
  { id: 1, name: "Samsung S8", price: 3000 },
  { id: 1, name: "Samsung S7", price: 2000 },
  { id: 1, name: "Samsung S6", price: 1000 },
];

let added = true;

function addProduct(prd, callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      products.push(prd);
      let added = true;

      if (added) {
        resolve();
      } else {
        reject("hata : 500");
      }
    });
  });
}

function getProducts() {
  setTimeout(() => {
    products.forEach((p) => {
      console.log(p.name);
    });
  }, 1000);
}

// addProduct({ id: 4, name: "Samsung S5", price: 500 }, getProducts);

addProduct({ id: 4, name: "Samsung S5", price: 500 })
  .then(getProducts)
  .catch(function (err) {
    console.log(err);
  });
