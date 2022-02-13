var models = [
  {
    name: "Bmw 418d",
    image: "img/bmw.jpg",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2017/coupe-420d-2-0-m-sport-at",
  },
  {
    name: "Mazda CX-3",
    image: "img/mazda.jpg",
    link: "http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-reflex",
  },
  {
    name: "Volvo S60",
    image: "img/volvo.jpg",
    link: "http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-premium",
  },
  {
    name: "Skoda Superb",
    image: "img/skoda.jpg",
    link: "http://www.arabalar.com.tr/skoda/superb/2021/1-5-tsi-comfort-plus-dsg",
  },
  {
    name: "Honda Civic",
    image: "img/honda.jpg",
    link: "http://www.arabalar.com.tr/honda/civic/2021/1-5-executive-plus-cvt",
  },
];

var index = 0;
let slaytCount = models.length;
let interval;
let settings = {
  duration: "2000",
  random: false,
};

init(settings);

document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);

    console.log(index);
  });

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function init(settings) {
  //setTimeout bir kere çalışır

  let prev;
  interval = setInterval(function () {
    if (settings.random) {
      //random index

      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
      // artan index
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }

    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }

  document.querySelector(".card-title").textContent = models[index].name;

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
