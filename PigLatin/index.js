function translatePigLatin(str) {
  str = str.split("");
  var newStr = "";
  var consonantCount = 0;
  while (str[0].charCodeAt() !== 97 && str[0].charCodeAt() !== 101 && str[0].charCodeAt() !== 105 && str[0].charCodeAt() !== 111 && str[0].charCodeAt() !== 117) {
    str.push(str[0]);
    str.shift();
    consonantCount++;
  }
  if (consonantCount !== 0) {
    newStr += str.join("") + "ay"
  } else {
    newStr += str.join("") + "way";
  }

  return newStr;
}

translatePigLatin("consonant");
