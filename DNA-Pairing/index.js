function pairElement(str) {
  str = str.split("");
  result = [];
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "G":
        result.push(["G", "C"]);
        break;
      case "C":
        result.push(["C", "G"]);
        break;
      case "T":
        result.push(["T", "A"]);
        break;
      case "A":
        result.push(["A", "T"]);
    }
  }
  console.log(result);
  return result;
}

pairElement("GCG");
