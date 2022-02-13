function LetterCountI(str) {
  str.toLowerCase();

  var arr = str.split(" ");

  var count = 0;
  var word = "-1";

  for (var i = 0; i < arr.length; i++) {
    for (var a = 0; a < arr[i].length; a++) {
      var countNew = 0;
      for (var b = a + 1; b < arr[i].length; b++) {
        if (arr[i][a] === arr[i][b]) countNew += 1;
      }
      if (countNew > count) {
        count = countNew;
        word = arr[i];
      }
    }
    return word;
  }
}

// keep this function call here
console.log(LetterCountI(prompt()));
