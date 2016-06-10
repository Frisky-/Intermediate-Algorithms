function myReplace(str, before, after) {
  if (before.charCodeAt(0) < 97) {
    after = after.split("");
    after.splice(0, 1, after[0].toUpperCase());
    after = after.join("");
  }
  var newStr = str.replace(before, after)
  console.log(newStr);
  return newStr;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
