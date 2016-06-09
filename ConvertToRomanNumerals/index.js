function convertToRoman(num) {
  var romanNumbers = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  var numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  numbers.sort(function(a, b) {
    return b - a;
  })
  romanNumbers.reverse();
  var number = num;
  var result = "";
  while (number > 0) {
    for (var i = 0; i < numbers.length; i++) {
      if (number >= numbers[i]) {
        number -= numbers[i];
        result += romanNumbers[i];
        i--;
      }
    }
  }
  console.log(result);

  return result;
}

var test = [2, 3, 4, 5, 9, 12, 16, 29, 44, 45, 68, 83, 97, 99, 500, 501, 649, 798, 891, 1000, 1004, 1006, 1023, 2014, 3999];
for (var i = 0; i < test.length; i++) {
  convertToRoman(test[i]);
}
