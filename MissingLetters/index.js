function fearNotLetter(str) {
  str = str.split("");
  var result = "";
  for (var i = 0; i < str.length - 1; i++) {
    if (str[i].charCodeAt() + 1 !== str[i + 1].charCodeAt()) {
      result = String.fromCharCode(str[i].charCodeAt() + 1);
    }
  }
  if (result === "") {
    console.log(undefined);
    return undefined;
  } else {
    console.log(result);
    return result;
  }
}

fearNotLetter("abce");
